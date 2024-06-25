"use client";
import { ReactNode } from "react";
export type PageTitlePropsType = {
  children: ReactNode;
};
export default function PageTitle({ children }: PageTitlePropsType) {
  return (
    <div className="h-[320px] bg-[url('/assets/images/page-title.png')] bg-cover flex items-center justify-center">
      <p className="fade-up font-zen text-[5vw] font-bold md:text-[42px] text-white [text-shadow:1px_1px_0px_rgba(0,_0,_0,_0.50)]">
        {children}
      </p>
    </div>
  );
}
