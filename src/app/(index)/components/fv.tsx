"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const FV = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative">
      <div className="md:h-[calc(100%-120px)] h-[calc(100%-80px)] bg-[#FFB601] absolute w-full bottom-0 inset-x-0"></div>
      <div className="bg-[url(/assets/images/fv-bg.png)] bg-cover bg-bottom absolute inset-0"></div>
      
      <div className="relative pt-16 md:pt-[85px] h-full flex flex-col justify-between  overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto md:flex items-end relative z-30">
          <h1 className="slide-skew">
            <img src="/assets/images/fv-main.png" alt="" />
          </h1>
          <div className="zoom-in md:-mb-10 md:-ml-16 max-md:w-[50%] max-md:ml-auto"><img className="animate-[anim-bounce_1.6s_infinite_ease-in-out]" src="/assets/images/bubble.svg" alt="" /></div>
        </div>
        <div className="fade-up flex justify-center md:-mt-10 relative z-20">
          <img src="/assets/images/fv-image.png" alt="" />
        </div>
      </div>
      <div className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 z-10">
        <img className="" src="/assets/images/fv-arr.png" alt="" />
      </div>
    </section>
  );
};

export default FV;
