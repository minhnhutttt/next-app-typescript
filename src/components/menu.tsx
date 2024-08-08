"use client";

import { useState, useEffect, useCallback } from 'react';
import { usePathname } from "next/navigation";
import TitleAI from './titles/title-ai';
import TitleBlockChain from './titles/title-block-chain';
import TitleWebSite from './titles/title-web-site';
import TitleAD from './titles/title-ad';
import TitleMarketing from './titles/title-marketing';
import TitleFx from './titles/title-fx';

const Menu = () => {
    const [NavOpen, setNavOpen] = useState(false);
    const pathname = usePathname();

    const close = useCallback(() => {
        setNavOpen(false);
    }, []);
  return (
    <div className="md:mt-12 md:pt-5 md:w-[250px]">
        <div className="px-2">
            <div className="md:hidden">
                <div className="px-2 pt-5 pb-4">
                    <h2>
                        <img className="dark:hidden" src="/assets/images/logo-sp.png" alt="" />
                        <img className="hidden dark:block" src="/assets/images/logo-sp-dark.png" alt="" />
                    </h2>
                </div>
                <span className="block h-0.5 bg-[#464646] dark:bg-[#C6C6C6]"></span>
            </div>
            <div className="flex justify-center max-md:py-6">
                <img src="/assets/images/photo.png" alt="" />
            </div>
            <div className="max-md:hidden">
                <div className="px-2 pt-5 pb-2.5">
                    <h2>
                        <img className="dark:hidden" src="/assets/images/ardorex-title.png" alt="" />
                        <img className="hidden dark:block" src="/assets/images/ardorex-title-dark.png" alt="" />
                    </h2>
                </div>
                <span className="block h-1 bg-[#464646] dark:bg-[#C6C6C6]"></span>
            </div>
        </div>
        <button
          className={`group fixed right-0 top-[20%] py-3 pl-4 pr-1.5 border border-[#BABABA] border-r-0 rounded-[30px] rounded-r-none z-[99] md:hidden  ${
            NavOpen ? "active" : ""
          }`}
          onClick={() => setNavOpen((prev) => !prev)}
        >
          <img src="/assets/images/maru.png" alt="" />
        </button>
        <div className={`px-2 max-md:fixed max-md:right-0 max-md:top-1/2 max-md:-translate-y-1/2 max-md:h-screen max-md:max-h-[85%] max-md:max-w-[85%] max-md:w-full max-md:rounded-[25px] max-md:rounded-r-none z-[99] max-md:overflow-y-scroll max-md:bg-[#F2F0E6]/[0.98] max-md:border max-md:border-[#797979] ${NavOpen ? "" : "max-md:invisible max-md:opacity-0"}`}>
            <a href="/" className="flex items-center h-12 px-2 relative border-b border-black/30 duration-150 hover:opacity-75">
                <span className={`h-12 bg-[#FF5660] w-[5px] absolute top-0 -left-[13px] opacity-0 ${pathname === "/" && "!opacity-100"}`}></span>
                <TitleAI rect="h-[11.5px]" />
            </a>
            <a href="/" className="flex items-center h-12 px-2 relative border-b border-black/30 duration-150 hover:opacity-75">
                <span className={`h-12 bg-[#E445AE] w-[5px] absolute top-0 -left-[13px] opacity-0 ${pathname === "/" && "!opacity-100"}`}></span>
                <TitleBlockChain rect="h-[11.5px]" />
            </a>
            <a href="/" className="flex items-center h-12 px-2 relative border-b border-black/30 duration-150 hover:opacity-75">
                <span className={`h-12 bg-[#7940F3] w-[5px] absolute top-0 -left-[13px] opacity-0 ${pathname === "/" && "!opacity-100"}`}></span>
                <TitleWebSite rect="h-[11.5px]" />
            </a>
            <a href="/" className="flex items-center h-12 px-2 relative border-b border-black/30 duration-150 hover:opacity-75">
                <span className={`h-12 bg-[#153DCA] w-[5px] absolute top-0 -left-[13px] opacity-0 ${pathname === "/" && "!opacity-100"}`}></span>
                <TitleAD rect="h-[11.5px]" />
            </a>
            <a href="/" className="flex items-center h-12 px-2 relative border-b border-black/30 duration-150 hover:opacity-75">
                <span className={`h-12 bg-[#1A8CBD] w-[5px] absolute top-0 -left-[13px] opacity-0 ${pathname === "/" && "!opacity-100"}`}></span>
                <TitleMarketing rect="h-[11.5px]" />
            </a>
            <a href="/" className="flex items-center h-12 px-2 relative border-b border-black/30 duration-150 hover:opacity-75">
                <span className={`h-12 bg-[#1ABD48] w-[5px] absolute top-0 -left-[13px] opacity-0 ${pathname === "/" && "!opacity-100"}`}></span>
                <TitleFx rect="h-[11.5px]" />
            </a>
        </div>
    </div>
  );
};

export default Menu;
