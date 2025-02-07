"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);
const data = [
    'Enhanced Distributed Storage',
    'Phased Development Plan',
    'Security and Privacy',
    'Scalability',
]

const Solution = () => {
  return (
    <section id="solution" className="relative pt-20 md:pt-[60px] md:pb-10 pb-[60px] px-8 w-screen overflow-hidden md:mb-[30vh]">
      <div className="w-full max-w-[1310px] mx-auto relative">
        <h3 className="text-center font-semibold md:text-[96px] text-[32px] relative z-50">IPDC Solution</h3>
        <p className="max-w-[520px] md:text-[24px] text-[18px] font-semibold mt-12 md:mt-[95px] relative max-md:z-50">
            IPDC provides an innovative solution that builds upon IPFS concepts while incorporating unique improvements
        </p>
        <div className="flex justify-start mt-12 md:mt-[45px] relative">
            <ul className="list-decimal md:text-[36px] text-[20px] font-semibold leading-[3] pl-8 relative z-50">
                {data.map((item, index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
      </div>
    </section>
  );
};

export default Solution;
