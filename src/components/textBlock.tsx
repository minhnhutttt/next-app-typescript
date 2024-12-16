"use client";
import { ReactNode } from "react";
export type PageTitlePropsType = {
  title?: string;
  children: ReactNode;
};
export default function TextBlock({ title, children }: PageTitlePropsType) {
  return (
    <div className="fade-up text-black">
      {title && (
        <p className="text-[20px] font-bold md:text-[25px]">
          {title}
        </p>
      )}
      <div className="mt-3 text-[14px] md:text-[16px] font-bold">
        {children}
      </div>
    </div>
  );
}
