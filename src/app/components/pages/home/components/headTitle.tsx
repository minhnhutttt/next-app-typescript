"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import { ReactNode } from "react";
export type HeadTitlePropsType = {
    children: ReactNode;
};
export default function HeadTitle({ children }: HeadTitlePropsType) {
  const animateLeftRefs = useScrollAnimation("slideLeft");
  return (
    <div ref={animateLeftRefs} className="opacity-0 font-black flex items-center justify-center gap-4 md:gap-[64px]">
        <span className="flex-1 w-full bg-[#0055A3] h-[3px]"></span>
        <h5 className="min-[1440px]:text-[64px] md:text-[4.306vw] [font-size:_clamp(24px,7vw,32px)] md:tracking-wider">{children}</h5>
        <span className="flex-1 w-full bg-[#0055A3] h-[3px]"></span>
    </div>
  );
}
