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
    <div className="relative">
        <div className={`bg-[url('/images/circle.png')] bg-cover animate-[backwards-rotation_60s_infinite_linear]  ${size === 'sm' && 'md:w-[280px] w-[200px] aspect-[280/283]'} ${size === 'lg' && 'md:w-[356px] w-[240px] aspect-[356/364]'}`}></div>
        <span className="absolute inset-0 text-white flex items-center justify-center font-solaris md:text-[80px] text-[40px] ">{children}</span>
    </div>
  );
}
