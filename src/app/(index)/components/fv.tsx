"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const FV = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative px-5 md:pt-[150px] pt-[50px] z-10 h-[450px] md:h-[750px] md:bg-[url('/assets/images/fv.png')] max-md:bg-[size:100%_auto] bg-[url('/assets/images/fv-sp.png')] bg-bottom bg-cover">
      <h1 className="md:text-[50px] text-[32px] xl:text-[80px] font-black text-center leading-[1.2] u-text-stroke tracking-wide [text-shadow:1px_2px_0px_#F6EAD9] md:[text-shadow:3px_6px_0px_#F6EAD9]">
        Passionate Explorers, Gather! <br />
        Fellow Supporters, Rise!
      </h1>
      <p className="md:text-[32px] text-[18px] font-black text-center leading-[1.2] u-text-stroke tracking-wide md:pt-10 pt-5 [text-shadow:1px_1px_0px_#F6EAD9] md:[text-shadow:2px_2px_0px_#F6EAD9] md:mb-24 mb-10">
        Where Passion Meets Great Cause, <br />The Quest for “BiG Treasures” Begins.
      </p>
      
      <a href="#" className="w-[310px] h-[50px] md:h-[70px] flex items-center justify-center bg-[#000A23] mx-auto text-[#FFCD00] md:text-[26px] text-[20px] rounded-[5px]">
      WHITEPAPER
      </a>
    </section>
  );
};

export default FV;
