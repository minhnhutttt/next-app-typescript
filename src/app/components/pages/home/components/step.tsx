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
    <div ref={animateUpRefs} className="opacity-0 max-md:w-full max-w-[310px] border-[5px] border-[#0055A3] rounded-[20px] [box-shadow:0px_4px_34px_0px_rgba(18,_47,_74,_0.10)] relative">
        <div className="aspect-[72/77] w-[72px] bg-[url('/images/bg-step.png')] bg-cover font-black text-white text-[26px] absolute top-[-5px] left-[-5px] pl-2.5">{step}</div>
        <div className="">
            {children}
        </div>
    </div>
  );
}