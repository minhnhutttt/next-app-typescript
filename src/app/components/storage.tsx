"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const Storage = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="px-5 py-[60px] md:py-[80px]">
        <div className="w-full md:max-w-[1246px] max-w-[540px] max-md:flex-col mx-auto border-y border-[#18539E] md:py-[60px] py-8 md:px-5 flex items-center md:gap-[73px] gap-8">
            <figure className="animate-[poyopoyo_2s_ease-out_infinite]">
                <img className="fade-up max-md:w-[320px]" src="/assets/images/img-storage.png" alt="" />
            </figure>
            <div className="fade-up ">
                <h4><img className="max-md:w-[180px]" src="/assets/images/bubble.png" alt="" /></h4>
                <p className="md:text-[40px] text-[25px] font-bold"><span className="bg-[linear-gradient(to_top,_#FEEF01_30%,_transparent_30%)]">特別割引バウチャー発売中！</span></p>
            </div>
        </div>
    </section>
  );
};

export default Storage;
