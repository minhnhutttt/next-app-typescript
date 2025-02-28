"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const Banner = () => {
  const ref = useScrollAnimations();

  return (
    <section ref={ref} className="relative overflow-hidden my-[100px] max-md:pb-[4%]">
      <div>
        <img className="max-md:hidden w-full max-w-none" src="/assets/images/wow.png" alt="" />
        <img className="md:hidden w-full max-w-none" src="/assets/images/wow-sp.png" alt="" />
      </div>
      <div className="absolute max-md:top-0 max-md:right-[-4%] md:bottom-[12%] md:w-[33.472%] w-[55%]">
        <img data-scroll className="w-full max-w-none ani-zoom-out animation-500 opacity-0" src="/assets/images/banner-bubble-01.png" alt="" />
      </div>
      <div className="absolute bottom-[4%] md:bottom-[5%] right-[10%] md:right-[2%] md:w-[41.875%] w-[71.28%]">
        <img data-scroll className="ani-zoom-out animation-500 md:animation-1250 opacity-0 w-full max-w-none" src="/assets/images/banner-bubble-02.png" alt="" />
      </div>
      <div className="absolute bottom-0 right-[10%] md:right-[6%] md:w-[32%] w-[38.2%]">
        <img data-scroll className="ani-zoom-out animation-500 md:animation-1250 opacity-0 w-full max-w-none" src="/assets/images/think.svg" alt="" />
      </div>
    </section>
  );
};

export default Banner;
