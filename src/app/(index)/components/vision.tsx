"use client";

import { View } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Light from "./models/Light";
gsap.registerPlugin(useGSAP, ScrollTrigger);

const Article = ({title, items}:{title: string, items: string[]}) => (
  <div className="leading-[1.3]">
    <h5 className="md:text-[28px] text-[20px] font-medium">{title}</h5>
    <ul className="md:text-[16px] text-[14px] mt-[15px] space-y-[15px] max-w-[540px]">
      {items.map((item, index) => (
        <li className="flex gap-1" key={index}>
          <span>●</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
)

const Vision = () => {
  const lightRef = useRef<any>(null)
  useGSAP(()=> {
    if (!lightRef.current) return
    gsap.set(lightRef.current, {
        opacity: 0,
        scale: 20
    })

    const scrollTl = gsap.timeline({
        defaults: {
          duration: 2,
        },
        scrollTrigger: {
          trigger: "#introduction",
          start: "top bottom",
          end: "bottom top",
          scrub: 0.7,
        },
    });
    scrollTl.to(lightRef.current, { duration: 3, opacity: 1, scale: 1 },0)

    const scrollTl2 = gsap.timeline({
      defaults: {
        duration: 2,
      },
      scrollTrigger: {
        trigger: "#brain",
        start: "top bottom",
        end: "bottom +=50%",
        scrub: 0.7,
      },
  });
  scrollTl2.to(lightRef.current, { duration: 3, opacity: 0, scale: 30, pointerEvents: "none", display: 'none' },0)
})
  return (
    <section className="relative bg-[url('/assets/images/vision-bg.png')] bg-center bg-[length:100%_100%] md:h-[1274px] md:pt-[254px] pt-[140px] w-screen overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-5 xl:px-12 relative">
        <View ref={lightRef} className="light-scene absolute right-0 top-[-5vw] z-40 size-full md:size-[50vw] block">
          <Light />
        </View>
            <h5 className="md:text-[36px] text-[24px] font-semibold relative max-md:z-50">
                The IPDC project aims to realize the <br />
                following innovative vision
            </h5>
            <div className="md:mt-[154px] mt-20 space-y-10 md:space-y-[64px]  relative max-md:z-50">
              <div className="">
                <Article title="Building a True Distributed Web" items={['Realization of a completely distributed web system independent of traditional DNS','Creation of a secure internet environment resistant to tampering and unauthorized access','Freedom from hacking-related information leaks and database losses']} />
              </div>
              <div className="flex md:justify-center max-md:pl-5">
                <Article title="Realization of Edge Computing" items={['Building an efficient system for data processing at locations closest to users','Achievement of low-latency, high-speed data access']} />
              </div>
              <div className="flex md:justify-end max-md:pl-10">
                <Article title="Democratization of Digital Infrastructure" items={['Establishment of an open and fair data management system accessible to everyone','Implementation of a flexible model enabling participation at various scales, from individuals to data centers']} />
              </div>
            </div>
        </div>
    </section>
  );
};

export default Vision;