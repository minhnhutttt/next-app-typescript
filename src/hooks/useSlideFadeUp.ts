// hooks/useSlideFadeUp.ts
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface SlideFadeUpOptions {
  duration?: number;
  delay?: number;
  y?: number;
  stagger?: number;
  ease?: string;
  scale?: number;
  selector?: string;
  triggerOnActive?: boolean;
}

export const useSlideFadeUp = (
  isActive: boolean,
  options: SlideFadeUpOptions = {}
) => {
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  const {
    duration = 1,
    delay = 0.3,
    y = 80,
    stagger = 0.2,
    ease = "power2.out",
    scale = 0.9,
    selector = '.fade-item',
    triggerOnActive = true
  } = options;

  useEffect(() => {
    if (!ref.current || hasAnimated.current) return;

    if (!triggerOnActive || isActive) {
      const elements = ref.current.querySelectorAll(selector);
      
      if (elements.length > 0) {
        gsap.set(elements, {
          opacity: 0,
          y: y,
          scale: scale
        });

        gsap.to(elements, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: duration,
          ease: ease,
          stagger: stagger,
          delay: delay
        });
      } else {
        gsap.set(ref.current, {
          opacity: 0,
          y: y,
          scale: scale
        });

        gsap.to(ref.current, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: duration,
          ease: ease,
          delay: delay
        });
      }
      
      hasAnimated.current = true;
    }
  }, [isActive, duration, delay, y, stagger, ease, scale, selector, triggerOnActive]);

  return ref;
};

export const useSimpleFadeUp = (options: Omit<SlideFadeUpOptions, 'triggerOnActive'> = {}) => {
  const ref = useRef<HTMLDivElement>(null);

  const {
    duration = 1,
    delay = 0.3,
    y = 50,
    stagger = 0.2,
    ease = "power2.out",
    scale = 0.9,
    selector = '.fade-item'
  } = options;

  useEffect(() => {
    if (!ref.current) return;

    const elements = ref.current.querySelectorAll(selector);
    
    if (elements.length > 0) {
      gsap.fromTo(elements, 
        { opacity: 0, y: y, scale: scale },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          duration: duration,
          ease: ease,
          stagger: stagger,
          delay: delay
        }
      );
    } else {
      gsap.fromTo(ref.current,
        { opacity: 0, y: y, scale: scale },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          duration: duration,
          ease: ease,
          delay: delay
        }
      );
    }
  }, []); 

  return ref;
};