"use client";
import useSplitTextAnimation from "@/app/_hooks/useSplitTextAnimation";
import useScrollAnimation from "@/app/_hooks/useScrollAnimation";
import Button from "../../common/button";

export default function GetStarted() {
    useSplitTextAnimation();
    const animateRefs = useScrollAnimation("fadeDown");
  return (
    <div className="px-[3.75vw]">
        <div className="mt-[7.222vw] w-full max-w-[1330px] mx-auto">
            <div className="font-solaris text-white [font-size:_clamp(28px,12vw,80px)] md:[font-size:_clamp(40px,8.889vw,128px)] leading-none overflow-hidden" data-split-text data-delay="1">
                <span className="opacity-0">WE'RE</span>
            </div>
            <div className="md:flex relative">
                <div data-split-text data-delay="1" className="u-outline font-solaris [font-size:_clamp(80px,35vw,200px)] md:[font-size:_clamp(80px,20.833vw,300px)] leading-[.65]">
                    <span className="opacity-0">NOT</span>
                </div>
                <div data-split-text data-delay="1" className="max-md:text-right md:absolute bottom-0 right-0 font-solaris [font-size:_clamp(30px,10vw,90px)] md:[font-size:_clamp(60px,8.333vw,120px)] text-white leading-[0.55]">
                <span className="opacity-0">JUST DEVELOPERS</span>
                </div>
            </div>
            <div className="flex justify-end mt-[6vw] md:mt-[3vw]">
                <div className="md:w-[53.472vw]">
                    <p ref={animateRefs} className="[font-size:_clamp(14px,1vw,18px)] md:[font-size:_clamp(14px,1.25vw,18px)] text-white leading-snug opacity-0">
                        Expanding Technological Horizons: We are not just a development company; we are visionaries driving progress across multiple domains including blockchain, web, app, and AI. Our commitment lies in crafting state-of-the-art solutions that redefine how the world interacts, transacts, and evolves. Join us in shaping a future where technology creates unprecedented opportunities for growth and innovation.
                    </p>
                    <div className="flex justify-end mt-6 md:mt-12 mr-4">
                        <Button href="/">GET STARTED</Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
