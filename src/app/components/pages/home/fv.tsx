"use client";
import { useEffect, useRef } from "react";

export default function FV() {
  const videoRef = useRef<HTMLVideoElement>(null);

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
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/fv.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative pb-20 pt-[140px] md:py-[153px] z-0 text-white flex md:items-end justify-between w-full max-w-[1120px] gap-8 md:gap-5 mx-auto px-5 max-md:flex-col">
        <div className="font-solaris">
            <p className="text-[6.4vw] md:text-[5.078vw] lg:text-[52px] leading-none">
            EMPOWERING YOUR <br />VISION WITH
            </p>
            <h1 className="text-[13.6vw] md:text-[12.695vw] lg:text-[130px] leading-none">
            CUTTING-<br />EDGE <br />SOLUTIONS
            </h1>
        </div>
        <div className="w-[200px] md:w-[288px] max-md:ml-auto">
            <a href="/" className="block relative md:mb-5 group hover:duration-100">
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
