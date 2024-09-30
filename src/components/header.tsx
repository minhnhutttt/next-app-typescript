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
    link: "/dashboard",
    text: "DASHBOARD",
  },
  {
    link: "/whitepaper",
    text: "WHITEPAPER",
  },
];
const Header = () => {
  const [NavOpen, setNavOpen] = useState(false);
  const pathname = usePathname();

  const close = useCallback(() => {
    setNavOpen(false);
  }, []);
  return (
    <header className="absolute w-full flex items-center px-5 py-7 z-40">
      <div className="w-full flex items-center justify-between h-20 md:h-[83px] bg-white/20 rounded-[10px] max-md:pr-5">
        <div className="flex items-center">
          <a href="/" className="block relative duration-150 hover:opacity-75">
            <img className="max-md:w-[170px]" src="/assets/images/logo.svg" alt="" />
          </a>
        </div>
        <div
          className={`max-md:fixed max-md:left-0 max-md:top-0 max-md:h-screen max-md:w-full max-md:bg-[linear-gradient(140deg,_#040444_15.67%,_#0D1054_38.25%,_#101764_55.35%,_#131D74_68.35%,_#15206B_84.08%)] z-[99] max-md:overflow-y-scroll flex items-center justify-center max-md:flex-col ${
            NavOpen ? "" : "max-md:invisible max-md:opacity-0"
          }`}
        >
          <ul className="flex md:items-center max-md:flex-col gap-6 px-4">
            {links.map(({ link, text, target }, index) => (
              <li key={index} className="flex items-center">
                <a
                  href={link}
                  className="text-[20px] md:text-[18px] text-white duration-150 hover:opacity-75 tracking-widest h-[60px] flex items-center justify-center "
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
          className={`group relative z-[99] h-6 w-8 md:hidden  ${
            NavOpen ? "active fixed" : ""
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
