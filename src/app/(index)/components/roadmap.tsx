"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";
import { useGSAP } from "@gsap/react";
import { useScroll } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {  useRef } from "react";

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

const Roadmap = () => {
  const ref = useScrollAnimations();
  const containerRef = useRef<HTMLDivElement>(null!);
  const roadRef = useRef<HTMLDivElement>(null!);
  const {fixed} = useScroll();
  const isDesktop = (): boolean => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(min-width: 1024px)").matches;
    }
    return false;
  };

  useGSAP(() => {
        const n = roadRef.current?.offsetHeight ?? 0;
        gsap
          .timeline({
            scrollTrigger: {
              trigger: roadRef.current,
              start: `${isDesktop() ? "500 bottom" : "600 bottom"}`,
              end: isDesktop() ? "900 bottom" : "100 bottom",
              scrub: 0.5,
              scroller: fixed.parentElement,
            },
          })
          .to(roadRef.current, {
            top: isDesktop() ? 0.6 * -n : 0.3 * -n,
            z: isDesktop() ? -250 : -50,
            ease: "linear",
          });
  },  { scope: roadRef });

  return (
    <div className="">
      <section
        ref={containerRef}
        id="brain"
        className="road-prerspective max-md:mb-[0] max-xl:mb-[400px] relative pt-20 md:pt-[50px] md:pb-10 pb-[60px] px-8 w-full"
      >
        <div ref={roadRef} className="road-move relative w-full max-w-[1310px] mx-auto">
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
        <div className="footer-coll"></div>
      </section>
    </div>
  );
};

export default Roadmap;
