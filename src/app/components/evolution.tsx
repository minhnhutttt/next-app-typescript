"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";
import { useEffect, useRef } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const Evolution = () => {
  const ref = useScrollAnimations();
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
    <section ref={ref}>
        <div className="flex items-center justify-center md:py-[175px] py-[100px]">
            <div className="w-[110%] whitespace-nowrap border-y border-white py-3 md:py-5 rotate-[10deg] origin-center" ref={rollingTextRef}>
                <div className="rollingText inline-block text md:h-[58px] h-[24px] w-[1733px] md:w-[4187px]">
                    <img className="" src="/assets/images/deco-marque.png" alt="" />
                </div>
            </div>
        </div>
        <div className="bg-[url('/assets/images/bg-evolution.png')] md:bg-center max-dt:bg-[length:100%_auto] md:h-[63.75vw] dt:h-[918px] bg-no-repeat flex items-center justify-center md:-mt-[130px] -mt-[60px] relative">
            <span className="absolute inset-0 mix-blend-color-dodge bg-[url('/assets/images/bg-evolution-line.png')] max-dt:bg-[length:100%_auto] md:bg-center bg-no-repeat"></span>
            <div className="w-full max-w-[1340px] mx-auto relative flex items-center justify-center h-full max-md:pb-[200px]">
                <div className="size-[832px] bg-[#C5EEFF]/[0.2] filter blur-[150px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
                <div className="w-[320px] md:w-[39.236vw] dt:w-[565px] h-[364px] md:h-[44.583vw] dt:h-[642px] bg-[url('/assets/images/bg-evolution-main.png')] bg-[length:100%_100%] flex items-center pt-[10vw] dt:pt-36 flex-col [filter:drop-shadow(0px_0px_70px_rgba(0,_3,_68,_0.40))] px-8">
                    <h3 className="u-text-gradient text-[30px] md:text-[3.333vw] dt:text-[48px] font-black text-center mb-4">
                    NFT<span className="dt:text-[38px] text-[22px] md:text-[2.639vw]">は</span> <br />
                    もっと<span className="dt:text-[38px] text-[22px] md:text-[2.639vw]">進化する！</span>
                    </h3>
                    <p className="w-full max-w-[453px] text-white dt:text-[20px] md:text-[1.389vw] text-[14px]">
                    NFTはアートのイメージが強いですが、これからもっと進化します！<br />
                    <br />
                    近い将来、お店で購入するトレーディングカードのように、中身は所有者だけが確認できるようになります。
                    </p>
                </div>
                <div className="absolute right-5 md:right-0 bottom-0 md:bottom-[4.861vw] dt:bottom-[70px]">
                    <div className="flex justify-center -mb-[1.111vw] dt:-mb-4 relative">
                        <p className="w-full md:max-w-[19.097vw] dt:max-w-[275px] max-w-[170px] dt:text-[18px] md:text-[1.25vw] text-[11px] text-white">
                        希少性とセキュリティ、開封時の<br />ワクワク感が強化されるんだね！
                        </p>
                    </div>
                    <figure className="max-md:w-[200px] max-dt:w-[27.569vw]">
                        <img src="/assets/images/img-evolution.png" alt="" />
                    </figure>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Evolution;
