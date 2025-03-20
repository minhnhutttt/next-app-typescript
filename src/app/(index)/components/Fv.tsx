"use client";

import { useEffect, useRef, useMemo, useState } from "react";
import useScrollAnimations from "@/hooks/useScrollAnimations";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Splitting from "splitting";

gsap.registerPlugin(ScrollTrigger);
gsap.config({
  nullTargetWarn: false,
});

type MediaType = "image" | "video";

interface MediaItemData {
  type: MediaType;
  src: string;
}

interface MediaItemProps {
  item: MediaItemData;
  index: number;
}

interface MarqueeProps {
  items: MediaItemData[];
  className: string;
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
];

const MEDIA_ITEMS02: MediaItemData[] = [
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
];

const MEDIA_ITEMS03: MediaItemData[] = [
  { type: "image", src: "/assets/images/fv-13.mp4" },
  { type: "image", src: "/assets/images/fv-14.png" },
  { type: "video", src: "/assets/images/fv-15.mp4" },
  { type: "image", src: "/assets/images/fv-16.png" },
  { type: "image", src: "/assets/images/fv-17.png" },
  { type: "video", src: "/assets/images/fv-18.mp4" },
  { type: "image", src: "/assets/images/fv-01.png" },
  { type: "video", src: "/assets/images/fv-02.mp4" },
  { type: "image", src: "/assets/images/fv-03.png" },
  { type: "image", src: "/assets/images/fv-04.png" },
];

const MediaItem: React.FC<MediaItemProps> = ({ item, index }) => {
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = itemRef.current;
    if (!element) return;

    const speedFactor = 0.03 + Math.random() * 0.07;
    const depthFactor = 15 + Math.random() * 15;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      const mouseXRelativeToCenterPercent = (clientX / windowWidth - 0.5) * 2;
      const mouseYRelativeToCenterPercent = (clientY / windowHeight - 0.5) * 2;

      const moveX = -mouseXRelativeToCenterPercent * depthFactor;
      const moveY = -mouseYRelativeToCenterPercent * depthFactor;

      gsap.to(element, {
        x: moveX,
        y: moveY,
        scale: 1 + speedFactor * Math.abs(mouseXRelativeToCenterPercent),
        duration: 0.8,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [index]);

  return (
    <div
      ref={itemRef}
      className="flex-none transition-transform will-change-transform"
      style={{ transformStyle: "preserve-3d" }}
    >
      <span className="overflow-hidden flex items-center justify-center relative md:size-[160px] size-[20vw] rounded-[20px] shadow-lg">
        {item.type === "image" ? (
          <img
            src={item.src}
            alt=""
            className="object-contain flex-none md:min-w-[10em] max-w-none h-full md:max-h-[25em] max-h-[25vh] duration-150"
            loading="lazy"
          />
        ) : (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="object-contain flex-none md:min-w-[10em] max-w-none h-full md:max-h-[25em] max-h-[25vh] duration-150"
          >
            <source src={item.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </span>
    </div>
  );
};

const Marquee: React.FC<MarqueeProps> = ({ items, className }) => {
  const itemElements = useMemo(
    () =>
      items.map((item, index) => (
        <MediaItem key={`${item.src}-${index}`} item={item} index={index} />
      )),
    [items]
  );

  return (
    <div
      className={`flex gap-[1em] md:gap-[130px] items-center justify-center marquise-right ${className}`}
      style={{ perspective: "1000px" }}
    >
      {itemElements}
    </div>
  );
};

const Fv: React.FC = () => {
  const scrollAnimationsRef = useScrollAnimations();
  const containerRef = useRef<HTMLDivElement>(null);
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

    const marqueeConfigs = [
      { selector: ".marquise-right-1", xPercent: -40 },
      { selector: ".marquise-right-2", xPercent: -25 },
      { selector: ".marquise-right-3", xPercent: -35 },
    ];

    const createMarqueeAnimation = (
      selector: string,
      xPercentValue: number
    ): void => {
      const elements = document.querySelectorAll(selector);

      elements.forEach((element) => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: scrollAnimationsRef.current,
              start: "top bottom",
              end: "bottom top",
              toggleActions: "play pause reverse pause",
              scrub: true,
            },
          })
          .to(element, {
            xPercent: xPercentValue,
            duration: 1,
            ease: "linear",
          });
      });
    };

    marqueeConfigs.forEach((config) => {
      createMarqueeAnimation(config.selector, config.xPercent);
    });

    if (charScrollRef.current) {
      const charScroll = charScrollRef.current.querySelectorAll(".char");

      gsap.set(charScroll, {
        display: "inline-block",
        opacity: 0.4,
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

      tl.to(
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

  const getTextParallaxStyle = () => {
    const moveX = (mousePosition.x / window.innerWidth - 0.5) * -20;
    const moveY = (mousePosition.y / window.innerHeight - 0.5) * -10;

    return {
      transform: `translate3d(${moveX}px, ${moveY}px, 0)`,
      transition: "transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)",
    };
  };

  return (
    <main className="min-h-screen h-[200vh]  p-4 overflow-hidden bg-black">
      <div
        ref={scrollAnimationsRef}
        className="flex flex-col overflow-hidden md:justify-between justify-center bg-[url(/assets/images/svg-deco.svg)] bg-no-repeat inset-0 h-[200vh] bg-center py-[10vw] max-md:gap-[30vw] md:py-[130px]"
      >
        <Marquee items={MEDIA_ITEMS} className="marquise-right-1 mr-[-45%]" />

        <Marquee
          items={MEDIA_ITEMS02}
          className="marquise-right-2 mr-[-25%] "
        />

        <Marquee
          items={MEDIA_ITEMS03}
          className="marquise-right-3 mr-[-35%] "
        />
        <Marquee items={MEDIA_ITEMS} className="marquise-right-1 mr-[-45%]" />

        <Marquee
          items={MEDIA_ITEMS02}
          className="marquise-right-2 mr-[-25%] "
        />

        <Marquee
          items={MEDIA_ITEMS03}
          className="marquise-right-3 mr-[-35%] "
        />
      </div>
      <div className="absolute inset-0 h-screen w-full overflow-hidden" ref={containerRef}>
        <div className="w-full absolute h-screen inset-0">
          <div
            className="h-full flex flex-col justify-center items-center"
            style={getTextParallaxStyle()}
          >
            <h4
              ref={charScrollRef}
              data-splitting
              className="text-[8vw] text-center leading-[1.8] text-white md:text-[64px] font-bold"
            >
              Unleashing Global <br />
              Entertainment Value <br />
              Across Borders 
            </h4>
          </div>
        </div>{" "}
      </div>
    </main>
  );
};

export default Fv;
