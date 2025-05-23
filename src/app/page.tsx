import ParticleScene, {  SceneConfig } from '../components/ParticleScene';
import type { NextPage } from 'next';

 const SCENE_CONFIGS: Record<string, SceneConfig> = {
  home: {
    modelPath: '/models/models.glb',
    texturePath: '/textures/pattern.jpg',
    particleSize: 0.07,
    particleColor: {
      hover: [1.0, 0.7, 0.0],
      normal: [0.04, 0.04, 0.04],
    },
    backgroundEffect: {
      speed: 0.2,
      intensity: 0.3,
    },
  },
};
const HomePage: NextPage = () => {
  return (
    <main className="w-full h-screen">
      <ParticleScene config={SCENE_CONFIGS.home} />
      <div
        className="absolute top-16 md:top-1/2 md:-translate-y-1/2 inset-x-0 px-10 z-[10]"
      >
        <p className="md:w-[30rem] text-[#D8C115]">
          ARDOREX supports advanced digital marketing practices and provides
          comprehensive solutions to customer challenges in collaboration with
          affiliated specialized business partners.
        </p>
      </div>
    </main>
  );
};

export default HomePage;