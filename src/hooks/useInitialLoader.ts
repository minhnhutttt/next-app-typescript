"use client";

import { useEffect, useRef, useState } from "react";
import { preloadImages } from "@/utils/imageUtils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Đăng ký plugin GSAP
gsap.registerPlugin(ScrollTrigger);
gsap.config({ nullTargetWarn: false });

// Utility function cho debounce
const debounce = (func: Function, wait = 200) => {
  let timeout: ReturnType<typeof setTimeout>;
  return function(...args: any[]) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Khai báo frames của bướm bên ngoài để tránh tạo lại mỗi lần render
const BUTTERFLY_FRAMES = [
  "/assets/images/home/brand__butterfly-001.webp",
  "/assets/images/home/brand__butterfly-002.webp",
];

// Tạo cấu hình timeline chung để tái sử dụng
const createFlutterTimeline = () => gsap.timeline({
  repeat: -1,
  yoyo: true,
  repeatDelay: 0.2,
});

// Định nghĩa interface cho tỉ lệ di chuyển chuột
interface MouseMoveRatios {
  butterfly: number;
  brandj: number;
  stickbottle: number;
  framer: number;
}

export function useInitialLoader() {
  // Sử dụng useRef để lưu trữ intervalId để cleanup
  const butterflyIntervalRef = useRef<number>();
  // Lưu trữ tham chiếu đến context và các timeline
  const contextRef = useRef<any>(null);
  const timelineRefs = useRef<{
    intro?: gsap.core.Timeline;
    butterfly?: gsap.core.Timeline;
    letterJ?: gsap.core.Timeline;
    framer?: gsap.core.Timeline;
    scrollTriggers: any[];
  }>({ scrollTriggers: [] });
  
  // Tham chiếu để lưu trữ các phần tử DOM
  const elementsRef = useRef<any>(null);
  
  // Thiết lập tỉ lệ di chuyển chuột cho từng phần tử
  const mouseMoveRatios = useRef<MouseMoveRatios>({
    butterfly: 0.05,   // Tỉ lệ di chuyển của bướm (nhạy hơn)
    brandj: 0.03,      // Tỉ lệ di chuyển của chữ J
    stickbottle: 0.02, // Tỉ lệ di chuyển của chai (ít nhạy nhất)
    framer: 0.2,
  });
  
  // Lưu trữ vị trí chuột
  const mousePositionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Khởi tạo mảng lưu trữ ScrollTriggers
    timelineRefs.current.scrollTriggers = [];
    
    // Hàm khởi tạo các phần tử DOM một lần và không thay đổi
    const elements = {
      initialOverlay: {
        el: document.querySelector('[data-js="initial-overlay"]') as HTMLElement,
        preloadImages: document.querySelectorAll('[data-js="initial-overlay_preload"] img') as NodeListOf<HTMLImageElement>,
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
        img: document.querySelector('[data-js="butterfly-img"]') as HTMLImageElement,
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
    };
    
    // Lưu elements vào ref để sử dụng trong các hàm khác
    elementsRef.current = elements;

    // Preload hình ảnh
    if (elements.initialOverlay.el) {
      preloadImages(elements.initialOverlay.preloadImages)
        .then(() => {
          console.log("Initial overlay images preloaded successfully");
          requestAnimationFrame(() => {
            gsap.to(elements.initialOverlay.el, { autoAlpha: 0 });
          });
        })
        .catch((error) => {
          console.error("Error preloading images:", error);
        });
    }

    // Animation frames cho bướm
    const animateButterflyFrames = () => {
      if (!elements.butterfly.img) return;
      
      // Hủy interval cũ nếu có
      if (butterflyIntervalRef.current) {
        clearInterval(butterflyIntervalRef.current);
      }
      
      let currentFrame = 0;
      butterflyIntervalRef.current = window.setInterval(() => {
        currentFrame = (currentFrame + 1) % BUTTERFLY_FRAMES.length;
        elements.butterfly.img.src = BUTTERFLY_FRAMES[currentFrame];
      }, 100);
    };

    // Tạo scene intro
    const createSceneIntro = () => {
      return gsap.timeline()
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

    // Hàm này không phụ thuộc vào resize nên chỉ tạo một lần
    const sceneIntro = createSceneIntro();

    // Tạo nền tảng cho các animations
    const setupAnimations = () => {
      // Lấy kích thước hiện tại của cửa sổ và các phần tử
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;
      
      // Kiểm tra phần tử tồn tại
      const butterflyLayer = elements.butterfly.layer;
      const butterflyInner = elements.butterfly.inner;
      const brandjLayer = elements.brandj.layer;
      const brandjInner = elements.brandj.inner;
      const framerLayer = elements.framer.layer;
      const framerInner = elements.framer.inner;
      const framerFramer = elements.framer.framer;
      const framerAvocado = elements.framer.avocado;
      
      if (!butterflyLayer || !butterflyInner || !brandjLayer || !brandjInner || !framerLayer || !framerInner) {
        return { butterflyTl: null, letterJTl: null, framerTl: null };
      }
      
      gsap.set(butterflyLayer, {
        y: butterflyLayer.clientHeight + windowHeight,
        x: windowWidth * 0.5 + butterflyLayer.clientWidth * 0.25,
        scale: 1.5,
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


      // Tạo timeline cho butterfly với các giá trị cố định
      const butterflyTl = gsap.timeline()
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
      
      // Brandj
      gsap.set(brandjLayer, {
        y: windowHeight + brandjLayer.clientHeight * 3,
        x: windowWidth * 0.5 + brandjLayer.clientWidth * 0.75,
        scale: 1.5,
      });
      
      const letterJFlutterTl = createFlutterTimeline();
      letterJFlutterTl.to(brandjInner, {
        duration: gsap.utils.random(1.8, 2.2),
        ease: "sine.inOut",
        scaleX: gsap.utils.random(0.9, 0.96),
      });
      
      const letterJTl = gsap.timeline()
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

        // Framer
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
        })

        const framerTl = gsap.timeline()
        .to(framerLayer, {
          y: windowHeight * 0.4,
          x: windowWidth * 0.5 - framerLayer.clientWidth,
          ease: "power1.inOut",
        })
        .to(framerLayer, {
          y: -(framerLayer.clientHeight * 2),
          ease: "power1.inOut",
        });

        const avocadoFlutterTl = createFlutterTimeline();
        avocadoFlutterTl.to(framerAvocado, {
          duration: gsap.utils.random(1.6, 1.9),
          ease: "power1.out",
          y: `-=${gsap.utils.random(-8, -14)}`,
          rotation: gsap.utils.random(-40, -20),
        }).to(framerAvocado, {
          duration: gsap.utils.random(1.6, 1.9),
          ease: "power1.in",
          y: 100,
          rotation: gsap.utils.random(-40, -20),
        })
      
      return { butterflyTl, letterJTl, framerTl };
    };

    // Xóa tất cả ScrollTriggers hiện tại
    const clearScrollTriggers = () => {
      // Xóa tất cả ScrollTriggers đã lưu
      timelineRefs.current.scrollTriggers.forEach(trigger => {
        if (trigger) trigger.kill();
      });
      timelineRefs.current.scrollTriggers = [];
      
      // Xóa tất cả timeline
      if (timelineRefs.current.intro) timelineRefs.current.intro.kill();
      if (timelineRefs.current.butterfly) timelineRefs.current.butterfly.kill();
      if (timelineRefs.current.letterJ) timelineRefs.current.letterJ.kill();
      if (timelineRefs.current.framer) timelineRefs.current.framer.kill();
    };

    // Khởi tạo và cài đặt ScrollTrigger
    const initScrollTriggers = () => {
      // Xóa ScrollTriggers cũ
      clearScrollTriggers();
      
      // Thiết lập các animation mới
      const { butterflyTl, letterJTl, framerTl } = setupAnimations();
      
      if (!butterflyTl || !letterJTl || !framerTl) {
        console.error("Failed to create animations");
        return;
      }
      
      // Sử dụng matchMedia để xử lý responsive
      const mm = gsap.matchMedia();
      mm.add(
        {
          isSp: `not all and (min-width: 768px)`,
          isMd: `(min-width: 768px)`,
        },
        (context) => {
          // Lưu context để có thể revert sau này
          contextRef.current = context;
          
          // Tạo ScrollTrigger cho intro
          timelineRefs.current.intro = gsap.timeline({
            scrollTrigger: {
              trigger: ".scene-1",
              endTrigger: ".scene-4",
              start: "top top",
              end: "bottom bottom",
              scrub: 1,
            },
          }).add(sceneIntro);
          
          // Lưu ScrollTrigger
          if (timelineRefs.current.intro.scrollTrigger) {
            timelineRefs.current.scrollTriggers.push(
              timelineRefs.current.intro.scrollTrigger
            );
          }
          
          // Tạo ScrollTrigger cho butterfly
          timelineRefs.current.butterfly = gsap.timeline({
            scrollTrigger: {
              trigger: ".scene-1",
              endTrigger: ".scene-6",
              start: "top top",
              end: "bottom bottom",
              scrub: 1,
            },
          }).add(butterflyTl);
          
          // Lưu ScrollTrigger
          if (timelineRefs.current.butterfly.scrollTrigger) {
            timelineRefs.current.scrollTriggers.push(
              timelineRefs.current.butterfly.scrollTrigger
            );
          }
          
          // Tạo ScrollTrigger cho letterJ
          timelineRefs.current.letterJ = gsap.timeline({
            scrollTrigger: {
              trigger: ".scene-1",
              endTrigger: ".scene-8",
              start: "top top",
              end: "bottom bottom",
              scrub: 1,
            },
          }).add(letterJTl);
          
          // Lưu ScrollTrigger
          if (timelineRefs.current.letterJ.scrollTrigger) {
            timelineRefs.current.scrollTriggers.push(
              timelineRefs.current.letterJ.scrollTrigger
            );
          }

          // Tạo ScrollTrigger cho framer
          timelineRefs.current.framer = gsap.timeline({
            scrollTrigger: {
              trigger: ".scene-1",
              endTrigger: ".scene-7",
              start: "top top",
              end: "bottom bottom",
              scrub: 1,
            },
          }).add(framerTl);
          
          // Lưu ScrollTrigger
          if (timelineRefs.current.framer.scrollTrigger) {
            timelineRefs.current.scrollTriggers.push(
              timelineRefs.current.framer.scrollTrigger
            );
          }
          
          // Bắt đầu animation cho bướm
          animateButterflyFrames();
        }
      );
    };

    // Hàm xử lý mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      // Cập nhật vị trí chuột
      mousePositionRef.current = {
        x: e.clientX,
        y: e.clientY
      };

      // Tính toán di chuyển dựa trên vị trí trung tâm màn hình
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      // Tính toán offset dựa trên vị trí chuột so với trung tâm
      const moveX = (centerX - e.clientX);
      const moveY = (centerY - e.clientY);
      
      // Áp dụng hiệu ứng parallax cho từng phần tử với tỉ lệ riêng
      if (elementsRef.current) {
        const elements = elementsRef.current;
        
        // Di chuyển butterfly
        if (elements.butterfly.inner) {
          gsap.to(elements.butterfly.inner, {
            x: moveX * mouseMoveRatios.current.butterfly,
            y: moveY * mouseMoveRatios.current.butterfly,
            duration: 0.5,
            ease: "power1.out"
          });
        }
        
        // Di chuyển brandj
        if (elements.brandj.inner) {
          gsap.to(elements.brandj.inner, {
            x: moveX * mouseMoveRatios.current.brandj,
            y: moveY * mouseMoveRatios.current.brandj,
            duration: 0.6,
            ease: "power1.out"
          });
        }

        // Di chuyển framer
        if (elements.framer.inner) {
          gsap.to(elements.framer.inner, {
            x: moveX * mouseMoveRatios.current.framer,
            y: moveY * mouseMoveRatios.current.framer,
            duration: 0.6,
            ease: "power1.out"
          });
        }
        
      }
    };

    // Khởi tạo animations
    initScrollTriggers();
    
    // Đăng ký sự kiện mousemove
    window.addEventListener("mousemove", handleMouseMove);
    
    // Hàm xử lý resize với khóa
    let isResizing = false;
    
    const handleResize = debounce(() => {
      // Tránh nhiều lần resize cùng lúc
      if (isResizing) return;
      isResizing = true;
      
      console.log("Window resized, updating animations");
      
      // Đảm bảo người dùng không đang cuộn trang
      window.requestAnimationFrame(() => {
        // Khởi tạo lại ScrollTriggers
        initScrollTriggers();
        
        // Đặt lại trạng thái resize
        isResizing = false;
      });
    }, 300);
    
    // Đăng ký sự kiện resize
    window.addEventListener("resize", handleResize);

    // Cleanup function khi component unmount
    return () => {
      // Hủy tất cả ScrollTriggers
      clearScrollTriggers();
      
      // Hủy tất cả các timeline còn lại
      gsap.globalTimeline.clear();
      
      // Hủy sự kiện resize và mouse move
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      
      // Hủy media context nếu có
      if (contextRef.current?.revert) {
        contextRef.current.revert();
      }
      
      // Hủy interval của bướm
      if (butterflyIntervalRef.current) {
        clearInterval(butterflyIntervalRef.current);
      }
    };
  }, []); // Chạy một lần khi component mount
}