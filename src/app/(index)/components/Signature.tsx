"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.config({
  nullTargetWarn: false,
});

const Signature = () => {

    const ref = useScrollAnimations();

    const signatureRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: signatureRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        })
        .to(".preloader-global-video-wrap", {
          width: "60vw",
          bottom: "0",
          left: "20vw",
        }).to(".preloader-global-video-text", {
          yPercent: 0,
              duration: 1.5,
              rotate: 0,
              ease: "power4.out",
              stagger: 0.02,
        }, "-=0.3");


      ScrollTrigger.refresh();
    }, signatureRef);

    return () => ctx.revert();
  });

    return (
        <section ref={ref} className="bg-white relative">
            <div className="w-full relative px-[2rem] pb-[1rem] flex flex-col md:pb-[10rem]">
                <div className="relative w-full">
                    <div className="relative w-full md:h-screen py-[4rem] md:py-0 flex flex-col justify-center md:sticky top-0">
                        <div className="grid w-full uppercase md:text-[14vw] text-[14vw] font-bold leading-[0.85] tracking-tight">
                            <div className="overflow-hidden">
                                <p className="fade-up">Sunny's</p>
                            </div>
                            <div className="overflow-hidden text-right">
                                <p className="fade-up">Signature</p>
                            </div>
                            <div className="overflow-hidden">
                                <p className="fade-up">Keynote</p>
                            </div>
                            <div className="overflow-hidden text-right">
                                <p className="fade-up">Talks(3)</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative flex items-center justify-center flex-col w-full">
                        <div className="trigger-01 card mb-[2rem] md:mb-0 js-card md:h-screen w-full md:sticky md:top-0 pointer-events-none flex justify-center">
                            <div className="relative w-full max-w-[55rem]">
                                <div className="aspect-[106.5/100]"></div>
                                <div className="js-card-inner bg-[#fff] h-full left-[0] overflow-hidden absolute top-[0] w-full border flex items-center justify-center rounded-[0.4rem] border-grey hover:bg-[#f4f4f4] transition-colors duration-300 z-[3]">
                                    <a href="/" className="absolute top-0 left-0 size-full z-2 opacity-0 pointer-events-auto">Visionary Leadership</a>
                                    <span className="absolute top-0 left-0 px-[3rem] font-bold pt-[2rem] text-[4rem] md:text-[8rem] leading-none js-split">
                                        <div className="overflow-hidden">
                                            <p className="fade-up">1</p>
                                        </div>
                                    </span>
                                    <div className="absolute bottom-0 left-0 px-[3rem] pb-[3rem] md:pb-[6rem] w-full">
                                        <h3 className="md:my-[3rem] my-[2rem] text-[4rem] md:text-[8rem] leading-none font-bold">
                                            <div className="overflow-hidden"><p className="fade-up">Visionary </p></div>
                                            <div className="overflow-hidden"><p className="fade-up">Leadership </p></div>
                                        </h3>
                                        <div className="overflow-hidden md:text-[2rem] text-[1.8rem] font-medium">
                                            <p className="fade-up">How to rally people around your ideas</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="trigger-02 card mb-[2rem] md:mb-0 js-card md:h-screen w-full md:sticky md:top-0 pointer-events-none flex justify-center">
                            <div className="relative w-full max-w-[55rem]">
                                <div className="aspect-[106.5/100]"></div>
                                <div className="js-card-inner bg-[#fff] h-full left-[0] overflow-hidden absolute top-[0] w-full border flex items-center justify-center rounded-[0.4rem] border-grey hover:bg-[#f4f4f4] transition-colors duration-300 z-[3]">
                                    <a href="/" className="absolute top-0 left-0 size-full z-2 opacity-0 pointer-events-auto">Visionary Leadership</a>
                                    <span className="absolute top-0 left-0 px-[3rem] font-bold pt-[2rem] text-[4rem] md:text-[8rem] leading-none js-split">
                                        <div className="overflow-hidden">
                                            <p className="fade-up">2</p>
                                        </div>
                                    </span>
                                    <div className="absolute bottom-0 left-0 px-[3rem] pb-[3rem] md:pb-[6rem] w-full">
                                        <h3 className="md:my-[3rem] my-[2rem] text-[4rem] md:text-[8rem] leading-none font-bold">
                                            <div className="overflow-hidden"><p className="fade-up">Visionary </p></div>
                                            <div className="overflow-hidden"><p className="fade-up">Leadership </p></div>
                                        </h3>
                                        <div className="overflow-hidden md:text-[2rem] text-[1.8rem] font-medium">
                                            <p className="fade-up">How to rally people around your ideas</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="trigger-03 card mb-[2rem] md:mb-0 js-card md:h-screen w-full md:sticky md:top-0 pointer-events-none flex justify-center">
                            <div className="relative w-full max-w-[55rem]">
                                <div className="aspect-[106.5/100]"></div>
                                <div className="js-card-inner bg-[#fff] h-full left-[0] overflow-hidden absolute top-[0] w-full border flex items-center justify-center rounded-[0.4rem] border-grey hover:bg-[#f4f4f4] transition-colors duration-300 z-[3]">
                                    <a href="/" className="absolute top-0 left-0 size-full z-2 opacity-0 pointer-events-auto">Visionary Leadership</a>
                                    <span className="absolute top-0 left-0 px-[3rem] font-bold pt-[2rem] text-[4rem] md:text-[8rem] leading-none js-split">
                                        <div className="overflow-hidden">
                                            <p className="fade-up">3</p>
                                        </div>
                                    </span>
                                    <div className="absolute bottom-0 left-0 px-[3rem] pb-[3rem] md:pb-[6rem] w-full">
                                        <h3 className="md:my-[3rem] my-[2rem] text-[4rem] md:text-[8rem] leading-none font-bold">
                                            <div className="overflow-hidden"><p className="fade-up">Visionary </p></div>
                                            <div className="overflow-hidden"><p className="fade-up">Leadership </p></div>
                                        </h3>
                                        <div className="overflow-hidden md:text-[2rem] text-[1.8rem] font-medium">
                                            <p className="fade-up">How to rally people around your ideas</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="horizontal-section hidden md:block relative pointer-events-none z-3">
                    <div className="grid grid-cols-12 md:grid-cols-[repeat(24,_minmax(0,_1fr))] gap-x-[2rem]">
                        <a href="/" className="js-target-position w-full col-span-12 md:col-span-8 pointer-events-auto overflow-hidden relative">
                            <div className="aspect-[106.5/100]"></div>
                            <div className="absolute top-[1px] left-[1px] w-[calc(100%-2px)] h-[calc(100%-2px)] overflow-hidden js-explore">
                                <div className="hidden md:block z-2 top-0 left-0 absolute w-[20rem] text-[1rem] pointer-events-none explore-cursor js-explore-trigger">
                                    <div className="bg-white p-[0.5rem] size-full border rounded-[0.4rem] border-grey will-change-transform js-explore-cursor">
                                        <div className="flex flex-col w-full bg-grey rounded-[0.4rem] relative mb-[0.5rem] overflow-hidden">
                                            <div className="pt-[58%]"></div>
                                            <video
                                                className="absolute top-0 left-0 w-full h-full object-cover"
                                                data-lazy-video=""
                                                data-lazy=""
                                                data-autoplay="true"
                                                preload="none"
                                                loop
                                                muted
                                                autoPlay
                                                src="/assets/images/186784f4.mp4"
                                                playsInline
                                                data-loaded="true"
                                            ></video>
                                            <div className="px-5">Explore</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="/" className="js-target-position w-full col-span-12 md:col-span-8 pointer-events-auto overflow-hidden relative">
                            <div className="aspect-[106.5/100]"></div>
                            <div className="absolute top-[1px] left-[1px] w-[calc(100%-2px)] h-[calc(100%-2px)] overflow-hidden js-explore">
                                <div className="hidden md:block z-2 top-0 left-0 absolute w-[20rem] text-[1rem] pointer-events-none explore-cursor js-explore-trigger">
                                    <div className="bg-white p-[0.5rem] size-full border rounded-[0.4rem] border-grey will-change-transform js-explore-cursor">
                                        <div className="flex flex-col w-full bg-grey rounded-[0.4rem] relative mb-[0.5rem] overflow-hidden">
                                            <div className="pt-[58%]"></div>
                                            <video
                                                className="absolute top-0 left-0 w-full h-full object-cover"
                                                data-lazy-video=""
                                                data-lazy=""
                                                data-autoplay="true"
                                                preload="none"
                                                loop
                                                muted
                                                autoPlay
                                                src="/assets/images/186784f4.mp4"
                                                playsInline
                                                data-loaded="true"
                                            ></video>
                                            <div className="px-5">Explore</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="/" className="js-target-position w-full col-span-12 md:col-span-8 pointer-events-auto overflow-hidden relative">
                            <div className="aspect-[106.5/100]"></div>
                            <div className="absolute top-[1px] left-[1px] w-[calc(100%-2px)] h-[calc(100%-2px)] overflow-hidden js-explore">
                                <div className="hidden md:block z-2 top-0 left-0 absolute w-[20rem] text-[1rem] pointer-events-none explore-cursor js-explore-trigger">
                                    <div className="bg-white p-[0.5rem] size-full border rounded-[0.4rem] border-grey will-change-transform js-explore-cursor">
                                        <div className="flex flex-col w-full bg-grey rounded-[0.4rem] relative mb-[0.5rem] overflow-hidden">
                                            <div className="pt-[58%]"></div>
                                            <video
                                                className="absolute top-0 left-0 w-full h-full object-cover"
                                                data-lazy-video=""
                                                data-lazy=""
                                                data-autoplay="true"
                                                preload="none"
                                                loop
                                                muted
                                                autoPlay
                                                src="/assets/images/186784f4.mp4"
                                                playsInline
                                                data-loaded="true"
                                            ></video>
                                            <div className="px-5">Explore</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Signature;