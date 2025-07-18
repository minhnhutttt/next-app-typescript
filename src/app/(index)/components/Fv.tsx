"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScroll } from "@/contexts/ScrollContext";
import useScrollAnimations from "@/hooks/useScrollAnimations";

gsap.registerPlugin(ScrollTrigger);
gsap.config({
  nullTargetWarn: false,
});

const Fv: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const fvRef = useRef<HTMLElement>(null);
  const ref = useScrollAnimations();
  const { setIsDarkSection, setIsLoading } = useScroll();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".preload-text", {
        yPercent: 100,
        rotate: 5,
      });

      gsap.set(".preloader-global-text, .preloader-global-video-text", {
        yPercent: 130,
        rotate: 5,
      });

      gsap.set(".preloader-global-video", {
        opacity: 0,
      });

      gsap.set(".preloader-container", {
        clipPath: "inset(50%)",
      });

      setTimeout(() => {
        const tl: gsap.core.Timeline = gsap.timeline({onComplete: () => {setIsLoading(false)}});

        tl.to(".preload-text", {
          yPercent: 0,
          duration: 0.5,
          rotate: 0,
          ease: "power2.out",
          stagger: 0.2,
        })
          .to(
            ".preloader-text-1",
            {
              yPercent: -100,
              duration: 1.5,
              ease: "power2.out",
            },
            "+=0.6"
          )
          .to(
            ".preloader-text-2",
            {
              yPercent: 100,
              duration: 1,
              ease: "power2.out",
            },
            "<"
          )
          .to(
            ".preloader-container",
            {
              clipPath: "inset(0%)",
              duration: 1.5,
              ease: "power4.inOut",
            },
            "<-0.2"
          )
          .to(
            ".preloader-global-text",
            {
              yPercent: 0,
              duration: 1.5,
              rotate: 0,
              ease: "power4.out",
              stagger: 0.02,
            },
            "-=0.3"
          )
          .to(
            ".preloader-global-video",
            {
              opacity: 1,
              duration: 1.5,
              ease: "power4.out",
            },
            "-=0.8"
          );
      }, 100);

      const tl2 = gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        })
        .to(".preloader-global-video-wrap", {
          width: "60vw",
          bottom: "0",
          left: "20vw",
        }).to(".preloader-global-video-text", {
          yPercent: 0,
              duration: 1.5,
              rotate: 0,
              ease: "power4.out",
              stagger: 0.02,
        }, "-=0.3");

      ScrollTrigger.create({
        trigger: fvRef.current,
        start: "top top",
        end: "bottom top",
        onUpdate: (self) => {
          if (self.progress > 0.9) {
            setIsDarkSection(true);
          } else {
            setIsDarkSection(false);
          }
        },
        onLeave: () => {
          setIsDarkSection(true);
        },
        onEnterBack: () => {
          setIsDarkSection(false);
        }
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, [setIsDarkSection]);

  return (
    <section ref={sectionRef} className="bg-white relative">
      <section ref={fvRef} className="h-screen relative">
        <div className="preloader-container absolute inset-0 z-10">
          <div
            className="w-full relative h-svh flex flex-col items-end justify-end px-[2vw] bg-white preloader-container"
            data-section="white"
          >
            <img
              className="w-full h-full object-cover object-center absolute inset-0"
              src="/assets/images/fv-img.webp"
              alt="Background"
            />
            <div className="w-full md:text-[14vw] text-[18vw] font-bold leading-[0.85] tracking-tight text-white uppercase md:pb-[2vw] pb-[5vw]">
              <div className="full relative flex flex-col md:text-center">
                <div className="overflow-hidden">
                  <p className="preloader-global-text">Visionary</p>
                </div>
              </div>
              <div className="w-full overflow-hidden md:flex justify-between z-0 relative">
                <div className="overflow-hidden">
                  <p className="preloader-global-text">Thinker</p>
                </div>
                <span
                  className="hidden small mt-[2.2vw] ml-[1vw] text-[1vw] md:flex flex-col tracking-[0] mr-auto leading-none"
                  aria-hidden="true"
                >
                  <span className="block overflow-hidden">
                    <span className="block preloader-global-text">
                      Global brand
                    </span>
                  </span>
                  <span className="block overflow-hidden">
                    <span className="block preloader-global-text">
                      Innovator
                    </span>
                  </span>
                </span>
                <div className="overflow-hidden">
                  <p className="preloader-global-text">AND</p>
                </div>
              </div>
              <div className="grid grid-cols-12 md:grid-cols-[repeat(24,_minmax(0,_1fr))] gap-x-1 relative z-4">
                <div className="col-span-7 hidden md:grid grid-cols-12  gap-x-5 z-2 will-change-transform">
                  <div className="col-span-8 md:mt-12 relative z-2"></div>
                  <div className="col-span-4">
                    <div className="small mt-[2.2vw] text-[1vw] flex flex-col tracking-[0] mr-auto">
                      <div className="overflow-hidden">
                        <p className="preloader-global-text">Speaker</p>
                      </div>
                      <div className="overflow-hidden">
                        <p className="preloader-global-text">reel (00:43)</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-10 md:col-[span_15_/_span_15]">
                  <div className="overflow-hidden">
                    <p className="preloader-global-text">Author</p>
                  </div>
                </div>
                <div className="col-span-2 s:col-span-3 text-right">
                  <div className="overflow-hidden">
                    <p className="preloader-global-text">↓</p>
                  </div>
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
          <div className="preloader-handler absolute overflow-hidden mx-auto left-0 right-0 w-[20rem] md:w-[40rem]">
            <div className="w-full h-[12rem] md:h-[25rem] preloader-handler-inner"></div>
          </div>
          <div className="overflow-hidden preloader-text-2">
            <p className="preload-text">©2025</p>
          </div>
        </div>
      </section>
      <div className="flex md:items-center md:justify-center relative max-md:absolute max-md:bottom-[70vw] max-md:flex-col">
        <div className="md:hidden text-[4vw] flex flex-col tracking-[0] mr-auto font-bold leading-none preloader-reel relative z-10 text-white max-md:pl-[3vw] max-md:mb-[4vw]">
              <span>Speaker</span>
              <span>reel (00:43)</span>
          </div>
          <div className="aspect-video relative md:absolute md:bottom-[calc(100%+2vw)] md:left-[2vw] max-md:!bottom-0 max-md:!left-[3vw] preloader-global-video-wrap z-20 md:w-[18vw] max-md:!w-[40vw]">
            <div className="preloader-global-video aspect-video max-md:w-full">
              <video
                className="size-full object-cover absolute top-0 left-0 is-playing"
                data-lazy-video=""
                data-lazy=""
                data-autoplay="true"
                preload="none"
                loop
                muted
                autoPlay
                src="/assets/images/186784f4.mp4"
                playsInline
                data-loaded="true"
              ></video>
            </div>
          </div>
          <div ref={ref} className="p-[2vw] flex justify-between w-full md:text-[1.2vw] font-bold max-md:hidden items-start">
            <div className="flex-1 mt-[2vw] flex justify-start items-center">
              <div className="overflow-hidden"><p className="preloader-global-video-text">Speaker Reel (00:43)</p></div>
            </div>
            <div className="aspect-video relative w-[60vw]"></div>
            <div className="flex-1 mt-[2vw] flex justify-end items-center"><div className="overflow-hidden"><p className="preloader-global-video-text">(01)</p></div></div>
            </div>
      </div>
    </section>
  );
};

export default Fv;