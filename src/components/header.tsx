'use client'

import { useCallback, useState } from 'react'

const Header = () => {
  const [NavOpen, setNavOpen] = useState(false)

  const close = useCallback(() => {
    setNavOpen(false)
  }, [])
  return (
    <header className="absolute left-0 top-0 w-full">
      <div className="px-[24px] max-md:px-[16px]">
        <div className="flex h-[120px] items-center justify-between border-b border-solid border-b-black max-md:h-[80px]">
          <a
            className="whitespace-nowrap font-anton text-[24px]"
            translate="no"
            href="/"
          >
            <img className='max-w-[180px]' src="/assets/images/logo.svg" alt="Yumeaci inc." />
          </a>
          <div className="flex items-center justify-center">
            <nav
              className={`max-lg:absolute max-lg:left-0 max-lg:top-0 max-lg:z-50 max-lg:h-screen max-lg:w-full max-lg:overflow-y-scroll max-lg:bg-[#eee] ${
                NavOpen
                  ? ' max-lg:visible max-lg:opacity-100'
                  : 'max-lg:invisible max-lg:opacity-0'
              }`}
            >
              <ul className="flex gap-[8px] text-[21px] max-lg:flex-col max-lg:px-[5%] max-lg:pb-[10%] max-lg:pt-[20%] max-lg:font-anton max-lg:text-[calc(16px_+_6vw)]">
                <li className="p-[8px]">
                  <a className="hover-underline" href="/about" onClick={close}>
                    About us
                  </a>
                </li>
                <li className="p-[8px]">
                  <a
                    className="hover-underline"
                    href="/solutions"
                    onClick={close}
                  >
                    Solutions
                  </a>
                </li>
                <li className="p-[8px]">
                  <a
                    href="mailto:info@yumeaci.co.jp"
                    className="hover-underline"
                    onClick={close}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            <button
              type="button"
              className="absolute right-[20px] top-[20px] z-50 hidden h-[40px] w-[40px] max-lg:block"
              onClick={() => setNavOpen((prev) => !prev)}
            >
              <div
                className={`relative flex items-center justify-center before:absolute before:left-0 before:h-0.5  before:w-full before:bg-black before:content-[''] after:absolute after:left-0 after:h-0.5  after:w-full after:bg-black after:content-[''] ${
                  NavOpen
                    ? 'before:top-[50%] before:rotate-[20deg] after:top-[50%] after:rotate-[-20deg] '
                    : 'before:top-[calc(50%_-_6px)] after:top-[calc(50%_+_6px)]'
                }`}
              ></div>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
