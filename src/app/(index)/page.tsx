"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { relative } from "path";
import { useTouchEvents } from "@/hooks/useTouchEvents";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Observer);
gsap.config({
  nullTargetWarn: false,
});

export default function Home() {
  const ref = useRef(null);
  useTouchEvents();
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  }, []);

  function getBackgroundColor(elementId: string): string | null {
    const element = document.getElementById(elementId);
    if (element) {
      return getComputedStyle(element).backgroundColor;
    }
    return null;
  }

  function isMobile(): boolean {
    const bgColor = getBackgroundColor("smolla");
    return bgColor === "rgb(255, 255, 255)" || bgColor === "rgb(255, 0, 0)";
  }

  function isMobileLandscape(): boolean {
    const bgColor = getBackgroundColor("smolla");
    return bgColor === "rgb(255, 0, 0)";
  }


  let isStripe: any = null;
  let isSometimes: any = null;
  let isFact: any = null;
  let isMatter: any = null;
  let isBorn: any = null;
  let isServizi: any = null;
  let isFooter: any = null;
  let isAnimFooter: any = null;

  let posStripe: number = 0;
  let posSometimes: number = 0;
  let posFact: number = 0;
  let posBorn: number = 0;
  let posResult: number = 0;
  let posLetso: number = 0;
  let posFooter: number = 0;

  let stripeC: any;
  const stripeCoords = {
    desktop: {
      x: "0vw",
      zoom: 1.2,
    },
    mobile: {
      x: "-10vw",
      zoom: 2,
    },
  };

  let sometimesC: any;
  const sometimesCoords = {
    desktop: {
      x: "138vw",
      zoom: 10,
    },
    mobile: {
      x: "150vw",
      zoom: 10,
    },
    mobileL: {
      x: "180vw",
      zoom: 11,
    },
  };

  let factsC: any;
  const factsCoords = {
    desktop: {
      x: "18vw",
      zoom: 1.4,
    },
    mobile: {
      x: "55vw",
      zoom: 2.8,
    },
  };

  let bornC: any;
  const bornCoords = {
    desktop: {
      x: "-40vw",
      zoom: 10,
    },
    mobile: {
      x: "-64vw",
      zoom: 13,
    },
    mobileL: {
      x: "-50vw",
      zoom: 14,
    },
  };

  let matterC: any;
  const matterCoords = {
    desktop: {
      x: "0vw",
      zoom: 1.2,
    },
    mobile: {
      x: "0vw",
      zoom: 2.3,
    },
  };

  let serviziC: any;
  const serviziCoords = {
    desktop: {
      x: "85vw",
      zoom: 2.3,
    },
    mobile: {
      x: "85vw",
      zoom: 2.3,
    },
  };

  let footerC: any;
  const footerCoords = {
    desktop: {
      x: "0vw",
      zoom: 1,
    },
    mobile: {
      x: "0vw",
      zoom: 1,
    },
  };
  let lottieHeight: number = 0;
  let gap: number = 0;

  if (typeof window !== "undefined") {
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    document.body.classList.add("loaded");
    startPreload();
    applyRandomBackgroundPosition();
    initAnimations();
    initScrollTrigger();
    window.addEventListener("resize", handleResize);

    const htmlElement = document.getElementById("html");
    if (htmlElement?.classList.contains("touchevents") && isMobile()) {
      ScrollTrigger.defaults({
        scroller: "#wrapSite",
        markers: false,
      });
    }

    gsap.to("#wrapContainer", {
      scale: 1,
      opacity: 1,
      duration: 1,
      onComplete: () => {
        ScrollTrigger.refresh();
      },
    });

    
  }, []);

  function startPreload() {
    setTimeout(() => {
      lottieHeight = document.getElementById("lottie")?.offsetHeight || 0;
    const windowHeight = window.innerHeight;

    const wrapSite = document.getElementById("wrapSite");

    if (wrapSite) {
      if (lottieHeight > (windowHeight / 2)) {
        wrapSite.style.paddingTop = `50vh`;
        console.log(222);
      } else {
        const wrapContainer = document.getElementById("wrapContainer");
        if (document.documentElement.classList.contains("touchevents") && isMobile() && wrapContainer) {
            console.log(333);
            wrapContainer.style.marginTop = `calc(100vh - ${lottieHeight}px)`;
        } else {
          console.log(1111);
          wrapSite.style.paddingTop = `calc(100vh - ${lottieHeight}px)`;
        }
      }
    }
    const container = document.querySelector(".containerMix") as HTMLElement;
    if (container) {
      container.style.marginTop = `-${lottieHeight / 2}px`;
    }
    setTimeout(() => {
      const lottieTop = document.getElementById("lottieTop");
      if (lottieTop) {
        lottieTop.style.opacity = "1";
        (lottieTop as any).seek?.("5%");
        (lottieTop as any).play?.();
      }

      gsap.to(".loballo", {
        y: 0,
        x: 0,
        delay: 1,
        stagger: 0.5,
        ease: "Cubic.easeOut",
        duration: 0.3,
      });

      setTimeout(() => {
        gsap.to(".containerMix", {
          opacity: 1,
          duration: 0,
          ease: "expo.inOut",
          onComplete: () => {
            document.getElementById("body")?.classList.add("libera");
            initObserver();

            gsap.to("#titolone", {
              yPercent: 0,
              opacity: 1,
              duration: 0.5,
            });
          },
        });
      }, 1000);
    }, 500);
    }, 200);
    
  }

  function vwToPixel(vwValue: number): number {
    const viewportWidth = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    );
    const pixelValue = (viewportWidth * vwValue) / 100;
    return pixelValue;
  }

  function vhToPixel(vhValue: number): number {
    const viewportHeight = Math.max(
      document.documentElement.clientHeight || 0,
      window.innerHeight || 0
    );
    const pixelValue = (viewportHeight * vhValue) / 100;
    return pixelValue;
  }
  let tl: any = null;
  let canAnim = true;

  function initObserver() {
    canAnim = true;

    Observer.create({
      type: "wheel,touch,pointer",

      onStop: (self) => {
        canAnim = true;
      },

      onChangeY: (self) => {
        if (!canAnim) return;
        if (tl && tl.isActive()) return;

        const currentScroll = window.scrollY + window.innerHeight;
        canAnim = false;

        if (currentScroll + 5 > document.body.scrollHeight) {
          tl = gsap.to("#r_web", {
            rotate: -20,
            ease: "Power2.easeInOut",
            yoyo: true,
            repeat: 1,
            duration: 0.2,
          });
        }
      },
    });
  }

  function applyRandomBackgroundPosition() {
    const textures = document.querySelectorAll<HTMLElement>(".texture");
    const textures2 = document.querySelectorAll<HTMLElement>(".texture2");

    textures.forEach((texture) => {
      const numRand = Math.floor(Math.random() * 2001);
      const numRand2 = Math.floor(Math.random() * 1200);
      texture.style.backgroundPosition = `${numRand2}px ${numRand}px`;
    });

    textures2.forEach((texture2) => {
      const numRand = Math.floor(Math.random() * 2001);
      const numRand2 = Math.floor(Math.random() * 1200);
      texture2.style.backgroundPosition = `${numRand2}px ${numRand}px`;
    });
  }
  function handleResize(): void {
    if (document.documentElement.classList.contains("touchevents")) {
      return;
    }
    resetAll();
  }

  function resetAll(): void {
    const elementsToHide = document.querySelectorAll<HTMLElement>(".toHide");
    elementsToHide.forEach((element) => {
      element.style.display = "inline-block";
    });

    const anims = gsap.globalTimeline.getChildren(true, true, true);
    anims.forEach((anim) => {
      anim.revert();
      anim.kill();
    });

    ScrollTrigger.getAll().forEach((trigger) => {
      trigger.kill();
    });

    gsap.killTweensOf("*");

    gsap.set("#wrapContainer", { x: 0, y: 0, scale: 1 });
    const wrapContainer = document.getElementById("wrapContainer");
    if (wrapContainer) {
      wrapContainer.style.transform = "translate(0) scale(1)";
    }

    window.scrollTo(0, 0);

    initAnimations();
    initScrollTrigger();
  }

  function initAnimations() {
    gsap.set("#lang span, #lang a", { transformOrigin: "center left" });
  }

  function initScrollTrigger() {

    const htmlElement = document.getElementById("html");
    const isTouchEvent =
      htmlElement?.classList.contains("touchevents") && isMobile();

    stripeC = isTouchEvent ? stripeCoords.mobile : stripeCoords.desktop;
    sometimesC = isTouchEvent
      ? sometimesCoords.mobile
      : sometimesCoords.desktop;
    factsC = isTouchEvent ? factsCoords.mobile : factsCoords.desktop;
    bornC = isTouchEvent ? bornCoords.mobile : bornCoords.desktop;
    matterC = isTouchEvent ? matterCoords.mobile : matterCoords.desktop;
    serviziC = isTouchEvent ? serviziCoords.mobile : serviziCoords.desktop;
    footerC = isTouchEvent ? footerCoords.mobile : footerCoords.desktop;

    isStripe = null;
    isSometimes = null;
    isFact = null;
    isMatter = null;
    isBorn = null;
    isServizi = null;
    isFooter = null;
    isAnimFooter = null;

    document.querySelectorAll(".toHide").forEach((el: any) => {
      el.style.display = "inline-block";
      el.classList.remove("hide");
    });

    if (isTouchEvent) {
      initPositionsMobile();
    } else {
      initPositionsDesktop();
    }

    if (!isStripe) stripe();
  }

  useEffect(() => {}, []);

  function getElementOffsetTop(elementId: string): number {
    const element = document.getElementById(elementId);
    if (!element) throw new Error(`Element with id ${elementId} not found`);
    const rect = element.getBoundingClientRect();
    return rect.top + window.scrollY; 
  }

  function initPositionsDesktop() {
    // STRIPE
    let t = gsap.set("#wrapContainer", { scale: stripeC.zoom, y: 0 });
    posStripe =
      getElementOffsetTop("testolets") -
      getElementOffsetTop("wrapContainer") -
      window.innerHeight * 1.5;
    t.revert();

    // SOMETIMES
    t = gsap.set("#wrapContainer", { scale: sometimesC.zoom, y: 0 });
    posSometimes =
      getElementOffsetTop("sometimes") -
      getElementOffsetTop("wrapContainer") -
      window.innerHeight / 2;
    t.revert();

    // FACTS
    t = gsap.set("#wrapContainer", { scale: factsC.zoom, y: 0 });
    posFact =
      getElementOffsetTop("facts") -
      getElementOffsetTop("wrapContainer") -
      window.innerHeight;
    t.revert();

    // BORN
    t = gsap.set("#wrapContainer", { scale: bornC.zoom, y: 0 });
    posBorn =
      getElementOffsetTop("born") -
      getElementOffsetTop("wrapContainer") -
      window.innerHeight / 2;
    t.revert();

    // RESULT MATTER
    t = gsap.set("#wrapContainer", { scale: matterC.zoom, y: 0 });
    posResult =
      getElementOffsetTop("stripeTrigger") -
      getElementOffsetTop("wrapContainer") -
      window.innerHeight / 2;
    t.revert();

    // RESULT LETSO = SERVIZI!
    t = gsap.set("#wrapContainer", { scale: serviziC.zoom, y: 0 });
    posLetso =
      getElementOffsetTop("letsoTrigger") -
      getElementOffsetTop("wrapContainer") -
      window.innerHeight / 2;
    t.revert();

    // FOOTER
    t = gsap.set("#wrapContainer", { scale: footerC.zoom, y: 0 });
    posFooter =
      getElementOffsetTop("triggerFooter") -
      getElementOffsetTop("wrapContainer") -
      window.innerHeight / 1.5;
    t.revert();
  }

  function initPositionsMobile() {
    // STRIPE
    let t = gsap.set("#wrapContainer", { scale: stripeC.zoom, y: 0 });
    posStripe =
      getElementOffsetTop("testolets") -
      getElementOffsetTop("wrapContainer") -
      window.innerHeight * 1.5;
    t.revert();

    // SOMETIMES
    if (isMobileLandscape()) {
      sometimesC = sometimesCoords.mobileL;
      t = gsap.set("#wrapContainer", { scale: sometimesC.zoom, y: 0 });
      posSometimes =
        getElementOffsetTop("sometimes") -
        getElementOffsetTop("wrapContainer") -
        window.innerHeight * 2;
      t.revert();
    } else {
      t = gsap.set("#wrapContainer", { scale: sometimesC.zoom, y: 0 });
      posSometimes =
        getElementOffsetTop("sometimes") -
        getElementOffsetTop("wrapContainer") -
        window.innerHeight / 2;
      t.revert();
    }

    // FACTS
    t = gsap.set("#wrapContainer", { scale: factsC.zoom, y: 0 });
    posFact =
      getElementOffsetTop("facts") -
      getElementOffsetTop("wrapContainer") -
      window.innerHeight;
    t.revert();

    // BORN
    if (isMobileLandscape()) {
      bornC = bornCoords.mobileL;
      t = gsap.set("#wrapContainer", { scale: bornC.zoom, y: 0 });
      posBorn =
        getElementOffsetTop("born") -
        getElementOffsetTop("wrapContainer") -
        window.innerHeight * 2;
      t.revert();
    } else {
      t = gsap.set("#wrapContainer", { scale: bornC.zoom, y: 0 });
      posBorn =
        getElementOffsetTop("born") -
        getElementOffsetTop("wrapContainer") -
        window.innerHeight / 2;
      t.revert();
    }

    // RESULT MATTER
    t = gsap.set("#wrapContainer", { scale: matterC.zoom, y: 0 });
    posResult =
      getElementOffsetTop("stripeTrigger") -
      getElementOffsetTop("wrapContainer") -
      window.innerHeight;
    t.revert();

    // RESULT LETSO = SERVIZI!
    t = gsap.set("#wrapContainer", { scale: serviziC.zoom, y: 0 });
    posLetso =
      getElementOffsetTop("letsoTrigger") -
      getElementOffsetTop("wrapContainer") -
      window.innerHeight / 2;
    t.revert();

    // FOOTER
    t = gsap.set("#wrapContainer", { scale: 1, y: 0 });
    posFooter =
      getElementOffsetTop("triggerFooter") -
      getElementOffsetTop("wrapContainer") -
      window.innerHeight / 1.5;
    t.revert();
  }

  function stripe(): void {
    console.log('stripe');
    isStripe = gsap.to("#wrapContainer", {
      id: "STRIPE",
      scale: stripeC.zoom,
      x: stripeC.x,
      y: () => {
        const scrollTop =
          document.documentElement.classList.contains("touchevents") &&
          isMobile()
            ? (document.getElementById("wrapSite") as HTMLElement)?.scrollTop ||
              0
            : window.scrollY;

        let pos2 = posStripe - scrollTop;
        return `${0 - pos2}px`;
      },
      force3D: false,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#primoTrigger",
        start: "bottom bottom",
        end: "+=700",
        markers: false,
        scrub: true,
        immediateRender: false,
      },
      onComplete() {
        if (!isSometimes) sometimes();
      },
    });

    gsap.to("#stripeInner", {
      xPercent: 15,
      id: "INNER",
      scrollTrigger: {
        trigger: "#primoTrigger",
        start: "bottom bottom",
        end: () => `${vwToPixel(180)}px top`,
        scrub: true,
        markers: false,
      },
    });

    // PARALLASSE WTF
    gsap.to("#WTF-Sticker_01", {
      id: "PARA WTF-Sticker_01",
      force3D: false,
      scrollTrigger: {
        trigger: "#primoTrigger",
        start: "bottom bottom",
        end: `+=${vhToPixel(100)} top`,
        scrub: true,
        markers: false,
        immediateRender: false,
      },
      xPercent: 25,
    });
  }
  function sometimes(): void {
    console.log('sometimes');
    // SOMETIMES AROUND
    isSometimes = gsap.to("#wrapContainer", {
      id: "SOMETIMES AROUND",
      scrollTrigger: {
        trigger: "#testolets",
        start: "bottom top",
        end: "+=950",
        markers: false,
        onEnter() {
          const elements = document.querySelectorAll(
            ".toHide:not(#sometimes, .sec4)"
          );
          elements.forEach((el) => {
            (el as HTMLElement).style.display = "none";
            el.classList.add("hide");
          });
        },
        onLeaveBack() {
          const sections = document.querySelectorAll(
            ".toHide.sec0, .toHide.sec1, .toHide.sec2, .toHide.sec3"
          );
          sections.forEach((el) => {
            (el as HTMLElement).style.display = "inline-block";
            el.classList.remove("hide");
          });
        },
        onEnterBack() {
          const elements = document.querySelectorAll(
            ".toHide:not(#sometimes, .sec4)"
          );
          elements.forEach((el) => {
            (el as HTMLElement).style.display = "none";
            el.classList.remove("hide");
          });
          const sec4 = document.querySelector(".toHide.sec4") as HTMLElement;
          if (sec4) {
            sec4.style.display = "inline-block";
            sec4.classList.remove("hide");
          }
        },
      },
    });

    // SOMETIMES
    const anini = gsap.timeline({
      scrollTrigger: {
        trigger: "#testolets",
        start: "bottom top",
        end: "+=900",
        markers: false,
        scrub: true,
        immediateRender: false,
      },
    });
    anini.add("start");

    anini.to(
      "#wrapContainer",
      {
        id: "SOMETIMES",
        x: sometimesC.x,
        y: () => {
          const scrollTop =
            document.documentElement.classList.contains("touchevents") &&
            isMobile()
              ? (document.getElementById("wrapSite") as HTMLElement)
                  ?.scrollTop || 0
              : window.scrollY;

          let pos2 = posSometimes - scrollTop;
          return `${0 - pos2}px`;
        },
        scale: sometimesC.zoom,
        ease: "power1.inOut",
        force3D: false,
        onComplete() {
          if (!isFact) fact();
        },
      },
      "start"
    );

    anini.to(".texture2", { opacity: 0.1 }, "start");

    if (!document.documentElement.classList.contains("touchevents")) {
      const trigPara = posSometimes / 10 / 4;

      // PARALLASSE SOMETIMES
      const psom = gsap.timeline({
        id: "PARA SOMW",
        scrollTrigger: {
          trigger: "#testolets",
          start: `bottom+=${trigPara} top`,
          end: "+=1200",
          scrub: 1,
          markers: false,
          immediateRender: false,
        },
      });
      psom.add("start");

      psom.to(
        "#sometimes",
        {
          id: "PARA",
          display: 'inline-block',
          force3D: false,
          y: (i, el) => (1 - parseFloat("0.25")) * 80,
          onStart() {},
          onComplete() {},
        },
        "start"
      );

      const po = gsap.timeline({
        scrollTrigger: {
          trigger: "#testolets",
          start: `bottom+=${trigPara + 600} bottom`,
          end: `+=${vhToPixel(200)}`,
          scrub: true,
          markers: false,
        },
      });
      po.add("start");

      po.to(
        "#MessHoloImg",
        {
          id: "PARA",
          display: 'inline-block',
          force3D: false,
          xPercent: 20,
        },
        "start"
      );

      po.to(
        "#yolo",
        {
          id: "YOLOSO",
          display: 'inline-block',
          force3D: false,
          y: (i, el) => (1 - parseFloat("0.45")) * -vwToPixel(5),
        },
        "start"
      );
    }
  }

  function fact() {
    console.log('fact');
    isFact = gsap.to("#wrapContainer", {
      id: "FACTS AROUND",
      scrollTrigger: {
        trigger: "#sometimes",
        start: "bottom+=400 top",
        end: "+=800",
        markers: false,
        onEnter: () => {
          const sec5: any = document.querySelector(".toHide.sec5");
          if (sec5) {
            sec5.style.display = "inline-block";
            sec5.classList.remove("hide");
          }
        },
        onLeaveBack: () => {
          const sec5: any = document.querySelector(".toHide.sec5");
          const sec4: any = document.querySelector(".toHide.sec4");
          if (sec5) {
            sec5.style.display = "none";
            sec5.classList.add("hide");
          }
          if (sec4) {
            sec4.style.display = "inline-block";
            sec4.classList.remove("hide");
          }
        },
        onEnterBack: () => {
          const sec5: any = document.querySelector(".toHide.sec5");
          if (sec5) {
            sec5.style.display = "inline-block";
            sec5.classList.remove("hide");
          }
        },
      },
    });

    const anini = gsap.timeline({
      scrollTrigger: {
        trigger: "#sometimes",
        start: "bottom+=600 top",
        end: `+=${vhToPixel(200)}`,
        markers: false,
        scrub: true,
        immediateRender: false,
      },
    });

    anini.add("start");

    anini.to(
      "#wrapContainer",
      {
        id: "FACTS",
        x: factsC.x,
        y: () => {
          const pos2 =
            posFact -
            (document.documentElement.classList.contains("touchevents") &&
            isMobile()
              ? document.getElementById("wrapSite")?.scrollTop || 0
              : window.scrollY);
          return `${0 - pos2}px`;
        },
        scale: factsC.zoom,
        force3D: false,
        ease: "power1.inOut",
        onStart: () => {},
        onComplete: () => {
          if (!isBorn) born();
        },
      },
      "start"
    );

    anini.to(".texture2", { opacity: 0.25, delay: 2.1 }, "start");

    // FACTS PARALLASSE
    let anio = gsap.timeline({
      scrollTrigger: {
        trigger: "#sometimes",
        start: "bottom+=1400 top",
        end: `+=${vhToPixel(80)}`,
        scrub: true,
        markers: false,
        immediateRender: false,
      },
    });

    anio.add("start");

    const factsElements = document.querySelectorAll(".fact");
    if (document.documentElement.classList.contains("touchevents")) {
      anio.to(
        factsElements,
        {
          id: "PARA FACTS",
          x: "+=5",
          stagger: 0.1,
        },
        "start"
      );
    } else {
      anio.to(
        factsElements,
        {
          id: "PARA FACTS",
          x: "+=30",
          stagger: 0.1,
        },
        "start"
      );
    }

    // FACTS2 PARALLASSE
    anio = gsap.timeline({
      scrollTrigger: {
        trigger: "#sometimes",
        start: "bottom+=1400 top",
        end: `+=${vhToPixel(250)}`,
        scrub: true,
        markers: false,
        immediateRender: false,
      },
    });

    anio.add("start");
    anio.to(
      "#holoFact",
      {
        display: 'inline-block',
        x: "+=60",
      },
      "start"
    );
    anio.to(
      "#NOT-COOL-Sticker",
      {
        display: 'inline-block',
        x: "-=60",
      },
      "start"
    );
  }

  function born() {
    console.log('born');
    // BORN AROUND
    isBorn = gsap.to("#wrapContainer", {
      id: "BORN AROUND",
      scrollTrigger: {
        trigger: "#holoFact",
        start: "bottom top",
        end: "+=950",
        markers: false,
        onEnter: () => {
          const toHideElements =
            document.querySelectorAll(".toHide:not(.sec6)");
          toHideElements.forEach((el: any) => {
            el.style.display = "none";
            el.classList.add("hide");
          });

          const sec6: any = document.querySelector(".toHide.sec6");
          if (sec6) {
            sec6.style.display = "inline-block";
            sec6.classList.remove("hide");
          }
        },
        onLeaveBack: () => {
          const sec5: any = document.querySelector(".toHide.sec5");
          if (sec5) {
            sec5.style.display = "inline-block";
            sec5.classList.remove("hide");
          }
        },
      },
    });

    const animi = gsap.timeline({
      scrollTrigger: {
        trigger: "#holoFact",
        start: "bottom top",
        end: "+=900",
        markers: false,
        scrub: true,
        immediateRender: false,
      },
    });

    animi.add("start");

    animi.to(
      "#wrapContainer",
      {
        id: "BORN",
        x: bornC.x,
        y: () => {
          const pos2 =
            posBorn -
            (document.documentElement.classList.contains("touchevents") &&
            isMobile()
              ? document.getElementById("wrapSite")?.scrollTop || 0
              : window.scrollY);
          return `${0 - pos2}px`;
        },
        scale: bornC.zoom,
        force3D: false,
        ease: "power1.inOut",
        onComplete: () => {
          if (!isMatter) matter();
        },
      },
      "start"
    );

    animi.to(".texture2", { opacity: 0.1 }, "start");

    if (document.documentElement.classList.contains("no-touchevents")) {
      // BORN PARALLASSE
      const aniBP = gsap.timeline({
        id: "BORN TIMELINE",
        scrollTrigger: {
          trigger: "#holoFact",
          start: "bottom+=400 top",
          end: `+=${vwToPixel(150)}px`,
          scrub: true,
          markers: false,
          immediateRender: false,
        },
      });
      aniBP.add("start");

      aniBP.to(
        "#born",
        {
          id: "PARA BORN",
          y: (i, el) => (1 - parseFloat("0.25")) * 80,
          force3D: false,
        },
        "start"
      );

      aniBP.to(
        "#LETS-ROLL-Sticker_01",
        {
          y: (i, el) => (1 - parseFloat("0.95")) * -vwToPixel(25),
          force3D: false,
        },
        "start"
      );

      aniBP.to(
        "#MessUp_Holo_Circle",
        {
          xPercent: 10,
          force3D: false,
        },
        "start"
      );
    }
  }
  function matter() {
    const animi = gsap.timeline({
      scrollTrigger: {
        trigger: "#born",
        start: "bottom+=200 top",
        end: "+=1200",
        markers: false,
        scrub: true,
        immediateRender: false,
        onEnter: () => {
          const toHideElements = document.querySelectorAll(
            ".toHide:not(.sec6):not(.sec7)"
          );
          toHideElements.forEach((el: any) => {
            el.style.display = "none";
            el.classList.add("hide");
          });

          const sec7: any = document.querySelector(".toHide.sec7");
          if (sec7) {
            sec7.style.display = "inline-block";
            sec7.classList.remove("hide");
          }
        },
        onEnterBack: () => {
          const sec7: any = document.querySelector(".toHide.sec7");
          if (sec7) {
            sec7.style.display = "inline-block";
            sec7.classList.remove("hide");
          }

          const sec6: any = document.querySelector(".toHide.sec6");
          if (sec6) {
            sec6.style.display = "inline-block";
            sec6.classList.remove("hide");
          }
        },
      },
    });

    animi.add("start");

    isMatter = animi.to(
      "#wrapContainer",
      {
        id: "RESULT",
        x: matterC.x,
        y: () => {
          const pos2 =
            posResult -
            (document.documentElement.classList.contains("touchevents") &&
            isMobile()
              ? document.getElementById("wrapSite")?.scrollTop || 0
              : window.scrollY);
          return `${0 - pos2}px`;
        },
        scale: matterC.zoom,
        force3D: false,
        ease: "power1.inOut",
        onComplete: () => {
          if (!isFooter) footer();

          // STRIPE RESULT MATTER
          gsap.to("#stripeMatterInner", {
            xPercent: 15,
            id: "MATTER INNER",
            scrollTrigger: {
              trigger: "#stripeMatterInner",
              start: "top bottom",
              end: "bottom top",
              immediateRender: false,
              scrub: true,
              markers: false,
            },
          });

          // CIRCLE RESULT MATTER
          if (
            document.documentElement.classList.contains("no-touchevents") &&
            !document
              .getElementById("YOLO-2_-Sticker")
              ?.classList.contains("ita")
          ) {
            gsap.to("#YOLO-2_-Sticker", {
              rotate: "+=100%",
              yPercent: -10,
              scrollTrigger: {
                trigger: "#stripeMatterInner",
                start: "top bottom",
                end: "bottom+=300 top",
                immediateRender: false,
                scrub: true,
                markers: false,
              },
            });
          }
        },
      },
      "start"
    );

    animi.to(".texture2", { opacity: 0.25, delay: 1.5 }, "start");
  }
  function footer() {
    isFooter = gsap.to("#wrapContainer", {
      id: "FOOTER",
      x: footerC.x,
      y: () => {
        const pos2 =
          posFooter -
          (document.documentElement.classList.contains("touchevents") &&
          isMobile()
            ? document.getElementById("wrapSite")?.scrollTop || 0
            : window.scrollY);
        return `${0 - pos2}px`;
      },
      scale: footerC.zoom,
      force3D: false,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#tagsv",
        start: "bottom top",
        end: `+=${vhToPixel(50)}px`,
        markers: false,
        scrub: true,
        immediateRender: false,
        onEnter: () => {
          document.querySelectorAll(".secBottom").forEach((el: any) => {
            el.style.display = "inline-block";
          });
          document.querySelectorAll(".secFooter").forEach((el: any) => {
            el.style.display = "inline-block";
          });
        },
        onLeaveBack: () => {
          document.querySelectorAll(".secBottom").forEach((el: any) => {
            el.style.display = "none";
          });
          document.querySelectorAll(".secFooter").forEach((el: any) => {
            el.style.display = "none";
          });

          // gsap.set("#wrapSite", { height: wrapHeight });
        },
      },
      onComplete: () => {
        // gsap.set("#wrapSite", { height: document.getElementById("messFooter")?.offsetHeight + document.getElementById("messFooter")?.getBoundingClientRect().top - vhToPixel(70) });

        if (!isAnimFooter) {
          document.querySelectorAll(".bu").forEach((el) => {
            let d = 0;
            const de = el.getAttribute("data-delay");
            if (de) d = parseFloat(de);

            gsap.from(el, 0.4, {
              scrollTrigger: {
                markers: false,
                trigger: el,
                start: "top bottom",
                scrub: false,
              },
              delay: d,
              opacity: 1,
              rotate: "+=8",
              yPercent: 100,
              ease: "power1.out",
            });
          });

          isAnimFooter = gsap.to("#i3", {
            scrollTrigger: {
              trigger: "#i3",
              start: "top-=100% bottom",
              markers: false,
              scrub: false,
              onEnter: () => {
                document.getElementById("i3")?.classList.remove("-flip");
              },
              onLeaveBack: () => {
                document.getElementById("i3")?.classList.add("-flip");
              },
            },
          });

          gsap.to("#r_web", {
            id: "R",
            rotate: -360,
            scrollTrigger: {
              trigger: "#r_web",
              endTrigger: "#triggerR",
              end: "clamp(top bottom)",
              markers: false,
              scrub: true,
            },
          });
        }
      },
    });
  }

  return (
    <main>
      <div id="smolla" style={{ position: "absolute" }}></div>

      <div id="preloadImages" style={{ position: "absolute", opacity: 0 }}>
        <img src="/assets/images/spray/images/img_1.png" style={{ width: "1px" }} />
        <img src="/assets/images/spray/images/img_0.png" style={{ width: "1px" }} />
      </div>


      <div id="wrapSite">
        <div id="wrapContainer">

          <svg
            id="Livello_1"
            width="0"
            height="0"
            xmlns="http://www.w3.org/2000/svg"
          >
            <clipPath clipPathUnits="objectBoundingBox" id="svgPath">
              <rect x="870" y=".05" width="72" height="259.95" />
              <rect x="435" y="210.12" width="72" height="49.88" />
              <path d="m521.92,123.17c0,40.01,32.07,72.45,72.08,72.46h15v64.37h72v-57.12c.32-40.02-32.12-72.46-72.14-72.46h-14.86v-65.16h15v50.67h72V0h-159.08v123.17Z" />
              <polygon points="696 260 768 260 768 65.26 783 65.26 783 260 855 260 855 0 696 0 696 260" />
              <rect x="957" y=".05" width="72" height="259.95" />
              <path d="m1130.53,0v.05L1044,0v260h72V65.26h15v194.74h72V72.46C1202.99,32.44,1170.55,0,1130.53,0Z" />
              <polygon points="0 0 0 260 72 260 72 65.13 86.95 65.21 86.95 260 159 260 159 0 0 0" />
              <rect x="522" y="210.12" width="72" height="49.88" />
              <polygon points="174 260 246 260 246 65.21 261 65.21 261 260 333 260 333 0 174 0 174 260" />
              <polygon points="348 260 420 260 420 195.63 494.31 195.63 494.31 130.42 420 130.42 420 65.21 435 65.21 435 115.93 507 115.93 507 0 348 0 348 260" />
            </clipPath>
          </svg>
          
          <div className="sec0 toHide" id="lottie">
            <div id="lottieTexture"></div>
            <img id="messupTop" src="/assets/images/SKALE-LP.png" />
            {/* <lottie-player
              id="lottieTop"
              src="/assets/images/MessUpLottie/2406_DEF-2.json?B2320"
              background="transparent"
              speed="1"
            ></lottie-player> */}
          </div>

          <div id="wrapColumns">
            <div className="containerMix" style={{ position: "relative" }}>
              <h1 className="sec1 toHide " id="titolone" style={{ zIndex: 99 }}>
                今日の限界が、<br />
                明日の出発点になる。<br />
                上・下・右・左。<br />
                一夜で次元は<br />
                変えられる。
              </h1>

              <div id="primoTrigger"></div>
              <div className="sec3 toHide " id="stripe">
                <div id="stripeInner"></div>
              </div>
              <div
                className="sec7 "
                style={{ zIndex: 4 }}
                id="stripeMatter"
              >
                <div id="stripeMatterInner"></div>
              </div>
              <div className="sec7 toHide " id="stripeTrigger"></div>
              <div className="sec8 toHide " id="letsoTrigger"></div>

              <div id="messHolo" className="sec4 toHide ">
                <img id="MessHoloImg" src="/assets/images/MessUp_Holo.jpg" />
              </div>

              <div id="c1" className="column" style={{ zIndex: 1001 }}>
                <div id="heighter"></div>
                <div className="texture2"></div>
                <div className="texture"></div>

              </div>

              <div id="c2" className="column" style={{ zIndex: 1 }}>
                <div className="texture2"></div>
                <div className="texture"></div>
              </div>

              <div id="c3" className="column" style={{ zIndex: 1 }}>
                <div className="texture2"></div>
                <div className="texture"></div>

                <div className="sec5 maskFact" style={{ zIndex: 1 }}>
                  <span
                    className="sec5 fact"
                    id="facts"
                    style={{ zIndex: 5 }}
                  >
                    次
                  </span>
                </div>

                <img
                  className="sec5 toHide show-md"
                  id="NOT-COOL-Sticker"
                  src="/assets/images/NOT-COOL-Sticker_08.png"
                />
              </div>

              <div id="c4" className="column" style={{ zIndex: 0 }}>
                <div className="texture2"></div>
                <div className="texture"></div>
                <span className="sec3 toHide " id="testoletsSpan">
                  <div className="sec3" id="over0">
                    <div className="texture2"></div>
                  </div>
                  <p id="testolets" className="testolets v">
                  「もう、これ以上の成長は難しい」 
                  </p>
                </span>
                <div id="sometimes" className="hor sec4 biggo ">
                  <p className="testo2">それでいいのか？</p>

                  <div className="a1">
                    <p>
                    「限界」は、あなたの頭の中にしか存在しない幻想だ。<br />
                    「限界」だと思っているその壁は、上から見たら長い道のりの些細な障害でしかない。
                    </p>
                  </div>

                  <div id="yolo" className="oh-shut-up"></div>
                </div>
                <div className="sec5  maskFact">
                  <span className="sec5   fact" style={{ zIndex: 4 }}>
                  元
                  </span>
                </div>

                <img
                  className="sec5  "
                  id="holoFact"
                  src="/assets/images/MessUp_Holo.jpg"
                />

                <img
                  className="sec8 "
                  id="holoFact2"
                  src="/assets/images/MessUp_Holo.jpg"
                />
              </div>

              <div id="c5" className="column" style={{ zIndex: 5 }}>
                <div className="texture2"></div>
                <div className="texture"></div>
                
                <span className="sec3 toHide " id="testoletsSpan">
                  <div id="over1">
                    <div className="texture2"></div>
                  </div>
                  <p className="testolets v">
                    「うちの業界では、これが限界だ」
                  </p>
                </span>
                

                <div className="sec5  maskFact">
                  <span className="sec5   fact" style={{ zIndex: 3 }}>
                  鍵
                  </span>
                </div>


                <p
                  className="v pillo sec5  factu"
                >
                  <span className="pollo-span">
                  「限界」という名の幻想を打ち破る鍵。次元鍵は、<br />あなたのビジネスの中に既に存在している。
                    <span style={{ color: "#fff" }}>.</span>
                  </span>
                </p>

                <span className="sec7 ">
                  <p id="testomatter" className="testomatter v">
                  Webサイト制作・リニューアル（Reactを中心としたモダン開発）<br />
                  ランディングページ（LP）制作（Reactを中心としたモダン開発）
                  </p>
                </span>
              </div>

              <div id="c6" className="column" style={{ zIndex: 10 }}>
                <div className="texture2"></div>
                <div className="texture"></div>

                <p
                  id="testo1"
                  className="testo1 v sec2 toHide"
                  style={{ zIndex: 99 }}
                >
                  <span>
                  あなたは今、<br />
                  ビジネスを殺そうとしている。
                  </span>
                </p>

                <div className="sec3 toHide " id="testoletsSpan">
                  <div id="over2">
                    <div className="texture2"></div>
                  </div>
                  <p className="testolets v">
                  「このビジネスモデルでは、ここまでが精一杯だ」
                  </p>
                </div>
                <div className="sec5  maskFact">
                  <span className="sec5   fact" style={{ zIndex: 2 }}>
                  ？
                  </span>
                </div>

                <p className="v pillo sec5 factu">
                  <span className="pollo-span">
                  「できない」と思っていたことの中に
                  </span>
                  <br />
                  <span className="pollo-span">
                  「無理だ」と諦めていたアイデアの中に
                  </span>
                </p>
                <p className="v pillo sec5 toHide  show-sm factu">
                  <span className="pollo-span">Trust us, together we</span>
                  <br />
                  <span className="pollo-span">
                    will stir up quite a storm.
                  </span>
                </p>
                <div id="born" className="hor sec6 toHide biggo">
                  <p className="testo2">目と勇気と仲間。</p>

                  <div className="a1">
                    <p>あなたには、次元鍵を見つけ出す目があるか？ <br />
次元鍵を使って自らのビジネスを根本から覆す勇気があるか？<br />
<br />
目がなければSKALEがなろう。<br />
勇気がなければSKALEが支えよう。<br />
<br />
ビジネスを殺したくなければ、SKALEを仲間に。</p>
                  </div>
                  <img
                    id="LETS-ROLL-Sticker_01"
                    className="sec6 "
                    src="/assets/images/LETS-ROLL-Sticker_01.png"
                  />
                </div>

                <span className="sec7 ">
                  <p className="testomatter v">
                  システム開発（CRM、MA等Reactを中心としたモダン開発） <br />
                  AI活用支援（AIを起点とした事業開発）
                  </p>
                </span>
              </div>

              <div id="c7" className="column" style={{ zIndex: 10 }}>
                <div className="texture2"></div>
                <div className="texture"></div>
                <p className="testo1 v sec2 toHide " style={{ zIndex: 99 }}>
                  <span className="">
                    あなたは知らず知らずのうちに <br />
                    可能性を自ら摘み取っている。
                  </span>
                </p>

                <p className="sec3 toHide  testolets v">
                こんな言葉を口にしたことはないか？ 
                </p>
                <p className="v pillo sec5 factu">
                  <span className="pollo-span">
                  「非現実的だ」と片付けていた戦略の中に
                  </span>
                </p>
                <span className="sec7 ">
                  <p className="testomatter v">
                  広告運用支援（AI活用による高効率低コストの運用）
                  </p>
                </span>
              </div>

              <div id="c8" className="column" style={{ zIndex: 1 }}>
                <div className="texture2"></div>
                <div className="texture"></div>

                <div className="sec3 toHide ">
                  <div id="over2">
                    <div className="texture2"></div>
                  </div>
                  <p className="testolets v">
                  あるなら、既に自社に死刑宣告を下しているも同然だ。<br />
                  限界を口実に挑戦を放棄している。
                  </p>
                </div>

                

                <p className="v pillo sec5 toHide  show-md">
                  <span className="pollo-span">Trust us, together we</span>
                  <br />
                  <span className="pollo-span">
                    will stir up quite a storm.
                  </span>
                </p>
              </div>

              <div id="c9" className="column">
                <div className="texture2"></div>
                <div className="texture"></div>
                

                <div className="shinju" id="shinju2"></div>

                <div id="_stripeOrange"></div>

                <img
                  id="MessUp_Holo_Circle"
                  className="sec6 "
                  src="/assets/images/MessUp_Holo_Circle.png"
                />
              </div>

              <div id="c10" className="column" style={{ zIndex: 2 }}>
                <div className="texture2"></div>
                <div className="texture"></div>
                
                <div className="texture2"></div>
                <div className="texture"></div>

                <p
                  className="testo1 v sec2  show-sm primo"
                  style={{ zIndex: 99 }}
                >
                  <span style={{ color: "#FF6600" }} id="lets">
                    Let’s MessUp
                  </span>
                  <span style={{ color: "#fff" }}>.</span>
                </p>

                <div className="sec3  ">
                  <div id="over3">
                    <div className="texture2 wtf"></div>
                  </div>
                  <img id="WTF-Sticker_01" src="/assets/images/WTF-Sticker_01.png" />
                </div>

                <img
                  id="YOLO-2_-Sticker"
                  className="sec7 show-md"
                  src="/assets/images/YOLO-2_-Sticker_08.png"
                />
              </div>

              {/* <div id="c11" className="column" style={{ zIndex: 1 }}>
                <div className="texture2"></div>
                <div className="texture"></div>

                <p
                  className="testo1 v sec2  show-sm primo"
                  style={{ zIndex: 99 }}
                >
                  <span style={{ color: "#FF6600" }} id="lets">
                    Let’s MessUp
                  </span>
                  <span style={{ color: "#fff" }}>.</span>
                </p>

                <div className="sec3  ">
                  <div id="over3">
                    <div className="texture2 wtf"></div>
                  </div>
                  <img id="WTF-Sticker_01" src="/assets/images/WTF-Sticker_01.png" />
                </div>

                <img
                  id="YOLO-2_-Sticker"
                  className="sec7 show-md"
                  src="/assets/images/YOLO-2_-Sticker_08.png"
                />
              </div> */}
              {/*
              <div id="c12" className="column" style={{ zIndex: 0 }}>
                <div className="texture2"></div>
                <div className="texture"></div>
              </div>

              <div id="c13" className="column" style={{ zIndex: -1 }}>
                <div className="texture2"></div>
                <div className="texture"></div>
              </div>

              <div id="c14" className="column">
                <div className="texture2"></div>
                <div className="texture"></div>
              </div>
              */}
            </div>
          </div>
          <div id="triggerFooter"></div>
          <div style={{ position: "relative" }}>
            <img
              className="toHide secBottom"
              id="messupBottom"
              src="/assets/images/SKALE-LP-bottom.png"
            />
            <img
              className="toHide secBottom"
              id="r_web"
              src="/assets/images/R_Web.png"
            />
          </div>
          <div id="messFooter" className="toHide secFooter">
            <div id="quicker">
              <span className="overflow">
                <h3 className="bu" data-delay=".2" style={{ margin: 0 }}>
                  話し合った方が早いです。
                </h3>
              </span>
            </div>

            <div id="footer-links">
              <span className="overflow">
                <span
                  style={{ display: "inline-block" }}
                  className="bu"
                  data-delay=".3"
                >
                  <a href="">Email</a>
                </span>
              </span>
            </div>

            <div id="iFooter" className="">

              <span
                id="i3"
                className="-flip iFooterI c-header_brand"
                aria-label="Go to home page"
              >
                <div className="c-header_brand-back">
                  <div></div>
                </div>
                <div className="c-header_brand-front">
                  <div></div>
                </div>
              </span>
              <div
                id="triggerR"
                style={{ position: "absolute", bottom: 0 }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
