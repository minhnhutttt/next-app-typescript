export default function Footer() {
  return (
    <footer className="px-5 pb-10 bg-[#F7F3F3] md:px-10">
      <div className="mx-auto flex w-full items-center max-w-[400px] flex-wrap justify-center md:justify-between gap-5 pb-16 pt-[60px] md:max-w-[660px] md:pb-28 md:pt-[130px] lg:max-w-[978px]">
        <div className="max-lg:w-full max-md:flex max-md:justify-center">
          <a href="/" className="duration-150 hover:opacity-75">
            <p className="font-dela text-[36px] text-black md:text-[52px]">
              次世代証明書
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
            <a href="/" className="block duration-150 hover:opacity-75">
              運営者
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
        Copyright © JISEDAI-SHOUMEISHO
      </div>
    </footer>
  );
}
