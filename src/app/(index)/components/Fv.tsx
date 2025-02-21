"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const Fv = () => {
  const ref = useScrollAnimations();

  return (
    <section ref={ref} className="relative overflow-hidden">
      <div className="flex justify-end">
        <div className="w-[80%] h-[76.923vw] md:h-[455px] relative">
          <div data-scroll="out" className="ani-fadein overflow-hidden rounded-bl-[110px] border-b border-l border-black/30 h-full pl-2 pb-2">
            <img
              className="w-full h-full object-cover rounded-bl-[105px]"
              src="/assets/images/fv.png"
              alt=""
            />
          </div>
          <h1 data-scroll="out" className="ani-slide-top absolute md:-bottom-4 -bottom-1 md:-left-10 -left-14">
            <img
              className="max-md:w-[83.333vw]"
              src="/assets/images/we-are-rogyx.svg"
              alt="WE ARE ROGYX"
            />
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Fv;
