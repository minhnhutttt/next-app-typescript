"use client";
import useScrollAnimation from "@/app/_hooks/useScrollAnimation";
import { ReactNode } from "react";
export type PageTitlePropsType = {
  children: ReactNode;
};
export default function PageTitle({ children }: PageTitlePropsType) {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <div className="pt-[180px] flex items-center justify-center px-5 md:pt-[290px]">
      <p
        ref={animateRefs}
        className="font-zen text-[7vw] text-white font-bold opacity-0 md:text-[50px]"
      >
        {children}
      </p>
    </div>
  );
}
