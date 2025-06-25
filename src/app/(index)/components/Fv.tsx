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
    })
    .to(scrollRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
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
        );

      ScrollTrigger.refresh();
    });

    return () => {
      ctx?.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <section ref={containerRef} className="h-screen relative">
      <div className="w-full h-full relative overflow-hidden">
        <span className="absolute inset-0 bg-[url(/assets/images/fv-bg.png)] bg-cover bg-center"></span>
        <span
          ref={backgroundRef}
          className="absolute inset-0 bg-[linear-gradient(0deg,_#012200_0.27%,_#00320D_48.92%,_#05140E_91.13%,_#468768_122.2%)] [box-shadow:0px_4px_4px_0px_#000]"
        ></span>
        <div
          ref={textRef}
          className="relative w-full h-full flex items-center justify-center opacity-0 max-md:py-44 max-md:px-10 scale-75"
        >
          <p>
            <img className="md:hidden max-w-[250px] w-[50vw]" src="/assets/images/fv-text-sp.svg" alt="" />
            <img className="max-md:hidden" src="/assets/images/fv-text.svg" alt="" />
          </p>
        </div>
        <div
          ref={logoRef}
          className="absolute inset-0 flex items-center justify-center opacity-20 px-5"
        >
          <h1 ref={logo2Ref} className="max-xl:w-[66%]">
            <img src="/assets/images/logo2.svg" alt="" />
          </h1>
        </div>
        <div
          ref={letterRef}
          className="absolute inset-0 w-full flex justify-center items-start origin-top"
        >
          <img className="w-full max-md:hidden" src="/assets/images/letter-open.png" alt="" />
          <img className="h-[60vh] md:hidden" src="/assets/images/letter-open-sp.png" alt="" />
        </div>
      </div>
      <div
        ref={scrollRef}
        className="opacity-0 md:-translate-y-10 -translate-y-5 absolute -bottom-9 left-1/2 before:content-[''] before:absolute before:bottom-0 before:-left-1 before:w-[11px] before:h-[11px] before:rounded-[50%] before:bg-white md:before:animate-[circlemove_1.6s_ease-in-out_infinite,_cirlemovehide_1.6s_ease-out_infinite] before:animate-[circlemove-sp_1.6s_ease-in-out_infinite,_cirlemovehide_1.6s_ease-out_infinite] after:absolute after:bottom-0 after:left-0 after:w-[2px] after:h-[100px] md:after:h-[160px] after:bg-white"
        id="type02"
      >
        <a
          className="absolute left-[10px] md:bottom-[87px] bottom-10 text-white text-[12px] md:text-[14px] tracking-[.2em] [writing-mode:vertical-lr] no-underline uppercase"
          href="#"
        >
          Scroll
        </a>
      </div>
    </section>
  );
};

export default Fv;
