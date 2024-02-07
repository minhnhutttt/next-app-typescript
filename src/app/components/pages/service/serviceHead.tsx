"use client";
import useScrollAnimation from "@/app/_hooks/useScrollAnimation";
import ServiceTextSVG from "./serviceTextSVG";

export default function ServiceHead() {
  const animateRefs = useScrollAnimation("fadeDown");
  return (
    <div className="px-[3.75vw] pb-20 ">
        <p ref={animateRefs} className="opacity-0 md:text-[20px] text-[16px] text-center text-white">CRAFTING THE FUTURE WITH</p>
        <ServiceTextSVG />
        <p ref={animateRefs} className="opacity-0 md:text-[16px] text-[13px] text-white w-full max-w-[603px] mx-auto max-md:px-5">
        FROM BLOCKCHAIN TO WEBSITE, APPLICATION, AND AI DEVELOPMENT, OUR MULTIFACETED SERVICES SUPPORT YOUR BUSINESS. UTILIZING CUTTING-EDGE TECHNOLOGY, WE ENSURE STABLE GLOBAL SUPPORT TO MAINTAIN THE SMOOTH OPERATION OF YOUR VENTURES.
        </p>
    </div>
  );
}
