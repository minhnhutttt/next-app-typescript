"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";
import { frontOpen } from "@/lib/front";

const FV = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative">
        <div className="absolute inset-0">
                <video autoPlay muted loop className="w-full h-full object-cover">
                <source src="/assets/videos/fv.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
        <div className="w-full max-w-[1440px] mx-auto md:pt-[70px] pt-10 pb-2">
            <h1 className="zoom-in"><img src="/assets/images/fv-main.png" alt="" /></h1>
            <div className="w-full md:max-w-[1045px] max-w-[570px] mx-auto py-10 md:px-[50px] px-5">
            <div className="popup relative">
                <p className="absolute inset-0 text-[24px] font-black tracking-widest text-white [-webkit-text-stroke:_6px_white] md:text-[42px] leading-[1.9]">
                <span className="bg-[linear-gradient(to_top,_#FEEF01_30%,_transparent_30%)]">圧倒的な技術と革新的なサービスを仕入れて<br className="max-lg:hidden" />
                    あなたの顧客に販売してみませんか？</span>
                </p>
                <h3 className="relative text-[24px] font-black tracking-widest md:text-[42px] text-[#00053A] leading-[1.9]">
                    圧倒的な技術と革新的なサービスを仕入れて<br className="max-lg:hidden" />
                    あなたの顧客に販売してみませんか？
                </h3>
            </div>
            </div>
        </div>
        <button onClick={()=> frontOpen()} className="fixed right-3 bottom-3 z-40">
            <img className="max-md:w-[80px]  rounded-full [box-shadow:0px_0px_30px_0px_rgba(24,_83,_158,_0.20)]" src="/assets/images/logo-fixed.png" alt="" />
        </button>
    </section>
  );
};

export default FV;
