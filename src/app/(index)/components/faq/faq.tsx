'use client'

import useScrollAnimations from '@/hooks/useScrollAnimations'
import FaqItem from './faqItem'
import { FaqItemPropsType } from './faqItem'

const faqData: FaqItemPropsType[] = [
  {
    id: '1',
    question: 'タイトルテキストが入ります。',
    answer: (
      <>
        詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。
      </>
    ),
  },
  {
    id: '2',
    question: 'タイトルテキストが入ります。',
    answer: (
      <>
        詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。
      </>
    ),
  },
  {
    id: '3',
    question: 'タイトルテキストが入ります。',
    answer: (
      <>
        詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。
      </>
    ),
  },
  {
    id: '4',
    question: 'タイトルテキストが入ります。',
    answer: (
      <>
        詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。
      </>
    ),
  },
  {
    id: '5',
    question: 'タイトルテキストが入ります。',
    answer: (
      <>
        詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。
      </>
    ),
  },
]

export default function FAQ() {
  const ref = useScrollAnimations()
  return (
    <div
      id="faq"
      ref={ref}
      className="px-5 pb-12 pt-14  md:pb-[90px] md:pt-[150px]"
    >
      <div className="mx-auto w-full max-w-[920px]">
        <div className="flex justify-center max-lg:px-5">
          <div>
            <h3 className="fade-up relative text-[22px] font-black leading-[1.3] tracking-[-0.018em] md:text-[42px]">
              正解広告エージェントをもっと知る。
            </h3>
            <p className="fade-up mt-2 text-[16px] font-bold md:text-[23px]">
              よくある質問。
            </p>
          </div>
        </div>
        <div className="mx-auto mt-5 w-full space-y-[20px] md:mt-[70px] md:space-y-[30px]">
          {faqData.map(({ id, question, answer }) => (
            <FaqItem key={id} id={id} question={question} answer={answer} />
          ))}
        </div>
      </div>
    </div>
  )
}
