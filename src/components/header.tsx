"use client";

import { useCallback, useState } from "react";
const Header = () => {
  const [NavOpen, setNavOpen] = useState(false);

  const close = useCallback(() => {
    setNavOpen(false);
  }, []);
  return (
    <header className="absolute inset-x-0 top-0 z-[35] flex items-center pt-3 px-5 md:pt-7">
      <div className="flex h-[66px] w-full items-center justify-between">
        <div className="flex">
          <a href="/">
            <img src="/assets/images/logo.svg" alt="" />
          </a>
        </div>
        <div
          className={`z-50 flex justify-center px-5 h-screen absolute top-0 right-0 w-full max-w-[460px] flex-col overflow-y-scroll bg-black/90 ${
            NavOpen ? "" : "invisible opacity-0"
          }`}
        >
          <div className="w-[260px] md:w-[326px] ml-[50px]">
            <ul className="flex gap-8 mb-10 flex-col">
              <li>
                <a href="/company" className="block text-[20px] text-white border-b border-white py-2 px-4" onClick={close}>企業情報</a>
              </li>
              <li>
                <a href="/privacy-policy" className="block text-[20px] text-white border-b border-white py-2 px-4" onClick={close}>プライバシーポリシー</a>
              </li>
            </ul>
            <div className="flex p-4 md:gap-[60px] gap-10">
            <a href="https://www.instagram.com/toplive_tiktok/" target="_blank" className="duration-150 hover:opacity-75"><img src="/assets/images/logo-instagram.png" alt="" /></a>
            <a href="https://lin.ee/RFM7pae" target="_blank" className="duration-150 hover:opacity-75"><img src="/assets/images/logo-line.png" alt="" /></a>
            </div>
          </div>
        </div>
        <div className="group w-[50px] h-[52px] border-2 border-black flex flex-col items-center justify-center cursor-pointer relative z-50 bg-white"  onClick={() => setNavOpen((prev) => !prev)}>
          <div className={`stick stick-1 ${NavOpen ? "open" : "close"}`}></div>
          <div className={`stick stick-2 ${NavOpen ? "open" : "close"}`}></div>
          <div className={`stick stick-3 ${NavOpen ? "open" : "close"}`}></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
