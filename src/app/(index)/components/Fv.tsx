"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.config({
  nullTargetWarn: false,
});

const Fv = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const logo2Ref = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const letterRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({});
    tl.to(letterRef.current, {
      yPercent: -10,
      rotateX: 90,
      duration: 1.5,
      ease: "expo.in",
    }).to(logoRef.current, {
      opacity: 1,
      duration: 0.3,
      ease: "power1.inOut",
    });

    let ctx: gsap.Context | null = null;
    ctx = gsap.context(() => {
      const tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=4000",
            scrub: 0.9,
            pin: true,
          },
        })
        .to(logo2Ref.current, {
          opacity: 0,
          duration: 0.5,
          ease: "power1.inOut",
        })
        .to(textRef.current, {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power1.inOut",
        })
        .to(
          backgroundRef.current,
          {
            opacity: 0,
            duration: 1,
            ease: "power1.inOut",
          },
          "<"
        )
        .to(scrollRef.current, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power1.inOut",
        });

      ScrollTrigger.refresh();
    });

    return () => {
      ctx?.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <section ref={containerRef} className="h-screen relative">
      <div className="absolute inset-0">
        <img className="w-full h-full object-cover object-center" src="/assets/images/fv-img.webp" alt="" />
      </div>
    </section>
  );
};

export default Fv;
