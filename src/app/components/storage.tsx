"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const Storage = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="px-5 py-[60px] md:py-[80px]">
        <div className="w-full md:max-w-[1246px] max-w-[540px] max-md:flex-col mx-auto border-y border-[#18539E] md:py-[60px] py-8 md:px-5 flex items-center xl:gap-[73px] gap-8">
            <figure className="animate-[poyopoyo_2s_ease-out_infinite] max-md:w-auto max-xl:w-1/2">
                <img className="fade-up max-md:w-[320px]" src="/assets/images/img-storage.png" alt="" />
            </figure>
            <div className="fade-up ">
                <h4><img className="max-md:w-[180px]" src="/assets/images/bubble.png" alt="" /></h4>
                <p className="xl:text-[40px] md:text-[30px] text-[25px] font-bold whitespace-nowrap"><span className="relative">
                <span className="slide-gradient absolute top-0 left-0 right-0 bottom-0 bg-[linear-gradient(to_top,_#FEEF01_30%,_transparent_30%)] z-[-1]"></span>特別割引バウチャー発売中！</span></p>
            </div>
        </div>
    </section>
  );
};

export default Storage;
