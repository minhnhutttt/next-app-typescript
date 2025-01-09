"use client"
import { useCallback, useState } from "react";

const Header = () => {
  const [NavOpen, setNavOpen] = useState(false);

  const close = useCallback(() => {
    setNavOpen(false);
  }, []);
  return (
    <header className="absolute top-0 inset-x-0 flex justify-between items-center h-16 md:h-20 px-3 md:px-10 z-[99] bg-white/80">
     <a href="/" className="block hover:opacity-75 duration-150">
      <img className="max-md:w-[130px]" src="/assets/images/logo.svg" alt="" />
     </a>
     <div
          className={`fixed left-0 top-0 h-screen w-full bg-white/90 z-[99] overflow-auto flex items-center justify-center flex-col ${
            NavOpen ? "" : "invisible opacity-0"
          }`}
        >
          <ul>
            <li>
              <a href="/" onClick={close}>Home</a>
            </li>
          </ul>
     </div>
     <button
          className={`group z-[99] h-4 md:w-[46px] w-[36px] ${
            NavOpen ? "active fixed top-5 md:top-7 right-3 md:right-10" : "relative"
          }`}
          onClick={() => setNavOpen((prev) => !prev)}
        >
          <span className="absolute left-0 top-0 block h-[3px] w-full -translate-y-1/2 bg-[#1B1B2E] transition-transform duration-500 ease-in-out group-[.active]:top-1/2 group-[.active]:rotate-45"></span>
          <span className="absolute bottom-0 left-0 block h-[3px] w-full -translate-y-1/2 bg-[#1B1B2E] transition-transform duration-500 ease-in-out group-[.active]:top-1/2 group-[.active]:-rotate-45"></span>
        </button>
    </header>
  );
};

export default Header;
