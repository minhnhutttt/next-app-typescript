'use client'

import useScrollAnimations from '@/hooks/useScrollAnimations'

const Reskilling = () => {
  const ref = useScrollAnimations()
  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[url('/assets/images/bg-reskilling.png')] bg-right-top bg-no-repeat pt-28 md:pt-[195px]"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="relative w-full max-w-[1210px] pb-9 pr-9 md:pb-[70px] md:pr-[70px]">
          <div className="relative w-full">
            <div className="relative z-30 max-w-[1135px] bg-[#00030E] bg-[url('/assets/images/bg-reskilling-01.png')]">
              <div className="h-px"></div>
              <div className="pr-5 md:pr-12">
                <div className="relative -mt-[58px] h-16 bg-[linear-gradient(278deg,_#FF2A2A_-5.11%,_#FF9B04_78.14%)] md:h-[91px]">
                  <div className="flex items-center py-2">
                    <span className="h-px w-5 bg-white md:w-[100px]"></span>
                    <p className="text-[16px] font-bold text-white md:text-[24px]">
                      AIを使いこなすってどういうこと？
                    </p>
                    <span className="h-px flex-1 bg-white"></span>
                  </div>
                  <span className="absolute bottom-0 right-0 pl-5">
                    <img src="/assets/images/using-text.png" alt="" />
                  </span>
                </div>
              </div>
              <div className="mt-6 md:mt-12">
                <div className="px-5">
                  <div className="ml-auto w-full max-w-[680px] md:mr-[150px]">
                    <p className="text-[13px] text-white md:text-[1.406vw] xl:text-[18px]">
                      AIを使いこなすとは、各専門領域に精通したアドバイザーを24時間365日雇用するようなものです。それも、人間の限界を超えたスピードと正確性で、いつでも必要な時に貴社の社員をサポートします。それを可能にしているのが、次に示す5つの基本能力です。
                    </p>
                  </div>
                </div>
                <div className="mt-10 flex pb-[110px] md:mt-[80px]">
                  <div className="flex w-12 justify-center pt-10 md:w-[15.625vw] xl:w-[200px]">
                    <p className="">
                      <img
                        className="max-xl:w-[4.531vw] max-md:w-[24px]"
                        src="/assets/images/title-reskilling.png"
                        alt=""
                      />
                    </p>
                  </div>
                  <div className="flex-1 pr-5">
                    <div className="w-full md:max-w-[64.063vw] xl:max-w-[820px]">
                      <p className="pb-5 text-center text-[18px] text-white md:text-[1.875vw] xl:text-[24px]">
                        生成AIが備える5つの基本能力
                      </p>
                      <div className="border border-t-0 border-white/[0.44] bg-black/[0.44]">
                        <span className="block h-[3px] w-full bg-[linear-gradient(103deg,_#FEF877_-63.17%,_#E22B00_41.36%)]"></span>
                        <div className="w-full divide-y divide-white/[0.44] px-4 py-4 text-white md:px-[3.125vw] xl:px-10">
                          <div className="py-3 md:py-6">
                            <p className="text-[16px] font-bold md:text-[2vw] lg:text-[20px]">
                              <span className="md:text-[22px]">1.</span>
                              高度な情報処理能力
                            </p>
                            <p className="pl-3 pt-3 text-[14px] font-medium md:pl-5 md:pt-5 md:text-[1.6vw] lg:text-[17px]">
                              大量のデータを迅速に分析し、関連情報を抽出 <br />
                              例：市場データから、近い将来のトレンドを予測支援
                            </p>
                          </div>
                          <div className="py-3 md:py-6">
                            <p className="text-[16px] font-bold md:text-[2vw] lg:text-[20px]">
                              <span className="md:text-[22px]">2.</span>
                              常時稼働の支援
                            </p>
                            <p className="pl-3 pt-3 text-[14px] font-medium md:pl-5 md:pt-5 md:text-[1.6vw] lg:text-[17px]">
                              24時間365日、一貫した品質でサポートを提供 <br />
                              例：時間外のカスタマーサポートも効率的に対応
                            </p>
                          </div>
                          <div className="py-3 md:py-6">
                            <p className="text-[16px] font-bold md:text-[2vw] lg:text-[20px]">
                              <span className="md:text-[22px]">3.</span>
                              高速・高精度処理
                            </p>
                            <p className="pl-3 pt-3 text-[14px] font-medium md:pl-5 md:pt-5 md:text-[1.6vw] lg:text-[17px]">
                              複雑な計算や分析を迅速に実行し、人的ミスを軽減{' '}
                              <br />
                              例：財務予測や在庫管理の精度向上
                            </p>
                          </div>
                          <div className="py-3 md:py-6">
                            <p className="text-[16px] font-bold md:text-[2vw] lg:text-[20px]">
                              <span className="md:text-[22px]">4.</span>
                              継続的な学習と更新
                            </p>
                            <p className="pl-3 pt-3 text-[14px] font-medium md:pl-5 md:pt-5 md:text-[1.6vw] lg:text-[17px]">
                              新しいデータを学習し、定期的にスキルをアップデート{' '}
                              <br />
                              例：最新の業界動向を反映した提案の質向上
                            </p>
                          </div>
                          <div className="py-3 md:py-6">
                            <p className="text-[16px] font-bold md:text-[2vw] lg:text-[20px]">
                              <span className="md:text-[22px]">5.</span>
                              複数タスクの同時処理
                            </p>
                            <p className="pl-3 pt-3 text-[14px] font-medium md:pl-5 md:pt-5 md:text-[1.6vw] lg:text-[17px]">
                              複数の業務を並行して効率的に処理 <br />
                              例：異なる部門の業務を同時に最適化し、全体効率を改善
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <span className="absolute -bottom-9 -right-9 h-full w-[150%] bg-[linear-gradient(180deg,_#0CD0EE_0%,_#751DBD_64.5%,_#4525A2_100%)] opacity-[0.88] md:bottom-[-75px] md:right-[-75px]"></span>
          </div>
          <div className="absolute -right-[3.438vw] right-0 top-[270px] z-30 max-md:hidden xl:-right-11">
            <img
              className="max-lg:w-[32.969vw]"
              src="/assets/images/img-rs-01.png"
              alt=""
            />
          </div>
          <div className="absolute bottom-[70px] right-0 z-10 flex w-9 items-center justify-center md:w-[75px]">
            <p className="text-[13px] tracking-[1.1em] text-white/70 [text-orientation:mixed] [writing-mode:vertical-rl] md:text-[15px]">
              AI RESKILLING
            </p>
          </div>
          <div className="absolute bottom-0 right-[60px] z-10 flex h-9 items-center justify-center md:h-[75px]">
            <p className="text-[13px] tracking-[1.1em] text-white/70 md:text-[15px]">
              AI RESKILLING
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reskilling
