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
      className="fade-up border-t border-black bg-white p-4 md:px-8 md:pb-9 md:pt-9"
    >
      <button
        type="button"
        className="flex w-full items-center justify-between duration-200 hover:cursor-pointer"
        onClick={handleExpanderClick}
      >
        <div className="flex ">
          <p className="text-[18px] font-bold uppercase tracking-widest md:text-[32px] leading-none max-md:mt-1">
            {id}
          </p>
          <p className="ml-2 md:ml-7 text-left text-[16px] font-bold md:text-[22px]">
            {question}
          </p>
        </div>
        <div
          ref={arrowRef}
          className="relative ml-2 flex w-8 items-center justify-center  duration-150 md:w-[50px]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
            <path d="M29.2667 22.8667L25 27.1333L20.7333 22.8667M49 25C49 38.2548 38.2548 49 25 49C11.7452 49 1 38.2548 1 25C1 11.7452 11.7452 1 25 1C38.2548 1 49 11.7452 49 25Z" stroke="#343A3F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </button>
      <div ref={contentRef} className="md:ml-[72px] ml-6 h-0 overflow-hidden">
        <p className="pb-4 pt-[5px] text-[16px] leading-[1.6] text-black md:w-[85%] md:pb-7 md:text-[18px]">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default FaqItem;
