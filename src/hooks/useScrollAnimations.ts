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
      "js-item": (el: HTMLElement) => {
        const cardEl = el.querySelector('.js-fv-card') as HTMLElement;
        const icEl = el.querySelector('.js-fv-ic') as HTMLElement;
        const fvEl = el.querySelector('.js-fv') as HTMLElement;
        gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom center",
          }
        }).from(fvEl, {
          xPercent: 100,
          y: "50%",
          duration: 0.3,
        }).to(fvEl, {
          scale: 1
        }).to(cardEl, {
          opacity: 1,
        }).to(icEl, {
          opacity: 0,
        }, "<")
        .to(el, {
          x: gsap.utils.random(-100,0),
          y: '-100vh',
          rotate: gsap.utils.random(-7,7),
          ease: "power1.inOut",
          duration: 0.3,
        });
      },
      // "js-fv-right": (el: HTMLElement) => {
      //   const cardEl = el.querySelector('.js-fv-card') as HTMLElement;
      //   const icEl = el.querySelector('.js-fv-ic') as HTMLElement;
      //   gsap.timeline({
      //     scrollTrigger: {
      //       trigger: el,
      //       start: "top bottom",
      //       end: "bottom center",
      //     }
      //   }).from(el, {
      //     xPercent: -100,
      //     y: "50%",
      //     duration: 0.3,
      //   }).to(el, {
      //     scale: 1
      //   }).to(cardEl, {
      //     opacity: 1,
      //   }).to(icEl, {
      //     opacity: 0,
      //   }, "<");
      // },
      // "js-item-left": (el: HTMLElement) => {
      //   gsap.timeline({
      //     scrollTrigger: {
      //       trigger: el,
      //       start: "top bottom",
      //       end: "bottom top",
      //       scrub: 1
      //     }
      //   }).from(el, {
      //     x: gsap.utils.random(0,100),
      //     y: gsap.utils.random(0,100),
      //     rotate: gsap.utils.random(-7,7),
      //     ease: "power1.inOut",
      //     duration: 0.3,
      //   });
      // },
      // "js-item-right": (el: HTMLElement) => {
      //   gsap.timeline({
      //     scrollTrigger: {
      //       trigger: el,
      //       start: "top bottom",
      //       end: "bottom top",
      //       scrub: 1
      //     }
      //   }).from(el, {
      //     x: gsap.utils.random(-100,0),
      //     y: gsap.utils.random(0,100),
      //     rotate: gsap.utils.random(-7,7),
      //     ease: "power1.inOut",
      //     duration: 0.3,
      //   });
      // },
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
