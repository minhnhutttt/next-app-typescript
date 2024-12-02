"use client";

import { useCallback, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
import FV from "./components/fv";
import Introduction from "./components/introduction";
import Activation from "./components/activation";
import Contents from "./components/contents";
import Technical from "./components/technical";
import Impact from "./components/impact";
import Future from "./components/future";
import Roadmap from "./components/roadmap";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Home() {
  const [NavOpen, setNavOpen] = useState(false);

  const close = useCallback(() => {
    setNavOpen(false);
  }, []);
  const containerRef = useRef<HTMLDivElement | null>(null);

  function scrollToSection(index: number) {
    const targetPosition = index * window.innerHeight * 1.65;
    gsap.to(window, {
      scrollTo: targetPosition,
      ease: "power3.out",
      onComplete: () => {
        close();
      }
    });
  }
  

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    const panels = gsap.utils.toArray<HTMLElement>(".js-panel");
    if (!panels.length) return;

    const ANIMATION_DURATION = 1.2;
    const PANEL_ANIMATION_DURATION = 0.8;
    const TEXT_ANIMATION_DURATION = 0.8;

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
        const contentWrapper = panel.querySelector(".ani-content");
        const text = panel.querySelector(".ani-text");
        const mix = panel.querySelector(".ani-mix-blend");

        if (contentWrapper) gsap.set(contentWrapper, { y: "20px", autoAlpha: 0 });
        if (text) gsap.set(text, { y: "20px", autoAlpha: 0 });
        if (mix) gsap.set(mix, { y: "-100%", autoAlpha: 0 });
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
        const contentWrapper = panel.querySelector(".ani-content");
        const text = panel.querySelector(".ani-text");
        const mix = panel.querySelector(".ani-mix-blend");

        if (i < index) {
          tl.set(panel, { y: "0%" }, 0);
        } else if (i === index) {
          tl
            .to(panel, { y: "0%", duration: PANEL_ANIMATION_DURATION, ease: "power4.out" }, 0)
            .to(
              contentWrapper,
              { y: "0%", autoAlpha: 1, duration: TEXT_ANIMATION_DURATION, ease: "power3.out" },
              0.4
            )
            .to(
              text,
              { y: "0", autoAlpha: 1, duration: TEXT_ANIMATION_DURATION, ease: "power3.out" },
              "<"
            )
            .to(
              mix,
              { y: "0%", autoAlpha: 1, duration: TEXT_ANIMATION_DURATION, ease: "power3.out" },
              0.4
            );
        } else {
          tl.to(panel, { y: "100%", duration: PANEL_ANIMATION_DURATION, ease: "power4.out" }, 0);
        }
      });

      return tl;
    }

    function setSection(index: number) {
      if (index !== currentIndex) {
        showPanel(index);
        currentIndex = index;
      }
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main ref={containerRef} className="opacity-0">
      <div className="relative h-[100lvh] overflow-hidden">
      <div
        className={`fixed left-0 top-0 h-screen w-full bg-black/90 z-[99] flex items-center justify-center flex-col ${
          NavOpen ? "" : "invisible opacity-0"
        }`}
      >
        <ul className="flex flex-col text-[18px] gap-10 mr-10 mb-10 text-white md:text-[32px]">
          <li>
            <button onClick={() => scrollToSection(1)} className="">
              What is Sake Token?
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection(2)} className="">
            Vision and Objectives of Sake Token
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection(3)} className="">
            Technical Structure of Sake Token
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection(4)} className="">
            Technical Advantages
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection(5)} className="">
            Benefits and Impact of Sake Token
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection(6)} className="">
            Creating the Future of Sake
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection(7)} className="">
            Market Expansion and Roadmap
            </button>
          </li>
        </ul>
      </div>
      <button
        className={`group absolute top-0 right-0 z-[99] size-20 md:size-[100px] flex items-center justify-center  ${
          NavOpen ? "active fixed" : ""
        }`}
        onClick={() => setNavOpen((prev) => !prev)}
      >
        <span className="relative block w-9 md:w-[46px] md:h-8 h-7 drop-shadow-[0_0_16px_rgba(0,0,0,1)]">
          <span className="absolute left-0 top-0 block h-0.5 md:h-[3px] w-full -translate-y-1/2 bg-white transition-transform duration-500 ease-in-out group-[.active]:top-1/2 group-[.active]:rotate-45"></span>
          <span className="absolute md:top-3.5 top-3 left-0 block h-0.5 md:h-[3px] w-full -translate-y-1/2 bg-white transition-transform duration-500 ease-in-out group-[.active]:opacity-0"></span>
          <span className="absolute bottom-0 left-0 block h-0.5 md:h-[3px] w-full -translate-y-1/2 bg-white transition-transform duration-500 ease-in-out group-[.active]:top-1/2 group-[.active]:-rotate-45"></span>
        </span>
      </button>
        <section className="js-panel panel absolute inset-0 h-full">
          <FV />
        </section>
        <section id="introduction" className="js-panel panel absolute inset-0 h-full">
          <Introduction />
        </section>
        <section id="activation" className="js-panel panel absolute inset-0 h-full">
          <Activation />
        </section>
        <section id="content" className="js-panel panel absolute inset-0 h-full">
          <Contents />
        </section>
        <section id="technical" className="js-panel panel absolute inset-0 h-full">
          <Technical />
        </section>
        <section id="impact" className="js-panel panel absolute inset-0 h-full">
          <Impact />
        </section>
        <section id="future" className="js-panel panel absolute inset-0 h-full">
          <Future />
        </section>
        <section id="roadmap" className="js-panel panel absolute inset-0 h-full">
          <Roadmap />
        </section>
      </div>
    </main>
  );
}
