'use client';

import React, { useContext, useEffect, useRef, useState, forwardRef, useImperativeHandle } from 'react';
// @ts-ignore
import * as THREE from 'three';
// @ts-ignore
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { SceneContext } from './ModularScene';
// Import GSAP for smooth transitions
// @ts-ignore
import gsap from 'gsap';

interface ModelModuleProps {
  modelPaths: string[]; // Array of model paths
  onModelChange?: (index: number) => void; // Callback when model changes
}

// Particle shaders (keeping the same as original)
const particleVertexShader = `
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

    // Point size - tối ưu tính toán
    gl_PointSize = uSize * uResolution.y / -viewPosition.z;

    // Truyền khoảng cách đến fragment shader
    vDistance = distanceToHover;
  }
`;

const particleFragmentShader = `
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
`;

const ModelModule = forwardRef<
  { switchModel: (index: number) => void; getActiveIndex: () => number; isAllModelsLoaded: () => boolean }, 
  ModelModuleProps
>(({ modelPaths, onModelChange }, ref) => {
  const { scene, camera, raycaster, mouse, loadingManager } = useContext(SceneContext);
  
  // Ref cho mảng points meshes, mỗi model sẽ có một point mesh
  const pointsMeshesRef = useRef<THREE.Points[]>([]);
  const pointMaterialRef = useRef<THREE.ShaderMaterial | null>(null);
  const initialPositionRef = useRef<THREE.Vector3>(new THREE.Vector3(0, -2, 0));
  
  // State để theo dõi model hiện tại đang hiển thị
  const [activeModelIndex, setActiveModelIndex] = useState<number>(0);
  const [previousModelIndex, setPreviousModelIndex] = useState<number>(0);
  
  // State để theo dõi trạng thái tải các model
  const [modelsLoaded, setModelsLoaded] = useState<boolean[]>(new Array(modelPaths.length).fill(false));
  
  // State để track transition
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  
  // Cache để tránh tạo nhiều vector mới
  const tempVector3 = useRef(new THREE.Vector3());
  const mouseOffsetRef = useRef(new THREE.Vector2());
  
  const moveFactor = 0.05; // Hệ số di chuyển cho model

  // Helper functions for point distribution (same as original)
  const isPointInTriangle = (
    p: THREE.Vector2,
    a: THREE.Vector2,
    b: THREE.Vector2,
    c: THREE.Vector2
  ): boolean => {
    const sign = (p1: THREE.Vector2, p2: THREE.Vector2, p3: THREE.Vector2): number => {
      return (p1.x - p3.x) * (p2.y - p3.y) - (p2.x - p3.x) * (p1.y - p3.y);
    };

    const d1 = sign(p, a, b);
    const d2 = sign(p, b, c);
    const d3 = sign(p, c, a);

    const hasNeg = (d1 < 0) || (d2 < 0) || (d3 < 0);
    const hasPos = (d1 > 0) || (d2 > 0) || (d3 > 0);

    return !(hasNeg && hasPos);
  };

  const getBarycentricCoordinates = (
    p: THREE.Vector2,
    a: THREE.Vector2,
    b: THREE.Vector2,
    c: THREE.Vector2,
    posA: THREE.Vector3,
    posB: THREE.Vector3,
    posC: THREE.Vector3,
    result: THREE.Vector3 = new THREE.Vector3()
  ): THREE.Vector3 => {
    const v0x = b.x - a.x;
    const v0y = b.y - a.y;
    const v1x = c.x - a.x;
    const v1y = c.y - a.y;
    const v2x = p.x - a.x;
    const v2y = p.y - a.y;

    const denom = v0x * v1y - v1x * v0y;
    const v = (v2x * v1y - v1x * v2y) / denom;
    const w = (v0x * v2y - v2x * v0y) / denom;
    const u = 1.0 - v - w;

    result.x = u * posA.x + v * posB.x + w * posC.x;
    result.y = u * posA.y + v * posB.y + w * posC.y;
    result.z = u * posA.z + v * posB.z + w * posC.z;

    return result;
  };

  const createUniformPointsWithUV = (
    geometry: THREE.BufferGeometry,
    pointDensity: number
  ): number[] => {
    const positions = geometry.attributes.position.array;
    const uvs = geometry.attributes.uv?.array;
    
    if (!uvs) {
      console.error('Geometry does not have UV coordinates');
      return [];
    }

    const triangleCache = new Map<string, { a: THREE.Vector2, b: THREE.Vector2, c: THREE.Vector2,
                                           posA: THREE.Vector3, posB: THREE.Vector3, posC: THREE.Vector3 }>();
    
    const numTriangles = positions.length / 9;
    
    const gridSize = Math.ceil(Math.sqrt(pointDensity));
    const gridStep = 1.0 / gridSize;
    
    const pointPositions: number[] = [];
    
    const tempPoint = new THREE.Vector3();
    const tempUV = new THREE.Vector2();
    const tempA = new THREE.Vector2();
    const tempB = new THREE.Vector2();
    const tempC = new THREE.Vector2();
    const tempPosA = new THREE.Vector3();
    const tempPosB = new THREE.Vector3();
    const tempPosC = new THREE.Vector3();
    
    const maxPoints = 8000;
    
    const estimatedPoints = gridSize * gridSize;
    const scaleFactor = estimatedPoints > maxPoints ? Math.sqrt(maxPoints / estimatedPoints) : 1.0;
    const adjustedGridSize = Math.floor(gridSize * scaleFactor);
    
    for (let u = 0; u < adjustedGridSize; u++) {
      for (let v = 0; v < adjustedGridSize; v++) {
        tempUV.set((u + 0.5) * gridStep, (v + 0.5) * gridStep);
        
        let foundTriangle = false;
        
        for (let triIndex = 0; triIndex < numTriangles; triIndex++) {
          const i = triIndex * 3;
          
          const cacheKey = `${i}`;
          
          let triangle = triangleCache.get(cacheKey);
          if (!triangle) {
            tempA.set(uvs[i * 2], uvs[i * 2 + 1]);
            tempB.set(uvs[(i + 1) * 2], uvs[(i + 1) * 2 + 1]);
            tempC.set(uvs[(i + 2) * 2], uvs[(i + 2) * 2 + 1]);
            
            tempPosA.set(
              positions[i * 3] as number, 
              positions[i * 3 + 1] as number, 
              positions[i * 3 + 2] as number
            );
            tempPosB.set(
              positions[(i + 1) * 3] as number, 
              positions[(i + 1) * 3 + 1] as number, 
              positions[(i + 1) * 3 + 2] as number
            );
            tempPosC.set(
              positions[(i + 2) * 3] as number, 
              positions[(i + 2) * 3 + 1] as number, 
              positions[(i + 2) * 3 + 2] as number
            );
            
            triangle = {
              a: tempA.clone(),
              b: tempB.clone(),
              c: tempC.clone(),
              posA: tempPosA.clone(),
              posB: tempPosB.clone(),
              posC: tempPosC.clone()
            };
            triangleCache.set(cacheKey, triangle);
          }
          
          if (isPointInTriangle(tempUV, triangle.a, triangle.b, triangle.c)) {
            getBarycentricCoordinates(
              tempUV, 
              triangle.a, 
              triangle.b, 
              triangle.c, 
              triangle.posA, 
              triangle.posB, 
              triangle.posC,
              tempPoint
            );
            
            pointPositions.push(tempPoint.x, tempPoint.y, tempPoint.z);
            
            foundTriangle = true;
            break;
          }
        }
      }
    }
    
    if (pointPositions.length < 1000) {
      console.warn('Too few points created, adding random points');
      
      for (let i = 0; i < numTriangles; i++) {
        const i3 = i * 3;
        
        const posA = new THREE.Vector3(
          positions[i3 * 3] as number,
          positions[i3 * 3 + 1] as number,
          positions[i3 * 3 + 2] as number
        );
        const posB = new THREE.Vector3(
          positions[(i3 + 1) * 3] as number,
          positions[(i3 + 1) * 3 + 1] as number,
          positions[(i3 + 1) * 3 + 2] as number
        );
        const posC = new THREE.Vector3(
          positions[(i3 + 2) * 3] as number,
          positions[(i3 + 2) * 3 + 1] as number,
          positions[(i3 + 2) * 3 + 2] as number
        );
        
        for (let j = 0; j < 3; j++) {
          const r1 = Math.random();
          const r2 = Math.random();
          
          const sqrtR1 = Math.sqrt(r1);
          const u = 1 - sqrtR1;
          const v = r2 * sqrtR1;
          const w = 1 - u - v;
          
          const point = new THREE.Vector3(
            posA.x * u + posB.x * v + posC.x * w,
            posA.y * u + posB.y * v + posC.y * w,
            posA.z * u + posB.z * v + posC.z * w
          );
          
          pointPositions.push(point.x, point.y, point.z);
        }
      }
    }
    
    return pointPositions;
  };

  // Check intersections (same as original)
  const checkIntersections = () => {
    if (pointsMeshesRef.current.length === 0 || !camera.current || !pointMaterialRef.current || !mouse.current || !raycaster.current) return;

    const activeMesh = pointsMeshesRef.current[activeModelIndex];
    if (!activeMesh) return;

    raycaster.current.setFromCamera(mouse.current, camera.current);
    const intersects = raycaster.current.intersectObject(activeMesh);

    if (intersects.length > 0) {
      pointMaterialRef.current.uniforms.uHoverPosition.value.copy(intersects[0].point);
    } else {
      pointMaterialRef.current.uniforms.uHoverPosition.value.set(100, 100, 100);
    }
  };

  // Enhanced model transition with GSAP - optimized for scroll triggering
  // Enhanced model transition with GSAP - updated for center-based zoom
// Enhanced model transition with GSAP - updated for center-based zoom with opacity
const switchModel = (index: number) => {
  if (index >= 0 && index < pointsMeshesRef.current.length && !isTransitioning) {
    // Don't switch if it's the same model or already transitioning
    if (index === activeModelIndex) return;
    
    // Set transitioning state
    setIsTransitioning(true);
    setPreviousModelIndex(activeModelIndex);
    
    const currentMesh = pointsMeshesRef.current[activeModelIndex];
    const nextMesh = pointsMeshesRef.current[index];
    
    // Cancel any ongoing animations to prevent conflicts
    gsap.killTweensOf(currentMesh?.scale);
    gsap.killTweensOf(currentMesh?.material);
    gsap.killTweensOf(nextMesh?.scale);
    gsap.killTweensOf(nextMesh?.material);
    
    if (currentMesh && nextMesh) {
      // Store original scale for restoration
      const originalScale = new THREE.Vector3().copy(currentMesh.scale);
      
      // Cache original positions
      const currentPos = new THREE.Vector3().copy(currentMesh.position);
      const nextPos = new THREE.Vector3().copy(initialPositionRef.current);
      
      // Make sure materials have opacity property
      if (currentMesh.material && !currentMesh.material.transparent) {
        currentMesh.material.transparent = true;
      }
      
      if (nextMesh.material && !nextMesh.material.transparent) {
        nextMesh.material.transparent = true;
      }
      
      // Step 1: Fade out and zoom in the current model
      gsap.to(currentMesh.scale, {
        x: originalScale.x * 0.0,
        y: originalScale.y * 0.0,
        z: originalScale.z * 0.0,
        transformOrigin: "center center center", 
        duration: 0.6,
        ease: "power2.in"
      });
      
      
      // Add opacity animation for fading out
      gsap.to(currentMesh.material, {
        opacity: 0,
        duration: 0.6,
        ease: "power2.in",
        onComplete: () => {
          // Hide the current model when fade-out is complete
          currentMesh.visible = false;
          // Reset scale and position for future use
          currentMesh.scale.copy(originalScale);
          currentMesh.position.copy(currentPos);
          // Reset opacity for future use
          if (currentMesh.material) {
            currentMesh.material.opacity = 1;
          }
        }
      });
      
      // Prepare the next model
      nextMesh.visible = true;
      // Start with small scale (zoomed in)
      nextMesh.scale.set(
        originalScale.x * 0.0,
        originalScale.y * 0.0,
        originalScale.z * 0.0,
      );
      // Set initial position - same as the target position to ensure center-based zoom
      nextMesh.position.copy(nextPos);
      // Start with opacity 0
      if (nextMesh.material) {
        nextMesh.material.opacity = 0;
      }
      
      // Step 2: Fade in and zoom out the next model
      gsap.to(nextMesh.scale, {
        x: originalScale.x,
        y: originalScale.y,
        z: originalScale.z,
        transformOrigin: "center center center",
        duration: 0.6,
        ease: "power2.out",
        delay: 0.3 // Overlap transitions slightly for smoother effect
      });
      
      // Add opacity animation for fading in
      gsap.to(nextMesh.material, {
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        delay: 0.3,
        onComplete: () => {
          // Update state when transition is complete
          setActiveModelIndex(index);
          setIsTransitioning(false);
          
          // Call the callback if provided
          if (onModelChange) {
            onModelChange(index);
          }
        }
      });
    }
  }
};

  // Check if all models are loaded
  const checkAllModelsLoaded = () => {
    return modelsLoaded.every(loaded => loaded);
  };

  // Handle model loaded
  const handleModelLoaded = (index: number) => {
    const newModelsLoaded = [...modelsLoaded];
    newModelsLoaded[index] = true;
    setModelsLoaded(newModelsLoaded);
  };

  // ImperativeHandle for external control
  useImperativeHandle(
    ref,
    () => ({
      switchModel,
      getActiveIndex: () => activeModelIndex,
      isAllModelsLoaded: checkAllModelsLoaded
    })
  );

  useEffect(() => {
    if (!scene.current) return;

    // Create shader material
    const pointMaterial = new THREE.ShaderMaterial({
      vertexShader: particleVertexShader,
      fragmentShader: particleFragmentShader,
      uniforms: {
        uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        uSize: { value: 0.05 },
        uHoverPosition: { value: new THREE.Vector3(100, 100, 100) }
      },
      transparent: true,
      depthTest: true
    });
    pointMaterialRef.current = pointMaterial;

    // Load models with LoadingManager
    const objLoader = loadingManager?.current 
      ? new OBJLoader(loadingManager.current) 
      : new OBJLoader();
    
    const paths = modelPaths.length > 0 ? modelPaths : ['/models/letters_simple_a4.obj'];
    
    paths.forEach((path, index) => {
      const loadTimeout = setTimeout(() => {
        if (!modelsLoaded[index]) {
          console.warn(`Loading timeout for model ${index} (${path}). Creating fallback.`);
          
          const geometry = new THREE.SphereGeometry(1, 32, 32);
          const bufferGeometry = new THREE.BufferGeometry().copy(geometry);
          
          if (!bufferGeometry.attributes.uv) {
            const positions = bufferGeometry.attributes.position.array;
            const uvs = [];
            for (let i = 0; i < positions.length; i += 3) {
              uvs.push(Math.random(), Math.random());
            }
            bufferGeometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
          }
          
          const pointPositions = createUniformPointsWithUV(bufferGeometry, 2000);
          const pointGeometry = new THREE.BufferGeometry();
          pointGeometry.setAttribute(
            'position',
            new THREE.Float32BufferAttribute(pointPositions, 3)
          );
          pointGeometry.computeBoundingSphere();

          const pointsMesh = new THREE.Points(pointGeometry, pointMaterial);
          pointsMesh.position.copy(initialPositionRef.current);
          pointsMesh.scale.set(6.0, 6.0, 6.0);
          pointsMesh.visible = index === 0;

          scene.current!.add(pointsMesh);
          pointsMeshesRef.current[index] = pointsMesh;
          
          handleModelLoaded(index);
        }
      }, 8000);
      
      objLoader.load(
        path,
        (object: any) => {
          clearTimeout(loadTimeout);
          let foundMesh = false;
          
          object.traverse((child: any) => {
            if ((child as THREE.Mesh).isMesh) {
              foundMesh = true;
              const geometry = (child as THREE.Mesh).geometry;
              
              const pointsPerUnitArea = 8000;
              const pointPositions = createUniformPointsWithUV(geometry, pointsPerUnitArea);
              
              const pointGeometry = new THREE.BufferGeometry();
              pointGeometry.setAttribute(
                'position',
                new THREE.Float32BufferAttribute(pointPositions, 3)
              );
              
              pointGeometry.computeBoundingSphere();
              
              const pointsMesh = new THREE.Points(pointGeometry, pointMaterial);
              pointsMesh.position.copy(initialPositionRef.current);
              pointsMesh.scale.set(6.0, 6.0, 6.0);
              pointsMesh.visible = index === 0;
              
              scene.current!.add(pointsMesh);
              pointsMeshesRef.current[index] = pointsMesh;
              
              handleModelLoaded(index);
            }
          });
          
          if (!foundMesh) {
            console.warn(`No meshes found in model ${path}. Creating fallback.`);
            
            const geometry = new THREE.SphereGeometry(1, 32, 32);
            const bufferGeometry = new THREE.BufferGeometry().copy(geometry);
            
            if (!bufferGeometry.attributes.uv) {
              const positions = bufferGeometry.attributes.position.array;
              const uvs = [];
              for (let i = 0; i < positions.length; i += 3) {
                uvs.push(Math.random(), Math.random());
              }
              bufferGeometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
            }
            
            const pointPositions = createUniformPointsWithUV(bufferGeometry, 2000);
            const pointGeometry = new THREE.BufferGeometry();
            pointGeometry.setAttribute(
              'position',
              new THREE.Float32BufferAttribute(pointPositions, 3)
            );
            pointGeometry.computeBoundingSphere();

            const pointsMesh = new THREE.Points(pointGeometry, pointMaterial);
            pointsMesh.position.copy(initialPositionRef.current);
            pointsMesh.scale.set(6.0, 6.0, 6.0);
            pointsMesh.visible = index === 0;

            scene.current!.add(pointsMesh);
            pointsMeshesRef.current[index] = pointsMesh;
            
            handleModelLoaded(index);
          }
        },
        undefined,
        (error: any) => {
          clearTimeout(loadTimeout);
          console.error(`Error loading model ${path}:`, error);
          
          const geometry = new THREE.SphereGeometry(1, 32, 32);
          const bufferGeometry = new THREE.BufferGeometry().copy(geometry);
          
          if (!bufferGeometry.attributes.uv) {
            const positions = bufferGeometry.attributes.position.array;
            const uvs = [];
            for (let i = 0; i < positions.length; i += 3) {
              uvs.push(Math.random(), Math.random());
            }
            bufferGeometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
          }
          
          const pointPositions = createUniformPointsWithUV(bufferGeometry, 2000);
          const pointGeometry = new THREE.BufferGeometry();
          pointGeometry.setAttribute(
            'position',
            new THREE.Float32BufferAttribute(pointPositions, 3)
          );
          pointGeometry.computeBoundingSphere();

          const pointsMesh = new THREE.Points(pointGeometry, pointMaterial);
          pointsMesh.position.copy(initialPositionRef.current);
          pointsMesh.scale.set(6.0, 6.0, 6.0);
          pointsMesh.visible = index === 0;

          scene.current!.add(pointsMesh);
          pointsMeshesRef.current[index] = pointsMesh;
          
          handleModelLoaded(index);
        }
      );
    });

    // Handle resize with debounce
    let resizeTimeout: NodeJS.Timeout | null = null;
    const handleResize = (e: Event) => {
      if (resizeTimeout) clearTimeout(resizeTimeout);
      
      resizeTimeout = setTimeout(() => {
        const customEvent = e as CustomEvent;
        const { width, height } = customEvent.detail;
        
        if (pointMaterialRef.current) {
          pointMaterialRef.current.uniforms.uResolution.value.set(width, height);
        }
      }, 100);
    };

    // Handle before render event
    const handleBeforeRender = (e: Event) => {
      const customEvent = e as CustomEvent;
      const { mouse } = customEvent.detail;
      
      // Check intersections
      checkIntersections();
      
      // Move active model with mouse
      const activeMesh = pointsMeshesRef.current[activeModelIndex];
      if (activeMesh && mouse && !isTransitioning) {
        const maxOffset = 1;
        
        const offsetX = -Math.max(Math.min(mouse.x * moveFactor, maxOffset), -maxOffset);
        const offsetY = Math.max(Math.min(mouse.y * moveFactor, maxOffset), -maxOffset);
        
        mouseOffsetRef.current.set(offsetX, offsetY);
        
        activeMesh.position.x = initialPositionRef.current.x + mouseOffsetRef.current.x;
        activeMesh.position.y = initialPositionRef.current.y + mouseOffsetRef.current.y;
      }
    };

    // Register event listeners
    window.addEventListener('scene-resize', handleResize);
    window.addEventListener('before-render', handleBeforeRender);

    // Cleanup
    return () => {
      if (pointsMeshesRef.current.length > 0 && scene.current) {
        pointsMeshesRef.current.forEach(mesh => {
          if (mesh) {
            scene.current!.remove(mesh);
            mesh.geometry.dispose();
          }
        });
      }
      
      if (pointMaterialRef.current) {
        pointMaterialRef.current.dispose();
      }
      
      if (resizeTimeout) clearTimeout(resizeTimeout);
      window.removeEventListener('scene-resize', handleResize);
      window.removeEventListener('before-render', handleBeforeRender);
    };
  }, [modelPaths.join(','), scene, camera, raycaster, mouse, loadingManager, onModelChange]);

  return null; // Component này không render gì, chỉ thêm objects vào scene
});


ModelModule.displayName = 'ModelModule';
export default ModelModule;