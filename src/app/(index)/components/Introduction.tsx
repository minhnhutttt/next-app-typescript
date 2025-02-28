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

const Introduction = () => {
    const ref = useScrollAnimations();

    const containerRef = useRef<HTMLDivElement>(null);
    const charScrollRef = useRef<HTMLDivElement>(null);
    const charRef = useRef<HTMLDivElement>(null);
    useLayoutEffect(() => {
        Splitting();
        if (charScrollRef.current && charRef.current ) {
          const charScroll = charScrollRef.current.querySelectorAll(".char");
          const chars = charRef.current.querySelectorAll(".char");
              gsap.set(charScroll, {
                  display: 'inline-block',
                  opacity: 0.4,
              });
              gsap.set(chars, {
                display: 'inline-block',
                yPercent: 100,
            });
              const tl = gsap.timeline({
                scrollTrigger: {
                  trigger: containerRef.current,
                  start: "top top",
                  end: "bottom top",
                  pin: true,
                  scrub: 0.9,
                },
              });
              tl.to(charScroll, {
                opacity: 1,
                stagger: 1,
                duration: 1,
              }, 0.1).to(chars, {
                yPercent: 0,
                stagger: 1,
                duration: 1,
              });
              return () => {
                tl.scrollTrigger?.refresh();
                tl.kill();
              };
            }
      }, []);
    
    return (
        <section ref={ref} id="introduction" className="relative overflow-hidden md:px-10 px-5 ">
            <div className="w-full max-w-[1282px] mx-auto">
                <div ref={containerRef} className="h-screen flex flex-col justify-center items-center">
                    <h4 ref={charScrollRef} data-splitting className="md:text-[44px] text-[5.7vw] text-center font-bold leading-[1.3]">
                    「作るだけ」の時代は終わった。<br />
                    <br />
                    ROGYXは<br />
                    戦略 × デザイン × 開発<br />
                    を融合し<br />
                    クライアントのビジネスを<br />
                    加速させる<br />
                    プロフェッショナル集団です。
                    </h4>
                    <div className="overflow-hidden">
                      <div ref={charRef} data-splitting className="md:text-[20px] text-[10px] text-center font-bold mt-[54px]">…とか言っちゃってますが</div>
                    </div>
                </div>
            </div>
        </section>
  );
};

export default Introduction;
