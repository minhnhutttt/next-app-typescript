"use client"
import { ReactNode, useEffect, useRef } from 'react';
import { Power2, gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ImageHover = ({ image }: { image: string }) => {

    const imageRef = useRef<HTMLDivElement>(null);
    const figureRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const container = imageRef.current;
      const figure = figureRef.current;
      let timeout: NodeJS.Timeout | undefined;
  
      const handleMouseMove = (e: MouseEvent) => {
        callParallax(e);
      };
  
      const callParallax = (e: MouseEvent) => {
        parallaxIt(e, figure, -60);
      };
  
      const parallaxIt = (e: MouseEvent, target: HTMLDivElement | null, movement: number) => {
        if (!target) return;
        const containerRect = container!.getBoundingClientRect();
        const relX = e.clientX - containerRect.left;
        const relY = e.clientY - containerRect.top;
        gsap.to(target, {
          duration: 3,
          x: ((relX - containerRect.width / 2) / containerRect.width) * movement,
          y: ((relY - containerRect.height / 2) / containerRect.height) * movement,
          ease: Power2.easeOut,
        });
      };
  
      const handleMouseLeave = () => {
        gsap.to(figure, {
          duration: 3,
          x: 0,
          y: 0,
          ease: Power2.easeOut,
        });
      };
  
      if (container) {
        container.addEventListener('mousemove', handleMouseMove);
        container.addEventListener('mouseleave', handleMouseLeave);
      }
  
      return () => {
        if (container) {
          container.removeEventListener('mousemove', handleMouseMove);
          container.removeEventListener('mouseleave', handleMouseLeave);
        }
      };
    }, []);

  return (
    <div ref={imageRef}>
      <figure ref={figureRef} className="parallax relative">
        <img className="object-cover md:rounded-tl-[60px] max-md:rounded-t-[30px] md:min-h-[400px]" src={image} alt="" />
      </figure>
    </div>
  );
};

export default ImageHover;
