"use client";
import { ReactNode } from "react";
export type PageTitlePropsType = {
  children: ReactNode;
};
export default function PageTitle({ children }: PageTitlePropsType) {
  return (
    <div className="pt-[160px] flex items-center justify-center px-5 md:pt-[200px] text-white">
      <p className="fade-up font-zen text-[7vw] font-bold md:text-[50px]">
        {children}
      </p>
    </div>
  );
}
