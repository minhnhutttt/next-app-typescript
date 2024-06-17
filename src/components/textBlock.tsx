"use client";
import { ReactNode } from "react";
export type PageTitlePropsType = {
  title?: string;
  children: ReactNode;
};
export default function TextBlock({ title, children }: PageTitlePropsType) {
  return (
    <div className="fade-up text-white">
      {title && (
        <p className="font-worksans text-[14px] font-bold md:text-[16px]">
          {title}
        </p>
      )}
      <div className="font-worksans mt-3 text-[14px] md:mt-[18px] md:text-[16px]">
        {children}
      </div>
    </div>
  );
}
