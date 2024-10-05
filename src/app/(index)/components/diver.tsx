"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactNode, useEffect, useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
gsap.config({
  nullTargetWarn: false,
});

const Diver = () => {
  const ref = useScrollAnimations();
  const containerDiverRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    let ctx = gsap.context(() => {
      if (containerDiverRef.current) {
        const splittingWords = containerDiverRef.current.querySelectorAll(
          ".splitting-words"
        );
        const splittingBox = containerDiverRef.current.querySelectorAll('.splitting-box')
        splittingWords.forEach((splittingWord) => {
          gsap.fromTo(
            splittingWord.querySelectorAll('.word'),
            { scaleY: 0 },
            {
              scaleY: 1,
              duration: 0.5,
              ease: "power1.out",
              stagger: 0.07,
              scrollTrigger: {
                trigger: splittingWord,
                start: "top 10%", 
                scroller: containerDiverRef.current,
              },
            }
          );
        });
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
              start: "top 80%", 
              scroller: containerDiverRef.current,
            },
          }
        );
      }
    });

    return () => ctx.revert();
  });
  return (
    <section
      ref={ref}
      className="relative bg-[url('/assets/images/diver-bg.png')] bg-no-repeat pt-[446px] mt-[14px] px-5"
    >
      <div className="w-full max-w-[1400px] mx-auto">
        <h3 className="flex justify-center">
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
                className="splitting-words md:text-[70px] text-[32px] tracking-wide leading-none"
              >
                Inheriting Bitcoin's philosophy and reliability, surpassing
                Ethereum's convenience and scalability, challenging the
                realization of essential Web3.
              </div>
              <div className="md:text-[46px] text-[24px] font-medium leading-[1.3] md:mt-[60px] mt-10 md:mb-[120px] mb-20">
                <div className="splitting-words flex items-center gap-5">
                  <span>
                    <img src="/assets/images/ic-diver.svg" alt="" />
                  </span>
                  <span data-splitting className="flex-1">
                    True economic freedom realized by completely free
                    transactions
                  </span>
                </div>
                <div className="splitting-words flex items-center gap-5">
                  <span>
                    <img src="/assets/images/ic-diver.svg" alt="" />
                  </span>
                  <span data-splitting className="flex-1">
                  A seamless future brought by 2-second block time
                  </span>
                </div>
                <div className="splitting-words flex items-center gap-5">
                  <span>
                    <img src="/assets/images/ic-diver.svg" alt="" />
                  </span>
                  <span data-splitting className="flex-1">
                  Supporting large-scale economic spheres with 240,000 transactions per second
                  </span>
                </div>
                <div className="splitting-words flex items-center gap-5">
                  <span>
                    <img src="/assets/images/ic-diver.svg" alt="" />
                  </span>
                  <span data-splitting className="flex-1">
                  Unwavering individual autonomy through high decentralization
                  </span>
                </div>
                <div className="splitting-words flex items-center gap-5">
                  <span>
                    <img src="/assets/images/ic-diver.svg" alt="" />
                  </span>
                  <span data-splitting className="flex-1">
                  Promoting sustainable innovation with environmentally harmonious design
                  </span>
                </div>
              </div>
              <div className="w-full h-[390px] max-w-[790px] mx-auto md:rounded-[60px] rounded-[30px] bg-white/30 flex items-center justify-center p-5">
                <p className="splitting-box full max-w-[480px] md:text-[24px] text-[18px] leading-loose [text-shadow:1px_1px_4px_#0B3FAD]">
                DIVER is an innovative platform packed with possibilities for individuals to build a new era by their own will, regardless of titles or circumstances.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Diver;
