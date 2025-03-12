'use client';

import React, { useContext, useEffect, useRef } from 'react';
// @ts-ignore
import * as THREE from 'three';
// @ts-ignore
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { SceneContext } from './ModularScene';

interface ModelModuleProps {
  modelPath: string;
}

// Shader cho model points
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

        // Point size
        gl_PointSize = uSize * uResolution.y;
        gl_PointSize *= (1.0 / -viewPosition.z);

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

const ModelModule: React.FC<ModelModuleProps> = ({ modelPath }) => {
  const { scene, camera, raycaster, mouse, loadingManager } = useContext(SceneContext);
  
  const pointsMeshRef = useRef<THREE.Points | null>(null);
  const pointMaterialRef = useRef<THREE.ShaderMaterial | null>(null);
  const initialPositionRef = useRef<THREE.Vector3>(new THREE.Vector3(0, -2, 0));
  
  const moveFactor = 0.05; // Hệ số di chuyển cho model

  // Các hàm hỗ trợ cho model points
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
    posC: THREE.Vector3
  ): THREE.Vector3 => {
    const v0 = new THREE.Vector2(b.x - a.x, b.y - a.y);
    const v1 = new THREE.Vector2(c.x - a.x, c.y - a.y);
    const v2 = new THREE.Vector2(p.x - a.x, p.y - a.y);

    const denom = v0.x * v1.y - v1.x * v0.y;
    const v = (v2.x * v1.y - v1.x * v2.y) / denom;
    const w = (v0.x * v2.y - v2.x * v0.y) / denom;
    const u = 1.0 - v - w;

    // Tính toán vị trí 3D
    const point = new THREE.Vector3();
    point.x = u * posA.x + v * posB.x + w * posC.x;
    point.y = u * posA.y + v * posB.y + w * posC.y;
    point.z = u * posA.z + v * posB.z + w * posC.z;

    return point;
  };

  const createUniformPointsWithUV = (
    geometry: THREE.BufferGeometry,
    pointsPerUnitArea: number
  ): number[] => {
    const positions = geometry.attributes.position.array;
    const uvs = geometry.attributes.uv?.array;
    
    if (!uvs) {
      console.error('Geometry does not have UV coordinates');
      return [];
    }

    const numVertices = positions.length / 3;
    let pointPositions: number[] = [];

    // Tạo lưới đều trong không gian UV
    const gridSize = Math.sqrt(pointsPerUnitArea);
    for (let u = 0; u < gridSize; u++) {
      for (let v = 0; v < gridSize; v++) {
        const uv = new THREE.Vector2(u / gridSize, v / gridSize);

        // Tìm tam giác chứa UV này
        for (let i = 0; i < numVertices; i += 3) {
          const uvA = new THREE.Vector2(uvs[i * 2], uvs[i * 2 + 1]);
          const uvB = new THREE.Vector2(uvs[(i + 1) * 2], uvs[(i + 1) * 2 + 1]);
          const uvC = new THREE.Vector2(uvs[(i + 2) * 2], uvs[(i + 2) * 2 + 1]);

          if (isPointInTriangle(uv, uvA, uvB, uvC)) {
            const a = new THREE.Vector3(
              positions[i * 3] as number,
              positions[i * 3 + 1] as number,
              positions[i * 3 + 2] as number
            );
            const b = new THREE.Vector3(
              positions[(i + 1) * 3] as number,
              positions[(i + 1) * 3 + 1] as number,
              positions[(i + 1) * 3 + 2] as number
            );
            const c = new THREE.Vector3(
              positions[(i + 2) * 3] as number,
              positions[(i + 2) * 3 + 1] as number,
              positions[(i + 2) * 3 + 2] as number
            );

            // Tính toán vị trí 3D từ UV
            const point = getBarycentricCoordinates(uv, uvA, uvB, uvC, a, b, c);
            pointPositions.push(point.x, point.y, point.z);
            break;
          }
        }
      }
    }

    return pointPositions;
  };

  // Kiểm tra va chạm với raycaster
  const checkIntersections = () => {
    if (!pointsMeshRef.current || !camera.current || !pointMaterialRef.current || !mouse.current || !raycaster.current) return;

    raycaster.current.setFromCamera(mouse.current, camera.current);
    const intersects = raycaster.current.intersectObject(pointsMeshRef.current);

    if (intersects.length > 0) {
      const point = intersects[0].point;
      pointMaterialRef.current.uniforms.uHoverPosition.value = point;
    } else {
      pointMaterialRef.current.uniforms.uHoverPosition.value.set(100, 100, 100);
    }
  };

  useEffect(() => {
    if (!scene.current) return;

    // Tạo shader material cho points
    const pointMaterial = new THREE.ShaderMaterial({
      vertexShader: particleVertexShader,
      fragmentShader: particleFragmentShader,
      uniforms: {
        uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        uSize: { value: 0.04 },
        uHoverPosition: { value: new THREE.Vector3(100, 100, 100) }
      }
    });
    pointMaterialRef.current = pointMaterial;

    // Load Model với LoadingManager
    const objLoader = loadingManager?.current 
      ? new OBJLoader(loadingManager.current) 
      : new OBJLoader();
      
    objLoader.load(modelPath, (object: any) => {
      object.traverse((child: any) => {
        if ((child as THREE.Mesh).isMesh) {
          const geometry = (child as THREE.Mesh).geometry;

          // Tạo points trên model
          const pointsPerUnitArea = 10000;
          const pointPositions = createUniformPointsWithUV(geometry, pointsPerUnitArea);

          const pointGeometry = new THREE.BufferGeometry();
          pointGeometry.setAttribute(
            'position',
            new THREE.Float32BufferAttribute(pointPositions, 3)
          );

          const pointsMesh = new THREE.Points(pointGeometry, pointMaterial);
          pointsMesh.position.set(0, -2, 0);
          pointsMesh.scale.set(0.15, 0.15, 0.15);
          scene.current.add(pointsMesh);
          pointsMeshRef.current = pointsMesh;
          initialPositionRef.current.copy(pointsMesh.position);
        }
      });
    });

    // Handle resize event
    const handleResize = (e: Event) => {
      const customEvent = e as CustomEvent;
      const { width, height } = customEvent.detail;
      
      if (pointMaterialRef.current) {
        pointMaterialRef.current.uniforms.uResolution.value.set(width, height);
      }
    };

    // Handle before render event
    const handleBeforeRender = (e: Event) => {
      const customEvent = e as CustomEvent;
      const { time, mouse } = customEvent.detail;
      
      // Kiểm tra va chạm
      checkIntersections();
      
      // Di chuyển model theo chuột
      if (pointsMeshRef.current && mouse) {
        const maxOffset = 1; // Khoảng di chuyển tối đa
        
        let offsetX = -mouse.x * moveFactor;
        let offsetY = mouse.y * moveFactor;
        
        // Giới hạn offset trong khoảng [-maxOffset, maxOffset]
        offsetX = Math.max(Math.min(offsetX, maxOffset), -maxOffset);
        offsetY = Math.max(Math.min(offsetY, maxOffset), -maxOffset);
        
        // Áp dụng offset vào vị trí model
        pointsMeshRef.current.position.x = initialPositionRef.current.x - offsetX;
        pointsMeshRef.current.position.y = initialPositionRef.current.y - offsetY;
      }
    };

    // Đăng ký event listeners
    window.addEventListener('scene-resize', handleResize);
    window.addEventListener('before-render', handleBeforeRender);

    // Cleanup
    return () => {
      if (pointsMeshRef.current && scene.current) {
        scene.current.remove(pointsMeshRef.current);
        pointsMeshRef.current.geometry.dispose();
        if (pointsMeshRef.current.material instanceof THREE.Material) {
          pointsMeshRef.current.material.dispose();
        }
      }
      
      window.removeEventListener('scene-resize', handleResize);
      window.removeEventListener('before-render', handleBeforeRender);
    };
  }, [modelPath, scene, camera, raycaster, mouse, loadingManager]);

  return null; // Component này không render gì, chỉ thêm objects vào scene
};

export default ModelModule;