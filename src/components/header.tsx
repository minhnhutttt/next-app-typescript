"use client"
import { useCallback, useState } from "react";

const Header = () => {
  const [NavOpen, setNavOpen] = useState(false);

  const close = useCallback(() => {
    setNavOpen(false);
  }, []);
  return (
    <header className="absolute top-0 inset-x-0 flex justify-between items-center py-6 px-3 md:px-10 z-[99]">
     <a href="/" className="block">
      <img className="max-md:w-[180px]" src="/assets/images/logo.svg" alt="" />
     </a>
     <div
          className={`fixed left-0 top-0 h-screen w-full bg-black/90 z-[99] overflow-auto flex items-center justify-center flex-col ${
            NavOpen ? "" : "invisible opacity-0"
          }`}
        >
     <ul className="flex items-center max-md:flex-col gap-5">
      <li>
        <a href="/" onClick={close} className="flex justify-center items-center">Home</a>
      </li>
     </ul>
     </div>
     <button
          className={`group  z-[99] md:h-10 h-8 md:w-[46px] w-[36px] ${
            NavOpen ? "active fixed top-5 right-3 md:right-10" : "relative"
          }`}
          onClick={() => setNavOpen((prev) => !prev)}
        >
          <span className="absolute left-0 top-0 block h-[3px] w-full -translate-y-1/2 bg-[#F20C3E] transition-transform duration-500 ease-in-out group-[.active]:top-1/2 group-[.active]:rotate-45"></span>
          <span className="absolute top-3.5 md:top-[17px] left-0 block h-[3px] w-full -translate-y-1/2 bg-[#F20C3E] transition-transform duration-500 ease-in-out group-[.active]:opacity-0"></span>
          <span className="absolute bottom-0 left-0 block h-[3px] w-full -translate-y-1/2 bg-[#F20C3E] transition-transform duration-500 ease-in-out group-[.active]:top-1/2 group-[.active]:-rotate-45"></span>
        </button>
    </header>
  );
};

export default Header;
