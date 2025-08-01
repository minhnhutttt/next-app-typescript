"use client"
import React, { useRef, useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Section01 } from './Section01';
import { Section02 } from './Section02';

interface SlideData {
  id: number;
  title: string;
  content: string;
  bgColor: string;
}

const slides: SlideData[] = [
  { id: 0, title: "Top", content: "Welcome to our presentation", bgColor: "bg-blue-500" },
  { id: 1, title: "About", content: "Learn about our company", bgColor: "bg-green-500" },
  { id: 2, title: "Services", content: "Discover our services", bgColor: "bg-purple-500" },
  { id: 3, title: "Portfolio", content: "View our work", bgColor: "bg-red-500" },
  { id: 4, title: "Contact", content: "Get in touch with us", bgColor: "bg-yellow-500" },
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

      // Optional: Trigger animation when slide transition completes
      splide.on('moved', (newIndex: number) => {
        // Animation đã được handle trong component con qua isActive prop
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
      <div className="fixed left-2 md:left-8 top-1/2 transform -translate-y-1/2 z-20 md:space-y-4 space-y-3">
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
              <span className="text-[14px] md:text-[20px] group-[.is-active]:text-[#2EDCFF]">
                {formatSlideNumber(index)}
              </span>
              
              <span className="group-[.is-active]:flex hidden text-[10px] md:text-[16px] uppercase tracking-wider md:items-center max-md:flex-col max-md:!hidden">
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
          <Section01 isActive={currentSlide === 0} />
        </SplideSlide>
        <SplideSlide className="h-full">
          <Section02 isActive={currentSlide === 1} />
        </SplideSlide>
        <SplideSlide className="h-full">
          <Section02 isActive={currentSlide === 1} />
        </SplideSlide>
        <SplideSlide className="h-full">
          <Section02 isActive={currentSlide === 1} />
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default ContainerPage;