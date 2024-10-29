"use client"
import { useCallback, useState } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const [NavOpen, setNavOpen] = useState(false);

  const close = useCallback(() => {
    setNavOpen(false);
  }, []);
  return (
    <header className="flex justify-between items-center py-6 px-5 bg-black">
     <a href="/" className="block">
      <img className="max-md:w-[240px]" src="/assets/images/logo.svg" alt="" />
     </a>
     <div
          className={`max-lg:fixed max-lg:left-0 max-lg:top-0 max-lg:h-screen max-lg:w-full max-lg:bg-black/90 z-[99] max-lg:overflow-y-scroll flex items-center justify-center max-lg:flex-col ${
            NavOpen ? "" : "max-lg:invisible max-lg:opacity-0"
          }`}
        >
     <ul className="flex items-center max-md:flex-col gap-5">
      <li>
        <a href="/" onClick={close} className="flex justify-center items-center"><img src="/assets/images/btn-app.png" alt="" /></a>
      </li>
      <li>
        <a href="/" onClick={close} className="flex justify-center items-center"><img src="/assets/images/btn-google.png" alt="" /></a>
      </li>
     </ul>
     </div>
     <button
          className={`group relative z-[99] h-6 w-8 lg:hidden  ${
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
