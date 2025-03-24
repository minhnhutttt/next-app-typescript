"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Splitting from "splitting";
import InfiniteImageGrid from "./InfiniteImageGrid";

gsap.registerPlugin(ScrollTrigger);
gsap.config({
  nullTargetWarn: false,
});

type MediaType = "image" | "video";

interface MediaItemData {
  type: MediaType;
  src: string;
}

const MEDIA_ITEMS: MediaItemData[] = [
  { type: "image", src: "/assets/images/fv-01.png" },
  { type: "video", src: "/assets/images/fv-02.mp4" },
  { type: "image", src: "/assets/images/fv-03.png" },
  { type: "image", src: "/assets/images/fv-04.png" },
  { type: "video", src: "/assets/images/fv-05.mp4" },
  { type: "image", src: "/assets/images/fv-06.png" },
  { type: "image", src: "/assets/images/fv-07.png" },
  { type: "video", src: "/assets/images/fv-08.mp4" },
  { type: "image", src: "/assets/images/fv-09.png" },
  { type: "image", src: "/assets/images/fv-10.png" },
  { type: "image", src: "/assets/images/fv-11.png" },
  { type: "image", src: "/assets/images/fv-12.png" },
  { type: "image", src: "/assets/images/fv-13.png" },
  { type: "image", src: "/assets/images/fv-14.png" },
  { type: "video", src: "/assets/images/fv-15.mp4" },
  { type: "image", src: "/assets/images/fv-16.png" },
  { type: "image", src: "/assets/images/fv-17.png" },
  { type: "video", src: "/assets/images/fv-18.mp4" },
];


const Fv: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const containerWrapRef = useRef<HTMLDivElement>(null);
  const charScrollRef = useRef<HTMLHeadingElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    Splitting();

    if (charScrollRef.current) {
      const charScroll = charScrollRef.current.querySelectorAll(".char");

      gsap.set(charScroll, {
        display: "inline-block",
        opacity: 0.4,
      });
      gsap.set(containerWrapRef.current, {
        opacity: 0,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          pin: true,
          scrub: 0.9,
        },
      });

      tl.to(containerWrapRef.current, {
        opacity: 1,
      }).to(
        charScroll,
        {
          opacity: 1,
          stagger: 1,
          duration: 1,
        },
        0.1
      );

      return () => {
        if (tl.scrollTrigger) {
          tl.scrollTrigger.kill();
        }
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, []);


  return (
    <main className="min-h-screen h-screen p-4 overflow-hidden bg-black">
      <div className="bg-[url(/assets/images/svg-deco.svg)] bg-no-repeat  bg-center ">
        <div
          className="absolute inset-0 h-screen w-full overflow-hidden"
          ref={containerRef}
        >
          <div className="flex flex-col h-full overflow-hidden md:justify-between justify-center relative z-30">
            <InfiniteImageGrid
              rowNum={10}
              imgNum={28}
              mediaItems={MEDIA_ITEMS}
            />
          </div>
          <div className="w-full absolute h-screen inset-0 md:pointer-events-none z-50">
            <div
              ref={containerWrapRef}
              className="h-full flex flex-col justify-center items-center"
            >
              <h4
                ref={charScrollRef}
                data-splitting
                className="text-[8vw] text-center leading-[1.8] text-white md:text-[64px] font-bold relative z-50"
              >
                Unleashing Global <br />
                Entertainment Value <br />
                Across Borders 
              </h4>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Fv;
