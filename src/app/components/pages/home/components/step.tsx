"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import { ReactNode } from "react";

type StepPropsType = {
    step: string;
    children: ReactNode;
};
export default function Step({ step, children }: StepPropsType) {
  const animateUpRefs = useScrollAnimation("fadeUp");
  return (
    <div ref={animateUpRefs} className="opacity-0 max-md:w-full max-w-[310px] border-[5px] border-[#0055A3] rounded-[20px] [box-shadow:0px_4px_34px_0px_rgba(18,_47,_74,_0.10)] relative md:bg-[linear-gradient(135deg,_#0055A3_46px,_transparent_0)]">
        <div className="aspect-[72/77] w-[72px] font-black text-white text-[26px] absolute top-[-5px] left-[-5px] pl-2.5">{step}</div>
        <div className="px-3 md:px-5">
            {children}
        </div>
    </div>
  );
}