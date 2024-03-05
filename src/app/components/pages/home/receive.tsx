"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import HeadTitle from "./components/headTitle";
import Step from "./components/step";
export default function Receive() {
  const animateRefs = useScrollAnimation("zoom");
  const animateUpRefs = useScrollAnimation("fadeUp");
  return (
    <section className="px-5 pt-16 md:pt-[115px]">
      <div className="w-full md:max-w-[1320px] max-w-[540px] mx-auto">
        <HeadTitle>NFTの受け取り方法</HeadTitle>
        <div
          ref={animateRefs}
          className="opacity-0 max-w-[546px] md:w-[546px] mx-auto mt-8"
        >
          <div className="flex justify-center items-center gap-3 md:gap-8 mb-[-15px] md:mb-[-20px]">
            <span className="flex-1 w-full h-[5px] md:h-[7px] bg-[#0055A3] md:rounded-3xl rounded-2xl"></span>
            <p className="text-center md:text-[24px] text-[17px] font-bold">
              NFTの受け取りに必要なもの
            </p>
            <span className="flex-1 w-full h-[5px] md:h-[7px] bg-[#0055A3] md:rounded-3xl rounded-2xl"></span>
          </div>
          <div className="border-[5px] md:border-[7px] border-[#0055A3] !border-t-0 md:rounded-[8px] rounded-[4px] px-5 pt-8 md:pt-11 pb-5">
            <div className="flex justify-center pb-5">
              <div className="space-y-1">
                <div className="flex items-center gap-2 md:text-[18px] text-[14px] font-medium">
                  ● DIVER Walletアプリ
                </div>
                <div className="flex items-center gap-2 md:text-[18px] text-[14px] font-medium">
                  ● DIVER Tag専用アプリ
                </div>
                <div className="flex items-center gap-2 md:text-[18px] text-[14px] font-medium">
                  ● RWA Tagシール
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-y-8 md:gap-y-[60px] gap-x-5 md:gap-x-[70px] w-full md:max-w-[690px] max-w-[310px] mx-auto my-8 md:my-14">
          <Step step="01">
            <div className="md:min-h-[520px] min-h-[430px] flex flex-col items-center justify-end">
              <div className="flex-1 flex flex-col items-center justify-center gap-8">
                <figure>
                  <img src="/images/logo-w.png" alt="" />
                </figure>
                <figure>
                  <img src="/images/diver-wallet.png" alt="" />
                </figure>
                <div className="space-y-5">
                  <a
                    href="https://apps.apple.com/jp/app/diver-tag/id6449664504"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block duration-150 hover:opacity-75"
                  >
                    <img
                      className="w-[135px]"
                      src="/images/btn-appstore.png"
                      alt="App Store"
                    />
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.world.scan.project.tag&hl=ja&gl=US"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block duration-150 hover:opacity-75"
                  >
                    <img
                      className="w-[135px]"
                      src="/images/btn-google-play.png"
                      alt="Google Play"
                    />
                  </a>
                </div>
              </div>
              <div className="h-[110px] md:px-2">
                <p className="text-[16px] font-medium">
                  DIVER Walletをダウンロード
                </p>
                <p className="text-[13px] font-medium text-[#999]">
                  ※DIVER
                  Wallet(ダイバーウォレット)はNFTを管理するためのウォレットです。
                </p>
                <div className="flex mt-1">
                  <a
                    href="https://www.diver-help.space/tutorial/diver-wallet-setup"
                    target="_blank"
                    className="flex items-center text-[14px] border-b border-[#1853A0] text-[#1853A0] gap-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                    >
                      <path
                        d="M16 3.80444V1.77778C16 0.8 15.2 0 14.2222 0H1.77778C0.791111 0 0 0.8 0 1.77778V14.2222C0 15.2 0.791111 16 1.77778 16H14.2222C15.2 16 16 15.2 16 14.2222V12.1956C16.5244 11.8844 16.8889 11.3244 16.8889 10.6667V5.33333C16.8889 4.67556 16.5244 4.11556 16 3.80444ZM15.1111 5.33333V10.6667H8.88889V5.33333H15.1111ZM1.77778 14.2222V1.77778H14.2222V3.55556H8.88889C7.91111 3.55556 7.11111 4.35556 7.11111 5.33333V10.6667C7.11111 11.6444 7.91111 12.4444 8.88889 12.4444H14.2222V14.2222H1.77778Z"
                        fill="#1853A0"
                      />
                      <path
                        d="M11.5556 9.33333C12.2919 9.33333 12.8889 8.73638 12.8889 8C12.8889 7.26362 12.2919 6.66667 11.5556 6.66667C10.8192 6.66667 10.2222 7.26362 10.2222 8C10.2222 8.73638 10.8192 9.33333 11.5556 9.33333Z"
                        fill="#1853A0"
                      />
                    </svg>
                    <span>DIVER Wallet追加方法はこちら</span>
                  </a>
                </div>
              </div>
            </div>
          </Step>
          <Step step="02">
            <div className="md:min-h-[520px] min-h-[430px] flex flex-col items-center justify-end">
              <div className="flex-1 flex flex-col items-center justify-center gap-8">
                <figure>
                  <img
                    className="max-md:max-w-[136px]"
                    src="/images/receive-02.png"
                    alt=""
                  />
                </figure>
              </div>
              <div className="h-[110px] md:px-2">
                <p className="text-center text-[16px] font-medium">
                  DIVER Tag専用アプリを起動し
                  <br />
                  RWA Tagシールを読み取る
                </p>
              </div>
            </div>
          </Step>
          <Step step="03">
            <div className="md:min-h-[520px] min-h-[430px] flex flex-col items-center justify-end">
              <div className="flex-1 flex flex-col items-center justify-center gap-8">
                <figure>
                  <img
                    className="max-md:max-w-[136px]"
                    src="/images/receive-03.png"
                    alt=""
                  />
                </figure>
              </div>
              <div className="h-[120px] md:px-2">
                <p className="text-[16px] font-medium leading-tight">
                  アプリの操作に従いNFTを取得、DIVER
                  Walletのアドレスを入力して転送する。
                  <br />
                  <span className="text-[14px]">
                    ※アドレスがDIVER Time
                    Networkのものであることを確認してください。
                  </span>
                </p>
              </div>
            </div>
          </Step>
          <Step step="04">
            <div className="md:min-h-[520px] min-h-[430px] flex flex-col items-center justify-end">
              <div className="flex-1 flex flex-col items-center justify-center gap-8">
                <figure>
                  <img
                    className="max-md:max-w-[136px]"
                    src="/images/receive-04.png"
                    alt=""
                  />
                </figure>
              </div>
              <div className="h-[100px] md:h-[120px] md:px-2">
                <p className="text-center text-[16px] font-medium">
                  DIVER WalletでNFTの
                  <br />
                  受領を確認する
                </p>
              </div>
            </div>
          </Step>
        </div>
        <div ref={animateUpRefs} className="opacity-0 flex justify-center">
          <a
            href="https://www.diver-help.space/tutorial/diver-tag-transfer-nft"
            target="_blank"
            className="w-full md:max-w-[440px] max-w-[340px] h-[64px] md:h-[85px] flex items-center justify-center bg-[#0055A3] rounded-[90px] text-white relative font-bold md:text-[22px] text-[17px] px-5"
          >
            <span>NFTの転送方法の動画を見る</span>
            <figure className="absolute right-2">
              <svg
                className="max-md:w-3"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="18"
                viewBox="0 0 16 18"
                fill="none"
              >
                <path
                  d="M15 7.26795C16.3333 8.03775 16.3333 9.96225 15 10.7321L3 17.6603C1.66667 18.4301 -8.94676e-07 17.4678 -8.27378e-07 15.9282L-2.21695e-07 2.0718C-1.54397e-07 0.532196 1.66667 -0.430055 3 0.339746L15 7.26795Z"
                  fill="white"
                />
              </svg>
            </figure>
          </a>
        </div>
        <p className="text-center md:text-[18px] text-[15px] font-medium text-[#6F6E6E] mt-2.5 leading-relaxed">
          DIVER Help Centerへ移動します。<br />
          RWA TagとDIVER Tagは同じものです。
        </p>
      </div>
    </section>
  );
}
