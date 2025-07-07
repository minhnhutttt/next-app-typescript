"use client"
import useScrollAnimations from '@/hooks/useScrollAnimations';
import ParticleScene, { SceneConfig } from '../components/ParticleScene';
import type { NextPage } from 'next';
import { useLayoutEffect, useEffect, useState } from 'react';
import { useScramble } from 'use-scramble';
import { useLoading } from '@/contexts/LoadingContext';

const SCENE_CONFIGS: Record<string, SceneConfig> = {
  home: {
    modelPath: '/models/a.glb',
    texturePath: '/textures/pattern.png',
    particleSize: 0.07,
    particleColor: {
      hover: [1.0, 0.35, 0.05],
      normal: [0.04, 0.04, 0.04],
    },
    backgroundEffect: {
      speed: 0.2,
      intensity: 0.3,
    },
  },
};

const HomePage: NextPage = () => {
  const { isLoading } = useLoading();
  const [shouldStartAnimations, setShouldStartAnimations] = useState(false);
  const aniRef = useScrollAnimations();
  
  const { ref, replay } = useScramble({ 
    text: "ARDOREX supports advanced digital marketing practices and provides comprehensive solutions to customer challenges in collaboration with affiliated specialized business partners." ,
    speed: 2.0,
  });

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        replay()
        setShouldStartAnimations(true);
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [isLoading]);


  return (
    <main ref={aniRef} className="w-full h-screen z-10">
      <ParticleScene config={SCENE_CONFIGS.home} />
      <div
        className="absolute top-16 md:top-1/2 md:-translate-y-1/2 inset-x-0 px-10 z-[10]"
      >
        <p 
          ref={ref} 
          className={`fade-up md:w-[30rem] text-[#FF9016] transition-opacity duration-500`}
        >
        </p>
      </div>
    </main>
  );
};

export default HomePage;