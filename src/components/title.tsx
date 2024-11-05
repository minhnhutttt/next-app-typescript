"use client";
import { ReactNode } from "react";
export type PageTitlePropsType = {
  text: ReactNode;
};
export default function Title({ text}: PageTitlePropsType) {
  return (
   <h2 className={`fade-up md:text-[48px] text-[24px] text-black font-bold z-10 relative tracking-[0.2em] text-center inter`}>
    {text}
   </h2>
  );
}
