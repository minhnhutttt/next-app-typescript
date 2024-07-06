'use client'

import { useModal } from '@/context/ModalContext'
import Button from './button'

interface NavLink {
  link: string
  text: string
  target?: string
}

const links: NavLink[] = [
  {
    link: '/#service',
    text: 'メタでペット供養とは？',
  },
  {
    link: '/#trust',
    text: '産官学連携',
  },
  {
    link: '/price',
    text: '料金',
  },
  {
    link: '/#faq',
    text: 'FAQ',
  },
]
const Footer = () => {
  const { openModal } = useModal()
  return (
    <footer className="bg-[#4B4B4B] px-5 py-6">
      <div className="mx-auto w-full max-w-[1440px] border-b border-white px-5 pb-6">
        <div className="mx-auto flex w-full max-w-[1324px] max-md:flex-col max-md:items-center max-md:justify-center max-md:px-5">
          <div className="flex flex-col border-white pt-9 md:w-[236px] md:items-end md:border-r md:pr-4">
            <a href="/" className="mx-auto block max-md:w-[130px]">
              <img src="/assets/images/logo-footer.png" alt="" />
            </a>
            <div className="space-y-5 pt-6 md:pt-9">
              <a
                href="/terms-of-service"
                className="block text-center text-[16px] text-white md:text-right"
              >
                利用規約
              </a>
              <a
                href="/tokutei/"
                className="block text-center text-[16px] text-white md:text-right"
              >
                特定商取引法に基づく表記
              </a>
              <a
                href="/privacy-policy/"
                className="block text-center text-[16px] text-white md:text-right"
              >
                プライバシーポリシー
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-between max-md:mt-8 md:flex-1 md:pl-6">
            <div className="flex items-center max-md:flex-col md:justify-end">
              <ul className="mb-6 flex flex-wrap items-center gap-x-[40px] gap-y-6 max-md:justify-center md:mr-5 md:gap-x-[88px] md:gap-y-5 lg:mr-20 ">
                {links.map(({ link, text }, index) => (
                  <li key={index}>
                    <a
                      href={link}
                      className="inline-block text-[14px] font-bold text-white duration-150 [text-shadow:1px_1px_0px_rgba(0,_0,_0,_0.50)] hover:opacity-75 md:text-[17px]"
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="md:flex-[0_0_230px]">
                <Button
                  onclick={openModal}
                  rect="md:text-[18px] text-[16px] w-[230px] h-[66px] bg-[#EB6642] border border-white rounded-[60px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="17"
                    viewBox="0 0 10 17"
                    fill="none"
                  >
                    <path
                      d="M0 14.6665L6.18084 8.47217L0 2.27783L1.90283 0.375L10 8.47217L1.90283 16.5693L0 14.6665Z"
                      fill="white"
                    />
                  </svg>
                  <span>お問い合わせ</span>
                </Button>
              </div>
            </div>
            <div className="max-md:mt-10">
              <div className="mx-auto flex w-full max-w-[673px] items-center justify-center gap-5">
                <span className="h-px flex-1 bg-[#FFF3F3]"></span>
                <p className="text-[18px] text-white md:text-[28px]">
                  PRODUCED by
                </p>
                <span className="h-px flex-1 bg-[#FFF3F3]"></span>
              </div>
              <div className="flex items-center justify-center gap-[30px] pt-6 max-md:flex-wrap md:gap-[50px] md:pt-9">
                <a href="/" className="max-md:w-[70px]">
                  <img src="/assets/images/footer-banner-01.png" alt="" />
                </a>
                <a href="/" className="max-md:w-[160px]">
                  <img src="/assets/images/footer-banner-02.png" alt="" />
                </a>
                <a href="/" className="max-md:w-[120px]">
                  <img src="/assets/images/footer-banner-03.png" alt="" />
                </a>
                <a href="/" className="max-md:w-[90px]">
                  <img src="/assets/images/footer-banner-04.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto w-full max-w-[1324px] pt-3">
        <p className="text-center text-[12px] text-white md:text-right md:text-[18px]">
          Copyright © 2024 Metaropolice.Inc All rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
