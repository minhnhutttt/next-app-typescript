"use client";
import { useState, useEffect } from "react";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const FV = () => {
  const ref = useScrollAnimations();
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => {
        if (prev === 3) {
          return 1;
        }
        return prev + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full max-md:pt-5 max-md:px-3 max-lg:pb-20 max-md:pb-16">
      <div data-scroll="out" className="relative w-full flex items-center justify-start px-3 lg:max-w-[1440px] max-w-[540px] mx-auto md:pt-14 md:pb-[88px] pb-10">
      <span className="animate-fv opacity-0 translate-y-5 lg:!delay-[0.9s] !delay-500 absolute -top-5 lg:top-0 left-0 z-10 max-md:w-[200px] max-lg:w-[280px]"><img src="/assets/images/fv-deco-01.png" alt="" /></span>
      <span className="animate-fv opacity-0 translate-y-5 lg:!delay-[0.9s] !delay-500 absolute right-0 bottom-0 z-10 max-md:w-[60px] max-lg:w-[90px]"><img src="/assets/images/fv-deco-02.png" alt="" /></span>
        <div 
          id="slider" 
          data-current-slide={currentSlide}
          className="top-kv grid grid-cols-1 lg:grid-cols-3 md:gap-4 h-[calc(100svh-10.6rem)] lg:h-full w-full mx-auto"
        >
          <div className="top-kv-item animate-fv max-lg:absolute max-lg:inset-0 lg:opacity-0 lg:translate-y-5 lg:rotate-3 lg:delay-0 md:rounded-[30px] rounded-[20px] shadow-lg overflow-hidden md:px-4 md:py-5 p-4 bg-gradient-to-br from-[#7FF5E8] to-[#91F1AA]">
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="relative w-full h-full overflow-hidden md:rounded-[20px] rounded-[15px]">
                <img className="max-lg:w-full max-lg:object-cover max-lg:h-full" src="/assets/images/fv-img-01.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="top-kv-item animate-fv max-lg:absolute max-lg:inset-0 lg:opacity-0 lg:translate-y-7 lg:-rotate-3 lg:!delay-[.25s] md:rounded-[30px] rounded-[20px] shadow-lg overflow-hidden md:px-4 md:py-5 p-4 bg-gradient-to-br from-[#02D6FF] to-[#4DFEFF]">
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="relative w-full h-full overflow-hidden md:rounded-[20px] rounded-[15px]">
                <img className="max-lg:w-full max-lg:object-cover max-lg:h-full" src="/assets/images/fv-img-02.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="top-kv-item animate-fv max-lg:absolute max-lg:inset-0 lg:opacity-0 lg:translate-y-5 lg:rotate-3 lg:!delay-500 md:rounded-[30px] rounded-[20px] shadow-lg overflow-hidden md:px-4 md:py-5 p-4 bg-gradient-to-br from-[#10E188] to-[#05BAEA]">
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="relative w-full h-full overflow-hidden md:rounded-[20px] rounded-[15px]">
                <img className="max-lg:w-full max-lg:object-cover max-lg:h-full" src="/assets/images/fv-img-03.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 z-30 flex md:items-center items-end max-md:pb-[20%] justify-start">
        <div className="animate-fv opacity-0 translate-y-5 lg:!delay-700 !delay-200 flex flex-col px-2 md:px-4 ml-[2.5%] xs:ml-[4%] sm:ml-[5%] md:ml-[7%] lg:ml-[10%] max-w-[95%] sm:max-w-[85%] items-start text-left md:space-y-[25px] space-y-2 max-md:w-[335px]">
          <h1 className="text-[60px] md:text-[40px] lg:text-[60px] xl:text-[80px] font-black bg-white/90 leading-none pb-2 px-2 pt-1 max-md:w-full">
            目的直行、<br className="md:hidden" />一直線
          </h1>
          <p className="text-[15px] lg:text-[32px] xl:text-[46px] font-black bg-white/90 leading-snug md:leading-none pb-2 px-2 pt-1 max-md:w-full">
            迷わせない新発想ナビゲーションシステムで         
          </p>
          <p className="text-[26px] lg:text-[32px] xl:text-[46px] font-black bg-white/90 leading-snug md:leading-none pb-2 px-2 pt-1 max-md:w-full">
            離脱防止×CVRアップを<br className="md:hidden" />「即実装・即実現」          
          </p>
        </div>
      </div>
      </div>
      
    </section>
  );
};

export default FV;