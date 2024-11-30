'use client'

import { frontOpen } from '@/lib/front'
import { useCallback, useState } from 'react'

const Header = () => {
  const [NavOpen, setNavOpen] = useState(false)

  const close = useCallback(() => {
    setNavOpen(false)
  }, [])
  return (
    <header>
      <div className="absolute inset-x-0">
        <div className="absolute left-0 top-0 z-10 flex">
          <div className="relative">
            <img
              className="max-dt:w-[23.542vw] max-md:w-[180px]"
              src="/assets/images/logo-bg.png"
              alt=""
            />
            <a
              href="/"
              className="absolute inset-0 flex items-start justify-start pl-4 pt-5 md:pl-[3.889vw] md:pt-[3.333vw] dt:pl-14 dt:pt-12"
            >
              <img
                className="max-w-[129px] max-dt:w-[8.958vw] max-md:w-[100px]"
                src="/assets/images/logo.svg"
                alt=""
              />
            </a>
          </div>
        </div>
        <div
          className={`relative z-[99] mx-auto flex max-w-[1360px] items-center justify-center max-xl:fixed max-xl:left-0 max-xl:top-0 max-xl:h-screen max-xl:w-full max-xl:flex-col max-xl:overflow-y-scroll max-xl:bg-white/90 xl:justify-end ${
            NavOpen ? '' : 'max-xl:invisible max-xl:opacity-0'
          }`}
        >
          <ul className="flex items-center gap-10 text-[18px] font-bold max-md:flex-col md:h-[56px] xl:mr-14 xl:items-end">
            <li>
              <a href="/#faq" onClick={close} className="">
                よくある質問
              </a>
            </li>
            <li>
              <button
                onClick={() => {
                  close(), frontOpen()
                }}
                className=""
              >
                お問い合わせ
              </button>
            </li>
          </ul>
        </div>
        <button
          className={`group absolute right-5 top-5 z-[99] h-6 w-8 xl:hidden ${
            NavOpen ? 'active fixed' : ''
          }`}
          onClick={() => setNavOpen((prev) => !prev)}
        >
          <span className="absolute left-0 top-0 block h-0.5 w-full -translate-y-1/2 bg-white transition-transform duration-500 ease-in-out group-[.active]:top-1/2 group-[.active]:rotate-45 group-[.active]:bg-[#00AAFF]"></span>
          <span className="absolute left-0 top-2.5 block h-0.5 w-full -translate-y-1/2 bg-white transition-transform duration-500 ease-in-out group-[.active]:bg-[#00AAFF] group-[.active]:opacity-0"></span>
          <span className="absolute bottom-0 left-0 block h-0.5 w-full -translate-y-1/2 bg-white transition-transform duration-500 ease-in-out group-[.active]:top-1/2 group-[.active]:-rotate-45 group-[.active]:bg-[#00AAFF]"></span>
        </button>
      </div>
    </header>
  )
}

export default Header
