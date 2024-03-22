"use client"
import Link from "next/link";
import { useCallback, useState } from "react";

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
  const [NavOpen, setNavOpen] = useState(false)

  const close = useCallback(() => {
    setNavOpen(false)
  }, [])
  return (
    <header className="px-5 md:px-14">
      <div className="mx-auto flex h-20 w-full items-center justify-between md:h-[100px]">
        <Link href="/" className="duration-150 hover:opacity-75">
          <p className="font-dela text-[24px] md:text-[38px] tracking-[0.2em]">
            次世代証明書
          </p>
        </Link>
        <div className="flex items-center">
          <div
              className={`max-xl:fixed z-[99] max-xl:inset-0 max-xl:h-screen max-xl:w-full max-xl:overflow-y-scroll max-xl:bg-neutral-900/90 max-xl:px-4 max-xl:pb-12 max-xl:pt-28 ${
                NavOpen ? '' : 'max-xl:invisible max-xl:opacity-0'
              }`}
            >
              <ul className="flex xl:items-center gap-6 font-solaris max-xl:flex-col xl:gap-8 md:mr-10">
                {links.map(({ link, text, target }, index) => (
                  <li key={index}>
                    <Link
                      href={link}
                      className="inline-block text-[8vw] leading-none duration-300 xl:text-[21px] font-bold hover:opacity-70"
                      target={target}
                      onClick={close}
                    >
                      {text}
                    </Link>
                  </li>
                ))}

              </ul>

            </div>
            <button
              className={`group relative z-30 h-8 w-8 xl:hidden ${
                NavOpen ? 'active' : ''
              }`}
              onClick={() => setNavOpen((prev) => !prev)}
            >
              <span className="absolute left-0 top-0 block h-0.5 w-full -translate-y-1/2 bg-black transition-transform duration-500 ease-in-out group-[.active]:top-1/2 group-[.active]:rotate-45"></span>
              <span className="absolute top-1/2 -translate-y-1/2 left-0 block h-0.5 w-full bg-black transition-transform duration-500 ease-in-out group-[.active]:top-1/2 group-[.active]:-rotate-45"></span>
              <span className="absolute bottom-0 left-0 block h-0.5 w-full -translate-y-1/2 bg-black transition-transform duration-500 ease-in-out group-[.active]:top-1/2 group-[.active]:-rotate-45"></span>
            </button>
          <div className="flex items-center justify-end">
            <a
              href="https://lin.ee/e8GHxTR"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <img
                className="max-md:w-[140px]"
                src="/images/button-line.png"
                alt="LINE"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
