"use client";
import { useRef } from "react";
import useSplitTextAnimation from "@/app/_hooks/useSplitTextAnimation";
import useScrollAnimation from "@/app/_hooks/useScrollAnimation";
import Button from "../../common/button";
import useMarquise from "@/app/_hooks/useMarquise";

export default function ContactTitle() {
    const animateRefs = useScrollAnimation("fadeDown");

    const marquiseContainer = useRef<HTMLDivElement>(null);
    useMarquise(marquiseContainer);
    useSplitTextAnimation();


  return (
    <div className="mt-20 md:mt-[6vw]">
        <div className="relative">
            <div className="flex justify-center relative overflow-hidden pt-6 md:pt-[100px]">
                <p ref={marquiseContainer} className="absolute top-0 flex break-keep whitespace-nowrap [font-size:_clamp(44px,28vw,160px)] md:[font-size:_clamp(200px,27.778vw,400px)] font-solaris leading-[0.75] text-[#1C1B1B] tracking-[0.3em]">
                HUBSHUBSHUBSHUBS
                </p>
                <div className="relative z-20 font-solaris [font-size:_clamp(30px,10vw,90px)] md:[font-size:_clamp(60px,8.333vw,120px)] text-white leading-[1.1] text-center mt-10">
                    <p data-split-text data-delay="1" ><span className="opacity-0">GLOBAL</span></p>
                    <p data-split-text data-delay="2" ><span className="opacity-0">DEVELOPMENT</span></p>
                    <p data-split-text data-delay="3" ><span className="opacity-0">HUBS.</span></p>
                </div>
            </div>
        </div>
    </div>
  );
}
