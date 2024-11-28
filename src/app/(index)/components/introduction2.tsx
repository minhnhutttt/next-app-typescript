"use client";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);
const Introduction2 = () => {
    useEffect(() => {
        const panels = gsap.utils.toArray<HTMLElement>('.js-fv-panel');
        if (!panels.length) return;
    
        const ANIMATION_DURATION = 1.2;
        const PANEL_ANIMATION_DURATION = 0.8;
    
        gsap.defaults({ overwrite: 'auto', duration: ANIMATION_DURATION });
    
        let currentIndex = 0;
        let currentAnimation: gsap.core.Timeline | null = null;
    
        gsap.set(panels.slice(1), { y: '100%' });
        setupScrollTriggers();
    
        function setupScrollTriggers() {
          ScrollTrigger.create({
            trigger: '#fv',
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
            console.log(panel.clientHeight)
            if (i < index) {
            } else if (i === index) {
              tl.to(panel, { y: '0%', duration: PANEL_ANIMATION_DURATION, ease: 'power4.out' }, 0)
            } else {
              tl.to(
                panel,
                { y: panel.clientHeight, duration: PANEL_ANIMATION_DURATION, ease: 'power4.out' },
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
    // <section className="relative h-screen bg-[url(/assets/images/intro-bg.png)] bg-cover overflow-hidden">
    //     <h3 className="absolute top-0 left-0">
    //         <img src="/assets/images/kanpai.png" alt="" />
    //     </h3>
    // </section>
    <>
    
  <div id="fv">

    <div className="relative h-[calc(100lvh-50px)] md:h-[100lvh] overflow-hidden">

      <section className="js-fv-panel panel absolute inset-0 h-full font-gothic font-medium">
        <img className="size-full object-cover max-md:h-[calc(100%)]" src="/assets/images/intro-bg.png" alt="" />
      </section>
      <section className="js-fv-panel panel absolute inset-x-0 top-0 font-gothic font-medium overflow-scroll h-[150vh]">
        <div className=" bg-red-100">
        <img className="" src="/assets/images/bg-01.png" alt="" />
        <img className="" src="/assets/images/bg-01.png" alt="" />
        <img className="" src="/assets/images/bg-01.png" alt="" />
        <img className="" src="/assets/images/bg-01.png" alt="" />
        <img className="" src="/assets/images/bg-01.png" alt="" />
        </div>

      </section>
      <section className="js-fv-panel panel absolute inset-0 h-full font-gothic font-medium">
        <img className="size-full object-cover max-md:h-[calc(100%)]" src="/assets/images/intro-bg.png" alt="" />
      </section>
    </div>
  </div>
    </>
  );
};

export default Introduction2;
