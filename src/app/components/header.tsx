"use client";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const isHomePage = pathname === "/";
  return (
    <header className="absolute top-0 left-0 right-0 z-10 px-5 md:px-10">
      <div className="mx-auto flex h-20 w-full items-center justify-between md:h-[120px]">
        <a href="/" className="duration-150 hover:opacity-75">
          <p
            className={`font-dela [font-size:_clamp(20px,6vw,32px)] md:text-[42px] ${isHomePage ? "text-white" : "text-black"}`}
          >
            次世代名刺
          </p>
        </a>
        <div className="flex items-center justify-end">
          <a
            href=""
            target="_blank"
            className="flex items-center justify-center border-[3px] border-black md:px-[27px] md:py-[17px] px-5 py-3 gap-2.5 tracking-widest leading-snug font-bold [font-size:_clamp(11px,3.2vw,14px)] md:text-[20px] bg-[#F4F844] text-black rounded-2xl md:rounded-[44px] duration-300 hover:opacity-75"
          >
            <img className="max-md:w-6" src="/images/ic-card.svg" alt="" />
            <span className="">無料で200枚つくる</span>
          </a>
        </div>
      </div>
    </header>
  );
}
