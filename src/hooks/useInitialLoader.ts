"use client";

import { useLayoutEffect, useRef } from "react";
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
    yoyo: !0,
    yoyoEase: !0,
    repeatRefresh: !1,
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
  windmill: number;
  argan: number;
  chair: number;
  working: number;
  brandm: number;
  berry: number;
  orange: number;
  scissors: number;
  hand: number;
  cloud: number;
  tractor: number;
  brando: number;
  girl: number;
  mirror: number;
  cloud02: number;
  cloud03: number;
  balloon02: number;
}

type TimelineKey =
  | "text01"
  | "text02"
  | "text03"
  | "text04"
  | "text05"
  | "text06"
  | "text07"
  | "text08"
  | "text09"
  | "text10"
  | "text11"
  | "intro"
  | "butterfly"
  | "letterJ"
  | "framer"
  | "bag"
  | "plate"
  | "earth"
  | "skyscraper"
  | "tree"
  | "stick"
  | "birds"
  | "bottle"
  | "balloon"
  | "jc"
  | "windmill"
  | "argan"
  | "chair"
  | "working"
  | "brandm"
  | "berry"
  | "orange"
  | "scissors"
  | "hand"
  | "cloud"
  | "tractor"
  | "brando"
  | "girl"
  | "mirror"
  | "cloud02"
  | "cloud03"
  | "balloon02"
  | "circleGroup"
  | "circle"
  | "circle1"
  | "circle2"
  | "circle3"
  | "circle4"
  | "circle5";

type TimelineRefs = {
  [key in TimelineKey]?: gsap.core.Timeline;
} & {
  scrollTriggers: any[];
};

// TODO: Step 2
export function useInitialLoader() {
  const butterflyIntervalRef = useRef<number>();
  const birdIntervalRef = useRef<number>();
  const contextRef = useRef<any>(null);
  const timelineRefs = useRef<TimelineRefs>({ scrollTriggers: [] });

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
    windmill: 0.1,
    argan: 0.14,
    chair: 0.11,
    working: 0.08,
    brandm: 0.04,
    berry: 0.1,
    orange: 0.1,
    scissors: 0.1,
    hand: 0.1,
    cloud: 0.15,
    tractor: 0.25,
    brando: 0.08,
    girl: 0.1,
    mirror: 0.1,
    cloud02: 0.15,
    cloud03: 0.15,
    balloon02: 0.1,
  });

  const mousePositionRef = useRef({ x: 0, y: 0 });

  useLayoutEffect(() => {
    timelineRefs.current.scrollTriggers = [];
    // TODO: Step 4
    const elements = {
      initialOverlay: {
        el: document.querySelector(
          '[data-js="initial-overlay"]',
        ) as HTMLElement,
        preloadImages: document.querySelectorAll(
          '[data-js="initial-overlay_preload"] img',
        ) as NodeListOf<HTMLImageElement>,
      },
      hero: {
        brand: document.querySelector('[data-js="text-brand"]'),
        heading: document.querySelector('[data-js="text-heading"]'),
        heading02: document.querySelector('[data-js="text-heading02"]'),
      },
      scenes: document.querySelector('[data-js="scenes"]'),
      text01: {
        inner: document.querySelector('[data-js="text01-inner"]'),
      },
      text02: {
        inner: document.querySelector('[data-js="text02-inner"]'),
      },
      text03: {
        inner: document.querySelector('[data-js="text03-inner"]'),
      },
      text04: {
        inner: document.querySelector('[data-js="text04-inner"]'),
      },
      text05: {
        inner: document.querySelector('[data-js="text05-inner"]'),
      },
      text06: {
        inner: document.querySelector('[data-js="text06-inner"]'),
      },
      text07: {
        inner: document.querySelector('[data-js="text07-inner"]'),
      },
      text08: {
        inner: document.querySelector('[data-js="text08-inner"]'),
      },
      text09: {
        inner: document.querySelector('[data-js="text09-inner"]'),
      },
      text10: {
        inner: document.querySelector('[data-js="text10-inner"]'),
        button: document.querySelector('[data-js="text10-button"]'),
        border: document.querySelector('[data-js="text10-border"]'),
      },
      text11: {
        inner: document.querySelector('[data-js="text11-inner"]'),
        button: document.querySelector('[data-js="text11-button"]'),
        border: document.querySelector('[data-js="text11-border"]'),
      },
      butterfly: {
        layer: document.querySelector('[data-js="butterfly-layer"]'),
        inner: document.querySelector('[data-js="butterfly-inner"]'),
        img: document.querySelector(
          '[data-js="butterfly-img"]',
        ) as HTMLImageElement,
      },
      brandj: {
        layer: document.querySelector('[data-js="brandj-layer"]'),
        inner: document.querySelector('[data-js="brandj-inner"]'),
        img: document.querySelector('[data-js="brandj-img"]'),
        stickbottle: document.querySelector('[data-js="brandj-stickbottle"]'),
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
        flu: document.querySelector('[data-js="bag-flu"]'),
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
        frame: document.querySelectorAll(
          '[data-js="birds-frame"]',
        ) as NodeListOf<HTMLImageElement>,
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
      windmill: {
        layer: document.querySelector('[data-js="windmill-layer"]'),
        inner: document.querySelector('[data-js="windmill-inner"]'),
        windmill: document.querySelector('[data-js="windmill-windmill"]'),
        wave: document.querySelector('[data-js="windmill-wave-block"]'),
      },
      argan: {
        layer: document.querySelector('[data-js="argan-layer"]'),
        inner: document.querySelector('[data-js="argan-inner"]'),
        bottle: document.querySelector('[data-js="argan-bottle"]'),
        cloud: document.querySelector('[data-js="argan-cloud"]'),
      },
      chair: {
        layer: document.querySelector('[data-js="chair-layer"]'),
        inner: document.querySelector('[data-js="chair-inner"]'),
        main: document.querySelector('[data-js="chair-main"]'),
        brush: document.querySelector('[data-js="chair-brush"]'),
      },
      working: {
        layer: document.querySelector('[data-js="working-layer"]'),
        inner: document.querySelector('[data-js="working-inner"]'),
        earth: document.querySelector('[data-js="working-earth"]'),
        leaves: document.querySelector('[data-js="working-leaves"]'),
        woman: document.querySelector('[data-js="working-woman"]'),
      },
      brandm: {
        layer: document.querySelector('[data-js="brandm-layer"]'),
        inner: document.querySelector('[data-js="brandm-inner"]'),
        main: document.querySelector('[data-js="brandm-main"]'),
      },
      berry: {
        layer: document.querySelector('[data-js="berry-layer"]'),
        inner: document.querySelector('[data-js="berry-inner"]'),
        "01": document.querySelector('[data-js="berry-01"]'),
        "02": document.querySelector('[data-js="berry-02"]'),
        "03": document.querySelector('[data-js="berry-03"]'),
      },
      orange: {
        layer: document.querySelector('[data-js="orange-layer"]'),
        inner: document.querySelector('[data-js="orange-inner"]'),
        "01": document.querySelector('[data-js="orange-01"]'),
        "02": document.querySelector('[data-js="orange-02"]'),
      },
      scissors: {
        layer: document.querySelector('[data-js="scissors-layer"]'),
        inner: document.querySelector('[data-js="scissors-inner"]'),
        body: document.querySelector('[data-js="scissors-body"]'),
        cactus: document.querySelector('[data-js="scissors-cactus"]'),
        front: document.querySelector('[data-js="scissors-head-front"]'),
        back: document.querySelector('[data-js="scissors-head-back"]'),
      },
      hand: {
        layer: document.querySelector('[data-js="hand-layer"]'),
        inner: document.querySelector('[data-js="hand-inner"]'),
        body: document.querySelector('[data-js="hand-body"]'),
        leaf: document.querySelector('[data-js="hand-leaf"]'),
      },
      cloud: {
        layer: document.querySelector('[data-js="cloud-layer"]'),
        inner: document.querySelector('[data-js="cloud-inner"]'),
        main: document.querySelector('[data-js="cloud-main"]'),
      },
      tractor: {
        layer: document.querySelector('[data-js="tractor-layer"]'),
        inner: document.querySelector('[data-js="tractor-inner"]'),
        flu: document.querySelector('[data-js="tractor-flu"]'),
        back: document.querySelector('[data-js="tractor-back"]'),
        butter: document.querySelector('[data-js="tractor-butter"]'),
        shampoo: document.querySelector('[data-js="tractor-shampoo"]'),
        bar: document.querySelector('[data-js="tractor-bar"]'),
        front: document.querySelector('[data-js="tractor-front"]'),
        lavender: document.querySelector('[data-js="tractor-lavender"]'),
      },
      brando: {
        layer: document.querySelector('[data-js="brando-layer"]'),
        inner: document.querySelector('[data-js="brando-inner"]'),
        main: document.querySelector('[data-js="brando-main"]'),
      },
      girl: {
        layer: document.querySelector('[data-js="girl-layer"]'),
        inner: document.querySelector('[data-js="girl-inner"]'),
        head: document.querySelector('[data-js="girl-head"]'),
        arm: document.querySelector('[data-js="girl-arm"]'),
      },
      mirror: {
        layer: document.querySelector('[data-js="mirror-layer"]'),
        inner: document.querySelector('[data-js="mirror-inner"]'),
        main: document.querySelector('[data-js="mirror-main"]'),
        mountain: document.querySelector('[data-js="mirror-mountain"]'),
        bottles: document.querySelector('[data-js="mirror-bottles"]'),
      },
      cloud02: {
        layer: document.querySelector('[data-js="cloud02-layer"]'),
        inner: document.querySelector('[data-js="cloud02-inner"]'),
        main: document.querySelector('[data-js="cloud02-main"]'),
      },
      cloud03: {
        layer: document.querySelector('[data-js="cloud03-layer"]'),
        inner: document.querySelector('[data-js="cloud03-inner"]'),
        main: document.querySelector('[data-js="cloud03-main"]'),
      },
      balloon02: {
        layer: document.querySelector('[data-js="balloon02-layer"]'),
        inner: document.querySelector('[data-js="balloon02-inner"]'),
        flower: document.querySelector('[data-js="balloon02-flower"]'),
      },
      circle: {
        group: document.querySelector("[data-text-transition-group-circle]"),
        ["0"]: document.querySelector("[data-text-transition-group-circle]"),
        ["1"]: document.querySelector('[data-text-transition-circle="1"]'),
        ["2"]: document.querySelector('[data-text-transition-circle="2"]'),
        ["3"]: document.querySelector('[data-text-transition-circle="3"]'),
        ["4"]: document.querySelector('[data-text-transition-circle="4"]'),
        ["5"]: document.querySelector('[data-text-transition-circle="5"]'),
      },
    };

    elementsRef.current = elements;

    if (elements.initialOverlay.el) {
      preloadImages(elements.initialOverlay.preloadImages)
        .then(() => {
          import("splitting").then((Splitting) => {
            Splitting.default();
            requestAnimationFrame(() => {
              gsap.to(elements.initialOverlay.el, { autoAlpha: 0 });
            });
            initScrollTriggers();
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
          birdFrameIndices[index] =
            (birdFrameIndices[index] + 1) % BIRD_FRAMES.length;
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
          "<",
        )
        .to(
          elements.hero.heading02,
          { y: -20, duration: 1.5, autoAlpha: 0, ease: "power3.out" },
          "<",
        );
    };

    const sceneIntro = createSceneIntro();

    const clearScrollTriggers = () => {
      timelineRefs.current.scrollTriggers.forEach((trigger) => trigger?.kill());
      timelineRefs.current.scrollTriggers = [];

      Object.keys(timelineRefs.current).forEach((key) => {
        if (key !== "scrollTriggers") {
          const timelineKey = key as TimelineKey;
          timelineRefs.current[timelineKey]?.kill();
        }
      });
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
              timelineRefs.current.intro.scrollTrigger,
            );
          }
          // text01
          const text01Inner = elements.text01.inner;
          if (text01Inner) {
            gsap.set(text01Inner.querySelectorAll(".char"), {
              duration: 6,
              autoAlpha: 0,
              x: "0.5rem",
              ease: "power1.inOut",
            });
            const text01Tl = gsap
              .timeline()
              .to(text01Inner.querySelectorAll(".char"), {
                duration: 6,
                autoAlpha: 1,
                x: "0.5rem",
                stagger: { each: 0.1 },
                ease: "power1.inOut",
              })
              .to(
                text01Inner.querySelectorAll(".char"),
                {
                  duration: 6,
                  autoAlpha: 0,
                  x: "0.5rem",
                  stagger: { each: 0.1 },
                  ease: "power1.inOut",
                },
                "+=5",
              );

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
                timelineRefs.current.text01.scrollTrigger,
              );
            }
          }
          // text02
          const text02Inner = elements.text02.inner;
          if (text02Inner) {
            gsap.set(text02Inner.querySelectorAll(".char"), {
              duration: 6,
              autoAlpha: 0,
              x: "0.5rem",
              ease: "power1.inOut",
            });
            const text02Tl = gsap
              .timeline()
              .to(text02Inner.querySelectorAll(".char"), {
                duration: 6,
                autoAlpha: 1,
                x: "0.5rem",
                stagger: { each: 0.1 },
                ease: "power1.inOut",
              })
              .to(
                text02Inner.querySelectorAll(".char"),
                {
                  duration: 6,
                  autoAlpha: 0,
                  x: "0.5rem",
                  stagger: { each: 0.1 },
                  ease: "power1.inOut",
                },
                "+=5",
              );

            timelineRefs.current.text02 = gsap
              .timeline({
                scrollTrigger: {
                  trigger: ".scene-8",
                  endTrigger: ".scene-10",
                  start: "top top",
                  end: "bottom bottom",
                  scrub: 1,
                },
              })
              .add(text02Tl);

            if (timelineRefs.current.text02.scrollTrigger) {
              timelineRefs.current.scrollTriggers.push(
                timelineRefs.current.text02.scrollTrigger,
              );
            }
          }

          // text03
          const text03Inner = elements.text03.inner;
          if (text03Inner) {
            gsap.set(text03Inner.querySelectorAll(".char"), {
              duration: 6,
              autoAlpha: 0,
              x: "0.5rem",
              ease: "power1.inOut",
            });
            const text03Tl = gsap
              .timeline()
              .to(text03Inner.querySelectorAll(".char"), {
                duration: 6,
                autoAlpha: 1,
                x: "0.5rem",
                stagger: { each: 0.1 },
                ease: "power1.inOut",
              })
              .to(
                text03Inner.querySelectorAll(".char"),
                {
                  duration: 6,
                  autoAlpha: 0,
                  x: "0.5rem",
                  stagger: { each: 0.1 },
                  ease: "power1.inOut",
                },
                "+=5",
              );

            timelineRefs.current.text03 = gsap
              .timeline({
                scrollTrigger: {
                  trigger: ".scene-10",
                  endTrigger: ".scene-12",
                  start: "top top",
                  end: "bottom bottom",
                  scrub: 1,
                },
              })
              .add(text03Tl);

            if (timelineRefs.current.text03.scrollTrigger) {
              timelineRefs.current.scrollTriggers.push(
                timelineRefs.current.text03.scrollTrigger,
              );
            }
          }
          // text04
          const text04Inner = elements.text04.inner;
          if (text04Inner) {
            gsap.set(text04Inner.querySelectorAll(".char"), {
              duration: 6,
              autoAlpha: 0,
              x: "0.5rem",
              ease: "power1.inOut",
            });
            const text04Tl = gsap
              .timeline()
              .to(text04Inner.querySelectorAll(".char"), {
                duration: 6,
                autoAlpha: 1,
                x: "0.5rem",
                stagger: { each: 0.1 },
                ease: "power1.inOut",
              })
              .to(
                text04Inner.querySelectorAll(".char"),
                {
                  duration: 6,
                  autoAlpha: 0,
                  x: "0.5rem",
                  stagger: { each: 0.1 },
                  ease: "power1.inOut",
                },
                "+=5",
              );

            timelineRefs.current.text04 = gsap
              .timeline({
                scrollTrigger: {
                  trigger: ".scene-12",
                  endTrigger: ".scene-14",
                  start: "top top",
                  end: "bottom bottom",
                  scrub: 1,
                },
              })
              .add(text04Tl);

            if (timelineRefs.current.text04.scrollTrigger) {
              timelineRefs.current.scrollTriggers.push(
                timelineRefs.current.text04.scrollTrigger,
              );
            }
          }
          // text05
          const text05Inner = elements.text05.inner;
          if (text05Inner) {
            gsap.set(text05Inner.querySelectorAll(".char"), {
              duration: 6,
              autoAlpha: 0,
              x: "0.5rem",
              ease: "power1.inOut",
            });
            const text05Tl = gsap
              .timeline()
              .to(text05Inner.querySelectorAll(".char"), {
                duration: 6,
                autoAlpha: 1,
                x: "0.5rem",
                stagger: { each: 0.1 },
                ease: "power1.inOut",
              })
              .to(
                text05Inner.querySelectorAll(".char"),
                {
                  duration: 6,
                  autoAlpha: 0,
                  x: "0.5rem",
                  stagger: { each: 0.1 },
                  ease: "power1.inOut",
                },
                "+=5",
              );

            timelineRefs.current.text05 = gsap
              .timeline({
                scrollTrigger: {
                  trigger: ".scene-14",
                  endTrigger: ".scene-16",
                  start: "top top",
                  end: "bottom bottom",
                  scrub: 1,
                },
              })
              .add(text05Tl);

            if (timelineRefs.current.text05.scrollTrigger) {
              timelineRefs.current.scrollTriggers.push(
                timelineRefs.current.text05.scrollTrigger,
              );
            }
          }
          // text06
          const text06Inner = elements.text06.inner;
          if (text06Inner) {
            gsap.set(text06Inner.querySelectorAll(".char"), {
              duration: 6,
              autoAlpha: 0,
              x: "0.5rem",
              ease: "power1.inOut",
            });
            const text06Tl = gsap
              .timeline()
              .to(text06Inner.querySelectorAll(".char"), {
                duration: 6,
                autoAlpha: 1,
                x: "0.5rem",
                stagger: { each: 0.1 },
                ease: "power1.inOut",
              })
              .to(
                text06Inner.querySelectorAll(".char"),
                {
                  duration: 6,
                  autoAlpha: 0,
                  x: "0.5rem",
                  stagger: { each: 0.1 },
                  ease: "power1.inOut",
                },
                "+=5",
              );

            timelineRefs.current.text06 = gsap
              .timeline({
                scrollTrigger: {
                  trigger: ".scene-16",
                  endTrigger: ".scene-18",
                  start: "top top",
                  end: "bottom bottom",
                  scrub: 1,
                },
              })
              .add(text06Tl);

            if (timelineRefs.current.text06.scrollTrigger) {
              timelineRefs.current.scrollTriggers.push(
                timelineRefs.current.text06.scrollTrigger,
              );
            }
          }

          // text07
          const text07Inner = elements.text07.inner;
          if (text07Inner) {
            gsap.set(text07Inner.querySelectorAll(".char"), {
              duration: 6,
              autoAlpha: 0,
              x: "0.5rem",
              ease: "power1.inOut",
            });
            const text07Tl = gsap
              .timeline()
              .to(text07Inner.querySelectorAll(".char"), {
                duration: 6,
                autoAlpha: 1,
                x: "0.5rem",
                stagger: { each: 0.1 },
                ease: "power1.inOut",
              })
              .to(
                text07Inner.querySelectorAll(".char"),
                {
                  duration: 6,
                  autoAlpha: 0,
                  x: "0.5rem",
                  stagger: { each: 0.1 },
                  ease: "power1.inOut",
                },
                "+=5",
              );

            timelineRefs.current.text07 = gsap
              .timeline({
                scrollTrigger: {
                  trigger: ".scene-18",
                  endTrigger: ".scene-20",
                  start: "top top",
                  end: "bottom bottom",
                  scrub: 1,
                },
              })
              .add(text07Tl);

            if (timelineRefs.current.text07.scrollTrigger) {
              timelineRefs.current.scrollTriggers.push(
                timelineRefs.current.text07.scrollTrigger,
              );
            }
          }

          // text08
          const text08Inner = elements.text08.inner;
          if (text08Inner) {
            gsap.set(text08Inner.querySelectorAll(".char"), {
              duration: 6,
              autoAlpha: 0,
              x: "0.5rem",
              ease: "power1.inOut",
            });
            const text08Tl = gsap
              .timeline()
              .to(text08Inner.querySelectorAll(".char"), {
                duration: 6,
                autoAlpha: 1,
                x: "0.5rem",
                stagger: { each: 0.1 },
                ease: "power1.inOut",
              })
              .to(
                text08Inner.querySelectorAll(".char"),
                {
                  duration: 6,
                  autoAlpha: 0,
                  x: "0.5rem",
                  stagger: { each: 0.1 },
                  ease: "power1.inOut",
                },
                "+=5",
              );

            timelineRefs.current.text08 = gsap
              .timeline({
                scrollTrigger: {
                  trigger: ".scene-20",
                  endTrigger: ".scene-22",
                  start: "top top",
                  end: "bottom bottom",
                  scrub: 1,
                },
              })
              .add(text08Tl);

            if (timelineRefs.current.text08.scrollTrigger) {
              timelineRefs.current.scrollTriggers.push(
                timelineRefs.current.text08.scrollTrigger,
              );
            }
          }

          // text09
          const text09Inner = elements.text09.inner;
          if (text09Inner) {
            gsap.set(text09Inner.querySelectorAll(".char"), {
              duration: 6,
              autoAlpha: 0,
              x: "0.5rem",
              ease: "power1.inOut",
            });
            const text09Tl = gsap
              .timeline()
              .to(text09Inner.querySelectorAll(".char"), {
                duration: 6,
                autoAlpha: 1,
                x: "0.5rem",
                stagger: { each: 0.1 },
                ease: "power1.inOut",
              })
              .to(
                text09Inner.querySelectorAll(".char"),
                {
                  duration: 6,
                  autoAlpha: 0,
                  x: "0.5rem",
                  stagger: { each: 0.1 },
                  ease: "power1.inOut",
                },
                "+=5",
              );

            timelineRefs.current.text09 = gsap
              .timeline({
                scrollTrigger: {
                  trigger: ".scene-22",
                  endTrigger: ".scene-24",
                  start: "top top",
                  end: "bottom bottom",
                  scrub: 1,
                },
              })
              .add(text09Tl);

            if (timelineRefs.current.text09.scrollTrigger) {
              timelineRefs.current.scrollTriggers.push(
                timelineRefs.current.text09.scrollTrigger,
              );
            }
          }

          // text10
          const text10Inner = elements.text10.inner;
          const text10Button = elements.text10.button;
          const text10Border = elements.text10.border;
          if (text10Inner && text10Button) {
            gsap.set(text10Inner.querySelectorAll(".char"), {
              duration: 6,
              autoAlpha: 0,
              x: "0.5rem",
              ease: "power1.inOut",
            });
            gsap.set(text10Button, {
              duration: 6,
              autoAlpha: 0,
              x: "0.5rem",
              ease: "power1.inOut",
            });
            gsap.set(text10Border, {
              autoAlpha: 0,
              scaleX: 0,
              ease: "power1.out",
            });
            gsap.set(text10Inner, {
              pointerEvents: "none",
            });
            const text10Tl = gsap
              .timeline()
              .to(text10Inner, {
                pointerEvents: "auto",
              })
              .to(
                text10Inner.querySelectorAll(".char"),
                {
                  duration: 6,
                  autoAlpha: 1,
                  x: "0.5rem",
                  stagger: { each: 0.1 },
                  ease: "power1.inOut",
                },
                "<",
              )
              .to(text10Border, {
                duration: 3,
                autoAlpha: 1,
                scaleX: 1,
                transformOrigin: "center left",
                ease: "power1.out",
              })
              .to(
                text10Button,
                {
                  duration: 6,
                  autoAlpha: 1,
                  x: "0.5rem",
                  ease: "power1.inOut",
                },
                "<",
              )
              .to(
                text10Inner.querySelectorAll(".char"),
                {
                  duration: 6,
                  autoAlpha: 0,
                  x: "0.5rem",
                  stagger: { each: 0.1 },
                  ease: "power1.inOut",
                },
                "+=5",
              )
              .to(text10Border, {
                duration: 3,
                autoAlpha: 0,
                scaleX: 0,
                transformOrigin: "center right",
                ease: "power1.out",
              })
              .to(text10Button, {
                duration: 6,
                autoAlpha: 0,
                x: "0.5rem",
                ease: "power1.inOut",
              });

            timelineRefs.current.text10 = gsap
              .timeline({
                scrollTrigger: {
                  trigger: ".scene-24",
                  endTrigger: ".scene-26",
                  start: "top top",
                  end: "bottom bottom",
                  scrub: 1,
                },
              })
              .add(text10Tl);

            if (timelineRefs.current.text10.scrollTrigger) {
              timelineRefs.current.scrollTriggers.push(
                timelineRefs.current.text10.scrollTrigger,
              );
            }
          }

          // text11
          const text11Inner = elements.text11.inner;
          const text11Button = elements.text11.button;
          const text11Border = elements.text11.border;
          if (text11Inner && text11Button) {
            gsap.set(text11Inner.querySelectorAll(".char"), {
              duration: 6,
              autoAlpha: 0,
              x: "0.5rem",
              ease: "power1.inOut",
            });
            gsap.set(text11Button, {
              duration: 6,
              autoAlpha: 0,
              x: "0.5rem",
              ease: "power1.inOut",
            });
            gsap.set(text11Border, {
              autoAlpha: 0,
              scaleX: 0,
              ease: "power1.out",
            });
            gsap.set(text11Inner, {
              pointerEvents: "none",
            });
            const text11Tl = gsap
              .timeline()
              .to(text11Inner, {
                pointerEvents: "auto",
              })
              .to(
                text11Inner.querySelectorAll(".char"),
                {
                  duration: 6,
                  autoAlpha: 1,
                  x: "0.5rem",
                  stagger: { each: 0.1 },
                  ease: "power1.inOut",
                },
                "<",
              )
              .to(text11Border, {
                duration: 3,
                autoAlpha: 1,
                scaleX: 1,
                transformOrigin: "center left",
                ease: "power1.out",
              })
              .to(
                text11Button,
                {
                  duration: 6,
                  autoAlpha: 1,
                  x: "0.5rem",
                  ease: "power1.inOut",
                },
                "<",
              )
              .to(
                text11Inner.querySelectorAll(".char"),
                {
                  duration: 6,
                  autoAlpha: 0,
                  x: "0.5rem",
                  stagger: { each: 0.1 },
                  ease: "power1.inOut",
                },
                "+=5",
              )
              .to(text11Border, {
                duration: 3,
                autoAlpha: 0,
                scaleX: 0,
                transformOrigin: "center right",
                ease: "power1.out",
              })
              .to(text11Button, {
                duration: 6,
                autoAlpha: 0,
                x: "0.5rem",
                ease: "power1.inOut",
              });

            timelineRefs.current.text11 = gsap
              .timeline({
                scrollTrigger: {
                  trigger: ".scene-26",
                  endTrigger: ".scene-28",
                  start: "top top",
                  end: "bottom bottom",
                  scrub: 1,
                },
              })
              .add(text11Tl);

            if (timelineRefs.current.text11.scrollTrigger) {
              timelineRefs.current.scrollTriggers.push(
                timelineRefs.current.text11.scrollTrigger,
              );
            }
          }

          // Butterfly
          const butterflyLayer = elements.butterfly.layer;
          const butterflyInner = elements.butterfly.inner;

          if (butterflyLayer) {
            gsap.set(butterflyLayer, {
              y: windowHeight + butterflyLayer.clientHeight,
              x: butterflyLayer.clientWidth * 0.25,
              scale: 1.5,
            });

            const butterflyTl = gsap
              .timeline()
              .to(butterflyLayer, {
                x: -butterflyLayer.clientWidth * 0.5,
                y: butterflyLayer.clientHeight * 1.5,
                scale: 1,
                ease: "power1.inOut",
              })
              .to(butterflyLayer, {
                y: -butterflyLayer.clientHeight * 1.5,
                x: -butterflyLayer.clientWidth * 0.8,
                ease: "power1.in",
              });

            const butterflyFlutterTl = createFlutterTimeline();
            butterflyFlutterTl.to(butterflyInner, {
              duration: "random(2.2, 2.8)",
              ease: "sine.inOut",
              y: "random(10, 40)",
              scale: "random(0.94, 0.98)",
              rotation: "random(-10, 10)",
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
                timelineRefs.current.butterfly.scrollTrigger,
              );
            }
          }

          // BrandJ
          const brandjLayer = elements.brandj.layer;
          const brandjImg = elements.brandj.img;
          const brandjStickbottle = elements.brandj.stickbottle;
          if (brandjLayer) {
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
            letterJFlutterTl.to(brandjImg, {
              duration: "random(2.2, 2.8)",
              ease: "power1.inOut",
              y: "random(10, 30)",
            });

            const stickbottleFlutterTl = createFlutterTimeline();
            stickbottleFlutterTl.to(brandjStickbottle, {
              duration: "random(2, 2.3)",
              ease: "power1.inOut",
              y: "random(-20, 30)",
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
                timelineRefs.current.letterJ.scrollTrigger,
              );
            }
          }

          // Framer
          const framerLayer = elements.framer.layer;
          const framerFramer = elements.framer.framer;
          const framerAvocado = elements.framer.avocado;
          if (framerLayer) {
            gsap.set(framerLayer, {
              y: windowHeight + framerLayer.clientHeight * 6,
              x: windowWidth * 0.5 - framerLayer.clientWidth,
            });

            const framerFlutterTl = createFlutterTimeline();
            framerFlutterTl.to(framerFramer, {
              duration: "random(2.2, 2.8)",
              ease: "sine.inOut",
              y: "random(10, 30)",
              scale: "random(0.94, 0.99)",
              rotation: "random(-4, 4)",
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
            avocadoFlutterTl.to(framerAvocado, {
              duration: "random(1.6, 1.9)",
              ease: "power1.out",
              y: "random(20, -60)",
              rotation: "random(-40, -20)",
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
                timelineRefs.current.framer.scrollTrigger,
              );
            }
          }

          // Bag
          const bagLayer = elements.bag.layer;
          const bagFlu = elements.bag.flu;
          if (bagLayer) {
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
                y: -bagLayer.clientHeight * 1.5,
                ease: "power1.inOut",
              });

            const bagFlutterTl = createFlutterTimeline();
            bagFlutterTl.to(bagFlu, {
              duration: 2,
              ease: "sine.inOut",
              y: "random(10, 29)",
              scale: "random(0.96, 0.98)",
              rotation: "random(-4, 4)",
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
                timelineRefs.current.bag.scrollTrigger,
              );
            }
          }

          // Plate
          const plateLayer = elements.plate.layer;
          const plateOne = elements.plate.one;
          const plateEarth = elements.plate.earth;
          if (plateLayer && plateOne && plateEarth) {
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
              y: windowHeight * 0.1,
            });

            const plateTl = gsap
              .timeline()
              .to(plateLayer, {
                scale: 1,
              })
              .to(plateOne, {
                x: -plateOne.clientWidth * 0.1,
                opacity: 1,
              })
              .to(
                plateEarth,
                {
                  opacity: 1,
                  x: plateEarth.clientWidth * 0.2,
                },
                "<",
              )
              .to(plateLayer, {
                y: -windowHeight,
              });

            const plateOneFlutterTl = createFlutterTimeline();
            plateOneFlutterTl.to(plateOne, {
              duration: "random(1.8, 2.2)",
              ease: "sine.inOut",
              y: `-=${gsap.utils.random(10, 20)}`,
              rotation: "random(-5, 5)",
            });

            const plateEarthFlutterTl = createFlutterTimeline();
            plateEarthFlutterTl.to(plateEarth, {
              duration: "random(1.8, 2.4)",
              ease: "sine.inOut",
              y: `-=${gsap.utils.random(20, 30)}`,
              rotation: "random(-5, 5)",
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
                timelineRefs.current.plate.scrollTrigger,
              );
            }
          }
          // Earth
          const earthLayer = elements.earth.layer;
          const earthJohn = elements.earth.john;
          const earthEarth = elements.earth.earth;
          const earthSunflower = elements.earth.sunflower;
          const earthArm = elements.earth.arm;
          if (
            earthLayer &&
            earthJohn &&
            earthEarth &&
            earthSunflower &&
            earthArm
          ) {
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
              .to(earthLayer, {
                ease: "power1.inOut",
                y: windowHeight * 0.5 + earthLayer.clientHeight * 0.05,
                scale: 1,
              })
              .to(
                earthJohn,
                {
                  ease: "power1.inOut",
                  opacity: 1,
                },
                "<",
              )
              .to(earthLayer, {
                ease: "power1.inOut",
                y: -earthLayer.clientHeight,
                scale: 0.7,
              });
            const earthEarthFlutterTl = createFlutterTimeline();
            earthEarthFlutterTl.to(earthEarth, {
              duration: "random(2.2, 2.8)",
              ease: "sine.inOut",
              rotation: gsap.utils.random(-4, 4),
            });

            const earthSunflowerFlutterTl = createFlutterTimeline();
            earthSunflowerFlutterTl.to(earthSunflower, {
              duration: "random(2.2, 2.8)",
              ease: "sine.inOut",
              y: `-=${gsap.utils.random(5, 10)}`,
              rotation: "random(0, -4)",
              scaleX: "random(0.9, 0.96)",
            });

            const earthArmFlutterTl = createFlutterTimeline();
            earthArmFlutterTl.to(earthArm, {
              duration: "random(1.8, 2.2)",
              ease: "sine.inOut",
              y: `-=${gsap.utils.random(10, 20)}`,
              scaleX: "random(0.93, 0.96)",
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
                timelineRefs.current.earth.scrollTrigger,
              );
            }
          }

          // skyscraper
          const skyscraperLayer = elements.skyscraper.layer;
          const skyscraperTower = elements.skyscraper.tower;
          const skyscraperGlory = elements.skyscraper.glory;
          if (skyscraperGlory && skyscraperTower) {
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
                  windowHeight * 0.9,
                ),
                scale: 1,
              })
              .to(skyscraperLayer, {
                duration: 2,
                ease: "power1.inOut",
                y: -windowHeight * 2,
                scale: 0.75,
              })
              .to(
                skyscraperGlory,
                {
                  duration: 3,
                  ease: "power1.inOut",
                  rotation: 90,
                },
                "-=3",
              );

            const skyscraperFlutterTl = createFlutterTimeline();
            skyscraperFlutterTl.to(skyscraperTower, {
              duration: "random(2.2, 2.8)",
              ease: "sine.inOut",
              y: `-=${gsap.utils.random(10, 20)}`,
              scale: "random(0.94, 0.98)",
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
                timelineRefs.current.skyscraper.scrollTrigger,
              );
            }
          }
          // tree
          const treeLayer = elements.tree.layer;
          const treeSisters = elements.tree.sisters;
          const treeCloud = elements.tree.cloud;
          if (treeSisters && treeCloud) {
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
              scale: 1.5,
            });

            const treeTl = gsap
              .timeline()
              .to(treeLayer, {
                ease: "power1.inOut",
                x: Math.min(
                  windowWidth * 0.5 + treeCloud.clientWidth * 1.1,
                  windowWidth,
                ),
                y: windowHeight * 0.5 + treeCloud.clientHeight * 0.3,
                scale: 1,
              })
              .to(treeLayer, {
                ease: "power1.inOut",
                x: windowWidth * 0.5 + treeCloud.clientWidth,
                y: -treeCloud.clientHeight * 3,
              });
            const treeFlutterTl = createFlutterTimeline();
            treeFlutterTl.to(treeCloud, {
              duration: "random(2.6, 4)",
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
                timelineRefs.current.tree.scrollTrigger,
              );
            }
          }

          // stick
          const stickLayer = elements.stick.layer;
          const stickTree = elements.stick.tree;
          const stickCloud = elements.stick.cloud;
          if (stickLayer && stickTree) {
            gsap.set(stickLayer, {
              x: isMd ? -windowWidth * 0.2 : -windowWidth * 0.1,
              y:
                windowHeight + stickLayer.clientHeight + stickTree.clientHeight,
              scale: 1.25,
            });

            const stickTl = gsap
              .timeline()
              .to(stickLayer, {
                ease: "power1.inOut",
                y: isMd
                  ? windowHeight * 0.5 + stickLayer.clientHeight * 0.6
                  : windowHeight * 0.5 + stickLayer.clientHeight * 2,
                scale: 1,
              })
              .to(stickLayer, {
                ease: "power1.inOut",
                y: isMd
                  ? -stickLayer.clientHeight * 7
                  : -stickLayer.clientHeight * 7,
              });

            const stickCloudFlutterTl = createFlutterTimeline();
            stickCloudFlutterTl.to(stickCloud, {
              duration: gsap.utils.random(2.6, 4),
              ease: "power1.inOut",
              x: `-=${gsap.utils.random(4, 24)}`,
            });

            const stickTreeFlutterTl = createFlutterTimeline();
            stickTreeFlutterTl.to(stickTree, {
              duration: gsap.utils.random(1.2, 2),
              ease: "power1.inOut",
              y: `-=${gsap.utils.random(30, 36)}`,
            });

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
                timelineRefs.current.stick.scrollTrigger,
              );
            }
          }

          // Birds
          const birdsLayer = elements.birds.layer;
          const birdsFrame = elements.birds.frame;
          if (birdsLayer) {
            birdsFrame.forEach((bird) => {
              const birdsFlutterTl = createFlutterTimeline();

              gsap.set(bird, {
                scale: gsap.utils.random(0.8, 1.1),
                x: bird.clientWidth * gsap.utils.random(0.5, 2.2),
                y: bird.clientHeight * gsap.utils.random(-1.2, 1.2),
              });

              birdsFlutterTl.to(bird, {
                duration: "random(1.6, 2.2)",
                ease: "sine.inOut",
                y: `+=${gsap.utils.random(-60, 60)}`,
              });
            });

            gsap.set(birdsLayer, {
              x: windowWidth * 0.5 + birdsLayer.clientWidth * 1.5,
              y: windowHeight * 0.5 + birdsLayer.clientHeight * 1.5,
            });

            const birdsTl = gsap.timeline().to(birdsLayer, {
              delay: 0.1,
              ease: "power1.inOut",
              y: -birdsLayer.clientHeight,
              x: -birdsLayer.clientWidth * 4,
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
                timelineRefs.current.birds.scrollTrigger,
              );
            }
          }

          // Bottle
          const bottleLayer = elements.bottle.layer;
          const bottleWash = elements.bottle.wash;
          const bottleO = elements.bottle.o;
          if (bottleLayer) {
            gsap.set(bottleWash, {
              x: 20,
              y: -180,
            });

            gsap.set(bottleLayer, {
              x: isMd ? bottleLayer.clientWidth * 2 : bottleLayer.clientWidth,
              y: windowHeight + bottleLayer.clientHeight,
            });

            const bottleTl = gsap
              .timeline()
              .to(bottleLayer, {
                ease: "power1.inOut",
                y: windowHeight * 0.9,
              })
              .to(bottleLayer, {
                ease: "power1.inOut",
                y: -bottleLayer.clientHeight * 0.6,
              })
              .to(bottleLayer, {
                ease: "power1.inOut",
                y: -bottleLayer.clientHeight * 5,
              });

            const bottleFlutterTl = createFlutterTimeline();
            bottleFlutterTl.to(bottleO, {
              duration: "random(2.2, 2.8)",
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
                timelineRefs.current.bottle.scrollTrigger,
              );
            }
          }

          // JC
          const jcLayer = elements.jc.layer;
          const jcCloud = elements.jc.cloud;
          const jcJ = elements.jc.j;
          if (jcLayer) {
            gsap.set(jcCloud, {
              x: -60,
              y: -60,
            });

            gsap.set(jcLayer, {
              x: isMd ? -windowWidth * 0.4 : -windowWidth * 0.3,
              y: windowHeight + jcLayer.clientHeight,
            });

            const jcTl = gsap.timeline().to(jcLayer, {
              ease: "power1.inOut",
              y: -windowHeight,
            });

            const jcFlutterTl = createFlutterTimeline();
            jcFlutterTl.to(jcCloud, {
              duration: "random(2, 3.6)",
              ease: "power1.inOut",
              x: `+=${gsap.utils.random(-20, 30)}`,
            });

            const jcJTl = createFlutterTimeline();
            jcJTl.to(jcJ, {
              duration: "random(2.2, 2.8)",
              ease: "sine.inOut",
              y: `-=${gsap.utils.random(-30, 30)}`,
            });
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
                timelineRefs.current.jc.scrollTrigger,
              );
            }
          }
          // balloon
          const balloonLayer = elements.balloon.layer;
          const balloonFlower = elements.balloon.flower;
          if (balloonLayer) {
            gsap.set(balloonLayer, {
              x: balloonLayer.clientWidth,
              y: windowHeight + balloonLayer.clientHeight * 4,
            });

            const balloonTl = gsap.timeline().to(balloonLayer, {
              ease: "power1.inOut",
              y: -(balloonLayer.clientHeight * 4),
            });

            const balloonFlutterTl = createFlutterTimeline();
            balloonFlutterTl.to(balloonFlower, {
              duration: "random(2.2, 2.8)",
              ease: "sine.inOut",
              y: `-=${gsap.utils.random(60, 100)}`,
            });
            timelineRefs.current.balloon = gsap
              .timeline({
                scrollTrigger: {
                  trigger: ".scene-5",
                  endTrigger: ".scene-13",
                  start: "top top",
                  end: "bottom bottom",
                  scrub: 1,
                },
              })
              .add(balloonTl);

            if (timelineRefs.current.balloon.scrollTrigger) {
              timelineRefs.current.scrollTriggers.push(
                timelineRefs.current.balloon.scrollTrigger,
              );
            }
          }

          // Windmill
          const windmillLayer = elements.windmill.layer;
          const windmillWave = elements.windmill.wave;
          if (windmillLayer) {
            gsap.set(windmillLayer, {
              x: Math.min(
                windmillLayer.clientWidth * 2.5,
                windowWidth * 0.5 - windmillLayer.clientWidth * 0.25,
              ),
              y: windowHeight + windmillLayer.clientHeight * 4,
            });

            const windmillTl = gsap.timeline().to(windmillLayer, {
              ease: "power1.inOut",
              y: -(windmillLayer.clientHeight * 2.5),
              scale: 0.75,
            });

            const windmillFlutterTl = createFlutterTimeline();
            windmillFlutterTl.to(windmillWave, {
              duration: "random(2.2, 2.8)",
              ease: "sine.inOut",
              scaleY: `-=${gsap.utils.random(0.1, 0.2)}`,
            });
            timelineRefs.current.windmill = gsap
              .timeline({
                scrollTrigger: {
                  trigger: ".scene-4",
                  endTrigger: ".scene-12",
                  start: "top top",
                  end: "bottom bottom",
                  scrub: 1,
                },
              })
              .add(windmillTl);

            if (timelineRefs.current.windmill.scrollTrigger) {
              timelineRefs.current.scrollTriggers.push(
                timelineRefs.current.windmill.scrollTrigger,
              );
            }
          }

          // argan
          const arganLayer = elements.argan.layer;
          const arganBottle = elements.argan.bottle;
          const arganCloud = elements.argan.cloud;
          if (arganLayer && arganBottle) {
            gsap.set(arganCloud, {
              x: arganBottle.clientWidth * 0.6,
              y: arganBottle.clientHeight * 0.4,
            });

            gsap.set(arganLayer, {
              x: -Math.max(
                windowWidth * 0.25,
                windowWidth * 0.5 - arganLayer.clientWidth * 1.25,
              ),
              y: windowHeight + arganLayer.clientHeight * 4,
            });

            const arganTl = gsap.timeline().to(arganLayer, {
              ease: "power1.inOut",
              y: -(arganLayer.clientHeight * 4),
              scale: 0.5,
            });

            const arganCloudFlutterTl = createFlutterTimeline();
            arganCloudFlutterTl.to(arganCloud, {
              duration: "random(1.6, 2.2)",
              ease: "sine.inOut",
              x: `-=${gsap.utils.random(-30, -40)}`,
            });

            const arganBottleFlutterTl = createFlutterTimeline();
            arganBottleFlutterTl.to(arganBottle, {
              duration: "random(1.8, 2.2)",
              ease: "sine.inOut",
              y: `-=${gsap.utils.random(30, 40)}`,
            });

            timelineRefs.current.argan = gsap
              .timeline({
                scrollTrigger: {
                  trigger: ".scene-6",
                  endTrigger: ".scene-14",
                  start: "top top",
                  end: "bottom bottom",
                  scrub: 1,
                },
              })
              .add(arganTl);

            if (timelineRefs.current.argan.scrollTrigger) {
              timelineRefs.current.scrollTriggers.push(
                timelineRefs.current.argan.scrollTrigger,
              );
            }
          }

          // chair
          const chairLayer = elements.chair.layer;
          const chairMain = elements.chair.main;
          const chairBrush = elements.chair.brush;
          if (chairLayer && chairMain) {
            gsap.set(chairBrush, {
              x: chairMain.clientWidth / 1.5,
            });

            gsap.set(chairLayer, {
              x: isMd
                ? -(windowWidth * 0.5 - chairLayer.clientWidth * 0.5)
                : -windowWidth * 2,
              y: windowHeight + chairLayer.clientHeight * 2,
              scale: 1.5,
            });
            const chairTl = gsap.timeline().to(chairLayer, {
              ease: "power1.inOut",
              x: isMd ? chairLayer.clientWidth * 4 : chairLayer.clientWidth * 2,
              y: -chairLayer.clientHeight,
              scale: 1,
            });

            const chairMainFlutterTl = createFlutterTimeline();
            chairMainFlutterTl.to(chairMain, {
              duration: "random(2, 3.6)",
              ease: "power1.inOut",
              y: `+=${gsap.utils.random(20, 30)}`,
              rotation: "random(-5, -10)",
            });

            const chairBrushFlutterTl = createFlutterTimeline();
            chairBrushFlutterTl.to(chairBrush, {
              duration: "random(2, 3.6)",
              ease: "sine.inOut",
              y: `+=${gsap.utils.random(30, 60)}`,
              rotation: "random(10, 20)",
            });

            timelineRefs.current.chair = gsap
              .timeline({
                scrollTrigger: {
                  trigger: ".scene-6",
                  endTrigger: ".scene-13",
                  start: "top top",
                  end: "bottom bottom",
                  scrub: 1,
                },
              })
              .add(chairTl);

            if (timelineRefs.current.chair.scrollTrigger) {
              timelineRefs.current.scrollTriggers.push(
                timelineRefs.current.chair.scrollTrigger,
              );
            }
          }

          // working
          const workingLayer = elements.working.layer;
          const workingEarth = elements.working.earth;
          const workingWoman = elements.working.woman;
          const workingLeaves = elements.working.leaves;
          if (workingLayer) {
            gsap.set(workingEarth, {
              scale: 0.75,
            });

            gsap.set(workingLayer, {
              x: isMd
                ? -(windowWidth * 0.5 - workingLayer.clientWidth * 1.1)
                : 0,
              y: windowHeight + workingLayer.clientHeight,
              scale: 0.5,
            });
            const workingTl = gsap.timeline().to(workingLayer, {
              ease: "power1.inOut",
              y: -(windowHeight * 0.5 + workingLayer.clientHeight),
              scale: 1,
            });

            const workingWomanFlutterTl = createFlutterTimeline();
            workingWomanFlutterTl.to(workingWoman, {
              duration: "random(2, 3.6)",
              ease: "power1.inOut",
              y: `+=${gsap.utils.random(20, 30)}`,
              rotation: "random(-5, -10)",
            });

            const workingLeavesFlutterTl = createFlutterTimeline();
            workingLeavesFlutterTl.to(workingLeaves, {
              duration: "random(2, 3.6)",
              ease: "sine.inOut",
              y: `+=${gsap.utils.random(30, 60)}`,
              rotation: "random(10, 20)",
            });

            timelineRefs.current.working = gsap
              .timeline({
                scrollTrigger: {
                  trigger: ".scene-10",
                  endTrigger: ".scene-12",
                  start: "top top",
                  end: "bottom bottom",
                  scrub: 1,
                },
              })
              .add(workingTl);

            if (timelineRefs.current.working.scrollTrigger) {
              timelineRefs.current.scrollTriggers.push(
                timelineRefs.current.working.scrollTrigger,
              );
            }
          }
          // brandm
          const brandmLayer = elements.brandm.layer;
          const brandmMain = elements.brandm.main;
          if (brandmLayer) {
            gsap.set(brandmLayer, {
              x: -brandmLayer.clientWidth * 2,
              y: windowHeight + brandmLayer.clientHeight,
              scale: 0.5,
            });
            const brandmTl = gsap.timeline().to(brandmLayer, {
              ease: "power1.inOut",
              y: -(windowHeight * 0.5 + brandmLayer.clientHeight),
              scale: 1,
            });

            const brandmFlutterTl = createFlutterTimeline();
            brandmFlutterTl.to(brandmMain, {
              duration: "random(2, 3.6)",
              ease: "power1.inOut",
              y: `+=${gsap.utils.random(20, 30)}`,
            });
            timelineRefs.current.brandm = gsap
              .timeline({
                scrollTrigger: {
                  trigger: ".scene-10",
                  endTrigger: ".scene-13",
                  start: "top top",
                  end: "bottom bottom",
                  scrub: 1,
                },
              })
              .add(brandmTl);

            if (timelineRefs.current.brandm.scrollTrigger) {
              timelineRefs.current.scrollTriggers.push(
                timelineRefs.current.brandm.scrollTrigger,
              );
            }
          }
          // berry
          const berryLayer = elements.berry.layer;
          const berry01 = elements.berry["01"];
          const berry02 = elements.berry["02"];
          const berry03 = elements.berry["03"];
          if (berryLayer) {
            gsap.set(berryLayer, {
              x: -windowWidth * 0.5 + berryLayer.clientWidth,
              scale: 1.25,
              autoAlpha: 0,
            });
            const berryTl = gsap
              .timeline()
              .to(berryLayer, {
                ease: "power1.inOut",
                x: -windowWidth * 0.2 + berryLayer.clientWidth,
                y: -(windowHeight * 0.4 - berryLayer.clientHeight),
                scale: 1,
              })
              .to(
                berryLayer,
                { duration: 0.2, ease: "power1.inOut", autoAlpha: 1 },
                "-=0.4",
              )
              .to(berryLayer, {
                ease: "power1.inOut",
                x: -windowWidth * 0.1 + berryLayer.clientWidth,
                y: -(windowHeight * 0.5 + berryLayer.clientHeight * 4),
                scale: 0.75,
              });

            const berry01FlutterTl = createFlutterTimeline();
            berry01FlutterTl.to(berry01, {
              duration: "random(2.2, 2.8)",
              ease: "sine.inOut",
              y: "random(-6, -10)",
            });
            const berry02FlutterTl = createFlutterTimeline();
            berry02FlutterTl.to(berry02, {
              duration: "random(2.2, 2.8)",
              ease: "sine.inOut",
              y: "random(0, 15)",
            });
            const berry03FlutterTl = createFlutterTimeline();
            berry03FlutterTl.to(berry03, {
              duration: "random(2.2, 2.8)",
              ease: "sine.inOut",
              y: "random(0, 5)",
            });
            timelineRefs.current.berry = gsap
              .timeline({
                scrollTrigger: {
                  trigger: ".scene-11",
                  endTrigger: ".scene-15",
                  start: "top top",
                  end: "bottom bottom",
                  scrub: 1,
                },
              })
              .add(berryTl);

            if (timelineRefs.current.berry.scrollTrigger) {
              timelineRefs.current.scrollTriggers.push(
                timelineRefs.current.berry.scrollTrigger,
              );
            }
          }
          // orange
          const orangeLayer = elements.orange.layer;
          const orange01 = elements.orange["01"];
          const orange02 = elements.orange["02"];
          if (orangeLayer) {
            gsap.set(orangeLayer, {
              x: -windowWidth * 0.2 + orangeLayer.clientWidth,
              scale: 1.25,
              autoAlpha: 0,
            });
            const orangeTl = gsap
              .timeline()
              .to(orangeLayer, {
                ease: "power1.inOut",
                x: -orangeLayer.clientWidth * 8,
                y: -orangeLayer.clientHeight * 0.8,
                scale: 0.75,
              })
              .to(
                orangeLayer,
                { duration: 0.2, ease: "power1.inOut", autoAlpha: 1 },
                "-=0.3",
              )
              .to(orangeLayer, {
                ease: "power1.inOut",
                y: -(windowHeight * 0.5 + orangeLayer.clientHeight * 3),
                scale: 0.5,
              });

            const orange01FlutterTl = createFlutterTimeline();
            orange01FlutterTl.to(orange01, {
              duration: "random(2.2, 2.8)",
              ease: "sine.inOut",
              y: "random(-6, -10)",
            });
            const orange02FlutterTl = createFlutterTimeline();
            orange02FlutterTl.to(orange02, {
              duration: "random(2.2, 2.8)",
              ease: "sine.inOut",
              y: "random(0, 15)",
            });
            timelineRefs.current.orange = gsap
              .timeline({
                scrollTrigger: {
                  trigger: ".scene-10",
                  endTrigger: ".scene-15",
                  start: "top top",
                  end: "bottom bottom",
                  scrub: 1,
                },
              })
              .add(orangeTl);

            if (timelineRefs.current.orange.scrollTrigger) {
              timelineRefs.current.scrollTriggers.push(
                timelineRefs.current.orange.scrollTrigger,
              );
            }
          }
          // scissors
          const scissorsLayer = elements.scissors.layer;
          const scissorsBody = elements.scissors.body;
          const scissorsFront = elements.scissors.front;
          const scissorsBack = elements.scissors.back;
          const scissorsCactus = elements.scissors.cactus;
          if (scissorsLayer) {
            gsap.set(scissorsLayer, {
              y: windowHeight + scissorsLayer.clientHeight * 2,
            });
            const scissorsTl = gsap
              .timeline()
              .to(scissorsLayer, {
                ease: "power1.inOut",
                y: windowHeight * 0.5 + scissorsLayer.clientHeight,
              })
              .to(scissorsLayer, {
                ease: "power1.in",
                y: -(windowHeight + scissorsLayer.clientHeight * 0.75),
                scale: 0.75,
              });

            let t = gsap.utils.random(1, 1.6),
              s = gsap.utils.random(4, 8),
              h = gsap.utils.random(10, 20),
              n = gsap.utils.random(1, 2);
            const scissorsBodyFlutterTl = createFlutterTimeline();
            scissorsBodyFlutterTl.to(scissorsBody, {
              duration: n,
              ease: "sine.inOut",
              y: `-=${gsap.utils.random(7, 10)}`,
              scaleY: "random(0.90, 0.96)",
            });

            const scissorsFrontFlutterTl = createFlutterTimeline();
            scissorsFrontFlutterTl
              .to(scissorsFront, {
                duration: t,
                ease: "expo.inOut",
                rotation: s + h,
              })
              .to(
                scissorsBack,
                { duration: t, ease: "expo.inOut", rotation: -s + h },
                `-=${t}`,
              );

            const scissorsCactusFlutterTl = createFlutterTimeline();
            scissorsCactusFlutterTl.to(scissorsCactus, {
              duration: n,
              ease: "sine.inOut",
              y: `-=${gsap.utils.random(7, 10)}`,
              scaleY: "random(0.96, 0.99)",
            });
            timelineRefs.current.scissors = gsap
              .timeline({
                scrollTrigger: {
                  trigger: ".scene-10",
                  endTrigger: ".scene-14",
                  start: "top top",
                  end: "bottom bottom",
                  scrub: 1,
                },
              })
              .add(scissorsTl);

            if (timelineRefs.current.scissors.scrollTrigger) {
              timelineRefs.current.scrollTriggers.push(
                timelineRefs.current.scissors.scrollTrigger,
              );
            }
          }

          // hand
          const handLayer = elements.hand.layer;
          const handBody = elements.hand.body;
          const handLeaf = elements.hand.leaf;
          if (handLayer) {
            gsap.set(handLayer, {
              y: windowHeight + handLayer.clientHeight * 2,
            });
            const handTl = gsap
              .timeline()
              .to(handLayer, {
                ease: "power1.inOut",
                y: windowHeight - handLayer.clientHeight * 0.2,
              })
              .to(handLayer, {
                ease: "power1.inOut",
                x: handLayer.clientWidth,
                y: -(windowHeight + handLayer.clientHeight * 2),
                scale: 0.75,
              });

            const handBodyFlutterTl = createFlutterTimeline();
            handBodyFlutterTl.to(handBody, {
              duration: "random(1.8, 2.2)",
              ease: "sine.inOut",
              y: `-=${gsap.utils.random(10, 20)}`,
              scaleX: "random(0.92, 0.94)",
            });

            const handLeafFlutterTl = createFlutterTimeline();
            handLeafFlutterTl.to(handLeaf, {
              duration: "random(2, 3.6)",
              ease: "power1.inOut",
              y: `-=${gsap.utils.random(20, 60)}`,
              scaleX: "random(0.9, 0.96)",
            });

            timelineRefs.current.hand = gsap
              .timeline({
                scrollTrigger: {
                  trigger: ".scene-11",
                  endTrigger: ".scene-15",
                  start: "top top",
                  end: "bottom bottom",
                  scrub: 1,
                },
              })
              .add(handTl);

            if (timelineRefs.current.hand.scrollTrigger) {
              timelineRefs.current.scrollTriggers.push(
                timelineRefs.current.hand.scrollTrigger,
              );
            }
          }
          // cloud
          const cloudLayer = elements.cloud.layer;
          const cloudMain = elements.cloud.main;
          if (cloudLayer) {
            gsap.set(cloudLayer, {
              y: windowHeight + cloudLayer.clientHeight * 3,
            });
            const cloudTl = gsap
              .timeline()
              .to(cloudLayer, {
                ease: "power1.inOut",
                y: windowHeight + cloudLayer.clientHeight,
              })
              .to(cloudLayer, {
                ease: "power1.inOut",
                y: -(windowHeight + cloudLayer.clientHeight * 2),
              });

            const cloudMainFlutterTl = createFlutterTimeline();
            cloudMainFlutterTl.to(cloudMain, {
              duration: "random(2.2, 2.8)",
              ease: "sine.inOut",
              y: "random(-30, 30)",
            });

            timelineRefs.current.cloud = gsap
              .timeline({
                scrollTrigger: {
                  trigger: ".scene-11",
                  endTrigger: ".scene-15",
                  start: "top top",
                  end: "bottom bottom",
                  scrub: 1,
                },
              })
              .add(cloudTl);

            if (timelineRefs.current.cloud.scrollTrigger) {
              timelineRefs.current.scrollTriggers.push(
                timelineRefs.current.cloud.scrollTrigger,
              );
            }
          }
          // tractor
          const tractorLayer = elements.tractor.layer;
          const tractorFlu = elements.tractor.flu;
          const tractorButter = elements.tractor.butter;
          const tractorShampoo = elements.tractor.shampoo;
          const tractorBar = elements.tractor.bar;
          const tractorLavender = elements.tractor.lavender;
          if (tractorLayer) {
            gsap.set(tractorLayer, {
              y: windowHeight + tractorLayer.clientHeight * 2,
            });
            const tractorTl = gsap
              .timeline()
              .to(tractorLayer, {
                ease: "power1.inOut",
                y: -(windowHeight * 0.5 - tractorLayer.clientHeight * 1.5),
              })
              .to(tractorLayer, {
                ease: "power1.inOut",
                y: -(windowHeight + tractorLayer.clientHeight * 2),
                scale: 0.8,
              });

            const tractorFluFlutterTl = createFlutterTimeline();
            tractorFluFlutterTl
              .to(tractorFlu, {
                duration: 0.05,
                ease: "steps (1)",
                y: 4,
              })
              .to(tractorFlu, {
                duration: 0.05,
                ease: "steps (1)",
                y: 0,
              });

            [tractorButter, tractorShampoo, tractorBar].forEach((t) => {
              const tractorFlutterTl = createFlutterTimeline();
              tractorFlutterTl
                .to(t, {
                  delay: "random(0, 0.2)",
                  duration: 0.05,
                  y: `+=${gsap.utils.random(2, 6)}`,
                  rotation: "random(-1, 1)",
                })
                .to(t, { duration: 0.05, y: 0, rotation: 0 });
            });

            const tractorLavenderFlutterTl = createFlutterTimeline();
            tractorLavenderFlutterTl
              .to(tractorLavender, {
                delay: "random(0, 0.2)",
                duration: 0.05,
                y: `+=${gsap.utils.random(2, 4)}`,
              })
              .to(tractorLavender, {
                duration: 0.05,
                y: 0,
              });

            timelineRefs.current.tractor = gsap
              .timeline({
                scrollTrigger: {
                  trigger: ".scene-13",
                  endTrigger: ".scene-17",
                  start: "top top",
                  end: "bottom bottom",
                  scrub: 1,
                },
              })
              .add(tractorTl);

            if (timelineRefs.current.tractor.scrollTrigger) {
              timelineRefs.current.scrollTriggers.push(
                timelineRefs.current.tractor.scrollTrigger,
              );
            }
          }
          // brando
          const brandoLayer = elements.brando.layer;
          const brandoMain = elements.brando.main;
          if (brandoLayer) {
            gsap.set(brandoLayer, {
              y: windowHeight + brandoLayer.clientHeight * 0.5,
            });
            const brandoTl = gsap.timeline().to(brandoLayer, {
              ease: "power1.inOut",
              y: -(windowHeight + brandoLayer.clientHeight * 2),
            });

            const brandoMainFlutterTl = createFlutterTimeline();
            brandoMainFlutterTl.to(brandoMain, {
              duration: "random(2.2, 2.8)",
              ease: "sine.inOut",
              y: "random(-30, 30)",
            });

            timelineRefs.current.brando = gsap
              .timeline({
                scrollTrigger: {
                  trigger: ".scene-13",
                  endTrigger: ".scene-19",
                  start: "top top",
                  end: "bottom bottom",
                  scrub: 1,
                },
              })
              .add(brandoTl);

            if (timelineRefs.current.brando.scrollTrigger) {
              timelineRefs.current.scrollTriggers.push(
                timelineRefs.current.brando.scrollTrigger,
              );
            }
          }

          // girl
          const girlLayer = elements.girl.layer;
          const girlHead = elements.girl.head;
          const girlArm = elements.girl.arm;
          if (girlLayer) {
            gsap.set(girlLayer, {
              x: windowWidth * 0.5,
              y: windowHeight + girlLayer.clientHeight * 0.5,
              scale: 0.75,
            });
            const girlTl = gsap
              .timeline()
              .to(
                girlLayer,
                {
                  ease: "power1.inOut",
                  x: isMd
                    ? girlLayer.clientWidth * 0.1
                    : girlLayer.clientWidth * 0.3,
                  y: isMd
                    ? girlLayer.clientHeight * 0.2
                    : girlLayer.clientHeight * 0.9,
                  scale: 1,
                },
                "+=0.01",
              )
              .to(girlLayer, {
                ease: "power1.inOut",
                y: -girlLayer.clientHeight,
                x: girlLayer.clientWidth * gsap.utils.random(0.2, 1),
                scale: 1.5,
              })
              .to(girlLayer, { duration: 0.2, autoAlpha: 0 }, "-=0.2");

            const girlHeadFlutterTl = createFlutterTimeline();
            girlHeadFlutterTl.to(girlHead, {
              duration: "random(2.2, 2.8)",
              ease: "sine.inOut",
              y: "random(-30, 30)",
            });

            timelineRefs.current.girl = gsap
              .timeline({
                scrollTrigger: {
                  trigger: ".scene-14",
                  endTrigger: ".scene-20",
                  start: "top top",
                  end: "bottom bottom",
                  scrub: 1,
                },
              })
              .add(girlTl);

            if (timelineRefs.current.girl.scrollTrigger) {
              timelineRefs.current.scrollTriggers.push(
                timelineRefs.current.girl.scrollTrigger,
              );
            }
          }
          // mirror
          const mirrorLayer = elements.mirror.layer;
          const mirrorMain = elements.mirror.main;
          const mirrorMountain = elements.mirror.mountain;
          const mirrorBottles = elements.mirror.bottles;
          if (mirrorLayer && mirrorMain && mirrorBottles && mirrorMountain) {
            gsap.set(mirrorLayer, {
              x: windowWidth * 0.5,
              y: mirrorLayer.clientHeight,
              scale: 3,
              alpha: 0,
            });
            gsap.set(mirrorMountain, {
              y: mirrorMountain.clientHeight * 2,
            });
            gsap.set(mirrorBottles, {
              y: mirrorBottles.clientHeight * 2,
            });
            const mirrorTl = gsap
              .timeline()
              .to(mirrorLayer, {
                duration: 1,
                ease: "power1.out",
                x: mirrorLayer.clientWidth,
                y: 0,
                scale: 1,
              })
              .to(
                mirrorLayer,
                { duration: 0.2, ease: "power1.out", alpha: 1 },
                "-=0.6",
              )
              .to(
                [mirrorMountain, mirrorBottles],
                { stagger: 0.01, y: 0 },
                "-=0.5",
              )
              .to(mirrorLayer, {
                duration: 1,
                ease: "power1.in",
                x: -(mirrorLayer.clientWidth * 1.2),
                scale: 0.5,
                alpha: 0.75,
              });

            timelineRefs.current.mirror = gsap
              .timeline({
                scrollTrigger: {
                  trigger: ".scene-16",
                  endTrigger: ".scene-23",
                  start: "top top",
                  end: "bottom bottom",
                  scrub: 1,
                },
              })
              .add(mirrorTl);

            if (timelineRefs.current.mirror.scrollTrigger) {
              timelineRefs.current.scrollTriggers.push(
                timelineRefs.current.mirror.scrollTrigger,
              );
            }
          }

          // cloud02
          const cloud02Layer = elements.cloud02.layer;
          const cloud02Main = elements.cloud02.main;
          if (cloud02Layer) {
            gsap.set(cloud02Layer, {
              x: windowWidth,
              scale: 0.5,
            });
            const cloud02Tl = gsap
              .timeline()
              .to(cloud02Layer, {
                duration: 7,
                ease: "power1.inOut",
                x: -(windowWidth * 0.5 - cloud02Layer.clientWidth * 0.75),
                scale: 1,
              })
              .to(cloud02Layer, {
                duration: 3,
                ease: "power1.inOut",
                scale: 1.25,
                x: -(windowWidth * 0.5 - cloud02Layer.clientWidth * 0.5),
              })
              .to(cloud02Layer, {
                duration: 2,
                ease: "power1.inOut",
                scale: 1.5,
                x: -(windowWidth * 0.5 - cloud02Layer.clientWidth * 0.2),
                y: cloud02Layer.clientHeight * 0.5,
              })
              .to(cloud02Layer, { duration: 2, alpha: 0 }, "-=1");

            const cloud02MainFlutterTl = createFlutterTimeline();
            cloud02MainFlutterTl.to(cloud02Main, {
              duration: "random(2.2, 2.8)",
              ease: "sine.inOut",
              y: "random(-30, 30)",
            });

            timelineRefs.current.cloud02 = gsap
              .timeline({
                scrollTrigger: {
                  trigger: ".scene-18",
                  endTrigger: ".scene-28",
                  start: "top top",
                  end: "bottom bottom",
                  scrub: 1,
                },
              })
              .add(cloud02Tl);

            if (timelineRefs.current.cloud02.scrollTrigger) {
              timelineRefs.current.scrollTriggers.push(
                timelineRefs.current.cloud02.scrollTrigger,
              );
            }
          }

          // cloud03
          const cloud03Layer = elements.cloud03.layer;
          const cloud03Main = elements.cloud03.main;
          if (cloud03Layer) {
            gsap.set(cloud03Layer, {
              x: windowWidth,
              scale: 0.5,
            });
            const cloud03Tl = gsap
              .timeline()
              .to(cloud03Layer, {
                duration: 7,
                ease: "power1.inOut",
                x: -cloud03Layer.clientWidth * 0.25,
                scale: 1,
              })
              .to(cloud03Layer, {
                duration: 3,
                ease: "power1.inOut",
                scale: 1.25,
                x: -cloud03Layer.clientWidth * 0.15,
              })
              .to(cloud03Layer, {
                duration: 2,
                ease: "power1.inOut",
                x: windowWidth * 0.5 - cloud03Layer.clientWidth * 0.1,
                y: -cloud03Layer.clientHeight * 0.5,
              })
              .to(cloud03Layer, { duration: 2, alpha: 0 }, "-=1");

            const cloud03MainFlutterTl = createFlutterTimeline();
            cloud03MainFlutterTl.to(cloud03Main, {
              duration: "random(2.2, 2.8)",
              ease: "sine.inOut",
              y: "random(-30, 30)",
            });

            timelineRefs.current.cloud03 = gsap
              .timeline({
                scrollTrigger: {
                  trigger: ".scene-18",
                  endTrigger: ".scene-28",
                  start: "top top",
                  end: "bottom bottom",
                  scrub: 1,
                },
              })
              .add(cloud03Tl);

            if (timelineRefs.current.cloud03.scrollTrigger) {
              timelineRefs.current.scrollTriggers.push(
                timelineRefs.current.cloud03.scrollTrigger,
              );
            }
          }

          // balloon02
          const balloon02Layer = elements.balloon02.layer;
          const balloon02Flower = elements.balloon02.flower;
          if (balloon02Layer) {
            gsap.set(balloon02Layer, {
              y: windowHeight * 0.5 + balloon02Layer.clientHeight,
            });

            const balloon02Tl = gsap.timeline().to(balloon02Layer, {
              ease: "power1.inOut",
              y: -(balloon02Layer.clientHeight * 4),
            });

            const balloon02FlutterTl = createFlutterTimeline();
            balloon02FlutterTl.to(balloon02Flower, {
              duration: "random(2.2, 2.8)",
              ease: "sine.inOut",
              y: `-=${gsap.utils.random(60, 100)}`,
            });
            timelineRefs.current.balloon02 = gsap
              .timeline({
                scrollTrigger: {
                  trigger: ".scene-21",
                  endTrigger: ".scene-24",
                  start: "top top",
                  end: "bottom bottom",
                  scrub: 1,
                },
              })
              .add(balloon02Tl);

            if (timelineRefs.current.balloon02.scrollTrigger) {
              timelineRefs.current.scrollTriggers.push(
                timelineRefs.current.balloon02.scrollTrigger,
              );
            }
          }

          // circle
          const circleGroup = elements.circle.group;
          const circle = elements.circle["0"];
          const circle1 = elements.circle["1"];
          const circle2 = elements.circle["2"];
          const circle3 = elements.circle["3"];
          const circle4 = elements.circle["4"];
          const circle5 = elements.circle["5"];
          if (
            circleGroup &&
            circle &&
            circle1 &&
            circle2 &&
            circle3 &&
            circle4 &&
            circle5
          ) {
            // circleGroup
            gsap.set(circleGroup, {
              autoAlpha: 1,
              pointerEvents: "none",
            });
            const circleGroupTl = gsap.timeline().to(circleGroup, {
              ease: "power1.inOut",
              autoAlpha: 1,
              pointerEvents: "auto",
            });
            timelineRefs.current.circleGroup = gsap
              .timeline({
                scrollTrigger: {
                  trigger: ".scene-21",
                  endTrigger: ".scene-28",
                  start: "top top",
                  end: "bottom bottom",
                  scrub: 1,
                  onLeaveBack: () => {
                    gsap.set([circle2, circle3, circle4, circle5], {
                      scale: 0.8,
                      autoAlpha: 0,
                    });
                  },
                  onLeave: () => {
                    gsap.set(circle, { autoAlpha: 0, scale: 1.25 });
                  },
                },
              })
              .add(circleGroupTl);
            if (timelineRefs.current.circleGroup.scrollTrigger) {
              timelineRefs.current.scrollTriggers.push(
                timelineRefs.current.circleGroup.scrollTrigger,
              );
            }

            // circleTl
            gsap.set(circleGroup, {
              x: windowWidth,
            });
            const circleTl = gsap.timeline().to(circleGroup, {
              ease: "power1.inOut",
              x: 0,
              duration: 4,
            });
            timelineRefs.current.circle = gsap
              .timeline({
                scrollTrigger: {
                  trigger: ".scene-20",
                  endTrigger: ".scene-24",
                  start: "top top",
                  end: "bottom bottom",
                  scrub: 1,
                },
              })
              .add(circleTl);
            if (timelineRefs.current.circle.scrollTrigger) {
              timelineRefs.current.scrollTriggers.push(
                timelineRefs.current.circle.scrollTrigger,
              );
            }

            // circle2Tl
            gsap.set([circle2, circle4], {
              scale: 0.8,
              autoAlpha: 0,
            });
            const circle2Tl = gsap.timeline().to([circle2, circle4], {
              scale: 1,
              autoAlpha: 1,
              ease: "circ.inOut",
              stagger: 0.04,
            });
            timelineRefs.current.circle2 = gsap
              .timeline({
                scrollTrigger: {
                  trigger: ".scene-24",
                  endTrigger: ".scene-25",
                  start: "top top",
                  end: "bottom bottom",
                  scrub: 1,
                },
              })
              .add(circle2Tl);
            if (timelineRefs.current.circle2.scrollTrigger) {
              timelineRefs.current.scrollTriggers.push(
                timelineRefs.current.circle2.scrollTrigger,
              );
            }

            // circle3Tl
            gsap.set([circle3, circle5], {
              scale: 0.8,
              autoAlpha: 0,
            });
            const circle3Tl = gsap.timeline().to([circle3, circle5], {
              scale: 1,
              autoAlpha: 1,
              ease: "circ.inOut",
              stagger: 0.04,
            });
            timelineRefs.current.circle3 = gsap
              .timeline({
                scrollTrigger: {
                  trigger: ".scene-26",
                  endTrigger: ".scene-27",
                  start: "top top",
                  end: "bottom bottom",
                  scrub: 1,
                },
              })
              .add(circle3Tl);
            if (timelineRefs.current.circle3.scrollTrigger) {
              timelineRefs.current.scrollTriggers.push(
                timelineRefs.current.circle3.scrollTrigger,
              );
            }

            // circle4Tl
            const circle4Tl = gsap.timeline().to(circle, {
              autoAlpha: 0,
              scale: 1.25,
              ease: "circ.inOut",
              stagger: { each: 0.04, from: "end" },
            });
            timelineRefs.current.circle4 = gsap
              .timeline({
                scrollTrigger: {
                  trigger: ".scene-27",
                  endTrigger: ".scene-28",
                  start: "top top",
                  end: "bottom bottom",
                  scrub: 1,
                },
              })
              .add(circle4Tl);
            if (timelineRefs.current.circle4.scrollTrigger) {
              timelineRefs.current.scrollTriggers.push(
                timelineRefs.current.circle4.scrollTrigger,
              );
            }
          }
          // TODO: step 8

          // animation frame
          animateButterflyFrames();
          animateBirdFrames();
        },
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

        const elementsToAnimate: (keyof MouseMoveRatios)[] = [
          "argan",
          "chair",
          "brandm",
          "berry",
          "orange",
          "hand",
          "scissors",
          "balloon",
          "jc",
          "bottle",
          "birds",
          "stick",
          "tree",
          "skyscraper",
          "earth",
          "plate",
          "bag",
          "framer",
          "brandj",
          "butterfly",
          "cloud",
          "brando",
          "girl",
          "cloud02",
          "cloud03",
          "balloon02",
        ];

        elementsToAnimate.forEach((elementName) => {
          if (elements[elementName]?.inner) {
            const ratio = mouseMoveRatios.current[elementName];
            gsap.to(elements[elementName].inner, {
              x: moveX * ratio,
              y: (moveY * ratio) / 2,
              duration: 0.4,
              ease: "power1.out",
            });
          }
        });
        // Mirror
        if (elements.mirror.inner) {
          gsap.to(elements.mirror.inner, {
            x: moveX * mouseMoveRatios.current.mirror,
            y: 0,
            duration: 0.4,
            ease: "power1.out",
          });
        }
        // TODO: step 9
      }
    };

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
