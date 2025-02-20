"use client";
import { useEffect, useLayoutEffect, useRef } from "react";
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

    const containerRef = useRef<HTMLDivElement>(null)
    useLayoutEffect(() => {
        Splitting();
          const chars = document.querySelectorAll(".char");
              gsap.set(chars, {
                  display: 'inline-block',
                  opacity: 0.4,
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
              tl.to(chars, {
                opacity: 1,
                stagger: 1,
                duration: 1,
              }, 0.1);
              return () => {
                tl.scrollTrigger?.refresh();
                tl.kill();
              };
      }, []);
    
    return (
        <section ref={ref} id="introduction" className="relative overflow-hidden md:px-10 px-5 ">
            <div className="w-full max-w-[1282px] mx-auto">
                <div ref={containerRef} className="h-screen flex flex-col justify-center items-center">
                    <h4 data-splitting className="md:text-[44px] text-[6.154vw] text-center font-bold leading-[1.3]">
                    「作るだけ」の時代は終わった。<br />
                    <br />
                    ROGYXは<br />
                    戦略 × デザイン × 開発<br />
                    を融合し<br />
                    クライアントのビジネスを<br />
                    加速させる<br />
                    プロフェッショナル集団です。
                    </h4>
                </div>
            </div>
        </section>
  );
};

export default Introduction;
