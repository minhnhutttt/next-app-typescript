"use client";

import React, { ReactNode, useState } from 'react';

interface TooltipProps {
  text: string;
  tooltipTitle: string;
  children: ReactNode;
}

const Tooltip = ({ text, tooltipTitle, children }: TooltipProps) => {
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
    <span
      className="cursor-pointer"
    >
      <span
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}>{text}</span>
      {showTooltip && (
        <>
          <span className="fixed inset-0 md:hidden z-[99] w-screen h-screen" onClick={closeTooltip}></span>
          <span
            className={`fixed md:absolute bg-[#6A6767]/[0.95] text-white text-sm md:px-[2vw] px-[5vw] md:py-[1vw] py-[5vw] top-1/2 max-md:-translate-x-1/2 left-1/2 -translate-y-1/2 rounded-3xl flex flex-col items-center justify-center md:w-[24vw] w-[75vw] z-50`}
          >
            <span className="block w-full leading-normal text-[calc(1.4vw+1.4svh)] md:text-[calc(0.6vw+0.6svh)] font-bold text-center border-b-2 border-white py-[1vw] mb-[0.5vw]">{tooltipTitle}</span>
            <span className="block text-[calc(1vw+1svh)] md:text-[calc(0.5vw+0.5svh)] p-[0.5vw]">{children}</span>
          </span>
        </>
      )}
    </span>
  );
};

export default Tooltip;
