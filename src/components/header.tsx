"use client"
import { useCallback, useState } from "react";

interface NavLink {
  link: string;
  text: string;
}

const links: NavLink[] = [
  {
    link: "/",
    text: "Home",
  },
  {
    link: "/#features",
    text: "Features",
  },
  {
    link: "/how-to-use",
    text: "How to use",
  },
  {
    link: "/#faq",
    text: "FAQ",
  }
];

const Header = () => {
  const [NavOpen, setNavOpen] = useState(false);

  const close = useCallback(() => {
    setNavOpen(false);
  }, []);
  return (
    <header className="flex justify-between items-center h-20 px-5 md:px-10 z-[99]">
     <a href="/" className="block">
      <img className="max-md:w-[180px]" src="/assets/images/logo.svg" alt="" />
     </a>
     <div
          className={`max-lg:fixed max-lg:left-0 max-lg:top-0 max-lg:h-screen max-lg:w-full max-lg:bg-[#4FBCEC] z-[99] max-lg:overflow-y-scroll flex items-center justify-center max-lg:flex-col ${
            NavOpen ? "" : "max-lg:invisible max-lg:opacity-0"
          }`}
        >
          <ul className="flex items-center max-md:flex-col md:mr-6 max-md:mb-6">
            {links.map(({ link, text }, index) => (
              <li key={index} className="relative">
                <a
                  href={link}
                  className="flex px-6 py-3 text-[20px] md:text-[16px] font-medium tracking-widest"
                  onClick={close}
                >
                    <span>{text}</span>
                </a>
              </li>
            ))}
          </ul>
          <a href="https://teleport-exchange.io/" target="_blank" className="w-[240px] md:h-[55px] h-12 rounded-[10px] flex justify-center items-center font-extrabold text-[20px] text-white tracking-[0.2em] bg-[linear-gradient(90deg,_#19539D_0.02%,_#627EEA_99.97%)]">
            EXCHANGE
          </a>
        </div>
        <button
          className={`group relative z-[99] h-[15px] w-[45px] origin-center lg:hidden ${
            NavOpen ? "active fixed" : ""
          }`}
          onClick={() => setNavOpen((prev) => !prev)}
        >
          <span className="absolute inset-x-0 top-0 block h-0.5 w-full -translate-y-1/2 bg-[#18539E] origin-center duration-500 ease-in-out group-[.active]:top-1/2 group-[.active]:rotate-45"></span>
          <span className="absolute top-full inset-x-0 block h-0.5 w-full -translate-y-1/2 bg-[#18539E] origin-center duration-500 ease-in-out group-[.active]:top-1/2 group-[.active]:-rotate-45"></span>
        </button>
    </header>
  );
};

export default Header;
