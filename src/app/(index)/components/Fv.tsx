"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import dynamic from 'next/dynamic';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Splitting from "splitting";
import InfiniteImageGrid from "./InfiniteImageGrid";
import InfiniteImageSlider from "./InfiniteImageSlider";

gsap.registerPlugin(ScrollTrigger);
gsap.config({
  nullTargetWarn: false,
});

type MediaType = "image" | "video";

export interface MediaItemData {
  type: MediaType;
  src: string;
}


const Fv = ({mediaItems} : {mediaItems: MediaItemData[]}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const containerWrapRef = useRef<HTMLDivElement>(null);
  const charScrollRef = useRef<HTMLHeadingElement>(null);

  const [isMobile, setIsMobile] = useState<boolean>(false);
  const debounce = <F extends (...args: any[]) => any>(
    func: F,
    delay: number
  ): ((...args: Parameters<F>) => void) => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    return (...args: Parameters<F>) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };
  const checkDevice = useCallback(
    debounce(() => {
      setIsMobile(window.innerWidth < 768);
    }, 100),
    []
  );
  useEffect(() => {
    checkDevice();
    const resizeObserver = new ResizeObserver(() => {
      checkDevice();
    });
    resizeObserver.observe(document.body);
    return () => {
      resizeObserver.disconnect();
    };
  }, [checkDevice]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      Splitting();
    }

    let st: ScrollTrigger | null = null;

    if (charScrollRef.current) {
      const charScroll = charScrollRef.current.querySelectorAll(".char");

      gsap.set(charScroll, {
        display: "inline-block",
      });
      gsap.set(containerWrapRef.current, {
        opacity: 0,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          id: "fv-scroll-trigger",
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          pin: true,
          pinSpacing: true, 
          scrub: 0.9,
          anticipatePin: 1
        },
      });

      if (tl.scrollTrigger) {
        st = tl.scrollTrigger as ScrollTrigger;
      }

      tl.to(containerWrapRef.current, {
        opacity: 1,
      }).to(
        charScroll,
        {
          stagger: 1,
          duration: 1,
          color: '#000'
        },
        0.1
      );

      ScrollTrigger.refresh();
    }

    return () => {
      if (st) {
        st.kill();
        
      }
      
      ScrollTrigger.getById("fv-scroll-trigger")?.kill();
    };
  }, []);

  return (
    <section className="fv-section">
      <div className="min-h-screen h-screen p-4 overflow-hidden">
          <div
            className="absolute inset-0 h-screen w-full overflow-hidden z-30"
            ref={containerRef}
          >
            <div className="flex flex-col h-full overflow-hidden md:justify-between justify-center relative z-30 bg-[url(/assets/images/svg-deco.svg)] bg-contain bg-no-repeat bg-center">
              <InfiniteImageGrid
                rowNum={5}
                imgNum={28}
                mediaItems={mediaItems}
              />
            </div>
            <div className="w-full absolute h-screen inset-0 pointer-events-none z-40">
              <div
                ref={containerWrapRef}
                className="h-full flex flex-col justify-center items-center"
              >
                <h4
                  ref={charScrollRef}
                  data-splitting
                  className="text-[8vw] text-center leading-[1.8] text-[#F34927] md:text-[64px] font-bold relative z-50 [text-shadow:2px_0_#fff,_-2px_0_#fff,_0_2px_#fff,_0_-2px_#fff,_1px_1px_#fff,_-1px_-1px_#fff,_1px_-1px_#fff,_-1px_1px_#fff]"
                >
                  Unleashing Global <br />
                  Entertainment Value <br />
                  Across Borders 
                </h4>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default Fv;