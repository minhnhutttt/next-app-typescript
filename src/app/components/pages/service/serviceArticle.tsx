"use client";
import useSplitTextAnimation from "@/app/_hooks/useSplitTextAnimation";
import useScrollAnimation from "@/app/_hooks/useScrollAnimation";
import TextSVG from "./textSVG";
import CircleNumber from "../../common/circleNumber";
import { ReactNode } from "react";

export type ArticlePropsType = {
  number: string;
  type: string;
  title: string;
  href: string;
  children: ReactNode;
};

export default function ServiceArticle({number, type, title, href, children}: ArticlePropsType ) {
  const animateRefs = useScrollAnimation("fadeDown");

  return (
    <div ref={animateRefs} className="opacity-0 group w-full max-w-[1040px] mx-auto flex items-center md:items-end gap-7 md:gap-16 md:pl-5 md:even:flex-row-reverse max-md:flex-col">
        <CircleNumber size="lg">{number}</CircleNumber>
        <div className="text-white flex-1 md:mb-11">
          <h5 className="md:text-[28px] text-[20px] border-b border-white leading-relaxed">{type}</h5>
          <p className="md:text-[20px] text-[16px] mt-3">{title}</p>
          <p className="md:text-[16px] text-[13px]">{children}</p>
          <div className="flex md:group-even:justify-start justify-end mt-4 md:mt-6">
            <a href={href} className="flex items-center justify-center md:text-[18px] text-[14px] gap-2 max-md:py-1 w-[100px] md:w-[120px] border-b border-white">
              <span>DETAIL</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M14.4278 0.572237V9.16323e-07C14.5795 9.16323e-07 14.7251 0.0602899 14.8324 0.167605C14.9397 0.27492 15 0.420471 15 0.572237H14.4278ZM14.4278 5.15013H15C15.0002 5.26345 14.9668 5.37429 14.9039 5.46858C14.841 5.56287 14.7516 5.63638 14.6469 5.67977C14.5422 5.72317 14.427 5.7345 14.3158 5.71234C14.2047 5.69017 14.1027 5.63551 14.0226 5.55527L14.4278 5.15013ZM9.84987 0.572237L9.44473 0.977381C9.36449 0.897348 9.30983 0.795294 9.28766 0.684156C9.2655 0.573018 9.27683 0.457802 9.32023 0.353113C9.36362 0.248424 9.43713 0.158978 9.53142 0.0961135C9.62571 0.0332493 9.73655 -0.000201844 9.84987 9.16323e-07V0.572237ZM12.544 3.26633L0.810289 15L0 14.1897L11.7337 2.45604L12.544 3.26633ZM15 0.572237V5.15013H13.8555V0.572237H15ZM14.0226 5.55527L9.44473 0.977381L10.255 0.167094L14.8329 4.74499L14.0226 5.55527ZM9.84987 9.16323e-07H14.4278V1.14447H9.84987V9.16323e-07Z" fill="white"/>
              </svg>
            </a>
          </div>
        </div>
    </div>
  )
}