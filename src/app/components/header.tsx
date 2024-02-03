"use client"
import Link from "next/link";
import { useEffect, useState } from "react";

type NavLink = {
    id: number;
    link: string;
    text: string;
    target?: string,
  };
const links: NavLink[] = [
    {
        id: 1,
        link: "/",
        text: "SERVICE",
    },
    {
        id: 2,
        link: "/",
        text: "WORKFLOW",
    },
    {
        id: 3,
        link: "/",
        text: "ABOUT",
    },
    {
        id: 4,
        link: "/",
        text: "CONTACT",
    },
];
export default function Header() {
    const [open, setOpen] = useState<boolean>(false);
    useEffect(() => {
        const handleLinksClick = () => {
        setOpen(false);
        };

        const links = document.querySelectorAll("a");
        links.forEach((link) => {
        link.addEventListener("click", handleLinksClick);
        });

        return () => {
        links.forEach((link) => {
            link.removeEventListener("click", handleLinksClick);
        });
        };
    }, []);
    return (
      <header className="absolute top-0 inset-x-0 flex justify-between items-center px-10 md:px-16 h-[102px]">
        <Link href="/" className="block relative z-10">
            <img src="/images/logo.png" alt="fliQt" />
        </Link>
        <div
        className={`z-50 flex items-center gap-8 overflow-hidden duration-500 max-xl:pointer-events-none max-xl:fixed max-xl:inset-y-0 max-xl:right-0 max-xl:h-screen max-xl:flex-col max-xl:justify-center max-xl:bg-black/90 max-xl:opacity-0 xl:gap-2 xl:py-4 ease-in-out ${
          open
            ? "max-xl:pointer-events-auto max-xl:w-[280px] max-xl:opacity-100"
            : "max-xl:w-0"
        }`}
      >
        <nav>
          <ul className="flex gap-8 max-xl:flex-col">
            <li>
                <a href="/" className="block text-[18px] duration-300 hover:scale-125 px-2.5 text-gradient">Home</a>
            </li>
            {links.map(({ id, link, text, target }) => (
              <li key={id}>
                <a
                  href={link}
                  target={target}
                  className="block text-[18px] text-white duration-300 hover:scale-125 px-2.5"
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="absolute right-5 flex h-[28px] w-[35px] items-center justify-center md:right-10 xl:hidden">
        <button
          className={`group relative block h-[28px] w-8 cursor-pointer border-[none] p-0 max-xl:z-[99] md:w-10 max-xl:[&.active]:fixed ${
            open ? "active" : ""
          }`}
          onClick={() => setOpen(!open)}
        >
          <span className="absolute left-0 top-0 block h-1 w-full rounded-3xl bg-white transition-transform duration-500 ease-in-out group-[.active]:top-[33%] group-[.active]:rotate-45 group-[.active]:bg-white "></span>
          <span className="absolute left-0 top-2/4 block h-1 w-full -translate-y-2/4 rounded-3xl bg-white transition-transform duration-500 ease-in-out group-[.active]:bg-white group-[.active]:opacity-0 "></span>
          <span className="absolute bottom-0 left-0 block h-1 w-full rounded-3xl bg-white transition-transform duration-500 ease-in-out group-[.active]:bottom-2/4 group-[.active]:-rotate-45 group-[.active]:bg-white "></span>
        </button>
      </div>
      </header>
    );
  }
  