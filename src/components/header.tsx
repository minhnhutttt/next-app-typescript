"use client";
import { useCallback, useState } from "react";

const Header = () => {
  const [NavOpen, setNavOpen] = useState(false);

  const close = useCallback(() => {
    setNavOpen(false);
  }, []);
  return (
    <header className="flex justify-between items-center h-20 px-5 md:px-16 z-[99] bg-black">
      <a href="/" className="block">
        <img
          className="max-md:w-[180px]"
          src="/assets/images/logo.svg"
          alt=""
        />
      </a>
      <div className="mr-12">
        <a
          href="/"
          className="flex items-center justify-center relative w-[240px] h-[50px] before:bg-[#2DBF15] text-white text-[16px] gap-2 before:absolute before:-skew-x-[25deg] before:w-full before:h-full"
        >
          <img className="relative" src="/assets/images/ic-line.svg" alt="" />
          <span className="relative">お問い合わせ</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
