"use client"
import { useCallback, useState } from "react";

const Header = () => {
  const [NavOpen, setNavOpen] = useState(false);

  const close = useCallback(() => {
    setNavOpen(false);
  }, []);
  return (
    <header className="flex justify-between items-center px-5 md:px-8 pt-4 md:pt-7">
      <a href="/" className="block">
        <img className="max-md:w-[143px]" src="/assets/images/logo.svg" alt="" />
      </a>
      <div
        className={`flex items-center justify-center min-[1366px]:gap-20 gap-8 md:gap-5 duration-300 max-xl:fixed max-xl:inset-0 max-sm:flex-col z-[99] bg-white/90 ${NavOpen ? "" : "max-xl:invisible max-xl:opacity-0"}`}>
        <ul className="font-bold flex items-center gap-8 text-[20px] max-xl:flex-col">
          <li>
            <a href="/#about" onClick={close} className="block hover:opacity-75 duration-300">
              <span>AIコンシェルジュ</span>
            </a>
          </li>
          <li>
            <a href="/#about" onClick={close} className="block hover:opacity-75 duration-300">
              <span>商品紹介</span>
            </a>
          </li>
          <li>
            <a href="/#about" onClick={close} className="block hover:opacity-75 duration-300">
              <span>FB HUBについて</span>
            </a>
          </li>
          <li>
            <a href="/#about" onClick={close} className="block hover:opacity-75 duration-300">
              <span>よくある質問</span>
            </a>
          </li>
          <li>
            <a href="/#about" onClick={close} className="block hover:opacity-75 duration-300">
              <span>お問い合わせ</span>
            </a>
          </li>
        </ul>
        <a href="/" className="flex items-center justify-center w-[180px] h-[62px] bg-[#3E7976] shadow-[0_4px_0_0_#2B4A49] rounded-full text-white md:text-[24px] font-bold text-[20px]">ログイン</a>
      </div>
      <button
        className={`group xl:hidden z-[99] md:h-7 h-5 md:w-[50px] w-10 ${NavOpen ? "active fixed right-5 md:right-8" : "relative"
          }`}
        onClick={() => setNavOpen((prev) => !prev)}
      >
        <span className="absolute left-0 top-0 block h-0.5 rounded-full w-full -translate-y-1/2 bg-[#3E7976] transition-transform duration-500 ease-in-out group-[.active]:top-1/2 group-[.active]:rotate-45"></span>
        <span className="absolute top-[9px] md:top-[13px] left-0 block h-0.5 rounded-full w-full -translate-y-1/2 bg-[#3E7976] transition-transform duration-500 ease-in-out group-[.active]:opacity-0"></span>
        <span className="absolute bottom-0 left-0 block h-0.5 rounded-full w-full -translate-y-1/2 bg-[#3E7976] transition-transform duration-500 ease-in-out group-[.active]:top-1/2 group-[.active]:-rotate-45"></span>
      </button>
    </header>
  );
};

export default Header;