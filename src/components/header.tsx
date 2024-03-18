'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import ButtonPopup from './buttonPopup'

interface NavLink {
  link: string
  text: string
  target?: string
}

const links: NavLink[] = [
  {
    link: '/',
    text: 'HOME',
  },
  {
    link: '/service',
    text: 'SERVICE',
  },
  {
    link: '/workflow',
    text: 'WORKFLOW',
  },
  {
    link: '/about',
    text: 'ABOUT',
  },
  {
    link: '/contact',
    text: 'CONTACT',
  },
]

const Header = () => {
  const [NavOpen, setNavOpen] = useState(false)

  const close = useCallback(() => {
    setNavOpen(false)
  }, [])

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <div className="px-5 xl:px-16">
        <div className="flex h-24 items-center justify-between">
          <Link
            href="/"
            className="realtive z-50 max-w-[80px] lg:max-w-[110px]"
          >
            <img src="/assets/images/logo.svg" className="w-full" alt="" />
          </Link>
          <div
            className={`max-lg:fixed max-lg:left-0 max-lg:top-0 max-lg:h-screen max-lg:w-full max-lg:overflow-y-scroll max-lg:bg-neutral-900/90 max-lg:px-4 max-lg:pb-12 max-lg:pt-28 ${
              NavOpen ? '' : 'max-lg:invisible max-lg:opacity-0'
            }`}
          >
            <ul className="flex lg:items-center gap-6 font-solaris max-lg:flex-col lg:gap-8">
              {links.map(({ link, text, target }, index) => (
                <li key={index}>
                  <Link
                    href={link}
                    className="inline-block text-[8vw] leading-none duration-300 lg:text-[21px] lg:hover:scale-125"
                    target={target}
                    onClick={close}
                  >
                    {text}
                  </Link>
                </li>
              ))}
              <li>
                <ButtonPopup navOpen={NavOpen} sm />
              </li>

            </ul>

          </div>
          <button
            className={`group relative z-30 h-3 w-8 lg:hidden ${
              NavOpen ? 'active' : ''
            }`}
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <span className="absolute left-0 top-0 block h-0.5 w-full -translate-y-1/2 bg-white transition-transform duration-500 ease-in-out group-[.active]:top-1/2 group-[.active]:rotate-45"></span>
            <span className="absolute bottom-0 left-0 block h-0.5 w-full -translate-y-1/2 bg-white transition-transform duration-500 ease-in-out group-[.active]:top-1/2 group-[.active]:-rotate-45"></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
