"use client";
import { useEffect, useLayoutEffect, useRef } from "react";
import useSplitTextAnimation from "@/app/_hooks/useSplitTextAnimation";
import useScrollAnimation from "@/app/_hooks/useScrollAnimation";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Button from "../../common/button";
import useMarquise from "@/app/_hooks/useMarquise";
gsap.registerPlugin(ScrollTrigger);

export default function ServiceSolutions() {
    useSplitTextAnimation();
    const animateRefs = useScrollAnimation("fadeDown");

    const marquiseContainer = useRef<HTMLDivElement>(null);
    useMarquise(marquiseContainer);


  return (
    <div className="max-md:pt-[25vw] md:mt-[11vw]">
    <div>
        <div className="px-[3.75vw]">
            <div className="text-center md:mt-10 mt-6 font-solaris [font-size:_clamp(30px,10vw,90px)] md:[font-size:_clamp(60px,8.333vw,120px)] text-white leading-[1.1]">
                <p data-split-text data-delay="1"><span className="opacity-0">INTEGRATED TECH</span></p>
                <p data-split-text data-delay="1"><span className="opacity-0">SOLUTIONS</span></p>
            </div>
            <div ref={animateRefs} className="flex justify-center mt-[5vw] md:mt-[2vw]">
                <p className="[font-size:_clamp(14px,1vw,18px)] md:[font-size:_clamp(14px,1.25vw,16px)] text-white w-full max-w-[600px] leading-tight">
                When your ambitions outgrow standard solutions, our multidisciplinary team, armed with state-of-the-art technology across blockchain, web, app, and AI, builds a tailored operational ecosystem, guaranteeing superior quality in every endeavor.
                        </p>
            </div>
        </div>
        <div ref={animateRefs} className="relative opacity-0 mt-20">
                <div className="flex max-md:flex-col relative overflow-hidden">
                    <p ref={marquiseContainer}  className="flex break-keep whitespace-nowrap [font-size:_clamp(44px,28vw,160px)] md:[font-size:_clamp(64px,18.056vw,260px)] font-solaris text-black leading-[0.75] u-outline-gray">
                    INTEGRATED INTEGRATED INTEGRATED
                    </p>
                    <div className="md:absolute inset-0 flex items-center justify-center px-[3.75vw]">
                    <Button href="/contact">CONTACT US</Button>
                    </div>
                </div>
        </div>
    </div>
    </div>
  );
}
