"use client";

import { View } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Light from "./models/Light";
import Cloud from "./models/Cloud";
gsap.registerPlugin(useGSAP, ScrollTrigger);

const data = [
    'Centralization Risks',
    'Security and Privacy Concerns',
    'Management System Vulnerabilities',
    'Scalability Limitations',
    'Efficiency and Cost Issues',
    'Participation Barriers'
]

const Brain = () => {
  const cloudRef = useRef(null)
    useGSAP(()=> {
        if (!cloudRef.current) return
        gsap.set(cloudRef.current, {
            scale: 20,
        })

        const scrollTl = gsap.timeline({
            defaults: {
              duration: 2,
            },
            scrollTrigger: {
              trigger: "#brain",
              start: "top bottom",
              end: "bottom bottom",
              scrub: 0.7,
            },
        });
        scrollTl.to(cloudRef.current, { duration: 3,scale: 1 },0)

        const scrollTl2 = gsap.timeline({
            defaults: {
              duration: 2,
            },
            scrollTrigger: {
              trigger: "#solution",
              start: "top bottom",
              end: "bottom top",
              scrub: 0.7,
            },
        });
        scrollTl2.to(cloudRef.current, { scale: 30, y: '300%' },0)
    })
  return (
    <section id="brain" className="relative pt-[200px] md:pt-[160px] md:pb-[100px] pb-[60px] px-8 w-screen overflow-hidden min-h-screen md:mb-[30vh]">
      <div className="w-full max-w-[1350px] mx-auto relative">
      <View ref={cloudRef} className="light-scene top-[20vw] absolute max-md:bottom-0 md:top-[15vw] left-[-5vw] z-40 size-[100vw] md:size-[50vw] block">
          <Cloud />
        </View>
        <h3 className="text-center font-semibold md:text-[96px] text-[32px]">Background and Challenges</h3>
        <div className="flex justify-end mt-12 md:mt-[85px] relative max-md:z-50">
            <ul className="list-decimal md:text-[36px] text-[20px] font-semibold leading-[3]">
                {data.map((item, index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
      </div>
    </section>
  );
};

export default Brain;
