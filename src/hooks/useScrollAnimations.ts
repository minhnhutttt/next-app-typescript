import { useLayoutEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.config({
  nullTargetWarn: false,
});

const useScrollAnimations = () => {
  const app = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const animations: { [key: string]: (el: HTMLElement) => void } = {
      "fade-up": (el: HTMLElement) =>
        gsap.from(el, {
          autoAlpha: 0,
          y: 30,
          duration: 0.5,
          ease: "Power2.easeInOut",
          scrollTrigger: { trigger: el },
        }),
      "fade-down": (el: HTMLElement) =>
        gsap.from(el, {
          autoAlpha: 0,
          y: -30,
          duration: 0.5,
          ease: "Power2.easeInOut",
          scrollTrigger: { trigger: el },
        }),
    };

    let ctx = gsap.context(() => {
      Object.entries(animations).forEach(([className, animation]) => {
        gsap.utils.toArray<HTMLElement>(`.${className}`).forEach(animation);
      });
    }, app);

    return () => ctx.revert();
  }, []);

  return app;
};

export default useScrollAnimations;
