"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";
const Hero = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    let ctx = gsap.context(() => {
      if (containerRef.current) {
        const tl = gsap.timeline({ repeat: -1, ease: "ease-in-out" });
        let duration = 1;
        let delay = 3;
        const f1_img = containerRef.current.querySelector(".f1-img");
        const f2_img = containerRef.current.querySelector(".f2-img");

        tl.to(f1_img, {
          rotateY: "+=180",
          opacity: 0,
          duration: duration,
          delay: delay,
        }).to(
          f2_img,
          {
            rotateY: "+=180",
            opacity: 1,
            duration: duration,
          },
          "<"
        ).to(f1_img, {
            rotateY: "+=180",
            opacity: 1,
            duration: duration,
            delay: delay,
          }).to(
            f2_img,
            {
              rotateY: "+=180",
              opacity: 0,
              duration: duration,
            },
            "<"
          );
      }
    });

    return () => ctx.revert();
  });
  return (
    <div className="relative h-[600px] md:h-[749px] w-full">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute w-full h-full object-cover opacity-40"
      >
        <source src="/assets/videos/fv.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        ref={containerRef}
        className="w-full h-full flex justify-center items-end"
      >
        <div className="relative">
          <span className="animate-[anim-bounce_1.6s_infinite_ease-in-out] absolute right-[-80px] z-40">
            <img src="/assets/images/hero-bubble.png" alt="" />
          </span>
          <div className="relative">
            <p className="f1-img relative z-10">
              <img src="/assets/images/hero-01.png" alt="" />
            </p>
            <p className="f2-img absolute inset-0">
              <img src="/assets/images/hero-02.png" alt="" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
