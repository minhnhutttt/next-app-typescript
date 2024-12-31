"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";
import type { FaqItemPropsType } from "./faqItem";
import FaqItem from "./faqItem";
const faqData: FaqItemPropsType[] = [
  {
    id: "01",
    question: "NFTって何ですか？",
    answer: (
      <>
        Non-Fungible
        Token（非代替性トークン）とは、デジタルコンテンツに唯一無二の所有権を与えるブロックチェーン技術です。
      </>
    ),
  },
  {
    id: "02",
    question: "Faveコインとは何ですか？",
    answer: (
      <>
        Faveコインは、応援やNFT購入に使えるOPEN FAVE内のお金のようなものです。
      </>
    ),
  },
  {
    id: "03",
    question: "どうやって始めるのですか？",
    answer: (
      <>
        GoogleやAppleアカウントで簡単に登録でき、専用アプリやWebから利用開始可能です。
      </>
    ),
  },
  {
    id: "04",
    question: "登録や基本的な利用は有料ですか？",
    answer: (
      <>
        登録自体は無料で、FaveコインやNFT購入などに応じてコストが発生する場合があります。
      </>
    ),
  },
  {
    id: "05",
    question: "どんなデジタルデータをNFT化できますか？",
    answer: (
      <>
        画像、イラスト、音声、動画、3Dモデル、テキストなど幅広いコンテンツが対象です。
      </>
    ),
  },
  {
    id: "06",
    question: "NFT化するには技術的な知識が必要ですか？",
    answer: (
      <>簡易的な操作でNFT発行が可能で、ブロックチェーンの専門知識は不要です。</>
    ),
  },
  {
    id: "07",
    question: "Faveコインはどうやって手に入れますか？",
    answer: <>Teloport ExchangeにてETHをスワップすることで入手できます</>,
  },
  {
    id: "08",
    question: "Faveコインの使い道は？",
    answer: (
      <>
        気に入ったクリエイターや作品への直接的な応援（投げ銭）、NFT作品の購入、コミュニティ内でのトレードに利用できます。
      </>
    ),
  },
  {
    id: "09",
    question: "応援したクリエイターや作品は、後から資産価値が上がりますか？",
    answer: (
      <>
        NFTとして所有した作品が評価されると、二次流通での取引価格が上がる可能性があります。
      </>
    ),
  },
  {
    id: "10",
    question: "クリエイターはどうやって収益を得ますか？",
    answer: (
      <>
        NFTの初回販売利益や、二次取引時のロイヤリティ収益などを通じて、継続的に収益を得られます。
      </>
    ),
  },
  {
    id: "11",
    question: "アカウントやウォレットの紛失時はどうなりますか？",
    answer: (
      <>
        リカバリーフレーズやバックアップ機能が用意され、安全にデータや資産を回復する手段があります。
      </>
    ),
  },
  {
    id: "12",
    question: "NFTを発行・購入する際に手数料はかかりますか？",
    answer: <>NFTの発行手数料は永年無料です。</>,
  },
  {
    id: "13",
    question: "Faveコインの送受信に手数料は必要ですか？",
    answer: <>不要です。無料で送受信できます。</>,
  },
  {
    id: "14",
    question: "使用しているブロックチェーンは何ですか？",
    answer: <>DIVER Chainを使用しています。</>,
  },
  {
    id: "15",
    question: "Faveコインは現金化できますか？",
    answer: (
      <>
        Teleport
        Exchangeを利用してFaveコインをETH（イーサリアム）へ変換し、その後ETHを仮想通貨取引所へ送って法定通貨への交換が可能です。ただし、Faveコインは取引量や需要によって価格が変動し、時期によっては十分な価格がついていない場合もあります。そのため、現金化を検討する際は、マーケット状況をよく確認してから行うことをおすすめします。
      </>
    ),
  },
];

export default function FAQ() {
  const ref = useScrollAnimations();

  return (
    <section
      ref={ref}
      id="faq"
      className="px-3 md:px-5 pt-14 mb-[30px] md:mb-[30px] md:pt-20"
    >
      <div className="mx-auto w-full bg-[#F3F5F6] rounded-[20px] pt-8 px-4 md:px-[25px] md:pb-[60px] pb-10">
        <div className="fade-up text-center">
          <h3 className="md:text-[36px] text-[24px] font-bold tracking-wider">
            FAQ
          </h3>
          <span className="w-20 h-[3px] bg-[#21012D] block mx-auto mt-2.5"></span>
        </div>
        <div className="mx-auto mt-6 w-full bg-[#E3F1FB] divide-y-[3px] divide-[#F3F5F6]">
          {faqData.map(({ id, question, answer }) => (
            <FaqItem key={id} id={id} question={question} answer={answer} />
          ))}
        </div>
      </div>
      <div className="md:pt-10 pt-8 px-5 md:pb-[65px] pb-10">
        <p className="md:text-[20px] text-[16px] font-medium w-full max-w-[392px] mx-auto">
          ご不明な点がありましたら、お気軽にお問い合わせください。
        </p>
        <div className="fade-up flex justify-center md:mt-10 mt-7">
          <div className="w-full md:max-w-[418px] h-[50px] md:h-[86px] flex group">
            <a
              href="/"
              target="_blank"
              className="group-hover:mt-[6px] group-hover:[box-shadow:0px_0px_0px_0px_#005100] duration-150 flex items-center w-full h-11 md:h-20 justify-center md:gap-2.5 gap-2 bg-[#01B902] rounded-[60px] font-medium [box-shadow:0px_6px_0px_0px_#005100] xl:text-[28px] text-[22px] text-white"
            >
              <img
                className="max-md:w-6"
                src="/assets/images/ic-line.svg"
                alt=""
              />
              お問い合わせLINE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
