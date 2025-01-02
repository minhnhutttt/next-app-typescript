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
        <div ref={sliderRef} className="w-full max-w-[1440px] mx-auto md:px-10 md:pt-[72px] pt-10 relative">
            <div className="panel max-md:hidden z-10 absolute w-[22.56944%] top-[-5%] left-[43.5%]">
                <img className="fade-up w-full max-w-none" src="/assets/images/intro-img-01.png" alt="" />
            </div>
            <div className="panel max-md:hidden z-10 absolute w-[22.22%] top-[38%] left-[1%]">
                <img className="fade-up w-full max-w-none" src="/assets/images/intro-img-02.png" alt="" />
            </div>
            <div className="panel max-md:hidden z-10 absolute w-[24.514%] top-[77%] left-[6%]">
                <img className="fade-up w-full max-w-none" src="/assets/images/intro-img-03.png" alt="" />
            </div>
            <div className="panel max-md:hidden z-10 absolute w-[17.361%] top-[33.5%] left-[80%]">
                <img className="fade-up w-full max-w-none" src="/assets/images/intro-img-04.png" alt="" />
            </div>
            <div className="bg-white md:rounded-[100px] rounded-[60px] md:pt-[160px] pt-20 px-5">
                <div className="md:hidden py-3"><img className="fade-up w-full max-w-none" src="/assets/images/intro-img-01.png" alt="" /></div>
                <div className="md:hidden py-3"><img className="fade-up w-full max-w-none" src="/assets/images/intro-img-02.png" alt="" /></div>
                <h3 className="fade-up text-center xl:text-[96px] md:text-[72px] text-[36px] leading-none relative z-20 max-md:mt-10">
                Let's turn advertising operations into <span className="u-text-gradient font-bold">AI</span>.
                </h3>
                <h3 className="fade-up text-center xl:text-[96px] md:text-[72px] text-[36px] leading-none md:pt-20 pt-12 relative z-20">
                    Let's <br />
                    <span className="u-text-gradient font-bold">REDUCE WASTE</span><br />
                    even more.
                </h3>
                <p className="fade-up md:text-[20px] text-[16px] w-full max-w-[740px] mx-auto md:mt-20 mt-12  relative z-20 max-md:mb-10 [text-shadow:0_0_3px_#fff]">
                By replacing traditional advertising agency tasks with AI agents, fees can be reduced to as low as 3.99%. Eliminating excessive agency fees and the inefficiencies of cross-border payment processes enables cost reduction and faster service delivery.
                </p>
                <div className="md:hidden py-3"><img className="fade-up w-full max-w-none" src="/assets/images/intro-img-03.png" alt="" /></div>
                <div className="md:hidden py-3"><img className="fade-up w-full max-w-none" src="/assets/images/intro-img-04.png" alt="" /></div>
            </div>
        </div>
        </div>
    </section>
  );
};

export default Introduction;
