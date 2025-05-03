'use client';

import { useEffect } from 'react';
import { preloadImages } from '@/utils/imageUtils';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
gsap.config({
  nullTargetWarn: false,
})

function getStagger(totalItems: number) {
  return `<${(0.8 / totalItems).toFixed(2)}`;
}

function debounce(func: Function, wait = 200) {
  let timeout: ReturnType<typeof setTimeout>;
  return function executedFunction(...args: any[]) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export function useInitialLoader() {
  useEffect(() => {
    const $el = {
      initialOverlay: {
        el: document.querySelector('[data-js="initial-overlay"]') as HTMLElement,
        preloadImages: document.querySelectorAll('[data-js="initial-overlay_preload"] img') as NodeListOf<HTMLImageElement>,
      },
      scenes: document.querySelector('[data-js="scenes"]') as HTMLElement,
      mapWrap: document.querySelectorAll('[data-js="map"]') as NodeListOf<HTMLElement>,
      map: {
        inner: document.querySelector('[data-js="scene-map_inner"]') as HTMLElement,
        text: document.querySelector('[data-js="scene-map_text"]') as HTMLElement,
      },
      scene: {
        '01': {
            brand: document.querySelector('[data-js="text-brand"]') as HTMLElement,
            heading: document.querySelector('[data-js="text-heading"]') as HTMLElement,
            heading02: document.querySelector('[data-js="text-heading02"]') as HTMLElement,
        },
      },
    };

    // Chỉ chạy nếu có element overlay và hình ảnh cần preload
    if ($el.initialOverlay.el) {
      // Tải trước tất cả hình ảnh trong overlay_preload
      preloadImages($el.initialOverlay.preloadImages)
        .then(() => {
          console.log('Initial overlay images preloaded successfully');
          requestAnimationFrame(() => {
            gsap.to($el.initialOverlay.el, { autoAlpha: 0 });
          });
        })
        .catch((error) => {
          console.error('Error preloading images:', error);
        });
    }
   
      
      // Tạo các scene và timeline
      createSceneIntroIn();
      
      const sceneIntroOut = createSceneIntroOut();
      const scene01 = createScene01();
      
      // Sử dụng matchMedia để xử lý responsive
      gsap.matchMedia().add(
        {
          isSp: `not all and (min-width: 768px)`,
          isMd: `(min-width: 768px)`,
        },
        (context) => {
            // @ts-ignore
          const { isMd } = context.conditions;
          
          // Timeline chính kết hợp các scene
          const mainTl = gsap
            .timeline({
              scrollTrigger: {
                trigger: $el.scenes,
                start: 'top top',
                end: 'bottom top',
                scrub: 0.8,
                pin: true,
              },
            })
            .add(scene01, '>-0.1')
          
          // Timeline cho map link
          const sceneMapLink = createSceneMapLink(isMd);
          
          const mapTl = gsap
            .timeline({
              scrollTrigger: {
                trigger: $el.mapWrap,
                start: 'top top+=50%',
                end: 'top top-=20%',
                scrub: 1,
              },
            })
            .add(sceneMapLink);
          
          // Xử lý resize để refresh ScrollTrigger
          const debouncedResize = debounce(() => {
            mainTl.scrollTrigger?.refresh();
            mapTl.scrollTrigger?.refresh();
          });
          
          window.addEventListener('resize', debouncedResize);
          
          return () => {
            window.removeEventListener('resize', debouncedResize);
          };
        }
      );
    // Định nghĩa các scene
    function createSceneIntroIn() {
      
      gsap
        .timeline()
        // .from($el.map.rail, { autoAlpha: 0 }, '<0.6')
        // .from($el.map.plane01, { autoAlpha: 0, y: 20 }, '<')
    }
    
    function createSceneIntroOut() {
      // Timeline cho intro out animation
      return gsap.timeline()
        .to($el.map.inner, {
          scale: 0.8,
          y: -50,
          ease: 'power3.inOut',
          duration: 1.5,
        })
        .to($el.map.inner, {
          autoAlpha: 0,
          y: -100,
          ease: 'power3.in',
          duration: 1,
        }, '>0.2');
    }
    
    // Định nghĩa Scene 01 theo như bạn đã cung cấp
    function createScene01() {
      const stagger = getStagger(18);
      return gsap
        .timeline()
        .from($el.scene['01'].brand, { y: 100, duration: 1.5, ease: 'power3.out' })
        .from($el.scene['01'].heading, { autoAlpha: 1 }, '<')
    }
    
    
    function createSceneMapLink(isMd: boolean) {
      return gsap.timeline()
        .to($el.map.inner, {
          scale: isMd ? 0.65 : 0.9,
          height: !isMd ? '60%' : undefined,
          y: 160,
          ease: 'power3.out',
          duration: 1.5,
        })
        // .from($el.map.place, { autoAlpha: 0 }, '<0.5')
        // .from($el.map.link, { autoAlpha: 0 }, '<0.2');
    }
    
    // Cleanup function
    return () => {
      // Killing all GSAP animations and ScrollTriggers on unmount
      ScrollTrigger.getAll().forEach(t => t.kill());
      gsap.globalTimeline.clear();
    };
  }, []); // Chạy một lần khi component mount
}