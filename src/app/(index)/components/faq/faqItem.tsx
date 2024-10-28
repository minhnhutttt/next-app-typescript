"use client";
import { ReactNode, useRef } from "react";
import { gsap } from "gsap";

export type FaqItemPropsType = {
  id: string;
  question: ReactNode;
  answer: ReactNode;
};

export default function FaqItem({ id, question, answer }: FaqItemPropsType) {
  const contentRef = useRef(null);
  const arrowRef = useRef(null);
  const isClosedRef = useRef(true);

  const handleExpanderClick = () => {
    const $content = contentRef.current;
    const $arrow = arrowRef.current;
    if (isClosedRef.current) {
      gsap.set($content, { height: "auto" });
      gsap.from($content, { duration: 0.2, height: 0 });
      gsap.to($arrow, { duration: 0.1, rotation: 0 });
    } else {
      gsap.to($content, { duration: 0.2, height: 0 });
      gsap.to($arrow, { duration: 0.1, rotation: -90 });
    }
    isClosedRef.current = !isClosedRef.current;
  };

  return (
    <div
      data-scroll
      className="ani-fade-up border-[2px] border-[#73E3DC] hover:border-[#73E3DC] rounded-[18px] bg-white p-4 md:px-8 md:pb-11 md:pt-11 [box-shadow:0px_6px_16px_0px_rgba(74,_58,_255,_0.19)]"
    >
      <button
        type="button"
        className="flex w-full items-center justify-between duration-200 hover:cursor-pointer"
        onClick={handleExpanderClick}
      >
        <div className="flex ">
          <p className="font-bold text-[18px] uppercase tracking-widest md:text-[22px]">
            q.
          </p>
          <p className="text-left text-[16px] md:text-[22px] font-bold">
            {question}
          </p>
        </div>
        <div
          ref={arrowRef}
          className="relative ml-2 flex w-8 items-center justify-center duration-150  md:w-[50px] -rotate-90"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="51" height="52" viewBox="0 0 51 52" fill="none">
  <circle cx="25.4876" cy="26.0887" r="24.8309" stroke="#73E3DC"/>
  <path d="M17.231 22.979L25.4875 31.1983L33.7441 22.979" stroke="#73E3DC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </div>
      </button>
      <div ref={contentRef} className="h-0 overflow-hidden flex">
        <p className="font-bold text-[18px] uppercase tracking-widest md:text-[24px] text-[#DF0F47]">
          a.
        </p>
        <p className="pt-[5px] pb-4 text-[14px] leading-[1.6] text-black md:w-[85%] md:pb-7 md:text-[16px] ">
          {answer}
        </p>
      </div>
    </div>
  );
}
