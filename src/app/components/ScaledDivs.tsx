"use client";
import React, { useState, useEffect, useRef, useCallback, useLayoutEffect } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.config({
  nullTargetWarn: false,
});
const useMousePositionPercentage = (
  containerRef: React.RefObject<HTMLDivElement>,
  rotate: boolean
) => {
  const [position, setPosition] = useState({
    xPercent: 0,
    yPercent: 0,
    clientX: 0,
    clientY: 0,
    xPercentRotate: 0,
  });

  const resetPosition = () => {
    setPosition({
      xPercent: 0,
      yPercent: 0,
      clientX: 0,
      clientY: 0,
      xPercentRotate: 0,
    });
  };

  useEffect(() => {
    const updateMousePosition = (event: MouseEvent | TouchEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const clientX =
          event instanceof MouseEvent
            ? event.clientX
            : event.touches[0].clientX;
        const clientY =
          event instanceof MouseEvent
            ? event.clientY
            : event.touches[0].clientY;

        // Calculate the position relative to the container
        let relativeX = clientX - rect.left;
        let relativeY = clientY - rect.top;

        if (rotate) {
          [relativeX, relativeY] = [relativeY, rect.width - relativeX];
        }

        const xPercent = (relativeX / rect.width) * 100;
        const yPercent = (relativeY / rect.height) * 100;
        const xPercentRotate = (relativeX / rect.height) * 100;

        setPosition({
          xPercent,
          yPercent,
          clientX: relativeX,
          clientY: relativeY,
          xPercentRotate,
        });
      }
    };

    const handleMouseMove = (event: MouseEvent) => updateMousePosition(event);
    const handleTouchMove = (event: TouchEvent) => updateMousePosition(event);
    const handleMouseLeave = () =>
      setPosition({
        xPercent: 0,
        yPercent: 0,
        clientX: 0,
        clientY: 0,
        xPercentRotate: 0,
      });
    const handleTouchLeave = () => {
      setPosition({
        xPercent: 0,
        yPercent: 0,
        clientX: 0,
        clientY: 0,
        xPercentRotate: 0,
      });
    };

    containerRef.current?.addEventListener("mousemove", handleMouseMove);
    containerRef.current?.addEventListener("touchmove", handleTouchMove);
    containerRef.current?.addEventListener("mouseleave", handleMouseLeave);
    containerRef.current?.addEventListener("touchend", handleTouchLeave);
    containerRef.current?.addEventListener("touchcancel", handleTouchLeave);

    return () => {
      containerRef.current?.removeEventListener("mousemove", handleMouseMove);
      containerRef.current?.removeEventListener("touchmove", handleTouchMove);
      containerRef.current?.removeEventListener("mouseleave", handleMouseLeave);
      containerRef.current?.removeEventListener("touchend", handleTouchLeave);
      containerRef.current?.removeEventListener("touchcancel", handleTouchLeave);
    };
  }, [containerRef, rotate]);

  return { position, resetPosition };
};


interface ScaledDivsProps {
  rotate?: boolean;
}

const ScaledDivs: React.FC<ScaledDivsProps> = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const containerRotateRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState(false);
  const { position, resetPosition } = useMousePositionPercentage(containerRef, rotate);
  const spansRef = useRef<HTMLSpanElement[]>([]);
  const measureRef = useRef<HTMLSpanElement>(null);
  const measureRotateRef = useRef<HTMLSpanElement>(null);

  const totalLines = 1;
  const [scaleX, setScaleX] = useState([1, 1]);

  const containerHeight = containerRef.current?.clientHeight ?? 0;
  const containerWidth = containerRef.current?.clientWidth ?? 0;
  const lineHeight = containerHeight / totalLines;
  const fontSize = lineHeight / 0.77;

  const containerRotetaHeight = containerRotateRef.current?.clientHeight ?? 0;
  const containerRotateWidth = containerRotateRef.current?.clientWidth ?? 0;
  const lineHeightRoteta = containerRotetaHeight / totalLines;
  const fontSizeRoteta = lineHeightRoteta / 0.77;
  const [rotating, setRotating] = useState<boolean>(false)

  const [spanWidths, setSpanWidths] = useState<number[][]>([[], []]);

  const divRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Bạn có thể thêm các animation khác tại đây nếu cần.
    });

    return () => ctx.revert();
  }, []);

  const handleClick = () => {

    gsap.to(divRef.current, {
      width: "100vh",
      height: "30vw",
      rotate: -270,
      onStart: () => {
        setRotating(true);
      },
      onComplete: () => {
        setRotate(true);
        setRotating(false);
        resetPosition();
      },
    });

  };

  useEffect(() => {
    if (measureRef.current) {
      measureRef.current.style.fontVariationSettings = "'wdth' 200";
    }
    if (measureRotateRef.current) {
      measureRotateRef.current.style.fontVariationSettings = "'wdth' 200";
    }
  }, []);

  const lerp = (start: number, end: number, t: number) => start * (1 - t) + end * t;

  const getCharacterWidths = useCallback((text: string, widths: number[]) => {
    const charWidths: number[] = [];
    text.split('').forEach((char, index) => {
      if (measureRef.current) {
        measureRef.current.style.fontVariationSettings = `'wdth' ${rotating ? 200 : widths[index]}`;
        measureRef.current.innerText = char;
        if (rotate) {
          charWidths.push(measureRef.current.getBoundingClientRect().height);
        } else {
          charWidths.push(measureRef.current.getBoundingClientRect().width);
        }
      }
    });
    return charWidths;
  }, [rotate, rotating]);

  const getCharacterWidthsRotate = useCallback((text: string) => {
    const charWidths: number[] = [];
    text.split('').forEach((char) => {
      if (measureRotateRef.current) {
        measureRotateRef.current.style.fontVariationSettings = `'wdth' 200}`;
        measureRotateRef.current.innerText = char;
          charWidths.push(measureRotateRef.current.getBoundingClientRect().height);
      }
    });
    return charWidths;
  }, []);

  useEffect(() => {
    if (containerRef.current) {

      const updateSpanWidths = (text: string, index: number) => {
        const spanElements = containerRef.current!.querySelectorAll(`.variable-word-${index + 1} .variable-word-letter`);
        const newSpanWidths = Array.from(spanElements).map((_, i) => {
          let width = 200;
          if (!rotating) {
            if (position.clientX !== 0) {
              let x = 0;
              if (rotate) {
                x = position.xPercentRotate / 100;
              } else {
                x = position.xPercent / 100;
              }
              const u = i / (spanElements.length - 1);
              let l = 1 - Math.abs(u - x);
              l *= l;
              width = lerp(200, 400 * Math.min(1, l) + 10, 1);
            }
          }

          return width;
        });

        setSpanWidths(prev => {
          const updated = [...prev];
          updated[index] = newSpanWidths;
          return updated;
        });

        let widths: number[] = [];
        if (!rotating) {
          widths = getCharacterWidths(text, newSpanWidths);
          const totalWidth = widths.reduce((total, width) => total + width, 0);

        setScaleX(prev => {
          const updated = [...prev];
          updated[index] = containerWidth / totalWidth;

          return updated;
        });
        } else {
          widths = getCharacterWidthsRotate('ROGYX'); 
          const totalWidth = widths.reduce((total, width) => total + width, 0);

        setScaleX(prev => {
          const updated = [...prev];
          updated[index] = containerRotateWidth / totalWidth;

          return updated;
        });
        }
      };
      updateSpanWidths('ROGYX', 0);
    }
  }, [position.clientX, containerWidth, position.xPercent, rotate, position.xPercentRotate, getCharacterWidths, rotating, containerRotateWidth, getCharacterWidthsRotate]);

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
    <div className="relative flex items-center justify-start h-screen overflow-hidden">
      <div ref={divRef} className="absolute w-full h-screen origin-[15vw] top-[0vw]" onClick={handleClick}>
      <div
        ref={containerRef}
        className="relative h-full w-full overflow-hidden"
        style={{
          fontSize: `${rotating ? fontSizeRoteta : fontSize}px`,
          lineHeight: `${rotating ? lineHeightRoteta : lineHeight}px`,
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
      </div>
      <div
        ref={containerRotateRef}
        className="h-[30vw] w-[100vh] top-0 rotate-[-270deg] overflow-hidden absolute opacity-0 -z-10"
        style={{
          fontSize: `${fontSizeRoteta}px`,
          lineHeight: `${lineHeightRoteta}px`,
        }}
      >
        <span ref={measureRotateRef} style={{ visibility: 'hidden', position: 'absolute', whiteSpace: 'nowrap' }}></span>
      </div>
    </div>
  );
};

export default ScaledDivs;
