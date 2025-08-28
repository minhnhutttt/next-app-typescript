export default function Begin() {
  return (
    <section className="relative pt-35 md:pt-80">
      <div className="mx-auto w-full max-w-[1440px] px-5">
        <h4 className="u-text-gradient-01 text-center text-[50px] leading-[1.2] font-bold md:text-[120px]">
          さぁ、
          <br className="md:hidden" />
          はじめよう！
        </h4>
        <p className="mt-12 text-center text-[30px] font-semibold md:mt-22 md:text-[50px]">
          いつもの日常が、ちょっとお得になる。
          <br />
          いつもの行動が、DWUに変わる。
        </p>
        <div className="mt-14 flex items-center justify-center gap-4 max-md:flex-col md:mt-20">
          <p className="text-center text-[32px] font-semibold md:text-[50px]">あなたも今すぐ</p>
          <span>
            <img className="max-md:max-w-[280px]" src="/assets/images/logo-coin.png" alt="" />
          </span>
        </div>
        <div className="mt-12 flex flex-col items-center justify-center gap-5 md:mt-20 md:gap-7">
          <p className="text-center text-[15px] font-light md:text-[20px]">
            まずはアプリをダウンロードして、
            <br />
            あなたのDWUライフをスタートさせましょう！
          </p>
          <p className="">
            <img src="/assets/images/line.png" alt="" />
          </p>
        </div>
      </div>
      <p className="mt-10 flex items-center justify-center md:mt-20">
        <img src="/assets/images/diver-wallet-pro.png" alt="DIVER Wallet PRO" />
      </p>
      <div className="relative min-h-[600px] bg-[#1A68B0] md:-mt-11 md:min-h-[474px]">
        <div className="mx-auto flex w-full max-w-[1440px] max-md:flex-col max-md:items-center max-md:justify-center">
          <span className="mix-blend-multiply">
            <img src="/assets/images/ic-diver.png" alt="" />
          </span>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h5 className="flex items-center justify-center gap-2">
              <span className="text-[28px] font-bold md:text-[48px]">DIVER Wallet</span>
              <span className="rounded-tl-[20px] rounded-br-[20px] border border-white px-2.5 text-[24px] leading-[1.2] md:text-[39px]">
                PRO
              </span>
            </h5>
            <p className="text-center text-[16px] leading-[1.2] font-medium md:text-[20px]">
              (ダイバーウォレットプロ)
            </p>
            <div className="mt-8 flex items-center justify-center gap-[30px] max-md:flex-col md:mt-8 md:gap-[60px]">
              <span>
                <img src="/assets/images/logo-w-pro.png" alt="" />
              </span>
              <div className="flex flex-col gap-3">
                <a
                  href="https://apps.apple.com/jp/app/diver-wallet-pro/id6739527739"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="max-md:w-[220px]"
                >
                  <img src="/assets/images/btn-apple.png" alt="" />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.bigant.diver.limited.wallet.pro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="max-md:w-[220px]"
                >
                  <img src="/assets/images/btn-google.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-5 pt-6 md:pt-11">
        <p className="text-center text-[16px] font-extrabold md:text-[20px]">
          または、このQRコードを読み取ってね！
        </p>
        <div className="mt-5 flex items-center justify-center md:mt-7">
          <div className="size-[300px] rounded-2xl bg-white"></div>
        </div>
      </div>
    </section>
  );
}
