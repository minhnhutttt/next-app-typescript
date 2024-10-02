"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
gsap.config({
  nullTargetWarn: false,
});

const Product = () => {
    const waveRef = useRef<HTMLDivElement | null>(null);
    useLayoutEffect(()=>{
        let ctx = gsap.context(() => {
            if (waveRef.current) {
                gsap.fromTo(
                    waveRef.current,
                  { height: '100%' },
                  {
                    height: '0%',
                    scrollTrigger: {
                      trigger: waveRef.current,
                      start: 'top +=70%',
                      scrub: true,
                    },
                  }
                );
              }
        });
    
        return () => ctx.revert();
    })
  return (
    <section className="relative pb-10">
      <div className="w-full h-[331px] flex items-end">
        <div ref={waveRef} className="w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 1440 331" fill="none" preserveAspectRatio="none">
            <path d="M38.5629 0.00135041C504.65 -0.875764 538.893 246.5 908.5 246.5C1150.39 246.5 1339 193.5 1440 151.5V330.5H949.5H1.13809e-05L0 1.22801C13.115 0.440251 25.9736 0.025039 38.5629 0.00135041Z" fill="url(#paint0_linear_15_38)"/>
            <defs>
                <linearGradient id="paint0_linear_15_38" x1="491.531" y1="416.898" x2="927.863" y2="1128.77" gradientUnits="userSpaceOnUse">
                <stop stop-color="#3371F2"/>
                <stop offset="1" stop-color="#0B3FAD"/>
                </linearGradient>
            </defs>
            </svg>
        </div>
      </div>
      <div className="bg-[url('/assets/images/bg-product.png')] bg-cover h-[1000px]">

      </div>
    </section>
  );
};

export default Product;
