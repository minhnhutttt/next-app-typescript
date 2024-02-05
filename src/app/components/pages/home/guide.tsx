export default function Guide() {
    return (
      <section className="px-5 bg-[url('/images/bg-06.png')] bg-cover">
        <div className="w-full max-w-[1260px] mx-auto pt-[8.611vw] min-[1440px]:pt-[124px] pb-[5vw] min-[1440px]:pb-9">
            <h3 className="text-center min-[1440px]:text-[48px] md:text-[3.333vw] [font-size:_clamp(16px,5vw,24px)] font-bold leading-[1.8] tracking-widest">
            次世代クーポンの使い方
            </h3>
            <div className="w-full max-w-[580px] mx-auto mt-6 md:mt-12 mb-9 md:mb-[68px]">
                <div className="border border-black py-5 text-[18px] md:text-[28px] lg:text-[36px] bg-white text-center font-bold leading-[1.8]">
                    1. アプリをダウンロード
                </div>
                <figure className="flex items-center justify-center py-5">
                    <img src="/images/arrow.png" alt="" />
                </figure>
                <div className="border border-black py-5 text-[18px] md:text-[28px] lg:text-[36px] bg-white text-center font-bold leading-[1.8]">
                    2. 次世代クーポンをゲットする
                </div>
                <figure className="flex items-center justify-center py-5">
                    <img src="/images/arrow.png" alt="" />
                </figure>
                <div className="border border-black py-5 text-[18px] md:text-[28px] lg:text-[36px] bg-white text-center font-bold leading-[1.8]">
                3. お店で使う
                </div>
            </div>
            <div className="bg-white px-5 py-10 md:py-20 w-full max-w-[900px] mx-auto rounded-[40px]">
                <div className="mx-auto flex w-full max-w-[410px] gap-8 max-md:flex-col md:max-w-[700px] md:gap-[72px]">
                    <div
                    className="flex flex-col items-center justify-center md:pl-[22px]"
                    >
                    <p className="mb-5 text-center font-notoCJK text-[20px] font-bold tracking-[0.14em] md:mb-7 md:text-[24px]">
                    次世代クーポン専用 <br />
                    DIVER Wallet  <br />
                        <span className="md:text-[16px] text-[13px]">(ダイバーウォレット)</span>
                    </p>
                    <div className="overflow-hidden rounded-[30px] [box-shadow:0.803px_3.214px_40px_0px_rgba(42,_82,_151,_0.10),_1.607px_1.607px_40px_0px_rgba(42,_82,_151,_0.10)]">
                        <img src="/images/ic-wallet.png" alt="DIVER Wallet" />
                    </div>
                    </div>
                    <div className="md:pt-4">
                    <div className="w-full max-w-[410px] space-y-6">
      <div
        className="flex justify-center gap-3 max-lg:flex-wrap"
      >
        <a href="https://apps.apple.com/jp/app/diver-wallet/id6444421722" target="_blank" className="block duration-150 hover:opacity-75">
          <img
            className="max-md:w-[180px]"
            src="/images/btn-app-store.png"
            alt="App Store"
          />
        </a>
        <a href="https://play.google.com/store/apps/details?id=com.hyerdesign.diver.wallet&pli=1" target="_blank" className="block duration-150 hover:opacity-75">
          <img
            className="max-md:w-[180px]"
            src="/images/btn-google-play.png"
            alt="Google Play"
          />
        </a>
      </div>
      <div
        className="mx-auto flex w-full max-w-[340px] items-center justify-center  gap-[18px] text-[20px] font-black before:block before:h-px before:flex-1 after:block after:h-px after:flex-1  md:text-[32px] text-black before:bg-black after:bg-black">
        <span>PC</span>
      </div>
      <div className="flex items-center justify-center">
        <a href="https://chromewebstore.google.com/detail/diver-wallet/pdlocjdlejekdbpghdcmedeacpkfiiof" target="_blank" className="block duration-150 hover:opacity-75">
          <img
            className="max-md:w-[180px]"
            src="/images/btn-chrome-web-store.png"
            alt="Chrome Web Store"
          />
        </a>
      </div>
    </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    );
  }
  