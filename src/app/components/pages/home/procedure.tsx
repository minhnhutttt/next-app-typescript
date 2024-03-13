"use client";
import useBgText from "@/app/hooks/useBgText";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import gsap, { Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactNode, useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

type dotType = {
  children: ReactNode;
};
function DotText({ children }: dotType) {
  return (
    <span className="relative after:absolute after:bottom-[-6px] md:after:bottom-[-8px] md:after:left-[1.667vw] after:left-[1.2vw] min-[1440px]:after:left-[24px] after:w-2 md:after:w-3 after:aspect-square after:rounded-full after:bg-[#FE4848]">
      {children}
    </span>
  );
}
export default function Procedure() {
  const animateZoomRefs = useScrollAnimation("zoom");
  const spanRef = useBgText();
    
  return (
    <section className="relative px-5 mt-[60px] md:mt-[100px] md:mb-[110px]">
      <div className="w-full max-w-[980px] mx-auto">
        <div ref={animateZoomRefs} className="opacity-0 flex justify-center">
          <p className="font-medium md:text-[1.667vw] min-[1440px]:text-[24px] text-[16px] bg-[url('/images/title-line.png')] bg-no-repeat bg-bottom pb-4 px-2 tracking-[0.2em]">
            発行から導入まで徹底サポート！
          </p>
        </div>
        <div ref={animateZoomRefs} className=" opacity-0flex justify-center">
          <h3 className="md:text-[4.306vw] whitespace-nowrap min-[1440px]:text-[62px] [font-size:_clamp(22px,4.267vw,32px)] font-medium leading-tight tracking-[0.2em]">
            デジタル証明書発行手続き <br />
            <DotText>ま</DotText>
            <DotText>る</DotText>
            <DotText>ご</DotText>
            <DotText>と</DotText>引き受けます。
          </h3>
        </div>
        <div className="mt-10 md:mt-16">
          <div
            ref={animateZoomRefs}
            className="opacity-0 flex justify-center items-center md:mb-[-83px] mb-[-60px] relative z-10 gap-1"
          >
            <img
              className="max-md:w-[60px]"
              src="/images/title-procedure-pen.png"
              alt=""
            />
            <img
              className="max-md:w-[100px] animate-[shake_1.5s_linear_infinite]"
              src="/images/title-procedure.png"
              alt=""
            />
            <img
              className="max-md:w-[60px]"
              src="/images/title-procedure-teacher.png"
              alt=""
            />
          </div>
          <div
            ref={animateZoomRefs}
            className="opacity-0 bg-[url('/images/bg-procedure.png')] bg-cover bg-no-repeat bg-center min-h-[370px] relative flex flex-col items-center pt-[80px] md:pt-[90px]"
          >
            <div className="md:text-[24px] text-[16px] text-center font-bold mb-5 md:mb-8 tracking-widest">
              <p className="inline-block relative overflow-hidden">
                <span ref={spanRef} className="w-0 opacity-0 absolute inset-0 z-[-1] bg-[linear-gradient(to_top,_#FFD900_40%,_transparent_40%)]"></span>
                デジタル化応援キャンペーン実施中！
              </p>
              <p>お得に証明書をデジタル化しよう♪</p>
            </div>
            <a
              href="#_"
              className="md:w-[392px] w-[300px] h-[60px] md:h-[84px] rounded-[16px] bg-[#FE4848] flex items-center justify-center md:text-[22px] text-[17px] font-black text-white gap-2 group overflow-hidden relative"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#FF9B9B] rounded-full group-hover:w-[500px] group-hover:h-[500px]"></span>
              <p className="relative flex items-center gap-2">
                <span>サポートをお願いする</span>
                <img src="/images/ic-d.svg" alt="" />
              </p>
            </a>
            <p className="text-center md:text-[14px] text-[12px] font-['Inter'] pt-1">
              ※キャンペーン詳細はLINEにてお伝えしています。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
