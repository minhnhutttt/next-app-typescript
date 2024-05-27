"use client";

import { useCallback, useEffect, useState } from "react";

const Header = () => {
  const [NavOpen, setNavOpen] = useState(false)

  const close = useCallback(() => {
    setNavOpen(false)
  }, [])
  return (
    <header className="flex items-center justify-between h-[100px] absolute top-0 inset-x-0">
      <div className="w-1/2 flex items-center justify-between pl-4 pr-10">
        <a href="/" className="">
          <img src="/assets/images/logo.png" alt="" />
        </a>
        
        <div className="">
          <p className="text-right text-white font-bold md:text-[16px] text-[14px]">平日10:00〜19:00</p>
          <p className="flex items-center md:text-[28px] text-[20px] font-bold gap-2 leading-none">
            <img src="/assets/images/ic-tel.svg" alt="" />
            <span>03-1234-5678</span>
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center w-1/2 px-4 gap-5">
          <a href="/" className="flex items-center justify-center gap-2 max-[1300px]:w-[30%] w-[200px] h-[50px] bg-[#F25B54] rounded-[5px] border border-white md:text-[16px] text-[14px] font-bold text-white">
            <img src="/assets/images/ic-document.svg" alt="" />
            <span>資料請求</span>
          </a>
          <a href="/" className="flex items-center justify-center gap-2 max-[1300px]:w-[30%] w-[200px] h-[50px] bg-black rounded-[5px] border border-white md:text-[16px] text-[14px] font-bold text-white">
            <img src="/assets/images/ic-building.svg" alt="" />
            <span>代理店募集</span>
          </a>
          <a href="/" className="flex items-center justify-center gap-2 max-[1300px]:w-[30%] w-[200px] h-[50px] bg-[#01B202] rounded-[5px] border border-white md:text-[16px] text-[14px] font-bold text-white">
            <img src="/assets/images/ic-line.svg" alt="" />
            <span>お問い合わせ</span>
          </a>
      </div>
    </header>
  );
};

export default Header;
