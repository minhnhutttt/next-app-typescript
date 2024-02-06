"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";

export default function Guide() {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <section className="relative">
      <div className="px-5 bg-[url('/images/bg-06.png')] bg-cover">
        <div className="w-full max-w-[1260px] mx-auto pt-[8.611vw] min-[1440px]:pt-[124px] pb-[110px] md:pb-[147px]">
          <h3 ref={animateRefs} className="opacity-0 text-center min-[1440px]:text-[48px] md:text-[3.333vw] [font-size:_clamp(16px,5vw,24px)] font-bold leading-[1.8] tracking-widest">
            次世代クーポンの使い方
          </h3>
          <div ref={animateRefs} className="opacity-0 w-full max-w-[580px] mx-auto mt-6 md:mt-12 mb-9 md:mb-[68px]">
            <div className="border border-black py-3 md:py-5 text-[18px] md:text-[28px] lg:text-[36px] bg-white text-center font-bold leading-[1.8]">
              1. アプリをダウンロード
            </div>
            <figure className="flex items-center justify-center py-5">
              <img className="max-md:w-6" src="/images/arrow.png" alt="" />
            </figure>
            <div className="border border-black py-3 md:py-5 text-[18px] md:text-[28px] lg:text-[36px] bg-white text-center font-bold leading-[1.8]">
              2. 次世代クーポンをゲットする
            </div>
            <figure className="flex items-center justify-center py-5">
              <img className="max-md:w-6" src="/images/arrow.png" alt="" />
            </figure>
            <div className="border border-black py-3 md:py-5 text-[18px] md:text-[28px] lg:text-[36px] bg-white text-center font-bold leading-[1.8]">
              3. お店で使う
            </div>
          </div>
          <div className="bg-white px-6 md:px-[50px] py-10 md:py-20 w-full max-w-[900px] mx-auto rounded-[40px]">
            <div ref={animateRefs} className="opacity-0 mx-auto flex w-full max-lg:justify-center gap-8 max-md:flex-col lg:gap-[64px] border-b border-[#1853A0] pb-6 md:pb-10">
              <div className="flex flex-col items-center justify-center lg:pl-[22px]">
                <p className="mb-5 text-center font-notoCJK text-[20px] font-bold leading-tight tracking-[0.14em] md:mb-4 md:text-[24px]">
                  次世代クーポン専用 <br />
                  DIVER Wallet <br />
                  <span className="md:text-[16px] text-[13px] leading-none">
                    (ダイバーウォレット)
                  </span>
                </p>
                <div className="overflow-hidden rounded-[30px] [box-shadow:0.803px_3.214px_40px_0px_rgba(42,_82,_151,_0.10),_1.607px_1.607px_40px_0px_rgba(42,_82,_151,_0.10)]">
                  <img src="/images/ic-wallet.png" alt="DIVER Wallet" />
                </div>
              </div>
              <div className="md:pt-4">
                <div className="w-full lg:max-w-[427px] max-w-[340px] max-md:mx-auto space-y-7">
                  <div className="flex justify-center gap-7 max-lg:flex-wrap">
                    <a
                      href="https://apps.apple.com/jp/app/diver-wallet/id6444421722"
                      target="_blank"
                      className="block duration-150 hover:opacity-75"
                    >
                      <img
                        className="max-md:w-[180px]"
                        src="/images/btn-app-store.png"
                        alt="App Store"
                      />
                    </a>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.hyerdesign.diver.wallet&pli=1"
                      target="_blank"
                      className="block duration-150 hover:opacity-75"
                    >
                      <img
                        className="max-md:w-[180px]"
                        src="/images/btn-google-play.png"
                        alt="Google Play"
                      />
                    </a>
                  </div>
                  <div className="mx-auto flex w-full max-w-[340px] items-center justify-center gap-[18px] text-[20px] font-black before:block before:h-px before:flex-1 after:block after:h-px after:flex-1  md:text-[32px] text-black before:bg-black after:bg-black">
                    <span>PC</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <a
                      href="https://chromewebstore.google.com/detail/diver-wallet/pdlocjdlejekdbpghdcmedeacpkfiiof"
                      target="_blank"
                      className="block duration-150 hover:opacity-75"
                    >
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
            <div ref={animateRefs} className="opacity-0 md:pt-[36px] pt-5 md:max-w-[515px] w-full max-w-[400px] mx-auto">
              <h5 className="text-center md:text-[18px] text-[14px] font-bold mb-5">ご利用には次世代アドレスが必要です</h5>
              <p className="text-center md:text-[14px] text-[12px] mb-10">
              ※次世代アドレスとは、NFTの送受信や管理ができるユーザーIDです。次世代チャットや次世代スキャンなど、次世代シリーズアプリケーションを利用する際に必要となります。
              </p>
              <div className="flex justify-center">
                <a href="https://address.new-generation.app/" target="_blank" className="relative flex items-center justify-center w-[260px] h-[48px] md:w-[320px] md:h-[60px] bg-[#1853A0] border border-[#00147B] text-white font-dela md:text-[18px] tracking-widest rounded-[5px] duration-200 hover:opacity-75">
                  <span>次世代アドレスページ</span>
                  <svg className="absolute right-2 max-md:w-[16px]" xmlns="http://www.w3.org/2000/svg" width="23" height="16" viewBox="0 0 23 16" fill="none">
                    <path d="M14.1678 14.4197L21.3329 8.12669M21.3329 8.12669L14.1678 1.78809M21.3329 8.12669L2.04651 8.12669" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div ref={animateRefs} className="opacity-0 px-5">
        <div className="bg-[#00B900] rounded-[20px] w-full max-w-[440px] md:max-w-[764px] mx-auto py-5 px-7 md:px-10 flex max-md:flex-col relative mt-[-80px]">
          <div className="flex items-center max-md:justify-center md:border-r max-md:border-b border-white md:pr-9">
            <p className="md:text-[32px] text-[22px] text-white font-dela tracking-widest max-md:p-6 md:pl-11">次世代サポート</p>
          </div>
          <div className="md:pl-[56px]">
            <div className="flex items-center flex-col justify-center w-full max-w-[262px] max-md:mx-auto py-6 md:py-2">
              <figure>
                <img src="/images/girl.png" alt="" />
              </figure>
              <p className="md:text-[18px] text-[14px] text-white mb-6 mt-4">
                わからないことはLINEで何でもお問い合わせください。
              </p>
              <div className="w-full flex justify-center h-[64px]">
                <a href="https://lin.ee/6PgmBNE" target="_blank" className="w-full max-w-[262px] h-[60px] gap-2 relative rounded-[10px] md:text-[18px] text-[14px] text-[#00B900] font-black bg-white flex items-center justify-center hover:border-b border-b-[4px] hover:mt-[3px] border-[#005800] duration-200">
                  <figure><img className="max-md:w-6" src="/images/ic-line.png" alt="" /></figure>
                  <span>お問い合わせ</span>
                  <svg className="absolute right-2" xmlns="http://www.w3.org/2000/svg" width="13" height="16" viewBox="0 0 13 16" fill="none">
                    <path d="M11.4847 6.29703C12.753 7.07811 12.753 8.92189 11.4847 9.70297L3.23626 14.7827C1.90374 15.6033 0.187499 14.6447 0.187499 13.0797L0.1875 2.92026C0.1875 1.35533 1.90374 0.396673 3.23626 1.21729L11.4847 6.29703Z" fill="#00B900"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
