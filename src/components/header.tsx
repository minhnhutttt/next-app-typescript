"use client"
import { useCallback, useState } from "react";

const Header = () => {
  const [NavOpen, setNavOpen] = useState(false);

  const close = useCallback(() => {
    setNavOpen(false);
  }, []);
  return (
    <header className="absolute top-0 inset-x-0 flex justify-between items-center py-5 md:py-8 px-3 md:px-5 z-[99]">
      <a href="/" className="block">
        <img className="max-sm:w-[200px]" src="/assets/images/logo.svg" alt="" />
      </a>
      <div
        className={`fixed left-0 top-0 md:w-[640px] mx-auto max-xl:right-0 h-screen xl:w-[calc(50%-320px)] z-[99] overflow-auto flex items-center justify-center flex-col xl:opacity-100 p-5 xl:visible max-xl:bg-[linear-gradient(59deg,_rgba(255,_178,_184,_0.90)_8.73%,_rgba(255,_125,_184,_0.90)_19.75%,_rgba(250,_117,_188,_0.90)_22.9%,_rgba(237,_98,_199,_0.90)_27.62%,_rgba(216,_66,_217,_0.90)_33.13%,_rgba(187,_21,_242,_0.90)_38.63%,_rgba(173,_0,_255,_0.90)_41.78%,_rgba(167,_17,_254,_0.90)_48.86%,_rgba(164,_27,_254,_0.90)_55.16%,_rgba(154,_53,_252,_0.90)_57.52%,_rgba(140,_93,_251,_0.90)_62.24%,_rgba(129,_126,_249,_0.90)_66.96%,_rgba(120,_151,_248,_0.90)_71.69%,_rgba(113,_169,_247,_0.90)_76.41%,_rgba(110,_180,_247,_0.90)_81.92%,_rgba(109,_184,_247,_0.90)_87.42%)] duration-300 ${NavOpen ? "" : "invisible opacity-0 max-xl:-translate-y-full"}`}>
          <div className="w-full max-w-[390px] mx-auto rounded-[40px] bg-white overflow-hidden">
          <div className="h-20 bg-black flex items-center justify-center min-[1440px]:text-[24px] text-[18px] text-white font-bold">
            MENU
          </div>
          <ul className="min-[1440px]:text-[24px] text-[18px] text-[#1A1A1A] py-4 px-6 leading-[1.3] font-bold divide-y divide-gray-500">
            <li>
              <a href="/#about" onClick={close} className="flex p-3 sm:p-5 pr-0 items-center justify-between hover:opacity-75 duration-300">
                <span>FAVEコインとは？</span>
                <img src="/assets/images/ic-arrow.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="/#solutions" onClick={close} className="flex p-3 sm:p-5 pr-0 items-center justify-between hover:opacity-75 duration-300">
                <span>なぜ今、FAVEなのか</span>
                <img src="/assets/images/ic-arrow.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="/#token" onClick={close} className="flex p-3 sm:p-5 pr-0 items-center justify-between hover:opacity-75 duration-300">
                <span>トークノミクス</span>
                <img src="/assets/images/ic-arrow.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="/#security" onClick={close} className="flex p-3 sm:p-5 pr-0 items-center justify-between hover:opacity-75 duration-300">
                <span>セキュリティと信頼性</span>
                <img src="/assets/images/ic-arrow.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="/#roadmap" onClick={close} className="flex p-3 sm:p-5 pr-0 items-center justify-between hover:opacity-75 duration-300">
                <span>ロードマップ</span>
                <img src="/assets/images/ic-arrow.svg" alt="" />
              </a>
            </li>
          </ul>
        </div>
        <div className="xl:hidden flex items-center justify-center p-5 w-full">
        <a href="/" onClick={close}  className="flex items-center justify-center gap-2.5 min-[1440px]:text-[26px] text-[18px] font-bold text-white w-full max-w-[500px] h-20 bg-[#6DB8F7] rounded-[10px] [box-shadow:0_4px_4px_0_rgba(0,_0,_0,_0.25)] hover:opacity-75 duration-300">
          <img src="/assets/images/ic-file.svg" alt="" />
          <span>ホワイトペーパーを読む</span>
        </a>
      </div>
      </div>
      <button
        className={`group xl:hidden z-[99] md:h-10 h-8 md:w-[46px] w-[36px] ${NavOpen ? "active fixed max-sm:top-7 max-xl:top-8 max-sm:right-3 max-xl:right-[calc(50%-300px)]" : "relative"
          }`}
        onClick={() => setNavOpen((prev) => !prev)}
      >
        <span className="absolute left-0 top-0 block h-[3px] w-full -translate-y-1/2 bg-black transition-transform duration-500 ease-in-out group-[.active]:top-1/2 group-[.active]:rotate-45"></span>
        <span className="absolute top-3.5 md:top-[17px] left-0 block h-[3px] w-full -translate-y-1/2 bg-black transition-transform duration-500 ease-in-out group-[.active]:opacity-0"></span>
        <span className="absolute bottom-0 left-0 block h-[3px] w-full -translate-y-1/2 bg-black transition-transform duration-500 ease-in-out group-[.active]:top-1/2 group-[.active]:-rotate-45"></span>
      </button>
      <div className="fixed max-xl:hidden right-0 h-full top-0 bottom-0 w-[calc(50%-320px)] flex items-center justify-center p-5">
        <a href="/" className="flex items-center justify-center gap-2.5 min-[1440px]:text-[26px] text-[18px] font-bold text-white w-full max-w-[500px] h-[100px] bg-[#6DB8F7] rounded-[10px] [box-shadow:0_4px_4px_0_rgba(0,_0,_0,_0.25)] hover:opacity-75 duration-300">
          <img src="/assets/images/ic-file.svg" alt="" />
          <span>ホワイトペーパーを読む</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
