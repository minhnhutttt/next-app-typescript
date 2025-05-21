import { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import { MatrixEffectOptions, MouseTrailPoint } from '../types/matrixEffect';

// Texture path helper for Next.js public folder
const getTexturePath = (path: string): string => {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/textures/${path}`;
};

const useMatrixEffect = (
  canvasRef: React.RefObject<HTMLCanvasElement>,
  options: Partial<MatrixEffectOptions> = {}
) => {
  const [initialized, setInitialized] = useState<boolean>(false);
  const sceneRef = useRef<{
    scene?: THREE.Scene;
    camera?: THREE.PerspectiveCamera;
    renderer?: THREE.WebGLRenderer;
    plane?: THREE.Mesh<THREE.PlaneGeometry, THREE.ShaderMaterial>;
    material?: THREE.ShaderMaterial;
    raycaster?: THREE.Raycaster;
    texture?: THREE.Texture;
    cleanupFn?: () => void;
    frameId?: number;
  }>({});
  
  // Animation and state variables
  const stateRef = useRef<{
    mouse: THREE.Vector2;
    uvCoords: THREE.Vector2;
    mouseTrail: MouseTrailPoint[];
    mouseTrailVectors: THREE.Vector3[];
    isMouseMoving: boolean;
    lastMouseMoveTime: number;
    prevTimestamp: number;
    smoothTime: number;
    lastMouseMoveProcessed: number;
    lastRaycasterUpdate: number;
  }>({
    mouse: new THREE.Vector2(),
    uvCoords: new THREE.Vector2(0.5, 0.5),
    mouseTrail: [],
    mouseTrailVectors: [],
    isMouseMoving: false,
    lastMouseMoveTime: 0,
    prevTimestamp: 0,
    smoothTime: 0,
    lastMouseMoveProcessed: 0,
    lastRaycasterUpdate: 0
  });

  // Initialize shader and scene
  useEffect(() => {
    if (!canvasRef.current || initialized) return;
    
    // Detect low performance devices
    const isLowPerfDevice = 
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
      (window.devicePixelRatio < 1.5 && navigator.hardwareConcurrency <= 4);
    
    // Constants and settings
    const TRAIL_LENGTH = isLowPerfDevice ? 10 : 20;
    const MOUSE_THROTTLE = isLowPerfDevice ? 50 : 16;
    const RAYCASTER_THROTTLE = isLowPerfDevice ? 100 : 50;
    const TIME_SMOOTHING = 0.98;
    
    // Initialize Three.js objects
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      35, 
      window.innerWidth / window.innerHeight, 
      0.1, 
      100
    );
    camera.position.set(0, 0, 16);
    scene.add(camera);
    
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
      pixelRatio: Math.min(window.devicePixelRatio, isLowPerfDevice ? 1 : 2)
    };
    
    // Initialize Raycaster
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    
    // Initialize mouse trail vectors
    const mouseTrailVectors: THREE.Vector3[] = [];
    for (let i = 0; i < TRAIL_LENGTH; i++) {
      mouseTrailVectors.push(new THREE.Vector3(0, 0, -1));
    }
    
    // Update state references
    stateRef.current = {
      ...stateRef.current,
      mouse,
      mouseTrailVectors,
      prevTimestamp: 0,
      smoothTime: 0
    };
    
    // Initialize WebGL renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: !isLowPerfDevice,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setClearColor(0x000000, 1);
    renderer.setPixelRatio(sizes.pixelRatio);
    
    // Shader code
    const optimizedFragmentShader = `
      uniform float iTime;
      uniform sampler2D iTexture;
      uniform vec2 iResolution;
      uniform vec2 iTextureSize;
      uniform vec2 iMouse;
      uniform vec3 iMouseTrail[${TRAIL_LENGTH}]; // x, y, thời gian
      uniform float iLastMoveTime; // Thời gian cuối cùng chuột di chuyển
      uniform float iIsMouseMoving; // Trạng thái chuột (1 = đang di chuyển, 0 = đã dừng)
      varying vec2 vUv;
      
      // Hàm hash ổn định để tạo giá trị ngẫu nhiên nhưng không thay đổi giữa các frame
      float hash(float n) {
          return fract(sin(n) * 43758.5453);
      }
      
      // Hàm tạo số ngẫu nhiên dựa trên tọa độ - ổn định
      float random(vec2 st) {
          // Đảm bảo kết quả ngẫu nhiên nhưng ổn định giữa các frame
          return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
      }
      
      // Hàm nội suy mượt mà với cubic spline
      float smootherStep(float edge0, float edge1, float x) {
          // Nội suy mượt hơn smoothstep
          x = clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);
          return x * x * x * (x * (x * 6.0 - 15.0) + 10.0);
      }
      
      // Hàm noise cải tiến với nội suy mượt mà hơn
      float smoothNoise(vec2 st) {
          vec2 i = floor(st);
          vec2 f = fract(st);
          
          // Sử dụng cubic nội suy cho kết quả mượt mà hơn
          vec2 u = f * f * (3.0 - 2.0 * f);
          
          float a = random(i);
          float b = random(i + vec2(1.0, 0.0));
          float c = random(i + vec2(0.0, 1.0));
          float d = random(i + vec2(1.0, 1.0));
          
          return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
      }
      
      // Hàm tính vị trí dòng chảy - nhanh hơn và dài hơn
      float calculateFlowPosition(int columnIndex, float time) {
          // Sử dụng hash để tạo offset ngẫu nhiên nhưng ổn định cho mỗi cột
          float seed = hash(float(columnIndex));
          
          // Tăng tốc độ dòng chảy lên đáng kể (từ 0.05 lên 0.12)
          float speed = 0.12 + seed * 0.08; // Tăng tốc độ chảy và thêm biến thiên
          
          // Offset thời gian ngẫu nhiên nhưng ổn định cho mỗi cột
          float timeOffset = seed * 10.0;
          
          // Tính vị trí dòng chảy - sử dụng modulo lớn hơn để đảm bảo dòng chảy dài hơn
          float yPos = mod(time * speed + timeOffset, 3.0); // Tăng modulo từ 2.0 lên 3.0
          
          // Giới hạn vị trí trong khoảng (0, 1)
          return 1.0 - yPos * 0.33; // Điều chỉnh từ 0.5 xuống 0.33 để dòng chảy dài hơn
      }
      
      void main() {
          // Tối ưu: Sử dụng texture có thể lặp lại (repeatable)
          vec2 tiledUv = vUv * iResolution / iTextureSize;
          
          // Làm mượt chuyển động của texture nền - cực kỳ chậm và ổn định
          float textureMovementSpeed = 0.02;
          vec2 movedUv = tiledUv + vec2(
              sin(iTime * textureMovementSpeed) * 0.05, 
              cos(iTime * textureMovementSpeed) * 0.05
          );
          
          movedUv = fract(movedUv);
          
          // Lấy màu từ texture
          vec4 textureColor = texture2D(iTexture, movedUv);
          
          // Chia màn hình thành lưới các cột dọc - thu nhỏ kích thước cột để có nhiều cột hơn
          float columnWidth = 0.005; // Giảm từ 0.01 xuống 0.008 để có nhiều cột hơn
          int columnIndex = int(vUv.x / columnWidth);
          
          // Tính toán vị trí dòng chảy ổn định không bị chớp
          float flowY = calculateFlowPosition(columnIndex, iTime);
          
          // Tính toán độ dài đuôi - dài hơn nhiều
          float seed = hash(float(columnIndex));
          float tailLength = 0.15 + seed * 0.1; // Tăng độ dài từ 0.1-0.2 lên 0.25-0.45
          
          // Xác định vùng dòng chảy
          float streamTop = flowY;
          float streamBottom = flowY + tailLength;
          
          // Tính alpha cho hiệu ứng chảy
          float alpha = 0.0;
          
          if (vUv.y > streamTop && vUv.y < streamBottom) {
              // Tính gradient mượt mà không thay đổi giữa các frame
              float gradientPos = (vUv.y - streamTop) / (streamBottom - streamTop);
              float alphaGradient = 1.0 - gradientPos;
              alphaGradient = smootherStep(0.0, 1.0, alphaGradient); // Sử dụng hàm nội suy mượt mà
              
              // Tạo mẫu pixel dày đặc hơn
              float pixelSeed = random(vec2(floor(vUv.y * 60.0), float(columnIndex))); // Tăng từ 40.0 lên 60.0
              
              // Alpha cuối cùng - ổn định, không thay đổi ngẫu nhiên
              alpha = alphaGradient * 0.3; // Tăng từ 0.6 lên 0.7 để hiển thị rõ hơn
              
              // Hiệu ứng pixel rời rạc NHƯNG ổn định - không thay đổi theo thời gian
              if (pixelSeed > 0.35) { // Giảm ngưỡng để có nhiều pixel hiển thị hơn
                  alpha *= 0.9;
              } else {
                  alpha *= 0.5; // Giảm xuống để tạo độ tương phản cao hơn nhưng không chớp
              }
              
              // Thêm hiệu ứng gradient dọc cho phần đầu dòng chảy để làm nổi bật
              if (vUv.y > streamTop && vUv.y < streamTop + 0.05) {
                  alpha *= 1.2; // Tăng độ sáng ở đầu dòng
              }
          }
          
          // Đảm bảo alpha không bị chớp nháy
          alpha = smoothstep(0.0, 0.1, alpha) * alpha; // Loại bỏ giá trị alpha nhỏ để ngăn chớp nháy
          
          // Kết quả từ hiệu ứng pixel chảy
          vec4 finalColor = vec4(textureColor.rgb, alpha);
          
          // Tương tác chuột
          vec3 cursorColor = vec3(1.0, 0.7, 0.0); // Màu vàng
          float cursorRadius = 0.04;
          float cursorAlpha = 0.0;
          
          // Tính thời gian kể từ lần di chuyển cuối và hệ số mờ dần
          float timeSinceLastMove = iTime - iLastMoveTime;
          float fadeFactor = iIsMouseMoving > 0.5 ? 1.0 : max(0.0, 1.0 - (timeSinceLastMove / 1.5));
          
          // Xử lý vị trí chuột hiện tại với chuyển động mượt
          float cursorDist = distance(vUv, iMouse);
          if(cursorDist < cursorRadius) {
              float mainCursorAlpha = (1.0 - cursorDist / cursorRadius) * 0.8 * fadeFactor;
              cursorAlpha = max(cursorAlpha, mainCursorAlpha);
          }
          
          // Xử lý đuôi chuột mượt mà
          #ifdef LOW_PERF_DEVICE
          for(int i = 0; i < 10; i += 1) {
          #else
          for(int i = 0; i < ${TRAIL_LENGTH}; i += 1) {
          #endif
              vec3 trailData = iMouseTrail[i];
              if(trailData.z < 0.0) continue;
              
              vec2 trailPos = trailData.xy;
              float trailTime = trailData.z;
              float trailDist = distance(vUv, trailPos);
              
              // Hiệu ứng mờ dần của đuôi
              float timeAlive = iTime - trailTime;
              float timeFactor = max(0.0, 1.0 - (timeAlive / 2.0));
              timeFactor = smoothstep(0.0, 1.0, timeFactor); // Nội suy mượt mà
              
              // Độ mờ dần theo vị trí trong đuôi
              float trailFactor = 1.0 - float(i) / float(${TRAIL_LENGTH});
              trailFactor = max(0.3, trailFactor);
              trailFactor = smoothstep(0.3, 1.0, trailFactor); // Nội suy mượt mà
              
              float trailRadius = cursorRadius * (0.5 + trailFactor * 0.5);
              
              if(trailDist < trailRadius) {
                  float distFactor = 1.0 - trailDist / trailRadius;
                  distFactor = smoothstep(0.0, 1.0, distFactor); // Nội suy mượt mà
                  
                  float currentTrailAlpha = distFactor * trailFactor * timeFactor * 0.7 * fadeFactor;
                  cursorAlpha = max(cursorAlpha, currentTrailAlpha);
              }
          }
          
          // Trộn màu gốc với màu chuột
          finalColor.rgb = mix(finalColor.rgb, cursorColor, cursorAlpha);
          finalColor.a = max(finalColor.a, cursorAlpha);
          
          gl_FragColor = finalColor;
      }
    `;
    
    const vertexShader = `
      varying vec2 vUv;
      
      void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;
    
    // Handle Mouse Movement (with TypeScript type safety)
    const onMouseMove = (event: MouseEvent) => {
      const currentTime = performance.now();
      
      // Throttle mouse events
      if (currentTime - stateRef.current.lastMouseMoveProcessed < MOUSE_THROTTLE) return;
      stateRef.current.lastMouseMoveProcessed = currentTime;
      
      // Get normalized mouse coordinates
      const rect = renderer.domElement.getBoundingClientRect();
      stateRef.current.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      stateRef.current.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      
      // Update mouse state
      stateRef.current.lastMouseMoveTime = performance.now() * 0.001;
      stateRef.current.isMouseMoving = true;
    };
    
    // Load texture with Next.js handling
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(
      getTexturePath('pattern.jpg'),
      (texture) => {
        // Optimize texture
        texture.generateMipmaps = false;
        texture.minFilter = THREE.LinearFilter;
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        
        const originalWidth = texture.image.width;
        const originalHeight = texture.image.height;
        
        // Create full screen plane
        const geometry = new THREE.PlaneGeometry(
          window.innerWidth / 100,
          window.innerHeight / 100
        );
        
        // Material defines for performance levels
        const materialDefines: { [key: string]: string } = {};
        if (isLowPerfDevice) materialDefines.LOW_PERF_DEVICE = '';
        
        // Create shader material
        const material = new THREE.ShaderMaterial({
          defines: materialDefines,
          transparent: true,
          uniforms: {
            iTime: { value: 0 },
            iTexture: { value: texture },
            iResolution: { 
              value: new THREE.Vector2(window.innerWidth, window.innerHeight) 
            },
            iTextureSize: {
              value: new THREE.Vector2(originalWidth, originalHeight)
            },
            iMouse: { value: stateRef.current.uvCoords },
            iMouseTrail: { value: stateRef.current.mouseTrailVectors },
            iLastMoveTime: { value: 0 },
            iIsMouseMoving: { value: 0 }
          },
          vertexShader,
          fragmentShader: optimizedFragmentShader
        });
        
        // Create mesh
        const plane = new THREE.Mesh(geometry, material);
        plane.position.z = 5;
        scene.add(plane);
        
        // Animation loop with smooth timing
        let frameId: number = 0;
        
        const animate = (timestamp: number) => {
          frameId = requestAnimationFrame(animate);
          
          // Calculate delta time
          const currentTime = timestamp * 0.001;
          const deltaTime = stateRef.current.prevTimestamp === 0
            ? 0.016
            : currentTime - stateRef.current.prevTimestamp;
          
          stateRef.current.prevTimestamp = currentTime;
          
          // Cap delta to prevent jumps
          const cappedDelta = Math.min(deltaTime, 0.05);
          
          // Smooth time transitions
          stateRef.current.smoothTime = stateRef.current.smoothTime * TIME_SMOOTHING + 
            currentTime * (1 - TIME_SMOOTHING);
          
          // Update shader uniforms
          material.uniforms.iTime.value = stateRef.current.smoothTime;
          
          // Check mouse state
          if (stateRef.current.isMouseMoving &&
              currentTime - stateRef.current.lastMouseMoveTime > 0.1) {
            stateRef.current.isMouseMoving = false;
          }
          
          // Update mouse uniforms
          material.uniforms.iLastMoveTime.value = stateRef.current.lastMouseMoveTime;
          material.uniforms.iIsMouseMoving.value = stateRef.current.isMouseMoving ? 1.0 : 0.0;
          
          // Throttle raycaster for performance
          if (timestamp - stateRef.current.lastRaycasterUpdate > RAYCASTER_THROTTLE) {
            stateRef.current.lastRaycasterUpdate = timestamp;
            
            raycaster.setFromCamera(stateRef.current.mouse, camera);
            const intersects = raycaster.intersectObject(plane);
            
            if (intersects.length > 0 && intersects[0].uv) {
              const uv = intersects[0].uv;
              
              // Smooth mouse movement with lerp
              stateRef.current.uvCoords.x = stateRef.current.uvCoords.x * 0.8 + uv.x * 0.2;
              stateRef.current.uvCoords.y = stateRef.current.uvCoords.y * 0.8 + uv.y * 0.2;
              
              // Handle mouse trail
              const now = stateRef.current.smoothTime;
              const lastPointTime = stateRef.current.mouseTrail.length > 0 
                ? stateRef.current.mouseTrail[0].time 
                : 0;
              const timeSinceLastPoint = now - lastPointTime;
              
              const lastPos = stateRef.current.mouseTrail.length > 0 
                ? new THREE.Vector2(
                    stateRef.current.mouseTrail[0].x, 
                    stateRef.current.mouseTrail[0].y
                  ) 
                : new THREE.Vector2(-1, -1);
              
              const distanceMoved = lastPos.distanceTo(
                new THREE.Vector2(stateRef.current.uvCoords.x, stateRef.current.uvCoords.y)
              );
              const minDistance = 0.001;
              
              // Add new point to trail when necessary
              if ((timeSinceLastPoint > 0.03 && distanceMoved > minDistance) || 
                  timeSinceLastPoint > 0.1) {
                
                stateRef.current.mouseTrail.unshift({
                  x: stateRef.current.uvCoords.x,
                  y: stateRef.current.uvCoords.y,
                  time: now
                });
                
                // Limit trail length
                if (stateRef.current.mouseTrail.length > TRAIL_LENGTH) {
                  stateRef.current.mouseTrail.pop();
                }
              }
            }
          }
          
          // Update mouse position uniform
          material.uniforms.iMouse.value.copy(stateRef.current.uvCoords);
          
          // Update mouse trail efficiently
          for (let i = 0; i < TRAIL_LENGTH; i++) {
            if (i < stateRef.current.mouseTrail.length) {
              const entry = stateRef.current.mouseTrail[i];
              stateRef.current.mouseTrailVectors[i].set(entry.x, entry.y, entry.time);
            } else {
              stateRef.current.mouseTrailVectors[i].set(0, 0, -1);
            }
          }
          
          // Render scene
          renderer.render(scene, camera);
        };
        
        // Start animation
        animate(0);
        
        // Register mouse events
        renderer.domElement.addEventListener('mousemove', onMouseMove);
        
        // Handle window resize with debounce
        let resizeTimeout: NodeJS.Timeout;
        const handleResize = () => {
          if (resizeTimeout) clearTimeout(resizeTimeout);
          
          resizeTimeout = setTimeout(() => {
            // Update sizes
            sizes.width = window.innerWidth;
            sizes.height = window.innerHeight;
            sizes.pixelRatio = Math.min(window.devicePixelRatio, isLowPerfDevice ? 1 : 2);
            
            // Update material uniforms
            if (material) {
              material.uniforms.iResolution.value.set(
                sizes.width * sizes.pixelRatio, 
                sizes.height * sizes.pixelRatio
              );
            }
            
            // Update camera
            camera.aspect = sizes.width / sizes.height;
            camera.updateProjectionMatrix();
            
            // Update renderer
            renderer.setSize(sizes.width, sizes.height);
            renderer.setPixelRatio(sizes.pixelRatio);
          }, 100);
        };
        
        window.addEventListener('resize', handleResize);
        
        // Cleanup function
        const cleanup = () => {
          if (frameId) {
            cancelAnimationFrame(frameId);
          }
          
          if (plane) {
            scene.remove(plane);
            geometry.dispose();
            material.dispose();
          }
          
          if (texture) {
            texture.dispose();
          }
          
          renderer.domElement.removeEventListener('mousemove', onMouseMove);
          window.removeEventListener('resize', handleResize);
          renderer.dispose();
        };
        
        // Store references for cleanup
        sceneRef.current = {
          scene,
          camera,
          renderer,
          plane,
          material,
          raycaster,
          texture,
          cleanupFn: cleanup,
          frameId
        };
        
        setInitialized(true);
      },
      undefined,
      (error) => {
        console.error('Error loading texture:', error);
      }
    );
  }, [canvasRef, initialized]);

  // Return the cleanup function
  return { 
    cleanup: sceneRef.current.cleanupFn,
    initialized 
  };
};

export default useMatrixEffect;