"use client";
import useScrollAnimation from "@/app/_hooks/useScrollAnimation";
import ServiceBackground from "./serviceBackground"
import useSplitTextAnimation from "@/app/_hooks/useSplitTextAnimation";

export default function ServiceTitle() {
  const animateRefs = useScrollAnimation("fadeDown");
  useSplitTextAnimation();
  return (
    <div ref={animateRefs} className="overflow-hidden relative h-[423px] flex items-center justify-center mt-[135px]">
        <div  className="absolute inset-x-0 top-[-160px] z-10"><ServiceBackground /></div>
        <div className="relative z-20 font-solaris [font-size:_clamp(30px,10vw,90px)] md:[font-size:_clamp(60px,8.333vw,120px)] text-white leading-[1.1] text-center">
            <p data-split-text data-delay="1" ><span className="opacity-0">WE ARE YOUR</span></p>
            <p data-split-text data-delay="2" ><span className="opacity-0">ARCHITECT OF</span></p>
            <p data-split-text data-delay="3" ><span className="opacity-0">DIGITAL EXPERIENCES</span></p>
        </div>
    </div>
  );
}
