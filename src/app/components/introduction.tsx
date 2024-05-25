"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";
import { useEffect } from "react";
import gsap from "gsap";


const Introduction = () => {
  useEffect(() => {
    const marquise = document.querySelector(".marquise");
    let ctx = gsap.context(() => {
        gsap
        .timeline({
          scrollTrigger: {
            trigger: marquise,
            start: 'top bottom',
            end: 'bottom top',
            toggleActions: 'play pause reverse pause',
            scrub: true,
          },
        })
        .to(marquise, {
          xPercent: -50,
          ease: 'linear',
        })
    });

    return () => ctx.revert();
  }, []);
  return (
    <section></section>
  );
};

export default Introduction;
