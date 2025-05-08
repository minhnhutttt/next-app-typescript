'use client'

import LineButton from './lineButton'

const Footer = () => {
  return (
    <>
      <footer className="bg-black pb-[180px] pt-10 md:pt-[66px] xl:pb-6">
        <div className="mb-8 flex justify-center gap-5 md:mb-14">
          <a href="https://x.com/17_gold_partner" target="_blank">
            <img src="/assets/images/socical-x.png" alt="" />
          </a>
          <a href="https://line.me/R/ti/p/%40300kbcvu" target="_blank">
            <img src="/assets/images/socical-line.png" alt="" />
          </a>
          <a href="https://www.instagram.com/goodfellows_17/" target="_blank">
            <img src="/assets/images/socical-instagram.png" alt="" />
          </a>
        </div>
        <div className="flex justify-center">
          <a href="/" className="duration-150 hover:opacity-75">
            <img src="/assets/images/logo-footer.svg" alt="" />
          </a>
        </div>
        <div className="flex justify-center gap-10 py-16 text-[15px] text-white md:text-[18px]">
          <a href="/company" className="duration-150 hover:opacity-75">
            企業情報
          </a>
          <a href="/privacy-policy" className="duration-150 hover:opacity-75">
            プライバシーポリシー
          </a>
        </div>
        <p className="text-center text-[14px] font-light text-white md:text-[16px]">
          © 2024 Good Fellows Co. All rights reserved.
        </p>
      </footer>
      <div className="fixed bottom-0 left-0 z-40 w-full px-2 xl:hidden">
        <LineButton />
      </div>
    </>
  )
}

export default Footer
