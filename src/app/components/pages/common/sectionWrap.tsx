"use client"
import { ReactNode } from "react";

type sectionWrapPropsType = {
    anchor: string
    number: string;
    title: string;
    content: ReactNode;
    children: ReactNode;
};
export default function SectionWrap({
    anchor,
    number,
    title,
    content,
    children
    }: sectionWrapPropsType) {
    return (
        <div id={anchor} className="md:rounded-[40px] rounded-[32px] overflow-hidden w-full max-w-[960px] bg-white/90 mx-auto [box-shadow:0px_4px_50px_rgba(73,_61,_0,_0.20)]">
            <div className="flex items-center bg-[url('/images/bg-title.png')] bg-cover px-4 md:px-[2.222vw] min-[1440px]:px-8 py-4 max-md:flex-wrap max-md:justify-center">
                <div className="flex items-center max-md:w-full max-md:justify-center">
                    <div className="aspect-square min-[1440px]:w-[90px] md:w-[6.25vw] w-[60px] leading-none flex items-center justify-center bg-white rounded-full font-ultra min-[1440px]:text-[70px] md:text-[4.861vw] text-[32px] [text-shadow:0px_5px_0px_#FDD300]">{number}</div>
                    <p className="min-[1440px]:text-[48px] md:text-[3.333vw] text-[28px] font-black tracking-widest md:ml-5 ml-4">{title}</p>
                </div>
                <p className="min-[1440px]:text-[28px] md:text-[1.944vw] text-[16px] font-bold md:ml-9 max-md:text-center max-md:mt-4 tracking-widest">{content}</p>
            </div>
            <div>
                {children}
            </div>
        </div>
    );
}