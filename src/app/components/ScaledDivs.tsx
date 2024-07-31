"use client"
import React, { useState, useEffect, useRef } from 'react';

const useMousePositionPercentage = () => {
  const [position, setPosition] = useState({ xPercent: 0, yPercent: 0, clientX: 0 });

  useEffect(() => {
    const updateMousePosition = (event: MouseEvent) => {
      const xPercent = (event.clientX / window.innerWidth) * 100;
      const yPercent = (event.clientY / window.innerHeight) * 100;
      setPosition({ xPercent, yPercent, clientX: event.clientX });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return position;
};

const ScaledDivs = () => {
  const { yPercent, clientX } = useMousePositionPercentage();
  const containerRef = useRef<HTMLDivElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLSpanElement>(null);

  const totalLines = 2;
  const topScaleY = 1.5 - ((yPercent / 100) * 1);
  const bottomScaleY = 0.5 + ((yPercent / 100) * 1);

  const containerHeight = containerRef.current?.clientHeight ?? 0;
  const containerWidth = containerRef.current?.clientWidth ?? 0;
  const divHeight = divRef.current?.clientHeight ?? 0;
  const bottomPx = (containerHeight - (divHeight * bottomScaleY));

  const lineHeight = containerHeight / totalLines;
  const fontSize = lineHeight * (1 / 0.82);

  useEffect(() => {
    if (measureRef.current) {
      measureRef.current.style.fontVariationSettings = "'wdth' 200";
    }
  }, []);

  const getCharacterWidths = (text: string) => {
    const widths: number[] = [];
    if (measureRef.current) {
      for (const char of text) {
        measureRef.current.innerText = char;
        const charWidth = measureRef.current.getBoundingClientRect().width;
        widths.push(charWidth);
      }
    }
    return widths;
  };

  const getTotalWidth = (text: string) => {
    const widths = getCharacterWidths(text);
    return widths.reduce((total, width) => total + width, 0);
  };

  const renderCharacters = (text: string) => {
    const widths = getCharacterWidths(text);
    let cumulativeWidth = 200;

    return text.split('').map((char, index) => {
      const translateX = cumulativeWidth;
      cumulativeWidth += widths[index];

      const charCenterX = translateX + (widths[index] / 2);
      const distance = Math.abs(clientX - charCenterX);
      const maxDistance = containerWidth / 2;
      const variationValue = Math.max(10, 400 - (distance / maxDistance) * 390);

      return (
        <span
          key={index}
          data-char={char}
          className="variable-word-letter"
          style={{
            fontVariationSettings: `'wdth' ${variationValue}`,
            transform: `translate3d(0px, 0px, 0px) scaleY(1) translateX(${translateX}px)`
          }}
        >
          {char}
        </span>
      );
    });
  };

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden" style={{ fontSize: fontSize + 'px', lineHeight: lineHeight + 'px' }}>
      <span ref={measureRef} style={{ visibility: 'hidden', position: 'absolute', whiteSpace: 'nowrap' }}></span>
      <div
        className="variable-word w-full origin-top-left"
        style={{ transform: `translate3d(0px, 0px, 0px) scaleX(${containerWidth / getTotalWidth("ART")}) scaleY(${topScaleY})` }}
      >
        {renderCharacters("ART")}
      </div>
      <div
        ref={divRef}
        className="absolute inset-x-0 top-0 variable-word w-full origin-top-left"
        style={{ transform: `translate3d(0px, ${bottomPx}px, 0px) scaleX(${containerWidth / getTotalWidth("DEPTS")}) scaleY(${bottomScaleY})` }}
      >
        {renderCharacters("DEPTS")}
      </div>
    </div>
  );
};

export default ScaledDivs;
