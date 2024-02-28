"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";

export default function NFTLink() {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <div className="bg-[linear-gradient(_to_bottom,_rgba(246,_250,_254,_0.80)_0%,_rgba(246,_250,_254,_0.80)_calc(100%-172px),_transparent_calc(100%-172px),_transparent_100%_)] px-5 md:px-8 pt-20 md:pt-[205px]">
      <div className="w-full max-w-[1320px] mx-auto">
        <section className="mb-[100px]">
          <div
            ref={animateRefs}
            className="opacity-0 text-center relative mb-2.5 px-2.5 pb-6 md:pb-9 bg-[repeating-linear-gradient(-45deg,_transparent_0_6px,_#0055A3_6px_8px)] bg-no-repeat md:[background-size:100%_20px] [background-size:100%_12px] bg-bottom"
          >
            <p className="md:text-[24px] [font-size:_clamp(14px,4.8vw,18px)] tracking-widest">
              1分で準備完了！
            </p>
            <h3 className="min-[1440px]:text-[62px] md:text-[4.306vw] [font-size:_clamp(20px,7.5vw,32px)] font-bold tracking-[0.15em]">
              NFT-Linkで<br className="md:hidden" />NFTを受け取る前に
            </h3>
          </div>
          <div
            ref={animateRefs}
            className="opacity-0 bg-white [box-shadow:0px_4px_44px_0px_rgba(24,_83,_160,_0.15)] rounded-[20px] mt-14 md:mt-28 p-6 md:p-10"
          >
            <div className="w-full max-w-[1000px] mx-auto">
              <h4 className="lg:text-[32px] md:text-[28px] [font-size:_clamp(18px,6.4vw,24px)] text-center text-[#1853A0] font-black border-b border-[#1853A0] pb-2">
                ダイバーウォレットを
                <br className="md:hidden" />
                インストールしよう！
              </h4>
              <div className="flex md:justify-between justify-center max-md:items-center max-md:flex-col mt-10 pb-3 gap-6">
                <div className=" max-md:mr-[-32px]">
                  <img
                    className="[filter:drop-shadow(0px_4px_44px_rgba(24,_83,_160,_0.15))] max-md:w-[190px]"
                    src="/images/ic-wallet.png"
                    alt=""
                  />
                </div>
                <div className="flex max-md:flex-wrap max-md:justify-center gap-5 lg:gap-[60px] px-2">
                  <div className="max-md:w-[220px]">
                    <p className="text-center font-noto md:text-[28px] text-[18px] font-bold mb-4 md:mb-6">
                      ios 版
                    </p>
                    <a
                      href="https://apps.apple.com/jp/app/diver-wallet/id6444421722"
                      target="_blank"
                    >
                      <img src="/images/btn-appstore.png" alt="App Store" />
                    </a>
                  </div>
                  <div className="max-md:w-[220px]">
                    <p className="text-center font-noto md:text-[28px] text-[18px] font-bold mb-4 md:mb-6">
                      Android 版
                    </p>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.hyerdesign.diver.wallet&pli=1"
                      target="_blank"
                    >
                      <img src="/images/btn-googleplay.png" alt="Google Play" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-md:bg-white max-md:[box-shadow:0px_4px_44px_0px_rgba(24,_83,_160,_0.15)] max-md:rounded-[20px]">
            <div
              ref={animateRefs}
              className="opacity-0 md:bg-white md:[box-shadow:0px_4px_44px_0px_rgba(24,_83,_160,_0.15)] md:rounded-[20px] mt-14 md:mt-24 p-6 md:p-10"
            >
              <div className="w-full md:max-w-[846px] max-w-[400px] mx-auto flex justify-between pt-10  md:pb-24 max-md:flex-col max-md:gap-10">
                <div className="">
                  <div className="flex justify-center">
                    <p className="text-center font-noto md:text-[18px] text-[16px] font-bold border-b border-[#1853A0] md:px-8 pb-2 md:pb-3">
                      ①言語選択・新規アカウントの作成
                    </p>
                  </div>
                  <div className="md:mt-6 mt-4 flex flex-col items-center">
                    <figure>
                      <img
                        className="max-md:max-h-[95vw]"
                        src="/images/image-phone-01.png"
                        alt=""
                      />
                    </figure>
                    <div className="flex justify-center mt-3 md:mt-5">
                      <p className="md:text-[16px] text-[13px] max-w-[350px]">
                        日本語の場合は「日本語」をタップし、「新しいアカウントを作成する」をタップします。
                      </p>
                    </div>
                  </div>
                </div>
                <div className="max-md:w-auto max-lg:w-[32vw]">
                  <div className="flex justify-center">
                    <p className="text-center font-noto md:text-[18px] text-[16px] font-bold border-b border-[#1853A0] px-5 md:px-0 lg:px-8 pb-2 md:pb-3">
                      ②ウォレット名を入力する
                    </p>
                  </div>
                  <div className="md:mt-6 mt-4 flex flex-col items-center">
                    <figure className="max-md:w-auto max-lg:w-[27.5vw]">
                      <img
                        className="max-md:max-h-[90vw]"
                        src="/images/image-phone-02.png"
                        alt=""
                      />
                    </figure>
                    <div className="flex justify-center mt-3 md:mt-5">
                      <p className="md:text-[16px] text-[13px] md:max-w-[280px]">
                        １-20文字以内で、ウォレット名を入力してください。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              ref={animateRefs}
              className="opacity-0 md:bg-white md:[box-shadow:0px_4px_44px_0px_rgba(24,_83,_160,_0.15)] md:rounded-[20px] md:mt-24 p-6 md:p-10"
            >
              <div className="w-full md:max-w-[730px] max-w-[400px] mx-auto flex justify-between md:pt-10 pb-5 md:pb-6 max-md:flex-col max-md:gap-10">
                <div className="">
                  <div className="flex justify-center">
                    <p className="text-center font-noto md:text-[18px] text-[16px] font-bold border-b border-[#1853A0] md:px-8 pb-2 md:pb-3">
                      ③復元フレーズをメモする
                    </p>
                  </div>
                  <div className="md:mt-6 mt-4 flex flex-col items-center">
                    <figure className="max-md:w-auto max-lg:w-[27.5vw]">
                      <img
                        className="max-md:max-h-[90vw]"
                        src="/images/image-phone-03.png"
                        alt=""
                      />
                    </figure>
                    <div className="flex justify-center mt-3 md:mt-5">
                      <p className="md:text-[16px] text-[13px] md:max-w-[290px]">
                        12個のフレーズと並び順を保管しておけば、万が一スマホを壊したり紛失したりしても別のスマホから続けられます。
                        <br />
                        ※後からでも復元フレーズを確認してメモすることも可能です。
                      </p>
                    </div>
                  </div>
                </div>
                <div className="max-md:w-auto max-lg:w-[32vw]">
                  <div className="flex justify-center">
                    <p className="text-center font-noto md:text-[18px] text-[16px] font-bold border-b border-[#1853A0] px-5 md:px-0 lg:px-8 pb-2 md:pb-3">
                      ④設定完了
                    </p>
                  </div>
                  <div className="md:mt-6 mt-4 flex flex-col items-center">
                    <figure className="max-md:w-auto max-lg:w-[27.5vw]">
                      <img
                        className="max-md:max-h-[90vw]"
                        src="/images/image-phone-04.png"
                        alt=""
                      />
                    </figure>
                    <div className="flex justify-center mt-3 md:mt-5">
                      <p className="md:text-[16px] text-[13px] md:max-w-[280px]">
                        画像のように画面を確認することができれば完了です。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div
            ref={animateRefs}
            className="opacity-0 text-center relative mb-2.5 px-2.5 pb-6 md:pb-9 bg-[repeating-linear-gradient(-45deg,_transparent_0_6px,_#0055A3_6px_8px)] bg-no-repeat md:[background-size:100%_20px] [background-size:100%_12px] bg-bottom"
          >
            <p className="md:text-[24px] [font-size:_clamp(14px,4.8vw,18px)] tracking-widest">
              準備ができたら！<br />
              NFT-LinkでNFTを受け取ろう
            </p>
            <h3 className="md:text-[62px] [font-size:_clamp(20px,7.5vw,32px)] font-bold tracking-[0.15em]">
              NFTの受け取り方法
            </h3>
          </div>
          <div
            ref={animateRefs}
            className="opacity-0 flex justify-center items-center max-md:flex-col gap-6 md:mt-12 mt-8 md:gap-[96px]"
          >
            <figure>
              <img
                className="rounded-[35px]"
                src="/images/image-receive-left.png"
                alt=""
              />
            </figure>
            <figure>
              <img
                className="max-md:max-w-[300px] max-md:w-[45vw]"
                src="/images/image-receive-right.png"
                alt=""
              />
            </figure>
          </div>
          <div
            ref={animateRefs}
            className="opacity-0 bg-white [box-shadow:0px_4px_44px_0px_rgba(24,_83,_160,_0.15)] rounded-[20px] mt-10 md:mt-16 px-4 py-6 md:p-10"
          >
            <div className="w-full max-w-[1060px] mx-auto pb-8 md:pb-14">
              <h5 className="text-center font-bold font-noto lg:text-[32px] md:text-[28px] [font-size:_clamp(18px,6.4vw,24px)] mt-8 md:mt-16">
              受け取りパターン1:表示されてるURLに
                アクセスする
              </h5>
              <div className="flex items-center justify-center max-md:flex-wrap mt-8 md:mt-12">
                <figure className="max-md:w-[29vw]">
                  <img src="/images/image-access-01.png" alt="" />
                </figure>
                <p className="lg:text-[32px] md:text-[28px] [font-size:_clamp(14px,5vw,20px)] text-center font-bold font-noto lg:p-[30px] px-[2vw] md:p-5 whitespace-nowrap">
                  または
                </p>
                <figure className="max-md:w-[29vw]">
                  <img src="/images/image-access-02.png" alt="" />
                </figure>
                <p className="max-md:w-full lg:p-[30px] p-10 md:p-5">
                  <img
                    className="max-md:rotate-90 max-md:w-[80px] mx-auto"
                    src="/images/arrow.png"
                    alt=""
                  />
                </p>
                <figure className="max-md:w-[29vw]">
                  <img src="/images/image-access-03.png" alt="" />
                </figure>
              </div>
            </div>
          </div>
          <div
            ref={animateRefs}
            className="opacity-0 bg-white [box-shadow:0px_4px_44px_0px_rgba(24,_83,_160,_0.15)] rounded-[20px] mt-10 md:mt-28 px-4 py-6 md:p-10"
          >
            <div className="w-full max-w-[1060px] mx-auto pb-8 md:pb-14">
              <h5 className="text-center font-bold font-noto lg:text-[32px] md:text-[28px] [font-size:_clamp(18px,6.4vw,24px)] mt-8 md:mt-16">
              受け取りパターン2:NFTを確認して受け取る
              </h5>
              <div className="flex items-center justify-center max-md:flex-wrap mt-8 md:mt-12">
                <figure className="max-md:w-[29vw]">
                  <img src="/images/image-confirm-01.png" alt="" />
                </figure>
                <p className="max-md:w-full lg:p-[30px] p-10 md:p-5">
                  <img
                    className="max-md:rotate-90 max-md:w-[80px] mx-auto"
                    src="/images/arrow.png"
                    alt=""
                  />
                </p>
                <figure className="max-md:w-[58vw]">
                  <img src="/images/image-confirm-02.png" alt="" />
                </figure>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
