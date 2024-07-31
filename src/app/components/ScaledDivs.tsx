"use client";
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
  const { yPercent, xPercent, clientX } = useMousePositionPercentage();
  const spansRef = useRef<HTMLSpanElement[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLSpanElement>(null);

  const totalLines = 2;
  const topScaleY = 1.5 - (yPercent / 100);
  const bottomScaleY = 0.5 + (yPercent / 100);
  const [scaleX, setScaleX] = useState([1, 1]);

  const containerHeight = containerRef.current?.clientHeight ?? 0;
  const containerWidth = containerRef.current?.clientWidth ?? 0;
  const lineHeight = containerHeight / totalLines;
  const fontSize = lineHeight / 0.82;

  const [spanWidths, setSpanWidths] = useState<number[][]>([[], []]);

  useEffect(() => {
    if (measureRef.current) {
      measureRef.current.style.fontVariationSettings = "'wdth' 200";
    }
  }, []);

  const lerp = (start: number, end: number, t: number) => start * (1 - t) + end * t;

  useEffect(() => {
    if (containerRef.current) {
      const updateSpanWidths = (text: string, index: number) => {
        const spanElements = containerRef.current!.querySelectorAll(`.variable-word-${index + 1} .variable-word-letter`);
        const newSpanWidths = Array.from(spanElements).map((_, i) => {
          let width = 200;
          if (clientX !== 0) {
            const x = xPercent / 100;
            const u = i / (spanElements.length - 1);
            let l = 1 - Math.abs(u - x);
            l *= l;
            width = lerp(200, 400 * Math.min(1, l) + 10, 1);
          }
          return width;
        });

        setSpanWidths(prev => {
          const updated = [...prev];
          updated[index] = newSpanWidths;
          return updated;
        });

        const widths = getCharacterWidths(text, newSpanWidths);
        const totalWidth = widths.reduce((total, width) => total + width, 0);
        setScaleX(prev => {
          const updated = [...prev];
          updated[index] = containerWidth / totalWidth;
          return updated;
        });
      };

      updateSpanWidths('ARTISTS', 0);
      updateSpanWidths('DEPTS', 1);
    }
  }, [clientX, containerWidth, xPercent]);

  const getCharacterWidths = (text: string, widths: number[]) => {
    const charWidths: number[] = [];
    text.split('').forEach((char, index) => {
      if (measureRef.current) {
        measureRef.current.style.fontVariationSettings = `'wdth' ${widths[index]}`;
        measureRef.current.innerText = char;
        charWidths.push(measureRef.current.getBoundingClientRect().width);
      }
    });
    return charWidths;
  };

  const renderCharacters = (text: string, widths: number[]) => {
    const charWidths = getCharacterWidths(text, widths);
    let cumulativeWidth = 0;

    return text.split('').map((char, index) => {
      const translateX = cumulativeWidth;
      cumulativeWidth += charWidths[index];

      return (
        <span
          key={index}
          ref={(el) => el && (spansRef.current[index] = el)}
          data-char={char}
          className="variable-word-letter"
          style={{
            fontVariationSettings: `'wdth' ${widths[index]}`,
            transform: `translate3d(0px, 0px, 0px) scaleY(1) translateX(${translateX}px)`
          }}
        >
          {char}
        </span>
      );
    });
  };

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden" style={{ fontSize: `${fontSize}px`, lineHeight: `${lineHeight}px` }}>
      <span ref={measureRef} style={{ visibility: 'hidden', position: 'absolute', whiteSpace: 'nowrap' }}></span>
      <div
        className="variable-word-1 w-full origin-top-left"
        style={{ transform: `translate3d(0px, 0px, 0px) scaleX(${scaleX[0]}) scaleY(${topScaleY})` }}
      >
        {renderCharacters("ARTISTS", spanWidths[0])}
      </div>
      <div
        className="absolute inset-x-0 top-0 variable-word-2 w-full origin-top-left"
        style={{ transform: `translate3d(0px, ${containerHeight - (lineHeight * bottomScaleY)}px, 0px) scaleX(${scaleX[1]}) scaleY(${bottomScaleY})` }}
      >
        {renderCharacters("DEPTS", spanWidths[1])}
      </div>
    </div>
  );
};

export default ScaledDivs;
