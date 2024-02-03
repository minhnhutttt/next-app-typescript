"use client";
import { useEffect, useLayoutEffect, useRef } from "react";
import useSplitTextAnimation from "@/app/_hooks/useSplitTextAnimation";
import useScrollAnimation from "@/app/_hooks/useScrollAnimation";
import useMarquise from "@/app/_hooks/useMarquise";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Service() {
    useSplitTextAnimation();
    const animateRefs = useScrollAnimation("fadeDown");

    const marquiseContainer = useRef<HTMLDivElement>(null);
    useMarquise(marquiseContainer);

    const containerRef = useRef<HTMLDivElement >(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");
      const sliderContainer = sliderRef.current;
      if (sliderContainer) {
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + sliderContainer.offsetWidth
        }
      });
    }
    }, containerRef);
    return () => ctx.revert();
  });

  return (
    <div>
        <div ref={containerRef} className="relative mt-[20vw] md:mt-[8vw] overflow-hidden">
            <div ref={animateRefs} className="relative">
                <div className="flex absolute top-0 left-0 right-0 overflow-hidden">
                    <p ref={marquiseContainer} className="flex break-keep whitespace-nowrap  [font-size:_clamp(80px,35vw,200px)] md:[font-size:_clamp(80px,20.833vw,300px)] font-solaris text-[#1C1B1B] leading-[0.75]">
                    MOVEMENT MOVEMENT MOVEMENT
                    </p>
                </div>
            </div>
            <div className="px-[3.75vw] max-md:mb-6">
                <div className="w-full max-w-[1340px] mx-auto">
                    <div className="flex max-md:flex-col items-end pt-[16vw] md:pt-[3vw]">
                        <div className="md:w-[53.472vw] pb-[6vw]">
                            <p ref={animateRefs} className="[font-size:_clamp(14px,1vw,18px)] md:[font-size:_clamp(14px,1.25vw,18px)] text-white leading-snug">
                                LEADING IN TECH INNOVATION, WE DELIVER COMPREHENSIVE SOLUTIONS IN BLOCKCHAIN, WEB, APP, AND AI DEVELOPMENT, ENHANCING DATA MANAGEMENT, DIGITAL EXPERIENCES, AND BUSINESS OPERATIONS IN THE MODERN WORLD.
                            </p>
                            <div data-split-text data-delay="1" className="md:mt-10 mt-6 max-md:text-left font-solaris [font-size:_clamp(30px,10vw,90px)] md:[font-size:_clamp(60px,8.333vw,120px)] text-white leading-[0.55]">
                                <span className="opacity-0">SERVICES</span>
                            </div>
                        </div>
                        <div className="md:flex-1 max-md:w-full flex justify-center md:justify-end md:pr-[60px]">
                            <div ref={animateRefs} className="opacity-0 w-[240px] md:w-[27.5vw] max-w-[396px]">
                                <a href="/" className="block relative md:mb-5 group hover:duration-100">
                                    <div className="">
                                        <img src="/images/circle-fliqt.png" alt="" className="animate-[r_linear_infinite_10s,_r_linear_infinite_15s_reverse_paused] group-hover:[animation-play-state:running] [animation-composition:add] group-hover:scale-90 duration-300" />
                                        <div className="absolute inset-0 flex items-center justify-center flex-col pt-8 md:pt-14">
                                            <p className="font-solaris text-[18px] md:text-[2.344vw] lg:text-[22px] text-white mb-3 md:mb-6">VIEW ALL SERVICES</p>
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
            </div>
            <div className="bg-[url('/images/deco.png')] bg-[length:70.139vw_auto] bg-right bg-no-repeat">
                <div className="overflow-hidden" ref={sliderRef}>
                <div className="flex gap-[4vw] md:gap-11 ml-[30vw] w-[200vw] md:w-[140vw]" >
                    <div className="w-[50vw] md:w-[40vw] flex justify-center panel">
                        <div className="flex items-center justify-center p-[2vw] md:p-10 gap-2 md:gap-8 border border-[#939393] rounded-xl">
                            <figure className="md:flex-[0_0_56px] flex-[0_0_40px] flex justify-center">
                                <img src="/images/service-development-01.png" alt="" />
                            </figure>
                            <div className="[font-size:_clamp(12px,2.2vw,24px)] md:[font-size:_clamp(20px,2.222vw,32px)] text-white uppercase leading-none">
                            BLOCKCHAIN <br />DEVELOPMENT
                            </div>
                        </div>
                    </div>
                    <div className="w-[50vw] md:w-[40vw] flex justify-center panel">
                        <div className="flex items-center justify-center p-[2vw] md:p-10 gap-2 md:gap-8 border border-[#939393] rounded-xl">
                            <figure className="md:flex-[0_0_45px] flex-[0_0_30px] flex justify-center">
                                <img src="/images/service-development-02.png" alt="" />
                            </figure>
                            <div className="[font-size:_clamp(12px,2.2vw,24px)] md:[font-size:_clamp(20px,2.222vw,32px)] text-white uppercase leading-none">
                            WEBSITE <br />DEVELOPMENT
                            </div>
                        </div>
                    </div>
                    <div className="w-[50vw] md:w-[40vw] flex justify-center panel">
                        <div className="flex items-center justify-center p-[2vw] md:p-10 gap-2 md:gap-8 border border-[#939393] rounded-xl">
                            <figure className="md:flex-[0_0_66px] flex-[0_0_40px] flex justify-center">
                                <img src="/images/service-development-03.png" alt="" />
                            </figure>
                            <div className="[font-size:_clamp(12px,2.2vw,24px)] md:[font-size:_clamp(20px,2.222vw,32px)] text-white uppercase leading-none">
                            APPLICATION <br />DEVELOPMENT
                            </div>
                        </div>
                    </div>
                    <div className="w-[50vw] md:w-[40vw] flex justify-center panel">
                        <div className="flex items-center justify-center p-[2vw] md:p-10 gap-2 md:gap-8 border border-[#939393] rounded-xl">
                            <figure className="md:flex-[0_0_66px] flex-[0_0_40px] flex justify-center">
                                <img src="/images/service-development-03.png" alt="" />
                            </figure>
                            <div className="[font-size:_clamp(12px,2.2vw,24px)] md:[font-size:_clamp(20px,2.222vw,30px)] text-white uppercase leading-none">
                            AI DEVELOPMENT
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div className="relative flex items-center justify-center mt-[20vw]">
            {/* <div className="relative w-[400px] h-[400px] rotate-90 animate-[rotate_20s_infinite_linear]">
                <div className="flex flex-col">
                    <p data-split-text data-delay="1" className="text-white [font-size:_clamp(30px,10vw,90px)] md:[font-size:_clamp(60px,8.333vw,120px)] font-solaris"><span className="opacity-0">WE</span></p>
                    <p data-split-text data-delay="2"className="text-white [font-size:_clamp(30px,10vw,90px)] md:[font-size:_clamp(60px,8.333vw,120px)] font-solaris"><span className="opacity-0">ARE</span></p>
                </div>
                
            </div> */}
            <div className="-rotate-[25deg]">
            <div className="w-[41.666vw] aspect-square relative animate-[rotate_20s_infinite_linear]">
                <div className="absolute top-2/4 left-[0] w-full flex justify-between items-center -translate-y-1/2">
                    <div className="animate-[backwards-rotation_20s_infinite_linear]">
                        <a href="#" className="md:w-[200px] w-[120px] md:h-[200px] h-[120px] rounded-full bg-[linear-gradient(0deg,_rgba(0,_0,_0,_0.20)_0%,_rgba(0,_0,_0,_0.20)_100%),_linear-gradient(94deg,_rgba(255,_132,_200,_0.20)_1.81%,_rgba(181,_228,_255,_0.20)_50.4%,_rgba(14,_255,_255,_0.20)_99%)] text-white md:text-[26px] text-[14px] flex items-center justify-center border border-[#0EFFFF] animate-[scaling_20s_infinite_linear] [animation-delay:-17.5s]"><span className="rotate-[25deg]">ROBUST</span></a>
                    </div>
                    <div className="animate-[backwards-rotation_20s_infinite_linear]">
                        <a href="#" className="md:w-[200px] w-[120px] md:h-[200px] h-[120px] rounded-full bg-[linear-gradient(0deg,_rgba(0,_0,_0,_0.20)_0%,_rgba(0,_0,_0,_0.20)_100%),_linear-gradient(94deg,_rgba(255,_132,_200,_0.20)_1.81%,_rgba(181,_228,_255,_0.20)_50.4%,_rgba(14,_255,_255,_0.20)_99%)] text-white md:text-[26px] text-[14px] flex items-center justify-center border border-[#0EFFFF] animate-[scaling_20s_infinite_linear] [animation-delay:-27.5s]"><span className="rotate-[25deg]">VERSATILE</span></a>
                    </div>
                </div>
                <div className="absolute top-2/4 left-[0] w-full flex justify-between items-center -translate-y-1/2 rotate-45">
                    <div className="animate-[backwards-rotation_20s_infinite_linear]">
                        <a href="#" className="md:w-[200px] w-[120px] md:h-[200px] h-[120px] rounded-full bg-[linear-gradient(0deg,_rgba(0,_0,_0,_0.20)_0%,_rgba(0,_0,_0,_0.20)_100%),_linear-gradient(94deg,_rgba(255,_132,_200,_0.20)_1.81%,_rgba(181,_228,_255,_0.20)_50.4%,_rgba(14,_255,_255,_0.20)_99%)] text-white md:text-[26px] text-[14px] flex items-center justify-center border border-[#0EFFFF] animate-[scaling_20s_infinite_linear] [animation-delay:-20s]"><span className="rotate-[-20deg]">PROFESSIONAL</span></a>
                    </div>
                    <div className="animate-[backwards-rotation_20s_infinite_linear]">
                        <a href="#" className="md:w-[200px] w-[120px] md:h-[200px] h-[120px] rounded-full bg-[linear-gradient(0deg,_rgba(0,_0,_0,_0.20)_0%,_rgba(0,_0,_0,_0.20)_100%),_linear-gradient(94deg,_rgba(255,_132,_200,_0.20)_1.81%,_rgba(181,_228,_255,_0.20)_50.4%,_rgba(14,_255,_255,_0.20)_99%)] text-white md:text-[26px] text-[14px] flex items-center justify-center border border-[#0EFFFF] animate-[scaling_20s_infinite_linear] [animation-delay:-30s]"><span className="rotate-[-20deg]">RELIABLE</span></a>
                    </div>
                </div>
                <div className="absolute top-2/4 left-[0] w-full flex justify-between items-center -translate-y-1/2 rotate-90">
                    <div className="animate-[backwards-rotation_20s_infinite_linear]">
                        <a href="#" className="md:w-[200px] w-[120px] md:h-[200px] h-[120px] rounded-full bg-[linear-gradient(0deg,_rgba(0,_0,_0,_0.20)_0%,_rgba(0,_0,_0,_0.20)_100%),_linear-gradient(94deg,_rgba(255,_132,_200,_0.20)_1.81%,_rgba(181,_228,_255,_0.20)_50.4%,_rgba(14,_255,_255,_0.20)_99%)] text-white md:text-[26px] text-[14px] flex items-center justify-center border border-[#0EFFFF] animate-[scaling_20s_infinite_linear] [animation-delay:-22.5s]"><span className="rotate-[-65deg]">STRATEGIC</span></a>
                    </div>
                    <div className="animate-[backwards-rotation_20s_infinite_linear]">
                        <a href="#" className="md:w-[200px] w-[120px] md:h-[200px] h-[120px] rounded-full bg-[linear-gradient(0deg,_rgba(0,_0,_0,_0.20)_0%,_rgba(0,_0,_0,_0.20)_100%),_linear-gradient(94deg,_rgba(255,_132,_200,_0.20)_1.81%,_rgba(181,_228,_255,_0.20)_50.4%,_rgba(14,_255,_255,_0.20)_99%)] text-white md:text-[26px] text-[14px] flex items-center justify-center border border-[#0EFFFF] animate-[scaling_20s_infinite_linear] [animation-delay:-32.5s]"><span className="rotate-[-65deg]">AGILE</span></a>
                    </div>
                </div>
                <div className="absolute top-2/4 left-[0] w-full flex justify-between items-center -translate-y-1/2 rotate-[135deg]">
                    <div className="animate-[backwards-rotation_20s_infinite_linear]">
                        <a href="#" className="md:w-[200px] w-[120px] md:h-[200px] h-[120px] rounded-full bg-[linear-gradient(0deg,_rgba(0,_0,_0,_0.20)_0%,_rgba(0,_0,_0,_0.20)_100%),_linear-gradient(94deg,_rgba(255,_132,_200,_0.20)_1.81%,_rgba(181,_228,_255,_0.20)_50.4%,_rgba(14,_255,_255,_0.20)_99%)] text-white md:text-[26px] text-[14px] flex items-center justify-center border border-[#0EFFFF] animate-[scaling_20s_infinite_linear] [animation-delay:-25s]"><span className="rotate-[-110deg]">INTEGRATIVE</span></a>
                    </div>
                    <div className="animate-[backwards-rotation_20s_infinite_linear]">
                        <a href="#" className="md:w-[200px] w-[120px] md:h-[200px] h-[120px] rounded-full bg-[linear-gradient(0deg,_rgba(0,_0,_0,_0.20)_0%,_rgba(0,_0,_0,_0.20)_100%),_linear-gradient(94deg,_rgba(255,_132,_200,_0.20)_1.81%,_rgba(181,_228,_255,_0.20)_50.4%,_rgba(14,_255,_255,_0.20)_99%)] text-white md:text-[26px] text-[14px] flex items-center justify-center border border-[#0EFFFF] animate-[scaling_20s_infinite_linear] [animation-delay:-35s]"><span className="rotate-[-110deg]">FUTURISTIC</span></a>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  );
}
