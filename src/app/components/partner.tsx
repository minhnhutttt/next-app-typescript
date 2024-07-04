"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";


const Partner = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative">
        <div className="w-full h-[400px] bg-[url('/assets/images/bg-partner.png')] bg-cover bg-center flex items-center justify-center">
        <div className="relative">
                <p className="absolute inset-0 text-[28px] font-black tracking-widest text-white [-webkit-text-stroke:_6px_white] md:text-[54px] leading-[1.9]">
                販売エージェントパートナー募集中！
                </p>
                <h3 className="relative text-[28px] font-black tracking-widest md:text-[54px] text-[#00053A] leading-[1.9]">
                販売エージェントパートナー募集中！
                </h3>
            </div>
        </div>
    </section>
  );
};

export default Partner;
