"use client"
import React, { useState, useEffect, useRef } from 'react';

const useMousePositionPercentage = () => {
  const [position, setPosition] = useState({ xPercent: 0, yPercent: 0 });

  useEffect(() => {
    const updateMousePosition = (event: MouseEvent) => {
      const xPercent = (event.clientX / window.innerWidth) * 100;
      const yPercent = (event.clientY / window.innerHeight) * 100;
      setPosition({ xPercent, yPercent });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return position;
};

const ScaledDivs = () => {
  const { yPercent } = useMousePositionPercentage();
  const containerRef = useRef<HTMLDivElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  const topScaleY = 1.5 - ((yPercent / 100) * 1);
  const bottomScaleY = 0.5 + ((yPercent / 100) * 1);

  
  const containerHeight = containerRef.current?.clientHeight ?? 0;
  const divHeight = divRef.current?.clientHeight ?? 0;

  const bottomPx = (containerHeight - (divHeight * bottomScaleY));

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden">
      <div
        className="variable-word w-full h-[50vh] origin-top-left"
        style={{ transform: `translate3d(0px, 0px, 0px) scaleY(${topScaleY})` }}
      >

      </div>
      <div
        ref={divRef}
        className="absolute inset-x-0 top-0 variable-word w-full h-[50vh] origin-top-left"
        style={{ transform: `translate3d(0px, ${bottomPx}px, 0px) scaleY(${bottomScaleY})` }}
      >
        
      </div>
    </div>
  );
};

export default ScaledDivs;
