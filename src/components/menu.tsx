"use client";

import { useCallback, useState } from "react";
const Menu = () => {
  const [NavOpen, setNavOpen] = useState(false);

  const close = useCallback(() => {
    setNavOpen(false);
  }, []);
  return (
    <>
      <div className="group ml-auto w-[50px] h-[52px] border-2 border-black flex flex-col items-center justify-center cursor-pointer sticky  z-40 bg-white right-5 mr-5 top-5" onClick={() => setNavOpen((prev) => !prev)}>
        <div className={`stick stick-1 ${NavOpen ? "open" : "close"}`}></div>
        <div className={`stick stick-2 ${NavOpen ? "open" : "close"}`}></div>
        <div className={`stick stick-3 ${NavOpen ? "open" : "close"}`}></div>
      </div>
      <div
          className={`z-30 flex justify-center px-5 h-screen sticky top-0 right-0 w-full ml-auto mt-[-54px] max-w-[460px] flex-col  bg-black/90 ${
            NavOpen ? "" : "invisible opacity-0"
          }`}
        >
          <div className="w-[260px] md:w-[326px] ml-[50px]">
            <ul className="flex gap-8 mb-10 flex-col">
            <li>
                <a href="/" className="block text-[20px] text-white border-b border-white py-2 px-4" onClick={close}>TOP</a>
              </li>
              <li>
                <a href="/liver" className="block text-[20px] text-white border-b border-white py-2 px-4" onClick={close}>所属ライバー</a>
              </li>
              <li>
                <a href="/company" className="block text-[20px] text-white border-b border-white py-2 px-4" onClick={close}>企業情報
                </a>
              </li>
              <li>
                <a href="/contact" className="block text-[20px] text-white border-b border-white py-2 px-4" onClick={close}>法人様はこちら
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="block text-[20px] text-white border-b border-white py-2 px-4" onClick={close}>プライバシーポリシー
                </a>
              </li>
            </ul>
            <div className="flex p-4 md:gap-[60px] gap-10">
            <a href="https://www.instagram.com/toplive_tiktok/" target="_blank" className="duration-150 hover:opacity-75"><img src="/assets/images/logo-instagram.png" alt="" /></a>
            <a href="https://lin.ee/RFM7pae" target="_blank" className="duration-150 hover:opacity-75"><img src="/assets/images/logo-line.png" alt="" /></a>
            </div>
          </div>
        </div>
    </>
  );
};

export default Menu;
