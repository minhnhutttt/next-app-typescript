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
    link: "/#delivery",
    text: "Delivery Man Mapとは?",
  },
  {
    link: "/#work-style",
    text: "働き方",
  },
  {
    link: "/#item",
    text: "アイテム",
  },
  {
    link: "/#merit",
    text: "メリット",
  },
  {
    link: "/#howto",
    text: "使い方",
  },
  {
    link: "/#faq",
    text: "FAQ",
  },
  {
    link: "/",
    text: "問い合わせ",
  },
];
const Header = () => {
  const [NavOpen, setNavOpen] = useState(false);
  const pathname = usePathname();

  const close = useCallback(() => {
    setNavOpen(false);
  }, []);
  return (
    <header>
        <div
          className={`fixed left-0 top-0 h-screen w-full bg-[#0E0023]/[0.9] z-[99] overflow-y-scroll flex items-center justify-center flex-col ${
            NavOpen ? "" : "invisible opacity-0"
          }`}
        >
          <ul className="flex items-center flex-col gap-10 px-4">
            {links.map(({ link, text, target }, index) => (
              <li key={index} className="flex items-center">
                <a
                  href={link}
                  className="text-[20px] xl:text-[24px] font-extrabold duration-150 hover:opacity-75 tracking-widest h-[40px] flex items-center justify-center  text-white"
                  target={target}
                  onClick={close}
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <button
          className={`group z-[99] h-6 w-8 md:right-16 right-4 top-4 absolute ${
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
