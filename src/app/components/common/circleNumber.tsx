"use client";
import useScrollAnimation from "@/app/_hooks/useScrollAnimation";
import { ReactNode } from "react";
export type CircleNumberPropsType = {
    size: 'sm' | 'lg';
    children: ReactNode;
};
export default function CircleNumber({ size = "lg", children }: CircleNumberPropsType) {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <div ref={animateRefs} className="relative">
        <div className={`bg-[url('/images/circle.png')] bg-cover animate-[backwards-rotation_60s_infinite_linear] aspect-square ${size === 'sm' && 'md:max-w-[324px] max-w-[200px]'} ${size === 'lg' && 'md:w-[360px] w-[240px]'}`}></div>
        <span className={`absolute inset-0 text-white flex items-center justify-center font-solaris  ${size === 'sm' && 'lg:text-[64px] md:text-[48px] text-[32px]'} ${size === 'lg' && 'md:text-[80px] text-[40px]'}`}>{children}</span>
    </div>
  );
}
