export default function Footer() {
    return (
      <footer className="px-5 pb-10 bg-[#010023]/[0.9] md:px-10 relative bg-[url('/assets/images/footer-deco.png')] max-xl:bg-contain bg-no-repeat bg-[center_top_110px]">
        <div className="mx-auto flex w-full items-center max-w-[400px] flex-wrap justify-center md:justify-between gap-5 pb-16 pt-[60px] md:max-w-[660px] md:pb-24 md:pt-[130px] lg:max-w-[1140px]">
          <div className="max-lg:w-full max-md:flex max-md:justify-center">
            <a href="/" className="duration-150 hover:opacity-75">
              <img src="/assets/images/logo-footer.png" alt="" />
            </a>
          </div>
          <ul className="mt-3 space-y-[20px] text-[15px] font-bold text-white md:space-y-[30px] md:text-[16px]">
            <li>
              <a href="/#faq" className="block duration-150 hover:opacity-75">
              FAQ
              </a>
            </li>
            <li>
              <a
                href="https://new-generation.app/company/"
                target="_blank"
                className="block duration-150 hover:opacity-75"
              >
                運営者
              </a>
            </li>
            <li>
              <a
                href="https://new-generation.app/privacy-policy/"
                target="_blank"
                className="block duration-150 hover:opacity-75"
              >
                プライバシーポリシー
              </a>
            </li>
          </ul>
          <div className="mt-3">
            <a
              href=""
              target="_blank"
              className="flex duration-150 hover:opacity-75"
            >
              <img className="max-md:w-[240px]" src="/assets/images/btn-line-footer.png" alt="" />
            </a>
          </div>
        </div>
        <div className="text-center text-[13px] text-white md:text-[14px]">
        Copyright © デジタルドキュメント生産ロボ
        </div>
      </footer>
    );
  }
  