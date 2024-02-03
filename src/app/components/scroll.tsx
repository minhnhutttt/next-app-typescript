"use client"
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Scroll() {
    useEffect(() => {
        // Chờ cho DOM load xong
        gsap.delayedCall(1, () => {
          let sections = gsap.utils.toArray(".panel");
    
          const container = document.querySelector(".container") as HTMLElement | null;
    
          if (container) {
          console.log(container.offsetWidth)

            gsap.to(sections, {
              xPercent: -100 * (sections.length - 1),
              ease: "none",
              scrollTrigger: {
                trigger: container,
                pin: true,
                scrub: 1,
                snap: 1 / (sections.length - 1),
                end: () => "+=" + container.offsetWidth,
              },
            });
          }
        });
      }, []);

  return (
    <>
    <div className="firstContainer">
    <h1>Testing horizontal scrolling w/ three sections</h1>
    <h2>First Container</h2>
    </div>
    <div className="container">
    <div className="description panel blue">
        <div>
        SCROLL DOWN
        <div className="scroll-down"><div className="arrow"></div></div>
        </div>
    </div>

    <section className="panel red">
        ONE
    </section>
    <section className="panel orange">
        TWO
    </section>
    <section className="panel purple">
        THREE
    </section>
    </div>
    <div className="lastContainer">
    Last Container
    </div>
    </>
  );
};
