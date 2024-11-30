'use client'

import { frontOpen } from '@/lib/front'

const Footer = () => {
  return (
    <footer className="bg-[url(/assets/images/bg-ft.jpg);] pb-[20px] pt-[50px]">
      <div className="flex items-center justify-center">
        <a href="#">
          <img src="/assets/images/logo-ft.png" alt="" />
        </a>
      </div>
      <ul className="mx-auto mb-[30px] mt-[27px] flex max-w-[266px] flex-wrap items-center gap-8 max-md:mt-3 max-md:justify-center">
        <li>
          <a href="#faq" className="text-[16px] font-bold md:text-[18px]">
            よくある質問
          </a>
        </li>
        <li>
          <button
            onClick={() => {
              frontOpen()
            }}
            className="text-[16px] font-bold md:text-[18px]"
          >
            お問い合わせ
          </button>
        </li>
      </ul>
      <p className="text-center text-[12px] font-light text-[#0F0F0F] md:text-[14px]">
        Copyright © META Earth
      </p>
    </footer>
  )
}

export default Footer
