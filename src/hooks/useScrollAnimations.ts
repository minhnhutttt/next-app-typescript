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
          duration: 1,
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
      "zoom-out": (el: HTMLElement) =>
        gsap.from(el, {
          autoAlpha: 0,
          scale: 0.8,
          duration: 0.5,
          ease: "Power2.easeInOut",
          scrollTrigger: { trigger: el },
        }),
       "zoom-in": (el: HTMLElement) =>
        gsap.fromTo(
          el,
          { scale: 0.8, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: "cubic-bezier(0.25, 1, 0.5, 1)",
            scrollTrigger: { trigger: el },
          }
        ),
        "popup": (el: HTMLElement) =>
        gsap.fromTo(
          el,
          { translateY: 40, scale: 0.8, opacity: 0 },
          {
            translateY: 0,
            scale: 1,
            opacity: 1,
            duration: 0.6,
            ease: "cubic-bezier(0.22, 1, 0.36, 1)",
            scrollTrigger: { trigger: el },
          }
        ),
        "slide-gradient": (el: HTMLElement) =>
        gsap.fromTo(
          el,
          { transformOrigin: "left center", scaleX: 0, opacity: 0 },
          {
            scaleX: 1,
            opacity: 1,
            duration: 0.9,
            delay: 0.3,
            ease: "cubic-bezier(0.22, 1, 0.36, 1)",
            scrollTrigger: { trigger: el },
          }
        ),
        "slide-skew": (el: HTMLElement) =>
          gsap.fromTo(
            el,
            { transform: "translate(-180px,30px)", opacity: 0 },
            {
              transform: "translate(0,0)",
              opacity: 1,
              duration: 0.4,
              ease: "cubic-bezier(0.25, 1, 0.5, 1)",
              scrollTrigger: { trigger: el },
            }
          ),
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
