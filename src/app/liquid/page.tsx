"use client";
import ParticleScene, { SceneConfig } from "../../components/ParticleScene";
import type { NextPage } from "next";
import { useScramble } from "use-scramble";
import { useEffect } from "react";
import { useLoading } from "@/contexts/LoadingContext";

const SCENE_CONFIGS: Record<string, SceneConfig> = {
  liquid: {
    modelPath: "/models/models4.glb",
    texturePath: "/textures/pattern.jpg",
    particleSize: 0.09,
    particleColor: {
      hover: [1.0, 0.35, 0.05],
      normal: [0.04, 0.04, 0.04],
    },
    backgroundEffect: {
      speed: 0.2,
      intensity: 0.3,
    },
    rippleEffect: {
        speed: 1.5,
        frequency: 1.0,
        width: 1.2, 
        intensity: 0.4 
    }
  },
};

const LiquidPage: NextPage = () => {
   const { isLoading } = useLoading();
  const { ref, replay } = useScramble({ 
      text: "ARDOREX supports advanced digital marketing practices and provides comprehensive solutions to customer challenges in collaboration with affiliated specialized business partners." ,
      speed: 2.0,
    });

  useEffect(() => {
      if (!isLoading) {
        const timer = setTimeout(() => {
          replay()
        }, 500);
        
        return () => clearTimeout(timer);
      }
    }, [isLoading]);
  return (
    <main className="w-full h-screen overflow-hidden">
      <ParticleScene
        config={SCENE_CONFIGS.liquid}
      />
      <div
        className="absolute top-16 md:top-1/2 md:-translate-y-1/2 inset-x-0 px-10 z-[10] flex justify-end"
      >
        <p ref={ref} className="fade-up md:w-[30rem] text-[#FF9016]">
        </p>
      </div>
    </main>
  );
};

export default LiquidPage;