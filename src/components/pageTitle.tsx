"use client";
import { ReactNode } from "react";
type PageTitlePropsType = {
  children: ReactNode;
};
export default function PageTitle({ children }: PageTitlePropsType) {
  return (
    <div className="pt-[160px] flex items-center justify-center text-black px-5 md:pt-[240px]">
      <p className="fade-up text-[7vw] font-bold md:text-[50px]">
        {children}
      </p>
    </div>
  );
}
