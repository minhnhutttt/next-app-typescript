"use client"
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const useDarkMode = () => {
  const triggerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = triggerRef.current;

    if (element) {
      ScrollTrigger.create({
        trigger: element,
        start: 'top bottom',
        end: 'bottom center',
        onEnter: () => document.body.classList.add('dark'),
        onLeave: () => document.body.classList.remove('dark'),
        onEnterBack: () => document.body.classList.add('dark'),
        onLeaveBack: () => document.body.classList.remove('dark'),
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, []);

  return triggerRef;
};

export default useDarkMode;
