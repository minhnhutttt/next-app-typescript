"use client";
import { useEffect, useRef } from "react";
import useSplitTextAnimation from "@/app/_hooks/useSplitTextAnimation";
import useScrollAnimation from "@/app/_hooks/useScrollAnimation";
import useMarquise from "@/app/_hooks/useMarquise";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Service() {
    useSplitTextAnimation();
    const animateRefs = useScrollAnimation("fadeDown");

    const marquiseContainer = useRef<HTMLDivElement>(null);
    useMarquise(marquiseContainer);


  return (
    <div className="relative mt-[8vw]">
        <div className="flex absolute top-0 left-0 right-0 overflow-hidden">
            <p ref={marquiseContainer} className="flex break-keep whitespace-nowrap  [font-size:_clamp(80px,35vw,200px)] md:[font-size:_clamp(80px,20.833vw,300px)] font-solaris text-[#1C1B1B] leading-[0.75]">
            MOVEMENT MOVEMENT MOVEMENT
            </p>
        </div>
        <div className="px-[3.75vw]">
            <div className="w-full max-w-[1340px] mx-auto">
                <div className="flex items-end pt-[3vw]">
                    <div className="md:w-[53.472vw] pb-[6vw]">
                        <p ref={animateRefs} className="[font-size:_clamp(14px,1vw,18px)] md:[font-size:_clamp(14px,1.25vw,18px)] text-white leading-snug">
                            LEADING IN TECH INNOVATION, WE DELIVER COMPREHENSIVE SOLUTIONS IN BLOCKCHAIN, WEB, APP, AND AI DEVELOPMENT, ENHANCING DATA MANAGEMENT, DIGITAL EXPERIENCES, AND BUSINESS OPERATIONS IN THE MODERN WORLD.
                        </p>
                        <div data-split-text data-delay="1" className="md:mt-10 max-md:text-right font-solaris [font-size:_clamp(30px,10vw,90px)] md:[font-size:_clamp(60px,8.333vw,120px)] text-white leading-[0.55]">
                            <span className="opacity-0">SERVICES</span>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-end pr-[60px]">
                        <div ref={animateRefs} className="opacity-0 w-[240px] md:w-[27.5vw] max-w-[396px] max-md:ml-auto">
                            <a href="/" className="block relative md:mb-5 group hover:duration-100">
                                <div className="">
                                    <img src="/images/circle-fliqt.png" alt="" className="animate-[r_linear_infinite_10s,_r_linear_infinite_15s_reverse_paused] group-hover:[animation-play-state:running] [animation-composition:add] group-hover:scale-90 duration-300" />
                                    <div className="absolute inset-0 flex items-center justify-center flex-col pt-8 md:pt-14">
                                        <p className="font-solaris text-[18px] md:text-[2.344vw] lg:text-[22px] text-white mb-3 md:mb-6">VIEW ALL SERVICES</p>
                                        <figure>
                                            <img className="max-md:w-[36px] max-lg:w-[6.836vw]" src="/images/fv-arrow.png" alt="" />
                                        </figure>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
