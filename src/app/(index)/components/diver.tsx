"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactNode, useEffect, useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
gsap.config({
  nullTargetWarn: false,
});

const Diver = () => {
  const ref = useScrollAnimations();
  const containerDiverRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    let ctx = gsap.context(() => {
        
        gsap.set('.word',{
            scaleY: 0
        })
      if (containerDiverRef.current) {
        const items = containerDiverRef.current.querySelectorAll(".word");
        
          gsap.to(
            items,
            {
              scaleY: 1,
              duration: 1,
              ease: "power1.out",
              stagger: 0.1,
              scrollTrigger: {
                trigger: containerDiverRef.current,
                start: "top bottom", 
              },
            }
          );
      }
    });

    return () => ctx.revert();
  });
  return (
    <section ref={ref} className="relative bg-[url('/assets/images/diver-bg.png')] bg-no-repeat pt-[446px] mt-[14px] px-5">
      <div className="w-full max-w-[1400px] mx-auto">
        <h3 className="flex justify-center"><img src="/assets/images/diver-title.png" alt="" /></h3>
        <div className="w-full max-w-[1250px] mx-auto">
            <div ref={containerDiverRef} className="h-[543px] rounded-[60px] bg-[#0B3FAD]/[0.3] overflow-auto">
                <div data-splitting className="md:text-[70px] text-[32px]">
                    Inheriting Bitcoin's philosophy and reliability, surpassing Ethereum's convenience and scalability, challenging the realization of essential Web3.
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Diver;
