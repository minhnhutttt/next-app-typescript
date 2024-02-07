"use client";
import useScrollAnimation from "@/app/_hooks/useScrollAnimation";
import { ReactNode } from "react";
type PinPropsType = {
    href: string;
    x: string;
    y: string;
    children: ReactNode;
};
export default function Pin({ href, x, y, children }: PinPropsType) {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <a href={href} className="block w-[1.6666666666666667%] absolute z-50" style={{top: y + '%', left: x + '%'}}>
        <div className="block relative group hover:-translate-x-1/2 hover:-translate-y-full hover:scale-[2.25] origin-[bottom_center] md:pt-[8px] -translate-x-1/2 -translate-y-full [transition:transform_550ms_cubic-bezier(.19,1,.22,1)] z-10">
            <div className="group-hover:pointer-events-auto group-hover:opacity-100 absolute bottom-full left-2/4 -translate-x-1/2 translate-y-[0] scale-[.444] origin-[bottom_center] [transition:opacity_250ms_ease-in-out] pointer-events-none py-[0.75em] bg-[#fff] text-[#111218] max-md:text-[2vw] rounded-[0.25em] flex items-center justify-center gap-[1em] font-normal opacity-0 px-5">
                <span>{children}</span>
            </div>
            <img className="" src="/images/pin.svg" alt="" />
        </div>
    </a>
  );
}
