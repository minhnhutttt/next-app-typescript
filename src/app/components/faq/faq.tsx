"use client";
import type { FaqItemPropsType } from "./faqItem";
import FaqItem from "./faqItem";
const faqData: FaqItemPropsType[] = [
  {
    id: "1",
    question: "次世代シリーズとは何ですか？",
    answer: (
      <>
        次世代アプリとは、ブロックチェーンという特別な技術を使って作られた「DIVER（ダイバー）」プロジェクトから生まれたアプリのことです。これらのアプリは特別な技術のおかげで非常に安全で、みんなの秘密をしっかり守ってくれます。
      </>
    ),
  },
  {
    id: "2",
    question: "DIVERとは何ですか？",
    answer: (
      <>
        １.「DIVERとは、ブロックチェーン技術を活用して開発されたDIVERというプロジェクト名称です。」 <br />
        <br />
        2.「DIVERは、ブロックチェーンの世界でビットコインの思想とイーサリアムの利便性をベースにさらに進化させたグローバルプロジェクトであり、世界で唯一、取引手数料が完全フリーであらゆるアプリが使える次世代のプラットフォームです。」
      </>
    ),
  },
  {
    id: "3",
    question: "対応しているウォレットは何ですか？",
    answer: (
      <>
        DIVER Walletに対応しています。暗号資産の管理やNFTを無料で送受信できる「DIVER Wallet」をはじめ、Web3.0型チャットアプリ「Knock(ノック)」、次世代のトレカ&クーポンサービス「トレクー」、NFTと位置情報をQRコードにセットできる「ChainPin（チェインピン)」などのサービスでご利用頂けます。
      </>
    ),
  },
  {
    id: "4",
    question: "ガス代とは何ですか？",
    answer: (
      <>
        ガス代とは、ブロックチェーンネットワーク上でトランザクション（送金やデータの記録）を実行するために支払う手数料のことです。この手数料はネットワークの混雑状況によって変動します。
      </>
    ),
  },
  {
    id: "5",
    question: "NFTを送信するのになぜガス代がかかるのですか？",
    answer: (
      <>
        NFTを送信する際にガス代がかかるのは、ブロックチェーンという技術の特性によります。ブロックチェーンでは、多くのコンピュータが取引を確認しており、その作業にはエネルギーや計算能力が必要です。ガス代は、これらのコンピュータの作業への報酬であり、ネットワークの安全性と効率を保つために必要となっています。
      </>
    ),
  },
  {
    id: "6",
    question: "次世代NFTはなぜガス代がかからないのですか？",
    answer: <>
    DIVERがガス代無料でNFTを送信できる理由は、独自のブロックチェーン技術「DIVER Chain」を使用しているためです。DIVER Chainでは、すべてのトランザクションに対してガス代が発生しない設計になっています。
    </>,
  },
];

export default function FAQ() {

  return (
    <div
      id="faq"
      className="px-5 pb-12 pt-14 mb-[30px] md:mb-[70px] md:pb-[90px] md:pt-[140px]"
    >
      <div className="mx-auto w-full max-w-[920px]">
        <h4 data-scroll className="ani-fade-up text-center text-white text-[28px] md:text-[48px]">
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
