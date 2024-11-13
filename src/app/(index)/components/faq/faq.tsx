"use client";
import Title from "@/components/title";
import FaqItem from "./faqItem";
import { FaqItemPropsType } from "./faqItem";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const faqData: FaqItemPropsType[] = [
  {
    id: "1",
    question: "META Earthとはどのようなサービスですか？",
    answer: (
      <>
        META Earthは、あなたの現在地に基づいて、地域の特典やイベント情報を一目で確認できるパーソナル地域情報マップです。カフェや店舗、観光スポットなど、日常生活をもっと便利にする情報が満載です。
      </>
    ),
  },
  {
    id: "2",
    question: "META Earthは無料で利用できますか？",
    answer: (
      <>
        はい、META Earthは無料で利用できます。地図上で特典や情報を探して、割引やキャンペーンなどを簡単に利用することができます。
      </>
    ),
  },
  {
    id: "3",
    question: "どのような特典が見つかりますか？",
    answer: (
      <>
        META Earthでは、カフェの割引クーポンや、ショップで使えるポイントアップキャンペーン、観光地でのスタンプラリー参加券など、地域の特典をたくさん見つけることができます。
      </>
    ),
  },
  {
    id: "4",
    question: "META Earthはどの地域で利用できますか？",
    answer: (
      <>
        META Earthは世界中で対応しており、パートナー店舗も順次拡大中です。ご利用可能なエリアは、マップ上で簡単に確認できます。
      </>
    ),
  },
  {
    id: "5",
    question: "NFTとは何ですか？",
    answer: (
      <>
        NFT（Non-Fungible Token）とは、デジタルアイテムや特典の所有権を証明する唯一無二のデジタル資産です。META Earthでは、特定のイベントや場所でNFT特典を受け取ることができ、それを使って割引や限定サービスを受けることができます。
      </>
    ),
  },
  {
    id: "6",
    question:
      "NFT特典とは何ですか？",
    answer: (
      <>
        NFT特典とは、デジタル技術を利用して配布される限定特典のことです。特定のイベントや場所で手に入れることができ、割引や限定サービスを受けるために使用できます。
      </>
    ),
  },
  {
    id: "7",
    question: "特典やキャンペーンはどのように使えますか？",
    answer: (
      <>
        特典やキャンペーンは、META Earthで発見した後、その店舗やサービスで提示するだけで簡単に利用できます。具体的な利用方法は、各特典のNFTでご確認ください。
      </>
    ),
  },
  {
    id: "8",
    question: "Mercury Vaultとは何ですか？",
    answer: (
      <>
      Mercury Vaultは、META Earthで発行するNFTを管理するデジタルウォレットで、NFTやその他のデジタル資産を安全に管理するためのツールです。このウォレットを使うことで、受け取ったNFT特典やクーポンを簡単に保管し、必要な時に利用できます。
      </>
    ),
  },
  {
    id: "9",
    question: "Mercury Vaultの利用方法は？",
    answer: (
      <>
      Mercury Vaultはアプリとしてダウンロードできます。新規ウォレットを作成して、受け取ったNFTや特典を保存し、META Earthとの連携を行います。Mercury Vaultにログインすることで、いつでもNFTを確認し、特典を利用することが可能です。
      </>
    ),
  },
  {
    id: "10",
    question: "Mercury Vaultは安全ですか？",
    answer: (
      <>
        はい、Mercury Vaultはブロックチェーン技術を使用しており、あなたのNFTやデジタル資産を安全に保護します。データの改ざんや不正アクセスから守られるため、安心してご利用いただけます。
      </>
    ),
  },
  {
    id: "11",
    question: "NFT特典は他の人に譲渡できますか？",
    answer: (
      <>
        ほどんどのNFT特典は譲渡可能ですが、譲渡が制限されている場合もあります。各NFT特典の詳細ページで、譲渡可能かどうかを確認してください。譲渡可能な場合、Mercury Vaultを通じて他のユーザーにNFTを送信することができます。
      </>
    ),
  },
  {
    id: "12",
    question: "特典は有効期限がありますか？",
    answer: (
      <>
        はい、特典には有効期限が設定されている場合があります。各店舗のNFTで有効期限を確認して、期限内にご利用ください。
      </>
    ),
  },
  {
    id: "13",
    question: "サポートが必要な場合はどうすればいいですか？",
    answer: (
      <>
        何か問題や疑問があった場合は、公式LINEよりお気軽にご連絡ください。サポートチームが対応いたします。
      </>
    ),
  },
];

export default function FAQ() {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} id="faq" className="px-5 pb-12 pt-14 md:pb-[90px] md:pt-[75px]">
      <div className="mx-auto w-full max-w-[920px]">
        <h3 className="text-center md:text-[64px] text-[32px] font-['Inter'] font-bold tracking-widest">FAQ</h3>
        <div className="mx-auto mt-5 w-full space-y-[10px] md:mt-[70px]">
          {faqData.map(({ id, question, answer }) => (
            <FaqItem key={id} id={id} question={question} answer={answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
