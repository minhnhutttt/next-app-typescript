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
    link: "/",
    text: "産官学連携",
  },
  {
    link: "/price",
    text: "料金",
  },
  {
    link: "#faq",
    text: "FAQ",
  },
];
const Header = () => {
  const [NavOpen, setNavOpen] = useState(false);

  const close = useCallback(() => {
    setNavOpen(false);
  }, []);
  return (
    <header className="flex items-center absolute top-0 inset-x-0 px-3 md:pt-8 pt-3 z-40">
      <div className="w-full flex items-center justify-between h-[66px]">
        <div className="flex items-center justify-between pl-4 pr-4 md:pr-10">
          <a href="/" className="block relative duration-150 hover:opacity-75">
            <img
              className="max-md:w-[200px] max-xl:w-[260px] max-[1300px]:w-[20.923vw]"
              src="/assets/images/logo.png"
              alt=""
            />
          </a>
        </div>
        <div
          className={`max-xl:fixed px-5 max-xl:left-0 max-xl:top-0 max-xl:h-screen max-xl:w-full max-xl:bg-[linear-gradient(122deg,_#8EC5FC_10.27%,_#E0C3FC_100.14%)] z-10 max-xl:overflow-y-scroll flex items-center justify-center max-xl:flex-col ${
            NavOpen ? "" : "max-xl:invisible max-xl:opacity-0"
          }`}
        >
          <ul className="flex xl:items-center gap-8 max-xl:flex-col xl:gap-[60px] md:mr-[60px] max-xl:mb-10">
            {links.map(({ link, text, target }, index) => (
              <li key={index}>
                <a
                  href={link}
                  className="inline-block text-[20px] md:text-[24px] xl:text-[18px] text-white font-bold [text-shadow:1px_1px_0px_rgba(0,_0,_0,_0.50)] duration-150 hover:opacity-75"
                  target={target}
                  onClick={close}
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
          <Button href="#" rect=" md:text-[18px] text-[16px] w-[230px] h-[66px]">
            お問い合わせ
          </Button>
        </div>
        <button
          className={`group relative z-30 h-6 w-8 xl:hidden mr-6 ${
            NavOpen ? "active" : ""
          }`}
          onClick={() => setNavOpen((prev) => !prev)}
        >
          <span className="absolute left-0 top-0 block h-0.5 w-full -translate-y-1/2 bg-white transition-transform duration-500 ease-in-out group-[.active]:top-1/2 group-[.active]:rotate-45"></span>
          <span className="absolute top-2.5 left-0 block h-0.5 w-full -translate-y-1/2 bg-white transition-transform duration-500 ease-in-out group-[.active]:opacity-0"></span>
          <span className="absolute bottom-0 left-0 block h-0.5 w-full -translate-y-1/2 bg-white transition-transform duration-500 ease-in-out group-[.active]:top-1/2 group-[.active]:-rotate-45"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
