"use client";
import { ReactNode } from "react";
type PageTextPropsType = {
  children: ReactNode;
};
export default function Text({ children }: PageTextPropsType) {
  return (
    <p className="fade-up text-black font-bold md:text-[28px] text-[16px] w-full max-w-[840px] mx-auto md:leading-9">
        {children}
      </p>
  );
}
