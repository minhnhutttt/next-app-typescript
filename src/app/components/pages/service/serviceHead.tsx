"use client";
import useScrollAnimation from "@/app/_hooks/useScrollAnimation";
import TextSVG from "./textSVG";

export default function ServiceHead() {
  const animateRefs = useScrollAnimation("fadeDown");
  return (
    <div className="px-[3.75vw] pt-[120px] md:pt-[12vw] pb-20 min-[1440px]:pt-[170px] bg-[url('/images/bg.png')] bg-cover bg-bottom overflow-hidden">
        <p ref={animateRefs} className="opacity-0 md:text-[20px] text-[16px] text-center text-white">CRAFTING THE FUTURE WITH</p>
        <TextSVG />
        <p ref={animateRefs} className="opacity-0 md:text-[16px] text-[13px] text-white w-full max-w-[603px] mx-auto max-md:px-5">
        FROM BLOCKCHAIN TO WEBSITE, APPLICATION, AND AI DEVELOPMENT, OUR MULTIFACETED SERVICES SUPPORT YOUR BUSINESS. UTILIZING CUTTING-EDGE TECHNOLOGY, WE ENSURE STABLE GLOBAL SUPPORT TO MAINTAIN THE SMOOTH OPERATION OF YOUR VENTURES.
        </p>
    </div>
  );
}
