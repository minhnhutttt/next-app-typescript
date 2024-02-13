"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import { ReactNode } from "react";

export type PointItemPropsType = {
  point: string;
  subTitle: string;
  title: string;
  content: ReactNode;
};

export default function PointItem({
  point,
  subTitle,
  title,
  content,
}: PointItemPropsType) {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <div ref={animateRefs} className="bg-white max-w-[595px] rounded-[20px] [box-shadow:0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] pl-5 md:pl-12 pr-2 pb-3 pt-2 md:min-h-[250px] min-h-[215px]">
      <div className="flex items-end justify-between">
        <div className="text-[#112E77]">
          <p className="xl:text-[20px] md:text-[16px] text-[15px] font-bold">
            {subTitle}
          </p>
          <p className="xl:text-[40px] md:text-[32px] text-[22px] font-bold md:break-keep">
            {title}
          </p>
        </div>
        <div className="">
          <div className="md:w-[108px] w-[70px] aspect-square bg-[url('/images/ic-point.png')] bg-cover flex flex-col items-center justify-center font-semibold text-[#112F78] font-hiragino leading-none">
            <p className="text-center md:text-[19px] text-[14px]">Point</p>
            <p className="md:text-[32px] text-[18px]">{point}</p>
          </div>
        </div>
      </div>
      <div className="py-3 md:pr-11 pr-5">
        <p className="font-inter xl:text-[22px] md:text-[18px] text-[14px] leading-[1.8]">
          {content}
        </p>
      </div>
    </div>
  );
}
