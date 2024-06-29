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
    link: "/about",
    text: "About Us",
  },
  {
    link: "/potential",
    text: "RWA’s Potential",
  },
  {
    link: "/contact",
    text: "Contact Us",
  },
];
const Header = () => {
  const [NavOpen, setNavOpen] = useState(false);
  const pathname = usePathname()

  const close = useCallback(() => {
    setNavOpen(false);
  }, []);
  return (
    <header className="flex items-center px-5 md:px-10 h-[90px] z-40 bg-black">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="block relative duration-150 hover:opacity-75">
            <img className="" src="/assets/images/logo.png" alt="" />
          </a>
        </div>
        <div
          className={`max-xl:fixed max-xl:left-0 max-xl:top-0 max-xl:h-screen max-xl:w-full max-xl:bg-black/90 z-[99] max-xl:overflow-y-scroll flex items-center justify-center max-xl:flex-col ${
            NavOpen ? "" : "max-xl:invisible max-xl:opacity-0"
          }`}
        >
          <ul className="flex xl:items-center max-xl:flex-col px-3">
            {links.map(({ link, text, target }, index) => (
              <li key={index} className="flex items-center">
                <span className="w-px h-10 bg-white block rotate-[30deg]"></span>
                <a
                  href={link}
                  className={`text-[20px] md:text-[24px] xl:text-[18px]  font-medium duration-150 hover:opacity-75 px-12 h-[60px] flex items-center justify-center ${
                    pathname === link ? "text-[#D9B70D]" : "text-white"
                  }`}
                  target={target}
                  onClick={close}
                >
                  {text}
                </a>
              </li>
            ))}
            <span className="w-px h-10 bg-white block rotate-[30deg] max-xl:hidden"></span>
          </ul>
        </div>
        <button
          className={`group relative z-30 h-6 w-8 xl:hidden  ${
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
