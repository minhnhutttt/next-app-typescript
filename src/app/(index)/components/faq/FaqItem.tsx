"use client";

import { ReactNode, useRef } from "react";
import { gsap } from "gsap";

export type FaqItemPropsType = {
  id: string;
  question: ReactNode;
  answer: ReactNode;
};

const FaqItem = ({ id, question, answer }: FaqItemPropsType) => {
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
      data-scroll
      className="fade-up border border-[#FFB601] bg-white p-4 md:px-8 md:pb-9 md:pt-9 rounded-[20px]"
    >
      <button
        type="button"
        className="flex w-full items-center justify-between duration-200 hover:cursor-pointer"
        onClick={handleExpanderClick}
      >
        <div className="flex ">
          <p className="text-[18px] text-[#FFB601] font-bold uppercase tracking-widest md:text-[32px] leading-none max-md:mt-1">
            Q
          </p>
          <p className="ml-2 md:ml-7 text-left text-[16px] font-bold md:text-[22px]">
            {question}
          </p>
        </div>
        <div
          ref={arrowRef}
          className="relative ml-2 flex w-8 items-center justify-center  duration-150 md:w-[50px]"
        >
          <svg
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
              stroke="#FFB601"
            />
            <path
              d="M28.2666 21.8667L23.9999 26.1334L19.7333 21.8667"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
      <div ref={contentRef} className="md:ml-[60px] ml-6 h-0 overflow-hidden">
        <p className="pb-4 pt-[5px] text-[14px] leading-[1.6] text-black md:w-[85%] md:pb-3 md:text-[16px]">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default FaqItem;
