"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.config({
  nullTargetWarn: false,
});

interface ClipPathDimensions {
  vertical: number;
  horizontal: number;
}

const Fv: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('.preload-text', {
        yPercent: 100,
        rotate: 5
      });

      gsap.set('.fv-bg-img', {
        opacity: 0
      });

      gsap.set('.preloader-container', {
        clipPath: 'inset(50%)'
      });

      setTimeout(() => {
        const tl: gsap.core.Timeline = gsap.timeline({});

        tl.to('.preload-text', {
          yPercent: 0,
          duration: 0.5,
          rotate: 0,
          ease: "power2.out",
          stagger: 0.2,
        }).to('.preloader-text-1', {
          yPercent: -100,
          duration: 1.5,
          ease: "power2.out"
        }, '+=0.6').to('.preloader-text-2', {
          yPercent: 100,
          duration: 1,
          ease: "power2.out"
        }, '<').to('.preloader-container', {
          clipPath: 'inset(0%)',
          duration: 1.5,
          ease: "power4.inOut"
        }, '<-0.2');
      }, 100);

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="h-screen relative">
      <div className="preloader-container absolute inset-0 z-10">
        <div className="w-full relative h-svh flex flex-col items-end justify-end px-20 bg-white js-preloader-container mb-40 md:mb-0" data-section="white">

<img
          className="w-full h-full object-cover object-center absolute inset-0"
          src="/assets/images/fv-img.webp"
          alt="Background"
        />
          <div className="md:hidden w-full overflow-hidden grid grid-cols-12 gap-y-20 relative mb-20 z-1 text-white uppercase">
            <div className="col-span-12 overflow-hidden">
              <span className="small block text-14 flex flex-col tracking-[0] mr-auto font-bold leading-none js-preloader-reel" aria-hidden="true">
                <span>Speaker</span>
                <span>reel (00:43)</span>
              </span>
            </div>
            <div className="col-span-6 relative rounded-[0.4rem] overflow-hidden js-preloader-reel">
              <div className="aspect-video"></div>

              <video className="w-full object-cover absolute top-0 left-0" data-lazy-video data-src="httpmd://player.vimeo.com/progressive_redirect/playback/1071595198/rendition/1080p/file.mp4?loc=external&log_user=0&signature=3966f0f0fe6e27f2b187f241b359f0ce292d5a6b41dcb3046d4036829febce14"
                data-autoplay="true" preload="none" loop muted>
              </video>

            </div>
          </div>

          <h1 className="sr-only">Visionary Thinker, Author, Brand Innovator & Speaker</h1>

          <div className="h1 w-full z-1 pb-30 text-white h1-big">
            <div className="w-full relative flex flex-col md:text-center js-split">
              Visionary
            </div>
            <span className="w-full overflow-hidden md:flex justify-between z-0 relative" aria-label="Thinker And">
              <span className="js-split">Thinker</span>
              <span className="small mt-10 ml-15 block text-14 md:flex flex-col tracking-[0] mr-auto" aria-hidden="true">
                <span className="block overflow-hidden">
                  <span className="block js-preloader-global-text">Global brand</span>
                </span>
                <span className="block overflow-hidden">
                  <span className="block js-preloader-global-text">Innovator</span>
                </span>
              </span>
              <span className="js-split">And</span>
            </span>
            <div className="grid grid-cols-12 md:grid-cols-24 gap-x-1 relative z-4">
              <div className="col-span-7 hidden md:grid grid-cols-12 gap-x-20  z-2 will-change-transform">
                <div className="col-span-8 md:mt-12 relative z-2">
                  <div className="relative js-scale [clip-path:inset(0%_0%_0%_0%_round_0.4rem)]">
                    <div className="aspect-video"></div>
                    <div className="js-preloader-reel size-full object-cover absolute z-2 top-0 left-0 will-change-transform clip-path-[0.4rem]">
                      <video className="size-full object-cover absolute top-0 left-0" data-lazy-video data-lazy data-src="httpmd://player.vimeo.com/progressive_redirect/playback/1071595198/rendition/1080p/file.mp4?loc=external&log_user=0&signature=3966f0f0fe6e27f2b187f241b359f0ce292d5a6b41dcb3046d4036829febce14"
                        data-autoplay="true" preload="none" loop muted>
                      </video>
                    </div>

                  </div>
                </div>
                <div className="col-span-4">
                  <span className="small block mt-10 text-14 flex flex-col tracking-[0] mr-auto" aria-hidden="true">
                    <span className="block overflow-hidden">
                      <span className="block js-preloader-global-text">Speaker</span>
                    </span>
                    <span className="block overflow-hidden">
                      <span className="block js-preloader-global-text">reel (00:43)</span>
                    </span>
                  </span>
                </div>
              </div>
              <div className="col-span-10 md:col-span-14">
                <span className="w-full overflow-hidden js-split">Author</span>
              </div>
              <div className="col-span-2 md:col-span-3 text-right">
                <span className="w-full overflow-hidden js-split">↓</span>
              </div>
            </div>

          </div>
        </div>

        
      </div>
      <div className="absolute inset-0 flex items-center justify-center flex-col text-[60px] md:text-[134px] font-bold leading-none text-center">
        <div className="preloader-text-1">
          <div className="overflow-hidden">
            <p className="preload-text">SUNNY</p>
          </div>
          <div className="overflow-hidden">
            <p className="preload-text">BONNELL</p>
          </div>
        </div>
        <div className="js-preloader-handler absolute overflow-hidden mx-auto left-0 right-0 w-[20rem] md:w-[40rem]">
          <div className="w-full h-[12rem] md:h-[25rem] js-preloader-handler-inner"></div>
        </div>
        <div className="overflow-hidden preloader-text-2">
          <p className="preload-text">©2025</p>
        </div>
      </div>
    </section>
  );
};

export default Fv;