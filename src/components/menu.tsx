'use client'

import { useCallback, useState } from 'react'

const Menu = () => {
  const [NavOpen, setNavOpen] = useState(false)

  const close = useCallback(() => {
    setNavOpen(false)
  }, [])

  return (
    <>
      <div
        className="group sticky right-5 top-5 z-40 ml-auto mr-5 flex h-[52px] w-[50px] cursor-pointer flex-col  items-center justify-center border-2 border-black bg-white"
        onClick={() => setNavOpen((prev) => !prev)}
      >
        <div className={`stick stick-1 ${NavOpen ? 'open' : 'close'}`}></div>
        <div className={`stick stick-2 ${NavOpen ? 'open' : 'close'}`}></div>
        <div className={`stick stick-3 ${NavOpen ? 'open' : 'close'}`}></div>
      </div>
      <div
        className={`sticky right-0 top-0 z-30 ml-auto mt-[-54px] flex h-screen w-full max-w-[460px] flex-col justify-center bg-black/90  px-5 ${
          NavOpen ? '' : 'invisible opacity-0'
        }`}
      >
        <div className="ml-[50px] w-[260px] md:w-[326px]">
          <ul className="mb-10 flex flex-col gap-8">
            <li>
              <a
                href="/"
                className="block border-b border-white px-4 py-2 text-[20px] text-white"
                onClick={close}
              >
                TOP
              </a>
            </li>
            <li>
              <a
                href="/liver"
                className="block border-b border-white px-4 py-2 text-[20px] text-white"
                onClick={close}
              >
                所属ライバー
              </a>
            </li>
            <li>
              <a
                href="/company"
                className="block border-b border-white px-4 py-2 text-[20px] text-white"
                onClick={close}
              >
                企業情報
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="block border-b border-white px-4 py-2 text-[20px] text-white"
                onClick={close}
              >
                法人様はこちら
              </a>
            </li>
            <li>
              <a
                href="/privacy-policy"
                className="block border-b border-white px-4 py-2 text-[20px] text-white"
                onClick={close}
              >
                プライバシーポリシー
              </a>
            </li>
          </ul>
          <div className="flex gap-5 p-4">
            <a
              href="https://www.instagram.com/goodfellows_17/"
              target="_blank"
              className="w-12 duration-150 hover:opacity-75"
            >
              <img src="/assets/images/socical-instagram.png" alt="" />
            </a>
            <a
              href="https://line.me/R/ti/p/%40300kbcvu"
              target="_blank"
              className="w-12 duration-150 hover:opacity-75"
            >
              <img src="/assets/images/socical-line.png" alt="" />
            </a>
            <a
              href="https://x.com/17_gold_partner"
              target="_blank"
              className="w-12 duration-150 hover:opacity-75"
            >
              <img src="/assets/images/socical-x.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Menu
