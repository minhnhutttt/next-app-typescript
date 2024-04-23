export default function Footer() {
    return (
      <footer className="px-5 pb-10 bg-black md:px-10">
        <div className="mx-auto flex w-full max-w-[400px] flex-wrap justify-between gap-5 pb-16 pt-[60px] md:max-w-[660px] md:pb-20 md:pt-[80px] lg:max-w-[980px] lg:pl-14">
          <div className="max-lg:w-full">
            <a href="/" className="duration-150 hover:opacity-75">
              <img className="max-md:w-[230px]" src="/images/logo-footer.png" alt="" />
            </a>
          </div>
          <ul className="space-y-[20px] text-[15px] font-bold text-white md:space-y-[30px] md:text-[16px]">
            <li>
              <a
                href=""
                target="_blank"
                className="block duration-150 hover:opacity-75"
              >
                利用規約
              </a>
            </li>
            <li>
              <a
                href="https://world-scan-project.com/privacy-policy/"
                target="_blank"
                className="block duration-150 hover:opacity-75"
              >
                プライバシーポリシー
              </a>
            </li>
          </ul>
          <div className="flex flex-col items-center justify-center gap-5 md:gap-[30px]">
            <a
              href="https://lin.ee/QAw6RjL"
              target="_blank"
              className="block w-[160px] md:w-[208px] duration-150 hover:opacity-75"
            >
              <img src="/images/btn-line-footer.png" alt="" />
            </a>
            <a
              href=""
              target="_blank"
              className="block w-[140px] md:w-[180px] duration-150 hover:opacity-75"
            >
              <img src="/images/btn-ios.png" alt="" />
            </a>
            <a
              href=""
              target="_blank"
              className="block w-[140px] md:w-[180px] duration-150 hover:opacity-75"
            >
              <img src="/images/btn-android.png" alt="" />
            </a>
          </div>
        </div>
        <div className="text-center font-lato text-[13px] text-white md:text-[14px]">
        Copyright © DEJIMEISHI
        </div>
      </footer>
    );
  }
  