"use client";
import { ReactNode } from "react";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
type SectionTitlePropsType = {
  type: ReactNode;
  title: ReactNode;
  content?: ReactNode;
  children: ReactNode;
  reverse?: boolean;
  noBg?: boolean
};

export default function SectionTitle({
  type,
  title,
  content,
  children,
  reverse,
  noBg
}: SectionTitlePropsType) {
  const animateRefs = useScrollAnimation("zoom");
  return (
    <div
      className={`relative md:min-h-[472px] ${reverse ? "skew-y-[7deg]" : "skew-y-[-7deg]"} ${!noBg && 'max-md:bg-white'}`}
    >
      <div
        ref={animateRefs}
        className="opacity-0 flex max-md:flex-col md:absolute top-0 inset-x-0 "
      >
        <div className="md:w-[38.75%] bg-[#22ABF3] flex items-center flex-col justify-center py-12 md:py-14 md:min-h-[470px] px-5">
          <div className={`${reverse ? "skew-y-[-7deg]" : "skew-y-[7deg]"}`}>
            <div className="text-white/40 font-bold font-zenOld text-center leading-none">
              {type}
            </div>
            <h4 className="text-white font-bold [font-size:_clamp(16px,2.667vw,20px)] md:text-[1.944vw] min-[1440px]:text-[28px] mt-[-3.056vw] min-[1440px]::mt-[-44px] text-center">
              {title}
            </h4>
            <div className="flex justify-center mt-3">
              <p className="text-white max-w-[444px] font-bold [font-size:_clamp(12px,2.133vw,16px)] md:text-[16px]">
                {content}
              </p>
            </div>
          </div>
        </div>
        <div
          ref={animateRefs}
          className="opacity-0 flex-1 bg-white relative"
        ></div>
      </div>
      <div
        className={`relative w-full md:w-[61.25%] ml-auto ${reverse ? "skew-y-[-7deg]" : "skew-y-[7deg]"}`}
      >
        <div ref={animateRefs} className="opacity-0 flex justify-center">
          {children}
        </div>
      </div>
    </div>
  );
}
