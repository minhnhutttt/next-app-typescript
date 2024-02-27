export default function Footer() {
  return (
    <footer className="px-5 pb-10 bg-[#FF7F50] md:px-10">
      <div className="mx-auto flex w-full max-w-[400px] flex-wrap justify-between items-center gap-5 pb-16 pt-[60px] md:max-w-[660px] md:pb-[132px] md:pt-[180px] lg:max-w-[1068px]">
        <div className="max-lg:w-full">
          <a href="/" className="duration-150 hover:opacity-75">
            <img
              className="max-md:w-[140px]"
              src="/images/logo-footer.png"
              alt="NFT-Link"
            />
          </a>
        </div>
        <ul className="mt-3 space-y-[20px] text-[18px] font-bold text-white md:space-y-[30px] md:text-[16px] max-md:flex max-md:justify-center max-md:w-full">
          <li>
            <a href="/#faq" className="block duration-150 hover:opacity-75">
              FAQ
            </a>
          </li>
        </ul>
        <div className="flex gap-5 flex-wrap justify-center">
          <a
            href="https://apps.apple.com/jp/app/diver-wallet/id6444421722"
            target="_blank"
            rel="noopener noreferrer"
            className="max-md:w-[40vw] max-md:max-w-[180px] max-lg:max-w-[160px] lg:max-w-[205px] duration-150 hover:opacity-75"
          >
            <img src="/images/btn-appstore.png" alt="App Store" />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.hyerdesign.diver.wallet&pli=1"
            target="_blank"
            rel="noopener noreferrer"
            className="max-md:w-[40vw] max-md:max-w-[180px] max-lg:max-w-[160px] lg:max-w-[205px] duration-150 hover:opacity-75"
          >
            <img src="/images/btn-googleplay.png" alt="Google Play" />
          </a>
          <a
            href="https://lin.ee/XiDBioJ"
            target="_blank"
            rel="noopener noreferrer"
            className="max-md:w-[40vw] max-md:max-w-[180px] max-lg:max-w-[160px] duration-150 hover:opacity-75"
          >
            <img src="/images/btn-line.png" alt="お問い合わせ" />
          </a>
        </div>
      </div>
      <div className="text-center font-lato text-[13px] text-white md:text-[14px]">
        Copyright © NFT-Link
      </div>
    </footer>
  );
}
