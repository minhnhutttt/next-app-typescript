"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger)
gsap.config({
  nullTargetWarn: false,
})

const Introduction = () => {
  const ref = useScrollAnimations();

  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
      let ctx = gsap.context(() => {
          const panels = gsap.utils.toArray<HTMLElement>(".panel");
          const sliderContainer = sliderRef.current;
          const container = containerRef.current;
  
          if (!sliderContainer || !container) return;
  
          gsap.from(panels, {
              duration: 1,
              top: '50%',
              left: '50%',
              yPercent: -50,
              xPercent: -50,
              scrollTrigger: {
                  trigger: container,
                  start: "center center",
                  end: 'bottom top'
              },
          });
  
          const handleResize = () => {
              ScrollTrigger.refresh();
          };
  
          window.addEventListener("resize", handleResize);
  
          return () => {
              window.removeEventListener("resize", handleResize);
          };
      }, containerRef);
  
      return () => ctx.revert();
  }, []);

  return (
    <section
    ref={containerRef}
      className="relative bg-[url(/assets/images/intro-bg.png)] bg-[size:auto_100%] bg-right-top bg-no-repeat md:mb-[155px] mb-24"
    >
        <div ref={ref} className="">
        <div ref={sliderRef} className="w-full max-w-[1440px] mx-auto md:px-10 md:pt-[72px] pt-10 relative min-h-screen">
            <div className="panel max-md:hidden z-10 absolute w-[22.56944%] top-[-5%] left-[43.5%] rounded-[20px] overflow-hidden">
            <img className="fade-up w-full max-w-none" src="/assets/images/dummy.png" alt="" />
                
            </div>
            <div className="panel max-md:hidden z-10 absolute w-[22.22%] top-[38%] left-[1%] rounded-[20px] overflow-hidden">
                <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className=""
                >
                <source src="/assets/videos/voice.mp4" type="video/mp4" />
                Your browser does not support the video tag.
        </video>
            </div>
            <div className="panel max-md:hidden z-10 absolute w-[24.514%] top-[77%] left-[6%] rounded-[20px] overflow-hidden">
                <img className="fade-up w-full max-w-none" src="/assets/images/dummy.png" alt="" />
            </div>
            <div className="panel max-md:hidden z-10 absolute w-[17.361%] top-[33.5%] left-[80%] rounded-[20px] overflow-hidden">
                <img className="fade-up w-full max-w-none" src="/assets/images/dummy.png" alt="" />
            </div>
            <div className="bg-white md:rounded-[100px] rounded-[60px] md:pt-[160px] pt-20 px-5">
                <div className="md:hidden py-3"><video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="rounded-[20px] overflow-hidden"
                >
                <source src="/assets/videos/voice.mp4" type="video/mp4" />
                Your browser does not support the video tag.
        </video></div>
                <div className="md:hidden py-3"><img className="fade-up w-full max-w-none rounded-[20px] overflow-hidden" src="/assets/images/dummy.png" alt="" /></div>
                <div className="text-center text-[14vw] md:text-[14vw] xl:text-[235px] py-20">USER VOICE</div>
                <div className="md:hidden py-3"><img className="fade-up w-full max-w-none rounded-[20px] overflow-hidden" src="/assets/images/dummy.png" alt="" /></div>
                <div className="md:hidden py-3"><img className="fade-up w-full max-w-none rounded-[20px] overflow-hidden" src="/assets/images/dummy.png" alt="" /></div>
            </div>
        </div>
        </div>
    </section>
  );
};

export default Introduction;
