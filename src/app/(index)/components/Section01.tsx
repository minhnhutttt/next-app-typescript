"use client";

import { useSlideFadeUp } from "@/hooks/useSlideFadeUp";

interface Section01Props {
  isActive: boolean;
}

export const Section01: React.FC<Section01Props> = ({ isActive }) => {
  const ref = useSlideFadeUp(isActive, {
    duration: 1.2,
    delay: 0.5,
    stagger: 0.3,
    y: 100,
    triggerOnActive: true 
  });

  return (
    <section className="w-full h-full bg-[url(/assets/images/bg-01.png)] bg-cover bg-no-repeat bg-center flex items-center justify-center">
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