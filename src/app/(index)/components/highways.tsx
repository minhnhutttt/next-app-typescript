"use client";

import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useEffect, useLayoutEffect, useRef, useState } from "react";


gsap.registerPlugin(ScrollTrigger)
gsap.config({
  nullTargetWarn: false,
  force3D: true,
})

const Highways = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const sliderRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        let ctx = gsap.context(() => {
          const panels = gsap.utils.toArray<HTMLElement>(".panel");
          const sliderContainer = sliderRef.current;
          const container = containerRef.current;
      
          if (!sliderContainer || !container) return;
      
      
          panels.forEach((panel) => {
            gsap.set(panel, {
                opacity: 0,
                autoAlpha: 1,
                z: '-300vh',
                force3D: true,
            });
          });
      
          const endValue = () => "+=" + sliderContainer.offsetWidth * 5;
      
          gsap.to(panels, {
            z: '100dvh',
            opacity: 1,
            duration: 2,
            force3D: true,
            stagger: 0.3,
            scrollTrigger: {
              trigger: container,
              pin: true,
              scrub: 1,
              start: "top top",
              end: endValue,
            },
          });
        }, containerRef);
      
        return () => ctx.revert();
      }, []);


  return (
    <section ref={containerRef} className="relative px-5 bg-white  pb-[90px] overflow-hidden">
      <div ref={sliderRef} className="w-full relative py-10 pb-[145px] dd">
      <div className="panel absolute w-[21.875vmax] top-[4vmax] left-[1vmax]">
            <img src="/assets/images/hw-01.png" alt="" />
        </div>
        <div className="panel absolute w-[27.778vwvmax] bottom-[4vmax] right-[10vmax]">
            <img src="/assets/images/hw-01.png" alt="" />
        </div>
        <div className="w-full max-w-[900px] mx-auto">
            <div className="flex justify-center px-5">
                <h3 className="md:text-[64px] text-[32px] font-extrabold leading-[1.2]">
                In 2050, our skies will become highways
                </h3>
            </div>
            <p className="md:text-[18px] text-[15px] md:mt-[54px] mt-8">
                Human transportation has always evolved along with the development of civilization. <br />
                <br />
                During the Industrial Revolution at the end of the 18th century, railroads appeared with the invention of the steam engine, making mass transportation between cities possible. At the end of the 19th century, the automobile was born with the invention of the internal combustion engine, and the freedom of individual movement improved dramatically. In the 20th century, with the advent of jet aircraft, intercontinental travel became commonplace.<br />
                <br />
                <br />
                Now, with innovations in electric propulsion systems and advanced autonomous control technology, we are at the threshold of a new mobility revolution with flying vehicles (eVTOL).<br />
                <br />
                By 2050, the world's urban population will increase by 68%, and ground transportation infrastructure will reach serious limits. Every year, traffic congestion causes economic losses of 800 trillion yen in major cities around the world. However, there are still endless possibilities in the sky.<br />
                <br />
                The practical application of electric vertical take-off and landing (eVTOL) flying cars is an innovative solution to this challenge. By 2050, this new mobility market is predicted to grow to a scale of 120 trillion yen.<br />
                <br />
                Another important innovation is needed for this innovative means of transportation to be truly accepted by society. It's a payment innovation.
            </p>
        </div>
        </div>

        <div className="w-full max-w-[1310px] mx-auto">
        <div className="flex justify-center items-center divide-x divide-black">
            <div className="flex justify-end px-6 md:px-[68px]">
                <p className="md:text-[24px] text-[18px] font-bold md:max-w-[267px]">Challenges of the current system</p>
            </div>
            <div className="md:pl-[68px] max-md:px-6 md:w-[57%] py-5">
                <ul className="md:text-[16px leading-[1.6] space-y-3">
                    <li className="flex md:gap-5 gap-3">
                        <span className="font-bold flex-[0_0_12px]">1</span>High fees and delays in international transactions</li>
                    <li className="flex md:gap-5 gap-3">
                        <span className="font-bold flex-[0_0_12px]">2</span>Complexity of linking with reservation system</li>
                    <li className="flex md:gap-5 gap-3">
                        <span className="font-bold flex-[0_0_12px]">3</span>Difficulty in responding to dynamic pricing</li>
                    <li className="flex md:gap-5 gap-3">
                        <span className="font-bold flex-[0_0_12px]">4</span>Complexity of cross-border payments = needing to pay in a currency different from the currency you use on a daily basis</li>
                </ul>
            </div>
            </div>
      </div>
    </section>
  );
};

export default Highways;
