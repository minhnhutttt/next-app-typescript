"use client"
import Link from "next/link";
import Sidebar from "./sidebar";
import { ReactNode, useEffect } from "react";

type anchor = {
    link: string;
    text: string;
}

type ContainerPropType = {
    title: string;
    anchors?: anchor[];
    children: ReactNode;
  };
export default function Container({title, anchors, children}: ContainerPropType) {
    return (
        <div className="relativep pl-8 pr-6 md:pl-[40px] md:pr-[30px] pt-4 md:pt-6">
        <div className="flex items-start">
          <Sidebar />
          <div className="flex sticky top-10 justify-center w-[30px] mx-3 max-md:hidden z-10 h-[30px] overflow-hidden rounded-full">
          <div className="circle w-[30px] h-[30px] drop-shadow-2xl rounded-full"></div>
          </div>
          
          <div className="flex flex-1 relative">
            <div className="absolute h-full w-px bg-white/40 left-[-27px] max-md:hidden"></div>
            <div className="w-full">
              <div className="rounded-[23px] w-full md:min-h-[45px] min-h-[38px] flex items-center border border-[#B5B5B5]/[0.85] bg-[linear-gradient(90deg,_#0B0B0B_28.57%,_rgba(11,_11,_11,_0.46)_50%)] px-5 md:px-[38px] text-[15px] md:text-[23px] font-bold text-white/70">{title}</div>
              <div className="md:rounded-[20px] rounded-[16px] border border-[#C4C4C4]/[0.5] bg-[#101010]/[0.65] mt-3 md:mt-10 px-4 md:px-9 py-3 md:py-7 space-y-14 min-h-[1050px]">
                {children}
              </div>
            </div>
            <div className="absolute h-full w-px bg-white/40 right-[-27px] max-md:hidden"></div>
          </div>

          <div className="flex sticky top-10 justify-center w-[30px] mx-3 max-md:hidden z-10 h-[30px] overflow-hidden">
            <div className="circle w-[30px] h-[30px] drop-shadow-2xl rounded-full"></div>
          </div>
          
          <div className="w-[260px] max-xl:hidden sticky top-10">
            <a href="/" className="block duration-150 hover:opacity-75">
              <img src="/images/btn.png" alt="ARDOREX BLOG" />
            </a>
            <div className="md:mt-10 mt-7 space-y-7">
              <ul className="space-y-5">
                {anchors && anchors.map((item, index) => {
                    return <li key={index}><Link href={`/#${item.link}`} className="md:text-[20px] text-[16px] font-bold">{item.text}</Link></li>
                })}
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
  