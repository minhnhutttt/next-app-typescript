"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
gsap.config({
  nullTargetWarn: false,
});

const data = [
  {
    image: "/assets/images/project-01.png",
    text: "Facilitate financing for important historical discoveries",
  },
  {
    image: "/assets/images/project-02.png",
    text: "Provide a platform that connects explorers and donors directly",
  },
  {
    image: "/assets/images/project-03.png",
    text: "Make the discovery process and results transparent and share them with all participants",
  },
  {
    image: "/assets/images/project-04.png",
    text: " Build a global community through contributions to historical discovery",
  },
];

const Project = () => {

  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray<HTMLElement>(".panel");
      const sliderContainer = sliderRef.current;

      if (sliderContainer) {
        console.log(sliderContainer.offsetWidth);

        gsap.to(panels, {
          x: -sliderContainer.offsetWidth + window.innerWidth,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            scrub: 1,
            start: "center center",
            end: () => "+=" + sliderContainer.offsetWidth / 1.5,
            onUpdate: (self) => {
              const progress = self.progress;
              const activeIndex = Math.round(progress * (panels.length - 1));

              panels.forEach((panel, index) => {
                if (index === activeIndex) {
                  panel.classList.add("active");
                } else {
                  panel.classList.remove("active");
                }
              });
            },
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative">
      <div className="w-full max-w-[1380px] mx-auto pt-7 md:pb-28 pb-16 px-5">
        <h2 data-scroll className="ani-fade-up md:text-[48px] text-[24px] font-bold max-w-[925px] tracking-wide">
          A new form of donation to support historical discoveries: BGT Project
        </h2>
        <p data-scroll className="ani-fade-up max-w-[802px] md:text-[20px] text-[16px] font-medium pt-7 tracking-wide text-gray-600">
          The BGT (BiG Treasure) project empowers individuals worldwide to
          support historical discoveries through blockchain-powered donations,
          enabling faster progress on uncovering lost treasures like the Titanic
          and Musashi, beyond the limits of government-led efforts.
        </p>
      </div>
      <div ref={containerRef} className="overflow-hidden relative pt-12 md:pt-20">
        <h4 data-scroll className="ani-fade-up text-center font-bold md:text-[32px] text-[20px] tracking-wide">
          Project and platform <br className="md:hidden" />vision and mission
        </h4>
        <div className="relative">
          <div className="">
            <div
              ref={sliderRef}
              className="mx-[20.5vw] flex w-[calc(((80vw_*_4)_+_(4vw_*_3))_+_41vw)] gap-[4vw] md:mx-[35vw] md:w-[calc(((420px_*_4)_+_(6.944vw_*_3))_+_80vw)] md:gap-[6.944vw] my-[7rem] h-[55rem] max-h-[calc(100vh-18rem)]"
            >
              {data.map((item, index) => (
                <div
                  className="panel flex w-[80vw] justify-center md:w-[420px] group h-full"
                  key={index}
                >
                  <div className="w-[420px] group-[.active]:translate-y-[-5rem] transition h-full">
                    <figure className="rounded-[30px] overflow-hidden h-full">
                      <img className="h-full w-full object-cover" src={item.image} alt="" />
                    </figure>
                    <p className="md:text-[18px] text-[15px] mt-4 px-3 opacity-0 translate-y-[-5rem] transition group-[.active]:opacity-100 group-[.active]:translate-y-0">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[url('/assets/images/bg-down.png')] bg-[size:100%_auto] w-full aspect-[1440/276] top-full inset-x-0 z-50"></div>
    </section>
  );
};

export default Project;
