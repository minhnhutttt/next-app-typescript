"use client";

import { useSlideFadeUp } from "@/hooks/useSlideFadeUp";

export const Top = ({ isActive }: {isActive: boolean}) => {
  const ref = useSlideFadeUp(isActive, {
    duration: 1.2,
    delay: 0.5,
    stagger: 0.1,
    y: 100,
    triggerOnActive: true 
  });

  return (
    <section className="w-full h-[540px] md:h-full bg-[url(/assets/images/bg-01.png)] bg-cover bg-no-repeat bg-center flex items-center justify-center">
      <div 
        ref={ref}
        className="text-white font-black text-[min(14.8vmin,120px)] w-full max-w-[min(90vmin,1200px)]"
      >
        <p className="fade-item">"<span className="text-[min(16.05vmin,130px)]">行動</span>"が</p>
        <p className="fade-item text-center">経済を</p>
        <p className="fade-item text-right">動かす</p>
      </div>
    </section>
  );
};