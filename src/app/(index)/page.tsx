"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FV from "./components/fv";
import Introduction from "./components/introduction";
import Activation from "./components/activation";
import Contents from "./components/contents";
import Technical from "./components/technical";
import Impact from "./components/impact";
import Future from "./components/future";
import Roadmap from "./components/roadmap";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    const panels = gsap.utils.toArray<HTMLElement>('.js-panel');
    if (!panels.length) return;

    const ANIMATION_DURATION = 1.2;
    const PANEL_ANIMATION_DURATION = 0.8;
    const TEXT_ANIMATION_DURATION = 0.8;

    gsap.defaults({ overwrite: 'auto', duration: ANIMATION_DURATION });

    let currentIndex = 0;
    let currentAnimation: gsap.core.Timeline | null = null;
    gsap.set(containerRef.current, {
      opacity: 1,
    })
    gsap.set(panels.slice(1), { y: '100%' });
    initializeTextElements();
    setupScrollTriggers();

    function initializeTextElements() {
      panels.forEach((panel) => {
        const contentWrapper = panel.querySelector('.ani-content');
        const text = panel.querySelector('.ani-text');
        const mix = panel.querySelector('.ani-mix-blend');
        

        if (contentWrapper) gsap.set(contentWrapper, { y: '20px', autoAlpha: 0 });
        if (text) gsap.set(text, { y: '20px', autoAlpha: 0 });
        if (mix) gsap.set(mix, { y: '-100%', autoAlpha: 0 });
      });
    }

    function setupScrollTriggers() {
      ScrollTrigger.create({
        trigger: containerRef.current,
        pin: true,
        start: 'top top',
        end: () => `+=${panels.length * window.innerHeight * 1.5}`,
        scrub: true,
        snap: {
          snapTo: 1 / (panels.length - 1),
          duration: { min: 0.2, max: 0.3 },
          delay: 0.01,
        },
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
        const contentWrapper = panel.querySelector('.ani-content');
        const text = panel.querySelector('.ani-text');
        const mix = panel.querySelector('.ani-mix-blend');

        if (i < index) {
          tl.set(panel, { y: '0%' }, 0);
        } else if (i === index) {
          tl
            .to(panel, { y: '0%', duration: PANEL_ANIMATION_DURATION, ease: 'power4.out' }, 0)
            .to(
              contentWrapper,
              { y: '0%', autoAlpha: 1, duration: TEXT_ANIMATION_DURATION, ease: 'power3.out' },
              0.4,
            )
            .to(
              text,
              { y: '0',  autoAlpha: 1, duration: TEXT_ANIMATION_DURATION, ease: 'power3.out' },
              '<',
            ).to(
              mix,
              { y: '0%', autoAlpha: 1, duration: TEXT_ANIMATION_DURATION, ease: 'power3.out' },
              0.4,
            );
        } else {
          tl.to(
            panel,
            { y: '100%', duration: PANEL_ANIMATION_DURATION, ease: 'power4.out' },
            0,
          );
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
        <section className="js-panel panel absolute inset-0 h-full">
          <FV />
        </section>
        <section className="js-panel panel absolute inset-0 h-full">
        <Introduction />
        </section>
        <section className="js-panel panel absolute inset-0 h-full">
        <Activation />
        </section>
        <section className="js-panel panel absolute inset-0 h-full">
        <Contents />
        </section>
        <section className="js-panel panel absolute inset-0 h-full">
        <Technical />
        </section>
        <section className="js-panel panel absolute inset-0 h-full">
        <Impact />
        </section>
        <section className="js-panel panel absolute inset-0 h-full">
        <Future />
        </section>
        <section className="js-panel panel absolute inset-0 h-full">
        <Roadmap />
        </section>
      </div>
    </main>
  );
}
