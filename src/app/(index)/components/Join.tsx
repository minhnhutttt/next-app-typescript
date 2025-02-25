"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useScrollAnimations from "@/hooks/useScrollAnimations";

import Splitting from 'splitting'

gsap.registerPlugin(ScrollTrigger);
gsap.config({
  nullTargetWarn: false,
});

const Join = () => {
  const ref = useScrollAnimations();

  const containerRef = useRef<HTMLDivElement>(null);
    const charScrollRef = useRef<HTMLDivElement>(null);
    const charScroll02Ref = useRef<HTMLDivElement>(null);
    useLayoutEffect(() => {
        Splitting();
        if (charScrollRef.current && charScroll02Ref.current) {
          const charScroll = charScrollRef.current.querySelectorAll(".char");
          const charScroll02 = charScroll02Ref.current.querySelectorAll(".char");
              gsap.set(charScroll, {
                  display: 'inline-block',
                  opacity: 0.4,
              });
              gsap.set(charScroll02, {
                display: 'inline-block',
                opacity: 0.4,
            });
              const tl = gsap.timeline({
                scrollTrigger: {
                  trigger: containerRef.current,
                  start: "top top",
                  end: "bottom top+=20%",
                  pin: true,
                  scrub: 1,
                },
              });
              tl.to(charScroll02, {
                opacity: 1,
                stagger: 1,
                duration: 2,
              }, 0.1)
              .to(charScroll, {
                opacity: 1,
                stagger: 1,
                duration: 2,
              });
              return () => {
                tl.scrollTrigger?.refresh();
                tl.kill();
              };
            }
      }, []);

  return (
    <section ref={ref} className="relative overflow-hidden">
      <div ref={containerRef} className="w-full max-w-[1440px] mx-auto">
        <div className="flex gap-10 md:py-20 py-10">
          <div className="flex items-center justify-center flex-1 max-md:hidden">
            <img src="/assets/images/join.svg" alt="" />
          </div>
          <div className="relative flex-1 flex justify-between pr-4 md:pr-[50px] max-md:pl-[10vw]">
          <div className="absolute bottom-3 right-1 pointer-events-none flex items-center justify-center flex-1 md:hidden">
            <img className="w-[59vw]" src="/assets/images/join.svg" alt="" />
          </div>
            <div className="flex">
              <p ref={charScrollRef} data-splitting className="[writing-mode:vertical-rl] [text-orientation:upright] text-[4.1vw] md:text-[22px] md:leading-[1.85] md:pt-10 pt-8">
                私たちの仕事は
                <br />
                美しいデザインや <br />
                便利なシステムを通じて <br />
                暮らしとビジネスを <br className="max-md:hidden" />
                より良い未来へ導くことです
                <br />
                個々のスキルとアイデアを結集し
                <br />
                一人ひとりが社会に新たな価値を生み出す場所
                <br />
                それがROGYXです
                <br />
              </p>
              <p ref={charScroll02Ref} data-splitting className="[writing-mode:vertical-rl] [text-orientation:upright] text-[4.5vw] md:text-[30px] font-bold md:ml-12 ml-[10vw]">
                Webデザインと <br />
                システム開発を通じて <br />
                より便利で豊かな未来を創る。
              </p>
            </div>
            <div className="flex flex-col items-center flex-[0_0_17px] ml-5">
              <p className="mb-4">
                <img className="max-md:w-[13px]" src="/assets/images/scroll.svg" alt="" />
              </p>
              <div id="scroll-down" className="block relative pt-20">
                <span className="arrow-down block mx-auto w-2.5">
                  <span className="absolute top-0 left-2/4 -ml-px w-[2px] h-[92px] md:h-[200px] bg-black/20"></span>
                  <span className="animate-[elasticus_2s_cubic-bezier(1,_0,_0,_1)_infinite] absolute top-0 left-2/4 -ml-px w-[2px] h-[92px] md:h-[200px] bg-[#FF3030]"></span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
