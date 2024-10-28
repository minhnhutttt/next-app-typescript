"use client";
import { ReactNode } from "react";
export type PageTitlePropsType = {
  text_ja: ReactNode;
  text_en: ReactNode;
  alignment?: 'left' | 'center' | 'right'; 
  titleColor?: 'black' | 'white';
};
export default function Title({ text_ja, text_en, alignment = 'center', titleColor = 'black' }: PageTitlePropsType) {
  const alignmentClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }[alignment];
  const colorClass = titleColor === 'white' ? 'text-white' : 'text-black';
  return (
   <h2 className={`fade-up md:text-[48px] text-[24px] text-black font-extrabold z-10 relative tracking-[0.05em] ${alignmentClass} ${colorClass}`}>
    <span className="block md:text-[20px] text-[18px] text-[#00CBBF] tracking-normal  max-md:mb-2">{text_en}</span>
    {text_ja}
   </h2>
  );
}
