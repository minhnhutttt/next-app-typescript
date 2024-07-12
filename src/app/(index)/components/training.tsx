'use client'

import useScrollAnimations from '@/hooks/useScrollAnimations'

const Training = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative pt-20 md:pt-[110px] overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="w-full max-w-[1284px] ml-auto relative md:pb-[70px] pb-9">
            <div className="w-full relative">
                <div className="relative z-30 ml-auto">
                    <div className="h-px"></div>
                    <div className="pl-5 md:pl-12">
                        <div className="bg-[linear-gradient(278deg,_#FF2A2A_-5.11%,_#FF9B04_78.14%)] h-16 md:h-[91px] relative -mt-[58px] w-full max-w-[1072px] ml-auto">
                            <div className="flex items-center py-2">
                                <span className="flex-1 bg-white h-px"></span>
                                <p className="md:text-[24px] text-[15px] font-bold text-white">1ヶ月の集中トレーニングが、AI活用の扉を開く</p>
                                <span className="flex-1 bg-white h-px"></span>
                            </div>
                            <span className="absolute bottom-0 md:-bottom-3 inset-x-0 px-5 flex justify-center items-center">
                                <img src="/assets/images/training-text.png" alt="" />
                            </span>
                        </div>
                    </div>
                    <div className="md:mt-7 pb-9 mt-6 px-5">
                      <div className="flex w-full max-w-[1172px] mx-auto max-md:flex-col max-md:items-center">
                        <figure className='max-md:w-auto max-lg:w-1/3'>
                          <img src="/assets/images/img-training.png" alt="" />
                        </figure>
                        <div className="flex-1 max-md:mt-10">
                          <p className="md:text-[18px] text-[15px] font-semibold">
                          このプログラムは、AIへの第一歩を踏み出すきっかけとなります。 短期間で学ぶAIの基礎と実践は、社員一人ひとりの中に新たな可能性の種を植え付けます。
                          </p>
                          <div className="w-full max-w-[736px] mx-auto md:mt-14 mt-9 px-5">
                            <p className="text-center md:text-[24px] text-[16px] font-bold mb-6 md:mb-10">
                              最大の目的は、社員がAIの潜在力を理解し、<br />
                              日々の業務でその活用方法を積極的に考え始めること。
                            </p>
                            <div className="bg-white/80 md:py-7 py-5 px-5 md:px-8 md:text-[16px] text-[14px]">
                              AIという新たな視点で業務を見直すことで、 社員の創造性が刺激され、会社全体のイノベーションが加速します。短期集中だからこそ、全社一丸となってAIへの理解を深め、 その後の継続的な学びと実践につながる強固な基盤を築けるのです。<br />
                              <br />
                              この1ヶ月が、貴社のAI活用の出発点となり、 そこから続く長期的な成長の礎となるでしょう。
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
                <span className="absolute bg-[url('/assets/images/bg-training.png')] bg-cover w-[150%] h-full left-0 bottom-0"></span>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Training
