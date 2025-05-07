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

const BIRD_FRAMES = [
  "/assets/images/home/brand__bird-001.webp",
  "/assets/images/home/brand__bird-002.webp",
  "/assets/images/home/brand__bird-003.webp",
  "/assets/images/home/brand__bird-004.webp",
  "/assets/images/home/brand__bird-005.webp",
  "/assets/images/home/brand__bird-006.webp",
  "/assets/images/home/brand__bird-005.webp",
  "/assets/images/home/brand__bird-004.webp",
  "/assets/images/home/brand__bird-003.webp",
  "/assets/images/home/brand__bird-002.webp",
];

const createFlutterTimeline = () =>
  gsap.timeline({
    repeat: -1,
    yoyo: true,
    repeatDelay: 0.5,
  });
// TODO: Step 1
interface MouseMoveRatios {
  butterfly: number;
  brandj: number;
  stickbottle: number;
  framer: number;
  bag: number;
  plate: number;
  earth: number;
  skyscraper: number;
  tree: number;
  stick: number;
  birds: number;
  bottle: number;
  jc: number;
  balloon: number;
}
// TODO: Step 2
export function useInitialLoader() {
  const butterflyIntervalRef = useRef<number>();
  const birdIntervalRef = useRef<number>();
  const contextRef = useRef<any>(null);
  const timelineRefs = useRef<{
    intro?: gsap.core.Timeline;
    butterfly?: gsap.core.Timeline;
    letterJ?: gsap.core.Timeline;
    framer?: gsap.core.Timeline;
    bag?: gsap.core.Timeline;
    plate?: gsap.core.Timeline;
    earth?: gsap.core.Timeline;
    skyscraper?: gsap.core.Timeline;
    tree?: gsap.core.Timeline;
    stick?: gsap.core.Timeline;
    birds?: gsap.core.Timeline;
    text01?: gsap.core.Timeline;
    bottle?: gsap.core.Timeline;
    balloon?: gsap.core.Timeline;
    jc?: gsap.core.Timeline;
    scrollTriggers: any[];
  }>({ scrollTriggers: [] });

  const elementsRef = useRef<any>(null);
// TODO: Step 3
  // Set mouse ratios
  const mouseMoveRatios = useRef<MouseMoveRatios>({
    butterfly: 0.05,
    brandj: 0.03,
    stickbottle: 0.02,
    framer: 0.02,
    bag: 0.15,
    plate: 0.25,
    earth: 0.25,
    skyscraper: 0.1,
    tree: 0.1,
    stick: 0.1,
    birds: 0.07,
    bottle: 0.1,
    jc: 0.1,
    balloon: 0.1,
  });

  const mousePositionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    timelineRefs.current.scrollTriggers = [];
// TODO: Step 4
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
      },
      skyscraper: {
        layer: document.querySelector('[data-js="skyscraper-layer"]'),
        inner: document.querySelector('[data-js="skyscraper-inner"]'),
        tower: document.querySelector('[data-js="skyscraper-tower"]'),
        glory: document.querySelector('[data-js="skyscraper-glory"]'),
      },
      tree: {
        layer: document.querySelector('[data-js="tree-layer"]'),
        inner: document.querySelector('[data-js="tree-inner"]'),
        sisters: document.querySelector('[data-js="tree-sisters"]'),
        cloud: document.querySelector('[data-js="tree-cloud"]'),
      },
      stick: {
        layer: document.querySelector('[data-js="stick-layer"]'),
        inner: document.querySelector('[data-js="stick-inner"]'),
        tree: document.querySelector('[data-js="stick-tree"]'),
        cloud: document.querySelector('[data-js="stick-cloud"]'),
      },
      birds: {
        layer: document.querySelector('[data-js="birds-layer"]'),
        inner: document.querySelector('[data-js="birds-inner"]'),
        frame: document.querySelectorAll('[data-js="birds-frame"]') as NodeListOf<HTMLImageElement>,
      },
      text01: {
        layer: document.querySelector('[data-js="text01-layer"]'),
        inner: document.querySelector('[data-js="text01-inner"]'),
      },
      bottle: {
        layer: document.querySelector('[data-js="bottle-layer"]'),
        inner: document.querySelector('[data-js="bottle-inner"]'),
        wash: document.querySelector('[data-js="bottle-wash"]'),
        o: document.querySelector('[data-js="bottle-o"]'),
      },
      jc: {
        layer: document.querySelector('[data-js="jc-layer"]'),
        inner: document.querySelector('[data-js="jc-inner"]'),
        cloud: document.querySelector('[data-js="jc-cloud"]'),
        j: document.querySelector('[data-js="jc-j"]'),
      },
      balloon: {
        layer: document.querySelector('[data-js="balloon-layer"]'),
        inner: document.querySelector('[data-js="balloon-inner"]'),
        flower: document.querySelector('[data-js="balloon-flower"]'),
      },
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

    // Animation bird
    const animateBirdFrames = () => {
      if (!elements.birds.frame || elements.birds.frame.length === 0) return;
    
      if (birdIntervalRef.current) {
        clearInterval(birdIntervalRef.current);
      }
    
      const birdFrameIndices = Array.from(elements.birds.frame).map(() => {
        return Math.floor(Math.random() * BIRD_FRAMES.length);
      });
    
      birdIntervalRef.current = window.setInterval(() => {
        elements.birds.frame.forEach((birdFrame, index) => {
          birdFrameIndices[index] = (birdFrameIndices[index] + 1) % BIRD_FRAMES.length;
          birdFrame.src = BIRD_FRAMES[birdFrameIndices[index]];
        });
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
// TODO: Step 5
      if (timelineRefs.current.intro) timelineRefs.current.intro.kill();
      if (timelineRefs.current.butterfly) timelineRefs.current.butterfly.kill();
      if (timelineRefs.current.letterJ) timelineRefs.current.letterJ.kill();
      if (timelineRefs.current.framer) timelineRefs.current.framer.kill();
      if (timelineRefs.current.bag) timelineRefs.current.bag.kill();
      if (timelineRefs.current.plate) timelineRefs.current.plate.kill();
      if (timelineRefs.current.earth) timelineRefs.current.earth.kill();
      if (timelineRefs.current.skyscraper)
        timelineRefs.current.skyscraper.kill();
      if (timelineRefs.current.tree) timelineRefs.current.tree.kill();
      if (timelineRefs.current.stick) timelineRefs.current.stick.kill();
      if (timelineRefs.current.birds) timelineRefs.current.birds.kill();
      if (timelineRefs.current.text01) timelineRefs.current.text01.kill();
      if (timelineRefs.current.bottle) timelineRefs.current.bottle.kill();
      if (timelineRefs.current.jc) timelineRefs.current.jc.kill();
      if (timelineRefs.current.balloon) timelineRefs.current.balloon.kill();
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

          // skyscraper
          const skyscraperLayer = elements.skyscraper.layer;
          const skyscraperInner = elements.skyscraper.inner;
          const skyscraperTower = elements.skyscraper.tower;
          const skyscraperGlory = elements.skyscraper.glory;

          // tree
          const treeLayer = elements.tree.layer;
          const treeInner = elements.tree.inner;
          const treeSisters = elements.tree.sisters;
          const treeCloud = elements.tree.cloud;

          // stick
          const stickLayer = elements.stick.layer;
          const stickInner = elements.stick.inner;
          const stickTree = elements.stick.tree;
          const stickCloud = elements.stick.cloud;

          // stick
          const birdsLayer = elements.birds.layer;
          const birdsInner = elements.birds.inner;
          const birdsFrame = elements.birds.frame;

          // text01
          const text01Layer = elements.text01.layer;
          const text01Inner = elements.text01.inner;

          // bottle
          const bottleLayer = elements.bottle.layer;
          const bottleInner = elements.bottle.inner;
          const bottleWash = elements.bottle.wash;
          const bottleO = elements.bottle.o;

          // jc
          const jcLayer = elements.jc.layer;
          const jcInner = elements.jc.inner;
          const jcCloud = elements.jc.cloud;
          const jcJ = elements.jc.j;

          // balloon
          const balloonLayer = elements.balloon.layer;
          const balloonInner = elements.balloon.inner;
          const balloonFlower = elements.balloon.flower;

          // TODO: Step 6
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
            !earthArm ||
            !skyscraperLayer ||
            !skyscraperInner ||
            !skyscraperTower ||
            !skyscraperGlory ||
            !treeLayer ||
            !treeInner ||
            !treeSisters ||
            !treeCloud ||
            !stickLayer ||
            !stickInner ||
            !stickTree ||
            !stickCloud ||
            !birdsLayer ||
            !birdsInner ||
            !birdsFrame ||
            !text01Layer ||
            !text01Inner ||
            !bottleLayer ||
            !bottleInner||
            !bottleWash ||
            !bottleO ||
            !jcLayer ||
            !jcInner ||
            !jcCloud ||
            !jcJ ||
            !balloonLayer ||
            !balloonInner ||
            !balloonFlower 
          ) {
            return {
              butterflyTl: null,
              letterJTl: null,
              framerTl: null,
              bagTl: null,
              plateTl: null,
              earthTl: null,
              skyscraperTl: null,
              treeTl: null,
              stickTl: null,
              birdsTl: null,
              text01Tl: null,
              bottleTl: null,
              jcTl: null,
              balloonTl: null,
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
          butterflyFlutterTl.to(butterflyInner, {
            duration: gsap.utils.random(1.8, 2.2),
            ease: "sine.inOut",
            y: `-=${gsap.utils.random(10, 20)}`,
            scale: gsap.utils.random(0.94, 0.98),
            rotation: gsap.utils.random(-4, 4),
          });
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
                endTrigger: ".scene-8",
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
          bagFlutterTl.to(bagInner, {
            duration: gsap.utils.random(1.8, 2.2),
            ease: "sine.inOut",
            y: `-=${gsap.utils.random(10, 20)}`,
            scale: gsap.utils.random(0.94, 0.98),
            rotation: gsap.utils.random(-4, 4),
          });
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
            y: -plateOne.clientHeight * 0.5,
            x: -plateOne.clientWidth * 1.25,
            opacity: 0,
          });

          gsap.set(plateEarth, {
            y: plateEarth.clientHeight * 0.5,
            x: plateEarth.clientWidth * 1.25,
            opacity: 0,
          });

          gsap.set(plateLayer, {
            scale: 1.5,
            x: windowWidth / 2 - plateLayer.clientWidth,
            y: isMd ? windowHeight * 0.1 :  windowHeight * 0.5
          });

          const plateTl = gsap
            .timeline()
            .to(plateLayer, {
              scale: 1
            })
            .to(plateOne, {
              x: -plateOne.clientWidth * 0.5,
              opacity: 1,
            })
            .to(
              plateEarth,
              {
                opacity: 1,
                x: -plateEarth.clientWidth * 0.28,
              },
              "<"
            )
            .to(plateLayer, {
              y: -windowHeight,
            });

          const plateFlutterTl = createFlutterTimeline();
          plateFlutterTl.to(plateInner, {
            duration: gsap.utils.random(1.8, 2.2),
            ease: "sine.inOut",
            y: `-=${gsap.utils.random(10, 20)}`,
            scale: gsap.utils.random(0.94, 0.98),
            rotation: gsap.utils.random(-4, 4),
          });
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
            y: -earthArm.clientHeight * 0.8 + earthEarth.clientHeight,
            x: -earthArm.clientWidth * 0.5,
          });

          gsap.set(earthJohn, {
            y: -earthJohn.clientHeight * 1.1,
            x: -earthJohn.clientWidth * 0.5,
            opacity: 0,
          });

          gsap.set(earthEarth, {
            y: -earthJohn.clientHeight * 0.5,
            x: -earthEarth.clientWidth * 0.5,
          });

          gsap.set(earthSunflower, {
            y: -earthSunflower.clientHeight * 0.3,
            x: -earthSunflower.clientWidth * 1.2,
          });

          gsap.set(earthLayer, {
            scale: 2,
            y: windowHeight * 1.5,
          });

          const earthTl = gsap
            .timeline()
            .to(
              earthLayer,
              {
                ease: "power1.inOut",
                y: windowHeight * 0.5 + earthLayer.clientHeight * 0.05,
                scale: 1,
              },
            )
            .to(
              earthJohn,
              {
                ease: "power1.inOut",
                opacity: 1,
              },
              "<"
            )
            .to(earthLayer, {
              ease: "power1.inOut",
              y: -earthLayer.clientHeight,
              scale: 0.7,
            });
          const earthFlutterTl = createFlutterTimeline();
          earthFlutterTl.to(earthInner, {
            duration: gsap.utils.random(1.8, 2.2),
            ease: "sine.inOut",
            y: `-=${gsap.utils.random(10, 20)}`,
            rotation: gsap.utils.random(-4, 4),
          });
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

          // ScrollTrigger skyscraper
          gsap.set(skyscraperGlory, {
            y: -skyscraperGlory.clientHeight * 0.5,
            x: -skyscraperGlory.clientWidth * 0.5,
          });

          gsap.set(skyscraperTower, {
            y: -skyscraperTower.clientHeight * 0.5,
            x: -skyscraperTower.clientWidth * 0.5,
          });

          gsap.set(skyscraperLayer, {
            scale: 1.5,
            y: windowHeight + skyscraperTower.clientHeight,
          });

          const skyscraperTl = gsap
            .timeline()
            .to(skyscraperLayer, {
              duration: 1,
          ease: "power1.inOut",
              y: Math.min(
                windowHeight * 0.5 + skyscraperTower.clientHeight * 2,
                windowHeight * 0.9
              ),
              scale: 1
            }).to(skyscraperLayer, {
              duration: 2,
          ease: "power1.inOut",
              y: -windowHeight * 2,
              scale: 0.75
            }).to(skyscraperGlory, {
              duration: 3, ease: "power1.inOut", rotation: 90
            }, "-=3");

          const skyscraperFlutterTl = createFlutterTimeline();
          skyscraperFlutterTl.to(skyscraperInner, {
            duration: gsap.utils.random(1.8, 2.2),
            ease: "sine.inOut",
            y: `-=${gsap.utils.random(10, 20)}`,
            scale: gsap.utils.random(0.94, 0.98),
          });
          timelineRefs.current.skyscraper = gsap
            .timeline({
              scrollTrigger: {
                trigger: ".scene-2",
                endTrigger: ".scene-9",
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
              },
            })
            .add(skyscraperTl);

          if (timelineRefs.current.skyscraper.scrollTrigger) {
            timelineRefs.current.scrollTriggers.push(
              timelineRefs.current.skyscraper.scrollTrigger
            );
          }

          // ScrollTrigger tree
          gsap.set(treeSisters, {
            y: -treeSisters.clientHeight * 0.5,
            x: -treeSisters.clientWidth * 0.5,
          });

          gsap.set(treeCloud, {
            y: -treeCloud.clientHeight * 1.8,
            x: -treeCloud.clientWidth * 1.1,
          });

          gsap.set(treeLayer, {
            x: windowWidth * 0.5 + treeCloud.clientWidth * 3,
            y: windowHeight + treeCloud.clientHeight,
            scale: 1.5
          });

          const treeTl = gsap
            .timeline().to(treeLayer, {
              ease: "power1.inOut",
                x: Math.min(
                  windowWidth * 0.5 + treeCloud.clientWidth * 1.1,
                  windowWidth
                ),
                y: windowHeight * 0.5 + treeCloud.clientHeight * 0.3,
                scale: 1,
            })
            .to(treeLayer, {
              ease: "power1.inOut",
                x: windowWidth * 0.5 + treeCloud.clientWidth,
                y: -treeCloud.clientHeight * 3,
            })
            ;

          const treeFlutterTl = createFlutterTimeline();
          treeFlutterTl.to(treeCloud, {
            duration: gsap.utils.random(2.6, 4),
            delay: gsap.utils.random(0, 0.2),
            ease: "power1.inOut",
            x: `-=${gsap.utils.random(40, 60)}`,
          });
          timelineRefs.current.tree = gsap
            .timeline({
              scrollTrigger: {
                trigger: ".scene-4",
                endTrigger: ".scene-8",
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
              },
            })
            .add(treeTl);

          if (timelineRefs.current.tree.scrollTrigger) {
            timelineRefs.current.scrollTriggers.push(
              timelineRefs.current.tree.scrollTrigger
            );
          }

          // ScrollTrigger stick

          gsap.set(stickTree, {
            y: -140,
            x: -10,
          });
          gsap.set(stickCloud, {
            y: -80,
            x: -20,
          });

          gsap.set(stickLayer, {
            x: isMd ? -(windowWidth * 0.5 - stickLayer.clientWidth * 2.5) :  -windowWidth * 0.7,
            y: windowHeight + stickLayer.clientHeight + stickTree.clientHeight,
            scale: 1.25
          });

          const stickTl = gsap
            .timeline().to(stickLayer, {
              ease: "power1.inOut",
                y: isMd ?  windowHeight * 0.5 + stickLayer.clientHeight * 0.6 : windowHeight * 0.5 + stickLayer.clientHeight * 2,
                scale: 1,
            })
            .to(stickLayer, {
              ease: "power1.inOut",
                y: isMd ? -stickLayer.clientHeight * 7 : -stickLayer.clientHeight * 7,
            });

          const stickFlutterTl = createFlutterTimeline();
          stickFlutterTl.to(stickCloud, {
            duration: gsap.utils.random(2.6, 4),
            delay: gsap.utils.random(0, 0.2),
            ease: "power1.inOut",
            x: `-=${gsap.utils.random(8, 12)}`,
          }).to(stickTree, {
            duration: gsap.utils.random(1.2, 2),
            ease: "power1.inOut",
            y: `-=${gsap.utils.random(30, 36)}`,
          },'<');
          timelineRefs.current.stick = gsap
            .timeline({
              scrollTrigger: {
                trigger: ".scene-2",
                endTrigger: ".scene-9",
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
              },
            })
            .add(stickTl);

          if (timelineRefs.current.stick.scrollTrigger) {
            timelineRefs.current.scrollTriggers.push(
              timelineRefs.current.stick.scrollTrigger
            );
          }

          // ScrollTrigger birds

          const birdsFlutterTl = createFlutterTimeline();
          birdsFrame.forEach((bird) => {
            gsap.set(bird, {
              scale: gsap.utils.random(0.8, 1.1),
              x: bird.clientWidth * gsap.utils.random(0.5, 2.2),
              y: bird.clientHeight * gsap.utils.random(-1.2, 1.2),
            });
            
            birdsFlutterTl.to(bird, {
              duration: gsap.utils.random(1.6, 2.2),
              ease: "sine.inOut",
              y: `+=${gsap.utils.random(-60, 60)}`,
            },'<');
          })

          gsap.set(birdsLayer, {
            x: windowWidth,
            y: birdsLayer.clientHeight,
          });

          const birdsTl = gsap
            .timeline().to(birdsLayer, {
              delay: 0.1,
              ease: "power1.inOut",
                y: -birdsLayer.clientHeight,
                x: -birdsLayer.clientWidth * 3,
                scale: 0.75,
            });

          
          timelineRefs.current.birds = gsap
            .timeline({
              scrollTrigger: {
                trigger: ".scene-3",
                endTrigger: ".scene-9",
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
              },
            })
            .add(birdsTl);

          if (timelineRefs.current.birds.scrollTrigger) {
            timelineRefs.current.scrollTriggers.push(
              timelineRefs.current.birds.scrollTrigger
            );
          }
          gsap.set(text01Inner.querySelectorAll('.char'), {
            duration: 6,
          autoAlpha: 0,
          x: "0.5rem",
          ease: "power1.inOut",
          })
          // ScrollTrigger text01
          const text01Tl = gsap
            .timeline().to(text01Inner.querySelectorAll('.char'), {
              duration: 6,
            autoAlpha: 1,
            x: "0.5rem",
            stagger: { each: 0.1 },
            ease: "power1.inOut",
            }).to(text01Inner.querySelectorAll('.char'), {
              duration: 6,
            autoAlpha: 0,
            x: "0.5rem",
            stagger: { each: 0.1 },
            ease: "power1.inOut",
            },"+=5");

          timelineRefs.current.text01 = gsap
            .timeline({
              scrollTrigger: {
                trigger: ".scene-6",
                endTrigger: ".scene-8",
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
              },
            })
            .add(text01Tl);

          if (timelineRefs.current.text01.scrollTrigger) {
            timelineRefs.current.scrollTriggers.push(
              timelineRefs.current.text01.scrollTrigger
            );
          }

          // ScrollTrigger bottle
          gsap.set(bottleWash, {
            x: 20,
            y: -180
          });

          gsap.set(bottleLayer, {
            x: isMd ? bottleLayer.clientWidth * 2 : bottleLayer.clientWidth * 0.5,
            y: windowHeight + bottleLayer.clientHeight,
          });

          const bottleTl = gsap
            .timeline().to(bottleLayer, {
              ease: "power1.inOut",
               y: windowHeight * 0.9,
            })
            .to(bottleLayer, {
              ease: "power1.inOut",
              y: -bottleLayer.clientHeight * 0.6,
            }).to(bottleLayer, {
              ease: "power1.inOut",
              y: -bottleLayer.clientHeight * 5,
            });

          const bottleFlutterTl = createFlutterTimeline();
          bottleFlutterTl.to(bottleO, {
            duration: gsap.utils.random(1.8, 2.2),
            ease: "sine.inOut",
            x: `-=${gsap.utils.random(10, 20)}`,
          });
          timelineRefs.current.bottle = gsap
            .timeline({
              scrollTrigger: {
                trigger: ".scene-4",
                endTrigger: ".scene-10",
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
              },
            })
            .add(bottleTl);

          if (timelineRefs.current.bottle.scrollTrigger) {
            timelineRefs.current.scrollTriggers.push(
              timelineRefs.current.bottle.scrollTrigger
            );
          }

          // ScrollTrigger jc
          gsap.set(jcCloud, {
            x: -20,
            y: -60,
          });

          gsap.set(jcLayer, {
            x: -windowWidth * 0.4,
            y: windowHeight + jcLayer.clientHeight,
          });

          const jcTl = gsap
            .timeline().to(jcLayer, {
              ease: "power1.inOut",
               y: -windowHeight,
            });

          const jcFlutterTl = createFlutterTimeline();
          jcFlutterTl.to(jcCloud, {
            duration: gsap.utils.random(2, 3.6),
            ease: "power1.inOut",
            x: `-=${gsap.utils.random(-20, 20)}`,
          }).to(jcJ, {
            duration: gsap.utils.random(2.2, 2.8),
            ease: "sine.inOut",
            y: `-=${gsap.utils.random(-30, 30)}`,
          }, '<');
          timelineRefs.current.jc = gsap
            .timeline({
              scrollTrigger: {
                trigger: ".scene-3",
                endTrigger: ".scene-13",
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
              },
            })
            .add(jcTl);

          if (timelineRefs.current.jc.scrollTrigger) {
            timelineRefs.current.scrollTriggers.push(
              timelineRefs.current.jc.scrollTrigger
            );
          }

          // ScrollTrigger balloon

          gsap.set(balloonLayer, {
            x: balloonLayer.clientWidth * 0.5,
            y: windowHeight + balloonLayer.clientHeight * 4,
          });

          const balloonTl = gsap
            .timeline().to(balloonLayer, {
              ease: "power1.inOut",
               y: -balloonLayer.clientHeight * 4,
            });

          const balloonFlutterTl = createFlutterTimeline();
          balloonFlutterTl.to(balloonFlower, {
            duration: gsap.utils.random(1.8, 2.2),
            ease: "sine.inOut",
            y: `-=${gsap.utils.random(60, 100)}`,
          });
          timelineRefs.current.balloon = gsap
            .timeline({
              scrollTrigger: {
                trigger: ".scene-4",
                endTrigger: ".scene-12",
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
              },
            })
            .add(balloonTl);

          if (timelineRefs.current.balloon.scrollTrigger) {
            timelineRefs.current.scrollTriggers.push(
              timelineRefs.current.balloon.scrollTrigger
            );
          }

          // TODO: step 8

          // animation frame
          animateButterflyFrames();
          animateBirdFrames();
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
            y: moveY * mouseMoveRatios.current.butterfly / 2,
            duration: 0.5,
            ease: "power1.out",
          });
        }

        // brandj
        if (elements.brandj.inner) {
          gsap.to(elements.brandj.inner, {
            x: moveX * mouseMoveRatios.current.brandj,
            y: moveY * mouseMoveRatios.current.brandj / 2,
            duration: 0.6,
            ease: "power1.out",
          });
        }

        // framer
        if (elements.framer.inner) {
          gsap.to(elements.framer.inner, {
            x: moveX * mouseMoveRatios.current.framer,
            y: moveY * mouseMoveRatios.current.framer / 2,
            duration: 0.6,
            ease: "power1.out",
          });
        }

        // bag
        if (elements.bag.inner) {
          gsap.to(elements.bag.inner, {
            x: moveX * mouseMoveRatios.current.bag,
            y: moveY * mouseMoveRatios.current.bag / 2,
            duration: 0.4,
            ease: "power1.out",
          });
        }

        // plate
        if (elements.plate.inner) {
          gsap.to(elements.plate.inner, {
            x: moveX * mouseMoveRatios.current.plate,
            y: moveY * mouseMoveRatios.current.plate / 2,
            duration: 0.4,
            ease: "power1.out",
          });
        }

        // earth
        if (elements.earth.inner) {
          gsap.to(elements.earth.inner, {
            x: moveX * mouseMoveRatios.current.earth,
            y: moveY * mouseMoveRatios.current.earth / 2,
            duration: 0.4,
            ease: "power1.out",
          });
        }

        // skyscraper
        if (elements.skyscraper.inner) {
          gsap.to(elements.skyscraper.inner, {
            x: moveX * mouseMoveRatios.current.skyscraper,
            y: moveY * mouseMoveRatios.current.skyscraper / 2,
            duration: 0.4,
            ease: "power1.out",
          });
        }

        // tree
        if (elements.tree.inner) {
          gsap.to(elements.tree.inner, {
            x: moveX * mouseMoveRatios.current.tree,
            y: moveY * mouseMoveRatios.current.tree / 2,
            duration: 0.4,
            ease: "power1.out",
          });
        }

        // stick
        if (elements.stick.inner) {
          gsap.to(elements.stick.inner, {
            x: moveX * mouseMoveRatios.current.stick,
            y: moveY * mouseMoveRatios.current.stick / 2,
            duration: 0.4,
            ease: "power1.out",
          });
        }

        // birds
        if (elements.birds.inner) {
          gsap.to(elements.birds.inner, {
            x: moveX * mouseMoveRatios.current.birds,
            y: moveY * mouseMoveRatios.current.birds / 2,
            duration: 0.4,
            ease: "power1.out",
          });
        }

        // bottle
        if (elements.bottle.inner) {
          gsap.to(elements.bottle.inner, {
            x: moveX * mouseMoveRatios.current.bottle,
            y: moveY * mouseMoveRatios.current.bottle / 2,
            duration: 0.4,
            ease: "power1.out",
          });
        }

        // jc
        if (elements.jc.inner) {
          gsap.to(elements.jc.inner, {
            x: moveX * mouseMoveRatios.current.jc,
            y: moveY * mouseMoveRatios.current.jc / 2,
            duration: 0.4,
            ease: "power1.out",
          });
        }

        // TODO: step 9
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
      if (birdIntervalRef.current) {
        clearInterval(birdIntervalRef.current);
      }
    };
  }, []);
}
