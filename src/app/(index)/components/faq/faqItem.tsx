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
      gsap.to($arrow, { duration: 0.1, rotation: 90 });
    } else {
      gsap.to($content, { duration: 0.2, height: 0 });
      gsap.to($arrow, { duration: 0.1, rotation: 0 });
    }
    isClosedRef.current = !isClosedRef.current;
  };

  return (
    <div
      data-scroll
      className="ani-fade-up border-[2px] border-[#fff] hover:border-[#73E3DC] rounded-[18px] bg-white p-4 md:px-8 md:pb-11 md:pt-11 shadow-[0_5px_16px_#080F3499]"
    >
      <button
        type="button"
        className="flex w-full items-center justify-between duration-200 hover:cursor-pointer"
        onClick={handleExpanderClick}
      >
        <div className="flex items-center">
          <p className="font-bold text-[18px] uppercase tracking-widest md:text-[22px]">
            q.
          </p>
          <p className="text-left text-[16px] md:text-[22px] font-bold">
            {question}
          </p>
        </div>
        <div
          ref={arrowRef}
          className="relative ml-2 flex h-8 w-8 items-center justify-center duration-150 md:h-12 md:w-[50px]"
        >
          <svg
            width="52"
            height="52"
            viewBox="0 0 52 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="26" cy="26" r="25" stroke="#00E5E5" strokeWidth="2" />
            <path
              d="M20 16L30 26L20 36"
              stroke="#00E5E5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
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
