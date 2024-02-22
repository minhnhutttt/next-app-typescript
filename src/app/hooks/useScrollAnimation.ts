import { useEffect, useRef, RefObject } from "react";
import gsap, { Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type AnimationType =
  | "fadeUp"
  | "fadeDown"
  | "slideLeft"
  | "slideRight"
  | "zoom"
  | "default";

const useScrollAnimation = (
  animationType: AnimationType,
  delay: number = 0,
): ((el: HTMLElement | null) => void) => {
  const elements = useRef<Array<HTMLElement>>([]);

  useEffect(() => {
    const animateElements = (): void => {
      elements.current.forEach((el) => {
        let animation: gsap.TweenVars = {};

        switch (animationType) {
          case "fadeUp":
            animation = { y: 30, opacity: 0 };
            break;
          case "fadeDown":
            animation = { y: -30, opacity: 0 };
            break;
          case "slideLeft":
            animation = { xPercent: -50, opacity: 0 };
            break;
          case "slideRight":
            animation = { xPercent: 50, opacity: 0 };
            break;
          case "zoom":
            animation = { opacity: 0, scaleX: 0.9, scaleY: 0.9 };
            break;
          default:
            animation = { autoAlpha: 0 };
            break;
        }

        gsap.fromTo(el, animation, {
          y: 0,
          x: 0,
          xPercent: 0,
          opacity: 1,
          duration: 0.5,
          scaleX: 1,
          scaleY: 1,
          delay,
          ease: Power2.easeInOut,
          scrollTrigger: {
            trigger: el,
            start: "top bottom-=60",
            toggleActions: "play none none none",
          },
        });
      });
    };

    animateElements();

    return (): void => {
      elements.current.forEach((el) => {
        ScrollTrigger.getById(el.id)?.kill();
      });
    };
  }, [animationType]);

  const addToRefs = (el: HTMLElement | null): void => {
    if (el && !elements.current.includes(el)) {
      elements.current.push(el);
    }
  };

  return addToRefs;
};

export default useScrollAnimation;
