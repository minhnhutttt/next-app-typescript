"use client";
import useSplitTextAnimation from "@/app/_hooks/useSplitTextAnimation";
import useScrollAnimation from "@/app/_hooks/useScrollAnimation";
import { useEffect, useRef } from "react";

export default function FV() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const animateRefs = useScrollAnimation("fadeDown", 0.01);
  useSplitTextAnimation();
  useEffect(() => {
    if (!videoRef.current) return
    videoRef.current.play();
  }, []);
  return (
    <div className="relative flex w-full items-center justify-center overflow-hidden">
      <video
        ref={videoRef}
        muted
        loop
        className="absolute inset-0 z-10 h-full w-full object-cover"
      >
        <source src="/videos/fv.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <span className="absolute inset-0 z-20 bg-[url('/images/fv-gradient.png')] bg-cover"></span>
      <div className="relative pb-20 pt-[140px] md:py-[153px] z-30 text-white flex md:items-end justify-between w-full gap-8 md:gap-5 mx-auto px-[5vw] md:px-[12.5vw] max-md:flex-col">
        <div className="font-solaris">
            <p ref={animateRefs} className="opacity-0 text-[6.4vw] md:[font-size:_clamp(20px,5.078vw,52px)] leading-none">
            EMPOWERING YOUR <br />VISION WITH
            </p>
            <h1 className="text-[13.6vw] md:[font-size:_clamp(2px,9.028vw,130px)] leading-none">
            <p className="overflow-hidden" data-split-text data-delay="1"><span className="opacity-0">CUTTING-</span></p>
            <p className="overflow-hidden" data-split-text data-delay="2"><span className="opacity-0">EDGE</span></p>
            <p className="overflow-hidden" data-split-text data-delay="3"><span className="opacity-0">SOLUTIONS</span></p>
            </h1>
        </div>
        <div ref={animateRefs} className="opacity-0 w-[200px] md:w-[20vw] max-md:ml-auto">
            <a href="/contact" className="block relative md:mb-5 group hover:duration-100">
                <div className="">
                    <img src="/images/circle-fliqt.png" alt="" className="animate-[r_linear_infinite_10s,_r_linear_infinite_15s_reverse_paused] group-hover:[animation-play-state:running] [animation-composition:add] group-hover:scale-90 duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center flex-col pt-8 md:pt-14">
                        <p className="font-solaris text-[18px] md:text-[2.344vw] lg:text-[24px] mb-3 md:mb-6">GET STARTED</p>
                        <figure>
                            <img className="max-md:w-[36px] max-lg:w-[6.836vw]" src="/images/fv-arrow.png" alt="" />
                        </figure>
                    </div>
                </div>
            </a>
        </div>
      </div>
    </div>
  );
}
