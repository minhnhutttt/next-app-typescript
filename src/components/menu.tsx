"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import TitleAI from "./titles/title-ai";
import TitleBlockChain from "./titles/title-block-chain";
import TitleWebSite from "./titles/title-web-site";
import TitleAD from "./titles/title-ad";
import TitleMarketing from "./titles/title-marketing";
import TitleFx from "./titles/title-fx";
import Link from "next/link";
import Anime from "./anime";
import gsap from "gsap";
import type { dataArticle } from "./article";
import LanguageDropdown from "./languageDropdown";
import { useTheme } from "next-themes";

export const dataRank: dataArticle[] = [
  {
    date: "2024.4.18",
    title:
      "ビットコインに価値がないと言うのなら、人類は皆まともに歩けないと言っているようなものにすぎない",
    link: "/blockchain/id",
  },
  {
    date: "2024.4.18",
    title:
      "広告代理店の見極め方〜失敗の責任を負いたくなければ「大手」に群がれ！成功したければ規模に目を向けるな！〜",
    link: "/ad/id",
  },
  {
    date: "2024.4.18",
    title:
      "イーロン・マスクが中国を訪問しても、テスラにとっての根本的な課題は解決しない",
    link: "/fx/id",
  },
  {
    date: "2024.4.18",
    title:
      "イーロン・マスクが中国を訪問しても、テスラにとっての根本的な課題は解決しない",
    link: "/website/id",
  },
];

const Menu = () => {
  const [NavOpen, setNavOpen] = useState(false);
  const [tab, setTab] = useState(0);
  const pathname = usePathname();
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
    useEffect(() => {
      setMounted(true);
    }, []);
  const close = useCallback(() => {
    if (!NavOpen) {
      closeExpand();
    }
  }, []);

  const boxRef = useRef(null);

  const closeExpand = () => {
    const box = boxRef.current;
    gsap.to(box, { xPercent: 100, duration: 0.3 });
    setNavOpen(false);
  };

  const toggleExpand = () => {
    const box = boxRef.current;
    if (NavOpen) {
      gsap.to(box, { xPercent: 100, duration: 0.3 });
      setNavOpen(false);
    } else {
      gsap.to(box, {
        height: "auto",
        xPercent: 0,
        x: 0,
        duration: 0.3,
        delay: 0.3,
      });
      setNavOpen(true);
    }
  };
  if (!mounted) {
    return null;
  }

  return (
    <div className="md:mt-12 md:pt-5 w-full md:w-[250px] relative">
      <div className="fixed right-0 top-0 px-0 md:hidden z-[99] flex">
        <LanguageDropdown />

        <button
          onClick={() =>
            resolvedTheme === "dark" ? setTheme("light") : setTheme("dark")
          }
          className={`flex w-[80px]  items-center justify-center h-8 pr-2 pl-1 md:px-3 max-md:rounded-l-none  max-md:border-l-0 rounded-[20px] text-white/60 border border-[#CFCFCF] text-[14px] text-helvetica ${
            resolvedTheme === "dark" ? "bg-[#EF9B1D]" : "bg-[#2B3E81]"
          }`}
        >
          <p className="max-md:hidden">
            {resolvedTheme === "dark" ? "Sun mode" : "Night Shift"}
          </p>
          <span className="md:hidden">
            {resolvedTheme === "dark" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
              >
                <g clipPath="url(#clip0_840_8559)">
                  <path
                    d="M8 0L10.4725 4.93759L16 5.73L12.0005 9.5731L12.944 15L8 12.4376L3.05601 15L4.00052 9.5731L0 5.73L5.52748 4.93759L8 0Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_840_8559">
                    <rect width="16" height="15" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </span>
        </button>
      </div>
      <div className="px-2">
        <div className="md:hidden">
          <div className="px-2 pt-5 pb-4">
            <a href="/">
              <img
                className="dark:hidden"
                src="/assets/images/logo-sp.png"
                alt=""
              />
              <img
                className="hidden dark:block"
                src="/assets/images/logo-sp-dark.png"
                alt=""
              />
            </a>
          </div>
          <span className="block h-0.5 bg-[#464646] dark:bg-[#C6C6C6]"></span>
        </div>
        <div className="flex justify-center max-md:py-10"></div>
        <div className="max-md:hidden">
          <div className="px-2 pt-5 pb-2.5">
            <a href="/">
              <img
                className="dark:hidden"
                src="/assets/images/ardorex-title.png"
                alt=""
              />
              <img
                className="hidden dark:block"
                src="/assets/images/ardorex-title-dark.png"
                alt=""
              />
            </a>
          </div>
          <span className="block h-1 bg-[#464646] dark:bg-[#C6C6C6]"></span>
        </div>
      </div>

      <div
        onClick={closeExpand}
        className={`fixed inset-0 z-[99] ${NavOpen ? "" : "hidden"}`}
      ></div>
      <div
        ref={boxRef}
        className={`md:!hidden md:px-2 max-md:fixed max-md:right-0 max-md:top-1/2 max-md:-translate-y-1/2 max-md:max-h-[90%] h-full max-md:max-w-[80%] max-md:w-full max-md:rounded-[25px] max-md:rounded-r-none z-[99] max-md:bg-[#F2F0E6]/[0.98] dark:bg-black/[0.98] max-md:border max-md:border-[#797979] max-md:translate-x-full origin-right flex flex-col`}
      >
        <button
          className={`group absolute left-[-67px] bg-[#F2F0E6] top-[61px] py-3 pl-4 pr-1.5 border border-[#BABABA]  rounded-[30px] rounded-r-none z-[99] md:hidden`}
          onClick={toggleExpand}
        >
          <Anime />
        </button>
        <div className="flex items-center gap-2 pr-3">
          <button
            onClick={() => setTab(0)}
            className={`md:hidden pt-6 pb-[18px] px-[5px] border-b-4  flex-1 text-[18px] text-center font-bold italic text-[#464646] dark:text-[#C6C6C6] ${
              tab === 0
                ? "border-[#464646] dark:border-[#C6C6C6]"
                : "border-transparent"
            }`}
          >
            RANKING
          </button>
          <button
            onClick={() => setTab(1)}
            className={`md:hidden pt-6 pb-[18px] px-[5px] border-b-4  flex-1 text-[18px] text-center font-bold italic text-[#464646] dark:text-[#C6C6C6] ${
              tab !== 0
                ? "border-[#464646] dark:border-[#C6C6C6]"
                : "border-transparent"
            }`}
          >
            CATEGORY
          </button>
        </div>
        <div className="max-md:pr-14 overflow-auto">
          {tab === 0 ? (
            <div className="">
              {dataRank.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col  border-b border-black/30 dark:border-white/30 gap-2 px-5 md:px-2 py-4"
                >
                  <Link
                    onClick={close}
                    href={item.link}
                    className="flex items-center  relative  duration-150 hover:opacity-75"
                  >
                    <p className="text-[13px] font-hiragino dark:text-white leading-snug">
                      {item.title}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="">
              <Link
                onClick={close}
                href="/ai"
                className="flex items-center h-20 md:h-12 px-5 md:px-2 relative border-b border-black/30 dark:border-white/30 duration-150 hover:opacity-75"
              >
                <span
                  className={`h-full bg-[#FF5660] w-[5px] absolute top-0 left-0 md:-left-[13px] opacity-0 ${
                    pathname === "/ai" && "!opacity-100"
                  }`}
                ></span>
                <TitleAI rect="md:h-[11.5px] h-[13.5px]" />
              </Link>
              <Link
                onClick={close}
                href="/blockchain"
                className="flex items-center h-20 md:h-12 px-5 md:px-2 relative border-b border-black/30 dark:border-white/30 duration-150 hover:opacity-75"
              >
                <span
                  className={`h-full bg-[#E445AE] w-[5px] absolute top-0 left-0 md:-left-[13px] opacity-0 ${
                    pathname === "/blockchain" && "!opacity-100"
                  }`}
                ></span>
                <TitleBlockChain rect="md:h-[11.5px] h-[13.5px]" />
              </Link>
              <Link
                onClick={close}
                href="/website"
                className="flex items-center h-20 md:h-12 px-5 md:px-2 relative border-b border-black/30 dark:border-white/30 duration-150 hover:opacity-75"
              >
                <span
                  className={`h-full bg-[#7940F3] w-[5px] absolute top-0 left-0 md:-left-[13px] opacity-0 ${
                    pathname === "/website" && "!opacity-100"
                  }`}
                ></span>
                <TitleWebSite rect="md:h-[11.5px] h-[13.5px]" />
              </Link>
              <Link
                onClick={close}
                href="/ad"
                className="flex items-center h-20 md:h-12 px-5 md:px-2 relative border-b border-black/30 dark:border-white/30 duration-150 hover:opacity-75"
              >
                <span
                  className={`h-full bg-[#153DCA] w-[5px] absolute top-0 left-0 md:-left-[13px] opacity-0 ${
                    pathname === "/ad" && "!opacity-100"
                  }`}
                ></span>
                <TitleAD rect="md:h-[11.5px] h-[13.5px]" />
              </Link>
              <Link
                onClick={close}
                href="/marketing"
                className="flex items-center h-20 md:h-12 px-5 md:px-2 relative border-b border-black/30 dark:border-white/30 duration-150 hover:opacity-75"
              >
                <span
                  className={`h-full bg-[#1A8CBD] w-[5px] absolute top-0 left-0 md:-left-[13px] opacity-0 ${
                    pathname === "/marketing" && "!opacity-100"
                  }`}
                ></span>
                <TitleMarketing rect="md:h-[11.5px] h-[13.5px]" />
              </Link>
              <Link
                onClick={close}
                href="/fx"
                className="flex items-center h-20 md:h-12 px-5 md:px-2 relative border-b border-black/30 dark:border-white/30 duration-150 hover:opacity-75"
              >
                <span
                  className={`h-full bg-[#1ABD48] w-[5px] absolute top-0 left-0 md:-left-[13px] opacity-0 ${
                    pathname === "/fx" && "!opacity-100"
                  }`}
                ></span>
                <TitleFx rect="md:h-[11.5px] h-[13.5px]" />
              </Link>
            </div>
          )}
        </div>

        <div className="absolute md:hidden right-4 bottom-8">
          <p className=" border border-[#C6C6C6] flex-1 text-[24px] font-bold bg-[#F8D0B2] rounded-full py-4 text-black [writing-mode:sideways-lr] [text-orientation:mixed]">
            CONTACT
          </p>
        </div>
        <div className="md:hidden top-0 right-0 bottom-0 absolute w-2.5 bg-[linear-gradient(180deg,_#F4963A_0%,_#C5329D_37%,_#AD22E9_80%)]"></div>
      </div>
      <div
        className={`max-md:!hidden md:px-2 max-md:fixed max-md:right-0 max-md:top-1/2 max-md:-translate-y-1/2 max-md:max-h-[90%] max-md:max-w-[80%] max-md:w-full max-md:rounded-[25px] max-md:rounded-r-none z-[99] max-md:bg-[#F2F0E6]/[0.98] dark:bg-black/[0.98] max-md:border max-md:border-[#797979] max-md:translate-x-full origin-right`}
      >
        <p className="md:hidden pt-6 pb-[18px] px-[18px] border-b-4 border-[#464646] dark:border-[#C6C6C6]">
          <img
            className="dark:hidden"
            src="/assets/images/ardorex-title.png"
            alt=""
          />
          <img
            className="hidden dark:block"
            src="/assets/images/ardorex-title-dark.png"
            alt=""
          />
        </p>
        <div className="max-md:pr-14">
          <Link
            href="/ai"
            className="flex items-center h-20 md:h-12 px-5 md:px-2 relative border-b border-black/30 dark:border-white/30 duration-150 hover:opacity-75"
          >
            <span
              className={`h-full bg-[#FF5660] w-[5px] absolute top-0 left-0 md:-left-[13px] opacity-0 ${
                pathname === "/ai" && "!opacity-100"
              }`}
            ></span>
            <TitleAI rect="md:h-[11.5px] h-[13.5px]" />
          </Link>
          <Link
            href="/blockchain"
            className="flex items-center h-20 md:h-12 px-5 md:px-2 relative border-b border-black/30 dark:border-white/30 duration-150 hover:opacity-75"
          >
            <span
              className={`h-full bg-[#E445AE] w-[5px] absolute top-0 left-0 md:-left-[13px] opacity-0 ${
                pathname === "/blockchain" && "!opacity-100"
              }`}
            ></span>
            <TitleBlockChain rect="md:h-[11.5px] h-[13.5px]" />
          </Link>
          <Link
            href="/website"
            className="flex items-center h-20 md:h-12 px-5 md:px-2 relative border-b border-black/30 dark:border-white/30 duration-150 hover:opacity-75"
          >
            <span
              className={`h-full bg-[#7940F3] w-[5px] absolute top-0 left-0 md:-left-[13px] opacity-0 ${
                pathname === "/website" && "!opacity-100"
              }`}
            ></span>
            <TitleWebSite rect="md:h-[11.5px] h-[13.5px]" />
          </Link>
          <Link
            href="/ad"
            className="flex items-center h-20 md:h-12 px-5 md:px-2 relative border-b border-black/30 dark:border-white/30 duration-150 hover:opacity-75"
          >
            <span
              className={`h-full bg-[#153DCA] w-[5px] absolute top-0 left-0 md:-left-[13px] opacity-0 ${
                pathname === "/ad" && "!opacity-100"
              }`}
            ></span>
            <TitleAD rect="md:h-[11.5px] h-[13.5px]" />
          </Link>
          <Link
            href="/marketing"
            className="flex items-center h-20 md:h-12 px-5 md:px-2 relative border-b border-black/30 dark:border-white/30 duration-150 hover:opacity-75"
          >
            <span
              className={`h-full bg-[#1A8CBD] w-[5px] absolute top-0 left-0 md:-left-[13px] opacity-0 ${
                pathname === "/marketing" && "!opacity-100"
              }`}
            ></span>
            <TitleMarketing rect="md:h-[11.5px] h-[13.5px]" />
          </Link>
          <Link
            href="/fx"
            className="flex items-center h-20 md:h-12 px-5 md:px-2 relative border-b border-black/30 dark:border-white/30 duration-150 hover:opacity-75"
          >
            <span
              className={`h-full bg-[#1ABD48] w-[5px] absolute top-0 left-0 md:-left-[13px] opacity-0 ${
                pathname === "/fx" && "!opacity-100"
              }`}
            ></span>
            <TitleFx rect="md:h-[11.5px] h-[13.5px]" />
          </Link>
        </div>
        <div className="absolute md:hidden right-5 bottom-8">
          <img
            className="dark:hidden"
            src="/assets/images/content-menu.png"
            alt=""
          />
          <img
            className="hidden dark:block"
            src="/assets/images/content-menu-dark.png"
            alt=""
          />
        </div>
        <div className="md:hidden top-0 right-0 bottom-0 absolute w-2.5 bg-[linear-gradient(180deg,_#F4963A_0%,_#C5329D_37%,_#AD22E9_80%)]"></div>
      </div>
    </div>
  );
};

export default Menu;
