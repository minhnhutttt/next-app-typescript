"use client";

import React, { ReactNode, useEffect, useLayoutEffect, useRef, useState } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.config({
  nullTargetWarn: false,
});

interface TooltipProps {
  text: string;
  children: ReactNode;
  animation?: boolean,
}

const Tooltip = ({ text, children, animation = false }: TooltipProps) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const isMobile = (): boolean => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 768;
    }
    return false;
  };


  const handleClick = () => {
    if (isMobile()) {
      setShowTooltip(true);
    }
  };

  const closeTooltip = () => {
    if (isMobile()) {
      setShowTooltip(false);
    }
  };

  const handleMouseEnter = () => {
    if (!isMobile()) {
      setShowTooltip(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile()) {
      setShowTooltip(false);
    }
  };

  return (
    <span className="cursor-pointer">
      <span
        className="tooltip-text"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        {animation ?
        <>
        <span className="tooltip-chars inline-block overflow-hidden relative">{text}</span>
        <span className="tooltip-ani inline-block overflow-hidden relative">
          <span className="text1">{text}</span>
          <span className="text2">{text}</span>
          <span className="text3">{text}</span>
        </span>
        </>
        :
        <span>{text}</span>
      }
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
