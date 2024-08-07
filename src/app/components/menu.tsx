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
    <div className="mt-12 pt-5 w-[250px]">
        <div className="px-2">
            <div className="flex justify-center">
                <img src="/assets/images/photo.png" alt="" />
            </div>
            <div className="px-2 pt-5 pb-2.5">
                <h2>
                    <img className="dark:hidden" src="/assets/images/ardorex-title.png" alt="" />
                    <img className="hidden dark:block" src="/assets/images/ardorex-title-dark.png" alt="" />
                </h2>
            </div>
            <span className="block h-1 bg-[#464646] dark:bg-[#C6C6C6]"></span>
        </div>
        <div className="px-2">
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
