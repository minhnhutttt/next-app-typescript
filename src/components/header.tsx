"use client";

import { useCallback, useState } from "react";
import { usePathname } from "next/navigation";
interface NavLink {
  link: string;
  text: string;
  target?: string;
}

const links: NavLink[] = [
  {
    link: "/",
    text: "Home",
  },
  {
    link: "/",
    text: "Membership",
  },
  {
    link: "/",
    text: "What’s EXO",
  },
  {
    link: "/",
    text: "Vision",
  },
  {
    link: "/",
    text: "Challenges",
  },
  {
    link: "/",
    text: "Token",
  },
];
const Header = () => {
  const [NavOpen, setNavOpen] = useState(false);

  const close = useCallback(() => {
    setNavOpen(false);
  }, []);
  return (
    <header className="flex items-center px-2 md:px-5 lg:px-[100px] h-[72px] z-40 bg-white border-b border-[#0C468D]">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="block relative duration-150 hover:opacity-75">
            <img className="max-md:w-[134px]" src="/assets/images/logo.png" alt="" />
          </a>
        </div>
        <div
          className={`max-lg:fixed max-lg:left-0 max-lg:top-0 max-lg:h-screen max-lg:w-full max-lg:bg-white/90 z-[99] max-lg:overflow-y-scroll flex items-center justify-center max-lg:flex-col ${
            NavOpen ? "" : "max-lg:invisible max-lg:opacity-0"
          }`}
        >
          <ul className="flex lg:items-center max-lg:flex-col gap-6">
            {links.map(({ link, text, target }, index) => (
              <li key={index} className="flex items-center">
                <a
                  href={link}
                  className="text-[#0C408C] text-xl md:text-sm font-medium leading-tight"
                  target={target}
                  onClick={close}
                >
                  {text}
                </a>
              </li>
            ))}
            <li className="flex items-center">
                <a
                  href="/"
                  onClick={close}
                >
                  <img src="/assets/images/button-x.svg" alt="" />
                </a>
              </li>
          </ul>
        </div>
        <button
          className={`group relative z-[99] size-10 lg:hidden bg-white flex items-center justify-center ${
            NavOpen ? "active fixed" : ""
          }`}
          onClick={() => setNavOpen((prev) => !prev)}
        >
          <div className="relative w-[18px] h-[14px]">
          <span className="absolute left-0 top-0 block h-0.5 w-full -translate-y-1/2 bg-[#71717a] transition-transform duration-500 ease-in-out group-[.active]:top-1/2 group-[.active]:rotate-45"></span>
          <span className="absolute top-1.5 left-0 block h-0.5 w-full -translate-y-1/2 bg-[#71717a] transition-transform duration-500 ease-in-out group-[.active]:opacity-0"></span>
          <span className="absolute bottom-0 left-0 block h-0.5 w-full -translate-y-1/2 bg-[#71717a] transition-transform duration-500 ease-in-out group-[.active]:top-1/2 group-[.active]:-rotate-45"></span>
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;
