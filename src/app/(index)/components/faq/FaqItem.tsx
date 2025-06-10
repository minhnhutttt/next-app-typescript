"use client";

import { ReactNode, useRef, useState } from "react";
import { gsap } from "gsap";

export type FaqItemPropsType = {
  id: string;
  question: ReactNode;
  answer: ReactNode;
};

const FaqItem = ({ id, question, answer }: FaqItemPropsType) => {
  const contentRef = useRef(null);
  const arrowRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleExpanderClick = () => {
    const $content = contentRef.current;
    const $arrow = arrowRef.current;
    
    if (!isOpen) {
      // Opening
      gsap.set($content, { height: "auto" });
      gsap.from($content, { duration: 0.2, height: 0 });
      gsap.to($arrow, { duration: 0.1, rotation: 90 });
      setIsOpen(true);
    } else {
      // Closing
      gsap.to($content, { duration: 0.2, height: 0 });
      gsap.to($arrow, { duration: 0.1, rotation: 0 });
      setIsOpen(false);
    }
  };

  return (
    <div
      data-scroll
      className="fade-up border-t border-black bg-white p-4 md:px-8 md:pb-9 md:pt-9 rounded-[14px]"
    >
      <button
        type="button"
        className="flex w-full items-center justify-between duration-200 hover:cursor-pointer"
        onClick={handleExpanderClick}
      >
        <div className="flex ">
          <p className="text-left text-[16px] font-bold md:text-[24px]">
            {question}
          </p>
        </div>
        <div
          ref={arrowRef}
          className="relative ml-2 flex w-10 items-center justify-center duration-150 md:w-[51px]"
        >
          <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle 
              cx="25.4876" 
              cy="25.66" 
              r="24.8309" 
              fill={isOpen ? "#007606" : "white"} 
              stroke="#007606"
            />
            <path 
              d="M22.3779 33.916L30.5972 25.6594L22.3779 17.4028" 
              stroke={isOpen ? "#fff" : "#007C05"} 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
      <div ref={contentRef} className="h-0 overflow-hidden">
        <p className="pb-4 pt-[5px] text-[16px] leading-[1.6] text-black md:w-[85%] md:text-[18px]">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default FaqItem;