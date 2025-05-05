"use client";

import { useEffect, useRef, useState } from "react";
import { preloadImages } from "@/utils/imageUtils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.config({ nullTargetWarn: false });

const debounce = (func: Function, wait = 200) => {
  let timeout: ReturnType<typeof setTimeout>;
  return function (...args: any[]) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

const BUTTERFLY_FRAMES = [
  "/assets/images/home/brand__butterfly-001.webp",
  "/assets/images/home/brand__butterfly-002.webp",
];

const createFlutterTimeline = () =>
  gsap.timeline({
    repeat: -1,
    yoyo: true,
    repeatDelay: 0.5,
  });

interface MouseMoveRatios {
  butterfly: number;
  brandj: number;
  stickbottle: number;
  framer: number;
  bag: number;
  plate: number;
  earth: number;
}

export function useInitialLoader() {
  const butterflyIntervalRef = useRef<number>();
  const contextRef = useRef<any>(null);
  const timelineRefs = useRef<{
    intro?: gsap.core.Timeline;
    butterfly?: gsap.core.Timeline;
    letterJ?: gsap.core.Timeline;
    framer?: gsap.core.Timeline;
    bag?: gsap.core.Timeline;
    plate?: gsap.core.Timeline;
    earth?: gsap.core.Timeline;
    scrollTriggers: any[];
  }>({ scrollTriggers: [] });

  const elementsRef = useRef<any>(null);

  // Set mouse ratios
  const mouseMoveRatios = useRef<MouseMoveRatios>({
    butterfly: 0.05,
    brandj: 0.03,
    stickbottle: 0.02,
    framer: 0.02,
    bag: 0.15,
    plate: 0.25,
    earth: 0.25,
  });

  const mousePositionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    timelineRefs.current.scrollTriggers = [];

    const elements = {
      initialOverlay: {
        el: document.querySelector(
          '[data-js="initial-overlay"]'
        ) as HTMLElement,
        preloadImages: document.querySelectorAll(
          '[data-js="initial-overlay_preload"] img'
        ) as NodeListOf<HTMLImageElement>,
      },
      hero: {
        brand: document.querySelector('[data-js="text-brand"]'),
        heading: document.querySelector('[data-js="text-heading"]'),
        heading02: document.querySelector('[data-js="text-heading02"]'),
      },
      scenes: document.querySelector('[data-js="scenes"]'),
      butterfly: {
        layer: document.querySelector('[data-js="butterfly-layer"]'),
        inner: document.querySelector('[data-js="butterfly-inner"]'),
        img: document.querySelector(
          '[data-js="butterfly-img"]'
        ) as HTMLImageElement,
      },
      brandj: {
        layer: document.querySelector('[data-js="brandj-layer"]'),
        inner: document.querySelector('[data-js="brandj-inner"]'),
      },
      framer: {
        layer: document.querySelector('[data-js="framer-layer"]'),
        inner: document.querySelector('[data-js="framer-inner"]'),
        framer: document.querySelector('[data-js="framer-framer"]'),
        avocado: document.querySelector('[data-js="framer-avocado"]'),
      },
      bag: {
        layer: document.querySelector('[data-js="bag-layer"]'),
        inner: document.querySelector('[data-js="bag-inner"]'),
      },
      plate: {
        layer: document.querySelector('[data-js="plate-layer"]'),
        inner: document.querySelector('[data-js="plate-inner"]'),
        one: document.querySelector('[data-js="plate-one"]'),
        earth: document.querySelector('[data-js="plate-earth"]'),
      },
      earth: {
        layer: document.querySelector('[data-js="earth-layer"]'),
        inner: document.querySelector('[data-js="earth-inner"]'),
        john: document.querySelector('[data-js="earth-john"]'),
        earth: document.querySelector('[data-js="earth-earth"]'),
        sunflower: document.querySelector('[data-js="earth-sunflower"]'),
        arm: document.querySelector('[data-js="earth-arm"]'),
      }
    };

    elementsRef.current = elements;

    if (elements.initialOverlay.el) {
      preloadImages(elements.initialOverlay.preloadImages)
        .then(() => {
          requestAnimationFrame(() => {
            gsap.to(elements.initialOverlay.el, { autoAlpha: 0 });
          });
        })
        .catch((error) => {
          console.error("Error preloading images:", error);
        });
    }

    // Animation frames
    const animateButterflyFrames = () => {
      if (!elements.butterfly.img) return;

      if (butterflyIntervalRef.current) {
        clearInterval(butterflyIntervalRef.current);
      }

      let currentFrame = 0;
      butterflyIntervalRef.current = window.setInterval(() => {
        currentFrame = (currentFrame + 1) % BUTTERFLY_FRAMES.length;
        elements.butterfly.img.src = BUTTERFLY_FRAMES[currentFrame];
      }, 100);
    };

    // scene intro
    const createSceneIntro = () => {
      return gsap
        .timeline()
        .to(elements.hero.brand, {
          y: -100,
          duration: 1,
          autoAlpha: 0,
          ease: "power3.out",
        })
        .to(
          elements.hero.heading,
          { y: -30, duration: 1.5, autoAlpha: 0, ease: "power3.out" },
          "<"
        )
        .to(
          elements.hero.heading02,
          { y: -20, duration: 1.5, autoAlpha: 0, ease: "power3.out" },
          "<"
        );
    };

    const sceneIntro = createSceneIntro();

    const clearScrollTriggers = () => {
      timelineRefs.current.scrollTriggers.forEach((trigger) => {
        if (trigger) trigger.kill();
      });
      timelineRefs.current.scrollTriggers = [];

      if (timelineRefs.current.intro) timelineRefs.current.intro.kill();
      if (timelineRefs.current.butterfly) timelineRefs.current.butterfly.kill();
      if (timelineRefs.current.letterJ) timelineRefs.current.letterJ.kill();
      if (timelineRefs.current.framer) timelineRefs.current.framer.kill();
      if (timelineRefs.current.bag) timelineRefs.current.bag.kill();
      if (timelineRefs.current.plate) timelineRefs.current.plate.kill();
      if (timelineRefs.current.earth) timelineRefs.current.earth.kill();
    };

    const initScrollTriggers = () => {
      clearScrollTriggers();

      const mm = gsap.matchMedia();
      mm.add(
        {
          isSp: `not all and (min-width: 768px)`,
          isMd: `(min-width: 768px)`,
        },
        (context) => {
          contextRef.current = context;
          // @ts-expect-error
          const { isSp, isMd } = context.conditions;

          const windowHeight = window.innerHeight;
          const windowWidth = window.innerWidth;

          // Butterfly
          const butterflyLayer = elements.butterfly.layer;
          const butterflyInner = elements.butterfly.inner;

          // BrandJ
          const brandjLayer = elements.brandj.layer;
          const brandjInner = elements.brandj.inner;

          // Framer
          const framerLayer = elements.framer.layer;
          const framerFramer = elements.framer.framer;
          const framerAvocado = elements.framer.avocado;

          // Bag
          const bagLayer = elements.bag.layer;
          const bagInner = elements.bag.inner;

          // Plate
          const plateLayer = elements.plate.layer;
          const plateInner = elements.plate.inner;
          const plateOne = elements.plate.one;
          const plateEarth = elements.plate.earth;

          // Earth
          const earthLayer = elements.earth.layer;
          const earthInner = elements.earth.inner;
          const earthJohn = elements.earth.john;
          const earthEarth = elements.earth.earth;
          const earthSunflower = elements.earth.sunflower;
          const earthArm = elements.earth.arm;

          if (
            !butterflyLayer || 
            !brandjLayer || 
            !framerLayer || 
            !bagLayer || 
            !plateLayer || 
            !plateOne || 
            !plateEarth ||
            !earthLayer ||
            !earthJohn ||
            !earthEarth ||
            !earthSunflower ||
            !earthArm
          ) {
            return {
              butterflyTl: null,
              letterJTl: null,
              framerTl: null,
              bagTl: null,
              plateTl: null,
              earthTl: null,
            };
          }

          // ScrollTrigger intro
          timelineRefs.current.intro = gsap
            .timeline({
              scrollTrigger: {
                trigger: ".scene-1",
                endTrigger: ".scene-4",
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
              },
            })
            .add(sceneIntro);

          if (timelineRefs.current.intro.scrollTrigger) {
            timelineRefs.current.scrollTriggers.push(
              timelineRefs.current.intro.scrollTrigger
            );
          }

          // Butterfly
          gsap.set(butterflyLayer, {
            y: butterflyLayer.clientHeight + windowHeight,
            x: windowWidth * 0.5 + butterflyLayer.clientWidth * 0.25,
            scale: 1.5,
          });

          const butterflyTl = gsap
            .timeline()
            .to(butterflyLayer, {
              x: windowWidth * 0.4 - butterflyLayer.clientWidth * 0.5,
              y: windowHeight * 0.17,
              scale: 1,
              ease: "power1.inOut",
            })
            .to(butterflyLayer, {
              y: -butterflyLayer.clientHeight,
              x: windowWidth * 0.4 - butterflyLayer.clientWidth * 1.2,
              ease: "power1.in",
            });

          const butterflyFlutterTl = createFlutterTimeline();
          butterflyFlutterTl
            .to(butterflyInner, {
              duration: gsap.utils.random(1.8, 2.2),
              ease: "sine.inOut",
              y: `-=${gsap.utils.random(10, 20)}`,
              scale: gsap.utils.random(0.94, 0.98),
              rotation: gsap.utils.random(-4, 4),
            })
            .to(
              brandjInner,
              {
                duration: gsap.utils.random(1.8, 2.2),
                ease: "sine.inOut",
                y: `-=${gsap.utils.random(10, 20)}`,
                scaleX: gsap.utils.random(0.9, 0.96),
              },
              "<"
            );
          timelineRefs.current.butterfly = gsap
            .timeline({
              scrollTrigger: {
                trigger: ".scene-1",
                endTrigger: ".scene-6",
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
              },
            })
            .add(butterflyTl);

          if (timelineRefs.current.butterfly.scrollTrigger) {
            timelineRefs.current.scrollTriggers.push(
              timelineRefs.current.butterfly.scrollTrigger
            );
          }

          // ScrollTrigger letterJ
          gsap.set(brandjLayer, {
            y: windowHeight + brandjLayer.clientHeight * 3,
            x: windowWidth * 0.5 + brandjLayer.clientWidth * 0.75,
            scale: 1.5,
          });

          const letterJTl = gsap
            .timeline()
            .to(brandjLayer, {
              y: windowHeight * 0.1,
              duration: 1,
              scale: 1,
              ease: "power1.inOut",
            })
            .to(brandjLayer, {
              y: -(brandjLayer.clientHeight + windowHeight),
              ease: "power1.inOut",
            });

          const letterJFlutterTl = createFlutterTimeline();
          letterJFlutterTl.to(brandjInner, {
            duration: gsap.utils.random(1.8, 2.2),
            ease: "sine.inOut",
            scaleX: gsap.utils.random(0.9, 0.96),
          });
          timelineRefs.current.letterJ = gsap
            .timeline({
              scrollTrigger: {
                trigger: ".scene-1",
                endTrigger: ".scene-8",
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
              },
            })
            .add(letterJTl);

          if (timelineRefs.current.letterJ.scrollTrigger) {
            timelineRefs.current.scrollTriggers.push(
              timelineRefs.current.letterJ.scrollTrigger
            );
          }

          // ScrollTrigger framer
          gsap.set(framerLayer, {
            y: windowHeight + framerLayer.clientHeight * 6,
            x: windowWidth * 0.5 - framerLayer.clientWidth,
          });

          const framerFlutterTl = createFlutterTimeline();
          framerFlutterTl.to(framerFramer, {
            duration: gsap.utils.random(1.8, 2.2),
            ease: "sine.inOut",
            y: `-=${gsap.utils.random(10, 20)}`,
            scale: gsap.utils.random(0.94, 0.98),
            rotation: gsap.utils.random(-4, 4),
          });

          const framerTl = gsap
            .timeline()
            .to(framerLayer, {
              y: windowHeight * 0.4,
              x: isMd
                ? windowWidth * 0.5 - framerLayer.clientWidth * 2
                : windowWidth * 0.5 - framerLayer.clientWidth * 1.5,
              ease: "power1.inOut",
            })
            .to(framerLayer, {
              y: -(framerLayer.clientHeight * 2),
              ease: "power1.inOut",
            });

          const avocadoFlutterTl = createFlutterTimeline();
          avocadoFlutterTl
            .to(framerAvocado, {
              duration: gsap.utils.random(1.6, 1.9),
              ease: "power1.out",
              y: `-=${gsap.utils.random(-8, -14)}`,
              rotation: gsap.utils.random(-40, -20),
            })
            .to(framerAvocado, {
              duration: gsap.utils.random(1.6, 1.9),
              ease: "power1.in",
              y: 50,
              rotation: gsap.utils.random(-40, -20),
            });
          timelineRefs.current.framer = gsap
            .timeline({
              scrollTrigger: {
                trigger: ".scene-1",
                endTrigger: ".scene-7",
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
              },
            })
            .add(framerTl);

          if (timelineRefs.current.framer.scrollTrigger) {
            timelineRefs.current.scrollTriggers.push(
              timelineRefs.current.framer.scrollTrigger
            );
          }

          // ScrollTrigger bag
          gsap.set(bagLayer, {
            y: windowHeight + bagLayer.clientHeight * 5,
            x: windowWidth * 0.6,
            scale: 1.25,
          });

          const bagTl = gsap
            .timeline()
            .to(bagLayer, {
              x: windowWidth * 0.7,
              y: windowHeight * 0.45 - bagLayer.clientHeight * 0.5,
              scale: 1,
              ease: "power1.inOut",
            })
            .to(bagLayer, {
              y: -bagLayer.clientHeight,
              ease: "power1.inOut",
            });

          const bagFlutterTl = createFlutterTimeline();
          bagFlutterTl
            .to(bagInner, {
              duration: gsap.utils.random(1.8, 2.2),
              ease: "sine.inOut",
              y: `-=${gsap.utils.random(10, 20)}`,
              scale: gsap.utils.random(0.94, 0.98),
              rotation: gsap.utils.random(-4, 4),
            })
            .to(
              brandjInner,
              {
                duration: gsap.utils.random(1.8, 2.2),
                ease: "sine.inOut",
                y: `-=${gsap.utils.random(10, 20)}`,
                scaleX: gsap.utils.random(0.9, 0.96),
              },
              "<"
            );
          timelineRefs.current.bag = gsap
            .timeline({
              scrollTrigger: {
                trigger: ".scene-1",
                endTrigger: ".scene-7",
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
              },
            })
            .add(bagTl);

          if (timelineRefs.current.bag.scrollTrigger) {
            timelineRefs.current.scrollTriggers.push(
              timelineRefs.current.bag.scrollTrigger
            );
          }

          // ScrollTrigger plate
          gsap.set(plateOne, {
            y: windowHeight * 0.5 - plateOne.clientHeight * 0.4,
            x: windowWidth * 0.5 - plateOne.clientWidth * 1.5,
            opacity: 0,
          });

          gsap.set(plateEarth, {
            y: windowHeight * 0.5 - plateEarth.clientHeight * 0.1,
            x: windowWidth * 0.5 - plateEarth.clientWidth * 0.1,
            opacity: 0,
          });

          const plateTl = gsap
            .timeline()
            .to(plateOne, {
              x: windowWidth * 0.5 - plateOne.clientWidth * 0.5,
              opacity: 1,
            })
            .to(plateEarth, {
              opacity: 1,
              y: windowHeight * 0.5 + plateEarth.clientHeight * 0.7,
              x: windowWidth * 0.5 - plateEarth.clientWidth * 0.7,
            },'<');

          const plateFlutterTl = createFlutterTimeline();
          plateFlutterTl
            .to(plateInner, {
              duration: gsap.utils.random(1.8, 2.2),
              ease: "sine.inOut",
              y: `-=${gsap.utils.random(10, 20)}`,
              scale: gsap.utils.random(0.94, 0.98),
              rotation: gsap.utils.random(-4, 4),
            })
            .to(
              plateInner,
              {
                duration: gsap.utils.random(1.8, 2.2),
                ease: "sine.inOut",
                y: `-=${gsap.utils.random(10, 20)}`,
                scaleX: gsap.utils.random(0.9, 0.96),
              },
              "<"
            );
          timelineRefs.current.plate = gsap
            .timeline({
              scrollTrigger: {
                trigger: ".scene-3",
                endTrigger: ".scene-7",
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
              },
            })
            .add(plateTl);

          if (timelineRefs.current.plate.scrollTrigger) {
            timelineRefs.current.scrollTriggers.push(
              timelineRefs.current.plate.scrollTrigger
            );
          }


          // ScrollTrigger Earth
          gsap.set(earthArm, {
            y: windowHeight * 0.5 + earthArm.clientHeight * 0.9 + earthEarth.clientHeight,
            x: windowWidth * 0.5 - earthArm.clientWidth * 0.5,
          });

          gsap.set(earthJohn, {
            y: windowHeight * 0.5 + earthJohn.clientHeight * 0.1,
            x: windowWidth * 0.5 - earthJohn.clientWidth * 0.5,
          });

          gsap.set(earthEarth, {
            y: windowHeight - earthJohn.clientHeight * 0.5,
            x: windowWidth * 0.5 - earthEarth.clientWidth * 0.5,
          });

          gsap.set(earthSunflower, {
            y: windowHeight - earthSunflower.clientHeight * 0.3,
            x: windowWidth * 0.5 - earthSunflower.clientWidth * 1.2,
          });

          gsap.set(earthLayer, {
            scale: 2,
            y: windowHeight + earthLayer.clientHeight,
          });

          const earthTl = gsap
            .timeline()
            .from(earthLayer, {
              duration: 0.2, autoAlpha: 0
            }).to(earthLayer, {
              ease: "power1.inOut",
              y: windowHeight * 0.5 + earthLayer.clientHeight * 0.05,
              scale: 1
            },"-=0.2")
            .to(earthLayer, {
              ease: "power1.inOut",
              y: -earthLayer.clientHeight,
              scale: 0.7
            },"-=0.2")
          const earthFlutterTl = createFlutterTimeline();
          earthFlutterTl
            .to(earthInner, {
              duration: gsap.utils.random(1.8, 2.2),
              ease: "sine.inOut",
              y: `-=${gsap.utils.random(10, 20)}`,
              rotation: gsap.utils.random(-4, 4),
            })
            .to(
              earthInner,
              {
                duration: gsap.utils.random(1.8, 2.2),
                ease: "sine.inOut",
                y: `-=${gsap.utils.random(10, 20)}`,
              },
              "<"
            );
          timelineRefs.current.earth = gsap
            .timeline({
              scrollTrigger: {
                trigger: ".scene-2",
                endTrigger: ".scene-7",
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
              },
            })
            .add(earthTl);

          if (timelineRefs.current.earth.scrollTrigger) {
            timelineRefs.current.scrollTriggers.push(
              timelineRefs.current.earth.scrollTrigger
            );
          }

          // animation frame
          animateButterflyFrames();
        }
      );
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePositionRef.current = {
        x: e.clientX,
        y: e.clientY,
      };

      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const moveX = centerX - e.clientX;
      const moveY = centerY - e.clientY;

      if (elementsRef.current) {
        const elements = elementsRef.current;

        // butterfly
        if (elements.butterfly.inner) {
          gsap.to(elements.butterfly.inner, {
            x: moveX * mouseMoveRatios.current.butterfly,
            y: moveY * mouseMoveRatios.current.butterfly,
            duration: 0.5,
            ease: "power1.out",
          });
        }

        // brandj
        if (elements.brandj.inner) {
          gsap.to(elements.brandj.inner, {
            x: moveX * mouseMoveRatios.current.brandj,
            y: moveY * mouseMoveRatios.current.brandj,
            duration: 0.6,
            ease: "power1.out",
          });
        }

        // framer
        if (elements.framer.inner) {
          gsap.to(elements.framer.inner, {
            x: moveX * mouseMoveRatios.current.framer,
            y: moveY * mouseMoveRatios.current.framer,
            duration: 0.6,
            ease: "power1.out",
          });
        }

         // bag
         if (elements.bag.inner) {
          gsap.to(elements.bag.inner, {
            x: moveX * mouseMoveRatios.current.bag,
            y: moveY * mouseMoveRatios.current.bag,
            duration: 0.4,
            ease: "power1.out",
          });
        }

        // plate
        if (elements.plate.inner) {
          gsap.to(elements.plate.inner, {
            x: moveX * mouseMoveRatios.current.plate,
            y: moveY * mouseMoveRatios.current.plate,
            duration: 0.4,
            ease: "power1.out",
          });
        }

        // earth
        if (elements.earth.inner) {
          gsap.to(elements.earth.inner, {
            x: moveX * mouseMoveRatios.current.earth,
            y: moveY * mouseMoveRatios.current.earth,
            duration: 0.4,
            ease: "power1.out",
          });
        }
      }
    };

    initScrollTriggers();

    window.addEventListener("mousemove", handleMouseMove);

    let isResizing = false;

    const handleResize = debounce(() => {
      if (isResizing) return;
      isResizing = true;

      window.requestAnimationFrame(() => {
        initScrollTriggers();

        isResizing = false;
      });
    }, 300);

    window.addEventListener("resize", handleResize);

    return () => {
      clearScrollTriggers();

      gsap.globalTimeline.clear();

      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);

      if (contextRef.current?.revert) {
        contextRef.current.revert();
      }

      if (butterflyIntervalRef.current) {
        clearInterval(butterflyIntervalRef.current);
      }
    };
  }, []);
}
