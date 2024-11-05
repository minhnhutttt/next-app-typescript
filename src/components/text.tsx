"use client";
import { ReactNode } from "react";
type PageTextPropsType = {
  children: ReactNode;
};
export default function Text({ children }: PageTextPropsType) {
  return (
    <p className="fade-up text-black md:text-[18px] text-[14px] md:leading-[27px] max-w-[600px]">
        {children}
      </p>
  );
}
