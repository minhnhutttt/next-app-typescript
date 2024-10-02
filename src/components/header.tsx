"use client";

import { useCallback, useState } from "react";
import { usePathname } from "next/navigation";

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
            <img className="max-md:w-[170px]" src="/assets/images/logo.svg" alt="" />
          </a>
        </div>
        <div
          className={`max-md:fixed max-md:left-0 max-md:top-0 max-md:h-screen max-md:w-full max-md:bg-[linear-gradient(140deg,_#2379E7_1.59%,_#2594F7_33.42%,_#28A7FE_57.52%,_#2AB1FF_75.85%,_#32BCFE_98.03%)] z-[99] max-md:overflow-y-scroll flex items-center justify-center max-md:flex-col ${
            NavOpen ? "" : "max-md:invisible max-md:opacity-0"
          }`}
        >
          <ul className="flex items-center gap-6">
            <li><a href="/"  className="flex items-center md:text-[20px] text-[16px] gap-[3px] tracking-widest"><span>Overview</span><span className=""><img src="/assets/images/ic-nav-01.svg" alt="" /></span></a></li>
            <li><a href="/"  className="flex items-center md:text-[20px] text-[16px] gap-[3px] tracking-widest"><span>Amazing️</span><span className=""><img src="/assets/images/ic-nav-02.svg" alt="" /></span></a></li>
            <li><a href="/"  className="flex items-center md:text-[20px] text-[16px] gap-[3px] tracking-widest"><span>Unlock</span><span className=""><img src="/assets/images/ic-nav-03.svg" alt="" /></span></a></li>
            <li><a href="/"  className="flex items-center md:text-[20px] text-[16px] gap-[3px] tracking-widest"><span>Learn…</span><span className=""><img src="/assets/images/ic-nav-04.svg" alt="" /></span></a></li>
          </ul>
        </div>
        <button
          className={`group relative z-[99] h-[15px] w-[45px] origin-center ${
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
