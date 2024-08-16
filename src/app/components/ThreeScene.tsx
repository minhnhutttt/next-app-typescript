"use client"
// components/ThreeScene.tsx
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

const ThreeScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Tạo scene
    const scene = new THREE.Scene();

    // Tạo camera và đặt vị trí của nó
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 150; // Bạn có thể điều chỉnh giá trị này nếu cần

    // Tạo renderer và gán kích thước
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // Thêm ánh sáng
    const ambientLight = new THREE.AmbientLight(0x404040); // ánh sáng mờ
    scene.add(ambientLight);

    // Tải mô hình
    const loader = new OBJLoader();
    loader.load('/assets/standard_motorcycle_285.obj', (obj) => {
      scene.add(obj);
      
      // Điều chỉnh vị trí của mô hình để nó nằm giữa màn hình
      obj.position.set(0, 0, 0); // Đặt mô hình ở trung tâm của scene

      // Tính toán bounding box của mô hình để căn chỉnh
      const box = new THREE.Box3().setFromObject(obj);
      const center = box.getCenter(new THREE.Vector3());
      obj.position.sub(center);
    });

    // Hàm hoạt động để cập nhật renderer
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // Xử lý resize cửa sổ
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);
    onResize();

    // Dọn dẹp khi component bị hủy
    return () => {
      window.removeEventListener('resize', onResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} style={{ width: '100vw', height: '100vh' }} />;
};

export default ThreeScene;
