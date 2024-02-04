"use client";
import useMarquise from "@/app/_hooks/useMarquise";
import useScrollAnimation from "@/app/_hooks/useScrollAnimation";
import { ReactNode, useRef } from "react";
export type MarquisePropsType = {
    children: ReactNode;
};
export default function Marquise({  children }: MarquisePropsType) {
    const animateRefs = useScrollAnimation("fadeUp");
    const marquiseContainer = useRef<HTMLDivElement>(null);
    useMarquise(marquiseContainer);

    return (
        <div ref={animateRefs} className="relative opacity-0">
            <div className="flex overflow-hidden">
                <p ref={marquiseContainer} className="flex break-keep whitespace-nowrap  [font-size:_clamp(80px,35vw,200px)] md:[font-size:_clamp(80px,20.833vw,300px)] font-solaris text-[#1C1B1B] leading-[0.75]">
                    {children}
                </p>
            </div>
        </div>
    );
}
