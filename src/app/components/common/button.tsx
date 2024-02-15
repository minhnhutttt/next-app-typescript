"use client";
import useScrollAnimation from "@/app/_hooks/useScrollAnimation";
import { ReactNode } from "react";
export type ButtonPropsType = {
    href: string;
    children: ReactNode;
};
export default function Button({ href, children }: ButtonPropsType) {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <a href={href} ref={animateRefs} className="md:h-[64px] h-[50px] px-8 md:px-[60px] flex items-center justify-center relative overflow-hidden rounded-[40px] md:text-[18px] text-[16px] opacity-0 hover:tracking-widest duration-300 origin-center">
      <span className="block absolute top-2/4 left-2/4 w-[120%] pb-[120%] -translate-x-1/2 -translate-y-1/2">
      <i className="block absolute top-[0] left-[0] w-full h-full -translate-x-1/2 -translate-y-1/2 bg-[url(/images/bg-btn.png)] bg-cover bg-no-repeat animate-[rotate_15s_linear_infinite]"></i>
      </span>
      <span className="relative">{children}</span>
    </a>
  );
}
