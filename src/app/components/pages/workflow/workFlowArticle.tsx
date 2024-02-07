"use client";
import useScrollAnimation from "@/app/_hooks/useScrollAnimation";
import CircleNumber from "../../common/circleNumber";
import { ReactNode } from "react";

type ArticlePropsType = {
  number: string;
  type: string;
  title: ReactNode;
  left: ReactNode;
  right: ReactNode;
};

export default function WorkFlowArticle({number, type, title, left, right}: ArticlePropsType ) {
  const animateRefs = useScrollAnimation("fadeDown");

  return (
    <div ref={animateRefs} className="opacity-0 relative group w-full mx-auto justify-center items-start flex gap-5 md:even:flex-row-reverse md:pb-[130px] pb-[60px] ">
        <span className="absolute w-px bg-[#D1D1D1] left-[10.4vw] md:left-1/2 bottom-[-40px] h-full group-last:hidden"></span>
        <div className="flex-1 max-md:hidden"><div className="w-[34.722vw] min-[1440px]:w-[500px]"></div></div>
        <div className="max-md:flex-[0_0_20vw] md:w-[21.944vw] min-[1440px]:w-[316px]">
            <CircleNumber size="sm">{number}</CircleNumber>
        </div>
        <div className="flex-1">
        <div className="md:w-[34.722vw] min-[1440px]:w-[500px] group-even:ml-auto">
            <p className="md:text-[24px] text-[16px] text-center text-white mb-4">{type}</p>
            <div className="border border-white">
                <div className="h-[44px] md:h-[57px] flex items-center justify-center border-b border-white md:text-[16px] text-[13px]">
                    {title}
                </div>
                <div className="flex text-white divide-x divide-white">
                    <div className="w-[45%] max-w-[225px] text-center flex items-center justify-center md:text-[18px] text-[14px] min-h-[154px] p-3">{left}</div>
                    <div className="flex-1 flex items-center justify-center md:text-[16px] text-[13px] min-h-[154px] p-3">{right}</div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}