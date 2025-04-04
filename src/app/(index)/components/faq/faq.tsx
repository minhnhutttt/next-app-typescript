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
        Non-Fungible Token（非代替性トークン）とは、デジタルコンテンツに唯一無二の所有権を与えるブロックチェーン技術です。
      </>
    ),
  },
  {
    id: "02",
    question: "DIVER Wallet Proとは何ですか？",
    answer: (
      <>
        暗号資産の管理やNFTを無料で送受信できる暗号資産ウォレットです。
      </>
    ),
  },
  {
    id: "03",
    question: "登録や基本的な利用は有料ですか？",
    answer: (
      <>
        登録自体は無料で、FaveコインやNFT購入などに応じてコストが発生する場合があります。
      </>
    ),
  },
  {
    id: "04",
    question: "どんなデジタルデータをNFT化できますか？",
    answer: (
      <>
        画像、イラスト、音声、動画、3Dモデル、テキストなど幅広いコンテンツが対象です。
      </>
    ),
  },
  {
    id: "05",
    question: "NFT化するには技術的な知識が必要ですか？",
    answer: (
      <>
        簡易的な操作でNFT発行が可能で、ブロックチェーンの専門知識は不要です。
      </>
    ),
  },
  {
    id: "06",
    question: "応援したクリエイターや作品は、後から資産価値が上がりますか？",
    answer: (
      <>NFTとして所有した作品が評価されると、二次流通での取引価格が上がる可能性があります。</>
    ),
  },
  {
    id: "07",
    question: "クリエイターはどうやって収益を得ますか？",
    answer: <>NFTの初回販売利益や、二次取引時のロイヤリティ収益などを通じて、継続的に収益を得られます。</>,
  },
  {
    id: "08",
    question: "アカウントやウォレットの紛失時はどうなりますか？",
    answer: (
      <>
        リカバリーフレーズを使うことで、安全にデータや資産を回復できます。
      </>
    ),
  },
  {
    id: "09",
    question: "リカバリーフレーズとは何ですか？",
    answer: (
      <>
        リカバリーフレーズとは、ウォレットを復元するための一連の単語です。これを正しく保管しておくことで、デバイスの紛失や故障時でも資産を安全に復元できます。ただし、第三者に知られると不正にアクセスされる可能性があるため、厳重に管理することが重要です。
      </>
    ),
  },
  {
    id: "10",
    question: "NFTを発行・購入する際に手数料はかかりますか？",
    answer: (
      <>
        NFTの発行手数料は永年無料です。
      </>
    ),
  },
  {
    id: "11",
    question: "使用しているブロックチェーンは何ですか？",
    answer: (
      <>
        DIVER Chainを使用しています。
      </>
    ),
  },
  {
    id: "12",
    question: "OpenFaveに掲載したいのですが、どうすればよいですか？",
    answer: <>Faver<a href="/contact" className="underline">申請フォーム</a>からお申し込みください。</>,
  },
];

export default function FAQ() {
  const ref = useScrollAnimations();

  return (
    <section
      ref={ref}
      id="faq"
      className=" mb-[30px] md:mb-[30px]"
    >
      <div className="px-3 md:px-5 md:pb-[75px] pb-12">
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
      </div>
      <div className="border-y border-[#00B900] bg-[#ECFFEC] md:py-[60px] py-10">
        <div className="flex justify-center items-center">
          <img src="/assets/images/line-title.svg" alt="LINEサポート" />
        </div>
        <div className="fade-up flex justify-center md:mt-8 mt-5">
          <div className="w-full md:max-w-[360px] h-[50px] md:h-[86px] flex group">
            <a
              href="/"
              target="_blank"
              className="group-hover:mt-[6px] group-hover:[box-shadow:0px_0px_0px_0px_#005100] duration-150 flex items-center w-full h-11 md:h-20 justify-center md:gap-2.5 gap-2 bg-[#01B902] rounded-[20px] font-medium [box-shadow:0px_6px_0px_0px_#005100] xl:text-[24px] text-[22px] text-white"
            >
              お問い合わせLINE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
