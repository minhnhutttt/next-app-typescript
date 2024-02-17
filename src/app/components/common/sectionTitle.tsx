"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import { ReactNode } from "react";

type SectionTitlePropsType = {
    type: ReactNode;
    title: ReactNode;
    content: ReactNode;
    children: ReactNode;
};

export default function SectionTitle({ type, title, content, children }: SectionTitlePropsType) {
  const animateRefs = useScrollAnimation("zoom");
  return (
    <div className="flex max-md:flex-col skew-y-[-7deg]">
        <div className="md:w-[38.75%] bg-[#22ABF3] flex items-center flex-col py-10 md:py-14 md:min-h-[470px] px-5">
            <div ref={animateRefs} className="opacity-0 skew-y-[7deg]">
                <div className="text-white/40 font-bold font-zenOld text-center leading-none">{type}</div>
                <h4 className="text-white font-bold [font-size:_clamp(16px,2.667vw,20px)] md:text-[1.944vw] min-[1440px]:text-[28px] mt-[-3.056vw] min-[1440px]::mt-[-44px] text-center">{title}</h4>
                <div className="flex justify-center mt-3">
                    <p className="text-white max-w-[444px] font-bold [font-size:_clamp(12px,2.133vw,16px)] md:text-[16px]">{content}</p>
                </div>
            </div>
        </div>
        <div className="flex-1 bg-white relative">
            <div className="md:absolute inset-0 skew-y-[7deg]">
                {children}
            </div>
        </div>
    </div>
  );
}
