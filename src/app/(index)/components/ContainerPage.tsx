"use client"
import dynamic from 'next/dynamic';
import React, { useRef, useState, useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Top } from './Top';
import { WhatIs } from './WhatIs';
import { Vision } from './Vision';
import { Platform } from './Platform';
import { Benefits } from './Benefits';
import { Token } from './Token';
import { Roadmap } from './Roadmap';
import { Revenue } from './Revenue';

const ParticlesBackground = dynamic(() => import('@/components/ParticlesBackground'), {
  ssr: false,
  loading: () => <div className="particles-loading" />
});

const slides = [
  { id: 0, title: "TOP", Component: Top },
  { id: 1, title: "What is", Component: WhatIs },
  { id: 2, title: "Vision", Component: Vision },
  { id: 3, title: "Platform", Component: Platform },
  { id: 4, title: "Benefits", Component: Benefits },
  { id: 5, title: "Token", Component: Token },
  { id: 6, title: "Roadmap", Component: Roadmap },
  { id: 7, title: "Revenue", Component: Revenue },
];

function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

const ContainerPage: React.FC = () => {
  const splideRef = useRef<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activatedSlides, setActivatedSlides] = useState<Set<number>>(new Set([0]));
  const [isDesktop, setIsDesktop] = useState<boolean>(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const previousIsDesktop = usePrevious(isDesktop);

  useEffect(() => {
    if (
      isDesktop &&
      previousIsDesktop === false &&
      splideRef.current?.splide
    ) {
      const splide = splideRef.current.splide;
      splide.go(0);
      setCurrentSlide(0);
      setActivatedSlides(new Set([0]));
    }
  }, [isDesktop, previousIsDesktop]);

  const handleSplideMounted = () => {
    const splide = splideRef.current?.splide;
    if (!splide) return;

    const onMove = (newIndex: number) => {
      setCurrentSlide(newIndex);
      setActivatedSlides(prev => new Set(prev).add(newIndex));
    };

    splide.on('move', onMove);
  };

  const goToSlide = (index: number) => {
    if (splideRef.current) {
      splideRef.current.splide.go(index);
    }
  };

  const isSlideActivated = (index: number): boolean => {
    return activatedSlides.has(index);
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[url(/assets/images/bg-02.png)] bg-cover bg-no-repeat bg-center">
      <ParticlesBackground />

      {isDesktop && (
        <div className="fixed left-2 md:left-[min(4vmin,32px)] top-1/2 transform -translate-y-1/2 z-20 md:space-y-4 space-y-3">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`cursor-pointer group transition-all duration-300 ${
                currentSlide === index
                  ? 'text-white font-bold is-active'
                  : 'text-white/60 font-light'
              }`}
              onClick={() => goToSlide(index)}
            >
              <div className="flex md:items-center md:space-x-3 max-md:flex-col">
                <span className="text-[14px] md:text-[min(2.5vmin,20px)] group-[.is-active]:text-[#2EDCFF]">
                  {index.toString().padStart(2, '0')}
                </span>
                <span className="group-[.is-active]:flex hidden text-[10px] md:text-[min(2vmin,16px)] tracking-wider md:items-center max-md:flex-col max-md:!hidden">
                  <span className="md:w-4 w-px h-2 md:h-px bg-white max-md:ml-2 md:mr-3"></span>
                  {slide.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {isDesktop ? (
        <Splide
          ref={splideRef}
          onMounted={handleSplideMounted}
          options={{
            direction: 'ttb',
            height: '100vh',
            wheel: true,
            pagination: false,
            arrows: false,
            drag: true,
            snap: true,
            speed: 1500,
            autoplay: false,
            pauseOnHover: true,
            waitForTransition: true,
            wheelSleep: 0.5,
          }}
          className="h-full"
        >
          {slides.map(({ id, Component }, index) => (
            <SplideSlide className="h-full" key={id}>
              <Component isActive={isSlideActivated(index)} />
            </SplideSlide>
          ))}
        </Splide>
      ) : (
        <div className="flex flex-col">
          {slides.map(({ id, Component }, index) => (
            <div key={id}>
              <Component isActive={true} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContainerPage;
