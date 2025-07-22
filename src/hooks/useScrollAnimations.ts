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
      "js-deco": (el: HTMLElement) => {
        const deco01 = el.querySelector(".js-deco-01") as HTMLElement;
        const deco02 = el.querySelector(".js-deco-02") as HTMLElement;
        const deco03 = el.querySelector(".js-deco-03") as HTMLElement;
        gsap
          .timeline({
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom center",
            },
          })
          .from(deco01, {
            scale: 0,
            opacity: 0,
            duration: 0.4,
            ease: "power1.out",
          })
          .from(deco02, {
            scale: 0,
            opacity: 0,
            duration: 0.4,
            ease: "power1.out",
          },"-=0.2")
          .from(deco03, {
            scale: 0,
            opacity: 0,
            duration: 0.4,
            ease: "power1.out",
          },"-=0.2");
      },
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
