"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useScrollAnimations from "@/hooks/useScrollAnimations";

import Splitting from 'splitting'

gsap.registerPlugin(ScrollTrigger);
gsap.config({
  nullTargetWarn: false,
});

const Introduction = () => {
    const ref = useScrollAnimations();

    const containe2rRef = useRef<HTMLDivElement>(null);
    const charScrollRef = useRef<HTMLDivElement>(null);
    useLayoutEffect(() => {
        Splitting();
        if (charScrollRef.current  ) {
          const charScroll = charScrollRef.current.querySelectorAll(".char");
              gsap.set(charScroll, {
                  display: 'inline-block',
                  opacity: 0.4,
              });
              const tl = gsap.timeline({
                scrollTrigger: {
                  trigger: containe2rRef.current,
                  start: "top top",
                  end: "bottom top",
                  scrub: 0.9,
                },
              });
              tl.to(charScroll, {
                opacity: 1,
                stagger: 1,
                duration: 1,
              }, 0.1);
              return () => {
                tl.scrollTrigger?.refresh();
                tl.kill();
              };
            }
      }, []);
    
    return (
        <section ref={ref} id="introduction" className="relative overflow-hidden md:px-10 px-5 bg-[linear-gradient(180deg,_#000_0%,_rgba(250,_226,_215,_0.50)_100%)]">
            <div className="w-full max-w-[980px] mx-auto text-white">
                <div ref={containe2rRef} className="h-screen flex flex-col justify-center items-center">
                    <h4 ref={charScrollRef} data-splitting className="md:text-[24px] text-[4vw] text-center font-medium leading-[1.8]">
                    A NEXUS connects North America, ASEAN, and East Asian markets, creating a seamless  flow of entertainment content and bringing mutual benefits to all regions. <br /> 
                    <br />
Through our  comprehensive business approach, we maximize the value of entertainment rights while  supporting creators and artists.<br />
<br />
 We aim to be the definitive platform holder that delivers  premium entertainment experiences worldwide through strategic integration across the entire  value chain. 
                    </h4>
                </div>
            </div>
        </section>
  );
};

export default Introduction;
