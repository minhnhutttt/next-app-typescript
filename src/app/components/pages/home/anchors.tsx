"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import { ReactNode } from "react";

type AnchorItemPropsType = {
    anchor: string
    number: string;
    title: string;
    children: ReactNode;
};
function AnchorItem({
    anchor,
    number,
    title,
    children
    }: AnchorItemPropsType) {
        const animateZoomRefs = useScrollAnimation("zoom");
    return (
        <div ref={animateZoomRefs} className="opacity-0 w-1/2 md:w-1/3 bg-[#FDD300] max-md:[&:nth-of-type(2)]:bg-[#FFE870] overflow-hidden max-md:[&:nth-of-type(3)]:bg-[#FFE870] max-md:[&:nth-of-type(6)]:bg-[#FFE870] md:even:bg-[#FFE870]">
            <a href={anchor} className="flex flex-col items-center justify-center md:pt-9 md:pb-6 pb-4 pt-6 md:px-4 px-2 duration-300 hover:scale-105">
                <p className="aspect-square min-[1440px]:w-[200px] md:w-[13.889vw] w-[70px] flex items-center justify-center bg-white rounded-full font-ultra [text-shadow:0px_7px_0px_#FDD300] min-[1440px]:text-[130px] md:text-[9.028vw] text-[36px]">
                    {number}
                </p>
                <p className="text-center min-[1440px]:text-[52px] md:text-[3.611vw] text-[20px] font-black tracking-widest my-2 md:my-3">{title}</p>
                <p className="text-center min-[1440px]:text-[24px] md:text-[1.667vw] text-[12px] font-bold">
                    {children}
                </p>
                <figure className="flex justify-center items-center mt-2 md:mt-3">
                    <svg className="min-[1440px]:w-[39px] md:w-[2.708vw] w-5" xmlns="http://www.w3.org/2000/svg" width="39" height="31" viewBox="0 0 39 31" fill="none">
                        <path d="M22.0062 29.1906C20.821 30.9921 18.179 30.9921 16.9938 29.1906L1.34092 5.39888C0.0285136 3.40406 1.45933 0.75 3.84716 0.75L35.1529 0.750003C37.5407 0.750003 38.9715 3.40407 37.6591 5.39888L22.0062 29.1906Z" fill="black"/>
                    </svg>
                </figure>
            </a>
        </div>
    );
}
export default function Anchors() {
    return (
        <section className="flex flex-wrap">
            <AnchorItem anchor="#error" number="1" title="ERROR">容量ストレス蓄積中<br className="max-md:hidden"/>容量の悩みは尽きない...</AnchorItem>
            <AnchorItem anchor="#features" number="2" title="５FEATURES">容量スッキリ開放感<br className="max-md:hidden"/>次世代ストレージって何？</AnchorItem>
            <AnchorItem anchor="#price" number="3" title="PRICE">買い切り型でムダゼロ化<br className="max-md:hidden"/>料金プランをチェック！...</AnchorItem>
            <AnchorItem anchor="#popular" number="4" title="POPULAR">人気のプラン大解剖<br className="max-md:hidden"/>コスパが決め手！100GBプラン</AnchorItem>
            <AnchorItem anchor="#voice" number="5" title="USER VOICE">出会いは必然デスティニー<br className="max-md:hidden"/>きっかけは断捨離!?納得の理由...</AnchorItem>
            <AnchorItem anchor="#support" number="6" title="LINE SUPPORT">ちょっと相談ヘルプミー<br className="max-md:hidden"/>気軽にチャット！LINEサポート...</AnchorItem>
        </section>
    );
  }
  