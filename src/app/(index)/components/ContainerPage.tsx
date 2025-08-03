"use client"
import React, { useRef, useEffect, useState } from 'react';
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

interface SlideData {
  id: number;
  title: string;
}

const slides: SlideData[] = [
  { id: 0, title: "TOP" },
  { id: 1, title: "What is" },
  { id: 2, title: "Vision"},
  { id: 3, title: "Platform" },
  { id: 4, title: "Benefits" },
  { id: 5, title: "Token" },
  { id: 6, title: "Roadmap" },
  { id: 7, title: "Revenue" },
];

const ContainerPage: React.FC = () => {
  const splideRef = useRef<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (splideRef.current) {
      const splide = splideRef.current.splide;
      
      splide.on('move', (newIndex: number) => {
        setCurrentSlide(newIndex);
      });
    }
  }, []);

  const goToSlide = (index: number) => {
    if (splideRef.current) {
      splideRef.current.splide.go(index);
    }
  };

  const formatSlideNumber = (num: number): string => {
    return num.toString().padStart(2, '0');
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[url(/assets/images/bg-02.png)] bg-cover bg-no-repeat bg-center">
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
                {formatSlideNumber(index)}
              </span>
              
              <span className="group-[.is-active]:flex hidden text-[10px] md:text-[min(2vmin,16px)] tracking-wider md:items-center max-md:flex-col max-md:!hidden">
                <span className="md:w-4 w-px h-2 md:h-px bg-white max-md:ml-2 md:mr-3"></span>{slide.title}
              </span>
            </div>
          </div>
        ))}
      </div>

      <Splide
        ref={splideRef}
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
        <SplideSlide className="h-full">
          <Top isActive={currentSlide === 0} />
        </SplideSlide>
        <SplideSlide className="h-full">
          <WhatIs isActive={currentSlide === 1} />
        </SplideSlide>
        <SplideSlide className="h-full">
          <Vision isActive={currentSlide === 2} />
        </SplideSlide>
        <SplideSlide className="h-full">
          <Platform isActive={currentSlide === 3} />
        </SplideSlide>
        <SplideSlide className="h-full">
          <Benefits isActive={currentSlide === 4} />
        </SplideSlide>
        <SplideSlide className="h-full">
          <Token isActive={currentSlide === 5} />
        </SplideSlide>
        <SplideSlide className="h-full">
          <Roadmap isActive={currentSlide === 6} />
        </SplideSlide>
        <SplideSlide className="h-full">
          <Revenue isActive={currentSlide === 7} />
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default ContainerPage;