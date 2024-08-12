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

const isMobile = (): boolean => {
  if (typeof window !== "undefined") {
    return window.innerWidth < 768;
  }
  return false;
};
interface ScaledDivsProps {
  rotate?: boolean;
}

const ScaledDivs: React.FC<ScaledDivsProps> = () => {
  const [isMobileView, setIsMobileView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const containerRotateRef = useRef<HTMLDivElement>(null);
  const containerHoriRef = useRef<HTMLDivElement>(null);
  
  const [rotate, setRotate] = useState(false);
  const { position, resetPosition } = useMousePositionPercentage(containerRef, rotate);
  const spansRef = useRef<HTMLSpanElement[]>([]);
  const measureRef = useRef<HTMLSpanElement>(null);
  const measureRotateRef = useRef<HTMLSpanElement>(null);
  const measureHoriRef = useRef<HTMLSpanElement>(null);

  const totalLines = 1;
  const [scaleX, setScaleX] = useState([1]);
  const [containerHeight, setContainerHeight] = useState<number>(0);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [containerRotateHeight, setContainerRotateHeight] = useState<number>(0);
  const [containerRotateWidth, setContainerRotateWidth] = useState<number>(0);
  const [containerHoriHeight, setContainerHoriHeight] = useState<number>(0);
  const [containerHoriWidth, setContainerHoriWidth] = useState<number>(0);

  const lineHeight = containerHeight / totalLines;
  const fontSize = lineHeight / 0.77;

  const containerRotateHeightBase = containerRotateRef.current?.clientHeight ?? 0;
  const lineHeightRoteta = containerRotateHeightBase / totalLines;
  const fontSizeRoteta = lineHeightRoteta / 0.77;


  const containerHoriHeightBase = containerHoriRef.current?.clientHeight ?? 0;
  const lineHeightHori = containerHoriHeightBase / totalLines;
  const fontSizeHori = lineHeightHori / 0.77;
  const [rotating, setRotating] = useState<boolean>(false)

  const [spanWidths, setSpanWidths] = useState<number[][]>([[]]);

  const divRef = useRef(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      
    });

    return () => ctx.revert();
  }, []);

  // useEffect(() => {
  //   const boxes = gsap.utils.toArray<HTMLElement>(".box");
  //   const duration = 16;
  //   const gap = 1; 
  //   const step = duration / boxes.length - gap;
  //   const gapPosition = "+=" + gap;

  //   gsap.set(".box", {
  //     y: (i: number) => i * 80,
  //   });

  //   gsap.to(".box", {
  //     y: "-=960",
  //     duration: duration,
  //     ease: "none",
  //   });

  //   const tl = gsap.timeline({
  //     defaults: {
  //       duration: step,
  //       ease: "none",
  //     },
  //   });

  //   boxes.forEach((box, i) => {
  //     if (boxes[i + 1]) {
  //       tl.to(box, { opacity: "0.3", scale: 0.5 }, gapPosition).to(
  //         boxes[i + 1],
  //         { opacity: "1", scale: 1 },
  //         "<"
  //       );
  //     }
  //   });
  // }, []);

  const handleClick = () => {
    const tl = gsap.timeline();
    if (!isMobileView) {
      if (rotate) {
        tl.to(divRef.current, {
        width: "100vw",
        height: "100vh",
        rotate: 0,
        onStart: () => {
          setRotating(true);
        },
        onComplete: () => {
          setRotate(!rotate);
          setRotating(false);
          resetPosition();
        },
      });
      } else {
      tl.to(divRef.current, {
        width: "100vh",
        height: "30vw",
        rotate: -270,
        onStart: () => {
          setRotating(true);
        },
        onComplete: () => {
          setRotate(!rotate);
          setRotating(false);
          resetPosition();
        },
      });
      }
    } else {
      if (rotate) {
        tl.to(divRef.current, {
        width: "100vw",
        height: "30vh",
        rotate: -360,
        onStart: () => {
          setRotating(true);
        },
        onComplete: () => {
          setRotate(!rotate);
          setRotating(false);
          resetPosition();
        },
      });
      } else {
      tl.to(divRef.current, {
        width: "100vh",
        height: "100vw",
        rotate: 90,
        onStart: () => {
          setRotating(true);
        },
        onComplete: () => {
          setRotate(!rotate);
          setRotating(false);
          resetPosition();
        },
      });
      }
    }

    const boxes = gsap.utils.toArray<HTMLElement>(".box");
    const duration = 16;
    const gap = 1;
    const step = duration / boxes.length - gap;
    const gapPosition = "+=" + gap;
  
    gsap.set(".box", {
      y: (i: number) => i * 80,
    });
  
    tl.to(".box", {
      y: "-=960",
      duration: duration,
      ease: "none",
    });

    const tl2 = gsap.timeline({
      defaults: {
        duration: step,
        ease: "none",
      },
    });
  
    // Hiệu ứng trên các box
    boxes.forEach((box, i) => {
      if (boxes[i + 1]) {
        tl2.to(box, { opacity: "0.3", scale: 0.5 }, gapPosition).to(
          boxes[i + 1],
          { opacity: "1", scale: 1 },
          "<"
        );
      }
    });

  };

  useEffect(() => {
    setIsMobileView(isMobile());
    setRotate(isMobile());
    const handleResize = () => {
      setRotate(isMobile());
      setIsMobileView(isMobile());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (measureRef.current) {
      measureRef.current.style.fontVariationSettings = "'wdth' 200";
    }
    if (measureRotateRef.current) {
      measureRotateRef.current.style.fontVariationSettings = "'wdth' 200";
    }
    if (measureHoriRef.current) {
      measureHoriRef.current.style.fontVariationSettings = "'wdth' 200";
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
        if (isMobileView) {
          charWidths.push(measureRotateRef.current.getBoundingClientRect().width);
        } else {
          charWidths.push(measureRotateRef.current.getBoundingClientRect().height);
        }
      }
    });
    return charWidths;
  }, [isMobileView]);

  const getCharacterWidthsHori = useCallback((text: string) => {
    const charWidths: number[] = [];
    text.split('').forEach((char) => {
      if (measureHoriRef.current) {
        measureHoriRef.current.style.fontVariationSettings = `'wdth' 200}`;
        measureHoriRef.current.innerText = char;
          charWidths.push(measureHoriRef.current.getBoundingClientRect().width);
      }
    });
    return charWidths;
  }, []);

  const updateContainerDimensions = useCallback(() => {
    if (containerRef.current) {
      setContainerHeight(containerRef.current.clientHeight);
      setContainerWidth(containerRef.current.clientWidth);
    }
    if (containerRotateRef.current) {
      setContainerRotateHeight(containerRotateRef.current.clientHeight);
      setContainerRotateWidth(containerRotateRef.current.clientWidth);
    }
    if (containerHoriRef.current) {
      setContainerHoriHeight(containerHoriRef.current.clientHeight);
      setContainerHoriWidth(containerHoriRef.current.clientWidth);
    }
  }, []);

  useEffect(() => {
    updateContainerDimensions();
    window.addEventListener('resize', updateContainerDimensions);

    return () => {
      window.removeEventListener('resize', updateContainerDimensions);
    };
  }, [updateContainerDimensions, rotating]);

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
          if (rotate) {
            widths = getCharacterWidthsHori('ROGYX'); 
            const totalWidth = widths.reduce((total, width) => total + width, 0);
            setScaleX(prev => {
            const updated = [...prev];
              updated[index] = containerHoriWidth / totalWidth;
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
        }
      };
      updateSpanWidths('ROGYX', 0);
    }
  }, [position.clientX, containerWidth, position.xPercent, rotate, position.xPercentRotate, getCharacterWidths, rotating, containerRotateWidth, containerRotateHeight,getCharacterWidthsRotate, updateContainerDimensions, containerHoriWidth, getCharacterWidthsHori, containerHoriHeight]);

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
      <div ref={divRef} className="absolute w-full h-screen md:origin-[15vw] max-md:bottom-0 top-0 max-md:w-[100svh] max-md:h-[100lvw] max-md:origin-[50vw] max-md:rotate-90" onClick={handleClick}>
      <div
        ref={containerRef}
        className="relative h-full w-full overflow-hidden"
        style={{
          fontSize: `${rotating ? (rotate ? (fontSizeHori) : fontSizeRoteta) : fontSize}px`,
          lineHeight: `${rotating ? (rotate ? (lineHeightHori) : lineHeightRoteta)  : lineHeight}px`,
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
        className="md:h-[30vw] md:w-[100svh] md:top-0 md:rotate-[-270deg] overflow-hidden absolute opacity-0 -z-10 max-md:w-[100svh] max-md:h-[100lvw]"
        style={{
          fontSize: `${fontSizeRoteta}px`,
          lineHeight: `${lineHeightRoteta}px`,
        }}
      >
        <span ref={measureRotateRef} style={{ visibility: 'hidden', position: 'absolute', whiteSpace: 'nowrap' }}></span>
      </div>
      <div
        ref={containerHoriRef}
        className="w-full md:h-full overflow-hidden absolute opacity-0 -z-10 max-md:w-[100vw] max-md:h-[30vh]"
        style={{
          fontSize: `${fontSizeHori}px`,
          lineHeight: `${lineHeightHori}px`,
        }}
      >
        <span ref={measureHoriRef} style={{ visibility: 'hidden', position: 'absolute', whiteSpace: 'nowrap' }}></span>
      </div>
      <div className="w-[70vw] h-full absolute right-0 top-0 flex items-center justify-center">
      <div className="wrapper w-full h-[240px] relative m-auto overflow-hidden">
        <div className="boxes text-[20px] font-['STIX_Two_Text'] text-center leading-[45px]">
          <p className="box">Elevating Marketing Excellence through:</p>
          <p className="box">Strategic Development</p>
          <p className="box">Meticulous Planning</p>
          <p className="box">Innovative Strategy</p>
          <p className="box">Expert Consulting</p>
          <p className="box">Our Mission:</p>
          <p className="box">Advancing the future of ICT</p>
          <p className="box">through cutting-edge marketing</p>
          <p className="box">Committed to excellence for our clients,</p>
          <p className="box">for our users,</p>
          <p className="box">and for ourselves</p>
          <p className="box">Pioneering the Future of Marketing</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ScaledDivs;
