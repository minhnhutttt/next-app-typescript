"use client";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { DDSLoader, GLTFLoader } from "three-stdlib";
import { Suspense, useRef, useState } from "react";
import { Group, Mesh } from "three";

interface SceneProps {
  onModelZoomed: () => void;
}

THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader());

const Scene: React.FC<SceneProps> = ({ onModelZoomed }) => {
  const gltf = useLoader(GLTFLoader, "/assets/model.gltf");
  const modelRef = useRef<Group>(null);
  const [clicked, setClicked] = useState<boolean>(false);
  const [scale, setScale] = useState<number>(1);

  useFrame((state) => {
    const { mouse, viewport } = state;
    if (modelRef.current) {
      if (!clicked) {
        const x = mouse.x * viewport.width * 30;
        const y = mouse.y * viewport.height * 50;
        modelRef.current.lookAt(x, y, 500);
      } else {
        if (scale < 10) {
          setScale((prevScale) => prevScale + 0.1);
          modelRef.current.scale.set(scale, scale, scale);
        } else {
          modelRef.current.visible = false;
          onModelZoomed();
        }
      }
    }
  });

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <>
      <primitive
        ref={modelRef}
        dispose={null}
        object={gltf.scene}
        scale={[scale, scale, scale]}
        position={[0, -40, -180]}
        onClick={handleClick}
      />
    </>
  );
};

const App: React.FC = () => {
  const [modelZoomed, setModelZoomed] = useState<boolean>(false);

  const handleModelZoomed = () => {
    setModelZoomed(true);
  };

  return (
    <div className="h-screen w-full">
      <div className="fixed inset-0">
        <Canvas>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 10]} intensity={1} />
            <directionalLight position={[-10, -10, -10]} intensity={0.5} />
            <Scene onModelZoomed={handleModelZoomed} />
            <Environment preset="city" />
          </Suspense>
        </Canvas>
      </div>
      <div className={`flex items-center justify-center h-screen text-[100px] font-bold transition-opacity duration-500 ${modelZoomed ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        Content
      </div>
    </div>
  );
};

export default App;
