"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";
import type { FaqItemPropsType } from "./faqItem";
import FaqItem from "./faqItem";
const faqData: FaqItemPropsType[] = [
  {
    id: "1",
    question: "デジタルドキュメントをNFT化する理由は何ですか？",
    answer: (
      <>
        NFT化することで、第三者機関の認証不要でなりすましや改ざんのリスクをなくし、発行者、受信者が運用で必要な認証プロセスを大幅に短縮できます。
      </>
    ),
  },
  {
    id: "2",
    question: "どのようなドキュメントをNFTにできますか？",
    answer: <>主に契約書、証明書、権利書など、重要な文書がNFT化可能です。また、著作権を持つデジタル作品や資格証明書なども対象になります。</>,
  },
  {
    id: "3",
    question: "デジタルドキュメントの発行費用が知りたいです。",
    answer: (
      <>
        費用についてはサポートLINEにてお知らせしています。まずはサポートLINEにご連絡ください。
      </>
    ),
  },
  {
    id: "4",
    question: "導入のプロセスが知りたいです。",
    answer: (
      <>
        導入のプロセスは以下のとおりです。<br />
        ①サポートLINEにご連絡<br />
        ②デジタルドキュメントの生産についてヒアリング（チャット）<br />
        ③生産に必要な素材、情報のご提出<br />
        ④デジタルドキュメントの発行<br />
        ⑤デジタルドキュメントの送信・受け取り<br />
        <br />
        詳細はサポートLINEにてご確認ください。
      </>
    ),
  },
  {
    id: "5",
    question: "導入のサポートをしてもらうのは可能でしょうか？",
    answer: (
      <>
        もちろん可能です。ご気軽にサポートLINEにご連絡ください。
      </>
    ),
  },
  {
    id: "6",
    question: "デジタルドキュメントを運用する際の注意点はありますか？",
    answer: (
      <>
        アプリ「DIVER Biz」の初期設定時に生成される復元フレーズ（12個の単語）を大切に保管、管理してください。復元フレーズ（12個の単語）は、デバイスの変更やアプリを削除した場合などのアプリ再インストール時に、同じデジタルドキュメントにアクセスするために必須となります。
      </>
    ),
  },
  {
    id: "7",
    question: "発行したデジタルドキュメントを受信者が紛失することはありますか？また再発行は可能ですか？",
    answer: (
      <>
        一度受信したら紛失することはありません。アプリ「DIVER Biz」をインストール済みのデバイスを紛失した場合は、復元フレーズ（12個の単語）を利用して新規デバイスでアプリの情報を復元できるので安心です。<br />
        <br />
        復元フレーズ（12個の単語）の運用が主となるため、再発行については対応しておりません。再発行可能にする場合、そのデジタルドキュメントの唯一性がなくなるため、非推奨ですが事情により対応可能なケースもございます。まずはサポートLINEにご相談ください。
      </>
    ),
  },
];

export default function FAQ() {
  const ref = useScrollAnimations();

  return (
    <div
    ref={ref}
      id="faq"
      className="px-5 pb-12 pt-14 mb-[30px] md:mb-[140px] md:pb-[55px] md:pt-[76px]"
    >
      <div className="mx-auto w-full max-w-[920px]">
        <h4 className="text-center font-roboto text-[#0D0A8E] text-[28px] font-bold md:text-[48px]">
          FAQ
        </h4>
        <div className="mx-auto mt-5 w-full space-y-[20px] md:mt-[70px] md:space-y-[30px]">
          {faqData.map(({ id, question, answer }) => (
            <FaqItem key={id} id={id} question={question} answer={answer} />
          ))}
        </div>
      </div>
    </div>
  );
}
