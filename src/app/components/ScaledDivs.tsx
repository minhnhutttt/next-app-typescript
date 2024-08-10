"use client";
import React, { useState, useEffect, useRef, useCallback } from 'react';
const useMousePositionPercentage = (containerRef: React.RefObject<HTMLDivElement>, rotate: boolean) => {
  const [position, setPosition] = useState({ xPercent: 0, yPercent: 0, clientX: 0, clientY: 0, xPercentRotate: 0 });

  useEffect(() => {
    const updateMousePosition = (event: MouseEvent | TouchEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const clientX = event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
        const clientY = event instanceof MouseEvent ? event.clientY : event.touches[0].clientY;
        

        // Calculate the position relative to the container
        let relativeX = clientX - rect.left;
        let relativeY = clientY - rect.top;

        if (rotate) {
          [relativeX, relativeY] = [relativeY, rect.width - relativeX];
        }

        const xPercent = (relativeX / rect.width) * 100;
        const yPercent = (relativeY / rect.height) * 100;
        const xPercentRotate = (relativeX / rect.height) * 100;


        setPosition({ xPercent, yPercent, clientX: relativeX, clientY: relativeY, xPercentRotate });
      }
    };

    const handleMouseMove = (event: MouseEvent) => updateMousePosition(event);
    const handleTouchMove = (event: TouchEvent) => updateMousePosition(event);
    const handleMouseLeave = () => setPosition({ xPercent: 0, yPercent: 0, clientX: 0, clientY: 0, xPercentRotate: 0 });

    containerRef.current?.addEventListener('mousemove', handleMouseMove);
    containerRef.current?.addEventListener('touchmove', handleTouchMove);
    containerRef.current?.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      containerRef.current?.removeEventListener('mousemove', handleMouseMove);
      containerRef.current?.removeEventListener('touchmove', handleTouchMove);
      containerRef.current?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [containerRef, rotate]);

  return position;
};

interface ScaledDivsProps {
  rotate?: boolean;
}

const ScaledDivs: React.FC<ScaledDivsProps> = ({ rotate = false }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { yPercent, xPercent, clientX, xPercentRotate } = useMousePositionPercentage(containerRef, rotate);
  const spansRef = useRef<HTMLSpanElement[]>([]);
  const measureRef = useRef<HTMLSpanElement>(null);

  const totalLines = 1;
  const [scaleX, setScaleX] = useState([1, 1]);

  const containerHeight = containerRef.current?.clientHeight ?? 0;
  const containerWidth = containerRef.current?.clientWidth ?? 0;
  const lineHeight = containerHeight / totalLines;
  const fontSize = lineHeight / 0.77;

  const [spanWidths, setSpanWidths] = useState<number[][]>([[], []]);

  useEffect(() => {
    if (measureRef.current) {
      measureRef.current.style.fontVariationSettings = "'wdth' 200";
    }
  }, []);

  const lerp = (start: number, end: number, t: number) => start * (1 - t) + end * t;

  const getCharacterWidths = useCallback((text: string, widths: number[]) => {
    const charWidths: number[] = [];
    text.split('').forEach((char, index) => {
      if (measureRef.current) {
        measureRef.current.style.fontVariationSettings = `'wdth' ${widths[index]}`;
        measureRef.current.innerText = char;
        if (rotate) {
          charWidths.push(measureRef.current.getBoundingClientRect().height);
        } else {
          charWidths.push(measureRef.current.getBoundingClientRect().width);
        }
      }
    });
    return charWidths;
  }, [rotate]);

  useEffect(() => {
    if (containerRef.current) {
      const updateSpanWidths = (text: string, index: number) => {
        const spanElements = containerRef.current!.querySelectorAll(`.variable-word-${index + 1} .variable-word-letter`);
        const newSpanWidths = Array.from(spanElements).map((_, i) => {
          let width = 200;
          if (clientX !== 0) {
            let x = 0;
            if (rotate) {
              x = xPercentRotate / 100;
            } else {
              x = xPercent / 100;
            }
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

      updateSpanWidths('ROGYX', 0);
    }
  }, [clientX, containerWidth, xPercent, rotate, xPercentRotate, getCharacterWidths]);
  
  const renderCharacters = useCallback((text: string, widths: number[]) => {
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
  }, [getCharacterWidths]);

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full overflow-hidden"
      style={{
        fontSize: `${fontSize}px`,
        lineHeight: `${lineHeight}px`,
      }}
    >
      <span ref={measureRef} style={{ visibility: 'hidden', position: 'absolute', whiteSpace: 'nowrap' }}></span>
      <div
        className="variable-word-1 w-full origin-top-left h-full hover:duration-0 duration-150"
        style={{ transform: `translate3d(0px, 0px, 0px) scaleX(${scaleX[0]}) scaleY(${1})` }}
      >
        {renderCharacters("ROGYX", spanWidths[0])}
      </div>
    </div>
  );
};

export default ScaledDivs;
