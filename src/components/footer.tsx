'use client'

import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="p-5">
        <div className="mx-auto flex w-full max-w-[1440px] bg-[url('/assets/images/bg-footer.png')] bg-right-bottom bg-no-repeat max-lg:bg-[length:300px_auto] max-md:flex-col max-md:items-center max-md:bg-[length:150px_auto]">
          <div className="flex w-[140px] pt-4 md:w-[312px] md:pl-10 md:pr-5">
            <a href="/" className="block duration-150 hover:opacity-75">
              <img src="/assets/images/logo-footer.png" alt="" />
            </a>
          </div>
          <div className="h-[300px] w-px bg-white max-md:hidden"></div>
          <div className="px-5 pt-16 max-md:w-full max-md:pb-12 md:px-10 md:pt-3">
            <ul className="flex flex-col gap-9 text-[15px] text-white md:text-[16px]">
              <li>
                <a href="/privacy-policy">プライバシーポリシー</a>
              </li>
              <li>
                <p className="mb-4">提供サービス</p>
                <Link
                  href="/"
                  className="mb-2 block duration-150 hover:opacity-75"
                >
                  ・eラーニング「Chat GPT研修」
                </Link>
                <Link
                  href="/#ai-consulting"
                  className="mb-2 block duration-150 hover:opacity-75"
                >
                  ・生成AIコンサルティング・業務改善支援
                </Link>
                <Link
                  href="/#ai-development"
                  className="block duration-150 hover:opacity-75"
                >
                  ・自社専用生成AIツールの開発
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="h-[52px] border-t border-white/30">
        <p className="text-right"></p>
      </div>
    </footer>
  )
}

export default Footer
