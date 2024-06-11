"use client";

import { useCallback, useState } from "react";
import Button from "./button";
interface NavLink {
  link: string;
  text: string;
  target?: string;
}

const links: NavLink[] = [
  {
    link: "/",
    text: "メタでペット供養とは？",
  },
  {
    link: "/service",
    text: "産官学連携",
  },
  {
    link: "/workflow",
    text: "料金",
  },
  {
    link: "/about",
    text: "FAQ",
  },
];
const Header = () => {
  const [NavOpen, setNavOpen] = useState(false);

  const close = useCallback(() => {
    setNavOpen(false);
  }, []);
  return (
    <header className="flex items-center absolute top-0 inset-x-0 px-3 pt-8">
        <div className="w-full flex items-center justify-between h-[66px]">
      <div className="flex items-center justify-between pl-4 pr-4 md:pr-10">
        <a href="/" className="">
          <img
            className="max-md:w-[200px] max-lg:w-[260px] max-[1300px]:w-[20.923vw]"
            src="/assets/images/logo.png"
            alt=""
          />
        </a>
      </div>
      <div
        className={`max-lg:fixed px-5 max-lg:left-0 max-lg:top-0 max-lg:h-screen max-lg:w-full max-lg:bg-[#F77F7F]/[0.90] z-10 max-lg:overflow-y-scroll flex items-center justify-center max-lg:flex-col ${
          NavOpen ? "" : "max-lg:invisible max-lg:opacity-0"
        }`}
      >
        <ul className="flex lg:items-center gap-6 font-solaris max-lg:flex-col lg:gap-[60px] mr-[60px]">
          {links.map(({ link, text, target }, index) => (
            <li key={index}>
              <a
                href={link}
                className="inline-block md:text-[18px] text-white font-bold [text-shadow:1px_1px_0px_rgba(0,_0,_0,_0.50)]"
                target={target}
                onClick={close}
              >
                {text}
              </a>
            </li>
          ))}
        </ul>
        <a href="/" className="w-[230px] h-[66px] flex items-center justify-center rounded-[60px] border border-white [box-shadow:0px_0px_40px_0px_rgba(100,_0,_136,_0.20)] relative text-white md:text-[18px] font-bold text-[16px] bg-[linear-gradient(122deg,_#2C87E3_10.27%,_#7E22D7_100.14%)]">
            <span>お問い合わせ</span>
            
            </a>
            <div>
      <Button>お問い合わせ
      </Button>
    </div>
      </div>
      <button
        className={`group relative z-30 h-6 w-8 lg:hidden ${
          NavOpen ? "active" : ""
        }`}
        onClick={() => setNavOpen((prev) => !prev)}
      >
        <span className="absolute left-0 top-0 block h-0.5 w-full -translate-y-1/2 bg-black transition-transform duration-500 ease-in-out group-[.active]:top-1/2 group-[.active]:rotate-45"></span>
        <span className="absolute top-2.5 left-0 block h-0.5 w-full -translate-y-1/2 bg-black transition-transform duration-500 ease-in-out group-[.active]:opacity-0"></span>
        <span className="absolute bottom-0 left-0 block h-0.5 w-full -translate-y-1/2 bg-black transition-transform duration-500 ease-in-out group-[.active]:top-1/2 group-[.active]:-rotate-45"></span>
      </button>
      </div>
    </header>
  );
};

export default Header;
