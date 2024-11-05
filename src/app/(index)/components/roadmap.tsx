"use client";

import { useGSAP } from "@gsap/react";
import { useScroll } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {  useEffect, useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);


const PhaseData = [
  {
    number: "1",
    items: [
      "Building IPFS-based metadata storage system",
      "Establishing basic storage provision and reward systems",
    ],
    current: true,
  },
  {
    number: "2",
    items: [
      "Development and implementation of proprietary sharding technology",
      "Provision of private storage solutions combining encryption",
    ],
  },
  {
    number: "3",
    items: [
      "Construction of global-scale distributed storage network",
      "Implementation of efficient data access through advanced routing systems",
    ],
  },
];

const Phase = ({
  phase,
  items,
  current = false,
}: {
  phase: string;
  items: string[];
  current?: boolean;
}) => (
  <div className="flex items-center md:py-[50px] py-8 max-md:gap-5 border-b border-white">
    <div className="xl:w-[480px] flex justify-center items-center flex-col leading-[1.3]">
      <span className="md:text-[48px] text-[4vw] font-bold text-center whitespace-nowrap">
        Phase {phase}
      </span>
      {current && <span className="md:text-[32px] text-[3vw]">(Current)</span>}
    </div>
    <div className="">
      <ul className="max-w-[530px] leading-none xl:text-[24px] text-[3vw] list-disc pl-6 space-y-5">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  </div>
);

const Roadmap = ({loaded}: {loaded?: any}) => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const roadRef = useRef<HTMLDivElement>(null!);
  const isDesktop = (): boolean => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(min-width: 1024px)").matches;
    }
    return false;
  };

  useEffect(() => {
    if (!loaded) {
    let ctx = gsap.context(() => {
      if (containerRef.current) {
        const road = containerRef.current.querySelector(".road-move") as HTMLElement | null;;
        const n = road?.offsetHeight ?? 0;

        gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: `${isDesktop() ? "top bottom" : "top bottom"}`,
                end: isDesktop() ? "bottom top" : "bottom top",
                scrub: 0.5,
            }
        }).to(road, {
            top: isDesktop() ? 0.6 * -n : 0.4 * -n,
            z: isDesktop() ? -250 : -70,
            ease: "linear",
        });
        
      }
    });

    return () => ctx.revert();
  }
  });

  return (
    <div className="md:mb-[280px] mb-[150px]">
      <section
        ref={containerRef}
        id="brain"
        className="road-prerspective relative pt-20 md:pt-[50px] md:pb-10 pb-[60px] px-8 w-screen"
      >
        <div ref={roadRef} className="road-move relative w-full max-w-[1310px] mx-auto max-md:mb-[0] max-xl:mb-[400px] ">
          <h3 className="text-center flex flex-col items-center justify-center leading-[1.3] font-semibold md:text-[96px] text-[32px]">
            <span className="mr-40">Technical</span>
            <span className="ml-40">Roadmap</span>
          </h3>
          <p className="text-center md:text-[24px] text-[18px] font-light md:mt-[35px]">
            IPDC development proceeds in the following phases
          </p>
          <div className="md:mt-[100px] mt-[70px]">
            {PhaseData.map((phase, index) => (
              <Phase
                phase={phase.number}
                items={phase.items}
                current={phase.current}
                key={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      <div className="footer-coll"></div>
        <div className="text-center md:text-[96px] text-[40px] font-semibold md:mb-[64px] mb-8">
        WHITEPAPER DOWNLOAD
        </div>
        <div className="flex justify-center">
          <a href="/" className="flex items-center justify-center md:text-[36px] text-[24px] font-semibold md:w-[460px] md:h-[100px] w-[300px] h-20 rounded-full border border-white p-2">
            <span className="flex-1 text-center"> DOWNLOAD NOW</span>
            <img className="max-md:h-full" src="/assets/images/ic-download.svg" alt="" />
          </a>
        </div>
    </div>
  );
};

export default Roadmap;
