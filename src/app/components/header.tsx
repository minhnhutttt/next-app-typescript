"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

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
    <header className="absolute top-0 left-0 right-0 z-10 px-5 md:px-10">
      <div className="mx-auto flex h-20 w-full items-center justify-between md:h-[120px]">
        <Link href="/" className="duration-150 hover:opacity-75">
          <p className="font-dela text-[32px] md:text-[42px]">次世代クーポン</p>
        </Link>
        <div className="flex items-center justify-end">
          <div
            className={`z-[99] flex items-center justify-center gap-6 duration-300 max-xl:pointer-events-none max-xl:fixed max-xl:inset-0 max-xl:flex-col max-xl:bg-[#FAB7EF]/[0.9] max-xl:opacity-0 md:gap-8 xl:gap-9 ${
              open ? "max-xl:pointer-events-auto max-xl:opacity-100" : ""
            }`}
          >
            <nav>
              <ul className="flex items-center gap-6 max-md:flex-col">
                <li>
                  <a
                    href="/#faq"
                    className="px-3 text-[20px] font-bold duration-150 hover:opacity-75 md:text-[18px]"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </nav>
            <a
              href="https://lin.ee/6PgmBNE"
              target="_blank"
              className="flex items-center justify-center w-[240px] h-[59px] rounded-[60px] border-2 border-black bg-[#FF66CC] font-bold duration-150 [box-shadow:0px_5px_0px_0px_#000] hover:opacity-75 "
            >
              LINEでお問い合わせ
            </a>
          </div>
        </div>
        <div className="flex h-[28px] w-[50px] items-center justify-center md:w-[70px] xl:hidden">
          <button
            className={`group relative block h-[22px] w-8 cursor-pointer border-[none] p-0 max-xl:z-[99] md:w-10 max-xl:[&.active]:fixed ${
              open ? "active" : ""
            }`}
            onClick={() => setOpen(!open)}
          >
            <span className="absolute left-0 top-0 block h-0.5 w-full bg-black transition-transform duration-[0.3s] ease-[ease] group-[.active]:top-[42%] group-[.active]:rotate-45"></span>
            <span className="absolute left-0 top-2/4 block h-0.5 w-full -translate-y-2/4 bg-black transition-transform duration-[0.3s] ease-[ease] group-[.active]:opacity-0"></span>
            <span className="absolute bottom-0 left-0 block h-0.5 w-full bg-black transition-transform duration-[0.3s] ease-[ease] group-[.active]:bottom-2/4 group-[.active]:-rotate-45"></span>
          </button>
        </div>
      </div>
    </header>
  );
}
