"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

export default function PageHead({head, title, children }: { head: string, title: string, children: React.ReactNode }) {
    const ref = useScrollAnimations();
  return (
    <div ref={ref} className="max-md:pt-[20vw]">
        <div className="overflow-hidden">
            <div className="fade-up flex w-full overflow-hidden marquee-collection h1-bigger will-change-transform relative font-bold uppercase pointer-events-none">
                <div className="flex-[0_0_auto] whitespace-nowrap animate-[loop_50s_-25s_linear_infinite]">
                    {head}
                </div>
                <div className="flex-[0_0_auto] whitespace-nowrap animate-[loop2_50s_linear_infinite]">
                    {head}
                </div>
            </div>
        </div>
        <div className="w-full md:px-[2vw] px-[4vw] overflow-hidden pb-[10vw] md:pb-[10vw] relative max-md:mt-[5vw]">
            <div className="relative">
                <div className="!absolute top-[0.5vw] left-0 text-[4vw] md:text-[2vw] md:pr-[15vw] pr-[30vw]">
                    <p className="js-split">({title})</p>
                </div>
                <div className="h2 js-split">
                    <span className="md:w-[20vw] w-[30vw] inline-block"></span>{children}
                </div>
            </div>
        </div>
    </div>
  );
}