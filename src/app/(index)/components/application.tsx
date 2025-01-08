"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.config({
  nullTargetWarn: false,
});

const data = [
  {
    image: "/assets/images/application-img-01.jpg",
    title: "Regenerative medicine and tissue repair",
    text: (
      <>
        Exosomes, like stem cells, have the ability to promote tissue
        regeneration and play an important role in repairing damaged tissues and
        organs. In particular, tissue regeneration treatment after myocardial
        infarction or stroke using exosomes has the potential to exceed existing
        treatments. <br />
        <br />
        Regenerative medicine using iPS cells also has the problem of how to
        deliver cultured iPS cells to the affected area.
        <br />
        iPS cells are delivered to the affected area using exosomes. This is one
        of the solutions.
      </>
    ),
  },
  {
    image: "/assets/images/application-img-02.jpg",
    title: "Cancer treatment and immunotherapy",
    text: (
      <>
        Exosomes are a promising method for delivering cancer therapeutics,
        particularly immune checkpoint inhibitors, driving innovation in cancer
        immunotherapy. Shaping exosomes to adhere more easily to cancer cells
        enhances their effectiveness. <br />
        Cancer cells suppress immune cells using specific surface proteins, but
        exosomes alter these proteins, enabling immune cells to aggressively
        attack cancer cells.
      </>
    ),
  },
  {
    image: "/assets/images/application-img-03.jpg",
    title: "Environmental protection and eco technology",
    text: (
      <>
        Exosomes have potential applications in ecosystem restoration and
        pollutant removal. For example, bioremediation technology that uses
        microbial-derived exosomes is expected to contribute to improving soil
        and water quality.
      </>
    ),
  },
];

const Application = () => {
  const ref = useScrollAnimations();
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [active, setActive] = useState(0);

  useLayoutEffect(() => {
    const panels = gsap.utils.toArray<HTMLElement>(".js-panel");
    if (!panels.length) return;

    const ANIMATION_DURATION = 1.2;
    const PANEL_ANIMATION_DURATION = 1;
    const IMAGE_ANIMATION_DURATION = 3;

    gsap.defaults({ overwrite: "auto", duration: ANIMATION_DURATION });

    let currentIndex = 0;

    let currentAnimation: gsap.core.Timeline | null = null;
    gsap.set(containerRef.current, {
      opacity: 1,
    });

    gsap.set(panels.slice(1), { y: "100%" });
    initializeTextElements();
    setupScrollTriggers();

    function initializeTextElements() {
      panels.forEach((panel) => {
        const image = panel.querySelector(".ani-image");

        if (image) gsap.set(image, { scale: 1 });
      });
    }

    function setupScrollTriggers() {
      ScrollTrigger.create({
        trigger: containerRef.current,
        pin: true,
        start: "top top",
        end: () => `+=${panels.length * window.innerHeight * 1.5}`,
        scrub: true,
        onUpdate: (self) => {
          const newIndex = Math.round(self.progress * (panels.length - 1));
          if (newIndex !== currentIndex) {
            setSection(newIndex);
          }
        },
      });
    }

    function showPanel(index: number) {
      if (currentAnimation) {
        currentAnimation.kill();
      }

      const tl = gsap.timeline();
      currentAnimation = tl;

      panels.forEach((panel, i) => {
        const image = panel.querySelector(".ani-image");

        if (i < index) {
          tl.set(panel, { y: "0%" }, 0);
          tl.to(
            image,
            {
              scale: 1,
              duration: IMAGE_ANIMATION_DURATION,
              ease: "power3.out",
            },
            "<"
          );
        } else if (i === index) {
          tl.to(
            panel,
            { y: "0%", duration: PANEL_ANIMATION_DURATION, ease: "power4.out" },
            0
          )
            .to(
              image,
              {
                scale: 1.1,
                duration: IMAGE_ANIMATION_DURATION,
                ease: "power3.out",
              },
              "<"
            )
        } else {
          tl.to(
            panel,
            {
              y: "100%",
              duration: PANEL_ANIMATION_DURATION,
              ease: "power4.out",
            },
            0
          ).to(
            image,
            {
              scale: 1,
              duration: IMAGE_ANIMATION_DURATION,
              ease: "power3.out",
            },
            "<"
          );
        }
      });

      return tl;
    }

    function setSection(index: number) {
      if (index !== currentIndex) {
        showPanel(index);
        setActive(index);
        currentIndex = index;
      }
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={ref} className="relative">
      <div className="min-h-[280px] bg-[url(/assets/images/application-bg.png)] bg-cover flex items-center justify-center p-5">
        <h4 className="fade-up md:text-[64px] text-[32px] font-medium leading-none w-full max-w-[1152px] tracking-widest">
          Application fields and potential of exosome technology
        </h4>
      </div>
      <div ref={containerRef} className="relative w-full">
        <div className="relative h-[100lvh] overflow-hidden">
          <div className="absolute inset-0 flex items-end h-full z-40 w-full">
            <div className="bg-white min-h-[36vh] w-full">
            {data.map((item, index) => (
              <div key={index} className={`max-md:flex-col py-6 md:py-[30px] xl:px-12 px-5 md:gap-20 gap-5 text-[#020C1A] w-full max-w-[1440px] mx-auto ${active == index ? 'flex' : 'hidden'}`}>
                  <h4 className="md:w-[700px] md:text-[48px] text-[24px] font-bold">
                    {item.title}
                  </h4>
                  <p className="md:text-[16px] text-[13px] md:w-[563px]">
                    {item.text}
                  </p>
                </div>
            ))}
            </div>
          </div>
          {data.map((item, index) => (
            <div
              className="group js-panel panel absolute inset-0 h-full bg-white"
              key={index}
            >
              <div className="flex h-[100vh] w-full overflow-hidden flex-col">
                <figure className="flex-1 h-full relative overflow-hidden">
                  <img
                    className="h-full w-full object-cover object-center absolute ani-image"
                    src={item.image}
                    alt=""
                  />
                </figure>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Application;
