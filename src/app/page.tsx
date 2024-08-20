"use client";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { DDSLoader, GLTFLoader } from "three-stdlib";
import { Suspense, useRef, useState, useEffect } from "react";
import { Group } from "three";

interface SceneProps {
  onModelZoomed: () => void;
  onMouseMove: () => void;
  onModelClick: () => void;
}

THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader());

const Scene: React.FC<SceneProps> = ({
  onModelZoomed,
  onMouseMove,
  onModelClick,
}) => {
  const gltf = useLoader(GLTFLoader, "/assets/model/model.gltf");
  const modelRef = useRef<Group>(null);
  const [clicked, setClicked] = useState<boolean>(false);
  const [scale, setScale] = useState<number>(1);
  const [opacity, setOpacity] = useState<number>(1);

  useFrame((state) => {
    const { mouse, viewport } = state;
    if (modelRef.current) {
      if (!clicked) {
        const x = mouse.x * viewport.width * 30;
        const y = mouse.y * viewport.height * 50;
        modelRef.current.lookAt(x, y, 500);
        onMouseMove();
      } else {

        if (opacity > 0.2) {
          setOpacity((prevOpacity) => Math.max(prevOpacity - 0.05, 0.2));
        }

        if (scale < 10) {
          setScale((prevScale) => prevScale + 0.1);
          modelRef.current.scale.set(scale, scale, scale);
        } else {
          modelRef.current.visible = false;
          onModelZoomed();
        }

        modelRef.current.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            if (Array.isArray(child.material)) {
              child.material.forEach((material) => {
                material.transparent = true;
                material.opacity = opacity;
              });
            } else {
              child.material.transparent = true;
              child.material.opacity = opacity;
            }
          }
        });
      }
    }
  });

  const handleClick = () => {
    setClicked(true);
    onModelClick();
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

export default function Home() {
  const [modelZoomed, setModelZoomed] = useState<boolean>(false);
  const audio1Ref = useRef<HTMLAudioElement>(null);
  const audio2Ref = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (audio1Ref.current && audio2Ref.current) {
      audio1Ref.current.muted = isMuted;
      audio2Ref.current.muted = isMuted;
    }
  }, [isMuted]);

  const handleModelZoomed = () => {
    setModelZoomed(true);
    if (audio1Ref.current) {
      audio1Ref.current.pause();
    }
  };

  const playAudio1 = () => {
    if (audio1Ref.current) {
      audio1Ref.current.play();
    }
  };

  const playAudio2 = () => {
    if (audio2Ref.current) {
      audio2Ref.current.currentTime = 0;
      audio2Ref.current.play();
    }
  };

  const toggleMute = () => {
    setIsMuted((prevState) => !prevState);
  };

  return (
    <div className="h-screen w-full">
      <div className="fixed inset-0">
        <Canvas>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 10]} intensity={1} />
            <directionalLight position={[-10, -10, -10]} intensity={0.5} />
            <Scene
              onModelZoomed={handleModelZoomed}
              onMouseMove={playAudio1}
              onModelClick={playAudio2}
            />
            <Environment preset="city" />
          </Suspense>
        </Canvas>
      </div>
      <div
        className={`flex w-full relative items-center justify-center h-screen text-[100px] font-bold transition-opacity duration-500 ${
          modelZoomed ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        Content
      </div>
      <audio
        ref={audio1Ref}
        id="audio-1"
        src="/assets/music/bike-engine.mp3"
        loop
      ></audio>
      <audio
        ref={audio2Ref}
        id="audio-2"
        src="/assets/music/bike2.mp3"
      ></audio>
    {!modelZoomed &&
      <button
        onClick={toggleMute}
        className="fixed right-5 bottom-5 flex items-center justify-end md:h-20 h-[55px] gap-10"
      >
        {isMuted ? 'Trun On' : 'Trun Off'}
        <figure className="w-[170px] flex items-center">
        {isMuted ? (
          <img
            className="md:w-[90px] w-[150px]"
            src="/assets/images/mute.svg"
            alt=""
          />
        ) : (
          <img
            className="md:w-[170px] w-[150px]"
            src="/assets/images/unmute.svg"
            alt=""
          />
        )}
        </figure>
      </button>
      }
    </div>
  );
}
