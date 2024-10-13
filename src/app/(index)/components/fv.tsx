"use client";
import Button from "@/components/button";
import useScrollAnimations from "@/hooks/useScrollAnimations";
const FV = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="bg-[url('/assets/images/bg-fv.png')] bg-cover bg-center md:pt-[170px] md:pb-[70px] py-28 px-5 md:min-h-[1024px] overflow-hidden">
      <div className="relative max-w-[1200px] mx-auto pt-20 md:pt-[150px] px-[10px] md:pb-[80px] pb-10 md:min-h-[780px] min-h-[450px]">
        <span className="absolute inset-0 bg-white/20 rounded-[30px] shadow-[20px_10px_50px_rgba(0,_0,_0,_0.15)] "></span>
        <figure className="fade-up absolute top-16 left-[50%] translate-x-[-50%] w-[100%] max-w-[1000px]">
            <img src="/assets/images/icons.png" alt="" />
        </figure>
        <figure className="fade-up absolute md:bottom-[-10%] bottom-[-15%] md:right-[-10%] right-[-25px] w-[100%] md:max-w-[333px] max-w-[30%]">
            <img src="/assets/images/ellipse.png" alt="" />
        </figure>
        <h2 className="fade-up text-stroke relative z-10 md:text-[88px] text-[32px] text-white text-center leading-[1.3] font-bold [text-shadow:_2px_2px_0px_#000000]">
          YOUR POPULARITY IS YOURS.<br />
        NO ONE CAN TAKE AWAY YOUR POPULARITY.
        <span aria-hidden="true" className="absolute left-0 pointer-events-none text-stroke-none top-0 right-0">YOUR POPULARITY IS YOURS.<br />
        NO ONE CAN TAKE AWAY YOUR POPULARITY.</span>
        
        </h2>
        <div className="md:pt-[128px] pt-10">
            <Button />
        </div>
      </div>
    </section>
  );
};

export default FV;
