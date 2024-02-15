"use client";
import { useRef } from "react";
import useSplitTextAnimation from "@/app/_hooks/useSplitTextAnimation";
import useScrollAnimation from "@/app/_hooks/useScrollAnimation";
import useMarquise from "@/app/_hooks/useMarquise";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Card from "./card";
gsap.registerPlugin(ScrollTrigger);

export default function Service() {
    useSplitTextAnimation();
    const animateRefs = useScrollAnimation("fadeDown");

    const marquiseContainer = useRef<HTMLDivElement>(null);
    useMarquise(marquiseContainer);
    
    const marquiseContainer2 = useRef<HTMLDivElement>(null);
    useMarquise(marquiseContainer2);



  return (
    <div>
        <div className="relative mt-[20vw] md:mt-[8vw] overflow-hidden">
            <div ref={animateRefs} className="relative opacity-0">
                <div className="flex absolute top-0 left-0 right-0 overflow-hidden">
                    <p ref={marquiseContainer} className="flex break-keep whitespace-nowrap  [font-size:_clamp(80px,35vw,200px)] md:[font-size:_clamp(80px,20.833vw,300px)] font-solaris text-[#1C1B1B] leading-[0.75]">
                    MOVEMENT MOVEMENT MOVEMENT
                    </p>
                </div>
            </div>
            <div ref={animateRefs} className="px-[3.75vw] max-md:mb-6 opacity-0">
                <div className="w-full max-w-[1340px] mx-auto">
                    <div className="flex max-md:flex-col items-end pt-[16vw] md:pt-[3vw]">
                        <div className="md:w-[53.472vw] pb-[6vw]">
                            <p className="[font-size:_clamp(14px,1vw,18px)] md:[font-size:_clamp(14px,1.25vw,18px)] text-white leading-snug">
                                LEADING IN TECH INNOVATION, WE DELIVER COMPREHENSIVE SOLUTIONS IN BLOCKCHAIN, WEB, APP, AND AI DEVELOPMENT, ENHANCING DATA MANAGEMENT, DIGITAL EXPERIENCES, AND BUSINESS OPERATIONS IN THE MODERN WORLD.
                            </p>
                            <div data-split-text data-delay="1" className="md:mt-10 mt-6 max-md:text-left font-solaris [font-size:_clamp(30px,10vw,90px)] md:[font-size:_clamp(60px,8.333vw,120px)] text-white leading-[0.55]">
                                <span className="opacity-0">SERVICES</span>
                            </div>
                        </div>
                        <div className="md:flex-1 max-md:w-full flex justify-center md:justify-end md:pr-[60px]">
                            <div className="w-[240px] md:w-[27.5vw] max-w-[396px]">
                                <a href="/service" className="block relative md:mb-5 group hover:duration-100">
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
            </div>
            <div className="px-5 overflow-hidden">
                <div className="flex justify-center max-md:flex-wrap max-md:gap-y-5">
                    <Card>
                        <div className="flex flex-col items-center justify-center p-[2vw] md:p-10 gap-2 md:gap-8 ">
                            <figure className="max-md:w-[40px] flex justify-center">
                                <img className="w-full" src="/images/service-development-01.png" alt="" />
                            </figure>
                            <div className="[font-size:_clamp(12px,2.2vw,24px)] md:[font-size:_clamp(18px,2.222vw,32px)] text-white uppercase leading-none text-center">
                            BLOCKCHAIN <br />DEVELOPMENT
                            </div>
                        </div>
                    </Card>
                    <Card>
                        <div className="flex flex-col items-center justify-center p-[2vw] md:p-10 gap-2 md:gap-8 ">
                            <figure className="max-md:w-[36px] flex justify-center">
                                <img className="w-full" src="/images/service-development-02.png" alt="" />
                            </figure>
                            <div className="[font-size:_clamp(12px,2.2vw,24px)] md:[font-size:_clamp(18px,2.222vw,32px)] text-white uppercase leading-none text-center">
                            WEBSITE <br />DEVELOPMENT
                            </div>
                        </div>
                    </Card>
                    <Card>
                        <div className="flex flex-col items-center justify-center p-[2vw] md:p-10 gap-2 md:gap-8 ">
                            <figure className="max-md:w-[44px] flex justify-center">
                                <img className="w-full" src="/images/service-development-03.png" alt="" />
                            </figure>
                            <div className="[font-size:_clamp(12px,2.2vw,24px)] md:[font-size:_clamp(18px,2.222vw,32px)] text-white uppercase leading-none text-center">
                            APPLICATION <br />DEVELOPMENT
                            </div>
                        </div>
                    </Card>
                    <Card>
                        <div className="flex flex-col items-center justify-center p-[2vw] md:p-10 gap-2 md:gap-8 ">
                            <figure className="max-md:w-[44px] flex justify-center">
                                <img className="w-full" src="/images/service-development-04.png" alt="" />
                            </figure>
                            <div className="[font-size:_clamp(12px,2.2vw,24px)] md:[font-size:_clamp(18px,2.222vw,32px)] text-white uppercase leading-none text-center">
                            AI <br />DEVELOPMENT
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
            <div>
            <div ref={animateRefs} className="relative flex items-center justify-center pt-[4vw] opacity-0 overflow-hidden">
                <div className="bg-[url('/images/deco.png')] bg-[length:70.139vw_auto] bg-right-top bg-no-repeat min-[1440px]:top-[-100px] top-[-6.944vw] absolute w-full h-full"></div>
                <div className="relative -rotate-[25deg] md:w-[59vw] w-[88vw] aspect-square max-w-[850px] overflow-hidden">
                    <div className="relative w-full h-full animate-[rotate_20s_infinite_linear]">
                    <div className="absolute top-2/4 left-[0] w-full flex justify-between items-center -translate-y-1/2">
                        <div className="animate-[backwards-rotation_20s_infinite_linear]">
                            <p className="md:w-[16.667vw] w-[24vw] aspect-square max-w-[240px] rounded-full bg-[linear-gradient(0deg,_rgba(0,_0,_0,_0.20)_0%,_rgba(0,_0,_0,_0.20)_100%),_linear-gradient(94deg,_rgba(255,_132,_200,_0.20)_1.81%,_rgba(181,_228,_255,_0.20)_50.4%,_rgba(14,_255,_255,_0.20)_99%)] text-white md:[font-size:_clamp(16px,1.806vw,26px)] [font-size:_clamp(12px,2vw,20px)] flex items-center justify-center border border-[#0EFFFF] animate-[scaling_20s_infinite_linear] [animation-delay:-17.5s]"><span className="rotate-[25deg]">ROBUST</span></p>
                        </div>
                        <div className="animate-[backwards-rotation_20s_infinite_linear]">
                            <p className="md:w-[16.667vw] w-[24vw] aspect-square max-w-[240px] rounded-full bg-[linear-gradient(0deg,_rgba(0,_0,_0,_0.20)_0%,_rgba(0,_0,_0,_0.20)_100%),_linear-gradient(94deg,_rgba(255,_132,_200,_0.20)_1.81%,_rgba(181,_228,_255,_0.20)_50.4%,_rgba(14,_255,_255,_0.20)_99%)] text-white md:[font-size:_clamp(16px,1.806vw,26px)] [font-size:_clamp(12px,2vw,20px)] flex items-center justify-center border border-[#0EFFFF] animate-[scaling_20s_infinite_linear] [animation-delay:-27.5s]"><span className="rotate-[25deg]">VERSATILE</span></p>
                        </div>
                    </div>
                    <div className="absolute top-2/4 left-[0] w-full flex justify-between items-center -translate-y-1/2 rotate-45">
                        <div className="animate-[backwards-rotation_20s_infinite_linear]">
                            <p className="md:w-[16.667vw] w-[24vw] aspect-square max-w-[240px] rounded-full bg-[linear-gradient(0deg,_rgba(0,_0,_0,_0.20)_0%,_rgba(0,_0,_0,_0.20)_100%),_linear-gradient(94deg,_rgba(255,_132,_200,_0.20)_1.81%,_rgba(181,_228,_255,_0.20)_50.4%,_rgba(14,_255,_255,_0.20)_99%)] text-white md:[font-size:_clamp(16px,1.806vw,26px)] [font-size:_clamp(10px,1.6vw,18px)] flex items-center justify-center border border-[#0EFFFF] animate-[scaling_20s_infinite_linear] [animation-delay:-20s]"><span className="rotate-[-20deg]">PROFESSIONAL</span></p>
                        </div>
                        <div className="animate-[backwards-rotation_20s_infinite_linear]">
                            <p className="md:w-[16.667vw] w-[24vw] aspect-square max-w-[240px] rounded-full bg-[linear-gradient(0deg,_rgba(0,_0,_0,_0.20)_0%,_rgba(0,_0,_0,_0.20)_100%),_linear-gradient(94deg,_rgba(255,_132,_200,_0.20)_1.81%,_rgba(181,_228,_255,_0.20)_50.4%,_rgba(14,_255,_255,_0.20)_99%)] text-white md:[font-size:_clamp(16px,1.806vw,26px)] [font-size:_clamp(12px,2vw,20px)] flex items-center justify-center border border-[#0EFFFF] animate-[scaling_20s_infinite_linear] [animation-delay:-30s]"><span className="rotate-[-20deg]">RELIABLE</span></p>
                        </div>
                    </div>
                    <div className="absolute top-2/4 left-[0] w-full flex justify-between items-center -translate-y-1/2 rotate-90">
                        <div className="animate-[backwards-rotation_20s_infinite_linear]">
                            <p className="md:w-[16.667vw] w-[24vw] aspect-square max-w-[240px] rounded-full bg-[linear-gradient(0deg,_rgba(0,_0,_0,_0.20)_0%,_rgba(0,_0,_0,_0.20)_100%),_linear-gradient(94deg,_rgba(255,_132,_200,_0.20)_1.81%,_rgba(181,_228,_255,_0.20)_50.4%,_rgba(14,_255,_255,_0.20)_99%)] text-white md:[font-size:_clamp(16px,1.806vw,26px)] [font-size:_clamp(12px,2vw,20px)] flex items-center justify-center border border-[#0EFFFF] animate-[scaling_20s_infinite_linear] [animation-delay:-22.5s]"><span className="rotate-[-65deg]">STRATEGIC</span></p>
                        </div>
                        <div className="animate-[backwards-rotation_20s_infinite_linear]">
                            <p className="md:w-[16.667vw] w-[24vw] aspect-square max-w-[240px] rounded-full bg-[linear-gradient(0deg,_rgba(0,_0,_0,_0.20)_0%,_rgba(0,_0,_0,_0.20)_100%),_linear-gradient(94deg,_rgba(255,_132,_200,_0.20)_1.81%,_rgba(181,_228,_255,_0.20)_50.4%,_rgba(14,_255,_255,_0.20)_99%)] text-white md:[font-size:_clamp(16px,1.806vw,26px)] [font-size:_clamp(12px,2vw,20px)] flex items-center justify-center border border-[#0EFFFF] animate-[scaling_20s_infinite_linear] [animation-delay:-32.5s]"><span className="rotate-[-65deg]">AGILE</span></p>
                        </div>
                    </div>
                    <div className="absolute top-2/4 left-[0] w-full flex justify-between items-center -translate-y-1/2 rotate-[135deg]">
                        <div className="animate-[backwards-rotation_20s_infinite_linear]">
                            <p className="md:w-[16.667vw] w-[24vw] aspect-square max-w-[240px] rounded-full bg-[linear-gradient(0deg,_rgba(0,_0,_0,_0.20)_0%,_rgba(0,_0,_0,_0.20)_100%),_linear-gradient(94deg,_rgba(255,_132,_200,_0.20)_1.81%,_rgba(181,_228,_255,_0.20)_50.4%,_rgba(14,_255,_255,_0.20)_99%)] text-white md:[font-size:_clamp(16px,1.806vw,26px)] [font-size:_clamp(12px,2vw,20px)] flex items-center justify-center border border-[#0EFFFF] animate-[scaling_20s_infinite_linear] [animation-delay:-25s]"><span className="rotate-[-110deg]">INTEGRATIVE</span></p>
                        </div>
                        <div className="animate-[backwards-rotation_20s_infinite_linear]">
                            <p className="md:w-[16.667vw] w-[24vw] aspect-square max-w-[240px] rounded-full bg-[linear-gradient(0deg,_rgba(0,_0,_0,_0.20)_0%,_rgba(0,_0,_0,_0.20)_100%),_linear-gradient(94deg,_rgba(255,_132,_200,_0.20)_1.81%,_rgba(181,_228,_255,_0.20)_50.4%,_rgba(14,_255,_255,_0.20)_99%)] text-white md:[font-size:_clamp(16px,1.806vw,26px)] [font-size:_clamp(12px,2vw,20px)] flex items-center justify-center border border-[#0EFFFF] animate-[scaling_20s_infinite_linear] [animation-delay:-35s]"><span className="rotate-[-110deg]">FUTURISTIC</span></p>
                        </div>
                    </div>
                    </div>
                    <div className="rotate-[25deg] absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                        <p data-split-text data-delay="1" className="text-white text-center leading-none font-solaris [font-size:_clamp(30px,10vw,90px)] md:[font-size:_clamp(60px,8.333vw,120px)]"><span className="opacity-0">WE</span></p>
                        <p data-split-text data-delay="1" className="text-white text-center leading-none font-solaris [font-size:_clamp(30px,10vw,90px)] md:[font-size:_clamp(60px,8.333vw,120px)]"><span className="opacity-0">ARE</span></p>
                    </div>
                </div>
            </div>
        </div>
        <div ref={animateRefs} className="relative opacity-0 mt-12">
                <div className="flex max-md:flex-col relative overflow-hidden">
                    <p ref={marquiseContainer2}  className="flex break-keep whitespace-nowrap [font-size:_clamp(44px,28vw,160px)] md:[font-size:_clamp(64px,18.056vw,260px)] font-solaris text-[#1C1B1B] leading-[0.75]">
                    VISIONARIES VISIONARIES VISIONARIES
                    </p>
                    <div className="md:absolute inset-0 flex items-center justify-center px-[3.75vw]">
                        <p className="[font-size:_clamp(14px,1vw,18px)] md:[font-size:_clamp(14px,1.25vw,18px)] text-white w-full max-w-[770px]">
                        fliQt CONTINUES TO FORGE STRONG ALLIANCES WITH PIONEERS AND <br className="max-md:hidden" />VISIONARIES ACROSS VARIOUS TECHNOLOGY SECTORS INCLUDING BLOCKCHAIN, WEB, APPLICATION, AND AI DEVELOPMENT.
                        </p>
                    </div>
                </div>
        </div>
    </div>
  );
}
