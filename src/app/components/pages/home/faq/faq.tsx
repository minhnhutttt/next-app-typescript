"use client";
import type { FaqItemPropsType } from "./faqItem";
import FaqItem from "./faqItem";
const faqData: FaqItemPropsType[] = [
  {
    id: "1",
    question: "次世代クーポンはどうやったらもらえますか？",
    answer: (
      <>
        お店に設置されたQRコードの撮影や、URLをタップすることで取得が可能です。 
      </>
    ),
  },
  {
    id: "2",
    question: "次世代クーポンをどうやって使いますか？",
    answer: (
      <>
        獲得した次世代クーポンを会計時に提示して下さい。
      </>
    ),
  },
  {
    id: "3",
    question:
      "次世代クーポンはどうやって管理しますか？",
      answer: (
      <>
        次世代アドレスのNFT画面から一括管理ができます。
      </>
    ),
  },
  {
    id: "4",
    question: "次世代アドレスとは何ですか？",
    answer: (
      <>
        次世代アドレスとは、アプリDIVER Wallet（ダイバーウォレット）のことです。<br />ダイバーウォレットは、暗号通貨（※）やNFTの送受信や管理ができるお財布機能と、
        ほかの次世代アプリへのログインアドレスとして展開利用できる<br />
        ログイン機能がメイン機能で、一つのアドレスで次世代アプリを利用するための<br />
        重要な役割を担っています。<br /><br />※ダイバーウォレットではDIV（ダイバーコイン）、BTC（ビットコイン）、<br />
        ETH（イーサリアム））の3種類の暗号通貨に対応しています。
      </>
    ),
  },
  {
    id: "5",
    question: "次世代クーポンはなぜ割引率が高いのですか？",
    answer: (
      <>
        次世代クーポンはデジタル形式で発行されるため、従来の紙ベースのクーポンに比べて<br />
        印刷や物理的な配布にかかるコストが不要です。このような経費の削減により、<br />
        節約された分をお客様に割引として直接還元することが可能です。
      </>
    ),
  },
  {
    id: "6",
    question: "次世代クーポンを発行したいです",
    answer: (
      <>
        詳細をお伺いしながら、適切にサポート致します。<br />LINEよりお気軽にお問い合わせ下さい。
      </>
    ),
  },
];

export default function FAQ() {
  return (
    <div id="faq" className="px-5 pb-12 pt-10 mb-[90px] md:mb-[166px] md:pb-[75px] md:pt-[200px] bg-[url('/images/bg-07.png')] bg-cover">
      <div className="mx-auto w-full max-w-[920px]">
        <h4 className="text-center font-roboto text-[28px] font-bold md:text-[48px]">
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
