"use client"
"use client";
import React, { useState, useEffect } from 'react';

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

  const topScaleY = 1.5 - ((yPercent / 100) * 1);
  const bottomScaleY = 0.5 + ((yPercent / 100) * 1);


  return (
    <div className="">
      <div
        className="variable-word w-full h-[50vh]"
        style={{ transform: `scaleY(${topScaleY})` }}
      ></div>
      <div
        className="variable-word w-full h-[50vh]"
        style={{ transform: `scaleY(${bottomScaleY})` }}
      ></div>
    </div>
  );
};

export default ScaledDivs;
