"use client";
import { ReactNode } from "react";
type PageTitlePropsType = {
  children: ReactNode;
};
export default function PageTitle({ children }: PageTitlePropsType) {
  return (
    <div className="pt-[60px] flex items-center justify-center px-5 md:pt-[120px] text-white">
      <p className="fade-up text-[7vw] font-bold md:text-[50px]">
        {children}
      </p>
    </div>
  );
}