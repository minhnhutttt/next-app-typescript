'use client'

import useScrollAnimations from '@/hooks/useScrollAnimations'

const Training = () => {
  const ref = useScrollAnimations()
  return (
    <section ref={ref} className="relative overflow-hidden pt-20 md:pt-[110px]">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="relative ml-auto w-full max-w-[1284px] pb-9 md:pb-[70px]">
          <div className="relative w-full">
            <div className="relative z-30 ml-auto">
              <div className="h-px"></div>
              <div className="pl-5 md:pl-12">
                <div className="relative -mt-[58px] ml-auto h-16 w-full max-w-[1072px] bg-[linear-gradient(278deg,_#FF2A2A_-5.11%,_#FF9B04_78.14%)] md:h-[91px]">
                  <div className="flex items-center py-2">
                    <span className="h-px flex-1 bg-white"></span>
                    <p className="text-[15px] font-bold text-white md:text-[24px]">
                      1ヶ月の集中トレーニングが、AI活用の扉を開く
                    </p>
                    <span className="h-px flex-1 bg-white"></span>
                  </div>
                  <span className="absolute inset-x-0 bottom-0 flex items-center justify-center px-5 md:-bottom-3">
                    <img src="/assets/images/training-text.png" alt="" />
                  </span>
                </div>
              </div>
              <div className="mt-6 px-5 pb-9 md:mt-7">
                <div className="mx-auto flex w-full max-w-[1172px] max-md:flex-col max-md:items-center">
                  <figure className="max-lg:w-1/3 max-md:w-auto">
                    <img src="/assets/images/img-training.png" alt="" />
                  </figure>
                  <div className="flex-1 max-md:mt-10">
                    <p className="text-[15px] font-semibold md:text-[18px]">
                      このプログラムは、AIへの第一歩を踏み出すきっかけとなります。
                      短期間で学ぶAIの基礎と実践は、社員一人ひとりの中に新たな可能性の種を植え付けます。
                    </p>
                    <div className="mx-auto mt-9 w-full max-w-[736px] md:mt-14 md:px-5">
                      <p className="mb-6 text-[16px] font-bold md:mb-10 md:text-center md:text-[24px]">
                        最大の目的は、社員がAIの潜在力を理解し、
                        <br />
                        日々の業務でその活用方法を積極的に考え始めること。
                      </p>
                      <div className="bg-white/80 px-5 py-5 text-[14px] md:px-8 md:py-7 md:text-[16px]">
                        AIという新たな視点で業務を見直すことで、
                        社員の創造性が刺激され、会社全体のイノベーションが加速します。短期集中だからこそ、全社一丸となってAIへの理解を深め、
                        その後の継続的な学びと実践につながる強固な基盤を築けるのです。
                        <br />
                        <br />
                        この1ヶ月が、貴社のAI活用の出発点となり、
                        そこから続く長期的な成長の礎となるでしょう。
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <span className="absolute bottom-0 left-0 h-full w-[150%] bg-[url('/assets/images/bg-training.png')] bg-cover"></span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Training
