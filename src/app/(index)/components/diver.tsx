"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
gsap.config({
  nullTargetWarn: false,
});

const Diver = () => {
  const ref = useScrollAnimations();
  const containerDiverRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      if (containerDiverRef.current) {
        const splittingHead = containerDiverRef.current.querySelectorAll(
          ".splitting-head .word"
        );
        const splittingWords =
          containerDiverRef.current.querySelectorAll(".splitting-words");
        const splittingBox =
          containerDiverRef.current.querySelectorAll(".splitting-box");
        gsap.set(containerDiverRef.current.querySelectorAll(".word"), {
          scaleY: 0,
        });
        gsap.fromTo(
          splittingHead,
          { scaleY: 0 },
          {
            scaleY: 1,
            duration: 0.5,
            ease: "power1.out",
            stagger: 0.07,
            scrollTrigger: {
              trigger: splittingHead,
              start: "top bottom",
            },
            onComplete: () => {
              splittingWords.forEach((splittingWord) => {
                gsap.to(splittingWord.querySelectorAll(".word"), {
                  scaleY: 1,
                  duration: 0.5,
                  ease: "power1.out",
                  stagger: 0.07,
                  scrollTrigger: {
                    trigger: splittingWord,
                    start: "top bottom",
                    scroller: containerDiverRef.current,
                  },
                });
              });
            },
          }
        );

        gsap.fromTo(
          splittingBox,
          { scaleY: 0 },
          {
            scaleY: 1,
            duration: 0.5,
            ease: "power1.out",
            stagger: 0.07,
            scrollTrigger: {
              trigger: splittingBox,
              start: "top bottom",
              scroller: containerDiverRef.current,
            },
          }
        );
      }
    });

    return () => ctx.revert();
  });
  return (
    <>
      <section
        ref={ref}
        className="relative bg-[url('/assets/images/diver-bg.png')] max-md:bg-[length:100%_auto] bg-no-repeat md:pt-[446px] pt-[150px] mt-[14px] px-5"
      >
        <div className="w-full max-w-[1400px] mx-auto">
          <h3 className="fade-up flex justify-center">
            <img src="/assets/images/diver-title.png" alt="" />
          </h3>
          <div className="w-full max-w-[1250px] mx-auto md:mt-24 mt-12">
            <div
              ref={containerDiverRef}
              className="h-[543px] rounded-[60px] bg-[#0B3FAD]/[0.3] overflow-auto no-scrollbar"
            >
              <div className="ư-full max-w-[1100px] mx-auto px-5 py-14">
                <div
                  data-splitting
                  className="splitting-head md:text-[70px] text-[24px] tracking-wide leading-none"
                >
                  Inheriting Bitcoin&apos;s philosophy and reliability,
                  surpassing Ethereum&apos;s convenience and scalability,
                  challenging the realization of essential Web3.
                </div>
                <div className="md:text-[46px] text-[20px] font-medium leading-[1.3] md:mt-[60px] mt-10 md:mb-[120px] mb-14 space-y-5">
                  <div className="splitting-words flex md:items-center gap-5">
                    <span className="word max-md:mt-2">
                      <img
                        className="max-md:w-8"
                        src="/assets/images/ic-diver.svg"
                        alt=""
                      />
                    </span>
                    <span data-splitting className="flex-1">
                      True economic freedom realized by completely free
                      transactions
                    </span>
                  </div>
                  <div className="splitting-words flex md:items-center gap-5">
                    <span className="word max-md:mt-2">
                      <img
                        className="max-md:w-8"
                        src="/assets/images/ic-diver.svg"
                        alt=""
                      />
                    </span>
                    <span data-splitting className="flex-1">
                      A seamless future brought by 2-second block time
                    </span>
                  </div>
                  <div className="splitting-words flex md:items-center gap-5">
                    <span className="word max-md:mt-2">
                      <img
                        className="max-md:w-8"
                        src="/assets/images/ic-diver.svg"
                        alt=""
                      />
                    </span>
                    <span data-splitting className="flex-1">
                      Supporting large-scale economic spheres with 240,000
                      transactions per second
                    </span>
                  </div>
                  <div className="splitting-words flex md:items-center gap-5">
                    <span className="word max-md:mt-2">
                      <img
                        className="max-md:w-8"
                        src="/assets/images/ic-diver.svg"
                        alt=""
                      />
                    </span>
                    <span data-splitting className="flex-1">
                      Unwavering individual autonomy through high
                      decentralization
                    </span>
                  </div>
                  <div className="splitting-words flex md:items-center gap-5">
                    <span className="word max-md:mt-2">
                      <img
                        className="max-md:w-8"
                        src="/assets/images/ic-diver.svg"
                        alt=""
                      />
                    </span>
                    <span data-splitting className="flex-1">
                      Promoting sustainable innovation with environmentally
                      harmonious design
                    </span>
                  </div>
                </div>
                <div className="splitting-box w-full md:h-[390px] min-h-[200px] max-w-[790px] mx-auto md:rounded-[60px] rounded-[30px] bg-white/30 flex items-center justify-center p-5">
                  <p className="full max-w-[480px] md:text-[24px] text-[18px] leading-loose [text-shadow:1px_1px_4px_#0B3FAD]">
                    DIVER is an innovative platform packed with possibilities
                    for individuals to build a new era by their own will,
                    regardless of titles or circumstances.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="fade-up flex justify-center md:mt-[78px] mt-10 relative z-10">
        <a
          href="/about"
          className="md:text-[20px] text-[16px] font-semibold leading-none md:w-[320px] w-[280px] h-[60px] md:h-[70px] flex justify-center items-center [text-shadow:1px_1px_1px_rgba(0,_0,_0,_0.25)] text-[#005FD7] bg-white [box-shadow:-3px_-4px_20px_0px_rgba(255,_255,_255,_0.15)_inset,_4px_10px_30px_0px_rgba(24,_83,_158,_0.50)] rounded-[80px] tracking-widest"
        >
          About DIVER
        </a>
      </div>
    </>
  );
};

export default Diver;
