"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";
import type { FaqItemPropsType } from "./faqItem";
import FaqItem from "./faqItem";
const faqData: FaqItemPropsType[] = [
  {
    id: "1",
    question: "NFT名刺とは何ですか？",
    answer: (
      <>
        NFT名刺とは、ブロックチェーン技術を活用してデジタル上で発行される名刺のことです。従来の紙の名刺と比べ、情報の正確性、即時性、拡張性などの面で優れています。
      </>
    ),
  },
  {
    id: "2",
    question: "NFT名刺を制作するにはどうすればよいですか？",
    answer: (
      <>
        NFT名刺を制作するには、まずアプリ「DIVER Biz」をダウンロードし、初期設定を完了させてください。次に、NFT名刺制作フォームから必要事項を入力します。STEP1ではデジタル素材（画像）とアプリ「DIVERBiz」にて取得できるNFT名刺受取アドレスを入力します。STEP2では一般的な名刺に記載される情報を入力します。これらの手順を踏むことで、誰でも簡単にNFT名刺を制作できます。
      </>
    ),
  },
  {
    id: "3",
    question: "NFT名刺はどのように交換するのですか？",
    answer: (
      <>
        NFT名刺の交換は、アプリ「DIVER Biz」上で行います。相手のQRコードを読み取るか、アプリ内で直接送信することで、ワンタッチでNFT名刺を即時に交換できます。以下の手順で、ワンタッチで名刺交換が完了します。<br />
        <br />
        ①名刺を受け取り後、通知アイコン「🔔」をタップして下さい。<br />
        ②直近の受け取りに対応する履歴があるので、その履歴をタップして下さい。<br />
        ③相手に送信する名刺を選択して「送信」ボタンをタップしたら相手に送信されます。
      </>
    ),
  },
  {
    id: "4",
    question: "NFT名刺の情報はどのように管理されますか？",
    answer: (
      <>
        NFT名刺の情報は、アプリ「DIVER Biz」内で一元管理されます。ラベル機能を使ってグループ分けすることで、目的の名刺にすぐにアクセスできます。また、ブロックチェーン技術による高度な暗号化と独自の秘匿化技術により、業界最高水準のセキュリティが確保されています。アドレススキャンによるウォレット閲覧もNFT暗号化でブロックされますので、NFT名刺が第三者に盗み見られることがありません。
      </>
    ),
  },
  {
    id: "5",
    question: "NFT名刺にはどのような情報を載せられますか？",
    answer: (
      <>
        NFT名刺には、従来の名刺情報に加え、テキスト、画像、動画など様々な情報を盛り込むことができます。自己紹介やポートフォリオの共有も可能で、リンク先の情報を随時更新することで、常に最新の情報を相手に提供できます。
      </>
    ),
  },
  {
    id: "6",
    question: "NFT名刺の転送はどのように制御されていますか？",
    answer: (
      <>
        当サービスで制作するNFT名刺には転送制御機能が備わっており、名刺を受け取った相手が他者に勝手に回覧することを防ぎます。これにより、紙名刺のような知らない間の拡散を防止し、高度な情報保護を実現しています。
      </>
    ),
  },
  {
    id: "7",
    question: "アプリ「DIVER Biz」は無料ですか？",
    answer: (
      <>
        はい、アプリ「DIVER Biz」のダウンロードおよび利用は無料です。
      </>
    ),
  },
  {
    id: "8",
    question: "NFT名刺の発行枚数に制限はありますか？",
    answer: (
      <>
        現在、DIVER Bizでは毎日先着50名様限定でNFT名刺を無料で200枚プレゼントしています（2024年12月末まで）。それ以上の枚数や複数種類の名刺が必要な方は、サポートLINEにてご相談ください。
      </>
    ),
  },
  {
    id: "9",
    question: "NFT名刺の受け取りにはアプリ「DIVER Biz」が必要ですか？",
    answer: (
      <>
        はい、NFT名刺の受け取りおよび管理にはアプリ「DIVER Biz」が必要です。アプリをダウンロードし、初期設定を完了させた上で、NFT名刺受取アドレスを取得してください。
      </>
    ),
  },
  {
    id: "10",
    question: "紙の名刺とNFT名刺の違いは何ですか？",
    answer: (
      <>
        紙の名刺と比べ、NFT名刺は情報の正確性、交換の即時性、情報の拡張性、真正性保証、デザイン性、情報の保護、セキュリティ、サスティナビリティなどの点で優れています。詳細は、ページ内の比較コンテンツをご覧ください。
      </>
    ),
  },
  {
    id: "11",
    question: "NFT名刺を使うメリットは何ですか？",
    answer: (
      <>
        NFT名刺を使うメリットとして、ユニークで印象に残りやすい、情報管理が効率的、コストを削減できる、環境に優しい、デジタルトランスフォーメーション（DX）への積極姿勢を示せるなどが挙げられます。
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
      className="bg-[#101010] px-5 pt-10 pb-[90px] md:pb-[187px] md:pt-[80px]"
    >
      <div className="mx-auto w-full max-w-[920px]">
        <h4 className="fade-up text-center text-white font-roboto text-[28px] font-bold md:text-[48px]">
          FAQ
        </h4>
        <div className="fade-up mx-auto mt-5 w-full space-y-[20px] md:mt-[70px] md:space-y-[30px]">
          {faqData.map(({ id, question, answer }) => (
            <FaqItem key={id} id={id} question={question} answer={answer} />
          ))}
        </div>
      </div>
    </div>
  );
}
