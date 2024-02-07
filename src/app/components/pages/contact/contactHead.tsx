"use client";
import useScrollAnimation from "@/app/_hooks/useScrollAnimation";
import useSplitTextAnimation from "@/app/_hooks/useSplitTextAnimation";

export default function ContactHead() {
  const animateRefs = useScrollAnimation("fadeDown");
  useSplitTextAnimation();
  return (
    <div className="px-[3.75vw] pb-[150px]">
        <div className="text-center md:mt-10 mt-6 font-solaris [font-size:_clamp(30px,10vw,90px)] md:[font-size:_clamp(70px,9.028vw,130px)] text-white leading-[1.1]">
            <p data-split-text data-delay="1"><span className="opacity-0">LET&apos;S TALK</span></p>
        </div>
        <div ref={animateRefs} className="opacity-0 text-center text-[20px] md:text-[36px] text-white mt-5">
            PROJECT REQUEST FORM
        </div>
    </div>
  );
}
