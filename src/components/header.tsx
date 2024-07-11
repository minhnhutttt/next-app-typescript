"use client";

import { useCallback, useState } from "react";
import { usePathname } from "next/navigation";
interface NavLink {
  link: string;
  text: string;
  target?: string;
}

const links: NavLink[] = [
  {
    link: "/",
    text: "Top",
  },
  {
    link: "/concept",
    text: "Concept",
  },
  {
    link: "/sake",
    text: "日本の酒",
  },
  {
    link: "/message",
    text: "Message",
  },
  {
    link: "https://lin.ee/bDgs0V3",
    text: "お問い合わせ",
    target: '_blank'
  },
];
const Header = () => {
  const [NavOpen, setNavOpen] = useState(false);
  const pathname = usePathname();

  const close = useCallback(() => {
    setNavOpen(false);
  }, []);
  return (
    <>
    <header className="flex px-3 md:px-8 py-4 md:py-9 w-[80px] md:w-[215px] md:h-[678px] z-40 absolute left-0 top-0 bg-white">
      <div className="w-full">
        <div className="flex items-center justify-center w-full">
          <a href="/" className="block relative duration-150 hover:opacity-75">
            <img className="max-md:w-[60px]" src="/assets/images/logo.png" alt="" />
          </a>
        </div>
        <div
          className={`max-xl:fixed max-xl:left-0 max-xl:top-0 max-xl:h-screen max-xl:w-full max-xl:bg-white/90 z-[99] max-xl:overflow-y-scroll flex items-center justify-center max-xl:flex-col ${
            NavOpen ? "" : "max-xl:invisible max-xl:opacity-0"
          }`}
        >
          <ul className="flex flex-col md:pt-16 gap-5">
            {links.map(({ link, text, target }, index) => (
              <li key={index} className="flex items-center">
                <span className={`w-1.5 h-7 block ${
                    pathname === link ? "bg-[#C11A28]" : "bg-transparent"
                  }`}></span>
                <a
                  href={link}
                  className="flex-1 text-[20px] md:text-[24px] xl:text-[18px] font-medium duration-150 hover:opacity-75 pl-5 flex items-center text-black"
                  target={target}
                  onClick={close}
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
    
    <button
    className={`group right-4 md:right-8 top-4 md:top-8 z-[99] h-6 w-8 xl:hidden   ${
      NavOpen ? "active fixed" : "absolute"
    }`}
    onClick={() => setNavOpen((prev) => !prev)}
  >
    <span className="absolute left-0 top-0 block h-0.5 w-full -translate-y-1/2 bg-[#C11A28] transition-transform duration-500 ease-in-out group-[.active]:top-1/2 group-[.active]:rotate-45"></span>
    <span className="absolute top-2.5 left-0 block h-0.5 w-full -translate-y-1/2 bg-[#C11A28] transition-transform duration-500 ease-in-out group-[.active]:opacity-0"></span>
    <span className="absolute bottom-0 left-0 block h-0.5 w-full -translate-y-1/2 bg-[#C11A28] transition-transform duration-500 ease-in-out group-[.active]:top-1/2 group-[.active]:-rotate-45"></span>
  </button>
  </>
  );
};

export default Header;
