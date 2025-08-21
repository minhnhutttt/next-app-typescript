'use client';

import { useState } from 'react';

type InnovationContentProps = {
  id: number;
  number: string;
  bg: string;
  ic: string;
  children: React.ReactNode;
  activeId: number | null;
  setActiveId: (id: number) => void;
};

const InnovationContent = ({
  id,
  number,
  bg,
  ic,
  children,
  activeId,
  setActiveId,
}: InnovationContentProps) => {
  const isActive = activeId === id;

  return (
    <div
      onClick={() => setActiveId(id)}
      className={`relative h-[360px] cursor-pointer overflow-hidden bg-cover bg-center bg-no-repeat text-center [box-shadow:18px_0_16px_0_rgba(0,_0,_0,_0.70)] transition-all duration-500 md:h-[683px] md:!flex-1 ${isActive ? 'w-[61%]' : 'w-[13%]'} `}
      style={{ backgroundImage: `url(${bg})`, zIndex: 5 - id }}
    >
      <div className="pt-5">
        <img className="max-w-none max-lg:h-52 max-md:h-30" src={number} alt="" />
      </div>
      <div className="flex justify-center pt-5 md:pt-14">
        <img className="max-w-none max-md:w-15" src={ic} alt="" />
      </div>
      <p className="mt-5 px-6 text-[15px] font-light tracking-wider max-md:mx-auto max-md:w-[220px] md:mt-7 md:text-[20px]">
        {children}
      </p>
    </div>
  );
};

export default function Innovation() {
  const [activeId, setActiveId] = useState<number | null>(1);

  return (
    <section className="relative z-10 pb-20 md:pb-[165px]">
      <div className="relative mx-auto w-full max-w-[1440px] pt-20 md:pt-60">
        <div className="fade-up text-center">
          <h3 className="text-[28px] leading-[1.3] font-bold tracking-wider md:text-[46px]">
            INNOVATION AT OUR CORE
          </h3>
          <p className="mt-1 text-[14px] leading-[1.3] tracking-wider md:mt-2 md:text-[18px]">
            Pioneering Technologies That Matter
          </p>
        </div>
        <div className="fade-up flex gap-2 pt-10 md:pt-20">
          <InnovationContent
            id={1}
            number="/assets/images/innovation-number-01.png"
            bg="/assets/images/innovation-bg-01.png"
            ic="/assets/images/innovation-ic-01.png"
            activeId={activeId}
            setActiveId={setActiveId}
          >
            AI-powered automation for complex marketing operations
          </InnovationContent>
          <InnovationContent
            id={2}
            number="/assets/images/innovation-number-02.png"
            bg="/assets/images/innovation-bg-02.png"
            ic="/assets/images/innovation-ic-02.png"
            activeId={activeId}
            setActiveId={setActiveId}
          >
            Business outcome-based optimization through client feedback
          </InnovationContent>
          <InnovationContent
            id={3}
            number="/assets/images/innovation-number-03.png"
            bg="/assets/images/innovation-bg-03.png"
            ic="/assets/images/innovation-ic-03.png"
            activeId={activeId}
            setActiveId={setActiveId}
          >
            Natural language processing for content understanding
          </InnovationContent>
          <InnovationContent
            id={4}
            number="/assets/images/innovation-number-04.png"
            bg="/assets/images/innovation-bg-04.png"
            ic="/assets/images/innovation-ic-04.png"
            activeId={activeId}
            setActiveId={setActiveId}
          >
            Predictive analytics for real conversion optimization
          </InnovationContent>
        </div>
      </div>
    </section>
  );
}
