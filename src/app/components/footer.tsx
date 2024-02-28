export default function Footer() {
    return (
      <footer className="px-5 pb-5 bg-[#E0F3FF] md:px-10 border-t-[8px] md:border-t-[10px] border-[#0055A3]">
        <div className="mx-auto flex w-full max-w-[400px] flex-wrap items-center justify-center pt-[60px] md:max-w-[660px] pb-6 md:pb-3 md:pt-[110px] lg:max-w-[1016px] gap-8 md:gap-12">
          <div className="max-md:w-full max-md:flex max-md:justify-center">
            <a href="/" className="duration-150 hover:opacity-75">
                <img className="max-md:w-[160px]" src="/images/logo-black.png" alt="RWA Tag" />
            </a>
          </div>
          <div className="flex items-center justify-end gap-3 md:gap-5 max-md:flex-wrap">
                    <a href="https://apps.apple.com/jp/app/diver-tag/id6449664504" target="_blank" rel="noopener noreferrer" className="duration-150 hover:opacity-75"><img className="max-md:w-[140px]" src="/images/btn-appstore.png" alt="App Store" /></a>
                    <a href="https://play.google.com/store/apps/details?id=com.world.scan.project.tag&hl=ja&gl=US" target="_blank" rel="noopener noreferrer" className="duration-150 hover:opacity-75"><img className="max-md:w-[140px]" src="/images/btn-google-play.png" alt="Google Play" /></a>
                </div>
        </div>
        <ul className="mt-3 flex justify-center text-[15px] font-bold md:text-[16px] gap-7 mb-12 max-md:flex-wrap md:mb-[75px]">
            <li>
              <a href="/company" className="block duration-150 hover:opacity-75">
              運営会社
              </a>
            </li>
            <li>
              <a
                href="/#faq"
                className="block duration-150 hover:opacity-75"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="/privacy-policy"
                className="block duration-150 hover:opacity-75"
              >
                プライバシーポリシー
              </a>
            </li>
            <li>
              <a
                href="https://lin.ee/1zNROviH"
                target="_blank"
                className="block duration-150 hover:opacity-75"
              >
                お問い合わせ
              </a>
            </li>
          </ul>
        <div className="text-center font-work text-[13px] md:text-[16px]">
        Copyright © 2024 RWA Tag.
        </div>
      </footer>
    );
  }
  