import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three-stdlib';
import { MTLLoader } from 'three-stdlib';

export default function Home() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Khởi tạo cảnh, camera và renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Tạo ánh sáng
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 1, 1).normalize();
    scene.add(light);

    // Tải mô hình .obj và .mtl
    const mtlLoader = new MTLLoader();
    mtlLoader.load('/assets/standard_motorcycle_285.mtl', (materials) => {
      materials.preload();

      const objLoader = new OBJLoader();
      objLoader.setMaterials(materials);
      objLoader.load('/assets/standard_motorcycle_285.obj', (object) => {
        scene.add(object);
      });
    });

    // Đặt vị trí camera
    camera.position.z = 5;

    // Hàm render mô hình 3D
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    // Thêm sự kiện xoay mô hình theo vị trí chuột
    const onMouseMove = (event: MouseEvent) => {
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

      scene.children.forEach((child) => {
        if (child instanceof THREE.Group) {
          child.rotation.y = mouseX * Math.PI;
          child.rotation.x = mouseY * Math.PI / 2;
        }
      });
    };

    window.addEventListener('mousemove', onMouseMove);

    // Dọn dẹp khi component bị unmount
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} />;
}
