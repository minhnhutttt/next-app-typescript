"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ReactNode } from "react";

export type FaqItemPropsType = {
  id: string;
  question: ReactNode;
  answer: ReactNode;
};

export default function StepItem({ id, question, answer }: FaqItemPropsType) {
  const animateRefs = useScrollAnimation("fadeUp");
  const contentRef = useRef<HTMLDivElement | null>(null);
  const arrowRef = useRef<HTMLDivElement | null>(null);
  const isClosedRef = useRef<boolean>(true);
  const [isClosed, setIsClosed] = useState<boolean>(true);

  const handleExpanderClick = () => {
    const $content = contentRef.current;
    const $arrow = arrowRef.current;
    if (isClosedRef.current) {
      gsap.set($content, { height: "auto" });
      gsap.from($content, { duration: 0.2, height: 0 });
    } else {
      gsap.to($content, { duration: 0.2, height: 0 });
    }
    isClosedRef.current = !isClosedRef.current;
    setIsClosed(isClosedRef.current);
  };

  return (
    <div
      ref={animateRefs}
      className="space-y-4 rounded-[20px] bg-white px-4 max-md:pt-4 md:px-12 md:pt-3 [box-shadow:0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]"
    >
      <button
        type="button"
        className="flex w-full items-center justify-between duration-200 hover:opacity-75"
        onClick={handleExpanderClick}
      >
        <div className="flex items-center gap-4 md:gap-4">
          <p className="text-[#184E97] text-[20px] font-bold uppercase lg:text-[64px] md:text-[44px]">
            Q
          </p>
          <p className="text-left text-[15px] font-bold md:text-[24px] lg:text-[36px] mt-1">
            {question}
          </p>
        </div>
        <div
          ref={arrowRef}
          className="relative ml-2 flex h-8 w-8 items-center justify-center duration-150 md:h-[60px] md:w-[60px]"
        >
          <svg
            className={`duration-150 ${isClosed ? "rotate-180 opacity-0" : ""}`}
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M60 30C60 46.5685 46.5685 60 30 60C13.4315 60 0 46.5685 0 30C0 13.4315 13.4315 0 30 0C46.5685 0 60 13.4315 60 30Z"
              fill="#9A9BAB"
            />
            <rect x="21" y="28" width="18" height="5" fill="white" />
          </svg>
          <svg
            className={`absolute inset-0 w-full h-full duration-150 ${!isClosed ? "rotate-180 opacity-0" : ""}`}
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="30" cy="30" r="30" fill="#184E97" />
            <path
              d="M31.92 27.76H38.92V32.04H31.92V39.56H27.44V32.04H20.48V27.76H27.44V20.16H31.92V27.76Z"
              fill="white"
            />
          </svg>
        </div>
      </button>
      <div ref={contentRef} className="h-0 overflow-hidden">
        <p className="pb-4 text-[16px] leading-[1.6] text-black md:w-[85%] md:pb-7 md:text-[22px] lg:text-[27px]">
          {answer}
        </p>
      </div>
    </div>
  );
}
