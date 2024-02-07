"use client";
import useScrollAnimation from "@/app/_hooks/useScrollAnimation";
import useSplitTextAnimation from "@/app/_hooks/useSplitTextAnimation";
import ContactTextSVG from "./contactTextSVG";

export default function ContactHead() {
  const animateRefs = useScrollAnimation("fadeDown");
  useSplitTextAnimation();
  return (
    <div className="px-[3.75vw] pb-[150px]">
        <div className="text-center md:mt-10 mt-6">
            <ContactTextSVG />
        </div>
        <div ref={animateRefs} className="opacity-0 text-center text-[20px] md:text-[36px] text-white mt-5">
            PROJECT REQUEST FORM
        </div>
    </div>
  );
}
