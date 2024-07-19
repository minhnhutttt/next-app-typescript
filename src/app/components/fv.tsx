"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const FV = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative md:h-[800px] bg-[url('/assets/images/bg-fv.png')] bg-cover bg-no-repeat">
        <div className="w-full max-w-[1440px] mx-auto relative md:py-10 py-20 px-1 md:px-11 flex max-md:flex-col-reverse">
          <div data-scroll="in" className="ani-zoom-out animation-500 opacity-0">
            <img className="max-md:w-[86vw] max-dt:[54.722vw]" src="/assets/images/fv-rabbit.png" alt="" />
          </div>
          <div data-scroll="in" className="ani-zoom-out animation-500 md:animation-1250 opacity-0 dt:-ml-[190px] md:-ml-[13.194vw] md:pt-[3.333vw] dt:pt-12 max-md:flex max-md:justify-end max-md:mb-4">
            <img className="max-md:w-[90vw] max-dt:[52.5vw]" src="/assets/images/fv-main.png" alt="" />
          </div>
        </div>
    </section>
  );
};

export default FV;
