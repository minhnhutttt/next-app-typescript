'use client'

import useScrollAnimations from '@/hooks/useScrollAnimations'


const Reskilling = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative bg-[url('/assets/images/bg-reskilling.png')] bg-no-repeat bg-right-top pt-28 md:pt-[195px]">
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="w-full max-w-[1210px] relative md:pr-[70px] pr-9 md:pb-[70px] pb-9">
            <div className="w-full relative">
                <div className="relative bg-[#00030E] z-30 max-w-[1135px] bg-[url('/assets/images/bg-reskilling-01.png')]">
                    <div className="h-px"></div>
                    <div className="pr-5 md:pr-12">
                        <div className="bg-[linear-gradient(278deg,_#FF2A2A_-5.11%,_#FF9B04_78.14%)] h-16 md:h-[91px] relative -mt-[58px]">
                            <div className="flex items-center py-2">
                                <span className="md:w-[100px] w-5 bg-white h-px"></span>
                                <p className="md:text-[24px] text-[16px] font-bold text-white">AIを使いこなすってどういうこと？</p>
                                <span className="flex-1 bg-white h-px"></span>
                            </div>
                            <span className="absolute bottom-0 right-0 pl-5">
                                <img src="/assets/images/using-text.png" alt="" />
                            </span>
                        </div>
                    </div>
                    <div className="md:mt-12 mt-6">
                        <div className="px-5">
                            <div className="w-full max-w-[680px] ml-auto md:mr-[150px]">
                                <p className="xl:text-[18px] md:text-[1.406vw] text-[13px] text-white">AIを使いこなすとは、各専門領域に精通したアドバイザーを24時間365日雇用するようなものです。それも、人間の限界を超えたスピードと正確性で、いつでも必要な時に貴社の社員をサポートします。それを可能にしているのが、次に示す5つの基本能力です。</p>
                            </div>
                        </div>
                        <div className="flex md:mt-[80px] mt-10 pb-[110px]">
                            <div className="w-12 md:w-[15.625vw] xl:w-[200px] flex justify-center pt-10">
                                <p className=""><img className="max-md:w-[24px] max-xl:w-[4.531vw]" src="/assets/images/title-reskilling.png" alt="" /></p>
                            </div>
                            <div className="flex-1 pr-5">
                                <div className="w-full md:max-w-[64.063vw] xl:max-w-[820px]">
                                    <p className="xl:text-[24px] md:text-[1.875vw] text-[18px] text-center text-white pb-5">生成AIが備える5つの基本能力</p>
                                    <div className="bg-black/[0.44] border border-white/[0.44] border-t-0">
                                        <span className="block w-full bg-[linear-gradient(103deg,_#FEF877_-63.17%,_#E22B00_41.36%)] h-[3px]"></span>
                                        <div className="w-full px-4 md:px-[3.125vw] xl:px-10 py-4 text-white divide-y divide-white/[0.44]">
                                            <div className="md:py-6 py-3">
                                                <p className="lg:text-[20px] text-[16px] md:text-[2vw] font-bold"><span className="md:text-[22px]">1.</span>高度な情報処理能力</p>
                                                <p className="lg:text-[17px] text-[14px] md:text-[1.6vw] font-medium pl-3 md:pl-5 pt-3 md:pt-5">
                                                大量のデータを迅速に分析し、関連情報を抽出 <br />
                                                例：市場データから、近い将来のトレンドを予測支援
                                                </p>
                                            </div>
                                            <div className="md:py-6 py-3">
                                                <p className="lg:text-[20px] text-[16px] md:text-[2vw] font-bold"><span className="md:text-[22px]">2.</span>常時稼働の支援</p>
                                                <p className="lg:text-[17px] text-[14px] md:text-[1.6vw] font-medium pl-3 md:pl-5 pt-3 md:pt-5">
                                                24時間365日、一貫した品質でサポートを提供 <br />
                                                例：時間外のカスタマーサポートも効率的に対応
                                                </p>
                                            </div>
                                            <div className="md:py-6 py-3">
                                                <p className="lg:text-[20px] text-[16px] md:text-[2vw] font-bold"><span className="md:text-[22px]">3.</span>高速・高精度z処理</p>
                                                <p className="lg:text-[17px] text-[14px] md:text-[1.6vw] font-medium pl-3 md:pl-5 pt-3 md:pt-5">
                                                複雑な計算や分析を迅速に実行し、人的ミスを軽減 <br />
                                                    例：財務予測や在庫管理の精度向上
                                                </p>
                                            </div>
                                            <div className="md:py-6 py-3">
                                                <p className="lg:text-[20px] text-[16px] md:text-[2vw] font-bold"><span className="md:text-[22px]">4.</span>継続的な学習と更新</p>
                                                <p className="lg:text-[17px] text-[14px] md:text-[1.6vw] font-medium pl-3 md:pl-5 pt-3 md:pt-5">
                                                新しいデータを学習し、定期的にスキルをアップデート <br />
                                                    例：最新の業界動向を反映した提案の質向上
                                                </p>
                                            </div>
                                            <div className="md:py-6 py-3">
                                                <p className="lg:text-[20px] text-[16px] md:text-[2vw] font-bold"><span className="md:text-[22px]">5.</span>複数タスクの同時処理</p>
                                                <p className="lg:text-[17px] text-[14px] md:text-[1.6vw] font-medium pl-3 md:pl-5 pt-3 md:pt-5">
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
                <span className="absolute bg-[linear-gradient(180deg,_#0CD0EE_0%,_#751DBD_64.5%,_#4525A2_100%)] opacity-[0.88] w-[150%] h-full -right-9 md:right-[-75px] md:bottom-[-75px] -bottom-9"></span>
            </div>
            <div className="max-md:hidden absolute top-[270px] -right-[3.438vw] right-0 xl:-right-11 z-30">
                <img className='max-lg:w-[32.969vw]' src="/assets/images/img-rs-01.png" alt="" />
            </div>
            <div className="absolute w-9 md:w-[75px] right-0 bottom-[70px] flex items-center justify-center z-10">
                <p className="[writing-mode:vertical-rl] [text-orientation:mixed] md:text-[15px] text-[13px] text-white/70 tracking-[1.1em]">AI RESKILLING</p>
            </div>
            <div className="absolute h-9 md:h-[75px] right-[60px] bottom-0 flex items-center justify-center z-10">
                <p className="md:text-[15px] text-[13px] text-white/70 tracking-[1.1em]">AI RESKILLING</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Reskilling
