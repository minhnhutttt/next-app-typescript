"use client";
import FaqItem from "./faqItem";
import type { FaqItemPropsType } from "./faqItem";
const faqData: FaqItemPropsType[] = [
  {
    id: "1",
    question: "スマホから管理できますか？",
    answer: <>はい、できます。</>,
  },
  {
    id: "2",
    question: "複数人で管理できますか？",
    answer: (
      <>
        はい、できます。
        <br />
        オーナーによる管理者への招待が必要です。
      </>
    ),
  },
  {
    id: "3",
    question: "デザインの具体的なイメージがない状態でも制作は可能ですか？",
    answer: (
      <>
        はい、可能です。打ち合わせの際にお客様のご要望を詳しくお聞きし
        <br />
        最適な提案をさせていただきます。
        <br />
        また、文章に関しては、当社のヒアリングシートにご記入いただければ
        <br />
        より精確にお客様のニーズにお応えすることができます。
      </>
    ),
  },
  {
    id: "4",
    question: "デモサイトはありますか？",
    answer: (
      <>
        はい、あります。
        <br />
        こちらからご確認ください。
        <br />
        デモサイトへ
      </>
    ),
  },
  {
    id: "5",
    question: " ホームページ制作について詳細を知りたいです。",
    answer: (
      <>
        当社ではお客様サポートに注力しております。
        <br />
        公式LINEからお気軽にお問い合わせいただければ幸いです。
        <br />
        公式LINEへ
      </>
    ),
  },
];

export default function FAQ() {
  return (
    <div
      id="faq"
      className="px-5 pb-16 pt-10 md:pb-[112px] md:pt-20 bg-[#EDF4FC]"
    >
      <div className="mx-auto w-full max-w-[1200px]">
        <h4 className="text-center text-[28px] font-bold md:text-[50px]">
          よくあるご質問
        </h4>
        <div className="mx-auto mt-5 w-full space-y-4 md:mt-[60px] md:space-y-[22px]">
          {faqData.map(({ id, question, answer }) => (
            <FaqItem key={id} id={id} question={question} answer={answer} />
          ))}
        </div>
      </div>
    </div>
  );
}
