import { useLayoutEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);
gsap.config({
  nullTargetWarn: false,
});

const useScrollAnimations = () => {
  const app = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const animations: { [key: string]: (el: HTMLElement) => void } = {
      "slide-up": (el: HTMLElement) =>
        gsap.from(el, {
          yPercent: 100,
          rotate: 5,
          duration: 1,
          ease: "Power2.easeInOut",
          transformOrigin: "top left",
          scrollTrigger: { trigger: el },
        }),
      "fade-up": (el: HTMLElement) =>
        gsap.from(el, {
          autoAlpha: 0,
          y: 30,
          duration: 0.6,
          ease: "Power2.easeInOut",
          scrollTrigger: { trigger: el },
        }),
        "js-split": (el: HTMLElement) =>{
          let mySplit = new SplitText(el, {
            type: "lines,words", 
            linesClass: "overflow-hidden", 
            autoSplit: true,
          });
          gsap.from(mySplit.words, {
            opacity: 0, y: 100, rotate: 5, stagger: 0.03,
            scrollTrigger: { trigger: el },
          })
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
