"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

type NavLink = {
  id: number;
  link: string;
  text: string;
};

const links: NavLink[] = [
  {
    id: 1,
    link: "#introduction",
    text: "メンエスバズーカとは？",
  },
  {
    id: 2,
    link: "#price",
    text: "料金",
  },
  {
    id: 3,
    link: "#faq",
    text: "よくある質問",
  },
  {
    id: 4,
    link: "#contact",
    text: "お問い合わせ",
  },
  {
    id: 5,
    link: "#application",
    text: "お申し込み",
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);
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
    <div className="absolute inset-x-0 top-[20px] md:top-[48px] z-50 flex h-[62px] md:h-[110px] items-center justify-between px-6 md:px-[50px]">
      <Link href="/" className="block duration-150 hover:opacity-75">
        <img
          className="max-md:max-w-[180px]"
          src="/images/logo.png"
          alt="Men's Esthe BAZOOKA"
        />
      </Link>
      {open && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}
      <div
        className={`z-50 flex items-center gap-8 overflow-hidden duration-300 max-xl:pointer-events-none max-xl:fixed max-xl:inset-y-0 max-xl:right-0 max-xl:h-screen max-xl:flex-col max-xl:justify-center max-xl:bg-[#112E77]/[0.9] max-xl:opacity-0 xl:gap-2 xl:py-4 ${
          open
            ? "max-xl:pointer-events-auto max-xl:w-[280px] max-xl:opacity-100"
            : "max-xl:w-0"
        }`}
      >
        <nav>
          <ul className="flex gap-8 max-xl:flex-col xl:gap-14">
            {links.map(({ id, link, text }) => (
              <li key={id}>
                <Link
                  href={link}
                  className="py-3 text-[18px] font-bold duration-150 hover:opacity-75 max-xl:text-white xl:text-[22px]"
                >
                  {text}
                </Link>
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
          <span className="absolute left-0 top-0 block h-1 w-full rounded-3xl bg-black transition-transform duration-[0.3s] ease-[ease] group-[.active]:top-[33%] group-[.active]:rotate-45 group-[.active]:bg-white"></span>
          <span className="absolute left-0 top-2/4 block h-1 w-full -translate-y-2/4 rounded-3xl bg-black transition-transform duration-[0.3s] ease-[ease] group-[.active]:bg-white group-[.active]:opacity-0"></span>
          <span className="absolute bottom-0 left-0 block h-1 w-full rounded-3xl bg-black transition-transform duration-[0.3s] ease-[ease] group-[.active]:bottom-2/4 group-[.active]:-rotate-45 group-[.active]:bg-white"></span>
        </button>
      </div>
    </div>
  );
}
