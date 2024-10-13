"use client";
import { ReactNode } from "react";
export type PageTitlePropsType = {
  children: ReactNode;
  alignment?: 'left' | 'center' | 'right'; 
};
export default function Title({ children, alignment = 'center' }: PageTitlePropsType) {
  const alignmentClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }[alignment];
  return (
   <h2 className={`fade-up md:text-[64px] sm:text-[34px] text-[26px] text-black font-bold z-10 relative ${alignmentClass}`}>
    {children}
   </h2>
  );
}
