"use client";

import { useEffect, useRef } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type MarquePropsType = {
    reverse?: boolean;
  };

const Marque = ({ reverse }: MarquePropsType) => {
  const rollingTextRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const context = gsap.context(() => {
      let direction = 1;

      const roll1 = roll(".rollingText", { duration: 20 });
      ScrollTrigger.create({
        onUpdate(self) {
          if (self.direction !== direction) {
            direction *= -1;
            gsap.to([roll1], { timeScale: direction, overwrite: true });
          }
        }
      });

      function roll(targets: gsap.DOMTarget, vars: gsap.TweenVars, reverse?: boolean) {
        const tl = gsap.timeline({
          repeat: -1,
          onReverseComplete() {
            this.totalTime(this.rawTime() + this.duration() * 10); 
          }
        });
        vars = vars || {};
        vars.ease || (vars.ease = "none");
        gsap.utils.toArray(targets).forEach((el: any) => {
          let clone = (el as HTMLElement).cloneNode(true) as HTMLElement;
          el.parentNode!.appendChild(clone);
          gsap.set(clone, {
            position: "absolute",
            top: (el as HTMLElement).offsetTop,
            left: (el as HTMLElement).offsetLeft + (reverse ? -(el as HTMLElement).offsetWidth : (el as HTMLElement).offsetWidth)
          });
          tl.to([el, clone], { xPercent: reverse ? 100 : -100, ...vars }, 0);
        });
        return tl;
      }
    }, rollingTextRef);

    return () => context.revert();
  }, []);

  return (
    <div data-scroll className="ani-fade-up flex items-center justify-center md:py-[175px] py-[100px]">
        <div className={`w-[120%] whitespace-nowrap border-y border-white py-3 md:py-5 origin-center ${reverse ? '-rotate-[10deg]' : 'rotate-[10deg]'}`} ref={rollingTextRef}>
            <div className="rollingText inline-block text md:h-[58px] h-[24px] w-[1733px] md:w-[4187px]">
                <img className="" src="/assets/images/deco-marque.png" alt="" />
            </div>
        </div>
    </div>
  );
};

export default Marque;
