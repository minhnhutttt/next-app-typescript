import type { FaqItemPropsType } from "./faqItem";
import FaqItem from "./faqItem";
const faqData: FaqItemPropsType[] = [
  {
    id: "1",
    question: "NFTとは何ですか？",
    answer: (
      <>
        NFTは、デジタルデータに対して付与される特別な証明書です。<br />
        従来のデジタルデータは容易にコピーできるため、それらに独自の価値を付加することは<br />
        困難でした。しかし、NFTの導入により、デジタルアイテムのオリジナリティが保証され、<br />
        それにより新たな価値が生まれています。 
      </>
    ),
  },
  {
    id: "2",
    question: "受け取ったNFTはどうやったら見れますか？",
    answer: (
      <>
        ダイバーウォレットのNFTタグから見ることができます。
      </>
    ),
  },
  {
    id: "3",
    question:
      "ダイバーウォレットとは何ですか？",
      answer: (
      <>
        暗号資産の管理やNFTを無料で送受信できる暗号資産ウォレットです。<br />Web3.0型チャットアプリ「Knock(ノック)」、次世代のトレカ&クーポンサービス「トレクー」、NFTと位置情報をQRコードにセットできる「ChainPin（チェインピン)」などのサービスでご利用頂けます。
      </>
    ),
  },
  {
    id: "4",
    question: "受け取ったNFTを他の人に転送できますか？",
    answer: (
      <>
        はい、できます。<br />
        ただし、NFTに転送ができる設定がされている場合に限ります。
      </>
    ),
  },
  {
    id: "5",
    question: "NFTを受け取るのにお金はかかりますか？",
    answer: (
      <>
        いいえ、かかりません。<br />
        ダイバーウォレットを使ったNFTの送受信はずっと無料でお使い頂けます。
      </>
    ),
  },
];

export default function FAQ() {
  return (
    <div id="faq" className="px-5 pb-12 pt-10 mb-[30px] md:mb-[80px] md:pb-[55px] md:pt-[200px]  bg-cover">
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
