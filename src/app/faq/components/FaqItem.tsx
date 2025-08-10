"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";

interface FaqItemProps {
  question: string;
  answer: string;
}

export default function FaqItem({ question, answer }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const answerRef = useRef<HTMLDivElement>(null);

  const toggle = () => {
    if (!answerRef.current) return;

    if (isOpen) {
      gsap.to(answerRef.current, {
        height: 0,
        duration: 0.4,
        ease: "power2.inOut",
      });
    } else {
      gsap.to(answerRef.current, {
        height: answerRef.current.scrollHeight,
        duration: 0.4,
        ease: "power2.inOut",
      });
    }
    setIsOpen(!isOpen);
  };

  return (
    <div className="rounded-[20px] shadow-[0_4px_4px_0_rgba(0,_0,_0,_0.25)] overflow-hidden">
      <button
        onClick={toggle}
        className="flex items-center justify-between w-full md:px-[50px] md:py-[30px] py-2.5 px-5 md:min-h-[108px] min-h-[72px] bg-[#367F7B] text-white"
      >
        <div className="flex items-center gap-4 md:text-[24px] text-[18px] font-bold text-left">
          <span className=" text-white rounded-full w-8 md:text-[40px] text-[24px] flex items-center justify-center font-bold">
            Q
          </span>
          {question}
        </div>
        <div className={`md:flex-[0_0_32px] flex-[0_0_24px] ${isOpen ? "rotate-180" : ""}`}><img src="/assets/images/ic-tab.svg" alt="" /></div>
      </button>

      <div
        ref={answerRef}
        className="overflow-hidden h-0"
        style={{ height: 0 }}
      >
        <div className="md:text-[24px] text-[18px] bg-white md:px-[50px] md:py-[30px] py-2.5 px-5 ">{answer}</div>
      </div>
    </div>
  );
}
