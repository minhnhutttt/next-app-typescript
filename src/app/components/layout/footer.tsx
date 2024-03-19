export default function Footer() {
    return (
      <footer className="px-5 pb-10 bg-[#FDD300] md:px-10 relative">
        <a href="#top" className="absolute md:top-[56px] top-5 right-6 md:right-[65px]">
            <img className="max-md:w-[70px]" src="/images/page-top.png" alt="" />
        </a>
        <div className="mx-auto flex w-full items-center max-w-[400px] flex-wrap justify-center md:justify-between gap-5 pb-16 pt-[60px] md:max-w-[660px] md:pb-28 md:pt-[130px] lg:max-w-[978px]">
          <div className="max-lg:w-full max-md:flex max-md:justify-center">
            <a href="/" className="duration-150 hover:opacity-75">
              <p className="font-dela text-[36px] text-black md:text-[52px]">
              次世代ストレージ
              </p>
            </a>
          </div>
          <ul className="mt-3 space-y-[20px] text-[15px] font-bold text-black md:space-y-[30px] md:text-[16px]">
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
              <img src="/images/button-line.png" alt="" />
            </a>
          </div>
        </div>
        <div className="text-center font-lato text-[13px] text-black md:text-[14px]">
        Copyright © JISEDAI-STORAGE
        </div>
      </footer>
    );
  }
  