"use client";
import useScrollAnimation from "@/app/_hooks/useScrollAnimation";
import useSplitTextAnimation from "@/app/_hooks/useSplitTextAnimation";

export default function AboutHead() {
  const animateRefs = useScrollAnimation("fadeDown");
  useSplitTextAnimation();
  return (
    <div className="px-[3.75vw] pb-8">
        <div className="text-center md:mt-10 mt-6 font-solaris [font-size:_clamp(30px,10vw,90px)] md:[font-size:_clamp(70px,9.028vw,130px)] text-white leading-[1.1]">
            <p data-split-text data-delay="1"><span className="opacity-0">OUR COMPANY</span></p>
        </div>
        <p ref={animateRefs} className="opacity-0 md:text-[16px] text-[13px] text-white w-full max-w-[603px] mx-auto max-md:px-5 md:mt-8 mt-6">
        fliQt is where innovation meets execution. Our expertise spans blockchain, web, app, and AI development, each tailored to revolutionize and streamline business operations. Committed to delivering excellence, we fuse technology with vision to propel your business into the future.
        </p>
        <div ref={animateRefs} className="opacity-0 md:w-[200px] w-[160px] mx-auto mt-10 md:mt-[70px]">
            <a href="/" className="block relative md:mb-5 group hover:duration-100">
                <div className="">
                    <img src="/images/circle-story.png" alt="" className="animate-[r_linear_infinite_10s,_r_linear_infinite_15s_reverse_paused] group-hover:[animation-play-state:running] [animation-composition:add] group-hover:scale-90 duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                        <figure>
                            <img className="max-md:w-[36px] max-lg:w-[6.836vw] rotate-90" src="/images/fv-arrow.png" alt="" />
                        </figure>
                    </div>
                </div>
            </a>
        </div>
    </div>
  );
}
