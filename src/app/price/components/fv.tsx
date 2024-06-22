"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const FV = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative">
      <div className="bg-[url('/assets/images/price/fv.png')] h-[1027px] bg-cover bg-bottom">
        <div className="w-full max-w-[1440px] mx-auto relative">
            <div className="flex absolute left-0 top-0 p-7">
                <h1>
                    <img src="/assets/images/price/fv-text.png" alt="" />
                </h1>
            </div>
            <div className="flex justify-end pr-10">
                <div className="flex items-end flex-col">
                    <div className="flex flex-col items-center justify-center">
                        <figure>
                            <img src="/assets/images/price/fv-banner-01.png" alt="" />
                        </figure>
                        <figure>
                            <img src="/assets/images/price/fv-tri.png" alt="" />
                        </figure>
                    </div>
                    <figure>
                        <img src="/assets/images/price/fv-banner-02.png" alt="" />
                    </figure>
                </div>
            </div>
        </div>
        </div>
    </section>
  );
};

export default FV;
