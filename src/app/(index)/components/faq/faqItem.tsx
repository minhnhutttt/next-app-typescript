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
      gsap.to($arrow, { duration: 0.1, rotation: -180 });
    } else {
      gsap.to($content, { duration: 0.2, height: 0 });
      gsap.to($arrow, { duration: 0.1, rotation: 0 });
    }
    isClosedRef.current = !isClosedRef.current;
  };

  return (
    <div className="fade-up space-y-2 rounded-[12px] border border-[#BD84FA] bg-white/90 p-4 md:px-4 md:pb-4 md:pt-6 font-['Roboto'] [filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.10))]">
      <button
        type="button"
        className="flex w-full items-center justify-between duration-200 hover:opacity-75 cursor-pointer"
        onClick={handleExpanderClick}
      >
        <div className="flex items-center gap-4 md:gap-6 flex-1">
          <p className="font-roboto text-[18px] font-bold u-stroke u-bg-gradient-01 uppercase tracking-widest md:text-[24px]">
            q
          </p>
          <p className="text-left text-[13px] font-bold md:text-[16px]">
            {question}
          </p>
        </div>
        <div
          ref={arrowRef}
          className="relative ml-2 flex h-7 w-7 items-center justify-center duration-150 md:h-7 md:w-7"
        >
            <img src="/assets/images/faq-arrow.svg" alt="" />
        </div>
      </button>
      <div ref={contentRef} className="h-0 overflow-hidden">
        <p className="pb-4 pl-8 md:text-[14px] text-[13px] leading-[1.6] text-black md:w-[85%] md:pb-7 md:pl-10">
          {answer}
        </p>
      </div>
    </div>
  );
}
