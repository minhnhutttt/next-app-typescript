"use client";
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useScrollAnimations from "@/hooks/useScrollAnimations";

gsap.registerPlugin(ScrollTrigger);
gsap.config({
  nullTargetWarn: false,
});

const Introduction = () => {
    const ref = useScrollAnimations();

    const containerRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        let ctx = gsap.context(() => {
            const chars = document.querySelectorAll(".char");
            gsap.set(chars, {
                display: 'inline-block',
                opacity: 0.4,
            });
            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%",
                end: "bottom bottom",
                scrub: 0.5,
              },
            });
            tl.to(chars, {
              opacity: 1,
              stagger: 1,
              duration: 1,
            }, 0.1);
          }, [containerRef]);
      
          return () => ctx.revert();
        
      }, []);
    
    return (
        <section ref={ref} id="introduction" className="relative overflow-hidden md:px-10 px-5 md:pt-[100px] pt-16">
            <div className="w-full max-w-[1282px] mx-auto">
                <div className="flex justify-center max-md:flex-col dt:gap-20 md:gap-[5.556vw] gap-10 items-center w-full max-w-[1100px] mx-auto">
                    <figure className="fade-up max-md:w-full max-dt:w-[25vw] max-md:flex max-md:justify-center">
                        <img src="/assets/images/phone.png" alt="" />
                    </figure>
                    <div className="flex-1">
                        <div className="fade-up">
                            <h3 className="dt:text-[118px] md:text-[8.194vw] text-[54px] font-bold relative leading-none max-md:text-center">
                                <span className="absolute inset-0 text-transparent [text-shadow:4px_4px_0px_#000,_0px_0px_20px_rgba(61,_91,_246,_0.45)]">ALL IN ONE</span>
                                <span className="block relative u-text-gradient u-text-stroke bg-[linear-gradient(245deg,_#18539E_15.94%,_#228FCE_48.55%,_#4FBCEC_84.06%)]">ALL IN ONE</span>
                            </h3>
                            <div className="flex flex-col items-end gap-1.5">
                                <span className="w-3/5 h-[3px] bg-white"></span>
                                <span className="w-4/5 h-[3px] bg-white"></span>
                                <span className="w-full h-[3px] bg-white"></span>
                            </div>
                        </div>
                        <div className="fade-up flex justify-center pt-6 md:pt-10">
                            <div className="px-3 md:px-5">
                                <p className="md:text-[40px] text-[24px] leading-[1.4]">
                                    Next-generation wallet that <br className="max-md:hidden" />meets all needs of WEB3
                                </p>
                                <p className="md:text-[32px] text-[20px]  leading-[1.3] mt-2">
                                    Access crypto assets, DApps, NFTs and various WEB3 ecosystems from multiple chains in one wallet.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div ref={containerRef} className="md:mt-[160px] mt-[100px]">
                    <h4 data-splitting className="md:text-[64px] text-[30px] text-center font-bold leading-[1.2]">
                        Safe, secure, simple <br className="max-lg:hidden" />
                        Easy operation with one click <br className="max-lg:hidden" />
                        Pursuing fast and intuitive UI/UX. 
                    </h4>
                </div>
                <p className="fade-up w-full max-w-[520px] mx-auto md:text-[24px] text-[16px] font-bold leading-[1.3] md:mt-10 mt-7">
                    Cryptocurrencies and NFTs can be sent and received with just a few taps.
                </p>
            </div>
        </section>
  );
};

export default Introduction;
