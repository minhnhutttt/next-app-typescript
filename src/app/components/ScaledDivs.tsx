"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import gsap, { SteppedEase } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Box from "./box";
import Tooltip from "./tooltip";
import Sound from "./sound";
import NoiseAnimation from "./noiseAnimation";

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
      containerRef.current?.removeEventListener(
        "touchcancel",
        handleTouchLeave
      );
    };
  }, [containerRef, rotate]);

  return { position, resetPosition };
};

const useWindowSize = () => {
  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowWidth;
};

const isMobile = (): boolean => {
  if (typeof window !== "undefined") {
    return window.innerWidth < 768;
  }
  return false;
};

const ScaledDivs = ({ loading }: { loading: boolean }) => {
  const [isMobileView, setIsMobileView] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [trigger, setTrigger] = useState(false);
  const [isHandleClick, setIsHandleClick] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const containerRotateRef = useRef<HTMLDivElement>(null);
  const containerHoriRef = useRef<HTMLDivElement>(null);

  const [isMuted, setIsMuted] = useState(true);
  const [isBlend, setIsBlend] = useState(false);

  const toggleMute = () => {
    setIsMuted((prevState) => !prevState);
  };

  const [rotate, setRotate] = useState(false);
  const { position, resetPosition } = useMousePositionPercentage(
    containerRef,
    rotate
  );

  const spansRef = useRef<HTMLSpanElement[]>([]);
  const measureRef = useRef<HTMLSpanElement>(null);
  const measureRotateRef = useRef<HTMLSpanElement>(null);
  const measureHoriRef = useRef<HTMLSpanElement>(null);

  const totalLines = 3;
  const [scaleX, setScaleX] = useState([1, 1, 1]);
  const [topScaleY, setTopScaleY] = useState(0);
  const [centerScaleY, setCenterScaleY] = useState(0);
  const [bottomScaleY, setBottomScaleY] = useState(0);
  const [containerHeight, setContainerHeight] = useState<number>(0);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [containerRotateHeight, setContainerRotateHeight] = useState<number>(0);
  const [containerRotateWidth, setContainerRotateWidth] = useState<number>(0);
  const [containerHoriHeight, setContainerHoriHeight] = useState<number>(0);
  const [containerHoriWidth, setContainerHoriWidth] = useState<number>(0);

  const lineHeight = containerHeight / totalLines;
  const fontSize = lineHeight / 0.77;

  const containerRotateHeightBase =
    containerRotateRef.current?.clientHeight ?? 0;
  const lineHeightRoteta = containerRotateHeightBase / totalLines;
  const fontSizeRoteta = lineHeightRoteta / 0.77;

  const containerHoriHeightBase = containerHoriRef.current?.clientHeight ?? 0;
  const lineHeightHori = containerHoriHeightBase / totalLines;
  const fontSizeHori = lineHeightHori / 0.77;
  const [rotating, setRotating] = useState<boolean>(false);

  const translateCenter =
    containerHeight - lineHeight * (bottomScaleY + centerScaleY);
  const translateCenterRotate =
    containerRotateHeight - lineHeightRoteta * (bottomScaleY + centerScaleY);
  const translateCenterHori =
    containerHoriHeight - lineHeightHori * (bottomScaleY + centerScaleY);

  const translateBottom = containerHeight - lineHeight * bottomScaleY;
  const translateBottomRotate =
    containerRotateHeight - lineHeightRoteta * bottomScaleY;
  const translateBottomHori =
    containerHoriHeight - lineHeightHori * bottomScaleY;

  const [spanWidths, setSpanWidths] = useState<number[][]>([[], [], []]);
  const audioRef = useRef<HTMLAudioElement>(null);
  const audio2Ref = useRef<HTMLAudioElement>(null);
  const divRef = useRef(null);
  const [shuffledColors, setShuffledColors] = useState<string[]>([]);
  const windowWidth = useWindowSize();
  const [previousWidth, setPreviousWidth] = useState<number | undefined>(
    undefined
  );

  useEffect(() => {
    if (windowWidth !== undefined && previousWidth !== undefined) {
      if (
        (previousWidth > 767 && windowWidth <= 767) ||
        (previousWidth <= 767 && windowWidth > 767)
      ) {
        window.location.reload();
      }
    }
    setPreviousWidth(windowWidth);
  }, [windowWidth, previousWidth]);

  useEffect(() => {
    const colors = ["863EC8", "F7B318", "174DF8", "50D488", "CC3D95"];
    const randomColors = [...colors].sort(() => Math.random() - 0.5);
    setShuffledColors(randomColors);
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
    if (audio2Ref.current) {
      audio2Ref.current.muted = isMuted;
    }
  }, [isMuted]);
  const handleClick = () => {
    var tl = gsap.timeline();
    const tl2 = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    const boxes = gsap.utils.toArray<HTMLElement>(".box");
    const lines = gsap.utils.toArray<HTMLElement>(".type-line");
    const tooltips = document.querySelectorAll('.tooltip');

    const height = isMobileView ? 40 : 80;
    let cursor = document.querySelector("#cursor");
    gsap.fromTo(
      cursor,
      { autoAlpha: 0, x: 2 },
      { autoAlpha: 1, duration: 0.5, repeat: -1, ease: SteppedEase.config(1) }
    );
    if (!isRunning) {
        setIsBlend(true);
        gsap.set(".box", {
          y: (i: number) => i * height,
          opacity: 0,
        });
        gsap.set(".char", {
          display: "none",
        });
        tl.set(".type-blur", {
          filter: "blur(100px)",
        });
        tl.to(".tooltip.type-03 .tooltip-chars", {
          display: 'inline-block',
        });
        if (!isMobileView) {
          tl.to(divRef.current, {
            width: "100svh",
            height: "30vw",
            rotate: -270,
            left: 0,
            onStart: () => {
              setRotating(true);
              setIsRunning(true);
            },
            onComplete: () => {
              setRotate(true);
              setRotating(false);
              resetPosition();
            },
          });
        } else {
          tl.to(divRef.current, {
            width: "100vw",
            height: "30svh",
            rotate: -360,
            top: "70svh",
            onStart: () => {
              setRotating(true);
              setIsRunning(true);
            },
            onComplete: () => {
              setRotate(false);
              setRotating(false);
              resetPosition();
            },
          });
        }

        tl.to(".wrapper", {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power2.inOut",
        });

        tl.to(boxes[1], {
          opacity: "1",
          scale: 1,
          duration: 0.5,
        });

        // for (let i = 0; i < boxes.length - 1; i++) {
        //   tl.to(".box", {
        //     y: `-=${height}`,
        //     delay: 1,
        //     ease: "power2.inOut",
        //     onStart: () => {
        //       if (boxes[i]) {
        //         gsap
        //           .timeline()
        //           .to(boxes[i-1], { opacity: "0" })
        //           .to(
        //             boxes[i],
        //             {
        //               opacity: "0.1",
        //               scale: 0.5,
        //               duration: 0.5,
        //               ease: "power2.inOut",
        //             },
        //             "<"
        //           )
        //           .to(
        //             boxes[i + 1],
        //             {
        //               opacity: "0.3",
        //               scale: 0.7,
        //               duration: 0.5,
        //               ease: "power2.inOut",
        //             },
        //             "<"
        //           )
        //           .to(
        //             boxes[i + 2],
        //             {
        //               opacity: "1",
        //               scale: 1,
        //               duration: 0.5,
        //               ease: "power2.inOut",
        //             },
        //             "<"
        //           )
        //           .to(
        //             boxes[i + 3],
        //             {
        //               opacity: "0.3",
        //               scale: 0.7,
        //               duration: 0.5,
        //               ease: "power2.inOut",
        //             },
        //             "<"
        //           )
        //           .to(
        //             boxes[i + 4],
        //             {
        //               opacity: "0.1",
        //               scale: 0.5,
        //               duration: 0.5,
        //               ease: "power2.inOut",
        //             },
        //             "<"
        //           );
        //       }
        //     },
        //   });
        // }
        tl.to(
          ".wrapper",
          {
            opacity: 0,
            scale: 0,
            duration: 1,
            ease: "power2.inOut",
          },
          "-=1"
        );

        tl.to(
          ".wrapper02",
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power2.inOut",
          },
          "<"
        );
        lines.forEach((line) => {
          const chars = line.querySelectorAll(".char:not(.tooltip-ani .char)");
          tl.to(chars, {
            display: 'inline-block',
            stagger: 0.03,
            onStart: () => {
              if (audioRef.current) {
                audioRef.current.play();
              }
              line.classList.add("show-caret");
            },
            onComplete: () => {
              line.classList.remove("show-caret");
              if (audioRef.current) {
                audioRef.current.currentTime = 0;
                audioRef.current.pause();
              }
            },
          });
        });
        tl.to(".type-blur", {
          duration: 0.5,
          filter: "blur(0px)",
          ease: "linear",
          onStart: () => {
            if (audio2Ref.current) {
              audio2Ref.current.play();
            }
          },
        },'+=1');
        tl.to(".tooltip.type-03 .tooltip-chars", {
          display: 'none',
        });
        tl.to(".tooltip.type-03 .tooltip-ani .char", {
          display: "inline-block",
        });
        tl.add(() => {
          tooltips.forEach(tooltip => {
            tl2.to(tooltip, {
              onComplete: () => {
                  tooltip.classList.toggle('is-active');
              }
            },"<");
          });
        });

          tl.to(".main-container", {
            opacity: 0.2,
            duration: 1.5,
            ease: "power2.inOut",
            onComplete: () => {
              setTrigger((prev) => !prev);
            }
          }, '+=15');
          if (!isMobileView) {
            tl.to(divRef.current, {
              width: "100vw",
              height: "100svh",
              rotate: 0,
              onStart: () => {
                setRotating(true);
              },
              onComplete: () => {
                setRotate(false);
                setRotating(false);
                resetPosition();
                setIsBlend(false);
                setIsRunning(false);
            setIsCompleted(true);
              },
            });
          } else {
            tl.to(divRef.current, {
              width: "100svh",
              height: "100vw",
              rotate: 90,
              top: 0,
              onStart: () => {
                setRotating(true);
              },
              onComplete: () => {
                setRotate(true);
                setRotating(false);
                resetPosition();
                setIsBlend(false);
                setIsRunning(false);
            setIsCompleted(true);
              },
            });
          }
          tl.to(
            ".wrapper02",
            {
              opacity: 0,
              scale: 0,
              duration: 1,
              ease: "power2.inOut",
            },
            "<"
          );
          tl.to(".main-container", {
            opacity: 1,
            duration: 1,
            ease: "power2.inOut",
            onComplete: () => {
              tl2.kill();
              tooltips.forEach(tooltip => {
                tooltip.classList.remove('is-active');
              })
            }
          });
    }
  };
    
    

  useEffect(() => {
    setIsMobileView(isMobile());
    setRotate(isMobile());
    const handleResize = () => {
      setIsMobileView(isMobile());
      if (isRunning) {
        setRotate(isMobile());
      }
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

  const lerp = (start: number, end: number, t: number) =>
    start * (1 - t) + end * t;

  const getCharacterWidths = useCallback(
    (text: string, widths: number[]) => {
      const charWidths: number[] = [];
      text.split("").forEach((char, index) => {
        if (measureRef.current) {
          measureRef.current.style.fontVariationSettings = `'wdth' ${rotating ? 200 : widths[index]}`;
          measureRef.current.innerText = char;
          //
          if (rotate) {
            charWidths.push(measureRef.current.getBoundingClientRect().height);
          } else {
            charWidths.push(measureRef.current.getBoundingClientRect().width);
          }
        }
      });
      return charWidths;
    },
    [rotate, rotating]
  );

  const getCharacterWidthsRotate = useCallback(
    (text: string) => {
      const charWidths: number[] = [];
      text.split("").forEach((char) => {
        if (measureRotateRef.current) {
          measureRotateRef.current.style.fontVariationSettings = `'wdth' 200}`;
          measureRotateRef.current.innerText = char;
          if (isMobileView) {
            charWidths.push(
              measureRotateRef.current.getBoundingClientRect().width
            );
          } else {
            charWidths.push(
              measureRotateRef.current.getBoundingClientRect().height
            );
          }
        }
      });
      return charWidths;
    },
    [isMobileView]
  );

  const getCharacterWidthsHori = useCallback((text: string) => {
    const charWidths: number[] = [];
    text.split("").forEach((char) => {
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
    window.addEventListener("resize", updateContainerDimensions);

    return () => {
      window.removeEventListener("resize", updateContainerDimensions);
    };
  }, [updateContainerDimensions, rotating]);

  useEffect(() => {
    if (containerRef.current) {
      setTopScaleY(
        position.clientX === 0 && position.clientY === 0
          ? 1
          : 1.3 - (position.yPercent / 100) * 0.6
      );

      setCenterScaleY(
        position.clientX === 0 && position.clientY === 0
          ? 1
          : 1 - (Math.abs(50 - position.yPercent) / 100) * 0.0001
      );

      setBottomScaleY(
        position.clientX === 0 && position.clientY === 0
          ? 1
          : 0.7 + (position.yPercent / 100) * 0.6
      );
      const updateSpanWidths = (text: string, index: number) => {
        const spanElements = containerRef.current!.querySelectorAll(
          `.variable-word-${index + 1} .variable-word-letter`
        );
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

        setSpanWidths((prev) => {
          const updated = [...prev];
          updated[index] = newSpanWidths;
          return updated;
        });

        let widths: number[] = [];
        if (!rotating) {
          widths = getCharacterWidths(text, newSpanWidths);
          const totalWidth = widths.reduce((total, width) => total + width, 0);
          setScaleX((prev) => {
            const updated = [...prev];
            updated[index] = containerWidth / totalWidth;
            return updated;
          });
        } else {
          if (rotate) {
            widths = getCharacterWidthsHori(text);
            const totalWidth = widths.reduce(
              (total, width) => total + width,
              0
            );
            setScaleX((prev) => {
              const updated = [...prev];
              updated[index] = containerHoriWidth / totalWidth;
              return updated;
            });
          } else {
            widths = getCharacterWidthsRotate(text);
            const totalWidth = widths.reduce(
              (total, width) => total + width,
              0
            );
            setScaleX((prev) => {
              const updated = [...prev];
              updated[index] = containerRotateWidth / totalWidth;
              return updated;
            });
          }
        }
      };
      updateSpanWidths("DIGITAL", 0);
      updateSpanWidths("ROGYX", 1);
      updateSpanWidths("MARKETING", 2);
    }
  }, [
    position.clientX,
    position.clientY,
    position.yPercent,
    isRunning,
    containerWidth,
    position.xPercent,
    rotate,
    position.xPercentRotate,
    getCharacterWidths,
    rotating,
    containerRotateWidth,
    containerRotateHeight,
    getCharacterWidthsRotate,
    updateContainerDimensions,
    containerHoriWidth,
    getCharacterWidthsHori,
    containerHoriHeight,
  ]);

  const renderCharacters = useCallback(
    (
      text: string,
      widths: number[],
      coloredIndices: number[],
      color: number
    ) => {
      let i = color;
      return text.split("").map((char, index) => {
        coloredIndices.includes(index) && i++;
        return (
          <span
            key={index}
            ref={(el) => el && (spansRef.current[index] = el)}
            data-char={char}
            className="variable-word-letter origin-center bg-text"
            style={{
              fontVariationSettings: `'wdth' ${widths[index]}`,
              transform: `translate3d(0px, 0px, 0px) scaleY(1) scaleX(1)`,
              backgroundColor: `#${coloredIndices.includes(index) ? shuffledColors[i % shuffledColors.length] : "000"}`,
            }}
          >
            {char}
          </span>
        );
      });
    },
    [shuffledColors]
  );

  return (
    <>
      {loading && !isHandleClick && <NoiseAnimation triggerAnimation={trigger} />}
      <div className="main-container relative flex md:items-center items-end justify-start h-[100svh] overflow-hidden origin-center z-50 bg-[#FDFDFD]">
        <div
          ref={divRef}
          className="absolute z-10 w-[100vw] h-[100svh] md:origin-[15vw_15vw] left-0 bottom-0 top-0 max-md:w-[100svh] max-md:h-[100vw] max-md:origin-[50vw] max-md:rotate-90"
          onClick={handleClick}
        >
          <div
            ref={containerRef}
            className="relative h-full w-full overflow-hidden"
            style={{
              fontSize: `${rotating ? (rotate ? fontSizeHori : fontSizeRoteta) : fontSize}px`,
              lineHeight: `${rotating ? (rotate ? lineHeightHori : lineHeightRoteta) : lineHeight}px`,
            }}
          >
            <span
              ref={measureRef}
              style={{
                visibility: "hidden",
                position: "absolute",
                whiteSpace: "nowrap",
              }}
            ></span>
            <div
              className="variable-word-1 origin-top-left inline-flex justify-evenly items-center whitespace-nowrap"
              style={{
                transform: `translate3d(0px, 0px, 0px) scaleX(${scaleX[0]}) scaleY(${topScaleY})`,
              }}
            >
              {renderCharacters("DIGITAL", spanWidths[0], [2], 4)}
            </div>
            <div
              className="absolute left-0 right-0 top-0 variable-word-2 w-full origin-top-left whitespace-nowrap"
              style={{
                transform: `translate3d(0px, ${rotating ? (rotate ? translateCenterHori : translateCenterRotate) : translateCenter}px, 0px) scaleX(${scaleX[1]}) scaleY(${centerScaleY})`,
              }}
            >
              {renderCharacters("ROGYX", spanWidths[1], [0, 1, 2, 3, 4], 0)}
            </div>
            <div
              className="absolute left-0 right-0 top-0 variable-word-3 w-full origin-top-left whitespace-nowrap"
              style={{
                transform: `translate3d(0px, ${rotating ? (rotate ? translateBottomHori : translateBottomRotate) : translateBottom}px, 0px) scaleX(${scaleX[2]}) scaleY(${bottomScaleY})`,
              }}
            >
              {renderCharacters("MARKETING", spanWidths[2], [2, 8], 1)}
            </div>
          </div>
        </div>
        <div
          ref={containerRotateRef}
          className="md:h-[30vw] md:w-[100svh] md:top-0 md:rotate-[-270deg] overflow-hidden absolute opacity-0 -z-10 max-md:w-[100svh] max-md:h-[100vw]"
          style={{
            fontSize: `${fontSizeRoteta}px`,
            lineHeight: `${lineHeightRoteta}px`,
          }}
        >
          <span
            ref={measureRotateRef}
            style={{
              visibility: "hidden",
              position: "absolute",
              whiteSpace: "nowrap",
            }}
          ></span>
        </div>
        <div
          ref={containerHoriRef}
          className="w-full md:h-full overflow-hidden absolute opacity-0 -z-10 max-md:w-[100vw] max-md:h-[30svh]"
          style={{
            fontSize: `${fontSizeHori}px`,
            lineHeight: `${lineHeightHori}px`,
          }}
        >
          <span
            ref={measureHoriRef}
            style={{
              visibility: "hidden",
              position: "absolute",
              whiteSpace: "nowrap",
            }}
          ></span>
        </div>
        <div className="wrapper md:w-[70vw] w-full md:h-full h-[70svh] absolute right-0 top-0 flex items-center justify-center opacity-0 scale-0">
          <div className="w-full md:h-[240px] h-[120px] relative m-auto">
            <div className="boxes font-['STIX_Two_Text'] text-center relative">
              <Box></Box>
              <Box>The future is already accelerating.</Box>
              <Box>Leave the past behind.</Box>
              <Box>Reject the template.</Box>
              <Box>Discover world-class modern development.</Box>
              <Box>Choose originality.</Box>
              <Box>Unleash infinite potential.</Box>
              <Box>Marketing is being redefined.</Box>
              <Box>We ensure success, covering every angle.</Box>
              <Box>Elevating Japan’s web to a new level.</Box>
              <Box>Results through function and performance.</Box>
              <Box>For proactive business leaders.</Box>
              <Box>An exclusive, referral-only digital marketing agency.</Box>
            </div>
          </div>
        </div>
        <div className="wrapper02 font-noto opacity-0 md:w-[70vw] w-full md:h-full h-[70svh] absolute right-0 top-0 flex justify-center items-center">
          <div>
            <div
              className="text-left text-[calc(1.2vw+1.2svh)] md:text-[calc(1vw+1svh)]"
            >
              <span data-splitting className="type-line font-bold block overflow-hidden">
                未来は、もう加速している。<span className="caret"></span>
              </span>
              <span data-splitting className="type-line font-bold block overflow-hidden">
                過去を振り切り、前だけを見ろ。<span className="caret"></span>
              </span>
              <br />
              <span data-splitting className="type-line font-bold block overflow-hidden">
                テンプレートを捨て去れ。<span className="caret"></span>
              </span>
              <span className="type-line font-bold block overflow-hidden">
                <span data-splitting>世界標準の</span>
                <span data-splitting className="tooltip type-01"><Tooltip text="モダン開発">
                  モダン開発とは、最新のツール、技術、方法論を活用して
                  ソフトウェアを効率的に開発するアプローチです。クラウド、DevOps、アジャイル手法、マイクロサービス、コンテナ化などを取り入れ、迅速な開発とデプロイメント、継続的な改善を実現します。自動化、スケーラビリティ、セキュリティに重点を置き、ユーザーニーズに迅速に対応できる柔軟なシステム構築を目指します。
                </Tooltip></span>
                <span data-splitting>で新たな価値を創り出す。</span><span className="caret"></span>
              </span>
              <br />
              <span data-splitting className="type-line font-bold block overflow-hidden">
                個性を殺すコピーに背を向け、<span className="caret"></span>
              </span>
              <span data-splitting className="type-line font-bold block overflow-hidden">
                無限の可能性を秘めたオリジナルを選び抜け。
                <span className="caret"></span>
              </span>
              <br />
              <span className="type-line font-bold block overflow-hidden">
              <span data-splitting className="tooltip type-03"><Tooltip animation={true} text="マーケティングは、今、時代に再定義される。">
                  現代のマーケティングにおいて、総合的な戦略立案と実行が成功の鍵と考えます。
                  <br />
                  顧客のニーズや市場動向を包括的に理解し、製品開発から販売、顧客サービスまでの全プロセスを一貫して最適化できることにより、ターゲット市場への効果的なアプローチ、競合他社との差別化、顧客満足度の向上が可能となり、結果として売上増加と持続的な成長につながります。
                </Tooltip></span>
                <span className="caret"></span>
              </span>
              <span data-splitting className="type-line font-bold block overflow-hidden">
                すべてを網羅し、成功を必ず手にする
                <span className="caret"></span>
              </span>
              <br />
              <span data-splitting className="type-line font-bold block overflow-hidden">
                日本のウェブを、新次元へと引き上げる。
                <span className="caret"></span>
              </span>
              <span data-splitting className="type-line font-bold block overflow-hidden">
                機能美とパフォーマンスで、確実に結果を出す。
                <span className="caret"></span>
              </span>
              <br />
              <span data-splitting className="type-line font-bold block overflow-hidden">

              <span className="tooltip type-02"><Tooltip text="プロアクティブなビジネスマン">
                  プロアクティブなビジネスマンとは、未来志向で変革を追求する人物です。常に市場動向や業界の変化を分析し、新しい機会を積極的に探求します。創造的な解決策を提案し、リスクを管理しながら革新的なアイデアを実行に移します。受動的ではなく、主体的に状況を改善し、ビジネスの成長を牽引する姿勢を持っています。
                </Tooltip></span>
                だけに贈る、<span className="caret"></span>
              </span>
              <span data-splitting className="type-line font-bold block overflow-hidden">
                紹介制のデジタルマーケティングエージェンシー。
                <span className="caret"></span>
              </span>
              <br />
            </div>

            <div className="flex justify-end items-center type-blur blur-[100px]">
              <a
                href="https://g.co/kgs/Vt1oGkn"
                target="_blank"
                className=""
              >
                <img className="w-[calc(8vw+8svh)]" src="/assets/images/rogyx.svg" alt="" />
              </a>
            </div>
          </div>
          <audio ref={audioRef} src="/assets/audio/type.mp3" loop />
          <audio ref={audio2Ref} src="/assets/audio/text-impact1.mp3" />
        </div>
        <Sound isMuted={isMuted} isBlend={isBlend} toggleMute={toggleMute} />
      </div>
    </>
  );
};

export default ScaledDivs;
