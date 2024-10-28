"use client";
import Title from "@/components/title";
import FaqItem from "./faqItem";
import { FaqItemPropsType } from "./faqItem";

const faqData: FaqItemPropsType[] = [
  {
    id: "1",
    question: "導入までにどれくらいの期間がかかりますか？",
    answer: (
      <>
        通常、導入には2週間から1か月程度の期間をいただいております。貴社の福利厚生サービス内容や従業員数に応じたカスタマイズを行い、スムーズな導入をサポートいたします。
      </>
    ),
  },
  {
    id: "2",
    question: "セキュリティはどのように保証されていますか？",
    answer: (
      <>
        福利厚生クエストでは、オンチェーンのNFT技術を活用して、福利厚生サービスチケットの真正性を確保しています。また、従業員の個人情報は厳重に保護されており、最新のセキュリティ基準に従って運用されています。
      </>
    ),
  },
  {
    id: "3",
    question: "どのような企業が導入に向いていますか？",
    answer: (
      <>
        福利厚生クエストは、従業員に福利厚生を提供している全ての企業に適しています。特に、従業員数が多く、福利厚生サービスが多岐にわたる企業にとって、利用促進に非常に効果的です。
      </>
    ),
  },
  {
    id: "4",
    question: "従業員の利用状況はどのように確認できますか？",
    answer: (
      <>
        従業員の利用状況すなわちNFTの利用状況はDIVER
        Scanを使って確認ができます。利用率や人気のあるサービス、最も利用されているエリアなど、詳細なデータをリアルタイムで確認できます。
      </>
    ),
  },
  {
    id: "5",
    question: "NFTって何ですか？",
    answer: (
      <>
        NFT（ノンファンジブルトークン）は、ブロックチェーン技術を使ってデジタル資産の所有権を証明するものです。福利厚生クエストでは、サービスチケットや年間パスポートにNFTを活用し、福利厚生サービスの真正性を保証しています。
      </>
    ),
  },
  {
    id: "6",
    question:
      "厚生クエストを使うために、従業員は特別な技術や知識が必要ですか？",
    answer: (
      <>
        特別な技術や知識は必要ありません。従業員は、DIVER
        Walletを使って簡単に福利厚生クエストにアクセスし、サービスを利用することができます。
      </>
    ),
  },
  {
    id: "7",
    question: "福利厚生サービスはどうやって利用しますか？",
    answer: (
      <>
        福利厚生クエストで取得したサービスチケットは、提携店舗で提示するだけで利用可能です。チケットの有効期限や利用条件もカードに記載されていますので、確認しながらご利用ください。{" "}
      </>
    ),
  },
  {
    id: "8",
    question: "導入後のサポートはありますか？",
    answer: (
      <>
        もちろんです。導入後も、運用に関するご質問やトラブル対応、アップデートなど、専任のサポートチームがサポートいたします。{" "}
      </>
    ),
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="px-5 pb-12 pt-14  md:pb-[90px] md:pt-[150px]">
      <div className="mx-auto w-full max-w-[920px]">
        <Title
          title="My Page Title"
          text_ja="よくある質問"
          text_en="FAQ"
          alignment="center"
        />
        <div className="mx-auto mt-5 w-full space-y-[10px] md:mt-[70px]">
          {faqData.map(({ id, question, answer }) => (
            <FaqItem key={id} id={id} question={question} answer={answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
