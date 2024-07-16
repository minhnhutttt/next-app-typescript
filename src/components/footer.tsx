'use client'


const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="p-5">
      <div className="w-full max-w-[1440px] mx-auto flex bg-[url('/assets/images/bg-footer.png')] max-md:bg-[length:150px_auto] max-lg:bg-[length:300px_auto] bg-no-repeat bg-right-bottom">
        <div className="md:w-[312px] w-[140px] flex md:pl-10 pr-5 pt-4">
          <a href="/" className="block duration-150 hover:opacity-75">
          <img src="/assets/images/logo-footer.png" alt="" /></a>
        </div>
        <div className="w-px bg-white h-[300px]"></div>
        <div className="px-5 md:px-10 pt-3">
          <ul className="flex flex-col text-white md:text-[16px] text-[15px] gap-9">
            <li>
              <a href="/privacy-policy">プライバシーポリシー</a>
            </li>
            <li>
              <p className="mb-4">提供サービス</p>
              <a href="/" className="block duration-150 hover:opacity-75 mb-2">・eラーニング「Chat GPT研修」</a>
              <a href="/" className="block duration-150 hover:opacity-75">・生成AI導入コンサルティング</a>
            </li>
            <li>
            <p className="mb-4">業務改善支援</p>
              <a href="/" className="block duration-150 hover:opacity-75">・自社専用生成AIツールの開発</a>
            </li>
          </ul>
        </div>
      </div>
      </div>
      <div className="border-t border-white/30 h-[52px]">
      <p className="text-right">

      </p>
      </div>
    </footer>
  )
}

export default Footer
