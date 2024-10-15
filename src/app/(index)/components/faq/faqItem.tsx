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
    <div className="fade-up space-y-2 rounded-[20px] border-[1px] border-[#BA51BD] bg-white/90 p-4 md:px-8 md:pb-8 md:pt-10">
      <button
        type="button"
        className="flex w-full items-center justify-between duration-200 hover:opacity-75 cursor-pointer"
        onClick={handleExpanderClick}
      >
        <div className="flex items-center gap-4 md:gap-8">
          <p className="text-[18px] u-text-gradient uppercase tracking-widest md:text-[32px]">
            q
          </p>
          <p className="text-left text-[16px] md:text-[22px] font-bold">
            {question}
          </p>
        </div>
        <div
          ref={arrowRef}
          className="relative ml-2 flex h-8 w-8 items-center justify-center duration-150 md:h-12 md:w-12"
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
              stroke="url(#paint0_angular_270_3348)"
            />
            <path
              d="M28.2667 21.8672L24.0001 26.1339L19.7334 21.8672"
              stroke="url(#paint1_angular_270_3348)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <radialGradient
                id="paint0_angular_270_3348"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(24 24) rotate(90) scale(24)"
              >
                <stop stopColor="#EC6262" />
                <stop offset="0.8" stopColor="#9644FF" />
              </radialGradient>
              <radialGradient
                id="paint1_angular_270_3348"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(24.0001 24.0005) rotate(90) scale(2.13333 4.26667)"
              >
                <stop stopColor="#EC6262" />
                <stop offset="0.8" stopColor="#9644FF" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </button>
      <div ref={contentRef} className="h-0 overflow-hidden">
        <p className="pb-4 pl-8 text-[14px] leading-[1.6] text-black md:w-[85%] md:pb-7 md:pl-16 md:text-[16px] ">
          {answer}
        </p>
      </div>
    </div>
  );
}
