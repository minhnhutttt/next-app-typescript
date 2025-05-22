import Link from 'next/link';
import ParticleScene, {  SceneConfig } from '../../components/ParticleScene';
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
      
      <div className="absolute md:top-10 md:left-10 top-7 left-7 z-50">
        <a href="/" className="">
          <img className="max-md:w-[150px]" src="/assets/images/logo.svg" alt="" />
        </a>
      </div>
      <div
        className="absolute top-16 md:top-1/2 md:-translate-y-1/2 inset-x-0 px-10 z-[10]"
      >
        <p className="w-[30rem] text-[#D8C115]">
          ARDOREX supports advanced digital marketing practices and provides
          comprehensive solutions to customer challenges in collaboration with
          affiliated specialized business partners.
        </p>
      </div>

      <footer className="fixed bottom-0 left-0 w-full z-[999] pb-10 md:pb-20 px-10">
        <div className="relative site-max flex justify-between items-end">
          <a
            href="/"
            className="btn inline-flex relative py-2 px-5 leading-none text-white text-[14px]"
            ><div className="absolute inset-0">
              <div className="absolute inset-0 overflow-hidden">
                <div
                  className="btn-line-top-l absolute left-0 top-0 right-0 border-b border-current origin-left w-4"
                ></div>
                <div
                  className="btn-line-side-l absolute left-0 top-0 bottom-0 border-r border-current origin-bottom"
                ></div>
                <div
                  className="btn-line-bottom-l absolute left-0 bottom-0 right-0 border-t border-current origin-left w-4"
                ></div>
              </div>
              <div className="absolute inset-0 overflow-hidden">
                <div
                  className="btn-line-top-r absolute right-0 top-0 right-0 border-b border-current origin-right w-4"
                ></div>
                <div
                  className="btn-line-side-r absolute right-0 top-0 bottom-0 border-l border-current origin-top"
                ></div>
                <div
                  className="btn-line-bottom-r absolute right-0 bottom-0 right-0 border-t border-current origin-right w-4"
                ></div>
              </div>
            </div>
            <div className="relative z-2 uppercase">Liquid</div>
          </a>
          <Link
            href="/venture/"
            className="btn inline-flex relative py-2 px-5 leading-none text-white text-[14px]"
            ><div className="absolute inset-0">
              <div className="absolute inset-0 overflow-hidden">
                <div
                  className="btn-line-top-l absolute left-0 top-0 right-0 border-b border-current origin-left w-4"
                ></div>
                <div
                  className="btn-line-side-l absolute left-0 top-0 bottom-0 border-r border-current origin-bottom"
                ></div>
                <div
                  className="btn-line-bottom-l absolute left-0 bottom-0 right-0 border-t border-current origin-left w-4"
                ></div>
              </div>
              <div className="absolute inset-0 overflow-hidden">
                <div
                  className="btn-line-top-r absolute right-0 top-0 right-0 border-b border-current origin-right w-4"
                ></div>
                <div
                  className="btn-line-side-r absolute right-0 top-0 bottom-0 border-l border-current origin-top"
                ></div>
                <div
                  className="btn-line-bottom-r absolute right-0 bottom-0 right-0 border-t border-current origin-right w-4"
                ></div>
              </div>
            </div>
            <div className="relative z-2 uppercase">VENTURE</div>
          </Link>
          <a
            href="mailto:INFO@ARDOREX.NET"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex text-gray transition-colors duration-300 ease-out has-hover:hover:text-yellow pointer-events-auto text-gray-300 uppercase"
          >
            <span>[email&nbsp;protected]</span>
          </a>
        </div>
      </footer>
    </main>
  );
};

export default HomePage;