'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'

interface NavLink {
  link: string
  text: string
  target?: string
}

const links: NavLink[] = [
  {
    link: '/',
    text: 'Idol Questとは？',
  },
  {
    link: '/',
    text: '楽しみ方',
  },
  {
    link: '/',
    text: 'お得がいっぱい使い方',
  },
  {
    link: '/',
    text: 'FAQ',
  },
  {
    link: '/',
    text: 'お問い合わせ',
  }
]

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [isBack, setIsBack] = useState(false);
  const [NavOpen, setNavOpen] = useState(false)

  const close = useCallback(() => {
    setNavOpen(false)
  }, [])

  const handleClick = () => {
    if (isActive && !isBack) {
      setIsBack(true);
    } else if (isBack) {
      setIsBack(false);
    } else {
      setIsActive(true);
    }
    setNavOpen((prev) => !prev)
  };

  return (
    <header className="relative z-50 w-full">
      <div className="px-5 xl:px-10">
        <div className="flex items-center justify-between relative">
          <Link
            href="/"
            className="absolute top-5 md:top-8 left-0 max-md:max-w-[90px]"
          >
            <img src="/assets/images/logo.png" className="w-full" alt="" />
          </Link>
          <div
            className={`fixed left-0 top-0 h-screen w-full overflow-auto bg-[#F77C96]/90 px-10 pb-12 pt-28 ${
              NavOpen ? 'no-doc-scroll' : 'invisible opacity-0'
            }`}
          >
            <ul className="flex md:items-center justify-center h-full gap-6 flex-col md::gap-8 text-white">
              {links.map(({ link, text, target }, index) => (
                <li key={index}>
                  <Link
                    href={link}
                    className="inline-block text-[20px] leading-none duration-300 md::text-[24px] lg:hover:scale-125"
                    target={target}
                    onClick={close}
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <button onClick={handleClick} className="flex items-center absolute right-0 top-4 md:top-6">
            <p className="md:text-[30px] text-[20px] mr-3 md:mr-4">Menu</p>
            <div
              className={`menu rounded ${isActive ? 'active' : ''} ${isBack ? 'back' : ''}`}
            >
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
