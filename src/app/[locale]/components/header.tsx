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
          className={`group z-[90] flex size-[40px] items-center justify-center rounded-[6px] border border-[#F34927] bg-white md:size-[60px] ${
            NavOpen ? 'active fixed right-6 md:right-10' : ''
          }`}
        >
          <div className="w-[28px] space-y-2 group-[.active]:!space-y-0 md:w-[40px] md:space-y-4">
            <span className="block h-[3px] origin-center rounded-full bg-[#F34927] duration-500 ease-in-out group-[.active]:translate-y-1/2 group-[.active]:rotate-45"></span>
            <span className="block h-[3px] origin-center rounded-full bg-[#F34927] duration-500 ease-in-out group-[.active]:translate-y-1/2 group-[.active]:-rotate-45"></span>
          </div>
        </button>
      </div>
      <div
        className={`fixed left-0 top-0 z-50 flex h-screen w-full flex-col items-center justify-center overflow-y-auto bg-[#fff] ${
          NavOpen ? '' : 'invisible opacity-0'
        }`}
      >
        <a href="/" className="max-md:w-[120px]">
          <img src="/assets/images/logo.svg" alt="" />
        </a>
        <ul className="mt-8 flex items-center max-md:flex-col md:mt-10">
          <li className="relative">
            <a
              href="/"
              className="flex px-6 py-3 text-[24px] font-medium tracking-widest md:text-[36px]"
              onClick={close}
            >
              <span>HOME</span>
            </a>
          </li>
          <li className="relative">
            <a
              href="/about"
              className="flex px-6 py-3 text-[24px] font-medium tracking-widest md:text-[36px]"
              onClick={close}
            >
              <span>ABOUT US</span>
            </a>
          </li>
          <li className="relative">
            <a
              href="/members"
              className="flex px-6 py-3 text-[24px] font-medium tracking-widest md:text-[36px]"
              onClick={close}
            >
              <span>MANAGEMENT TEAM</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
