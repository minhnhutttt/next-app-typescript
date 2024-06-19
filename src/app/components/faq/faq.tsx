"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";
import type { FaqItemPropsType } from "./faqItem";
import FaqItem from "./faqItem";
const faqData: FaqItemPropsType[] = [
  {
    id: "1",
    question: "NFTとはなんですか？",
    answer: (
      <>
        NFTは「世界にひとつだけの証明番号」を画像やビデオ、3D、音楽、音声などに付与する技術を活用して発行されるものです。証明番号は第三者から書き換えられたりするリスクがなく、デジタルの世界に&quot;ひとつだけ&quot;であることを証明するために使われています。
        <br />
        ※Non-Fungible
        Token（ノンファンジブルトークン）の略称で、日本語では「非代替性トークン」と訳されることが多いです。
      </>
    ),
  },
  {
    id: "2",
    question: "管理コンソールとはなんですか？",
    answer: (
      <>
        NFTを作成できるホワイトリストに登録する機能も備えており、特定のユーザーのみがNFTを発行できるように設定することができます。
      </>
    ),
  },
  {
    id: "3",
    question: "対応してるウォレットはなんですか？",
    answer: (
      <>
        DIVER
        Walletに対応しています。暗号資産の管理やNFTを無料で送受信できる「DIVER
        Wallet」をはじめ、Web3.0型チャットアプリ「Knock(ノック)」、次世代のトレカ&クーポンサービス「トレクー」、NFTと位置情報をQRコードにセットできる「ChainPin（チェインピン)」などのサービスでご利用頂けます。
      </>
    ),
  },
  {
    id: "4",
    question: "DIVERとはなんですか？",
    answer: (
      <>
        DIVERとは、ブロックチェーン技術を活用して開発されたDIVERというプロジェクト名称です。DIVERは、ブロックチェーンの世界でビットコインの思想とイーサリアムの利便性をベースにさらに進化させたグローバルプロジェクトであり、世界で唯一、取引手数料が完全フリーであらゆるアプリが使える次世代のプラットフォームです。
      </>
    ),
  },
  {
    id: "5",
    question: "広告収益の仕組みについて教えてください？",
    answer: (
      <>
        NFT
        MAPでは、他社の広告を表示することが可能です。広告の表示回数（インプレッション数）に基づいて、広告収益を受け取ることができます。
      </>
    ),
  },
  {
    id: "6",
    question: "初期費用はかかりますか？",
    answer: <>かかりません。全てのプランは初期費用込みの料金です。</>,
  },
  {
    id: "7",
    question: "NFTはどのようにして作成しますか？",
    answer: (
      <>
        <a
          href="https://trading-coupon.com/"
          target="_blank"
          className="underline"
        >
          TR-D1
        </a>
        でNFTを作成し、
        <a href="https://chainpin.link/" target="_blank" className="underline">
          ChainPin
        </a>
        で位置情報を設定します。
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
      className="px-5 pb-12 pt-14 mb-[30px] md:mb-[70px] md:pb-[55px] md:pt-[120px]"
    >
      <div className="mx-auto w-full max-w-[920px]">
        <h4 className="fade-up text-center font-roboto text-main text-[28px] font-bold md:text-[48px]">
          FAQ
        </h4>
        <div className="mx-auto mt-5 w-full space-y-[20px] md:mt-[80px] md:space-y-[30px]">
          {faqData.map(({ id, question, answer }) => (
            <FaqItem key={id} id={id} question={question} answer={answer} />
          ))}
        </div>
      </div>
    </div>
  );
}
