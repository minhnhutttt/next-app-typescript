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
    <header className="absolute w-full flex items-center border-b border-[#777] bg-white/20 z-50">
      <div className="w-full flex items-center justify-between h-20 pr-5">
        <div className="flex items-center">
          <a href="/" className="block relative duration-150 hover:opacity-75">
            <img className="max-md:w-[170px]" src="/assets/images/logo.svg" alt="" />
          </a>
        </div>
        <div className="">
          <a href="/" className="md:text-[18px] text-[16px] font-semibold leading-none tracking-wide">WHITEPAPER</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
