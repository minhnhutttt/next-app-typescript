"use client"
import { useCallback, useState } from "react";

const Header = () => {
  const [NavOpen, setNavOpen] = useState(false);

  const close = useCallback(() => {
    setNavOpen(false);
  }, []);
  return (
    <header className="flex items-center fixed z-40 inset-x-0 top-0 md:h-[150px] h-[100px] bg-white/70 border-b border-[#111111]/[0.2] md:px-10 px-6 justify-between">
      <a href="/" className="max-md:w-[120px]"><img src="/assets/images/logo.svg" alt="" /></a>

      <div className="flex items-center md:gap-[64px] gap-4">
        <div className="w-[100px] md:w-[128px] h-[50px] bg-white border border-black rounded-[80px] flex justify-center items-center">
          <p className="flex items-center justify-center h-[25px] text-[#111111]/[0.4] md:text-[21px] text-[16px]">
            <button className="[&.active]:text-[#F34927] active">EN</button>
            <span className="h-[25px] mx-2 bg-[#111111] w-px"></span>
            <button className="[&.active]:text-[#F34927] ">JP</button>
          </p>
        </div>
        <button onClick={() => setNavOpen((prev) => !prev)} className={`group size-[60px] z-[90] md:size-[100px] flex items-center justify-center bg-white rounded-[6px] border border-[#F34927] ${
            NavOpen ? "active fixed md:right-10 right-6" : ""
          }`}>
          <div className="md:w-[58px] w-[36px] md:space-y-4 space-y-2 group-[.active]:!space-y-0">
            <span className="bg-[#F34927] h-[3px] rounded-full block origin-center duration-500 ease-in-out group-[.active]:translate-y-1/2 group-[.active]:rotate-45"></span>
            <span className="bg-[#F34927] h-[3px] rounded-full block origin-center duration-500 ease-in-out group-[.active]:translate-y-1/2 group-[.active]:-rotate-45"></span>
          </div>
        </button>
      </div>
      <div
          className={`fixed left-0 top-0 h-screen w-full bg-[#fff] z-50 overflow-y-auto flex items-center justify-center flex-col ${
            NavOpen ? "" : "invisible opacity-0"
          }`}
        >
          <a href="/" className="max-md:w-[120px]"><img src="/assets/images/logo.svg" alt="" /></a>
          <ul className="flex items-center max-md:flex-col mt-8 md:mt-10">
              <li className="relative">
                <a
                  href="/"
                  className="flex px-6 py-3 text-[24px] md:text-[36px] font-medium tracking-widest"
                  onClick={close}
                >
                    <span>HOME</span>
                </a>
              </li>
              <li className="relative">
                <a
                  href="/about"
                  className="flex px-6 py-3 text-[24px] md:text-[36px] font-medium tracking-widest"
                  onClick={close}
                >
                    <span>ABOUT</span>
                </a>
              </li>
              <li className="relative">
                <a
                  href="/members"
                  className="flex px-6 py-3 text-[24px] md:text-[36px] font-medium tracking-widest"
                  onClick={close}
                >
                    <span>MEMBERS</span>
                </a>
              </li>
          </ul>
        </div>
    </header>
  );
};

export default Header;
