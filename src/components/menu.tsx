"use client";

import { useState, useEffect, useCallback, useRef } from 'react';
import { usePathname } from "next/navigation";
import TitleAI from './titles/title-ai';
import TitleBlockChain from './titles/title-block-chain';
import TitleWebSite from './titles/title-web-site';
import TitleAD from './titles/title-ad';
import TitleMarketing from './titles/title-marketing';
import TitleFx from './titles/title-fx';
import Link from 'next/link';
import Anime from './anime';
import gsap from "gsap";

const Menu = () => {
    const [NavOpen, setNavOpen] = useState(false);
    const pathname = usePathname();
    const close = useCallback(() => {
        setNavOpen(false);
        if (!NavOpen) {
            closeExpand();
        }
      }, []);

      const boxRef = useRef(null);
  
  const closeExpand = () => {
    const box = boxRef.current;
    gsap.to(box, { xPercent: 100, duration: 0.3 });
    setNavOpen(false)
  };

  const toggleExpand = () => {
    const box = boxRef.current;
        if (NavOpen) {
        gsap.to(box, { xPercent: 100, duration: 0.3 });
        setNavOpen(false)
    } else {
        gsap.to(box, { height: "auto", xPercent: 0, x: 0, duration: 0.3, delay: 0.3 });
        setNavOpen(true)
    }
  };

  return (
    <div className="md:mt-12 md:pt-5 w-full md:w-[250px]">
        <div className="px-2">
            <div className="md:hidden">
                <div className="px-2 pt-5 pb-4">
                    <a href='/'>
                        <img className="dark:hidden" src="/assets/images/logo-sp.png" alt="" />
                        <img className="hidden dark:block" src="/assets/images/logo-sp-dark.png" alt="" />
                    </a>
                </div>
                <span className="block h-0.5 bg-[#464646] dark:bg-[#C6C6C6]"></span>
            </div>
            <div className="flex justify-center max-md:py-6">
                <img src="/assets/images/photo.png" alt="" />
            </div>
            <div className="max-md:hidden">
                <div className="px-2 pt-5 pb-2.5">
                    <a href='/'>
                        <img className="dark:hidden" src="/assets/images/ardorex-title.png" alt="" />
                        <img className="hidden dark:block" src="/assets/images/ardorex-title-dark.png" alt="" />
                    </a>
                </div>
                <span className="block h-1 bg-[#464646] dark:bg-[#C6C6C6]"></span>
            </div>
        </div>
        
        <div onClick={closeExpand} className={`fixed inset-0 z-[99] ${NavOpen ? "" : "hidden"}`}></div>
        <div ref={boxRef} className={`md:px-2 max-md:fixed max-md:right-0 max-md:top-1/2 max-md:-translate-y-1/2 max-md:max-h-[90%] max-md:max-w-[80%] max-md:w-full max-md:rounded-[25px] max-md:rounded-r-none z-[99] max-md:bg-[#F2F0E6]/[0.98] dark:bg-black/[0.98] max-md:border max-md:border-[#797979] max-md:translate-x-full origin-right`}>
        <button
          className={`group absolute left-[-67px] bg-[#F2F0E6] top-[61px] py-3 pl-4 pr-1.5 border border-[#BABABA]  rounded-[30px] rounded-r-none z-[99] md:hidden`}
          onClick={toggleExpand}
        >
          <Anime />
        </button>
            <p className="md:hidden pt-6 pb-[18px] px-[18px] border-b-4 border-[#464646] dark:border-[#C6C6C6]">
                <img className="dark:hidden" src="/assets/images/ardorex-title.png" alt="" />
                <img className="hidden dark:block" src="/assets/images/ardorex-title-dark.png" alt="" />
            </p>
            <div className="max-md:pr-14">
            <Link onClick={close} href="/ai" className="flex items-center h-20 md:h-12 px-5 md:px-2 relative border-b border-black/30 dark:border-white/30 duration-150 hover:opacity-75">
                <span className={`h-full bg-[#FF5660] w-[5px] absolute top-0 left-0 md:-left-[13px] opacity-0 ${pathname === "/ai" && "!opacity-100"}`}></span>
                <TitleAI rect="md:h-[11.5px] h-[13.5px]" />
            </Link>
            <Link onClick={close} href="/blockchain" className="flex items-center h-20 md:h-12 px-5 md:px-2 relative border-b border-black/30 dark:border-white/30 duration-150 hover:opacity-75">
                <span className={`h-full bg-[#E445AE] w-[5px] absolute top-0 left-0 md:-left-[13px] opacity-0 ${pathname === "/blockchain" && "!opacity-100"}`}></span>
                <TitleBlockChain rect="md:h-[11.5px] h-[13.5px]" />
            </Link>
            <Link onClick={close} href="/website" className="flex items-center h-20 md:h-12 px-5 md:px-2 relative border-b border-black/30 dark:border-white/30 duration-150 hover:opacity-75">
                <span className={`h-full bg-[#7940F3] w-[5px] absolute top-0 left-0 md:-left-[13px] opacity-0 ${pathname === "/website" && "!opacity-100"}`}></span>
                <TitleWebSite rect="md:h-[11.5px] h-[13.5px]" />
            </Link>
            <Link onClick={close} href="/ad" className="flex items-center h-20 md:h-12 px-5 md:px-2 relative border-b border-black/30 dark:border-white/30 duration-150 hover:opacity-75">
                <span className={`h-full bg-[#153DCA] w-[5px] absolute top-0 left-0 md:-left-[13px] opacity-0 ${pathname === "/ad" && "!opacity-100"}`}></span>
                <TitleAD rect="md:h-[11.5px] h-[13.5px]" />
            </Link>
            <Link onClick={close} href="/marketing" className="flex items-center h-20 md:h-12 px-5 md:px-2 relative border-b border-black/30 dark:border-white/30 duration-150 hover:opacity-75">
                <span className={`h-full bg-[#1A8CBD] w-[5px] absolute top-0 left-0 md:-left-[13px] opacity-0 ${pathname === "/marketing" && "!opacity-100"}`}></span>
                <TitleMarketing rect="md:h-[11.5px] h-[13.5px]" />
            </Link>
            <Link onClick={close} href="/fx" className="flex items-center h-20 md:h-12 px-5 md:px-2 relative border-b border-black/30 dark:border-white/30 duration-150 hover:opacity-75">
                <span className={`h-full bg-[#1ABD48] w-[5px] absolute top-0 left-0 md:-left-[13px] opacity-0 ${pathname === "/fx" && "!opacity-100"}`}></span>
                <TitleFx rect="md:h-[11.5px] h-[13.5px]" />
            </Link>
            </div>
            <div className="absolute md:hidden right-5 bottom-8">
                <img className="dark:hidden" src="/assets/images/content-menu.png" alt="" />
                <img className="hidden dark:block" src="/assets/images/content-menu-dark.png" alt="" />
            </div>
            <div className="md:hidden top-0 right-0 bottom-0 absolute w-2.5 bg-[linear-gradient(180deg,_#F4963A_0%,_#C5329D_37%,_#AD22E9_80%)]"></div>
        </div>
    </div>
  );
};

export default Menu;
