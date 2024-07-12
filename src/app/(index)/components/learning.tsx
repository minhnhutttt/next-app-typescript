'use client'

import useScrollAnimations from '@/hooks/useScrollAnimations'


const Learning = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative px-5 mt-16 md:mt-[135px]">
      <div className="w-full max-w-[1354px] mx-auto border-[5px] border-[#FD9898] rounded-[40px] md:rounded-[77px] bg-[linear-gradient(180deg,_#FFF_7.59%,_#FFE790_63.96%,_#FEDD9B_100%)] overflow-hidden pt-8 md:pt-[57px] px-5">
        <div className="bg-[linear-gradient(278deg,_#FF2A2A_-5.11%,_#FF9B04_78.14%)] h-16 md:h-[91px] relative w-full max-w-[1096px] mx-auto rounded-[27px]">
            <div className="flex items-center py-2 gap-3">
                <span className="flex-1 bg-white h-px"></span>
                <p className="md:text-[24px] text-[16px] font-bold text-white text-center">なぜ当社のeラーニングが、<br className="md:hidden" />AIスキル習得の最適解なのか</p>
                <span className="flex-1 bg-white h-px"></span>
            </div>
            <span className="absolute -bottom-1 md:bottom-[-16px] inset-x-0 flex justify-center px-5 opacity-50">
                <img src="/assets/images/learning-text.png" alt="" />
            </span>
        </div>
        <div className="w-full max-w-[1234px] mx-auto mt-8 md:mt-11">
            <div className="flex max-lg:flex-col-reverse max-lg:items-center mb-10 md:mb-20 max-lg:gap-10 max-md:gap-6">
                <div className="flex-1">
                    <h4 className="font-bold md:text-[32px] text-[24px] px-2 border-b border-black pb-3">他社の研修が貴社にマッチしない理由</h4>
                    <p className="md:text-[20px] text-[16px] pt-3 md:pl-[40px]">AI活用は、もはや選択肢ではありません。社員がAIを使えなければ未来の競争力は勢いを増して低下するでしょう。全社員のAIスキル向上が急務です。</p>
                    <div className="w-full max-w-[568px] bg-white border border-[#AEAEAE] mx-auto mt-5 p-4 md:p-8">
                        <ul className="list-disc list-inside md:text-[18px] text-[14px] space-y-1">
                            <li>大企業向けの高額な費用：中小企業の予算では厳しい</li>
                            <li>長期のoff-JT：学びに能動性がなく身につかない</li>
                            <li>集合研修：業務に支障が出る</li>
                            <li>汎用的な内容：実務に直結しづらい</li>
                            <li>一度きりの学習：急速に進化するAI技術に追いつけない</li>
                        </ul>
                    </div>
                </div>
                <figure className="md:mx-[50px]">
                    <img src="/assets/images/learning-img-01.png" alt="" />
                </figure>
            </div>
            <div className="w-full max-w-[754px] mx-auto md:rounded-[64px] rounded-[32px] relative overflow-hidden">
                <span className="absolute inset-0 bg-[linear-gradient(283deg,_#671DA1_13.34%,_#C96BEA_65.08%)] opacity-[0.88]"></span>
                <div className="relative text-white font-bold py-3 px-6 md:px-10">
                    <p className="text-center md:text-[20px] text-[15px] w-full max-w-[500px] mx-auto leading-[1.15]">
                    私たちは、低コスト、短期間かつ実用的で最新のプログラムをeラーニングとして提供いたします。
                    </p>
                    <h4 className="text-center md:text-[27px] text-[21px] mt-3">当社のeラーニングが貴社に最適な4つの理由</h4>
                </div>
            </div>
            <div className="w-full max-w-[1166px] mx-auto mt-10 md:space-y-9 space-y-5">
                <div className="flex items-start max-md:flex-col max-md:items-center gap-5 md:gap-9">
                    <div className="w-full md:w-1/2 max-w-[545px] rounded-[20px] border-[3px] border-[#FFBE5E] bg-white p-3">
                        <div className="flex items-center gap-2 border-b border-[#A8A7A7] pb-2.5">
                            <div className="flex items-center flex-1 gap-3">
                                <figure>
                                    <img className="max-md:h-8" src="/assets/images/learning-number-01.png" alt="" />
                                </figure>
                                <p className="font-bold lg:text-[22px] md:text-[19px] text-[16px] flex-1">コストパフォーマンスの高さ</p>
                            </div>
                            <figure className="max-md:w-[60px] max-lg:w-[80px]">
                                <img src="/assets/images/learning-bubble-01.png" alt="" />
                            </figure>
                        </div>
                        <p className="md:text-[17px] text-[14px] py-4 px-3">
                            業務への活用を第一に要点を絞ることで提供価格をおさえ、助成金活用で実質負担を大幅軽減
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 max-w-[545px] rounded-[20px] border-[3px] border-[#FFBE5E] bg-white p-3 md:mt-9">
                        <div className="flex items-center gap-2 border-b border-[#A8A7A7] pb-2.5">
                            <div className="flex items-center flex-1 gap-2">
                                <figure>
                                    <img className="max-md:h-8" src="/assets/images/learning-number-02.png" alt="" />
                                </figure>
                                <p className="font-bold lg:text-[22px] md:text-[19px] text-[16px] flex-1">業務に影響しない柔軟な学習</p>
                            </div>
                            <figure className="max-md:w-[60px] max-lg:w-[80px]">
                                <img src="/assets/images/learning-bubble-02.png" alt="" />
                            </figure>
                        </div>
                        <p className="md:text-[17px] text-[14px] py-4 px-3">
                        eラーニングでいつでも受講でき、1回1時間×12回の短時間学習が業務との両立を容易にさせる
                        </p>
                    </div>
                </div>
                <div className="flex items-start max-md:flex-col max-md:items-center gap-5 md:gap-9">
                    <div className="w-full md:w-1/2 max-w-[545px] rounded-[20px] border-[3px] border-[#FFBE5E] bg-white p-3 md:-mt-9">
                        <div className="flex items-center gap-2 border-b border-[#A8A7A7] pb-2.5">
                            <div className="flex items-center flex-1 gap-2">
                                <figure>
                                    <img className="max-md:h-8" src="/assets/images/learning-number-03.png" alt="" />
                                </figure>
                                <p className="font-bold lg:text-[22px] md:text-[19px] text-[16px] flex-1">すぐに業務で使える実践的な内容</p>
                            </div>
                            <figure className="max-md:w-[60px] max-lg:w-[80px]">
                                <img src="/assets/images/learning-bubble-03.png" alt="" />
                            </figure>
                        </div>
                        <p className="md:text-[17px] text-[14px] py-4 px-3">
                        業務を前提とした講義で社員に能動性が生まれ、学んだその日から業務に活用できるスキルを習得
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 max-w-[545px] rounded-[20px] border-[3px] border-[#FFBE5E] bg-white p-3">
                        <div className="flex items-center gap-2 border-b border-[#A8A7A7] pb-2.5">
                            <div className="flex items-center flex-1 gap-3">
                                <figure>
                                    <img className="max-md:h-8" src="/assets/images/learning-number-04.png" alt="" />
                                </figure>
                                <p className="font-bold lg:text-[22px] md:text-[19px] text-[16px] flex-1">継続的な学習と最新情報の
                                アップデート</p>
                            </div>
                            <figure className="max-md:w-[60px] max-lg:w-[80px]">
                                <img src="/assets/images/learning-bubble-04.png" alt="" />
                            </figure>
                        </div>
                        <p className="md:text-[17px] text-[14px] py-4 px-3">
                        業務への活用を第一に要点を絞ることで提供価格をおさえ、助成金活用で実質負担を大幅軽減
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Learning
