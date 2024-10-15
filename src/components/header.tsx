"use client";

import { useCallback, useState } from "react";
import { usePathname } from "next/navigation";

interface NavLink {
  link: string;
  text: string;
  activeText: string;
  icon: string;
  target?: string;
}

const links: NavLink[] = [
  {
    link: "/about",
    text: "Overview",
    activeText: "About DIVER",
    icon: "/assets/images/ic-nav-01.svg",
  },
  {
    link: "/usecase",
    text: "Amazing",
    activeText: "Usecase",
    icon: "/assets/images/ic-nav-02.svg",
  },
  {
    link: "/gateway",
    text: "Unlock",
    activeText: "RPC Gateway",
    icon: "/assets/images/ic-nav-03.svg",
  },
  {
    link: "#",
    text: "Learn…",
    activeText: "Whitepaper",
    icon: "/assets/images/ic-nav-04.svg",
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
      <div className="w-full flex items-center justify-between h-20 md:h-[83px] pr-5">
        <div className="flex items-center">
          <a href="/" className="block relative duration-150 hover:opacity-75">
            <img
              className="max-md:w-[170px]"
              src="/assets/images/logo.svg"
              alt=""
            />
          </a>
        </div>
        <div
          className={`max-lg:fixed max-lg:left-0 max-lg:top-0 max-lg:h-screen max-lg:w-full max-lg:bg-[linear-gradient(140deg,_#2379E7_1.59%,_#2594F7_33.42%,_#28A7FE_57.52%,_#2AB1FF_75.85%,_#32BCFE_98.03%)] z-[99] max-lg:overflow-y-scroll flex items-center justify-center max-lg:flex-col ${
            NavOpen ? "" : "max-lg:invisible max-lg:opacity-0"
          }`}
        >
          <ul className="flex items-center max-md:flex-col gap-6">
            {links.map(({ link, text, icon, activeText, target }, index) => (
              <li key={index} className="relative md:w-[143px]">
                <a
                  href={link}
                  className={`group h-[30px] relative flex items-center justify-start flex-col md:text-[20px] text-[16px] font-medium tracking-widest overflow-hidden ${
                    pathname === link ? "active" : ""
                  }`}
                  target={target}
                  onClick={close}
                >
                  <span className="group-hover:opacity-0 group-hover:-translate-y-full group-[.active]:opacity-0 group-[.active]:-translate-y-full  flex items-center justify-center gap-[3px] duration-150 text-center">
                    <span>{text}</span>
                    <span className="">
                      <img src={icon} alt="" />
                    </span>
                  </span>
                  <span className="group-hover:opacity-100 group-hover:-translate-y-full group-[.active]:opacity-100 group-[.active]:-translate-y-full opacity-0 flex items-center justify-center duration-150 text-center font-bold">
                    <span>{activeText}</span>
                  </span>
                </a>
                <span className={`absolute top-full left-0 w-full bg-white h-[3px] rounded-full  ${
                    pathname === link ? "opacity-100" : "opacity-0"
                  }`}></span>
              </li>
            ))}
          </ul>
        </div>
        <div className="max-lg:hidden"></div>
        <button
          className={`group relative z-[99] h-[15px] w-[45px] origin-center lg:hidden${
            NavOpen ? "active fixed" : ""
          }`}
          onClick={() => setNavOpen((prev) => !prev)}
        >
          <span className="absolute inset-x-0 top-0 block h-0.5 w-full -translate-y-1/2 bg-white origin-center duration-500 ease-in-out group-[.active]:top-1/2 group-[.active]:rotate-45"></span>
          <span className="absolute top-full inset-x-0 block h-0.5 w-full -translate-y-1/2 bg-white origin-center duration-500 ease-in-out group-[.active]:top-1/2 group-[.active]:-rotate-45"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
