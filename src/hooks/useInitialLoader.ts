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
}
// TODO: Step 2
export function useInitialLoader() {
  const butterflyIntervalRef = useRef<number>();
  const birdIntervalRef = useRef<number>();
  const contextRef = useRef<any>(null);
  const timelineRefs = useRef<{
    text01?: gsap.core.Timeline;
    text02?: gsap.core.Timeline;
    text03?: gsap.core.Timeline;
    text04?: gsap.core.Timeline;
    text05?: gsap.core.Timeline;
    text06?: gsap.core.Timeline;
    text07?: gsap.core.Timeline;
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
    bottle?: gsap.core.Timeline;
    balloon?: gsap.core.Timeline;
    jc?: gsap.core.Timeline;
    windmill?: gsap.core.Timeline;
    argan?: gsap.core.Timeline;
    chair?: gsap.core.Timeline;
    working?: gsap.core.Timeline;
    brandm?: gsap.core.Timeline;
    berry?: gsap.core.Timeline;
    orange?: gsap.core.Timeline;
    scissors?: gsap.core.Timeline;
    hand?: gsap.core.Timeline;
    cloud?: gsap.core.Timeline;
    tractor?: gsap.core.Timeline;
    brando?: gsap.core.Timeline;
    girl?: gsap.core.Timeline;
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
        layer: document.querySelector('[data-js="text01-layer"]'),
        inner: document.querySelector('[data-js="text01-inner"]'),
      },
      text02: {
        layer: document.querySelector('[data-js="text02-layer"]'),
        inner: document.querySelector('[data-js="text02-inner"]'),
      },
      text03: {
        layer: document.querySelector('[data-js="text03-layer"]'),
        inner: document.querySelector('[data-js="text03-inner"]'),
      },
      text04: {
        layer: document.querySelector('[data-js="text04-layer"]'),
        inner: document.querySelector('[data-js="text04-inner"]'),
      },
      text05: {
        layer: document.querySelector('[data-js="text05-layer"]'),
        inner: document.querySelector('[data-js="text05-inner"]'),
      },
      text06: {
        layer: document.querySelector('[data-js="text06-layer"]'),
        inner: document.querySelector('[data-js="text06-inner"]'),
      },
      text07: {
        layer: document.querySelector('[data-js="text07-layer"]'),
        inner: document.querySelector('[data-js="text07-inner"]'),
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
      timelineRefs.current.scrollTriggers.forEach((trigger) => {
        if (trigger) trigger.kill();
      });
      timelineRefs.current.scrollTriggers = [];
      // TODO: Step 5
      if (timelineRefs.current.text01) timelineRefs.current.text01.kill();
      if (timelineRefs.current.text02) timelineRefs.current.text02.kill();
      if (timelineRefs.current.text03) timelineRefs.current.text03.kill();
      if (timelineRefs.current.text04) timelineRefs.current.text04.kill();
      if (timelineRefs.current.text05) timelineRefs.current.text05.kill();
      if (timelineRefs.current.text06) timelineRefs.current.text06.kill();
      if (timelineRefs.current.text07) timelineRefs.current.text07.kill();
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
      if (timelineRefs.current.bottle) timelineRefs.current.bottle.kill();
      if (timelineRefs.current.jc) timelineRefs.current.jc.kill();
      if (timelineRefs.current.balloon) timelineRefs.current.balloon.kill();
      if (timelineRefs.current.argan) timelineRefs.current.argan.kill();
      if (timelineRefs.current.chair) timelineRefs.current.chair.kill();
      if (timelineRefs.current.working) timelineRefs.current.working.kill();
      if (timelineRefs.current.brandm) timelineRefs.current.brandm.kill();
      if (timelineRefs.current.berry) timelineRefs.current.berry.kill();
      if (timelineRefs.current.orange) timelineRefs.current.orange.kill();
      if (timelineRefs.current.scissors) timelineRefs.current.scissors.kill();
      if (timelineRefs.current.hand) timelineRefs.current.hand.kill();
      if (timelineRefs.current.cloud) timelineRefs.current.cloud.kill();
      if (timelineRefs.current.tractor) timelineRefs.current.tractor.kill();
      if (timelineRefs.current.brando) timelineRefs.current.brando.kill();
      if (timelineRefs.current.girl) timelineRefs.current.girl.kill();
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

          // text01
          const text01Layer = elements.text01.layer;
          const text01Inner = elements.text01.inner;

          // text02
          const text02Layer = elements.text02.layer;
          const text02Inner = elements.text02.inner;

          // text03
          const text03Layer = elements.text03.layer;
          const text03Inner = elements.text03.inner;

          // text04
          const text04Layer = elements.text04.layer;
          const text04Inner = elements.text04.inner;

          // text05
          const text05Layer = elements.text05.layer;
          const text05Inner = elements.text05.inner;

          // text06
          const text06Layer = elements.text06.layer;
          const text06Inner = elements.text06.inner;

          // text07
          const text07Layer = elements.text07.layer;
          const text07Inner = elements.text07.inner;

          // Butterfly
          const butterflyLayer = elements.butterfly.layer;
          const butterflyInner = elements.butterfly.inner;

          // BrandJ
          const brandjLayer = elements.brandj.layer;
          const brandjImg = elements.brandj.img;
          const brandjStickbottle = elements.brandj.stickbottle;

          // Framer
          const framerLayer = elements.framer.layer;
          const framerFramer = elements.framer.framer;
          const framerAvocado = elements.framer.avocado;

          // Bag
          const bagLayer = elements.bag.layer;
          const bagFlu = elements.bag.flu;

          // Plate
          const plateLayer = elements.plate.layer;
          const plateOne = elements.plate.one;
          const plateEarth = elements.plate.earth;

          // Earth
          const earthLayer = elements.earth.layer;
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

          // windmill
          const windmillLayer = elements.windmill.layer;
          const windmillInner = elements.windmill.inner;
          const windmillWindmill = elements.windmill.windmill;
          const windmillWave = elements.windmill.wave;

          // argan
          const arganLayer = elements.argan.layer;
          const arganInner = elements.argan.inner;
          const arganBottle = elements.argan.bottle;
          const arganCloud = elements.argan.cloud;

          // chair
          const chairLayer = elements.chair.layer;
          const chairInner = elements.chair.inner;
          const chairMain = elements.chair.main;
          const chairBrush = elements.chair.brush;

          // working
          const workingLayer = elements.working.layer;
          const workingInner = elements.working.inner;
          const workingEarth = elements.working.earth;
          const workingWoman = elements.working.woman;
          const workingLeaves = elements.working.leaves;

          // brandm
          const brandmLayer = elements.brandm.layer;
          const brandmInner = elements.brandm.inner;
          const brandmMain = elements.brandm.main;

          // berry
          const berryLayer = elements.berry.layer;
          const berryInner = elements.berry.inner;
          const berry01 = elements.berry["01"];
          const berry02 = elements.berry["02"];
          const berry03 = elements.berry["03"];

          // orange
          const orangeLayer = elements.orange.layer;
          const orangeInner = elements.orange.inner;
          const orange01 = elements.orange["01"];
          const orange02 = elements.orange["02"];

          // scissors
          const scissorsLayer = elements.scissors.layer;
          const scissorsInner = elements.scissors.inner;
          const scissorsBody = elements.scissors.body;
          const scissorsFront = elements.scissors.front;
          const scissorsBack = elements.scissors.back;
          const scissorsCactus = elements.scissors.cactus;

          // hand
          const handLayer = elements.hand.layer;
          const handInner = elements.hand.inner;
          const handBody = elements.hand.body;
          const handLeaf = elements.hand.leaf;

          // cloud
          const cloudLayer = elements.cloud.layer;
          const cloudInner = elements.cloud.inner;
          const cloudMain = elements.cloud.main;

          // tractor
          const tractorLayer = elements.tractor.layer;
          const tractorInner = elements.tractor.inner;
          const tractorFlu = elements.tractor.flu;
          const tractorBack = elements.tractor.back;
          const tractorButter = elements.tractor.butter;
          const tractorShampoo = elements.tractor.shampoo;
          const tractorBar = elements.tractor.bar;
          const tractorLavender = elements.tractor.lavender;
          const tractorFront = elements.tractor.front;

          // brando
          const brandoLayer = elements.brando.layer;
          const brandoInner = elements.brando.inner;
          const brandoMain = elements.brando.main;

          // girl
          const girlLayer = elements.girl.layer;
          const girlInner = elements.girl.inner;
          const girlHead = elements.girl.head;
          const girlArm = elements.girl.arm;

          // TODO: Step 6
          if (
            !text01Layer ||
            !text01Inner ||
            !text02Layer ||
            !text02Inner ||
            !text03Layer ||
            !text03Inner ||
            !text04Layer ||
            !text04Inner ||
            !text05Layer ||
            !text05Inner ||
            !text06Layer ||
            !text06Inner ||
            !text07Layer ||
            !text07Inner ||
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
            !bottleLayer ||
            !bottleInner ||
            !bottleWash ||
            !bottleO ||
            !jcLayer ||
            !jcInner ||
            !jcCloud ||
            !jcJ ||
            !balloonLayer ||
            !balloonInner ||
            !balloonFlower ||
            !windmillLayer ||
            !windmillInner ||
            !windmillWindmill ||
            !windmillWave ||
            !arganLayer ||
            !arganInner ||
            !arganBottle ||
            !arganCloud ||
            !chairLayer ||
            !chairInner ||
            !chairMain ||
            !chairBrush ||
            !workingLayer ||
            !workingInner ||
            !workingEarth ||
            !workingWoman ||
            !workingLeaves ||
            !brandmLayer ||
            !brandmInner ||
            !brandmMain ||
            !berryLayer ||
            !berryInner ||
            !berry01 ||
            !berry02 ||
            !berry03 ||
            !orangeLayer ||
            !orangeInner ||
            !orange01 ||
            !orange02 ||
            !scissorsLayer ||
            !scissorsInner ||
            !scissorsBody ||
            !scissorsFront ||
            !scissorsBack ||
            !scissorsCactus ||
            !handLayer ||
            !handInner ||
            !handBody ||
            !handLeaf ||
            !cloudLayer ||
            !cloudInner ||
            !cloudMain ||
            !tractorLayer ||
            !tractorInner ||
            !tractorFlu ||
            !tractorBack ||
            !tractorButter ||
            !tractorShampoo ||
            !tractorBar ||
            !tractorLavender ||
            !tractorFront ||
            !brandoLayer ||
            !brandoInner ||
            !brandoMain ||
            !girlLayer ||
            !girlInner ||
            !girlHead ||
            !girlArm
          ) {
            return {
              text01Tl: null,
              text02Tl: null,
              text03Tl: null,
              text04Tl: null,
              text05Tl: null,
              text06Tl: null,
              text07Tl: null,
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
              bottleTl: null,
              jcTl: null,
              balloonTl: null,
              windmillTl: null,
              arganTl: null,
              chairTl: null,
              workingTl: null,
              brandmTl: null,
              berryTl: null,
              orangeTl: null,
              scissorsTl: null,
              handTl: null,
              cloudTl: null,
              tractorTl: null,
              brandoTl: null,
              girlTl: null,
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
              timelineRefs.current.intro.scrollTrigger,
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
              y: -butterflyLayer.clientHeight * 2,
              x: windowWidth * 0.4 - butterflyLayer.clientWidth * 1.2,
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

          // ScrollTrigger text01
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

          // ScrollTrigger text02
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

          // ScrollTrigger text03
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

          // ScrollTrigger text04
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

          // ScrollTrigger text05
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

          // ScrollTrigger text06
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

          // ScrollTrigger text07
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

          // ScrollTrigger framer
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
            y: isMd ? windowHeight * 0.1 : windowHeight * 0.5,
          });

          const plateTl = gsap
            .timeline()
            .to(plateLayer, {
              scale: 1,
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

          // ScrollTrigger stick

          gsap.set(stickTree, {
            y: -140,
            x: -10,
          });
          gsap.set(stickCloud, {
            y: -80,
            x: -100,
          });

          gsap.set(stickLayer, {
            x: isMd
              ? -(windowWidth * 0.5 - stickLayer.clientWidth * 2.5)
              : -windowWidth * 0.7,
            y: windowHeight + stickLayer.clientHeight + stickTree.clientHeight,
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

          // ScrollTrigger birds

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
            x: windowWidth,
            y: birdsLayer.clientHeight,
          });

          const birdsTl = gsap.timeline().to(birdsLayer, {
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
              timelineRefs.current.birds.scrollTrigger,
            );
          }

          // ScrollTrigger bottle
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

          // ScrollTrigger jc
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

          // ScrollTrigger balloon

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

          // ScrollTrigger windmill

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

          // ScrollTrigger argan

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

          // ScrollTrigger chair

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

          // ScrollTrigger working
          gsap.set(workingEarth, {
            scale: 0.75,
          });

          gsap.set(workingLayer, {
            x: isMd ? -(windowWidth * 0.5 - workingLayer.clientWidth * 1.1) : 0,
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

          // ScrollTrigger brandm

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

          // ScrollTrigger berry

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

          // ScrollTrigger orange

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

          // ScrollTrigger scissors

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

          // ScrollTrigger hand

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

          // ScrollTrigger cloud

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

          // ScrollTrigger tractor

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

          // ScrollTrigger brando

          gsap.set(brandoLayer, {
            y: windowHeight + brandoLayer.clientHeight * 0.5,
          });
          const brandoTl = gsap.timeline().to(brandoLayer, {
            ease: "power1.inOut",
            y: -windowHeight + brandoLayer.clientHeight,
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

          // ScrollTrigger girl

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
