'use client'

import useScrollAnimations from '@/hooks/useScrollAnimations'

const Features = () => {
  const ref = useScrollAnimations()
  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[url('/assets/images/bg-reskilling.png')] bg-right-top bg-no-repeat pt-28 md:pt-[85px]"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="relative w-full max-w-[1310px] pb-9 pr-9 md:pb-[70px] md:pr-[70px]">
          <div className="relative w-full">
            <div className="relative z-30 max-w-[1245px] border border-[#CD5555] bg-[linear-gradient(180deg,_#FFF6D8_0%,_#EBDCC0_100%)]">
              <div className="h-px"></div>
              <div className="pr-5 md:pr-12">
                <div className="relative -ml-px -mt-[58px] h-16 max-w-[1087px] bg-[linear-gradient(278deg,_#FF2A2A_-5.11%,_#FF9B04_78.14%)] md:h-[91px]">
                  <div className="flex items-center py-2">
                    <span className="h-px w-3 bg-white md:w-[80px]"></span>
                    <p className="text-[16px] font-bold text-white md:text-[24px]">
                      eラーニング型ChatGPT研修の3つの特長
                    </p>
                    <span className="h-px flex-1 bg-white"></span>
                  </div>
                  <span className="absolute bottom-0 right-0 pl-5">
                    <img src="/assets/images/feature-text.png" alt="" />
                  </span>
                </div>
              </div>
              <div className="mt-8 bg-[url('/assets/images/bg-training-01.png')] bg-left-bottom bg-no-repeat pb-[200px] max-md:bg-[length:400px_auto] md:mt-[60px] md:pb-[500px]">
                <div className="px-5">
                  <div className="mx-auto w-full max-w-[400px] space-y-7 md:max-w-[994px]">
                    <div className="border border-black bg-white px-4 pb-4 pt-3 md:px-[30px] md:pb-[30px]">
                      <div className="flex items-center gap-4 border-b border-[#A8A7A7] pb-2">
                        <figure>
                          <img
                            className="max-md:h-8"
                            src="/assets/images/feature-number-01.png"
                            alt="1"
                          />
                        </figure>
                        <h4 className="flex-1 text-[20px] font-bold md:text-[26px]">
                          柔軟で効率的な学習方法
                        </h4>
                      </div>
                      <div className="mt-4 flex gap-5 max-md:flex-col max-md:items-center md:mt-[26px] md:gap-9">
                        <figure>
                          <img src="/assets/images/feature-img-01.png" alt="" />
                        </figure>
                        <div className="">
                          <h5 className="text-[16px] font-semibold md:text-[20px]">
                            忙しい毎日でも、AIスキルアップを実現
                          </h5>
                          <ul className="ml-8 mt-3 list-disc text-[14px] md:mt-6 md:text-[17px]">
                            <li>
                              「いつでも、どこでも」アクセス可能なeラーニング
                            </li>
                            <li>全12時間のコンパクトな構成</li>
                            <li>1時間×12回の分割学習で、無理なく継続</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="flex w-full justify-center gap-8 max-md:flex-wrap">
                      <div className="w-full border border-black bg-white px-4 pb-4 pt-2 md:w-[480px] md:px-[20px] md:pb-[36px]">
                        <div className="flex items-center gap-4 border-b border-[#A8A7A7] pb-2">
                          <figure>
                            <img
                              className="max-md:h-8"
                              src="/assets/images/feature-number-02.png"
                              alt="2"
                            />
                          </figure>
                          <h4 className="flex-1 text-[18px] font-bold md:text-[24px]">
                            実践を重視した学習内容
                          </h4>
                        </div>
                        <div className="mt-4 flex flex-col items-center gap-5 md:mt-[26px] md:gap-9">
                          <figure>
                            <img
                              src="/assets/images/feature-img-02.png"
                              alt=""
                            />
                          </figure>
                          <div className="">
                            <h5 className="text-[16px] font-semibold md:text-[20px]">
                              理論だけでなく実践で使えるAIスキルを習得
                            </h5>
                            <ul className="ml-8 mt-3 list-disc text-[14px] md:mt-4 md:text-[17px]">
                              <li>AI活用の基礎から応用まで、段階的に学習</li>
                              <li>実際の業務を想定した演習</li>
                              <li>最新のAI技術トレンドに常に対応</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="w-full border border-black bg-white px-4 pb-4 pt-2 md:w-[480px] md:px-[20px] md:pb-[36px]">
                        <div className="flex items-center gap-4 border-b border-[#A8A7A7] pb-2">
                          <figure>
                            <img
                              className="max-md:h-8"
                              src="/assets/images/feature-number-03.png"
                              alt="3"
                            />
                          </figure>
                          <h4 className="flex-1 text-[18px] font-bold md:text-[24px]">
                            ビジネスに直結するスキル習得！
                          </h4>
                        </div>
                        <div className="mt-4 flex flex-col items-center gap-5 md:mt-[26px] md:gap-9">
                          <figure>
                            <img
                              src="/assets/images/feature-img-03.png"
                              alt=""
                            />
                          </figure>
                          <div className="">
                            <h5 className="text-[16px] font-semibold md:text-[20px]">
                              学んだその日から、仕事に活かせるAIスキル
                            </h5>
                            <ul className="ml-8 mt-3 list-disc text-[14px] md:mt-4 md:text-[18px]">
                              <li>実務での具体的な使い方を解説</li>
                              <li>最新のAIツールや技術の概要も紹介</li>
                              <li>
                                生成AIの業務ソフトへの連携で業務効率化を支援
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <span className="absolute -bottom-9 -right-9 h-full w-[150%] bg-[linear-gradient(180deg,_#FBD302_18.5%,_#FF9C27_100%)] bg-cover opacity-70 md:bottom-[-75px] md:right-[-75px]">
              <span className="absolute inset-0 bg-[url('/assets/images/bg-features.png')] "></span>
            </span>
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

export default Features
