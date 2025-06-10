'use client'

import FaqItem, { FaqItemPropsType } from './FaqItem'

const faqData: FaqItemPropsType[] = [
  {
    id: '01',
    question: 'URLは他人に見られない？',
    answer: (
      <>
        専用URLは、あなたが共有しない限り誰にも見られません。<br />
        また、検索エンジンにも表示されない設定となっているため、安心してご利用いただけます。
      </>
    ),
  },
  {
    id: '02',
    question: '何回でも編集できる？',
    answer: (
      <>
        はい。メッセージは送信前であれば何度でも自由に編集できます。<br />
        文章やデザインに納得がいくまで、じっくり調整してください。<br />
        送信後の編集はできませんが、新しいメッセージの作成は可能です。
      </>
    ),
  },
  {
    id: '03',
    question: 'メールアドレスは必要？',
    answer: (
      <>
        メールアドレスの登録は不要です。<br />
        アカウント作成なしで、今すぐメッセージ作成を始められます。<br />
        手間なく、すぐに想いを届けられるのがTHE LETTERの特長です。
      </>
    ),
  },
]

const FAQ = () => {

  return (
    <section
      id="faq"
      className="px-5 pb-32 pt-28 md:pb-[287px] md:pt-[265px]"
    >
      <div className="mx-auto w-full max-w-[896px]">
        <h3 data-scroll className="fade-up text-center text-[40px] font-bold tracking-widest md:text-[64px] text-white">
          FAQ
        </h3>
        <div className="mx-auto mt-5 w-full space-y-5 md:mt-[40px]">
          {faqData.map(({ id, question, answer }) => (
            <FaqItem key={id} id={id} question={question} answer={answer} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
