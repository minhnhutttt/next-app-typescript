'use client'

import useScrollAnimations from '@/hooks/useScrollAnimations'
import FaqItem, { FaqItemPropsType } from './FaqItem'

const faqData: FaqItemPropsType[] = [
  {
    id: '01',
    question: 'どんなプロジェクトが多いですか？',
    answer: (
      <>
        A.COIN TOGETHERは、日常の生活費や支出を通じて、イーサリアム（ETH）などのデジタル資産を獲得できる新しいサービスです。電気代やガス代、カフェでの飲食など、普段の消費がそのまま資産形成につながります。
      </>
    ),
  },
  {
    id: '02',
    question: '社内の雰囲気はどうですか？',
    answer: (
      <>
        A.COIN TOGETHERは、日常の生活費や支出を通じて、イーサリアム（ETH）などのデジタル資産を獲得できる新しいサービスです。電気代やガス代、カフェでの飲食など、普段の消費がそのまま資産形成につながります。
      </>
    ),
  },
  {
    id: '03',
    question: 'ROGYXでの仕事は楽しいですか？',
    answer: (
      <>
        楽しいです！！！！
      </>
    ),
  },
  {
    id: '04',
    question: 'ROGYXでの仕事は楽しいですか？',
    answer: (
      <>
        楽しいです！！！！
      </>
    ),
  },
]

const FAQ = () => {
  const ref = useScrollAnimations()

  return (
    <section
      ref={ref}
      id="faq"
      className="px-5 pb-12 pt-10 md:pb-[90px] md:pt-[60px]"
    >
      <div className="mx-auto w-full max-w-[920px]">
        <h3 className="text-center text-[30px] font-lalezar md:text-[50px]">
        よくある質問
        </h3>
        <div className="mx-auto mt-5 w-full space-y-[10px] md:mt-[40px]">
          {faqData.map(({ id, question, answer }) => (
            <FaqItem key={id} id={id} question={question} answer={answer} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
