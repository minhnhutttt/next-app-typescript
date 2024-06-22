"use client";
import gsap from 'gsap';
import { ReactNode, useLayoutEffect } from "react";
export type PageTitlePropsType = {
  children: ReactNode;
};
const PageTitle = ({ children }: PageTitlePropsType) => {
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to(".marquee__part", {xPercent: -100, repeat: -1, duration: 15, ease: "linear"}).totalProgress(0.5);

            gsap.set(".marquee__inner", {xPercent: -50});
        });
    
        return () => ctx.revert();
      }, []);
  return (
    <div className="mb-[calc(30vh_-_120px)] max-md:mb-[calc(20vh_-_80px)]">
      <div className="marquee uppercase pt-[30vh] max-md:pt-[20vh] overflow-hidden">
        <div className="marquee__inner w-fit flex flex-auto flex-row gap-[24px] whitespace-nowrap relative">
          <p
            className="marquee__part shrink-0 font-anton text-[calc(18px_+_12vw)] text-center uppercase leading-none"
          >
            {children}
          </p>
          <p
            className="marquee__part shrink-0 font-anton text-[calc(18px_+_12vw)] text-center uppercase leading-none">
            {children}
          </p>
          <p
            className="marquee__part shrink-0 font-anton text-[calc(18px_+_12vw)] text-center uppercase leading-none"
          >
            {children}
          </p>
          <p
            className="marquee__part shrink-0 font-anton text-[calc(18px_+_12vw)] text-center uppercase leading-none"
          >
            {children}
          </p>
          <p
            className="marquee__part shrink-0 font-anton text-[calc(18px_+_12vw)] text-center uppercase leading-none"
          >
            {children}
          </p>
          <p
            className="marquee__part shrink-0 font-anton text-[calc(18px_+_12vw)] text-center uppercase leading-none"
          >
            {children}
          </p>
          <p
            className="marquee__part shrink-0 font-anton text-[calc(18px_+_12vw)] text-center uppercase leading-none"
          >
            {children}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
