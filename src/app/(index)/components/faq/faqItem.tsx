"use client";
import { ReactNode, useRef, useState } from "react";
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
  const [isClose, setIsClose] = useState(true);

  const handleExpanderClick = () => {
    const $content = contentRef.current;
    if (isClosedRef.current) {
      gsap.set($content, { height: "auto" });
      gsap.from($content, { duration: 0.2, height: 0 });
      setIsClose(false);
    } else {
      gsap.to($content, { duration: 0.2, height: 0 });
      setIsClose(true);
    }
    isClosedRef.current = !isClosedRef.current;
  };

  return (
    <div className="fade-up px-3 md:px-[25px] py-9 md:py-[50px]">
      <button
        type="button"
        className="w-full duration-200 hover:opacity-75 cursor-pointer"
        onClick={handleExpanderClick}
      >
        <div className="flex items-center">
          <p className="text-[40px] font-bold md:text-[51px] font-inter text-[#B0B2B5]">
            {id}
          </p>
        </div>
        <div className="flex justify-between">
        <p className="text-left text-[20px] font-bold md:text-[32px]">
            {question}
          </p>
          <div
          className="relative ml-2 flex size-8 items-center justify-center duration-150 md:flex-[0_0_51px] flex-[0_0_32px] md:size-[51px]"
        >
            <img className={`${isClose && 'opacity-100'}`} src="/assets/images/ic-faq-close.svg" alt="" />
            <img className={`absolute inset-0 ${isClose && 'opacity-0'}`} src="/assets/images/ic-faq-open.svg" alt="" />
        </div>
        </div>
        
      </button>
      <div ref={contentRef} className="h-0 overflow-hidden">
        <p className="md:text-[28px] text-[20px] leading-[1.4] md:pt-9 pt-5">
          {answer}
        </p>
      </div>
    </div>
  );
}
