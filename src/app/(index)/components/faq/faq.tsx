"use client";
import type { FaqItemPropsType } from "./faqItem";
import FaqItem from "./faqItem";
const faqData: FaqItemPropsType[] = [
  {
    id: "1",
    question: "NFTとは何ですか？",
    answer: (
      <>
        NFTは「世界にひとつだけの証明番号」を画像やビデオ、3D、音楽、音声などに付与する技術を活用して発行されるものです。証明番号は第三者から書き換えられたりするリスクがなく、デジタルの世界に&quot;ひとつだけ&quot;であることを証明するために使われています。<br />
        ※Non-Fungible Token（ノンファンジブルトークン）の略称で、日本語では「非代替性トークン」と訳されることが多いです。
      </>
    ),
  },
  {
    id: "2",
    question: "対応しているウォレットは何ですか？",
    answer: (
      <>
        DIVER Walletに対応しています。暗号資産の管理やNFTを無料で送受信できる「DIVER Wallet」をはじめ、Web3.0型チャットアプリ「Knock(ノック)」、次世代のトレカ&クーポンサービス「トレクー」、NFTと位置情報をQRコードにセットできる「ChainPin（チェインピン)」などのサービスでご利用頂けます。
      </>
    ),
  },
  {
    id: "3",
    question: "DIVERとは何ですか？",
    answer: (
      <>
        DIVERとは、ブロックチェーン技術を活用して開発されたDIVERというプロジェクト名称です。DIVERは、ブロックチェーンの世界でビットコインの思想とイーサリアムの利便性をベースにさらに進化させたグローバルプロジェクトであり、世界で唯一、取引手数料が完全フリーであらゆるアプリが使える次世代のプラットフォームです。
      </>
    ),
  },
  {
    id: "4",
    question: "NFTはどうやったら送ることができますか？",
    answer: (
      <>
        DIVER WalletからNFTタブを開き、送りたいNFTを選択します。それから送信ボタンを押し送りたいアドレスを入力してください。
      </>
    ),
  },
  {
    id: "5",
    question: "NFTはどこで販売できますか？",
    answer: (
      <>
        <a href="https://diver-rare.com/" target="_blank" rel="noopener noreferrer" className="underline">Oceans Rare</a>で販売できます。
      </>
    ),
  },
  {
    id: "6",
    question: "NFTクーポンはどのように使いますか？",
    answer: <>
    DIVER Walletに保存されたNFTクーポンを、イベント開催時に運営に提示してください。
    </>,
  },
];

export default function FAQ() {

  return (
    <div
      id="faq"
      className="px-5 pb-12 pt-14  md:pb-[90px] md:pt-[150px]"
    >
      <div className="mx-auto w-full max-w-[920px]">
        <h4 data-scroll className="ani-fade-up text-center text-black font-roboto text-[28px] md:text-[48px]">
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
