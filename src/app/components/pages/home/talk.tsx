"use client";
import useSplitTextAnimation from "@/app/_hooks/useSplitTextAnimation";
import useScrollAnimation from "@/app/_hooks/useScrollAnimation";

export default function Talk() {
  const animateRefs = useScrollAnimation("fadeDown");
  useSplitTextAnimation();
  return (
    <div className="px-[3.75vw] mt-[14vw] overflow-hidden">
        <div className="w-full max-w-[848px] mx-auto">
            <div data-split-text data-delay="1" className="text-center md:mt-10 mt-6 font-solaris [font-size:_clamp(30px,10vw,90px)] md:[font-size:_clamp(60px,8.333vw,120px)] text-white leading-[0.55]">
                <span className="opacity-0">LET&apos;S TALK</span>
            </div>
            <div ref={animateRefs} className="opacity-0 flex max-md:flex-col items-center mt-[32px] md:mt-[70px] lg:mt-[110px] md:gap-20 gap-10">
                <div className="flex items-center flex-1 md:gap-20 gap-10">
                    <figure>
                        <img className="max-md:w-[60px]" src="/images/ic-comment.png" alt="" />
                    </figure>
                    <p className="text-white text-[16px] md:text-[20px] flex-1">
                    Harness our expertise to maximize your potential. Transform your innovative ideas into reality.
                    </p>
                </div>
                <div className="w-[200px] lg:w-[293px]">
                    <a href="/contact" className="block relative md:mb-5 group hover:duration-100">
                        <div className="">
                            <img src="/images/circle-fliqt.png" alt="" className="animate-[r_linear_infinite_10s,_r_linear_infinite_15s_reverse_paused] group-hover:[animation-play-state:running] [animation-composition:add] group-hover:scale-90 duration-300" />
                            <div className="absolute inset-0 flex items-center justify-center flex-col">
                                <figure>
                                    <img className="max-md:w-[36px] max-lg:w-[6.836vw]" src="/images/fv-arrow.png" alt="" />
                                </figure>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
  );
}
