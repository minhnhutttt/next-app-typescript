'use client';

import React, { useEffect, useRef, useState } from 'react';
// @ts-ignore
import * as THREE from 'three';

// Định nghĩa các types
interface ModularSceneProps {
  children?: React.ReactNode;
  onLoadingComplete?: () => void;
}

// Component Scene chính để điều khiển toàn bộ Three.js scene
const ModularScene: React.FC<ModularSceneProps> = ({ children, onLoadingComplete }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const clockRef = useRef<THREE.Clock | null>(null);
  const raycasterRef = useRef<THREE.Raycaster>(new THREE.Raycaster());
  const mouseRef = useRef<THREE.Vector2>(new THREE.Vector2());
  const loadingManagerRef = useRef<THREE.LoadingManager>(new THREE.LoadingManager());

  useEffect(() => {
    if (!canvasRef.current) return;

    // Setup loading manager
    if (onLoadingComplete) {
      loadingManagerRef.current.onLoad = () => {
        onLoadingComplete();
      };
    }

    // Khởi tạo scene, camera, renderer
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 5);
    scene.add(camera);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 1);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current = renderer;

    const clock = new THREE.Clock();
    clockRef.current = clock;

    // Event handlers
    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;
      
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      // Cập nhật camera
      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      
      // Cập nhật renderer
      rendererRef.current.setSize(width, height);
      rendererRef.current.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      
      // Phát ra event resize để các module con có thể lắng nghe
      window.dispatchEvent(new CustomEvent('scene-resize', { 
        detail: { width, height } 
      }));
    };

    // Animation loop
    const animate = () => {
      if (!clockRef.current) return;
      
      const elapsedTime = clockRef.current.getElapsedTime();
      
      // Phát ra event trước khi render để các module con có thể cập nhật
      window.dispatchEvent(new CustomEvent('before-render', { 
        detail: { time: elapsedTime, mouse: mouseRef.current } 
      }));
      
      // Render
      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
      
      // Tiếp tục animation loop
      requestAnimationFrame(animate);
    };
    
    // Đăng ký event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    
    // Khởi tạo kích thước màn hình
    handleResize();
    
    // Bắt đầu animation loop
    animate();
    
    // Cleanup khi component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      
      window.removeEventListener('scene-resize', () => {});
      window.removeEventListener('before-render', () => {});
      
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, [onLoadingComplete]);

  // Context value
  const sceneContext = {
    scene: sceneRef,
    camera: cameraRef,
    renderer: rendererRef,
    clock: clockRef,
    raycaster: raycasterRef,
    mouse: mouseRef,
    loadingManager: loadingManagerRef
  };

  // Sử dụng React Context để truyền scene và các tham chiếu xuống components con
  return (
    <>
      <SceneContext.Provider value={sceneContext}>
        {children}
      </SceneContext.Provider>
      <canvas ref={canvasRef} className="webgl w-full h-screen" />
    </>
  );
};

// Context API để chia sẻ scene và các tham chiếu
export const SceneContext = React.createContext<{
  scene: React.RefObject<THREE.Scene | null>;
  camera: React.RefObject<THREE.PerspectiveCamera | null>;
  renderer: React.RefObject<THREE.WebGLRenderer | null>;
  clock: React.RefObject<THREE.Clock | null>;
  raycaster: React.RefObject<THREE.Raycaster>;
  mouse: React.RefObject<THREE.Vector2>;
  loadingManager: React.RefObject<THREE.LoadingManager>;
}>({
  scene: { current: null },
  camera: { current: null },
  renderer: { current: null },
  clock: { current: null },
  raycaster: { current: new THREE.Raycaster() },
  mouse: { current: new THREE.Vector2() },
  loadingManager: { current: new THREE.LoadingManager() }
});

export default ModularScene;