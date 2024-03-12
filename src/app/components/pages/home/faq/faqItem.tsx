"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import { ReactNode, useRef } from "react";
import { gsap } from "gsap";

export type FaqItemPropsType = {
  id: string;
  question: ReactNode;
  answer: ReactNode;
};

export default function FaqItem({ id, question, answer }: FaqItemPropsType) {
  const animateRefs = useScrollAnimation("fadeUp");
  const contentRef = useRef(null);
  const arrowRef = useRef(null);
  const isClosedRef = useRef(true);

  const handleExpanderClick = () => {
    const $content = contentRef.current;
    const $arrow = arrowRef.current;
    if (isClosedRef.current) {
      gsap.set($content, { height: "auto" });
      gsap.from($content, { duration: 0.2, height: 0 });
      gsap.to($arrow, { duration: 0.1, rotation: -180 });
    } else {
      gsap.to($content, { duration: 0.2, height: 0 });
      gsap.to($arrow, { duration: 0.1, rotation: 0 });
    }
    isClosedRef.current = !isClosedRef.current;
  };

  return (
    <div
      ref={animateRefs}
      className="space-y-2 rounded-[20px] border border-[#FE4848] bg-white/90 p-4 md:px-8 md:pb-8 md:pt-10"
    >
      <button
        type="button"
        className="flex w-full items-center justify-between duration-200 hover:opacity-75"
        onClick={handleExpanderClick}
      >
        <div className="flex items-center gap-4 md:gap-8">
          <p className="font-roboto text-[18px] font-bold text-[#FE4848] uppercase tracking-widest md:text-[32px]">
            q
          </p>
          <p className="text-left text-[16px] font-bold md:text-[22px]">
            {question}
          </p>
        </div>
        <div
          ref={arrowRef}
          className="relative ml-2 flex h-8 w-8 items-center justify-center duration-150 md:h-12 md:w-12"
        >
          <svg
            className="max-md:w-8"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="24"
              cy="24"
              r="23.5"
              transform="rotate(-180 24 24)"
              stroke="#FF66CC"
            />
            <path
              d="M28.2667 21.8667L24 26.1334L19.7333 21.8667"
              stroke="#FE4848"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
      <div ref={contentRef} className="h-0 overflow-hidden">
        <p className="pb-4 pl-8 text-[14px] leading-[1.6] text-black md:w-[85%] md:pb-7 md:pl-16 md:text-[16px]">
          {answer}
        </p>
      </div>
    </div>
  );
}
