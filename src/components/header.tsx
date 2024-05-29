"use client";

import { useCallback, useState } from "react";
import Button from "./button";

const Header = () => {
  const [NavOpen, setNavOpen] = useState(false);

  const close = useCallback(() => {
    setNavOpen(false);
  }, []);
  return (
    <header className="flex items-center justify-between md:h-[100px] h-[80px] absolute top-0 inset-x-0 max-lg:pr-5">
      <div className="md:w-1/2 flex items-center justify-between pl-4 pr-4 md:pr-10">
        <a href="/" className="">
          <img
            className="max-md:w-[200px] max-lg:w-[260px] max-[1300px]:w-[20.923vw]"
            src="/assets/images/logo.png"
            alt=""
          />
        </a>
        <div className="max-lg:hidden">
          <p className="text-right text-white font-bold xl:text-[16px] md:text-[1.231vw] text-[14px]">
            平日10:00〜19:00
          </p>
          <p className="flex items-center xl:text-[28px] md:text-[2.154vw] text-[20px] font-bold gap-2 leading-none">
            <img src="/assets/images/ic-tel.svg" alt="" />
            <span>03-1234-5678</span>
          </p>
        </div>
      </div>
      <div
        className={`max-lg:fixed lg:w-1/2 gap-5 px-5 max-lg:left-0 max-lg:top-0 max-lg:h-screen max-lg:w-full max-lg:bg-[#F77F7F]/[0.90] z-10 max-lg:overflow-y-scroll flex items-center justify-center max-lg:flex-col ${
          NavOpen ? "" : "max-lg:invisible max-lg:opacity-0"
        }`}
      >
        <Button href="/" text="資料請求" imgSrc="/assets/images/ic-document.svg" onClick={close} rect="bg-[#F25B54]" />
        <Button href="/" text="代理店募集" imgSrc="/assets/images/ic-building.svg" onClick={close} rect="bg-black" />
        <Button href="/" text="お問い合わせ" imgSrc="/assets/images/ic-line.svg" onClick={close} rect="bg-[#01B202]" />
        <div className="lg:hidden">
          <p className="text-right text-white font-bold md:text-[16px] text-[14px]">平日10:00〜19:00</p>
          <p className="flex items-center md:text-[28px] text-[20px] font-bold gap-2 leading-none">
            <img src="/assets/images/ic-tel.svg" alt="" />
            <span>03-1234-5678</span>
          </p>
        </div>
      </div>
      <button
        className={`group relative z-30 h-6 w-8 lg:hidden ${
          NavOpen ? "active" : ""
        }`}
        onClick={() => setNavOpen((prev) => !prev)}
      >
        <span className="absolute left-0 top-0 block h-0.5 w-full -translate-y-1/2 bg-black transition-transform duration-500 ease-in-out group-[.active]:top-1/2 group-[.active]:rotate-45"></span>
        <span className="absolute top-2.5 left-0 block h-0.5 w-full -translate-y-1/2 bg-black transition-transform duration-500 ease-in-out group-[.active]:opacity-0"></span>
        <span className="absolute bottom-0 left-0 block h-0.5 w-full -translate-y-1/2 bg-black transition-transform duration-500 ease-in-out group-[.active]:top-1/2 group-[.active]:-rotate-45"></span>
      </button>
    </header>
  );
};

export default Header;
