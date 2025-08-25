'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
gsap.config({
  nullTargetWarn: false,
});

export default function Fv() {
  const sectionRef = useRef<HTMLElement>(null);
  const fvRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom 80%',
            scrub: 1,
            invalidateOnRefresh: true,
          },
        })
        .to('.preloader-global-video-wrap', {
          width: '60vw',
          bottom: '0',
          left: '20vw',
        });
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  return (
    <section ref={sectionRef} className="relative">
      <div ref={fvRef} className="relative text-white">
        <div className="relative z-10 bg-[url(/assets/images/fv.png)] bg-cover px-4 pt-30 max-md:pb-10 md:h-[990px]">
          <div className="relative z-10 mx-auto w-full max-w-[1260px]">
            <div className="aspect-[430/250] w-[320px] md:ml-3 md:w-[430px]"></div>
            <div className="relative mt-10 md:mt-14">
              <h1 className="font-hind text-[30px] leading-[1.35] font-bold tracking-tight md:text-[8.7vw] xl:text-[112px]">
                <span className="inline-block">
                  <img
                    className="max-xl:w-[20vw] max-md:w-20"
                    src="/assets/images/ai.svg"
                    alt="AI"
                  />
                </span>
                <span className="text-[24px] md:text-[8.2vw] xl:text-[105px]">が</span>
                全自動で運用する <br />
                <p>次世代の広告手法を</p>
                <p className="flex items-center max-md:flex-wrap md:gap-[5vw] xl:gap-16">
                  <span>すべての事業者へ</span>
                </p>
              </h1>
            </div>
          </div>
        </div>
        <div className="absolute right-10 -bottom-24 md:right-24 md:-bottom-42">
          <img className="max-md:w-24" src="/assets/images/arrow.png" alt="" />
        </div>
      </div>
      <div className="relative flex justify-center md:py-[5vw]">
        <div className="aspect-video w-[60vw] max-md:hidden"></div>
        <div className="preloader-global-video-wrap absolute z-20 aspect-video max-md:!bottom-[calc(100%+300px)] max-md:!left-[3vw] max-md:!w-[60vw] md:bottom-[calc(100%+600px)] md:left-5 md:w-[18vw] xl:left-[calc(50vw-630px)]">
          <div className="preloader-global-video aspect-video max-md:w-full">
            <video
              className="is-playing absolute top-0 left-0 size-full object-cover"
              data-lazy-video=""
              data-lazy=""
              data-autoplay="true"
              preload="none"
              loop
              muted
              autoPlay
              src="/assets/videos/fv.mp4"
              playsInline
              data-loaded="true"
            ></video>
          </div>
        </div>
      </div>
    </section>
  );
}
