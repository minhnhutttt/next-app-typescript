"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const FV = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative h-[80vw] md:h-[800px] bg-[url('/assets/images/bg-fv.png')] bg-cover bg-no-repeat">
        <div className="w-full max-w-[1440px] mx-auto relative md:py-10 py-20 px-5 md:px-11 flex">
          <div data-scroll="in" className="ani-zoom-out animation-500 opacity-0">
            <img className="max-dt:[54.722vw]" src="/assets/images/fv-rabbit.png" alt="" />
          </div>
          <div data-scroll="in" className="ani-zoom-out animation-1250 opacity-0 dt:-ml-[190px] -ml-[13.194vw] pt-[3.333vw] dt:pt-12">
            <img className="max-dt:[52.5vw]" src="/assets/images/fv-main.png" alt="" />
          </div>
        </div>
    </section>
  );
};

export default FV;
