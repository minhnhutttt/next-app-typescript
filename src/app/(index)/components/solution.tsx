"use client";

import Puzzle from "./models/Puzzle";
import { View } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
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
  const puzzleRef = useRef(null)
    // useGSAP(()=> {
    //     if (!puzzleRef.current) return
    //     gsap.set(puzzleRef.current, {
    //         scale: 100,
    //         y: "-200%"
    //     })

    //     const scrollTl = gsap.timeline({
    //         defaults: {
    //           duration: 2,
    //         },
    //         scrollTrigger: {
    //           trigger: "#brain",
    //           start: "top bottom",
    //           end: "bottom top",
    //           scrub: 0.7,
    //         },
    //     });
    //     scrollTl.to(puzzleRef.current, { duration: 3, y: "0", scale: 1 },0)

    //     const scrollTl2 = gsap.timeline({
    //       defaults: {
    //         duration: 2,
    //       },
    //       scrollTrigger: {
    //         trigger: "#feature",
    //         start: "top bottom",
    //         end: "bottom top",
    //         scrub: 0.7,
    //       },
    //   });
    //   scrollTl2.to(puzzleRef.current, { scale: 20 },0)
    // })
  return (
    <section id="solution" className="relative pt-20 md:pt-[60px] md:pb-10 pb-[60px] px-8 w-screen overflow-hidden md:mb-[30vh]">
      <div className="w-full max-w-[1310px] mx-auto relative">
      <View ref={puzzleRef} className="light-scene absolute right-[-5vw] top-[-5vw] z-40 size-[100vw] md:size-[50vw] block">
          <Puzzle />
        </View>
        <h3 className="text-center font-semibold md:text-[96px] text-[32px]">IPDC Solution</h3>
        <p className="max-w-[520px] md:text-[24px] text-[18px] font-semibold mt-12 md:mt-[95px] relative max-md:z-50">
            IPDC provides an innovative solution that builds upon IPFS concepts while incorporating unique improvements
        </p>
        <div className="flex justify-start mt-12 md:mt-[45px] relative max-md:z-50">
            <ul className="list-decimal md:text-[36px] text-[20px] font-semibold leading-[3] pl-8">
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
