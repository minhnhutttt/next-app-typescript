"use client";
import { useCallback, useState } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const [NavOpen, setNavOpen] = useState(false);
  const pathname = usePathname();

  const close = useCallback(() => {
    setNavOpen(false);
  }, []);
  return (
    <header className="flex justify-between items-center md:h-[110px] py-3 md:px-10 px-5 absolute inset-x-0">
      <a
        href="/"
        className="block"
      >
        <img src="/assets/images/logo.svg" alt="" />
      </a>
      <div
        className={`max-xl:fixed max-xl:left-0 max-xl:top-0 max-xl:h-screen max-xl:w-full max-xl:bg-black/90 z-[99] max-xl:overflow-y-scroll flex items-center justify-center max-xl:flex-col ${
          NavOpen ? "" : "max-xl:invisible max-xl:opacity-0"
        }`}
      >
        <ul className="flex items-center max-md:flex-col text-[18px] gap-10 xl:mr-10 max-xl:mb-10">
          <li>
            <a
              href="/"
              onClick={close}
              className=""
            >
              ISSUES
            </a>
          </li>
          <li>
            <a
              href="/"
              onClick={close}
              className=""
            >
              IPDC SOLUTION
            </a>
          </li>
          <li>
            <a
              href="/"
              onClick={close}
              className=""
            >
              TOKENOMICS
            </a>
          </li>
          <li>
            <a
              href="/"
              onClick={close}
              className=""
            >
              ROADMAP
            </a>
          </li>
        </ul>
        <a href="" className="flex items-center justify-center w-[145px] h-[47px] border border-white rounded-full text-[18px] u-text-gradient bg-[linear-gradient(90deg,_#4AC7FA_0%,_#E649F5_100%)]">WHITEPAPER</a>
      </div>
      <button
        className={`group relative z-[99] h-6 w-8 xl:hidden  ${
          NavOpen ? "active fixed" : ""
        }`}
        onClick={() => setNavOpen((prev) => !prev)}
      >
        <span className="absolute left-0 top-0 block h-0.5 w-full -translate-y-1/2 bg-white transition-transform duration-500 ease-in-out group-[.active]:top-1/2 group-[.active]:rotate-45"></span>
        <span className="absolute top-2.5 left-0 block h-0.5 w-full -translate-y-1/2 bg-white transition-transform duration-500 ease-in-out group-[.active]:opacity-0"></span>
        <span className="absolute bottom-0 left-0 block h-0.5 w-full -translate-y-1/2 bg-white transition-transform duration-500 ease-in-out group-[.active]:top-1/2 group-[.active]:-rotate-45"></span>
      </button>
    </header>
  );
};

export default Header;
