"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
gsap.config({
  nullTargetWarn: false,
})

const GlobalDigitalAgency = () => {
  useEffect(() => {
    const marquiseLeft = document.querySelector(".marquise-left");
    const marquiseRight = document.querySelector(".marquise-right");
    let ctx = gsap.context(() => {
        gsap
        .timeline({
          scrollTrigger: {
            trigger: marquiseLeft,
            start: 'top bottom',
            end: 'bottom top',
            toggleActions: 'play pause reverse pause',
            scrub: true,
          },
        })
        .to(marquiseLeft, {
          xPercent: 10,
          ease: 'linear',
        })
        gsap
        .timeline({
          scrollTrigger: {
            trigger: marquiseRight,
            start: 'top bottom',
            end: 'bottom top',
            toggleActions: 'play pause reverse pause',
            scrub: true,
          },
        })
        .to(marquiseRight, {
          xPercent: -10,
          ease: 'linear',
        })
    });

    return () => ctx.revert();
  }, []);
  return (
    <>
      <section className="mb-[256px] max-md:mb-[82px]">
        <div className="container">
          <div>
            <div className="grid grid-cols-[.6fr_.4fr] items-end max-md:grid-cols-1 gap-[4vw] mb-[4vw]">
              <div>
                <img src="/assets/images/about.jpg" alt="" />
              </div>
              <div className="font-anton text-[calc(24px_+_8vw)] leading-none">
                GLOBAL DIGITAL AGENCY
              </div>
            </div>
            <div className="text-[24px] max-md:text-[16px] mb-[32px] pb-[32px] leading-[1.6] border-b border-solid border-b-[rgba(172,172,172,0.3)]">
              Various companies from various countries request us not only
              because of our cost advantage, but also because of the high level
              of our engineers. This is because Taiwan itself is a country that
              demands a high level of technical skills from its engineers. For
              example, in the development and release of an application, it
              cannot be released unless it clears Taiwan&apos;s security
              standards in addition to the usual screening process. Also, in
              Taiwan, engineers are connected like GitHub, and there is a
              culture of cooperation when there is something that is unclear.
              Our team includes some of the best engineers in the world,
              including a GAFAM graduate and a professor from a university in a
              certain country.
            </div>
            <div className="grid grid-cols-3 max-md:grid-cols-1 gap-[32px]">
              <div>
                <div className="font-anton text-[calc(21px_+_2vw)] uppercase">
                  Scrum
                </div>
                <div className="text-[18px] max-md:text-[16px] leading-[1.6]">
                  Almost all of our work is done in the Scrum approach to Agile
                  development, which means that we work with our clients to
                  develop a project that meets their needs, often with a strong
                  emphasis on the needs of the client. In many cases, this is
                  because of the strong needs of our clients.
                </div>
              </div>
              <div>
                <div className="font-anton text-[calc(21px_+_2vw)] uppercase">
                  security
                </div>
                <div className="text-[18px] max-md:text-[16px] leading-[1.6]">
                  Security is one of the most important aspects of system
                  development. It provides privacy and various other peace of
                  mind.
                </div>
              </div>
              <div>
                <div className="font-anton text-[calc(21px_+_2vw)] uppercase">
                  Marketing
                </div>
                <div className="text-[18px] max-md:text-[16px] leading-[1.6]">
                  Our marketing is specialized in the web. We place importance
                  on uniqueness and not being bound by common and conventional
                  measures.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="scroll">
        <div className="overflow-hidden">
          <div>
            <div className="marquise-right font-anton text-[calc(24px_+_12vw)] whitespace-nowrap stroke leading-none">
              GLOBAL DIGITAL AGENCY GLOBAL DIGITAL AGENCY GLOBAL DIGITAL AGENCY
            </div>
          </div>
        </div>
        <div className="mb-[256px] max-md:mb-[82px] overflow-hidden">
          <div>
            <div className="marquise-left font-anton text-[calc(24px_+_12vw)] whitespace-nowrap stroke leading-none">
              GLOBAL DIGITAL AGENCY GLOBAL DIGITAL AGENCY GLOBAL DIGITAL AGENCY
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GlobalDigitalAgency;
