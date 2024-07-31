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
  const { yPercent, xPercent, clientX } = useMousePositionPercentage();
  const [scaleX, setScaleX] = useState(1);
  const spansRef = useRef<HTMLSpanElement[]>([]);
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

  const [spanWidths, setSpanWidths] = useState<number[]>([200, 200, 200, 200, 200, 200, 200]);

  useEffect(() => {
    if (measureRef.current) {
      measureRef.current.style.fontVariationSettings = "'wdth' 200";
    }
  }, []);

  function lerp(start: any, end:any, t:any) {
    return start * (1 - t) + end * t;
  }

  useEffect(() => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const spanElements = containerRef.current.querySelectorAll('.variable-word-letter');

        const newSpanWidths = [...spanWidths];
        var w = 0;

        // Tính toán chiều rộng của từng span
        spanElements.forEach((span, index) => {
          var h = 200;
          var x = 0.5
          if (clientX === 0) {
            h = 200;
            x = 0.5
            console.log(1);
          } else {
            var x = xPercent ? xPercent / 100 : 0.5;
            var u = index / (spanElements.length - 1);
            var l = 1 - Math.abs(u - x);
            l *= l;
            h = 400 * Math.min(1, l) + 10;
            const startValue = 200;
            const n = 0;
            const e = 1;
            const t = Math.min(1 - n, e);
            h = lerp(startValue, h, t);
          }
          newSpanWidths[index] = h;
          setSpanWidths(newSpanWidths);
        });
      
        const widths = getCharacterWidths('ARTISTS');
        const newWidth = widths.reduce((total, width) => total + width, 0);
        setScaleX(containerWidth / newWidth);
      }
  }, [clientX]);

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
    let cumulativeWidth = 0;

    const spanElements = text.split('').map((char, index) => {
      const translateX = cumulativeWidth;
      cumulativeWidth += widths[index];

      return (
        <span
          key={index}
          ref={(el) => el && (spansRef.current[index] = el)}
          data-char={char}
          className="variable-word-letter"
          style={{
            fontVariationSettings: `'wdth' ${spanWidths[index]}`,
            transform: `translate3d(0px, 0px, 0px) scaleY(1) translateX(${translateX}px)`
          }}
        >
          {char}
        </span>
      );
    });
    return spanElements;
  };



  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden" style={{ fontSize: fontSize + 'px', lineHeight: lineHeight + 'px' }}>
      <span ref={measureRef} style={{ visibility: 'hidden', position: 'absolute', whiteSpace: 'nowrap' }}></span>
      <div
        className="variable-word w-full origin-top-left"
        style={{ transform: `translate3d(0px, 0px, 0px) scaleX(${scaleX}) scaleY(${topScaleY})` }}
      >
        {renderCharacters("ARTISTS")}
      </div>
      <div
        ref={divRef}
        className="absolute inset-x-0 top-0 variable-word w-full origin-top-left"
        style={{ transform: `translate3d(0px, ${bottomPx}px, 0px) scaleX(${containerWidth / getTotalWidth("DEPTS")}) scaleY(${bottomScaleY})` }}
      >
        {/* {renderCharacters("DEPTS")} */}
      </div>
    </div>
  );
};

export default ScaledDivs;
