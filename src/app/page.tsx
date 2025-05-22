import ParticleScene, {  SceneConfig } from '../components/ParticleScene';
import type { NextPage } from 'next';

// Predefined configurations for different pages
 const SCENE_CONFIGS: Record<string, SceneConfig> = {
  home: {
    modelPath: '/models/models02.glb',
    texturePath: '/textures/pattern.jpg',
    particleSize: 0.1,
    particleColor: {
      hover: [1.0, 0.7, 0.0], // Yellow
      normal: [0.1, 0.1, 0.1], // Dark gray
    },
    backgroundEffect: {
      speed: 0.2,
      intensity: 0.6,
    },
    controls: {
      showUI: true,
      morphLabels: ['Shape 1', 'Shape 2', 'Shape 3'],
    },
  },
};
const HomePage: NextPage = () => {
  return (
    <main className="w-full h-screen">
      <ParticleScene config={SCENE_CONFIGS.home} />
      
      {/* Optional: Add some content overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center text-white z-20">
          
        </div>
      </div>
    </main>
  );
};

export default HomePage;