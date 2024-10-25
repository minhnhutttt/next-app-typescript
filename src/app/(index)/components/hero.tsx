"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";
const Hero = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  return (
    <div className="relative h-[600px] md:h-[749px] w-full -mt-[100vh]">
      <div className="absolute z-40 inset-0 bg-black/60 xl:hidden max-xl:animate-[fadeOut_8s_forwards]"></div>
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute w-full h-full object-cover opacity-40"
      >
        <source src="/assets/videos/fv.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        ref={containerRef}
        className="w-full h-full flex justify-center items-end pt-20 md:pt-[118px] overflow-hidden"
      >
        <div className="relative">
          <span className="animate-[anim-bounce_1.6s_infinite_ease-in-out] absolute -right-10 md:right-[-80px] z-[25]">
            <img src="/assets/images/hero-bubble.png" alt="" />
          </span>
          <div className="relative">
            <p className="relative z-10">
              <img className="max-md:h-[480px]" src="/assets/images/hero-01.png" alt="" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
