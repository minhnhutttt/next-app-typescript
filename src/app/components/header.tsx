"use client"
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

interface NavLink {
  link: string
  text: string
  target?: string
}

const links: NavLink[] = [
  {
    link: '/#certificate',
    text: '次世代証明書って？',
  },
  {
    link: '/#reason',
    text: '選ばれる理由',
  },
  {
    link: '/#organization',
    text: '導入組織',
  },
  {
    link: '/#faq',
    text: 'FAQ',
  },
]

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
    <>
    <header className="px-5 md:px-14 fixed inset-x-0 top-0 z-50 bg-white">
      <div className="mx-auto flex h-20 w-full items-center justify-between md:h-[100px]">
        <Link href="/" className="duration-150 hover:opacity-75">
          <p className="font-dela text-[24px] md:text-[38px] tracking-[0.2em]">
            次世代証明書
          </p>
        </Link>
        <div className="flex items-center">
            <div className="flex h-[28px] w-[50px] items-center justify-center xl:w-[70px] xl:hidden">
          <button
            className={`group relative block h-[22px] w-8 cursor-pointer border-[none] p-0 max-xl:z-[99] xl:w-10 max-xl:[&.active]:fixed ${open ? "active" : ""
              }`}
            onClick={() => setOpen(!open)}
          >
            <span className="absolute left-0 top-0 block h-0.5 w-full bg-black transition-transform duration-[0.3s] ease-[ease] group-[.active]:top-[42%] group-[.active]:rotate-45"></span>
            <span className="absolute left-0 top-2/4 block h-0.5 w-full -translate-y-2/4 bg-black transition-transform duration-[0.3s] ease-[ease] group-[.active]:opacity-0"></span>
            <span className="absolute bottom-0 left-0 block h-0.5 w-full bg-black transition-transform duration-[0.3s] ease-[ease] group-[.active]:bottom-2/4 group-[.active]:-rotate-45"></span>
          </button>
        </div>
        <div
          className={`z-[98] flex items-center justify-center gap-6 duration-300 max-xl:pointer-events-none max-xl:fixed max-xl:inset-0 max-xl:flex-col max-xl:bg-[#FF9B9B]/[0.9] max-xl:opacity-0 md:gap-8 xl:gap-9  ${open ? "max-xl:pointer-events-auto max-xl:opacity-100" : ""
            }`}
        >
          <div className="flex items-center max-xl:flex-col justify-center xl:justify-end gap-3 md:gap-5 max-md:px-6 max-xl:flex-wrap">
          <ul className="flex xl:items-center gap-10 max-md:flex-col xl:gap-8 xl:mr-10 max-xl:mb-6 text-center">
                {links.map(({ link, text, target }, index) => (
                  <li key={index}>
                    <Link
                      href={link}
                      className="inline-block text-[20px] md:text-[24px] leading-none duration-300 xl:text-[21px] font-bold hover:opacity-70"
                      target={target}
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            <div className="flex items-center justify-end">
              <a
                href="https://lin.ee/e8GHxTR"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img
                  className="max-md:w-[200px]"
                  src="/images/button-line.png"
                  alt="LINE"
                />
              </a>
            </div>
          </div>
        </div>
        </div>
      </div>
    </header>
    <div className="h-[80px] md:h-[100px]"></div>
    </>
  );
}
