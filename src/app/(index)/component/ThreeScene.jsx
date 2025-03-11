'use client';

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

const ThreeAnimation = () => {
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const pointsMeshRef = useRef(null);
  const planeRef = useRef(null);
  const materialRef = useRef(null);
  const raycasterRef = useRef(new THREE.Raycaster());
  const mouseRef = useRef(new THREE.Vector2());
  const uvCoordsRef = useRef(new THREE.Vector2(0.5, 0.5));
  const mouseTrailRef = useRef([]);
  const clockRef = useRef(new THREE.Clock());
  const isInitializedRef = useRef(false);
  const lastMouseMoveTimeRef = useRef(0);
  const isMouseMovingRef = useRef(false);

  // Constants
  const TRAIL_LENGTH = 20;
  const initialPosition = { x: 0, y: -2, z: 0 };
  const initialPositionCamera = { x: 0, y: 0, z: -5 };
  const moveFactor = 0.05;

  useEffect(() => {
    // Only initialize once
    if (isInitializedRef.current) return;
    isInitializedRef.current = true;

    // Get canvas element
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Initialize scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Initialize sizes
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight
    };

    // Initialize camera
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
    camera.position.set(0, 0, -5);
    scene.add(camera);
    cameraRef.current = camera;

    // Create point material (shader)
    const pointMaterial = new THREE.ShaderMaterial({
      vertexShader: `
        uniform vec2 uResolution;
        uniform float uSize;
        uniform vec3 uHoverPosition; // Vị trí chuột

        varying float vDistance;

        void main() {
            vec4 modelPosition = modelMatrix * vec4(position, 1.0);

            // Tính khoảng cách từ điểm đến uHoverPosition
            float distanceToHover = distance(modelPosition.xyz, uHoverPosition);

            // Hiệu ứng bung nhẹ: đẩy điểm ra xa nếu gần chuột
            float pushStrength = smoothstep(1.5, 0.0, distanceToHover); // Cường độ hiệu ứng
            vec3 normal = normalize(modelPosition.xyz - uHoverPosition); // Hướng pháp tuyến
            modelPosition.xyz += normal * pushStrength * 0.05; // Đẩy điểm ra xa

            // Chuyển đổi vị trí điểm sang không gian view và projection
            vec4 viewPosition = viewMatrix * modelPosition;
            vec4 projectedPosition = projectionMatrix * viewPosition;
            gl_Position = projectedPosition;

            // Point size
            gl_PointSize = uSize * uResolution.y;
            gl_PointSize *= (1.0 / -viewPosition.z);

            // Truyền khoảng cách đến fragment shader
            vDistance = distanceToHover;
        }
      `,
      fragmentShader: `
        varying float vDistance;
        void main() {
          vec2 uv = gl_PointCoord;
          float distanceToCenter = length(uv - vec2(0.5));

          if(distanceToCenter > 0.5)
              discard;
          float intensity = smoothstep(0.0, 2.0, vDistance); // Mượt hiệu ứng
          vec4 color = mix(vec4(1.0, 0.7, 0.0, 1.0), vec4(0.1,0.1,0.1,1.0), intensity); // Trộn màu vàng
          gl_FragColor = vec4(color);

          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }
      `,
      uniforms: {
        uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        uSize: { value: 0.04 },
        uHoverPosition: { value: new THREE.Vector3(100, 100, 100) } // Giá trị ban đầu xa khỏi model
      }
    });

    // Initialize renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setClearColor(0x000000, 1);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current = renderer;

    // Helper functions for point creation
    function isPointInTriangle(p, a, b, c) {
      const d1 = sign(p, a, b);
      const d2 = sign(p, b, c);
      const d3 = sign(p, c, a);

      const hasNeg = (d1 < 0) || (d2 < 0) || (d3 < 0);
      const hasPos = (d1 > 0) || (d2 > 0) || (d3 > 0);

      return !(hasNeg && hasPos);
    }

    function sign(p1, p2, p3) {
      return (p1.x - p3.x) * (p2.y - p3.y) - (p2.x - p3.x) * (p1.y - p3.y);
    }

    function getBarycentricCoordinates(p, a, b, c, posA, posB, posC) {
      const v0 = new THREE.Vector2(b.x - a.x, b.y - a.y);
      const v1 = new THREE.Vector2(c.x - a.x, c.y - a.y);
      const v2 = new THREE.Vector2(p.x - a.x, p.y - a.y);

      const denom = v0.x * v1.y - v1.x * v0.y;
      const v = (v2.x * v1.y - v1.x * v2.y) / denom;
      const w = (v0.x * v2.y - v2.x * v0.y) / denom;
      const u = 1.0 - v - w;

      // Calculate 3D position
      const point = new THREE.Vector3();
      point.x = u * posA.x + v * posB.x + w * posC.x;
      point.y = u * posA.y + v * posB.y + w * posC.y;
      point.z = u * posA.z + v * posB.z + w * posC.z;

      return point;
    }

    function createUniformPointsWithUV(geometry, pointsPerUnitArea) {
      const positions = geometry.attributes.position.array;
      const uvs = geometry.attributes.uv.array;
      const numVertices = positions.length / 3;
      let pointPositions = [];

      // Create uniform grid in UV space
      const gridSize = Math.sqrt(pointsPerUnitArea);
      for (let u = 0; u < gridSize; u++) {
        for (let v = 0; v < gridSize; v++) {
          const uv = new THREE.Vector2(u / gridSize, v / gridSize);

          // Find triangle containing this UV
          for (let i = 0; i < numVertices; i += 3) {
            const uvA = new THREE.Vector2(uvs[i * 2], uvs[i * 2 + 1]);
            const uvB = new THREE.Vector2(uvs[(i + 1) * 2], uvs[(i + 1) * 2 + 1]);
            const uvC = new THREE.Vector2(uvs[(i + 2) * 2], uvs[(i + 2) * 2 + 1]);

            if (isPointInTriangle(uv, uvA, uvB, uvC)) {
              const a = new THREE.Vector3(positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2]);
              const b = new THREE.Vector3(positions[(i + 1) * 3], positions[(i + 1) * 3 + 1], positions[(i + 1) * 3 + 2]);
              const c = new THREE.Vector3(positions[(i + 2) * 3], positions[(i + 2) * 3 + 1], positions[(i + 2) * 3 + 2]);

              // Calculate 3D position from UV
              const point = getBarycentricCoordinates(uv, uvA, uvB, uvC, a, b, c);
              pointPositions.push(point.x, point.y, point.z);
              break;
            }
          }
        }
      }

      return pointPositions;
    }

    // Load OBJ model
    const loader = new OBJLoader();
    
    // In Next.js, you need to use public folder path
    loader.load('/models/letters_simple_a.obj', (object) => {
      object.traverse((child) => {
        if (child.isMesh) {
          const geometry = child.geometry;

          // Create uniform points on the surface using UV mapping
          const pointsPerUnitArea = 10000;
          const pointPositions = createUniformPointsWithUV(geometry, pointsPerUnitArea);

          // Create BufferGeometry and Points
          const pointGeometry = new THREE.BufferGeometry();
          pointGeometry.setAttribute('position', new THREE.Float32BufferAttribute(pointPositions, 3));

          const pointsMesh = new THREE.Points(pointGeometry, pointMaterial);
          pointsMesh.position.set(0, -2, 0);
          pointsMesh.scale.set(0.15, 0.15, 0.15);
          scene.add(pointsMesh);
          pointsMeshRef.current = pointsMesh;
        }
      });
    });

    // Load texture for background effect
    const textureLoader = new THREE.TextureLoader();
    
    // In Next.js, you need to use public folder path
    textureLoader.load('/textures/pattern.jpg', (loadedTexture) => {
      const originalWidth = loadedTexture.image.width;
      const originalHeight = loadedTexture.image.height;
      
      // Create full-screen plane
      const geometry = new THREE.PlaneGeometry(
        window.innerWidth / 100,
        window.innerHeight / 100
      );

      const material = new THREE.ShaderMaterial({
        transparent: true,
        uniforms: {
          iTime: { value: 0 },
          iTexture: { value: loadedTexture },
          iResolution: { 
            value: new THREE.Vector2(window.innerWidth, window.innerHeight) 
          },
          iTextureSize: {
            value: new THREE.Vector2(originalWidth, originalHeight)
          },
          iMouse: { value: new THREE.Vector2(0.5, 0.5) },
          iMouseTrail: { value: new Array(TRAIL_LENGTH).fill(new THREE.Vector3(0, 0, 0)) },
          iLastMoveTime: { value: 0 },
          iIsMouseMoving: { value: 0 }
        },
        vertexShader: `
          varying vec2 vUv;
          
          void main() {
              vUv = uv;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform float iTime;
          uniform sampler2D iTexture;
          uniform vec2 iResolution;
          uniform vec2 iTextureSize;
          uniform vec2 iMouse;
          uniform vec3 iMouseTrail[20]; // x, y, time
          uniform float iLastMoveTime;
          uniform float iIsMouseMoving;
          varying vec2 vUv;
          
          // Random number generator
          float random(vec2 st) {
              return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
          }
          
          // Simple 2D noise
          float noise(vec2 st) {
              vec2 i = floor(st);
              vec2 f = fract(st);
              
              // Four corners in 2D of a tile
              float a = random(i);
              float b = random(i + vec2(1.0, 0.0));
              float c = random(i + vec2(0.0, 1.0));
              float d = random(i + vec2(1.0, 1.0));
              
              // Smooth Interpolation
              vec2 u = f * f * (3.0 - 2.0 * f);
              
              return mix(a, b, u.x) + 
                    (c - a)* u.y * (1.0 - u.x) + 
                    (d - b) * u.x * u.y;
          }
          
          void main() {
              // Calculate number of texture repetitions
              vec2 tiledUv = vUv * iResolution / iTextureSize;
              
              // Create texture movement effect
              vec2 movedUv = tiledUv + vec2(
                  sin(iTime * 0.2) * 0.5, 
                  cos(iTime * 0.2) * 0.5
              );
              
              // Repeat texture
              movedUv = fract(movedUv);
              
              // Get color from texture
              vec4 textureColor = texture2D(iTexture, movedUv);
              
              // Divide screen into vertical column grid
              float columnWidth = 0.01;
              int numColumns = 10;
              
              // Determine current column
              int columnIndex = int(vUv.x / columnWidth);
              
              // Create random seed for each column
              float columnSeed = random(vec2(float(columnIndex), 0.0));
              
              // Create different flow speeds for each column
              float dropSpeed = 0.06 + columnSeed * 0.1;
              
              // Create different tail lengths for each column
              float tailLength = 0.1 + columnSeed * 0.5;
              
              // Create different start times for each column
              float timeOffset = columnSeed * 5.0;
              
              // Calculate Y position for flow effect (top to bottom)
              float flowY = 1.0 - mod((iTime + timeOffset) * dropSpeed, 1.5);
              
              // Calculate distorted UV coordinates for "flow" effect
              vec2 distortedUv = vUv;
              
              // Define pixel height in flow effect
              float pixelHeight = 0.005;
              
              // Define start position of flow (top to bottom)
              float streamTop = flowY;
              float streamBottom = flowY + tailLength;
              
              // Add noise to start position for uneven effect
              streamTop += noise(vec2(float(columnIndex), iTime)) * 0.1;
              
              // Remove horizontal wave effect (flow straight down)
              float xOffset = 0.0;
              
              // Only apply flow effect if pixel is in flowing area (top to bottom)
              if (vUv.y > streamTop && vUv.y < streamBottom) {
                  // Calculate distortion based on position in tail
                  float distortStrength = 1.0 - (vUv.y - streamTop) / (streamBottom - streamTop);
                  distortStrength = pow(distortStrength, 0.5);
                  
                  // Determine if current point is in "pixel" of effect
                  float discretePixelPos = floor(vUv.y / pixelHeight) * pixelHeight;
                  float nextPixelPos = discretePixelPos + pixelHeight;
                  
                  // Only apply effect to ~40% of columns (based on noise)
                  if (noise(vec2(float(columnIndex) * 0.1, floor(iTime))) > 0.6) {
                      distortedUv.x += xOffset;
                      
                      // Create effect of stretching pixels vertically
                      distortedUv.y = mix(discretePixelPos, nextPixelPos, fract(vUv.y / pixelHeight));
                  }
              }
              
              // Calculate alpha for flow effect
              float alpha = 0.0;
              
              // If pixel is in flow area, set random alpha from 0.0-0.6
              if (vUv.y > streamTop && vUv.y < streamBottom) {
                  // Calculate alpha based on position in tail (fading towards tail)
                  float alphaFactor = 1.0 - (vUv.y - streamTop) / (streamBottom - streamTop);
                  alphaFactor = pow(alphaFactor, 0.5);
                  
                  // Add noise to alpha for uneven effect
                  alpha = random(distortedUv + vec2(iTime * 0.1)) * 0.6 * alphaFactor;
                  
                  // Calculate pixel position for discreteness
                  float discretePixelPos = floor(vUv.y / pixelHeight) * pixelHeight;
                  
                  // Only show some pixels in flow area for discrete effect
                  if (random(vec2(discretePixelPos, float(columnIndex))) > 0.3) {
                      alpha *= 1.0;
                  } else {
                      alpha *= 0.3;
                  }
              }
              
              // Result from pixel flow effect
              vec4 finalColor = vec4(textureColor.rgb, alpha);
              
              // Add mouse and tail effect
              vec3 cursorColor = vec3(1.0, 0.7, 0.0); // Yellow color
              float cursorRadius = 0.04;
              float cursorAlpha = 0.0;
              
              // Calculate time since last move (for fade out)
              float timeSinceLastMove = iTime - iLastMoveTime;
              
              // Time for effect to completely disappear (1.5 seconds)
              float fadeOutDuration = 1.5;
              
              // Fade factor based on time since last move
              float fadeFactor = 1.0;
              
              // Only apply fade effect when mouse has stopped (iIsMouseMoving = 0)
              if (iIsMouseMoving < 0.5) {
                  fadeFactor = max(0.0, 1.0 - (timeSinceLastMove / fadeOutDuration));
              }
              
              // Handle current mouse position
              float cursorDist = distance(vUv, iMouse);
              
              // Current mouse position has strongest effect
              if(cursorDist < cursorRadius) {
                  float mainCursorAlpha = (1.0 - cursorDist / cursorRadius) * 0.8 * fadeFactor;
                  cursorAlpha = max(cursorAlpha, mainCursorAlpha);
              }
              
              // Handle mouse tail
              for(int i = 0; i < 20; i++) {
                  if(iMouseTrail[i].z < 0.0) continue; // Skip if no data
                  
                  vec2 trailPos = iMouseTrail[i].xy;
                  float trailTime = iMouseTrail[i].z;
                  float trailDist = distance(vUv, trailPos);
                  
                  // Lifetime of tail - much longer
                  float timeAlive = iTime - trailTime;
                  float fadeTime = 2.0; // Time to fade out completely (2 seconds)
                  float timeFactor = max(0.0, 1.0 - timeAlive / fadeTime);
                  
                  // Gradually reduce influence based on position in tail (further is more faded)
                  float trailFactor = max(0.3, 1.0 - float(i) / 20.0);
                  
                  // Tail size decreases slowly
                  float trailRadius = cursorRadius * (0.5 + trailFactor * 0.5);
                  
                  // Calculate alpha for each point in tail
                  if(trailDist < trailRadius) {
                      float currentTrailAlpha = (1.0 - trailDist / trailRadius) * trailFactor * timeFactor * 0.7 * fadeFactor;
                      cursorAlpha = max(cursorAlpha, currentTrailAlpha);
                  }
              }
              
              // Blend original color with cursor color
              finalColor.rgb = mix(finalColor.rgb, cursorColor, cursorAlpha);
              finalColor.a = max(finalColor.a, cursorAlpha); // Ensure cursor area always shows (increase opacity)
              
              gl_FragColor = finalColor;
          }
        `
      });

      const plane = new THREE.Mesh(geometry, material);
      scene.add(plane);
      planeRef.current = plane;
      materialRef.current = material;

      // Set camera position
      camera.position.z = 5;
    });

    // Handle window resize
    const handleResize = () => {
      // Update sizes
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      // Update camera
      if (cameraRef.current) {
        cameraRef.current.aspect = sizes.width / sizes.height;
        cameraRef.current.updateProjectionMatrix();
      }

      // Update renderer
      if (rendererRef.current) {
        rendererRef.current.setSize(sizes.width, sizes.height);
        rendererRef.current.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      }

      // Update material uniforms
      if (materialRef.current) {
        materialRef.current.uniforms.iResolution.value.set(sizes.width, sizes.height);
      }
    };

    // Handle mouse move
    const handleMouseMove = (event) => {
      // Calculate normalized mouse coordinates (-1 to 1)
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;

      // Update last mouse move time
      lastMouseMoveTimeRef.current = performance.now() * 0.001; // Convert to seconds
      isMouseMovingRef.current = true;

      // Handle uvCoords for shaders
      if (rendererRef.current) {
        const rect = rendererRef.current.domElement.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

        // Use raycaster to find intersection with plane
        if (planeRef.current && cameraRef.current) {
          raycasterRef.current.setFromCamera(new THREE.Vector2(x, y), cameraRef.current);
          const intersects = raycasterRef.current.intersectObject(planeRef.current);

          if (intersects.length > 0) {
            // Get UV coordinates from intersection
            const uv = intersects[0].uv;
            uvCoordsRef.current.set(uv.x, uv.y);
          }
        }
      }
    };

    // Check for intersections
    const checkIntersections = () => {
      if (!pointsMeshRef.current || !cameraRef.current) return;

      raycasterRef.current.setFromCamera(mouseRef.current, cameraRef.current);
      const intersects = raycasterRef.current.intersectObject(pointsMeshRef.current);

      if (intersects.length > 0) {
        const point = intersects[0].point;
        pointMaterial.uniforms.uHoverPosition.value = point;
      } else {
        pointMaterial.uniforms.uHoverPosition.value.set(100, 100, 100);
      }
    };

    // Animation loop
    const animate = (timestamp) => {
      if (!isInitializedRef.current) return;

      const elapsedTime = timestamp * 0.001; // Convert to seconds

      // Check intersections
      checkIntersections();

      // Update mouse trail and shader uniforms
      if (materialRef.current) {
        // Update iTime
        materialRef.current.uniforms.iTime.value = elapsedTime;

        // Check mouse moving state
        if (isMouseMovingRef.current && elapsedTime - lastMouseMoveTimeRef.current > 0.1) {
          isMouseMovingRef.current = false;
        }

        // Update last move time and state for shader
        materialRef.current.uniforms.iLastMoveTime.value = lastMouseMoveTimeRef.current;
        materialRef.current.uniforms.iIsMouseMoving.value = isMouseMovingRef.current ? 1.0 : 0.0;

        // Update mouse position for shader
        materialRef.current.uniforms.iMouse.value.copy(uvCoordsRef.current);

        // Update mouse trail
        if (cameraRef.current && planeRef.current) {
          raycasterRef.current.setFromCamera(mouseRef.current, cameraRef.current);
          const intersects = raycasterRef.current.intersectObject(planeRef.current);

          if (intersects.length > 0) {
            const uv = intersects[0].uv;
            const now = elapsedTime;
            const lastPointTime = mouseTrailRef.current.length > 0 ? mouseTrailRef.current[0]?.time : 0;
            const timeSinceLastPoint = now - lastPointTime;
            const minDistance = 0.001;

            const lastPos = mouseTrailRef.current.length > 0
              ? new THREE.Vector2(mouseTrailRef.current[0].x, mouseTrailRef.current[0].y)
              : new THREE.Vector2(-1, -1);

            const distanceMoved = lastPos.distanceTo(new THREE.Vector2(uv.x, uv.y));

            if (timeSinceLastPoint > 0.05 && distanceMoved > minDistance || 
                timeSinceLastPoint > 0.2) {
              
              // Add current position to beginning of trail array
              mouseTrailRef.current.unshift({
                x: uv.x,
                y: uv.y,
                time: now
              });
              
              // Limit trail array size
              if (mouseTrailRef.current.length > TRAIL_LENGTH) {
                mouseTrailRef.current.pop();
              }
            }
          }

          // Convert trail data to format suitable for shader
          const trailArray = [];
          for (let i = 0; i < TRAIL_LENGTH; i++) {
            if (i < mouseTrailRef.current.length) {
              const entry = mouseTrailRef.current[i];
              trailArray.push(new THREE.Vector3(
                entry.x,
                entry.y,
                entry.time
              ));
            } else {
              trailArray.push(new THREE.Vector3(0, 0, -1));
            }
          }

          // Update uniform with new data
          materialRef.current.uniforms.iMouseTrail.value = trailArray;
        }
      }

      // Move points mesh based on mouse position
      if (pointsMeshRef.current) {
        // Limit movement range
        const maxOffset = 1;
        
        let offsetX = -mouseRef.current.x * moveFactor;
        let offsetY = mouseRef.current.y * moveFactor;
        
        // Limit offset within [-maxOffset, maxOffset]
        offsetX = Math.max(Math.min(offsetX, maxOffset), -maxOffset);
        offsetY = Math.max(Math.min(offsetY, maxOffset), -maxOffset);
        
        pointsMeshRef.current.position.x = initialPosition.x - offsetX;
        pointsMeshRef.current.position.y = initialPosition.y - offsetY;
      }

      // Render
      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }

      // Request next frame
      animationFrameId.current = requestAnimationFrame(animate);
    };

    // Start animation loop
    const animationFrameId = { current: null };
    animationFrameId.current = requestAnimationFrame(animate);
    
    // Add event listeners
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      
      // Dispose of Three.js resources
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
      
      if (pointsMeshRef.current) {
        pointsMeshRef.current.geometry.dispose();
        if (pointsMeshRef.current.material) {
          pointsMeshRef.current.material.dispose();
        }
        sceneRef.current?.remove(pointsMeshRef.current);
      }
      
      if (planeRef.current) {
        planeRef.current.geometry.dispose();
        if (planeRef.current.material) {
          planeRef.current.material.dispose();
        }
        sceneRef.current?.remove(planeRef.current);
      }
      
      isInitializedRef.current = false;
    };
  }, []);

  return (
    <div className="w-full h-screen bg-black">
      <canvas ref={canvasRef} className="webgl w-full h-full" />
    </div>
  );
};

export default ThreeAnimation;