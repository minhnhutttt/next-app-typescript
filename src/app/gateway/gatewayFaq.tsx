"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";
import { ReactNode, useRef, useState } from "react";
import gsap from 'gsap';

type CaseItemPropsType = {
    id: string;
    title: ReactNode;
    text: ReactNode;
  };
  const caseData: CaseItemPropsType[] = [
    {
      id: "1",
      title: "What are the fees for using RPC?",
      text: (
        <>
            In line with DIVER's philosophy, basic RPC usage is free. However, for large-scale traffic or special resource requirements, please contact us for individual arrangements.
        </>
      ),
    },
    {
      id: "2",
      title: "Which regions are supported?",
      text: (
        <>
          The RPC is accessible from anywhere in the world. We have nodes deployed in key regions to ensure low-latency global access.
        </>
      ),
    },
    {
      id: "3",
      title: "What about security measures?",
      text: (
        <>
          We employ state-of-the-art encryption technology and a multi-layered defense strategy, with 24/7 monitoring. Regular security audits are conducted to maintain the highest security standards.
        </>
      ),
    }
  ];

  function CaseItem({ id, title, text }: CaseItemPropsType) {
    const contentRef = useRef(null);
    const arrowRef = useRef(null);
    const isClosedRef = useRef(true);
    const [active, setActive] = useState(false);
  
    const handleExpanderClick = () => {
      const $content = contentRef.current;
      const $arrow = arrowRef.current;
      if (isClosedRef.current) {
        gsap.set($content, { height: "auto" });
        gsap.from($content, { duration: 0.2, height: 0 });
        gsap.to($arrow, { duration: 0.1, rotation: 90, transformOrigin: 'center' });
        setActive(true);
      } else {
        gsap.to($content, { duration: 0.2, height: 0 });
        gsap.to($arrow, { duration: 0.1, rotation: 0 });
        setActive(false);
      }
      isClosedRef.current = !isClosedRef.current;
    };
  
    return (
      <div
        className="fade-up bg-white/90 border border-[#005FD7] rounded-[14px] md:py-8 md:px-9 p-5 [box-shadow:0px_6px_16px_0px_rgba(74,_58,_255,_0.19)]"
      >
        <button
          type="button"
          className="flex w-full items-center duration-200 hover:opacity-75 cursor-pointer"
          onClick={handleExpanderClick}
        >
            <p className="flex-1 text-left md:text-[24px] text-[18px] font-semibold text-[#005FD7]">{title}</p>
          <div
            className="relative ml-2 flex items-center justify-center duration-150 size-8 lg:size-[50px]"
          >
                <svg ref={arrowRef} xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0px_5px_16px_rgba(8,_15,_52,_0.06)]" width="51" height="52" viewBox="0 0 51 52" fill="none">
                    <circle cx="25.4876" cy="25.9258" r="25.3309" fill={`${active ? '#005FD7' : '#fff'}`} />
                    <path d="M22.3779 34.1824L30.5972 25.9258L22.3779 17.6692" stroke={`${active ? '#fff' : '#005FD7'}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
          </div>
        </button>
        <div ref={contentRef} className="h-0 overflow-hidden">
          <p className="text-[16px] text-[#212534] leading-[1.4] md:text-[18px] pb-6 w-full max-w-[960px] mx-auto md:pb-[55px] pr-10">
            {text}
          </p>
        </div>
      </div>
    );
  }


const GatewayFaq = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative pt-[120px] md:pt-[240px] z-10  px-5">
      <div className="w-full max-w-[896px] mx-auto">
            <h3 className="fade-up md:text-[64px] text-[32px] font-bold leading-none tracking-widest text-center">FAQ</h3>
            <div className="mx-auto w-full space-y-[20px] mt-8 md:mt-[50px] md:space-y-[30px]">
                {caseData.map(({ id, title, text }) => (
                    <CaseItem key={id} id={id} title={title} text={text} />
                ))}
            </div>
        </div>
    </section>
  );
};

export default GatewayFaq;
