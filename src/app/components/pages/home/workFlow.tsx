"use client";
import { useEffect, useLayoutEffect, useRef } from "react";
import useSplitTextAnimation from "@/app/_hooks/useSplitTextAnimation";
import useScrollAnimation from "@/app/_hooks/useScrollAnimation";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Button from "../../common/button";
gsap.registerPlugin(ScrollTrigger);

export default function WorkFlow() {
    useSplitTextAnimation();
    const animateRefs = useScrollAnimation("fadeDown");

    const containerRef = useRef<HTMLDivElement >(null);
    const sliderRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
          let panels = gsap.utils.toArray(".panel");
          const sliderContainer = sliderRef.current;
          if (sliderContainer) {
    
          gsap.to(panels, {
            xPercent: -100 * (panels.length - 1),
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              pin: true,
              scrub: 1,
              snap: 1 / (panels.length - 1),
              end: () => "+=" + sliderContainer.offsetWidth
            }
          });
        }
        }, containerRef);
        return () => ctx.revert();
      });

  return (
    <div className="max-md:pt-[25vw] md:mt-[15vw]">
    <div ref={containerRef}>
        <div className="px-[3.75vw]">
            <div data-split-text data-delay="1" className="text-center md:mt-10 mt-6 font-solaris [font-size:_clamp(30px,10vw,90px)] md:[font-size:_clamp(60px,8.333vw,120px)] text-white leading-[0.55]">
                <span className="opacity-0">WORKFLOW</span>
            </div>
            <div ref={animateRefs} className="flex justify-center mt-[15vw] md:mt-[5vw]">
                <p className="[font-size:_clamp(14px,1vw,18px)] md:[font-size:_clamp(14px,1.25vw,18px)] text-white w-full max-w-[680px] leading-tight">
                FROM CONCEPT TO COMPLETION, WE BRING YOUR PROJECTS TO LIFE. OUR EXPERT TEAMS IN MAJOR TECH HUBS WORLDWIDE ENSURE YOUR DEVELOPMENT NEEDS ARE MET WITH PRECISION AND AGILITY, ANYTIME, ANYWHERE.
                        </p>
            </div>
        </div>
        <div className="relative mt-[4vw]">
            <div className="flex justify-center items-center">
                <figure className="aspect-[420/428] w-[29.167vw] max-w-[420px] animate-[backwards-rotation_60s_infinite_linear]">
                    <img src="/images/image-globular.png" alt="" />
                </figure>
            </div>
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-10">
                <div className="overflow-hidden">
                <div ref={sliderRef} className="flex gap-[4vw] md:gap-[6.944vw] ml-[30vw] w-[300vw] md:w-[240vw]">
                    <div className="w-[60vw] md:w-[40vw] flex justify-center panel">
                        <div className="w-full flex items-center justify-center md:p-px h-[60px] md:h-[102px] gap-2 md:gap-8 p-px rounded-[10px] bg-[linear-gradient(90deg,_rgba(255,132,200,1)_0%,_rgba(181,228,255,1)_49%,_rgba(14,255,255,1)_100%)]">
                            <div className="bg-black w-full h-full flex items-center justify-center [font-size:_clamp(10px,1.2vw,20px)] rounded-[10px]  md:[font-size:_clamp(16px,1.667vw,24px)] text-white uppercase leading-none  px-[100px] whitespace-nowrap">
                            PROJECT PROPOSAL PRESENTATION
                            </div>
                        </div>
                    </div>
                    <div className="w-[60vw] md:w-[40vw] flex justify-center panel">
                        <div className="w-full flex items-center justify-center md:p-px h-[60px] md:h-[102px] gap-2 md:gap-8 p-px rounded-[10px] bg-[linear-gradient(90deg,_rgba(255,132,200,1)_0%,_rgba(181,228,255,1)_49%,_rgba(14,255,255,1)_100%)]">
                            <div className="bg-black w-full h-full flex items-center justify-center [font-size:_clamp(10px,1.2vw,20px)] rounded-[10px]  md:[font-size:_clamp(16px,1.667vw,24px)] text-white uppercase leading-none  px-[100px] whitespace-nowrap">
                            PROJECT INITIATION
                            </div>
                        </div>
                    </div>
                    <div className="w-[60vw] md:w-[40vw] flex justify-center panel">
                        <div className="w-full flex items-center justify-center md:p-px h-[60px] md:h-[102px] gap-2 md:gap-8 p-px rounded-[10px] bg-[linear-gradient(90deg,_rgba(255,132,200,1)_0%,_rgba(181,228,255,1)_49%,_rgba(14,255,255,1)_100%)]">
                            <div className="bg-black w-full h-full flex items-center justify-center [font-size:_clamp(10px,1.2vw,20px)] rounded-[10px]  md:[font-size:_clamp(16px,1.667vw,24px)] text-white uppercase leading-none  px-[100px] whitespace-nowrap">
                            SCOPE DEFINITION
                            </div>
                        </div>
                    </div>
                    <div className="w-[60vw] md:w-[40vw] flex justify-center panel">
                        <div className="w-full flex items-center justify-center md:p-px h-[60px] md:h-[102px] gap-2 md:gap-8 p-px rounded-[10px] bg-[linear-gradient(90deg,_rgba(255,132,200,1)_0%,_rgba(181,228,255,1)_49%,_rgba(14,255,255,1)_100%)]">
                            <div className="bg-black w-full h-full flex items-center justify-center [font-size:_clamp(10px,1.2vw,20px)] rounded-[10px]  md:[font-size:_clamp(16px,1.667vw,24px)] text-white uppercase leading-none  px-[100px] whitespace-nowrap">
                            SOLUTION PLANNING
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div className="flex justify-center mt-[40px] md:mt-[64px]">
            <Button href="/">VIEW WORKFLOW DETAILS</Button>
        </div>
    </div>
    </div>
  );
}
