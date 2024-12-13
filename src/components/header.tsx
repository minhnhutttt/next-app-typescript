"use client"
import { useCallback, useState } from "react";

const Header = () => {
  const [NavOpen, setNavOpen] = useState(false);

  const close = useCallback(() => {
    setNavOpen(false);
  }, []);
  return (
    <header className="absolute top-0 inset-x-0 w-full flex items-center px-5 md:px-10 z-50">
      <div className="w-full flex items-center justify-between h-20 md:h-[120px] gap-5">
        <div className="flex items-center">
          <a href="/" className="block relative duration-150 hover:opacity-75">
            <img className="max-md:w-[200px]" src="/assets/images/logo.svg" alt="BGT Coin" />
          </a>
        </div>
        <div
        className={`fixed left-0 top-0 h-screen w-full bg-black/90 z-[99] flex items-center justify-center flex-col ${
          NavOpen ? "" : "invisible opacity-0"
        }`}
      >
        <ul className="flex flex-col text-[18px] gap-10 mr-10 mb-10 text-white md:text-[32px]">
          <li>
            <a href="/" onClick={close}>Home</a>
          </li>
        </ul>
      </div>
      <button
        className={`group absolute top-0 right-0 z-[99] size-20 md:size-[120px] flex items-center justify-center  ${
          NavOpen ? "active fixed" : ""
        }`}
        onClick={() => setNavOpen((prev) => !prev)}
      >
        <span className="relative block w-9 md:w-[68px] md:h-7 h-4 drop-shadow-[0_0_16px_rgba(0,0,0,1)]">
          <span className="absolute left-0 top-0 block h-0.5 md:h-1 w-full -translate-y-1/2 bg-white transition-transform duration-500 ease-in-out group-[.active]:top-1/2 group-[.active]:rotate-45"></span>
          <span className="absolute bottom-0 left-0 block h-0.5 md:h-1 w-full -translate-y-1/2 bg-white transition-transform duration-500 ease-in-out group-[.active]:top-1/2 group-[.active]:-rotate-45"></span>
        </span>
      </button>
      </div>
    </header>
  );
};

export default Header;
