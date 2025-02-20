

"use client";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import {  OrbitControls } from "@react-three/drei";
import { DDSLoader, GLTFLoader } from "three-stdlib";
import { Suspense, useRef } from "react";
import { Group } from "three";

interface SceneProps {
}

THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader());

const Scene: React.FC<SceneProps> = ({
}) => {
  const gltf = useLoader(GLTFLoader, "/assets/model/scene.gltf");
  const modelRef = useRef<Group>(null);

  useFrame((state) => {
    const { mouse, viewport } = state;
    if (modelRef.current) {
        const x = mouse.x * viewport.width * 30;
        const y = mouse.y * viewport.height * 50;
        modelRef.current.lookAt(x, y, 500);
    }
  });

  return (
    <>
      <primitive
        ref={modelRef}
        dispose={null}
        object={gltf.scene}
        scale={[60,60,60]}
        position={[0, -80, -170]}
      />
    </>
  );
};

export default function Model() {
  return (
    <div className="h-screen w-full">
      <div className="h-[90%] w-[90%] mx-auto bg-[url(/assets/images/bg3d.png)] bg-cover">
        <Canvas>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 10]} intensity={1} />
            <OrbitControls 
              target={[0, -40, -170]} 
              enableDamping={true}
              enableZoom={false}
              enablePan={false} 
              enableRotate={true} 
              minAzimuthAngle={-Math.PI / 6}
              maxAzimuthAngle={Math.PI / 6}
              minPolarAngle={Math.PI / 2 - 0.5}
              maxPolarAngle={Math.PI / 2 + 0.5}
            />
            <Scene
            />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}
