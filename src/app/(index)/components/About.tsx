export default function About() {
  return (
    <section className="overflow-hidden pt-10 pb-20 md:pt-[55px] md:pb-[120px]">
      <div className="relative mx-auto w-full max-w-[1440px]">
        <div className="absolute inset-0 flex justify-end pt-10">
          <span className="-mr-20">
            <img src="/assets/images/bg-logo.png" alt="" />
          </span>
        </div>
        <div className="relative px-5">
          <h2 className="fade-up font-audiowide text-center text-[36px] leading-none font-bold tracking-widest text-[#01FFAA] md:text-[75px] lg:text-[100px]">
            <p>COIN</p>
            <p className="md:ml-16 lg:ml-30">
              TOGETHER
              <span className="font-mono text-[30px] tracking-normal md:text-[64px]">とは</span>
            </p>
          </h2>
          <div className="mx-auto mt-12 w-full max-w-[1040px] md:mt-20">
            <div className="fade-up relative border border-[#FF3F1F] md:w-[646px]">
              <div className="absolute inset-0 bg-black/40 backdrop-blur-[10px] backdrop-filter"></div>
              <div className="relative px-4 py-10 md:px-7.5 md:py-15">
                <span className="absolute -top-6 -left-4 max-md:w-[160px] md:-top-10 md:left-2">
                  <img className="fade-up" src="/assets/images/bubble-about.png" alt="" />
                </span>
                <h3 className="fade-up mb-5 text-center text-[16px] leading-[1.35] font-bold md:mb-8 md:text-[24px]">
                  <span className="text-[24px] md:text-[48px]">DWU</span>がもらえる <br />
                  COIN TOGETHER(コイントゥギャザー)
                </h3>
                <div className="fade-up flex items-center">
                  <span className="size-1.5 rounded-full bg-[#FE2C55]"></span>
                  <span className="h-0.5 flex-1 bg-[#F93E3A]"></span>
                  <span className="size-1.5 rounded-full bg-[#FE2C55]"></span>
                </div>
                <div className="px-3 pt-5 md:px-6 md:pt-7.5">
                  <p className="fade-up text-[15px] md:text-[18px]">
                    日常の「アクション」でDWUなどのデジタル資産がもらえちゃう新しいサービスです！
                  </p>
                  <div className="fade-up flex justify-center pt-6">
                    <div className="">
                      <ul className="text-[15px] leading-relaxed font-semibold md:text-[20px]">
                        {[
                          'お店に行くだけ',
                          '買い物するだけ',
                          'マップ上のNFTをもらいに行くだけ',
                          '条件をクリアするだけ',
                        ].map((text, index) => (
                          <li key={index}>
                            <p className="inline-flex gap-1 border-b border-[#FFBE0B]">
                              <img src="/assets/images/ic-pin.svg" alt="" />
                              <span className="">{text}</span>
                            </p>
                          </li>
                        ))}
                      </ul>
                      <div className="fade-up flex items-center justify-center pt-2">
                        <img src="/assets/images/ic-arrows.png" alt="" />
                      </div>
                      <p className="fade-up text-center text-[20px] font-black tracking-widest md:text-[36px]">
                        <span className="text-[28px] md:text-[48px]">DWU</span>をゲット!!
                      </p>
                    </div>
                  </div>
                  <p className="fade-up pt-2 text-[13px] md:text-[16px]">
                    普通のポイントとは違って、もらった「DWUは1DWU=1ドル」の価値があるんです。つまり、いつもの何気ない行動が
                    <span className="text-[#FF3F1F]">実質ドルに変わる新体験</span>
                    ってこと！すごくない!?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
