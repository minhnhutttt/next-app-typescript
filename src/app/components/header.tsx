"use client";
import { useEffect, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <header className="absolute top-0 left-0 right-0 z-10 px-5 md:px-[60px]">
      <div className="mx-auto max-md:py-6 w-full flex md:items-center justify-between md:justify-start md:h-[106px] md:gap-10 gap-5">
        <a
          href="/"
          className="duration-150 hover:opacity-75 max-md:flex-[0_0_130px]"
        >
          <img
            className="md:w-[164px] w-[140px]"
            src="/images/logo.png"
            alt="RWA Tag"
          />
        </a>
        <div className="flex h-[28px] w-[50px] items-center justify-center md:w-[70px] md:hidden">
          <button
            className={`group relative block h-[22px] w-8 cursor-pointer border-[none] p-0 max-md:z-[99] md:w-10 max-md:[&.active]:fixed ${
              open ? "active" : ""
            }`}
            onClick={() => setOpen(!open)}
          >
            <span className="absolute left-0 top-0 block h-0.5 w-full bg-black transition-transform duration-[0.3s] ease-[ease] group-[.active]:top-[42%] group-[.active]:rotate-45"></span>
            <span className="absolute left-0 top-2/4 block h-0.5 w-full -translate-y-2/4 bg-black transition-transform duration-[0.3s] ease-[ease] group-[.active]:opacity-0"></span>
            <span className="absolute bottom-0 left-0 block h-0.5 w-full bg-black transition-transform duration-[0.3s] ease-[ease] group-[.active]:bottom-2/4 group-[.active]:-rotate-45"></span>
          </button>
        </div>
        <div
            className={`z-[98] flex items-center justify-center gap-6 duration-300 max-xl:pointer-events-none max-xl:fixed max-xl:inset-0 max-xl:flex-col max-xl:bg-[#E0F3FF]/[0.9] max-xl:opacity-0 md:gap-8 xl:gap-9 ${
              open ? "max-md:pointer-events-auto max-md:opacity-100" : ""
            }`}
          >
        <div className="flex items-center justify-center md:justify-end gap-6 max-md:px-6 md:gap-5 max-md:flex-wrap">
          <a
            href="https://apps.apple.com/jp/app/diver-tag/id6449664504"
            target="_blank"
            rel="noopener noreferrer"
            className="duration-150 hover:opacity-75"
          >
            <img
              className="max-md:w-[170px]"
              src="/images/btn-appstore.png"
              alt="App Store"
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.world.scan.project.tag&hl=ja&gl=US"
            target="_blank"
            rel="noopener noreferrer"
            className="duration-150 hover:opacity-75"
          >
            <img
              className="max-md:w-[170px]"
              src="/images/btn-google-play.png"
              alt="Google Play"
            />
          </a>
        </div>
        </div>
      </div>
    </header>
  );
}
