export default function Exchange() {
  return (
    <section className="relative px-5 pt-15 md:pt-[90px]">
      <div className="mx-auto w-full max-w-[1168px]">
        <h4 className="fade-up">
          <img src="/assets/images/logo-text.png" alt="" />
        </h4>
        <div className="mt-8 flex max-lg:flex-col md:mt-12">
          <div className="fade-up flex items-center gap-5 max-lg:justify-center max-lg:py-10 lg:w-[428px]">
            <span>
              <img className="max-md:w-12" src="/assets/images/ic-dwu.png" alt="" />
            </span>
            <span className="text-[24px] font-extrabold tracking-[0.25em] md:text-[36px]">
              換金もできます
            </span>
          </div>
          <div className="flex-1 border-[#1A68B0] max-lg:border-t md:max-xl:pl-5 lg:border-l">
            <div className="py-10 max-lg:mx-auto md:w-[602px] md:py-14 lg:ml-auto">
              <p className="fade-up text-[16px] leading-[1.2] md:text-[24px]">
                ディーダブリューゲート
              </p>
              <p className="fade-up u-text-gradient text-[29px] leading-[1.2] font-extrabold md:text-[48px]">
                DWU GATE<span className="text-[28px] md:text-[40px]">で</span>簡単換金！
              </p>
              <div className="fade-up flex justify-center pt-3">
                <p className="text-[13px] md:text-[16px]">
                  全部スマホでできるから、めちゃくちゃ便利！
                  <br />
                  貯めたDWUは、いざという時に現金化もできるんです。
                </p>
              </div>
              <div className="mx-auto mt-6 w-[280px] max-md:space-y-2 md:mt-14 md:w-[342px]">
                <div className="fade-up flex items-center gap-4 md:gap-7">
                  <span className="flex size-9 items-center justify-center rounded-xl border border-[#C1BCBC] bg-[#F7FFFA] pr-2 text-center text-[20px] font-bold text-[#1A68B0] italic md:text-[28px]">
                    1
                  </span>
                  <span className="text-[18px] leading-[2.2] font-medium md:text-[24px]">
                    DWU Gateにアクセス
                  </span>
                </div>
                <div className="fade-up flex items-center gap-4 md:gap-7">
                  <span className="flex size-9 items-center justify-center rounded-xl border border-[#C1BCBC] bg-[#F7FFFA] pr-2 text-center text-[20px] font-bold text-[#1A68B0] italic md:text-[28px]">
                    2
                  </span>
                  <span className="text-[18px] leading-[2.2] font-medium md:text-[24px]">
                    DWUをUSDTに交換
                  </span>
                </div>
                <div className="fade-up flex items-center gap-4 md:gap-7">
                  <span className="flex size-9 items-center justify-center rounded-xl border border-[#C1BCBC] bg-[#F7FFFA] pr-2 text-center text-[20px] font-bold text-[#1A68B0] italic md:text-[28px]">
                    3
                  </span>
                  <span className="text-[18px] leading-[2.2] font-medium md:text-[24px]">
                    USDTをETHに交換
                  </span>
                </div>
                <div className="fade-up my-2 flex justify-center border-y border-dashed border-[#1A68B0] py-2.5">
                  <div className="">
                    <div className="text-[15px] leading-[2.2] font-medium tracking-[0.3em] md:text-[18px]">
                      <span className="text-[#FE2C55]">↑</span>
                      <span>ここまでDWU GATE</span>
                    </div>
                    <div className="text-[15px] leading-[2.2] font-medium tracking-[0.3em] md:text-[18px]">
                      <span className="text-[#FE2C55]">↓</span>
                      <span>ここから日本の取引所</span>
                    </div>
                  </div>
                </div>
                <div className="fade-up flex items-center gap-4 md:gap-7">
                  <span className="flex size-9 items-center justify-center rounded-xl border border-[#C1BCBC] bg-[#F7FFFA] pr-2 text-center text-[20px] font-bold text-[#1A68B0] italic md:text-[28px]">
                    4
                  </span>
                  <span className="text-[18px] leading-[2.2] font-medium md:text-[24px]">
                    ETHを日本円に換金
                  </span>
                </div>
              </div>
              <div className="fade-up mt-10 flex justify-center md:mt-14">
                <a
                  href="https://dwu-gate.io/ja"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-14 w-[250px] items-center justify-center rounded-lg bg-[#1A68B0] text-[18px] font-semibold tracking-widest [box-shadow:0_10px_27px_0_rgba(0,_0,_0,_0.25)] md:h-[74px] md:w-[378px] md:text-[24px]"
                >
                  DWU GATEを見てみる
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
