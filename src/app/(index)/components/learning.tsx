'use client'

import useScrollAnimations from '@/hooks/useScrollAnimations'
import Form from './form'

const Learning = () => {
  const ref = useScrollAnimations()
  return (
    <section ref={ref} className="relative mt-16 px-5 md:mt-[135px]">
      <div className="mx-auto w-full max-w-[1354px] overflow-hidden rounded-[40px] border-[5px] border-[#FD9898] bg-[linear-gradient(180deg,_#FFF_7.59%,_#FFE790_63.96%,_#FEDD9B_100%)] px-5 pb-12 pt-8 md:rounded-[77px] md:pb-[93px] md:pt-[57px]">
        <div className="relative mx-auto h-20 w-full max-w-[1096px] rounded-[27px] bg-[linear-gradient(278deg,_#FF2A2A_-5.11%,_#FF9B04_78.14%)] md:h-[91px]">
          <div className="flex items-center gap-3 py-2">
            <span className="h-px flex-1 bg-white"></span>
            <p className="text-center text-[16px] font-bold text-white md:text-[24px]">
              なぜ当社のeラーニングが、
              <br className="md:hidden" />
              AIスキル習得の最適解なのか
            </p>
            <span className="h-px flex-1 bg-white"></span>
          </div>
          <span className="absolute inset-x-0 -bottom-1 flex justify-center px-5 opacity-50 md:bottom-[-16px]">
            <img src="/assets/images/learning-text.png" alt="" />
          </span>
        </div>
        <div className="mx-auto mt-8 w-full max-w-[1234px] md:mt-11">
          <div className="mb-10 flex max-lg:flex-col-reverse max-lg:items-center max-lg:gap-10 max-md:gap-6 md:mb-20">
            <div className="flex-1">
              <h4 className="border-b border-black px-2 pb-3 text-[24px] font-bold md:text-[32px]">
                他社の研修が貴社にマッチしない理由
              </h4>
              <div className="mx-auto mt-5 w-full max-w-[568px] md:mt-8">
                <div className="border border-[#AEAEAE] bg-white p-4 md:p-8">
                  <ul className="list-inside list-disc space-y-1 text-[14px] md:text-[18px]">
                    <li>大企業向けの高額な費用：中小企業の予算では厳しい</li>
                    <li>長期のoff-JT：学びに能動性がなく身につかない</li>
                    <li>集合研修：業務に支障が出る</li>
                    <li>汎用的な内容：実務に直結しづらい</li>
                    <li>一度きりの学習：急速に進化するAI技術に追いつけない</li>
                  </ul>
                </div>
                <p className="pt-3 text-[16px] md:text-[20px]">
                  AI活用は、もはや選択肢ではありません。社員がAIを使えなければ未来の競争力は勢いを増して低下するでしょう。全社員のAIスキル向上が急務です。
                </p>
              </div>
            </div>
            <figure className="md:mx-[50px]">
              <img src="/assets/images/learning-img-01.png" alt="" />
            </figure>
          </div>
          <div className="relative mx-auto w-full max-w-[754px] overflow-hidden rounded-[32px] md:rounded-[64px]">
            <span className="absolute inset-0 bg-[linear-gradient(283deg,_#671DA1_13.34%,_#C96BEA_65.08%)] opacity-[0.88]"></span>
            <div className="relative px-6 py-3 font-bold text-white md:px-10">
              <h4 className="text-center text-[21px] md:text-[27px]">
                当社のeラーニングが貴社に最適な3つの理由
              </h4>
            </div>
          </div>
          <p className="mx-auto w-full max-w-[540px] py-4 text-center text-[16px] font-bold md:text-[20px]">
            私たちは「低コスト」「短期間」「実用的で最新」の{' '}
            <br className="max-md:hidden" />
            プログラムをeラーニングとして提供いたします。
          </p>
          <div className="relative mx-auto mt-3 w-full max-w-[1166px] pt-7">
            <span className="absolute left-1/2 top-10 size-[545px] -translate-x-1/2 md:top-0">
              <img src="/assets/images/circle.png" alt="" />
            </span>
            <div className=" space-y-10 lg:space-y-20">
              <div className="relative flex items-start justify-center gap-5 max-md:flex-col max-md:items-center md:gap-9">
                <div className="w-full max-w-[545px] rounded-[20px] border-[3px] border-[#FFBE5E] bg-white p-3 md:w-1/2">
                  <div className="flex items-center gap-2 border-b border-[#A8A7A7] pb-2.5">
                    <div className="flex flex-1 items-center gap-3">
                      <figure>
                        <img
                          className="max-md:h-8"
                          src="/assets/images/learning-number-01.png"
                          alt=""
                        />
                      </figure>
                      <p className="flex-1 text-[16px] font-bold md:text-[19px] lg:text-[22px]">
                        コストパフォーマンスの高さ
                      </p>
                    </div>
                    <figure className="max-lg:w-[80px] max-md:w-[60px]">
                      <img src="/assets/images/learning-bubble-01.png" alt="" />
                    </figure>
                  </div>
                  <p className="px-3 py-4 text-[14px] md:text-[17px]">
                    ChatGPT研修に特化し、かつ業務への活用を第一に要点を絞ることで提供価格をおさえ、助成金活用で実質負担を大幅軽減
                  </p>
                </div>
              </div>
              <div className="relative flex items-start gap-10 max-md:flex-col max-md:items-center lg:gap-20">
                <div className="w-full max-w-[545px] rounded-[20px] border-[3px] border-[#FFBE5E] bg-white p-3 md:w-1/2">
                  <div className="flex items-center gap-2 border-b border-[#A8A7A7] pb-2.5">
                    <div className="flex flex-1 items-center gap-2">
                      <figure>
                        <img
                          className="max-md:h-8"
                          src="/assets/images/learning-number-02.png"
                          alt=""
                        />
                      </figure>
                      <p className="flex-1 text-[16px] font-bold md:text-[19px] lg:text-[22px]">
                        業務に影響しない柔軟な学習
                      </p>
                    </div>
                    <figure className="max-lg:w-[80px] max-md:w-[60px]">
                      <img src="/assets/images/learning-bubble-02.png" alt="" />
                    </figure>
                  </div>
                  <p className="px-3 py-4 text-[14px] md:text-[17px]">
                    eラーニングでいつでも受講でき、1回1時間×12回の短時間学習が業務との両立を容易にさせる
                  </p>
                </div>
                <div className="w-full max-w-[545px] rounded-[20px] border-[3px] border-[#FFBE5E] bg-white p-3 md:w-1/2">
                  <div className="flex items-center gap-2 border-b border-[#A8A7A7] pb-2.5">
                    <div className="flex flex-1 items-center gap-2">
                      <figure>
                        <img
                          className="max-md:h-8"
                          src="/assets/images/learning-number-03.png"
                          alt=""
                        />
                      </figure>
                      <p className="flex-1 text-[16px] font-bold md:text-[19px] lg:text-[22px]">
                        すぐに業務で使える実践的な内容
                      </p>
                    </div>
                    <figure className="max-lg:w-[80px] max-md:w-[60px]">
                      <img src="/assets/images/learning-bubble-03.png" alt="" />
                    </figure>
                  </div>
                  <p className="px-3 py-4 text-[14px] md:text-[17px]">
                    業務を前提とした講義で社員に能動性が生まれ、学んだその日から業務に活用できるスキルを習得
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 flex justify-center md:mt-16">
            <img src="/assets/images/triagle-02.png" alt="" />
          </div>
          <div className="mt-7 scroll-mt-24 md:mt-10" id="contact">
            <h3 className="text-center text-[18px] font-bold md:text-[24px]">
              ＼ eラーニングで学ぶ ／<br />
              当社のChatGPT研修へ <br />
              まずはご相談ください（無料）
            </h3>
          </div>
          <div className="mt-6 flex items-center justify-center">
            <div className="w-[874px] bg-white p-5 md:p-10">
              <div className="mx-auto w-full max-w-[600px]">
                <p className="text-center text-[14px] font-bold text-[#7AAAFE] md:text-[18px]">
                  Contact
                </p>

                <Form />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Learning
