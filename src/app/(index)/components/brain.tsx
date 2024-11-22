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
  return (
    <section id="brain" className="relative pt-[200px] md:pt-[160px] md:pb-[100px] pb-[60px] px-8 w-screen overflow-hidden min-h-screen md:mb-[30vh]">
      <div className="w-full max-w-[1350px] mx-auto relative">
        <h3 className="text-center font-semibold md:text-[96px] text-[32px] relative z-50">Background and Challenges</h3>
        <div className="flex justify-end mt-12 md:mt-[85px] relative max-md:z-50">
            <ul className="list-decimal md:text-[36px] text-[20px] font-semibold leading-[3] relative z-50">
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
