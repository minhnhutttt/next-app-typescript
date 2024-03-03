"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import { ReactNode } from "react";
export type SectionTitlePropsType = {
    subTitle: string;
    children: ReactNode;
};
export default function SectionTitle({ subTitle, children }: SectionTitlePropsType) {
  const animateLeftRefs = useScrollAnimation("slideLeft");
  return (
    <div ref={animateLeftRefs} className="opacity-0 font-bold max-md:text-center">
        <p className="md:text-[32px] text-[16px] tracking-wide mb-2">{subTitle}</p>
        <h5 className="md:text-[64px] [font-size:_clamp(24px,7vw,32px)] tracking-wider">{children}</h5>
    </div>
  );
}
