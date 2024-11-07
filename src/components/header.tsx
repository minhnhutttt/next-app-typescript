"use client";
import { useCallback, useState } from "react";

interface NavLink {
  link: string;
  text: string;
  target?: string;
}

const links: NavLink[] = [
  {
    link: "/#project-vision",
    text: "Project Vision",
  },
  {
    link: "/#children-in-need",
    text: "Children in Need",
  },
  {
    link: "/#solution",
    text: "SANTA Solution",
  },
  {
    link: "/#tokenomics",
    text: "Tokenomics",
  },
  {
    link: "/#dao",
    text: "DAO",
  },
];

const Header = () => {
  const [NavOpen, setNavOpen] = useState(false);

  const close = useCallback(() => {
    setNavOpen(false);
  }, []);
  return (
    <header className="flex justify-between items-center py-4 md:py-6 px-5 xl:px-10 bg-[#B70000]">
      <a href="/" className="block">
        <img
          className="max-md:w-[180px]"
          src="/assets/images/logo.svg"
          alt=""
        />
      </a>
      <div
        className={`max-xl:fixed max-xl:left-0 max-xl:top-0 max-xl:h-screen max-xl:w-full max-xl:bg-[#B70000]/90 z-[99] max-xl:overflow-y-scroll flex items-center justify-center max-xl:flex-col ${
          NavOpen ? "" : "max-xl:invisible max-xl:opacity-0"
        }`}
      >
        <ul className="flex items-center max-xl:flex-col xl:gap-10 gap-5 text-[18px] text-white font-medium max-xl:mb-5 xl:mr-10">
          {links.map(({ link, text, target }, index) => (
            <li key={index} className="flex items-center">
              <a href={link} className="" target={target} onClick={close}>
                {text}
              </a>
            </li>
          ))}
        </ul>
        <a href="/" className="flex justify-center items-center w-[190px] h-11 rounded-[80px] bg-[#054100] text-[16px] font-bold text-white tracking-wider">
        WHITEPAPER
        </a>
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
