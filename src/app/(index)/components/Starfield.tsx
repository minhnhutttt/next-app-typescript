"use client";

import {useEffect, useRef} from "react";
import * as THREE from "three";

export default function Starfield() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const sceneRef = useRef<THREE.Scene>();
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const starsRef = useRef<THREE.Mesh[]>([]);
  const planeRef = useRef<THREE.Mesh>();
  const rafRef = useRef<number>();

  useEffect(() => {
    if (!containerRef.current) return;

    // === INIT ===
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x000000, 0.015, 72);

    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 55;

    const renderer = new THREE.WebGLRenderer({
      preserveDrawingBuffer: true,
      alpha: true,
      antialias: true
    });
    renderer.sortObjects = false;
    renderer.autoClearColor = false;
    renderer.setClearColor("#000", 1);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    );
    containerRef.current.appendChild(renderer.domElement);

    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;

    // === STARS ===
    const colors = ["#039108", "#EDED08", "#466A08", "#686708", "#ffffff"];
    const stars: THREE.Mesh[] = [];

    for (let i = 0; i < 3000; i++) {
      const geometry = new THREE.SphereGeometry(0.12 * Math.random(), 10, 10);
      const material = new THREE.MeshBasicMaterial({
        color: new THREE.Color(colors[(Math.random() * colors.length) | 0])
      });
      const star = new THREE.Mesh(geometry, material);
      star.position.set(
        Math.random() * 100 - 50,
        Math.random() * 100 - 50,
        Math.random() * 50 - 25
      );
      scene.add(star);
      stars.push(star);
    }
    starsRef.current = stars;

    // === PLANE ===
    const planeGeometry = new THREE.PlaneGeometry(1000, 500, 1, 1);
    const planeMaterial = new THREE.MeshBasicMaterial({
      color: 0x000000,
      transparent: true,
      opacity: 0 
    });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    scene.add(plane);
    planeRef.current = plane;

    // === LOOP ===
    const animate = () => {
      rafRef.current = requestAnimationFrame(animate);
      if (!rendererRef.current || !sceneRef.current || !cameraRef.current) return;

      for (let i = 0; i < starsRef.current.length; i++) {
        const s = starsRef.current[i];
        s.position.z += 0.09;
        if (s.position.z >= 60) {
          s.position.x = Math.random() * 100 - 50;
          s.position.y = Math.random() * 100 - 50;
          s.position.z = 5;
        }
      }

      const planeMesh = planeRef.current as THREE.Mesh<
        THREE.PlaneGeometry,
        THREE.MeshBasicMaterial
      >;
      if (planeMesh.material.opacity < 1) {
        planeMesh.material.opacity = Math.min(
          1,
          planeMesh.material.opacity + 0.01
        );
      }

      rendererRef.current.render(sceneRef.current, cameraRef.current);
    };
    animate();

    // resize
    const onResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    // cleanup
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
      starsRef.current.forEach((m) => {
        m.geometry.dispose();
        (m.material as THREE.Material).dispose();
        scene.remove(m);
      });
      starsRef.current = [];
      if (planeRef.current) {
        planeRef.current.geometry.dispose();
        (planeRef.current.material as THREE.Material).dispose();
        scene.remove(planeRef.current);
      }
      planeRef.current = undefined;
      renderer.dispose();
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 h-full w-screen overflow-hidden"
    >
    </div>
  );
}
