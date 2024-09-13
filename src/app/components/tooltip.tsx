"use client";

import React, { ReactNode, useRef, useState } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.config({
  nullTargetWarn: false,
});

interface TooltipProps {
  text: string;
  children: ReactNode;
}

const Tooltip = ({ text, children }: TooltipProps) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipRef = useRef<HTMLSpanElement>(null);

  const isMobile = (): boolean => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 768;
    }
    return false;
  };

  const animateChars = () => {
    const tl = gsap.timeline({ repeat: -1 });
    if (tooltipRef.current) { 
      gsap.set(tooltipRef.current.querySelectorAll('.char'), {
        display: 'inline-block',
      });
      tl.to(tooltipRef.current.querySelectorAll('.char'), {
        yPercent: 100,
        stagger: 0.03,
        duration: 0.2,
      });
      tl.to(tooltipRef.current.querySelectorAll('.char'), {
        yPercent: 0,
        stagger: 0.03,
        duration: 0.2,
      });

      (tooltipRef.current as any).timeline = tl;
    }
  };

  const stopAnimation = () => {
    if (tooltipRef.current && (tooltipRef.current as any).timeline) {
      (tooltipRef.current as any).timeline.restart().kill();
    }
  };

  const handleClick = () => {
    if (isMobile()) {
      setShowTooltip(true);
      animateChars();
    }
  };

  const closeTooltip = () => {
    if (isMobile()) {
      setShowTooltip(false);
      stopAnimation();
    }
  };

  const handleMouseEnter = () => {
    if (!isMobile()) {
      setShowTooltip(true);
      animateChars();
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile()) {
      setShowTooltip(false);
      stopAnimation();
    }
  };

  return (
    <span className="cursor-pointer">
      <span
        ref={tooltipRef}
        className="tooltip-text"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        {text}
      </span>
      {showTooltip && (
        <>
          <span className="fixed inset-0 md:hidden z-[99] w-screen h-screen" onClick={closeTooltip}></span>
          <span
            className={`fixed md:absolute bg-[#6A6767]/[0.95] text-white text-sm md:px-[2vw] px-[5vw] md:py-[1vw] py-[5vw] top-1/2 max-md:-translate-x-1/2 left-1/2 -translate-y-1/2 rounded-3xl flex flex-col items-center justify-center md:w-[24vw] w-[75vw] z-50`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span className="block w-full leading-normal text-[calc(1.4vw+1.4svh)] md:text-[calc(0.6vw+0.6svh)] font-bold text-center border-b-2 border-white py-[1vw] mb-[0.5vw]">
              {text}
            </span>
            <span className="block text-[calc(1vw+1svh)] md:text-[calc(0.5vw+0.5svh)] p-[0.5vw]">{children}</span>
          </span>
        </>
      )}
    </span>
  );
};

export default Tooltip;
