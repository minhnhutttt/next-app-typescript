"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import { ReactNode } from "react";

type FTextPropsType = {
  delay: string;
  children: ReactNode;
};

function FText({delay = "0.1", children} : FTextPropsType) {
  return (
    <span className="animate-[fade-in_0.8s_forwards_cubic-bezier(0.11,_0,_0.5,_0)] opacity-0 filter blur-sm" style={{animationDelay: delay+'s'}}>
      {children}
    </span>
  );
}

export default function FV() {
  const animateRefs = useScrollAnimation("fadeUp");
  const animateZoomRefs = useScrollAnimation("zoom");
  return (
    <section className="relative">
      <div className="bg-[#FF9B9B] max-md:p-5 py-8 md:py-10">
        <div
          className="flex max-md:flex-col max-md:items-center"
        >
          <div className="relative md:max-[1439px]:w-[52.083vw] max-md:rounded-[32px] md:rounded-e-[60px] overflow-hidden">
            <img
              className="max-md:w-full max-md:max-w-[440px]"
              src="/images/fv-image.png"
              alt=""
            />
          </div>
          <div
            className="text-white pt-5 md:pt-[2.222vw] min-[1440px]:pt-8 px-[2.5vw] min-[1440px]:px-10 flex-1 scale-[0.9] animate-[scale_3s_forwards_cubic-bezier(0.5,_1,_0.89,_1)]"
          >
            <h4 className="[font-size:_clamp(40px,7vw,54px)] md:text-[5vw] min-[1440px]:text-[72px] font-kiwi text-center leading-tight">
              <FText delay="0.1">複</FText>
              <FText delay="0.2">雑</FText>
              <FText delay="0.3">な</FText>
              <FText delay="0.4">証</FText>
              <FText delay="0.5">明</FText>
              <FText delay="0.6">書</FText>
              <FText delay="0.7">の</FText>
               <br />
               <FText delay="0.1">デ</FText>
               <FText delay="0.2">ジ</FText>
               <FText delay="0.3">タ</FText>
               <FText delay="0.4">ル</FText>
               <FText delay="0.5">化</FText>
               <FText delay="0.6">は</FText>
            </h4>
            <h1 className="[font-size:_clamp(55px,9.867vw,74px)] text-center font-bold md:text-[7.292vw] min-[1440px]:text-[105px] leading-tight">
            <FText delay="0.1">誰</FText>
            <FText delay="0.2">で</FText>
            <FText delay="0.3">も</FText>
            <FText delay="0.4">
            <span className="relative after:absolute after:bottom-[-6px] md:after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-3 md:after:w-[1.667vw] after:aspect-square min-[1440px]:after:w-6 after:rounded-full after:bg-[#FE4848]">
                簡
              </span>
            </FText>
            <FText delay="0.5">
            <span className="relative after:absolute after:bottom-[-6px] md:after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-3 md:after:w-[1.667vw] after:aspect-square min-[1440px]:after:w-6 after:rounded-full after:bg-[#FE4848]">
                単
              </span>
            </FText>
            <FText delay="0.6">!!</FText>
            </h1>
            <p className="text-center [font-size:_clamp(34px,6.5vw,48px)] font-kiwi min-[1440px]:text-[68px] md:text-[4.722vw] tracking-tight leading-tight mt-[20px] md:mt-[1.944vw] min-[1440px]::mt-7">
            <FText delay="0.1">な</FText>
            <FText delay="0.2">次</FText>
            <FText delay="0.3">世</FText>
            <FText delay="0.4">代</FText>
            <FText delay="0.5">証</FText>
            <FText delay="0.6">明</FText>
            <FText delay="0.7">書</FText>
            <FText delay="0.8">で</FText>
              <br />
            <FText delay="0.1">実</FText>
            <FText delay="0.2">現</FText>
            <FText delay="0.3">し</FText>
            <FText delay="0.4">て</FText>
            <FText delay="0.5">く</FText>
            <FText delay="0.6">だ</FText>
            <FText delay="0.7">さ</FText>
            <FText delay="0.8">い</FText>
            <FText delay="0.9">！</FText>
            </p>
          </div>
        </div>
      </div>
      <div
        ref={animateRefs}
        className="opacity-0 text-[5.625vw] min-[1440px]:text-[81px] font-black tracking-[0.098em] text-center leading-none mt-[-1.389vw] min-[1440px]:-mt-5 text-gradient bg-[linear-gradient(0deg,_rgba(254,_72,_72,_0.50)_6.17%,_rgba(255,_155,_155,_0.50)_79.01%)]"
      >
        NEXT GENERATION CERTIFICATE
      </div>
    </section>
  );
}
