'use client';

import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, SplitText);

export const useSplitTextScroll = (selector = '.scroll-text') => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const els = gsap.utils.toArray<HTMLElement>(selector);

      els.forEach((el) => {
        const split = new SplitText(el, { type: 'chars' });

        gsap.set(split.chars, { opacity: 0.1 });

        gsap.to(split.chars, {
          opacity: 1,
          stagger: 0.05,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top 70%',
            end: 'bottom 70%',
            scrub: true,
          },
        });
      });
    });

    return () => ctx.revert();
  }, [selector]);
};
