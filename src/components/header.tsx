"use client"
import { useCallback, useState } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const [NavOpen, setNavOpen] = useState(false);
  const pathname = usePathname();

  const close = useCallback(() => {
    setNavOpen(false);
  }, []);
  return (
    <header className="flex justify-between items-center md:py-8 py-3 md:px-10 px-3 bg-[#73E3DC]">
     <a href="/" className="block md:text-[24px] text-[18px] font-extrabold tracking-widest">
      福利厚生クエスト
     </a>
     <div
          className={`max-xl:fixed max-xl:left-0 max-xl:top-0 max-xl:h-screen max-xl:w-full max-xl:bg-white/90 z-[99] max-xl:overflow-y-scroll flex items-center justify-center max-xl:flex-col ${
            NavOpen ? "" : "max-xl:invisible max-xl:opacity-0"
          }`}
        >
     <ul className="flex items-center">
      <li className="mr-[40px]">
        <a href="/" onClick={close} className="md:text-[18px] text-[16px] flex justify-center items-center gap-1 font-shipporiAntique">よくある質問</a>
      </li>
      <li className="">
        <a href="https://lin.ee/9TgYyex" target="_blank" onClick={close} className="md:text-[18px] text-[16px] flex justify-center items-center gap-1 font-shipporiAntique"><span><img src="/assets/images/ic-line.png" alt="" /></span>お問い合わせ</a>
      </li>
     </ul>
     </div>
     <button
          className={`group relative z-[99] h-6 w-8 xl:hidden  ${
            NavOpen ? "active fixed" : ""
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
