"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import type { FaqItemPropsType } from "./faqItem";
import FaqItem from "./faqItem";
const faqData: FaqItemPropsType[] = [
  {
    id: "1",
    question: "RWAとは何ですか？",
    answer: (
      <>
        RWA（Real World Assets）は、不動産や企業の株式など、デジタルではない現実世界の資産を指します。これらをデジタル化することで、ブロックチェーン上で取引が可能になります。
      </>
    ),
  },
  {
    id: "2",
    question: "NFCとは何ですか？",
    answer: (
      <>
        NFCは「近距離無線通信」の略で、デバイス間の短距離データ交換を可能にする技術です。スマートフォンや決済端末などで用いられ、タッチするだけで情報の送受信が行えます。
      </>
    ),
  },
  {
    id: "3",
    question: "NFTとは何ですか？",
    answer: (
      <>
        NFTとは、ブロックチェーン上の唯一無二のデジタル資産を指します。各NFTは独自の識別情報を持ち、デジタルアートなどの所有権を証明することができます。
      </>
    ),
  },
  {
    id: "4",
    question: "DIVERコインとは何ですか？",
    answer: (
      <>
        DIVERコインは、DIVERプラットフォーム上での取引やサービス利用のために使われるデジタル通貨です。
      </>
    ),
  },
  {
    id: "5",
    question: "DIVER TagとRWA Tagの違いは何ですか？",
    answer: (
      <>
        違いはありません。同じものです。
      </>
    ),
  },
  {
    id: "6",
    question: "どうやって所有権を証明しますか？",
    answer: (
      <>
        RWA Tagをスマートフォンで読み取ることにより、あらかじめ設定しておいたNFTが表示されることで、自身の所有物を証明することができます。
      </>
    ),
  },
];

export default function FAQ() {
  const animateUpRefs = useScrollAnimation("fadeUp");
  return (
    <div
      id="faq"
      className="px-5 pb-12 pt-10 mb-[50px] md:mb-[100px] md:pb-[60px] md:pt-[64px]"
    >
      <div className="mx-auto w-full max-w-[920px]">
        <h4 ref={animateUpRefs} className="opacity-0 text-center font-roboto text-[28px] font-bold md:text-[48px]">
          FAQ
        </h4>
        <div className="mx-auto mt-5 w-full space-y-[20px] md:mt-[75px] md:space-y-[30px]">
          {faqData.map(({ id, question, answer }) => (
            <FaqItem key={id} id={id} question={question} answer={answer} />
          ))}
        </div>
      </div>
    </div>
  );
}
