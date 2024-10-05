"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const Consortium = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative md:mt-[120px] mt-[100px] px-5 z-10">
      <div className="w-full md:max-w-[1040px] max-w-[500px] mx-auto">
        <h4 className="fade-up md:text-[48px] text-[28px] font-bold text-center">CONSORTIUM</h4>
        <div className="fade-up grid md:grid-cols-4 grid-cols-2 justify-center md:mt-6 mt-4 md:mb-20 mb-10">
            <p><img src="/assets/images/consortium-01.png" alt="" /></p>
            <p><img src="/assets/images/consortium-02.png" alt="" /></p>
            <p><img src="/assets/images/consortium-03.png" alt="" /></p>
            <p><img src="/assets/images/consortium-04.png" alt="" /></p>
            <p><img src="/assets/images/consortium-05.png" alt="" /></p>
            <p><img src="/assets/images/consortium-06.png" alt="" /></p>
            <p><img src="/assets/images/consortium-07.png" alt="" /></p>
            <p><img src="/assets/images/consortium-08.png" alt="" /></p>
        </div>
        <div className="fade-up flex justify-center">
            <a
            href="/contact"
            className="group relative flex items-center hover:duration-100 md:mb-5 md:gap-12 gap-5"
          >
            <p className="md:text-[22px] text-[16px] font-medium whitespace-nowrap">
                Become a member to <br />co-create DIVER's future
            </p>
            <div className="relative">
            <img
              src="/assets/images/circle-link.png"
              alt=""
              className="animate-[r_linear_infinite_10s,_r_linear_infinite_15s_reverse_paused] duration-300 [animation-composition:add] group-hover:scale-110 group-hover:[animation-play-state:running]"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <p className="md:text-[24px] text-[20px] leading-none text-center">
                RPC <br />Gateway
              </p>
              <img
                className="max-md:w-24"
                src="/assets/images/ic-link-arrow.png"
                alt=""
              />
            </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Consortium;
