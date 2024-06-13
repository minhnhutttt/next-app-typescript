"use client";

import { useEffect } from "react";
import gsap from "gsap";

const images = [
  "/assets/images/img-fv-01.png",
  "/assets/images/img-fv-02.png",
  "/assets/images/img-fv-03.png",
  "/assets/images/img-fv-04.png",
  "/assets/images/img-fv-05.png",
  "/assets/images/img-fv-01.png",
  "/assets/images/img-fv-02.png",
  "/assets/images/img-fv-03.png",
  "/assets/images/img-fv-04.png",
  "/assets/images/img-fv-05.png",
  "/assets/images/img-fv-01.png",
  "/assets/images/img-fv-02.png",
  "/assets/images/img-fv-03.png",
  "/assets/images/img-fv-04.png",
  "/assets/images/img-fv-05.png",
];

const FV = () => {
  useEffect(() => {
    const container = document.querySelector(".container-card");
    const robo = document.querySelector(".robo");
    const images = gsap.utils.toArray<HTMLElement>(".item");
    const animeWidth = gsap.utils.toArray<HTMLElement>(".anime-width");
    const imageSize = images.length;
    const total = images.length;
    const degree = 360 / total;
    const rotations = [0, 23, 46, -46, -23];

    const containerHeight = container ? container.clientHeight : 0;
    const containerWidth = container ? container.clientWidth : 0;
    let ctx = gsap.context(() => {
      const timeline = gsap.timeline();
      
      timeline.to(robo, { opacity: 1, duration: 1, scale: 1 }, 0);
      timeline.to(container, { opacity: 1, duration: 1 },1);
  
      images.forEach((image, index) => {
        const sign = Math.floor((index / 2) % 2) ? 1 : -1;
        const value = Math.floor((index + 4) / 4) * 4;
        const rotation = index > imageSize - 3 ? 0 : sign * value;

        gsap.set(image, {
          rotation: rotation,
        });
        timeline.from(
          image,
          {
            x: () =>
              index % 2
                ? containerWidth + image.clientWidth * 4
                : -containerWidth - image.clientWidth * 4,
            y: () => containerHeight - image.clientHeight,
            rotation: index % 2 ? 200 : -200,
            scale: 4,
            opacity: 1,
            ease: "power4.out",
            duration: 1,
            delay: 0.15 * Math.floor(index / 2),
          },
          1.5
        );

        let rotationAngle = index * degree;
        timeline.to(
          image,
          {
            scale: 1,
            duration: 0,
          },
          0.15 * (imageSize / 2 - 1) + 2.5
        );

        timeline.to(
          image,
          {
            transformOrigin: `center ${containerHeight*1.3}px`,
            rotation: 
            index > imageSize / 2 ? -degree * (imageSize - index) : rotationAngle,
            duration: 1,
            ease: "power1.out",
          },
          0.15 * (imageSize / 2 - 1) + 2.5
        );
        timeline.to(
          image,
          {
            transformOrigin: `center ${containerHeight*1.3}px`,
            rotation: 0,
            scale: 0,
            duration: 1,
            ease: "power1.out",
          },
          0.15 * (imageSize / 2 - 1) + 5.5
        );
      });
      animeWidth.forEach((span) => {
        timeline.to(
          span,
          {
            width: "100%",
            duration: 0.6,
            ease: "power1.out",
          },
        );
      });
    });

    return () => ctx.revert();
  }, []);
  return (
    <section className="relative pt-3 md:pt-5 md:pb-[80px] pb-5 overflow-hidden px-5">
      <span className="absolute top-0 inset-x-0 bg-[#0D0A8E] w-full md:h-[410px] h-[240px]"></span>
      <div className="w-full max-w-[1380px] mx-auto bg-white [box-shadow:0px_4px_60px_0px_rgba(0,_0,_0,_0.10)] rounded-[30px] relative z-10 md:h-[560px] h-[360px]">
        <div className="absolute inset-0 flex items-center justify-center">
          <img className="robo scale-0 opacity-0 max-md:w-[300px]" src="/assets/images/robo.png" alt="" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center lg:text-[82px] md:text-[55px] text-[6.5vw] font-gothic leading-tight font-semibold text-center">
          <p>
            <span className="anime-width whitespace-nowrap inline-block w-0 overflow-hidden">この書面は永遠に風化しない</span><br />
            <span className="anime-width whitespace-nowrap inline-block w-0 overflow-hidden">改ざん不能なNFT技術で</span><br />
            <span className="anime-width whitespace-nowrap inline-block w-0 overflow-hidden">安心と信頼を</span>
          </p>
        </div>
      </div>
      <div className="container-card w-[100vw] md:h-[610px] h-[300px] absolute left-0 md:bottom-0 bottom-10 z-10 select-none opacity-0">
        <div className="md:h-[690px] h-[380px] absolute left-2/4 -translate-x-1/2 select-none">
          <div className="origin-[center_100vh] rotate-[0] select-none flex">
          {images.map((src, index) => (
            <div className="item absolute select-none cursor-pointer -translate-x-1/2" key={index}>
              <div className="block w-[140px] md:w-[279px] md:h-[386px] h-[194px] text-[#fff] select-none overflow-hidden relative">
                <img className="h-full w-full object-cover absolute top-[0] left-[0] pointer-events-none" src={src} />
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center md:mt-16 mt-10 relative z-20">
        <a href="#introduction" className="group flex items-center justify-center md:w-[100px] w-[64px] aspect-square border border-[#0D0A8E] hover:bg-[#0D0A8E] rounded-full animate-[move-y_.5s_infinite_alternate_ease-in-out] duration-200 hover:[box-shadow:0px_2px_10px_rgba(0,_0,_0,_0.5)]">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="28" viewBox="0 0 18 28" fill="none" className="relative z-20  md:w-[18px] md:h-[28px] w-[12px] h-[19px]">
            <path d="M9 26.7131V1M1 19.2286L9 26.7796L17 19.2286" className="duration-200 stroke-[#0D0A8E] group-hover:stroke-white" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div className="absolute w-full h-full inset-0 group-hover:duration-500 duration-200 group-hover:bg-[#0D0A8E] rounded-full z-10 group-hover:opacity-0 group-hover:scale-[2]"></div>
        </a>
      </div>
    </section>
  );
};

export default FV;
