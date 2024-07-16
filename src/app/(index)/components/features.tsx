'use client'

import useScrollAnimations from '@/hooks/useScrollAnimations'


const Features = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative bg-[url('/assets/images/bg-reskilling.png')] bg-no-repeat bg-right-top pt-28 md:pt-[85px] overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="w-full max-w-[1310px] relative md:pr-[70px] pr-9 md:pb-[70px] pb-9">
            <div className="w-full relative">
                <div className="relative bg-[linear-gradient(180deg,_#FFF6D8_0%,_#EBDCC0_100%)] z-30 max-w-[1245px] border border-[#CD5555]">
                    <div className="h-px"></div>
                    <div className="pr-5 md:pr-12">
                        <div className="max-w-[1087px] bg-[linear-gradient(278deg,_#FF2A2A_-5.11%,_#FF9B04_78.14%)] -ml-px h-16 md:h-[91px] relative -mt-[58px]">
                            <div className="flex items-center py-2">
                                <span className="md:w-[100px] w-5 bg-white h-px"></span>
                                <p className="md:text-[24px] text-[16px] font-bold text-white">eラーニング型生成AI研修の5つの特長</p>
                                <span className="flex-1 bg-white h-px"></span>
                            </div>
                            <span className="absolute bottom-0 right-0 pl-5">
                                <img src="/assets/images/feature-text.png" alt="" />
                            </span>
                        </div>
                    </div>
                    <div className="md:mt-[60px] mt-8 bg-[url('/assets/images/bg-training-01.png')] bg-left-bottom bg-no-repeat max-md:bg-[length:400px_auto] pb-[200px] md:pb-[500px]">
                        <div className="px-5">
                            <div className="w-full md:max-w-[994px] max-w-[400px] mx-auto space-y-7">
                                <div className="bg-white border border-black px-4 md:px-[30px] pt-3 md:pb-[30px] pb-4">
                                    <div className="flex items-center gap-4 border-b border-[#A8A7A7] pb-2">
                                        <figure>
                                            <img className="max-md:h-8" src="/assets/images/feature-number-01.png" alt="1" />
                                        </figure>
                                        <h4 className="md:text-[26px] text-[20px] font-bold flex-1">
                                        柔軟で効率的な学習方法
                                        </h4>
                                    </div>
                                    <div className="flex md:mt-[26px] mt-4 md:gap-9 gap-5 max-md:flex-col max-md:items-center">
                                        <figure>
                                            <img src="/assets/images/feature-img-01.png" alt="" />
                                        </figure>
                                        <div className="">
                                            <h5 className="md:text-[20px] text-[16px] font-semibold">忙しい毎日でも、AIスキルアップを実現。</h5>
                                            <ul className="list-disc md:text-[17px] text-[14px] md:mt-6 mt-3 ml-8">
                                                <li>「いつでも、どこでも」アクセス可能なeラーニング</li>
                                                <li>全12時間のコンパクトな構成</li>
                                                <li>1時間×12回の分割学習で、無理なく継続</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full flex max-md:flex-wrap justify-center gap-8">
                                    <div className="bg-white border w-full md:w-[480px] border-black px-4 md:px-[20px] pt-2 md:pb-[36px] pb-4">
                                        <div className="flex items-center gap-4 border-b border-[#A8A7A7] pb-2">
                                            <figure>
                                                <img className="max-md:h-8" src="/assets/images/feature-number-02.png" alt="2" />
                                            </figure>
                                            <h4 className="md:text-[24px] text-[18px] font-bold flex-1">
                                            実践を重視した学習内容
                                            </h4>
                                        </div>
                                        <div className="flex md:mt-[26px] mt-4 md:gap-9 gap-5 flex-col items-center">
                                            <figure>
                                                <img src="/assets/images/feature-img-02.png" alt="" />
                                            </figure>
                                            <div className="">
                                                <h5 className="md:text-[20px] text-[16px] font-semibold">学んだその日から、仕事に活かせるAIスキル</h5>
                                                <ul className="list-disc md:text-[17px] text-[14px] md:mt-4 mt-3 ml-8">
                                                    <li>AI活用の基礎から応用まで、段階的に学習</li>
                                                    <li>実際の業務を想定した演習</li>
                                                    <li>最新のAI技術トレンドに常に対応</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-white border w-full md:w-[480px] border-black px-4 md:px-[20px] pt-2 md:pb-[36px] pb-4">
                                        <div className="flex items-center gap-4 border-b border-[#A8A7A7] pb-2">
                                            <figure>
                                                <img className="max-md:h-8" src="/assets/images/feature-number-03.png" alt="3" />
                                            </figure>
                                            <h4 className="md:text-[24px] text-[18px] font-bold flex-1">
                                            ビジネスに直結するスキル習得！
                                            </h4>
                                        </div>
                                        <div className="flex md:mt-[26px] mt-4 md:gap-9 gap-5 flex-col items-center">
                                            <figure>
                                                <img src="/assets/images/feature-img-03.png" alt="" />
                                            </figure>
                                            <div className="">
                                                <h5 className="md:text-[20px] text-[16px] font-semibold">学んだその日から、仕事に活かせるAIスキル</h5>
                                                <ul className="list-disc md:text-[18px] text-[14px] md:mt-4 mt-3 ml-8">
                                                    <li>実務での具体的な使い方を解説</li>
                                                    <li>最新のAIツールや技術の概要も紹介</li>
                                                    <li>生成AIの業務ソフトへの連携で業務効率化を支援</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <span className="absolute bg-[linear-gradient(180deg,_#FBD302_18.5%,_#FF9C27_100%)] opacity-70 bg-cover w-[150%] h-full -right-9 md:right-[-75px] md:bottom-[-75px] -bottom-9">
                    <span className="absolute inset-0 bg-[url('/assets/images/bg-features.png')] "></span>
                </span>
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

export default Features
