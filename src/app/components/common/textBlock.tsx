"use client";
import useScrollAnimation from "@/app/_hooks/useScrollAnimation";
import { ReactNode } from "react";
export type PageTitlePropsType = {
    title?: string,
    children: ReactNode;
  };
    export default function TextBlock({ title, children }: PageTitlePropsType) {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <div ref={animateRefs} className="opacity-0">
      {title && (
        <p className="font-worksans text-[16px] font-bold md:text-[20px] text-white">
          {title}
        </p>
      )}
      <div className="font-worksans mt-3 text-[14px] md:mt-[18px] md:text-[16px] text-white">
        {children}
      </div>
    </div>
  );
}
