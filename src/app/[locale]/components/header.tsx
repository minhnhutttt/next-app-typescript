'use client'

import { useState, useEffect, useCallback } from 'react'
import LangSwitcher from './LangSwitcher'

const Header = () => {
  const [NavOpen, setNavOpen] = useState(false)

  const close = useCallback(() => {
    setNavOpen(false)
  }, [])

  useEffect(() => {
    const body = document.body

    if (NavOpen) {
      body.classList.add('overflow-hidden')
    } else {
      body.classList.remove('overflow-hidden')
    }
  }, [NavOpen])

  return (
    <header className="fixed inset-x-0 top-0 z-40 flex h-[80px] items-center justify-between border-b border-[#111111]/[0.2] bg-white/70 px-6 md:h-[100px] md:px-10">
      <a href="/" className="max-md:w-[120px]">
        <img src="/assets/images/logo.svg" alt="" />
      </a>

      <div className="flex items-center gap-4 md:gap-[64px]">
        <LangSwitcher />
        <button
          onClick={() => setNavOpen((prev) => !prev)}
          className={`menu-wrapper relative group z-[90] flex size-[40px] items-center justify-center rounded-[6px] border border-[#9C8651] bg-white md:size-[60px] ${
            NavOpen ? 'animate' : ''
          }`}
        >
          <div className={`hamburger-menu ${NavOpen ? 'animate' : ''}`}></div>
        </button>
      </div>
      <div
        className={`fixed left-0 top-0 z-50 flex h-screen w-full flex-col items-center justify-center overflow-y-auto bg-[#fff] ${
          NavOpen ? '' : 'invisible opacity-0'
        }`}
      >
        <div className="w-full max-w-[440px] px-6 md:max-w-[740px]">
          <a href="/" className="max-md:w-[120px]">
            <img src="/assets/images/logo.svg" alt="" />
          </a>
          <ul className="mt-8 flex flex-col text-left md:mt-10">
            <li className="relative">
              <a
                href="/"
                className="flex py-3 text-[24px] font-medium tracking-widest md:text-[36px]"
                onClick={close}
              >
                <span>HOME</span>
              </a>
            </li>
            <li className="relative">
              <a
                href="/about"
                className="flex py-3 text-[24px] font-medium tracking-widest md:text-[36px]"
                onClick={close}
              >
                <span>ABOUT US</span>
              </a>
            </li>
            <li className="relative">
              <a
                href="/members"
                className="flex py-3 text-[24px] font-medium tracking-widest md:text-[36px]"
                onClick={close}
              >
                <span>MANAGEMENT TEAM</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
