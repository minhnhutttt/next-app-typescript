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
    link: "/#introduction",
    text: "バイトクエストとは？",
  },
  {
    link: "/#products",
    text: "働き方",
  },
  {
    link: "/#sales",
    text: "アイテム",
  },
  {
    link: "/#flow",
    text: "メリット",
  },
  {
    link: "/#flow",
    text: "使い方",
  },
  {
    link: "/#flow",
    text: "よくある質問",
  },
];
const Header = () => {
  const [NavOpen, setNavOpen] = useState(false);
  const pathname = usePathname();

  const close = useCallback(() => {
    setNavOpen(false);
  }, []);
  return (
    <header className="flex items-center px-5 md:px-7 h-20 md:h-[100px] z-40 bg-white">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="block relative duration-150 hover:opacity-75">
            <img className="max-md:w-[170px]" src="/assets/images/logo.png" alt="" />
          </a>
        </div>
        <div
          className={`max-xl:fixed max-xl:left-0 max-xl:top-0 max-xl:h-screen max-xl:w-full max-xl:bg-white/90 z-[99] max-xl:overflow-y-scroll flex items-center justify-center max-xl:flex-col ${
            NavOpen ? "" : "max-xl:invisible max-xl:opacity-0"
          }`}
        >
          <ul className="flex xl:items-center max-xl:flex-col gap-6 xl:gap-10 px-4">
            {links.map(({ link, text, target }, index) => (
              <li key={index} className="flex items-center">
                <a
                  href={link}
                  className="text-[20px] md:text-[24px] xl:text-[16px] font-extrabold duration-150 hover:opacity-75 tracking-widest h-[60px] flex items-center justify-center text-black"
                  target={target}
                  onClick={close}
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <button
          className={`group relative z-[99] h-6 w-8 xl:hidden  ${
            NavOpen ? "active fixed" : ""
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
