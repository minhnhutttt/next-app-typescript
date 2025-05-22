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
    donut?: THREE.Mesh<THREE.TorusGeometry, THREE.MeshBasicMaterial>;
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
    performanceLevel: number;
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
    lastRaycasterUpdate: 0,
    performanceLevel: 1
  });

  // Performance monitoring
  const performanceRef = useRef<{
    frameCount: number;
    lastFPSCheck: number;
    currentFPS: number;
    adaptiveQuality: number;
  }>({
    frameCount: 0,
    lastFPSCheck: 0,
    currentFPS: 60,
    adaptiveQuality: 1.0
  });

  // Initialize shader and scene
  useEffect(() => {
    if (!canvasRef.current || initialized) return;
    
    // Advanced device detection
    const getDevicePerformanceLevel = (): number => {
      const userAgent = navigator.userAgent;
      const hardwareConcurrency = navigator.hardwareConcurrency || 4;
      const devicePixelRatio = window.devicePixelRatio || 1;
      const screenSize = window.innerWidth * window.innerHeight;
      
      // Mobile devices
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
        return hardwareConcurrency >= 8 ? 2 : 1; // High-end mobile vs low-end mobile
      }
      
      // Desktop devices
      if (hardwareConcurrency >= 8 && devicePixelRatio >= 1.5 && screenSize >= 1920 * 1080) {
        return 3; // High performance
      } else if (hardwareConcurrency >= 4) {
        return 2; // Medium performance
      }
      
      return 1; // Low performance
    };
    
    const performanceLevel = getDevicePerformanceLevel();
    stateRef.current.performanceLevel = performanceLevel;
    
    // Performance-based constants
    const getPerformanceSettings = (level: number) => {
      switch (level) {
        case 3: // High performance
          return {
            TRAIL_LENGTH: 25,
            MOUSE_THROTTLE: 8,
            RAYCASTER_THROTTLE: 16,
            PIXEL_RATIO_MAX: 2,
            ANTIALIAS: true,
            ACTIVE_TRAIL_COUNT: 25
          };
        case 2: // Medium performance
          return {
            TRAIL_LENGTH: 15,
            MOUSE_THROTTLE: 16,
            RAYCASTER_THROTTLE: 33,
            PIXEL_RATIO_MAX: 1.5,
            ANTIALIAS: true,
            ACTIVE_TRAIL_COUNT: 15
          };
        default: // Low performance
          return {
            TRAIL_LENGTH: 8,
            MOUSE_THROTTLE: 33,
            RAYCASTER_THROTTLE: 66,
            PIXEL_RATIO_MAX: 1,
            ANTIALIAS: false,
            ACTIVE_TRAIL_COUNT: 8
          };
      }
    };
    
    const settings = getPerformanceSettings(performanceLevel);
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
      pixelRatio: Math.min(window.devicePixelRatio, settings.PIXEL_RATIO_MAX)
    };
    
    // Initialize Raycaster
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    
    // Initialize mouse trail vectors with performance-based length
    const mouseTrailVectors: THREE.Vector3[] = [];
    for (let i = 0; i < settings.TRAIL_LENGTH; i++) {
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
      antialias: settings.ANTIALIAS,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setClearColor(0x000000, 1);
    renderer.setPixelRatio(sizes.pixelRatio);
    
    // Optimized Fragment Shader with dynamic loop unrolling
    const createOptimizedFragmentShader = (trailLength: number, activeTrailCount: number) => `
      uniform float iTime;
      uniform sampler2D iTexture;
      uniform vec2 iResolution;
      uniform vec2 iTextureSize;
      uniform vec2 iMouse;
      uniform vec3 iMouseTrail[${trailLength}];
      uniform float iLastMoveTime;
      uniform float iIsMouseMoving;
      uniform float iActiveTrailCount; // Dynamic trail count
      varying vec2 vUv;
      
      // Optimized hash function
      float hash(float n) {
          return fract(sin(n) * 43758.5453);
      }
      
      // Optimized random function with reduced precision for performance
      float random(vec2 st) {
          return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
      }
      
      // Faster smoothstep alternative
      float fastSmoothstep(float edge0, float edge1, float x) {
          x = clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);
          return x * x * (3.0 - 2.0 * x); // Simplified cubic
      }
      
      // Optimized noise with early termination
      float fastNoise(vec2 st) {
          vec2 i = floor(st);
          vec2 f = fract(st);
          vec2 u = f * f * (3.0 - 2.0 * f);
          
          float a = random(i);
          float b = random(i + vec2(1.0, 0.0));
          float c = random(i + vec2(0.0, 1.0));
          float d = random(i + vec2(1.0, 1.0));
          
          return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
      }
      
      // Cached flow position calculation
      float calculateFlowPosition(int columnIndex, float time) {
          float seed = hash(float(columnIndex));
          float speed = 0.12 + seed * 0.08;
          float timeOffset = seed * 10.0;
          float yPos = mod(time * speed + timeOffset, 3.0);
          return 1.0 - yPos * 0.33;
      }
      
      void main() {
          // Tiled UV with reduced precision
          vec2 tiledUv = vUv * iResolution / iTextureSize;
          
          // Slower texture movement for performance
          float textureMovementSpeed = 0.015; // Reduced from 0.02
          vec2 movedUv = tiledUv + vec2(
              sin(iTime * textureMovementSpeed) * 0.03, // Reduced amplitude
              cos(iTime * textureMovementSpeed) * 0.03
          );
          movedUv = fract(movedUv);
          
          // Sample texture
          vec4 textureColor = texture2D(iTexture, movedUv);
          
          // Matrix rain effect (unchanged for visual quality)
          float columnWidth = 0.005;
          int columnIndex = int(vUv.x / columnWidth);
          float flowY = calculateFlowPosition(columnIndex, iTime);
          float seed = hash(float(columnIndex));
          float tailLength = 0.15 + seed * 0.1;
          
          float streamTop = flowY;
          float streamBottom = flowY + tailLength;
          float alpha = 0.0;
          
          if (vUv.y > streamTop && vUv.y < streamBottom) {
              float gradientPos = (vUv.y - streamTop) / (streamBottom - streamTop);
              float alphaGradient = 1.0 - gradientPos;
              alphaGradient = fastSmoothstep(0.0, 1.0, alphaGradient);
              
              float pixelSeed = random(vec2(floor(vUv.y * 50.0), float(columnIndex))); // Reduced from 60.0
              alpha = alphaGradient * 0.3;
              
              if (pixelSeed > 0.35) {
                  alpha *= 0.9;
              } else {
                  alpha *= 0.5;
              }
              
              if (vUv.y > streamTop && vUv.y < streamTop + 0.05) {
                  alpha *= 1.2;
              }
          }
          
          alpha = fastSmoothstep(0.0, 0.1, alpha) * alpha;
          vec4 finalColor = vec4(textureColor.rgb, alpha);
          
          // Optimized mouse interaction
          vec3 cursorColor = vec3(1.0, 0.7, 0.0);
          float cursorRadius = 0.04;
          float cursorAlpha = 0.0;
          
          float timeSinceLastMove = iTime - iLastMoveTime;
          float fadeFactor = iIsMouseMoving > 0.5 ? 1.0 : max(0.0, 1.0 - (timeSinceLastMove / 1.5));
          
          // Main cursor
          float cursorDist = distance(vUv, iMouse);
          if(cursorDist < cursorRadius) {
              float mainCursorAlpha = (1.0 - cursorDist / cursorRadius) * 0.8 * fadeFactor;
              cursorAlpha = max(cursorAlpha, mainCursorAlpha);
          }
          
          // OPTIMIZED TRAIL PROCESSING - Dynamic loop with early termination
          int activeCount = int(min(iActiveTrailCount, float(${trailLength})));
          
          // Unrolled loop for better performance on different devices
          ${performanceLevel >= 3 ? `
          // High performance: Full trail processing
          for(int i = 0; i < ${trailLength}; i++) {
              if(i >= activeCount) break;
              
              vec3 trailData = iMouseTrail[i];
              if(trailData.z < 0.0) continue;
              
              vec2 trailPos = trailData.xy;
              float trailTime = trailData.z;
              float trailDist = distance(vUv, trailPos);
              
              float timeAlive = iTime - trailTime;
              float timeFactor = max(0.0, 1.0 - (timeAlive / 2.0));
              timeFactor = fastSmoothstep(0.0, 1.0, timeFactor);
              
              float trailFactor = 1.0 - float(i) / float(activeCount);
              trailFactor = max(0.3, trailFactor);
              trailFactor = fastSmoothstep(0.3, 1.0, trailFactor);
              
              float trailRadius = cursorRadius * (0.5 + trailFactor * 0.5);
              
              if(trailDist < trailRadius) {
                  float distFactor = 1.0 - trailDist / trailRadius;
                  distFactor = fastSmoothstep(0.0, 1.0, distFactor);
                  
                  float currentTrailAlpha = distFactor * trailFactor * timeFactor * 0.7 * fadeFactor;
                  cursorAlpha = max(cursorAlpha, currentTrailAlpha);
              }
          }
          ` : performanceLevel >= 2 ? `
          // Medium performance: Reduced trail processing
          for(int i = 0; i < ${Math.min(settings.TRAIL_LENGTH, 12)}; i++) {
              if(i >= activeCount) break;
              
              vec3 trailData = iMouseTrail[i];
              if(trailData.z < 0.0) continue;
              
              vec2 trailPos = trailData.xy;
              float trailDist = distance(vUv, trailPos);
              
              float trailFactor = 1.0 - float(i) / float(activeCount);
              trailFactor = max(0.4, trailFactor); // Simplified calculation
              
              float trailRadius = cursorRadius * (0.6 + trailFactor * 0.4);
              
              if(trailDist < trailRadius) {
                  float distFactor = 1.0 - trailDist / trailRadius;
                  float currentTrailAlpha = distFactor * trailFactor * 0.6 * fadeFactor;
                  cursorAlpha = max(cursorAlpha, currentTrailAlpha);
              }
          }
          ` : `
          // Low performance: Minimal trail processing
          for(int i = 0; i < ${Math.min(settings.TRAIL_LENGTH, 6)}; i++) {
              if(i >= activeCount) break;
              
              vec3 trailData = iMouseTrail[i];
              if(trailData.z < 0.0) continue;
              
              vec2 trailPos = trailData.xy;
              float trailDist = distance(vUv, trailPos);
              
              if(trailDist < cursorRadius) {
                  float currentTrailAlpha = (1.0 - trailDist / cursorRadius) * 0.5 * fadeFactor;
                  cursorAlpha = max(cursorAlpha, currentTrailAlpha);
              }
          }
          `}
          
          // Final color mixing
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
    
    // Handle Mouse Movement with adaptive throttling
    const onMouseMove = (event: MouseEvent) => {
      const currentTime = performance.now();
      
      // Adaptive throttling based on current FPS
      const adaptiveThrottle = performanceRef.current.currentFPS < 30 
        ? settings.MOUSE_THROTTLE * 2 
        : settings.MOUSE_THROTTLE;
      
      if (currentTime - stateRef.current.lastMouseMoveProcessed < adaptiveThrottle) return;
      stateRef.current.lastMouseMoveProcessed = currentTime;
      
      const rect = renderer.domElement.getBoundingClientRect();
      stateRef.current.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      stateRef.current.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      
      stateRef.current.lastMouseMoveTime = performance.now() * 0.001;
      stateRef.current.isMouseMoving = true;
    };
    
    // Load texture with Next.js handling
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(
      getTexturePath('pattern.jpg'),
      (texture) => {
        texture.generateMipmaps = false;
        texture.minFilter = THREE.LinearFilter;
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        
        const originalWidth = texture.image.width;
        const originalHeight = texture.image.height;
        
        const geometry = new THREE.PlaneGeometry(
          window.innerWidth / 100,
          window.innerHeight / 100
        );
        
        // Create shader material with performance-optimized shader
        const material = new THREE.ShaderMaterial({
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
            iIsMouseMoving: { value: 0 },
            iActiveTrailCount: { value: settings.ACTIVE_TRAIL_COUNT }
          },
          vertexShader,
          fragmentShader: createOptimizedFragmentShader(settings.TRAIL_LENGTH, settings.ACTIVE_TRAIL_COUNT)
        });
        
        const plane = new THREE.Mesh(geometry, material);
        plane.position.z = 5;
        scene.add(plane);

        // Add donut with performance considerations
        const donutGeometry = new THREE.TorusGeometry(2, 0.5, 
          performanceLevel >= 2 ? 16 : 8, 
          performanceLevel >= 2 ? 32 : 16
        );
        const donutMaterial = new THREE.MeshBasicMaterial({ 
          color: 0x00ff88, 
          wireframe: true,
          transparent: true,
          opacity: 0.7
        });
        const donut = new THREE.Mesh(donutGeometry, donutMaterial);
        donut.position.z = 1;
        scene.add(donut);
        
        // Performance monitoring and adaptive quality
        const updatePerformanceMetrics = (timestamp: number) => {
          performanceRef.current.frameCount++;
          
          if (timestamp - performanceRef.current.lastFPSCheck > 1000) {
            performanceRef.current.currentFPS = performanceRef.current.frameCount;
            performanceRef.current.frameCount = 0;
            performanceRef.current.lastFPSCheck = timestamp;
            
            // Adaptive quality adjustment
            if (performanceRef.current.currentFPS < 25) {
              performanceRef.current.adaptiveQuality = Math.max(0.5, performanceRef.current.adaptiveQuality - 0.1);
              // Reduce active trail count
              const newTrailCount = Math.max(3, Math.floor(settings.ACTIVE_TRAIL_COUNT * performanceRef.current.adaptiveQuality));
              material.uniforms.iActiveTrailCount.value = newTrailCount;
            } else if (performanceRef.current.currentFPS > 50) {
              performanceRef.current.adaptiveQuality = Math.min(1.0, performanceRef.current.adaptiveQuality + 0.05);
              const newTrailCount = Math.min(settings.ACTIVE_TRAIL_COUNT, Math.floor(settings.ACTIVE_TRAIL_COUNT * performanceRef.current.adaptiveQuality));
              material.uniforms.iActiveTrailCount.value = newTrailCount;
            }
          }
        };
        
        // Optimized animation loop
        let frameId: number = 0;
        
        const animate = (timestamp: number) => {
          frameId = requestAnimationFrame(animate);
          
          // Update performance metrics
          updatePerformanceMetrics(timestamp);
          
          const currentTime = timestamp * 0.001;
          const deltaTime = stateRef.current.prevTimestamp === 0
            ? 0.016
            : currentTime - stateRef.current.prevTimestamp;
          
          stateRef.current.prevTimestamp = currentTime;
          const cappedDelta = Math.min(deltaTime, 0.05);
          
          stateRef.current.smoothTime = stateRef.current.smoothTime * TIME_SMOOTHING + 
            currentTime * (1 - TIME_SMOOTHING);
          
          material.uniforms.iTime.value = stateRef.current.smoothTime;
          
          if (stateRef.current.isMouseMoving &&
              currentTime - stateRef.current.lastMouseMoveTime > 0.1) {
            stateRef.current.isMouseMoving = false;
          }
          
          material.uniforms.iLastMoveTime.value = stateRef.current.lastMouseMoveTime;
          material.uniforms.iIsMouseMoving.value = stateRef.current.isMouseMoving ? 1.0 : 0.0;
          
          // Adaptive raycaster throttling
          const adaptiveRaycasterThrottle = performanceRef.current.currentFPS < 30 
            ? settings.RAYCASTER_THROTTLE * 2 
            : settings.RAYCASTER_THROTTLE;
          
          if (timestamp - stateRef.current.lastRaycasterUpdate > adaptiveRaycasterThrottle) {
            stateRef.current.lastRaycasterUpdate = timestamp;
            
            raycaster.setFromCamera(stateRef.current.mouse, camera);
            const intersects = raycaster.intersectObject(plane);
            
            if (intersects.length > 0 && intersects[0].uv) {
              const uv = intersects[0].uv;
              
              stateRef.current.uvCoords.x = stateRef.current.uvCoords.x * 0.8 + uv.x * 0.2;
              stateRef.current.uvCoords.y = stateRef.current.uvCoords.y * 0.8 + uv.y * 0.2;
              
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
              
              if ((timeSinceLastPoint > 0.03 && distanceMoved > minDistance) || 
                  timeSinceLastPoint > 0.1) {
                
                stateRef.current.mouseTrail.unshift({
                  x: stateRef.current.uvCoords.x,
                  y: stateRef.current.uvCoords.y,
                  time: now
                });
                
                if (stateRef.current.mouseTrail.length > settings.TRAIL_LENGTH) {
                  stateRef.current.mouseTrail.pop();
                }
              }
            }
          }
          
          material.uniforms.iMouse.value.copy(stateRef.current.uvCoords);
          
          // Optimized trail update - only update active trails
          const activeTrailCount = Math.min(
            stateRef.current.mouseTrail.length,
            Math.floor(material.uniforms.iActiveTrailCount.value)
          );
          
          for (let i = 0; i < settings.TRAIL_LENGTH; i++) {
            if (i < activeTrailCount) {
              const entry = stateRef.current.mouseTrail[i];
              stateRef.current.mouseTrailVectors[i].set(entry.x, entry.y, entry.time);
            } else {
              stateRef.current.mouseTrailVectors[i].set(0, 0, -1);
            }
          }
          
          // Rotate donut for visual appeal
          donut.rotation.x += 0.01 * performanceRef.current.adaptiveQuality;
          donut.rotation.y += 0.02 * performanceRef.current.adaptiveQuality;
          
          renderer.render(scene, camera);
        };
        
        animate(0);
        renderer.domElement.addEventListener('mousemove', onMouseMove);
        
        // Optimized resize handler
        let resizeTimeout: NodeJS.Timeout;
        const handleResize = () => {
          if (resizeTimeout) clearTimeout(resizeTimeout);
          
          resizeTimeout = setTimeout(() => {
            sizes.width = window.innerWidth;
            sizes.height = window.innerHeight;
            sizes.pixelRatio = Math.min(window.devicePixelRatio, settings.PIXEL_RATIO_MAX);
            
            if (material) {
              material.uniforms.iResolution.value.set(
                sizes.width * sizes.pixelRatio, 
                sizes.height * sizes.pixelRatio
              );
            }
            
            camera.aspect = sizes.width / sizes.height;
            camera.updateProjectionMatrix();
            
            renderer.setSize(sizes.width, sizes.height);
            renderer.setPixelRatio(sizes.pixelRatio);
          }, 150); // Increased debounce time
        };
        
        window.addEventListener('resize', handleResize);
        
        const cleanup = () => {
          if (frameId) {
            cancelAnimationFrame(frameId);
          }
          
          if (plane) {
            scene.remove(plane);
            geometry.dispose();
            material.dispose();
          }
          
          if (donut) {
            scene.remove(donut);
            donutGeometry.dispose();
            donutMaterial.dispose();
          }
          
          if (texture) {
            texture.dispose();
          }
          
          renderer.domElement.removeEventListener('mousemove', onMouseMove);
          window.removeEventListener('resize', handleResize);
          renderer.dispose();
        };
        
        sceneRef.current = {
          scene,
          camera,
          renderer,
          plane,
          donut,
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

  return { 
    cleanup: sceneRef.current.cleanupFn,
    initialized 
  };
};

export default useMatrixEffect;