"use client"
import { useEffect, useRef } from "react";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Observer } from "gsap/Observer";

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(Observer);
gsap.config({
  nullTargetWarn: false,
})

export default function Home() {
  const ref = useRef(null);
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  },[]);

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
  
  function isPhone(): boolean {
    return /mobile/i.test(navigator.userAgent) && !/ipad|tablet/i.test(navigator.userAgent);
  }

  let isStripe: any = null;
  let isSometimes: any = null;
  let isFact: any = null
  let isMatter: any = null
  let isBorn: any = null
  let isServizi: any = null
  let isFooter: any = null
  let isAnimFooter: any = null
  
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
      x: "0vw",
      zoom: 2.3,
    },
  };
  
  let sometimesC: any;
  const sometimesCoords = {
    desktop: {
      x: "138vw",
      zoom: 10,
    },
    mobile: {
      x: "283vw",
      zoom: 16,
    },
    mobileL: {
      x: "210vw",
      zoom: 14,
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
      zoom: 16,
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
    startPreload();
    applyRandomBackgroundPosition();
    initAnimations();
    initScrollTrigger();
    window.addEventListener("resize", handleResize);

    const htmlElement = document.getElementById('html');
    if (htmlElement?.classList.contains('touchevents') && isMobile()) {
      ScrollTrigger.defaults({
        scroller: '#wrapSite',
        markers: false,
      });
    }
  
  
    // Animation GSAP cho wrapContainer
    gsap.to('#wrapContainer', {
      scale: 1,
      opacity: 1,
      duration: 1,
      onComplete: () => {
        ScrollTrigger.refresh();
      },
    });

    const handleLoad = () => {
      document.getElementById("body")?.classList.add("loaded");
      startPreload();
    };
  
    if (typeof window !== "undefined") {
      window.addEventListener("load", handleLoad);
    }
  
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("load", handleLoad);
      }
    };
  }, []);
  
  function startPreload() {
    // Lấy chiều cao của phần tử lottie và cửa sổ
    lottieHeight = document.getElementById("lottie")?.offsetHeight || 0;
    const windowHeight = window.innerHeight;
  
    // Điều chỉnh padding-top cho #wrapSite dựa trên chiều cao của lottie
    const wrapSite = document.getElementById("wrapSite");
    if (wrapSite) {
      if (lottieHeight > windowHeight / 2) {
        wrapSite.style.paddingTop = "50vh";
      } else {
        wrapSite.style.paddingTop = `calc(100vh - ${lottieHeight}px)`;
      }
    }
  
    // Điều chỉnh margin-top cho .container
    const container = document.querySelector(".container") as HTMLElement;
    if (container) {
      container.style.marginTop = `-${lottieHeight / 2}px`;
    }
  
    // Tính khoảng cách giữa .container và đỉnh của trang
    const gap = container?.getBoundingClientRect().top || 0;
  
    // Tạo GSAP timeline để thực hiện animation
    const tl = gsap.timeline();
  
    tl.to("#progressStroke2", {
      strokeDashoffset: 0,
      ease: "expo.inOut",
      duration: 1.2,
      onComplete: () => {
        document.getElementById("body")?.classList.add("loadato");
        tl.to("#progressStroke2", {
          strokeDashoffset: 242,
          ease: "expo.inOut",
          duration: 0.8,
          delay: 0.5,
        });
      },
    });
  
    // Thiết lập timeout để thực hiện các hành động sau một khoảng thời gian nhất định
    setTimeout(() => {
      const lottieTop = document.getElementById("lottieTop");
      if (lottieTop) {
        lottieTop.style.opacity = "1";
        // Giả định `lottieTop` có phương thức `seek` và `play` (nếu dùng Lottie animation)
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
        gsap.to(".container", {
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
      }, 2800);
    }, 1900);
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
    // Khởi tạo Observer để lắng nghe các sự kiện cuộn (scroll), chạm (touch), và con trỏ (pointer)
    canAnim = true;
    
    Observer.create({
      // target: window, // Không cần chỉ định vì mặc định lắng nghe trên window
      type: "wheel,touch,pointer",  // Các loại sự kiện được lắng nghe
      
      onStop: (self) => {
        canAnim = true;
        console.log("Scroll stopped!");
      },
      
      onChangeY: (self) => {
        // Nếu không thể animation hoặc timeline đang chạy, không tiếp tục
        if (!canAnim) return;
        if (tl && tl.isActive()) return;
        
        const currentScroll = window.scrollY + window.innerHeight;
        canAnim = false;
  
        // Kiểm tra nếu cuộn tới gần cuối trang
        if (currentScroll + 5 > document.body.scrollHeight) {
          // Tạo GSAP animation cho #r_web
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
    const textures = document.querySelectorAll<HTMLElement>('.texture');
    const textures2 = document.querySelectorAll<HTMLElement>('.texture2');
  
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
      element.classList.remove("hide");
    });
  
    // Lấy tất cả các animation từ GSAP
    const anims = gsap.globalTimeline.getChildren(true, true, true);
    anims.forEach((anim) => {
      anim.revert();
      anim.kill();
    });
  
    // Xóa tất cả các ScrollTrigger hiện tại
    ScrollTrigger.getAll().forEach((trigger) => {
      trigger.kill();
    });
  
    gsap.killTweensOf("*");
  
    // Đặt lại vị trí và tỷ lệ cho wrapContainer
    gsap.set("#wrapContainer", { x: 0, y: 0, scale: 1 });
    const wrapContainer = document.getElementById("wrapContainer");
    if (wrapContainer) {
      wrapContainer.style.transform = "translate(0) scale(1)";
    }
  
    // Cuộn về đầu trang
    window.scrollTo(0, 0);
  
    // Khởi tạo lại các animation và ScrollTrigger
    initAnimations();
    initScrollTrigger();
  }
  
  function initAnimations() {
    let followY = 0;
  
    gsap.set('#lang span, #lang a', { transformOrigin: 'center left' });
  
    const wrapContainerHeight = document.getElementById('wrapContainer')?.offsetHeight || 0;
  
    if (isMobile()) {
      if (isMobileLandscape()) {
        gsap.to('#progressStroke2', {
          strokeDashoffset: 0,
          ease: 'none',
          scrollTrigger: {
            scrub: true,
            end: `+=${wrapContainerHeight + vhToPixel(1600)}`,
          },
        });
      } else {
        gsap.to('#progressStroke2', {
          strokeDashoffset: 0,
          ease: 'none',
          scrollTrigger: {
            scrub: true,
            end: `+=${wrapContainerHeight + vhToPixel(400)}`,
          },
        });
      }
    } else {
      gsap.to('#progressStroke2', {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: {
          scrub: true,
          end: `+=${document.body.offsetHeight + vhToPixel(300)}`,
        },
      });
    }
  }
  
  function initScrollTrigger() {
    console.log('initScrollTrigger');
  
    const htmlElement = document.getElementById('html');
    const isTouchEvent = htmlElement?.classList.contains('touchevents') && isMobile();
  
    stripeC = isTouchEvent ? stripeCoords.mobile : stripeCoords.desktop;
    sometimesC = isTouchEvent ? sometimesCoords.mobile : sometimesCoords.desktop;
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
  
    document.querySelectorAll('.toHide').forEach((el: any) => {
      el.style.display = 'inline-block';
      el.classList.remove('hide');
    });
  
    if (isTouchEvent) {
      initPositionsMobile();
    } else {
      initPositionsDesktop();
    }
  
    if (!isStripe) stripe();
  }
  
  useEffect(() => {
    
  }, []);

  function getElementOffsetTop(elementId: string): number {
    const element = document.getElementById(elementId);
    if (!element) throw new Error(`Element with id ${elementId} not found`);
    const rect = element.getBoundingClientRect();
    return rect.top + window.scrollY; // Cộng thêm scrollY để có tọa độ chính xác
  }
  
  function initPositionsDesktop() {
    // STRIPE
    let t = gsap.set("#wrapContainer", { scale: stripeC.zoom, y: 0 });
    posStripe = getElementOffsetTop("testolets") - getElementOffsetTop("wrapContainer") - window.innerHeight * 1.5;
    t.revert();
  
    // SOMETIMES
    t = gsap.set("#wrapContainer", { scale: sometimesC.zoom, y: 0 });
    posSometimes = getElementOffsetTop("sometimes") - getElementOffsetTop("wrapContainer") - window.innerHeight / 2;
    t.revert();
  
    // FACTS
    t = gsap.set("#wrapContainer", { scale: factsC.zoom, y: 0 });
    posFact = getElementOffsetTop("facts") - getElementOffsetTop("wrapContainer") - window.innerHeight;
    t.revert();
  
    // BORN
    t = gsap.set("#wrapContainer", { scale: bornC.zoom, y: 0 });
    posBorn = getElementOffsetTop("born") - getElementOffsetTop("wrapContainer") - window.innerHeight / 2;
    t.revert();
  
    // RESULT MATTER
    t = gsap.set("#wrapContainer", { scale: matterC.zoom, y: 0 });
    posResult = getElementOffsetTop("stripeTrigger") - getElementOffsetTop("wrapContainer") - window.innerHeight / 2;
    t.revert();
  
    // RESULT LETSO = SERVIZI!
    t = gsap.set("#wrapContainer", { scale: serviziC.zoom, y: 0 });
    posLetso = getElementOffsetTop("letsoTrigger") - getElementOffsetTop("wrapContainer") - window.innerHeight / 2;
    t.revert();
  
    // FOOTER
    t = gsap.set("#wrapContainer", { scale: footerC.zoom, y: 0 });
    posFooter = getElementOffsetTop("triggerFooter") - getElementOffsetTop("wrapContainer") - window.innerHeight / 1.5;
    t.revert();
  }
  
  function initPositionsMobile() {
    // STRIPE
    let t = gsap.set("#wrapContainer", { scale: stripeC.zoom, y: 0 });
    posStripe = getElementOffsetTop("testolets") - getElementOffsetTop("wrapContainer") - window.innerHeight * 1.5;
    t.revert();
  
    // SOMETIMES
    if (isMobileLandscape()) {
      sometimesC = sometimesCoords.mobileL;
      t = gsap.set("#wrapContainer", { scale: sometimesC.zoom, y: 0 });
      posSometimes = getElementOffsetTop("sometimes") - getElementOffsetTop("wrapContainer") - window.innerHeight * 2;
      t.revert();
    } else {
      t = gsap.set("#wrapContainer", { scale: sometimesC.zoom, y: 0 });
      posSometimes = getElementOffsetTop("sometimes") - getElementOffsetTop("wrapContainer") - window.innerHeight / 2;
      t.revert();
    }
  
    // FACTS
    t = gsap.set("#wrapContainer", { scale: factsC.zoom, y: 0 });
    posFact = getElementOffsetTop("facts") - getElementOffsetTop("wrapContainer") - window.innerHeight;
    t.revert();
  
    // BORN
    if (isMobileLandscape()) {
      bornC = bornCoords.mobileL;
      t = gsap.set("#wrapContainer", { scale: bornC.zoom, y: 0 });
      posBorn = getElementOffsetTop("born") - getElementOffsetTop("wrapContainer") - window.innerHeight * 2;
      t.revert();
    } else {
      t = gsap.set("#wrapContainer", { scale: bornC.zoom, y: 0 });
      posBorn = getElementOffsetTop("born") - getElementOffsetTop("wrapContainer") - window.innerHeight / 2;
      t.revert();
    }
  
    // RESULT MATTER
    t = gsap.set("#wrapContainer", { scale: matterC.zoom, y: 0 });
    posResult = getElementOffsetTop("stripeTrigger") - getElementOffsetTop("wrapContainer") - window.innerHeight;
    t.revert();
  
    // RESULT LETSO = SERVIZI!
    t = gsap.set("#wrapContainer", { scale: serviziC.zoom, y: 0 });
    posLetso = getElementOffsetTop("letsoTrigger") - getElementOffsetTop("wrapContainer") - window.innerHeight / 2;
    t.revert();
  
    // FOOTER
    t = gsap.set("#wrapContainer", { scale: 1, y: 0 });
    posFooter = getElementOffsetTop("triggerFooter") - getElementOffsetTop("wrapContainer") - window.innerHeight / 1.5;
    t.revert();
  }

  function stripe(): void {
    isStripe = gsap.to("#wrapContainer", {
      id: "STRIPE",
      scale: stripeC.zoom,
      x: stripeC.x,
      y: () => {
        const scrollTop = document.documentElement.classList.contains("touchevents") && isMobile()
          ? (document.getElementById("wrapSite") as HTMLElement)?.scrollTop || 0
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
    // SOMETIMES AROUND
    isSometimes = gsap.to("#wrapContainer", {
      id: "SOMETIMES AROUND",
      scrollTrigger: {
        trigger: "#testolets",
        start: "bottom top",
        end: "+=950",
        markers: false,
        onEnter() {
          const elements = document.querySelectorAll(".toHide:not(#sometimes, .sec4)");
          elements.forEach((el) => {
            (el as HTMLElement).style.display = "none";
            el.classList.add("hide");
          });
        },
        onLeaveBack() {
          const sections = document.querySelectorAll(".toHide.sec0, .toHide.sec1, .toHide.sec2, .toHide.sec3");
          sections.forEach((el) => {
            (el as HTMLElement).style.display = "inline-block";
            el.classList.remove("hide");
          });
        },
        onEnterBack() {
          const elements = document.querySelectorAll(".toHide:not(#sometimes, .sec4)");
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
          const scrollTop = document.documentElement.classList.contains("touchevents") && isMobile()
            ? (document.getElementById("wrapSite") as HTMLElement)?.scrollTop || 0
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
          force3D: false,
          xPercent: 20,
        },
        "start"
      );
  
      po.to(
        "#yolo",
        {
          id: "YOLOSO",
          force3D: false,
          y: (i, el) => (1 - parseFloat("0.45")) * -vwToPixel(5),
        },
        "start"
      );
    }
  }
  
  function fact() {
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
            (document.documentElement.classList.contains("touchevents") && isMobile()
              ? (document.getElementById("wrapSite")?.scrollTop || 0)
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
        x: "+=60",
      },
      "start"
    );
    anio.to(
      "#NOT-COOL-Sticker",
      {
        x: "-=60",
      },
      "start"
    );
  }
  
  function born() {
    // BORN AROUND
    isBorn = gsap.to("#wrapContainer", {
      id: "BORN AROUND",
      scrollTrigger: {
        trigger: "#holoFact",
        start: "bottom top",
        end: "+=950",
        markers: false,
        onEnter: () => {
          const toHideElements = document.querySelectorAll(".toHide:not(.sec6)");
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
            (document.documentElement.classList.contains("touchevents") && isMobile()
              ? (document.getElementById("wrapSite")?.scrollTop || 0)
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
          const toHideElements = document.querySelectorAll(".toHide:not(.sec6):not(.sec7)");
          toHideElements.forEach((el:any) => {
            el.style.display = "none";
            el.classList.add("hide");
          });
          
          const sec7:any = document.querySelector(".toHide.sec7");
          if (sec7) {
            sec7.style.display = "inline-block";
            sec7.classList.remove("hide");
          }
        },
        onEnterBack: () => {
          const sec7:any = document.querySelector(".toHide.sec7");
          if (sec7) {
            sec7.style.display = "inline-block";
            sec7.classList.remove("hide");
          }
  
          const sec6:any = document.querySelector(".toHide.sec6");
          if (sec6) {
            sec6.style.display = "inline-block";
            sec6.classList.remove("hide");
          }
        },
        onLeave: () => {
          const sec8:any = document.querySelector(".toHide.sec8");
          if (sec8) {
            sec8.style.display = "inline-block";
            sec8.classList.remove("hide");
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
            (document.documentElement.classList.contains("touchevents") && isMobile()
              ? (document.getElementById("wrapSite")?.scrollTop || 0)
              : window.scrollY);
          return `${0 - pos2}px`;
        },
        scale: matterC.zoom,
        force3D: false,
        ease: "power1.inOut",
        onComplete: () => {
          if (!isServizi) servizi(); // SERVIZI E POI FOOTER
  
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
            !document.getElementById("YOLO-2_-Sticker")?.classList.contains("ita")
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
  function servizi() {
    // LETS
    isServizi = gsap.to("#wrapContainer", {
      id: "LETS MESSUP",
      x: serviziC.x,
      scale: serviziC.zoom,
      y: () => {
        const pos2 =
          posLetso -
          (document.documentElement.classList.contains("touchevents") && isMobile()
            ? (document.getElementById("wrapSite")?.scrollTop || 0)
            : window.scrollY);
        return `${0 - pos2}px`;
      },
      force3D: false,
      immediateRender: false,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#testomatter",
        start: "bottom top",
        end: "+=500",
        markers: false,
        scrub: true,
        immediateRender: false,
        onEnter: () => {
          const toHideElements = document.querySelectorAll(".toHide:not(.sec8)");
          toHideElements.forEach((el: any) => {
            el.style.display = "none";
            el.classList.add("hide");
          });
  
          const sec8: any = document.querySelector(".toHide.sec8");
          if (sec8) {
            sec8.style.display = "inline-block";
            sec8.classList.remove("hide");
          }
        },
        onLeaveBack: () => {
          const toHideElements = document.querySelectorAll(".toHide:not(.sec7)");
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
          const toHideElements = document.querySelectorAll(".toHide:not(.sec8)");
          toHideElements.forEach((el: any) => {
            el.style.display = "none";
            el.classList.add("hide");
          });
  
          const sec8: any = document.querySelector(".toHide.sec8");
          if (sec8) {
            sec8.style.display = "inline-block";
            sec8.classList.remove("hide");
          }
        },
      },
      onComplete: () => {
        if (!isFooter) footer();
      },
    });
  
    if (document.documentElement.classList.contains("no-touchevents")) {
      // parallax tagsv LETS
      gsap.to("#letso", {
        id: "TAGSV",
        ease: "Power1.easeInOut",
        scrollTrigger: {
          trigger: "#letsoTrigger",
          start: "top-=20% bottom",
          end: `+=${vwToPixel(200)}px`,
          scrub: 1,
          markers: false,
        },
        y: (i, el) => (1 - 0.3) * vwToPixel(90),
      });
  
      // parallasse riga servizi esterna.
    }
  
    gsap.to("#tagsvE", {
      id: "TAGSV",
      scrollTrigger: {
        trigger: "#letsoTrigger",
        start: "top bottom",
        end: `+=${vwToPixel(200)}px`,
        scrub: 1,
        markers: false,
      },
      y: (i, el) => (1 - 0.85) * vwToPixel(98),
    });
  }
  function footer() {
  
    isFooter = gsap.to("#wrapContainer", {
      id: "FOOTER",
      x: footerC.x,
      y: () => {
        const pos2 =
          posFooter -
          (document.documentElement.classList.contains("touchevents") && isMobile()
            ? (document.getElementById("wrapSite")?.scrollTop || 0)
            : window.scrollY);
        console.log(posFooter, window.scrollY);
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

          <div className="sec0">
            <div id="lottieTexture"></div>
            <lottie-player id="lottie" ref={ref} src="/assets/images/MessUpLottie/2406_DEF-2.json" background="transparent"  speed="1" autoplay mode="normal"></lottie-player>
          </div>

          <div id="wrapColumns">
            <div className="containerMix relative">
              <h1 className="sec1 toHide z-[99]" id="titolone">
                We’d rather
                <br />
                be{" "}
                <span className="z-[-2]">
                  <span className="a">
                    <img src="/assets/images/txt/wrong.png" className="svgTitolo" />
                  </span>
                </span>
                <br />
                than{" "}
                <span className="z-[-1]">
                  <span className="a z-[-1]">
                    <img
                      src="/assets/images/txt/boring.png"
                      className="svgTitolo boring"
                    />
                  </span>
                </span>
                <br />
                How about
                <br />
                you?
              </h1>

              <div id="primoTrigger"></div>
              <div className="sec3 toHide " id="stripe">
                <div id="stripeInner"></div>
              </div>
              <div className="sec7 toHide z-[4]" id="stripeMatter">
                <div id="stripeMatterInner"></div>
              </div>
              <div className="sec7 toHide " id="stripeTrigger"></div>
              <div className="sec8 toHide " id="letsoTrigger"></div>

              <div id="messHolo" className="sec4 toHide ">
                <img id="MessHoloImg" src="/assets/images/MessUp_Holo.jpg" />
              </div>

              <div id="c1" className="column z-[1001]">
                <div id="heighter"></div>
                <div className="texture2"></div>
                <div className="texture"></div>

                <p
                  id="letso"
                  className=" results v big biggo lets  sec8 toHide  "
                >
                  <span className="inline-block relative">Let’s</span>{" "}
                  <img
                    className="inline-block relative svgMessupLetso"
                    src="/assets/images/txt/MessUp.png"
                  />
                </p>
              </div>

              <div id="c2" className="column z-[1]">
                <div className="texture2"></div>
                <div className="texture"></div>

                <p id="tagsv" className="tags v  sec8 toHide  ">
                  <span>Brand strategy</span>
                  <span>Brand naming</span>
                  <span>Visual identity</span>
                </p>
              </div>

              <div id="c3" className="column z-[1]">
                <div className="texture2"></div>
                <div className="texture"></div>

                <div className="sec5 toHide maskFact z-[1]">
                  <span className="sec5 toHide  fact z-[5]" id="facts">
                    F
                  </span>
                </div>

                <img
                  className="sec5 toHide show-md"
                  id="NOT-COOL-Sticker"
                  src="/assets/images/NOT-COOL-Sticker_08.png"
                />

                <p id="tagsvE" className="tags v  sec8 toHide  ">
                  <span>Web design</span>
                  <span>Video and photo production</span>
                </p>
              </div>

              <div id="c4" className="column z-0">
                <div className="texture2"></div>
                <div className="texture"></div>

                <div className="sec5 toHide maskFact">
                  <span className="sec5 toHide  fact z-[4]">a</span>
                </div>

                <img
                  className="sec5 toHide "
                  id="holoFact"
                  src="/assets/images/MessUp_Holo.jpg"
                />

                <img
                  className="sec8 toHide "
                  id="holoFact2"
                  src="/assets/images/MessUp_Holo.jpg"
                />

                <p className="v pillo sec5 toHide show-sm factu text-[#FF6600]">
                  <span className="pollo-span invisible">
                    Not everyone likes us.
                  </span>
                  <br />
                  <span className="pollo-span">
                    Not everyone likes us<span className="text-white">.</span>
                  </span>
                </p>
              </div>

              <div id="c5" className="column z-[5]">
                <div className="texture2"></div>
                <div className="texture"></div>

                <span className="sec3 toHide " id="testoletsSpan">
                  <div className="sec3" id="over0">
                    <div className="texture2"></div>
                  </div>
                  <p id="testolets" className="testolets v">
                    You are looking for a communication agency, but we
                  </p>
                </span>

                <div id="sometimes" className="hor sec4 toHide biggo ">
                  <p className="testo2">Sometimes</p>
                  <p className="testo2">you need to</p>
                  <p className="testo2 te">
                    <img className="svgMessup" src="/assets/images/txt/MessUp.png" />a
                    bit.
                  </p>

                  <div className="a1">
                    <p>It's communication, not an Excel sheet.</p>
                    <p className="text-[#FF6600]">
                      No filters, no brakes, no fear
                      <span className="text-white">.</span>
                    </p>
                    <p id="spacer">More fun, isn't it?</p>
                  </div>

                  <div id="yolo" className="oh-shut-up"></div>
                </div>

                <div className="sec5 toHide maskFact">
                  <span className="sec5 toHide  fact z-[3]">c</span>
                </div>

                <p className="v pillo sec5 toHide  show-sm factu">
                  <span className="pollo-span">
                    But someone does: brands that
                  </span>
                  <br />
                  <span className="pollo-span">
                    don't want to be background noise.
                  </span>
                </p>

                <span className="sec7 toHide ">
                  <p id="testomatter" className="testomatter v">
                    We love mess, but we always have the goal in mind.
                  </p>
                </span>
              </div>

              <div id="c6" className="column z-[10]">
                <div className="texture2"></div>
                <div className="texture"></div>

                <span className="sec3 toHide " id="testoletsSpan">
                  <div id="over1">
                    <div className="texture2"></div>
                  </div>
                  <p className="testolets v">
                    are more of{" "}
                    <span className="text-[#FF6600]">
                      a collective of hot heads
                    </span>
                    . However, you
                  </p>
                </span>

                <div className="sec5 toHide maskFact">
                  <span className="sec5 toHide  fact z-[2]">t:</span>
                </div>

                <p className="v pillo sec5 toHide  show-sm factu">
                  <span className="pollo-span">Trust us, together we</span>
                  <br />
                  <span className="pollo-span">
                    will stir up quite a storm.
                  </span>
                </p>

                <p className="v pillo sec5 toHide show-md text-[#FF6600]">
                  <span className="pollo-span invisible">
                    Not everyone likes us.
                  </span>
                  <br />
                  <span className="pollo-span">
                    Not everyone likes us<span className="text-white">.</span>
                  </span>
                </p>

                <span className="sec7 toHide ">
                  <p className="testomatter v">
                    And we are so stubborn that we keep going when
                  </p>
                </span>
              </div>

              <div id="c7" className="column z-[10]">
                <div className="texture2"></div>
                <div className="texture"></div>

                <div className="sec3 toHide " id="testoletsSpan">
                  <div id="over2">
                    <div className="texture2"></div>
                  </div>
                  <p className="testolets v">
                    can ask us everything that machines - and those
                  </p>
                </div>

                <p className="v pillo sec5 toHide  show-md">
                  <span className="pollo-span">
                    But someone does: brands that
                  </span>
                  <br />
                  <span className="pollo-span">
                    don't want to be background noise.
                  </span>
                </p>

                <span className="sec7 toHide ">
                  <p className="testomatter v">
                    others give up.{" "}
                    <span className="text-[#FF6600]">
                      That's how we get where others don't
                    </span>
                    .
                  </p>
                </span>
              </div>

              <div id="c8" className="column z-[1]">
                <div className="texture2"></div>
                <div className="texture"></div>

                <p className="sec3 toHide  testolets v">
                  who think like a machine - will never give you.
                </p>

                <p className="testo1 v sec2 toHide show-sm primo z-[99]">
                  Your brand wants to do the right thing?
                  <br />
                </p>

                <div id="born" className="hor sec6 toHide biggo">
                  <p className="testo2">Born digital,</p>
                  <p className="testo2">die-hard</p>
                  <p className="testo2">
                    <img className="svgBorn" src="/assets/images/txt/humans.png" />
                  </p>

                  <div className="a1">
                    <p>We grew up immersed in technology,</p>
                    <p>so we take it for granted.</p>
                    <div id="spacer"></div>
                    <p className="text-[#FF6600]">
                      But we're here to do things it was not
                    </p>
                    <p className="text-[#FF6600]">
                      meant for<span className="text-white">.</span>
                    </p>
                  </div>
                  <img
                    id="LETS-ROLL-Sticker_01"
                    className="sec6 toHide "
                    src="/assets/images/LETS-ROLL-Sticker_01.png"
                  />
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
                <p id="testo1" className="testo1 v sec2 toHide z-[99]">
                  <span className="show-md">
                    Your brand wants to do the right thing?
                    <br />
                    Easy: just do as everybody else.
                  </span>
                  <span className="show-sm primo">
                    Easy: just do as everybody else.
                  </span>
                </p>

                <div className="sec3 toHide ">
                  <div id="over2">
                    <div className="texture2"></div>
                  </div>
                  <p className="testolets v">
                    For example, something that will truly amaze you.
                  </p>
                </div>

                <div className="shinju" id="shinju2"></div>

                <div id="_stripeOrange"></div>

                <img
                  id="MessUp_Holo_Circle"
                  className="sec6 toHide "
                  src="/assets/images/MessUp_Holo_Circle.png"
                />
              </div>

              <div id="c10" className="column z-[2]">
                <div className="texture2"></div>
                <div className="texture"></div>
                <p className="testo1 v sec2 toHide z-[99]">
                  <span className="show-md">
                    But you are not like everybody else, right?
                    <br />
                    <span className="text-[#FF6600]" id="lets">
                      Let’s MessUp
                    </span>
                    <span className="text-white">.</span>
                  </span>
                  <span className="show-sm">
                    But you are not like everybody else, right?
                  </span>
                </p>
              </div>

              <div id="c11" className="column z-[1]">
                <div className="texture2"></div>
                <div className="texture"></div>

                <p className="testo1 v sec2 toHide show-sm primo z-[99]">
                  <span className="text-[#FF6600]" id="lets">
                    Let’s MessUp
                  </span>
                  <span className="text-white">.</span>
                </p>

                <div className="sec3 toHide ">
                  <div id="over3">
                    <div className="texture2 wtf"></div>
                  </div>
                  <img id="WTF-Sticker_01" src="/assets/images/WTF-Sticker_01.png" />
                </div>

                <img
                  id="YOLO-2_-Sticker"
                  className="toHide sec7 show-md"
                  src="/assets/images/YOLO-2_-Sticker_08.png"
                />
              </div>

              <div id="c12" className="column z-0">
                <div className="texture2"></div>
                <div className="texture"></div>
              </div>

              <div id="c13" className="column z-[-1]">
                <div className="texture2"></div>
                <div className="texture"></div>
              </div>

              <div id="c14" className="column">
                <div className="texture2"></div>
                <div className="texture"></div>
              </div>
            </div>
          </div>
          <div id="triggerFooter"></div>
          <div className="relative">
            <img
              className="toHide secBottom"
              id="messupBottom"
              src="/assets/images/MessUp_Bottom.png"
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
                <h3 className="bu m-0" data-delay=".2">
                  Quicker to talk it out.
                </h3>
              </span>
            </div>

            <div id="footer-links">
              <span className="overflow">
                <span className="bu inline-block" data-delay=".3">
                  <a href="mailto:yo@messup.it">Email</a>
                </span>
              </span>
              <span className="overflow">
                <span className="bu inline-block" data-delay=".4">
                  <a href="https://www.instagram.com/messup.it">Instagram</a>
                </span>
              </span>
              <span className="overflow">
                <span className="bu inline-block" data-delay=".5">
                  <a href="https://messup.it/whatamess.php?lang=en">Nothing</a>
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
              <div id="triggerR" className="absolute bottom-0"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
    
  );
}
