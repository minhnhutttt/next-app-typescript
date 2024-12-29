"use client";

import useScrollAnimations from "@/app/hooks/useScrollAnimations";
import ButtonLine from "@/components/buttonLine";

const MainVisual = () => {
  const ref = useScrollAnimations(); 
    return (
      <div ref={ref} className="fixed w-full inset-0 ">
        <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center"
        >
          <source src="/assets/videos/fv.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </div>
        <div>
          <div className="absolute xl:w-[calc(50%-320px)] w-[calc(50%-250px)] left-0 top-0 bottom-0 flex items-center justify-center flex-col gap-5 md:gap-[50px] p-5">
            <h1><img src="/assets/images/open-fave.png" alt="" /></h1>
            <ButtonLine />
          </div>
          <div className="absolute xl:w-[calc(50%-320px)] w-[calc(50%-250px)] right-0 bottom-0 top-0 flex items-center justify-center flex-col gap-5 md:gap-[50px] p-5">
            <div className="w-full max-w-[378px] rounded-[30px] border-[1px] border-[solid] border-[#FFF] bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(218,_90,_133,_0.20)_0%,_rgba(0,_0,_0,_0.00)_100%),_rgba(255,_255,_255,_0.10)] xl:py-[60px] py-8 xl:px-[50px] px-5 relative overflow-hidden">
              <div className="bg-white/10 absolute inset-0"></div>
              <ul className="dt:text-[clamp(10px,2.6vw,28px)] lg:text-[clamp(10px,2vw,20px)] font-medium text-center flex flex-col gap-[clamp(10px,5vmin,40px)] dt:gap-[clamp(10px,5.556vmin,60px)] relative">
                  <li><a href="/" className="text-[#21012D]/[0.5]">見るから所有するへ</a></li>
                  <li><a href="/" className="text-[#21012D]/[0.5]">What’s OPEN FAVE</a></li>
                  <li><a href="/" className="text-[#21012D]/[0.5]">8つの未来</a></li>
                  <li><a href="/" className="text-[#21012D]/[0.5]">スペシャルイベント</a></li>
                  <li><a href="/" className="text-[#21012D]/[0.5]">はじめ方</a></li>
                  <li><a href="/" className="text-[#21012D]/[0.5]">FAQ</a></li>
                </ul>

            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default MainVisual;
  