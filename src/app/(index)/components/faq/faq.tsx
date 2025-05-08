'use client'

import useScrollAnimations from '@/hooks/useScrollAnimations'
import type { FaqItemPropsType } from './faqItem'
import FaqItem from './faqItem'
import Title from '@/components/title'

const faqData: FaqItemPropsType[] = [
  {
    id: '1',
    question: 'ライブ配信未経験なのですが…',
    answer: (
      <>
        ご安心ください。所属ライバーの99％が未経験でスタートしております。また、輩出したTOPライバーさん達もほぼ全員が未経験からのスタートでした。
      </>
    ),
  },
  {
    id: '2',
    question:
      '芸能人でもインフルエンサーでもないし、特技も何も無いごく普通の一般人だけど大丈夫？',
    answer: (
      <>
        ご安心ください。弊社が輩出したTOPライバーのほとんどがごく一般の方ですので、誰にでもチャンスがあります。
      </>
    ),
  },
  {
    id: '3',
    question: '所属したり、教えてもらったりするのにお金はかかりますか？',
    answer: (
      <>
        講習料・入会金・年会費・退会費などの、金銭に関わる一切の料金を取るようなことは致しません。
      </>
    ),
  },
  {
    id: '4',
    question: 'ノルマはありますか？',
    answer: (
      <>
        ノルマは一切御座いません。目安としては１日平均１～２時間、月間で20時間以上の配信を推奨しております。
      </>
    ),
  },
  {
    id: '5',
    question: '顔出しは必須ですか？',
    answer: (
      <>
        基本的には顔出しが望ましいですが、マスクや仮面での配信や顔出しなしの配信も可能です。
        <br />
        <br />
        ※審査の時だけは顔出しが必須となります。
      </>
    ),
  },
  {
    id: '6',
    question: '未成年でも登録可能ですか？',
    answer: <>残念ながら、未成年者は登録不可となっております。</>,
  },
]

const FAQ = () => {
  const ref = useScrollAnimations()

  return (
    <div
      ref={ref}
      id="faq"
      className="mb-[30px] px-5 pt-14 md:mb-[30px]  md:pt-[80px]"
    >
      <div className="mx-auto w-full max-w-[920px]">
        <div>
          <Title>よくある質問</Title>
        </div>
        <div className="mx-auto mt-8 w-full space-y-[20px] md:mt-[40px] md:space-y-[30px]">
          {faqData.map(({ id, question, answer }) => (
            <FaqItem key={id} id={id} question={question} answer={answer} />
          ))}
        </div>
        <div className="fade-up mt-7 flex justify-center md:mt-10">
          <a
            href="https://line.me/R/ti/p/%40300kbcvu"
            target="_blank"
            className="flex h-[70px] w-[330px] items-center justify-center rounded-full bg-[linear-gradient(90deg,_rgba(255,125,211,1)_0%,_rgba(60,232,255,1)_100%)] p-[3px] text-[16px] font-semibold leading-[1.2] md:w-[480px] md:text-[20px]"
          >
            <span className="flex h-full w-full items-center justify-center rounded-full bg-white text-center">
              今すぐLINEで応募して
              <br />
              ライバーへの扉を開きましょう！！
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default FAQ
