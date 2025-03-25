"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useScrollAnimations from "@/hooks/useScrollAnimations";

import Splitting from "splitting";

gsap.registerPlugin(ScrollTrigger);
gsap.config({
  nullTargetWarn: false,
});

const Introduction = () => {
  const ref = useScrollAnimations();

  const containe2rRef = useRef<HTMLDivElement>(null);
  const charScrollRef2 = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    Splitting();

    if (charScrollRef2.current) {
      const charScroll = charScrollRef2.current.querySelectorAll(".char");

      gsap.set(charScroll, {
        display: "inline-block",
      });

      ScrollTrigger.refresh();

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containe2rRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.9,
          pin: true,
        },
      });

      tl.to(
        charScroll,
        {
          opacity: 1,
          stagger: 1,
          duration: 1,
          color: "#000",
        },
        0.1
      );

      return () => {
        if (tl.scrollTrigger) {
          tl.scrollTrigger.kill();
        }
        ScrollTrigger.refresh();
        tl.scrollTrigger?.refresh();
        tl.kill();
      };
    }
  }, []);

  return (
    <section
      ref={ref}
      id="introduction"
      className="mt-[100vh] relative overflow-hidden md:px-10 px-5 "
    >
      <div className="w-full max-w-[980px] mx-auto text-[#ADADAD]">
        <div
          ref={containe2rRef}
          className="h-screen flex flex-col justify-center items-center"
        >
          <h4
            ref={charScrollRef2}
            data-splitting
            className="md:text-[24px] text-[4vw] text-center font-medium leading-[1.8]"
          >
            A NEXUS connects North America, ASEAN, and East Asian markets,
            creating a seamless  flow of entertainment content and bringing
            mutual benefits to all regions. <br />
            <br />
            Through our  comprehensive business approach, we maximize the value
            of entertainment rights while  supporting creators and artists.
            <br />
            <br />
            We aim to be the definitive platform holder that delivers  premium
            entertainment experiences worldwide through strategic integration
            across the entire  value chain. 
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
