"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";


const Howto = () => {
  const ref = useScrollAnimations();
  return (
    <section id="howto" ref={ref} className="relative px-5 bg-[url('/assets/images/howto-bg.png')] bg-cover mt-10 md:pb-[144px] pb-20">
        <div className="h-px"></div>
        <h3 className="popup md:text-[80px] text-[34px] text-center font-bold leading-none md:-mt-[46px] -mt-[20px] md:px-5">How to participate</h3>
        <div className="w-full max-w-[1260px] mx-auto flex justify-center md:mt-20 mt-10 xl:gap-[140px] gap-10 max-lg:flex-wrap">
            <div className="fade-up w-full md:w-[560px] max-w-[560px] relative">
                <span className="absolute right-5 md:right-[40px] z-10">
                    <img className="animate-pulse max-md:w-[80px]" src="/assets/images/ic-kiran.png" alt="" />
                </span>
                <figure className="drop-shadow-[0_0_80px_rgba(237,_10,_0,_0.10)]">
                    <img src="/assets/images/howto-img-01.png" alt="" />
                </figure>
                <div className="flex justify-center -mt-[30px] md:mt-[-37px] relative">
                    <p className="flex items-center justify-center px-[30px] xl:text-[36px] md:text-[24px] text-[20px] font-bold md:h-[74px] h-[60px] border border-black rounded-full leading-none bg-white">As a supporter</p>
                </div>
            </div>
            <div className="fade-up w-full md:w-[560px] max-w-[560px] relative">
                <span className="absolute right-5 md:right-[40px] z-10">
                    <img className="animate-pulse max-md:w-[80px]" src="/assets/images/ic-kiran.png" alt="" />
                </span>
                <figure className="drop-shadow-[0_0_80px_rgba(237,_10,_0,_0.10)]">
                    <img src="/assets/images/howto-img-02.png" alt="" />
                </figure>
                <div className="flex justify-center -mt-[30px] md:mt-[-37px] relative">
                    <p className="flex items-center justify-center px-[30px] xl:text-[36px] md:text-[24px] text-[20px] font-bold md:h-[74px] h-[60px] border border-black rounded-full leading-none bg-white">As a support destination</p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Howto;
