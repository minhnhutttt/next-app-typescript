"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MediaItemData } from './InfiniteImageGrid';

interface SlideItem extends MediaItemData {
  id: number;
}

const InfiniteImageSlider = ({mediaItems} : {mediaItems: MediaItemData[]} ) => {
  const mediaList: SlideItem[] = mediaItems.map((item, index) => ({
    ...item,
    id: index + 1
  }));

  const [slides, setSlides] = useState<SlideItem[]>(mediaList);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  
  const maxVisibleSlides = 5;
  
  const slideGap = 40;
  
  const getPosition = (index: number): number => {
    return index * slideGap;
  };

  const rotateSlides = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    setTimeout(() => {
      setSlides(prevSlides => {
        const newSlides = [...prevSlides];
        const lastSlide = newSlides.pop()!;
        return [lastSlide, ...newSlides];
      });
      
      setIsAnimating(false);
    }, 250);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      rotateSlides();
    }, 2000);

    return () => clearInterval(intervalId);
  }, [isAnimating]);

  return (
    <section className="md:hidden relative flex justify-center pt-[200px] bg-[url(/assets/images/svg-deco.svg)] bg-contain bg-no-repeat bg-center">
      <div 
        className="w-[80vw] max-w-[400px] max-h-[560px] relative h-[calc(160px+80vw)]" 
      >
        <AnimatePresence>
          {slides.slice(0, maxVisibleSlides).map((slide, index) => {
            const position = getPosition(index);
            
            return (
              <motion.div
                key={slide.id}
                className="w-full aspect-square absolute inset-0 rounded-[30px] overflow-hidden"
                initial={{ y: position }}
                animate={{ 
                  y: index === maxVisibleSlides - 1 && isAnimating ? position + slideGap * 2 : position,
                  opacity: index === maxVisibleSlides - 1 && isAnimating ? 0 : 1
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{ zIndex:  index }}
              >
                {slide.type === "image" ? (
                  <img 
                    src={slide.src} 
                    alt={`Slide ${slide.id}`} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <video 
                    src={slide.src}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default InfiniteImageSlider;