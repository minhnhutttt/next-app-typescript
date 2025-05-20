"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const Kiro = () => {
  const ref = useScrollAnimations();

  return (
    <section
      ref={ref}
      className="overflow-hidden pt-[290px]"
    >
        <div className="relative h-[300px] flex items-center justify-center">
            <div className="rotate-[10deg] origin-center absolute h-full left-[-20%] top-0 w-[140%] bg-[linear-gradient(180deg,_#FBBC05_0%,_#957003_100%)] [box-shadow:0px_4px_80px_0px_rgba(8,_90,_29,_0.60)]"></div>
        <h3 className="md:text-[40px] text-[12vw] font-bold text-center md:leading-loose tracking-wider relative">経営の岐路に立つあなたへ</h3>
        </div>
        <div className="w-full max-w-[680px] mx-auto">
        
        </div>
    </section>
  );
};

export default Kiro;
