"use client"
import { ReactNode, useEffect, useRef} from 'react';
import { Power2, gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
interface FeatureProps {
  image: string;
  children: ReactNode
  
}

const Feature = ({ image, children }: FeatureProps) => {

    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const container = containerRef.current;
      let timeout: NodeJS.Timeout | undefined;
  
      const handleMouseMove = (e: MouseEvent) => {
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => callParallax(e), 1);
      };
  
      const callParallax = (e: MouseEvent) => {
        parallaxIt(e, '.parallax', -100);
      };
  
      const parallaxIt = (e: MouseEvent, target: string, movement: number) => {
        const containerRect = container!.getBoundingClientRect();
        const relX = e.pageX - containerRect.left;
        const relY = e.pageY - containerRect.top;
  
        gsap.to(target, {
          duration: 3,
          x: ((relX - containerRect.width / 2) / containerRect.width) * movement,
          y: ((relY - containerRect.height / 2) / containerRect.height) * movement,
          ease: Power2.easeOut,
        });
      };
  
      if (container) {
        container.addEventListener('mousemove', handleMouseMove);
      }
  
      return () => {
        if (container) {
          container.removeEventListener('mousemove', handleMouseMove);
        }
      };
    }, []);

  return (
    <div ref={containerRef} className="max-md:h-[40vw] h-[28.819vw] dt:h-[415px] overflow-hidden relative flex bg-[url('/assets/images/feature.png')] bg-cover">
        <div className="absolute inset-0 flex items-center leading-[1.1] font-anton lg:text-[82px] md:text-[60px] text-[30px] text-white px-5 md:px-[34px] z-10">
            {children}    
        </div>
        <figure className="parallax absolute dt:top-[-121px] top-[-2vw] md:top-[-8.472vw] right-[-8.472vw] dt:right-[-122px]">
            <img className="object-cover" src={image} alt="" />
        </figure>
    </div>
  );
};

export default Feature;
