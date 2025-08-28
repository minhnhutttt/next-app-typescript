'use client';

import { ReactNode, useRef } from 'react';
import { gsap } from 'gsap';

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
      gsap.set($content, { height: 'auto' });
      gsap.from($content, { duration: 0.2, height: 0 });
      gsap.to($arrow, { duration: 0.1, rotation: -180 });
    } else {
      gsap.to($content, { duration: 0.2, height: 0 });
      gsap.to($arrow, { duration: 0.1, rotation: 0 });
    }
    isClosedRef.current = !isClosedRef.current;
  };

  return (
    <div className="fade-up rounded-[14px] border-[2px] border-[#01FFAA] bg-white p-4 [box-shadow:0px_6px_16px_0px_rgba(74,_58,_255,_0.19)] md:px-8 md:pt-9 md:pb-9">
      <button
        type="button"
        className="flex w-full items-center justify-between duration-200 hover:cursor-pointer"
        onClick={handleExpanderClick}
      >
        <div className="flex">
          <p className="text-[18px] leading-none font-bold tracking-widest text-[#01FFAA] uppercase max-md:mt-1 md:text-[32px]">
            q
          </p>
          <p className="ml-2 text-left text-[16px] font-bold md:ml-7 md:text-[22px]">{question}</p>
        </div>
        <div
          ref={arrowRef}
          className="relative ml-2 flex w-8 items-center justify-center duration-150 md:w-[50px]"
        >
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="24" cy="24" r="23.5" transform="rotate(-180 24 24)" stroke="#01FFAA" />
            <path
              d="M28.2666 21.8667L24 26.1334L19.7333 21.8667"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
      <div ref={contentRef} className="ml-6 h-0 overflow-hidden md:ml-14">
        <p className="pt-[5px] pb-4 text-[16px] leading-[1.6] text-black md:w-[85%] md:pb-7 md:text-[18px]">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default FaqItem;
