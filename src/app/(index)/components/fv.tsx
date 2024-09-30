"use client";
import { useEffect } from "react";
import ScrollOut from "scroll-out";

const FV = () => {
  useEffect(() => {
    const scroll = new ScrollOut({
        targets: '.fv-scroll',
        offset: 50,
        cssProps: true,
    });

    return () => scroll.teardown();
}, []);
  return (
    <div className="fv-scroll group pt-[100px] relative h-[760px] bg-[linear-gradient(140deg,_#2379E7_1.59%,_#2594F7_33.42%,_#28A7FE_57.52%,_#2AB1FF_75.85%,_#32BCFE_98.03%)]">
        <div className="fixed inset-x-0 h-full w-full max-w-[1440px] mx-auto flex items-center justify-center">
          <div className="group-data-[scroll=in]:translate-x-[100%] group-data-[scroll=in]:translate-y-[40%] group-data-[scroll=in]:rotate-[-30deg] group-data-[scroll=in]:opacity-0 duration-300 absolute w-[24.375%] top-0 left-[2.083%]">
            <img src="/assets/images/fc-sec-01.png" alt="" />
          </div>
          <div className="group-data-[scroll=in]:translate-x-[100%] group-data-[scroll=in]:translate-y-[40%] group-data-[scroll=in]:rotate-[-10deg] group-data-[scroll=in]:opacity-0 duration-300 absolute w-[11.875%] top-[10%] left-[22.91%]">
            <img src="/assets/images/fc-sec-02.png" alt="" />
          </div>
          <div className="group-data-[scroll=in]:translate-x-[100%] group-data-[scroll=in]:translate-y-[-20%] group-data-[scroll=in]:rotate-[-20deg] group-data-[scroll=in]:opacity-0 duration-300 absolute w-[20.97%] left-[22.91%] top-[44%]">
            <img src="/assets/images/fc-sec-03.png" alt="" />
          </div>
          <div className="group-data-[scroll=in]:translate-x-[-100%] group-data-[scroll=in]:translate-y-[40%] group-data-[scroll=in]:rotate-[20deg] group-data-[scroll=in]:opacity-0 duration-300 absolute w-[17.08%] right-[23%] top-[2%]">
            <img src="/assets/images/fc-sec-04.png" alt="" />
          </div>
          <div className="group-data-[scroll=in]:translate-x-[-120%] group-data-[scroll=in]:translate-y-[40%] group-data-[scroll=in]:rotate-[30deg] group-data-[scroll=in]:opacity-0 duration-300 absolute w-[19.65%] right-[3.5%] top-[9.5%]">
            <img src="/assets/images/fc-sec-05.png" alt="" />
          </div>
          <div className="group-data-[scroll=in]:translate-x-[-120%] group-data-[scroll=in]:translate-y-[-20%] group-data-[scroll=in]:rotate-[20deg] group-data-[scroll=in]:opacity-0 duration-300 absolute w-[17.08%] right-[11%] top-[55%]">
            <img src="/assets/images/fc-sec-06.png" alt="" />
          </div>
          <div className="bg-white font-bold md:text-[48px] px-[50px] py-2.5 max-w-[750px] relative " style={{ filter: 'blur(calc((1 - var(--visible-y)) * 10px))', opacity: 'var(--visible-y)' }}>
              Unwavering Commitment to Transparency and Security
          </div>
        </div>
    </div>
  );
};

export default FV;
