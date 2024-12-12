"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";
import { ReactNode } from "react";


const MetamaskButton = () => (
    <div className="border-t border-black/30 mt-6 md:mt-10 pt-3 md:pt-5">
        <p className="text-center md:text-[18px] font-bold text-[15px] mb-3">METAMASKをダウンロード</p>
        <div className="flex justify-center">
        <a href="/" target="_blank">
        <img className="max-md:w-[240px]" src="/assets/images/metamask.png" alt="" /></a>
        </div>
    </div>
)

const data = [
  {
    number: "01",
    title: "どのくらいデジタル資産がもらえるの？",
    content:
      "COIN TOGETHERでは、提携店舗やサービスでのご利用金額やキャンペーン内容に応じて、イーサリアム（ETH）などのデジタル資産が還元されます。",
    note: "※具体的な還元率や受け取れるETHやデジタル資産の量は、店舗やサービスによって異なりますので、詳細は各提携先の情報をご確認ください。",
    image: "/assets/images/introduction-img-01.png",
    color: '#F496EE'
  },
  {
    number: "02",
    title: "もらったデジタル資産はどうしたらいい？",
    content: (
      <>
        受け取ったイーサリアムなどのデジタル資産はさまざまな方法でご活用いただけます。
        <br />
        そのまま保有して将来的な価値の上昇を期待することや、暗号資産取引所を通じて日本円や他の暗号資産に交換したり、ステーキングや分散型金融（DeFi）サービスを利用して資産運用を行うこともできます。
      </>
    ),
    image: "/assets/images/introduction-img-02.png",
    color: '#AAAAFF'
  },
  {
    number: "03",
    title: "暗号資産口座開設は必要？",
    content:
      "COIN TOGETHERでは、初めての方でも特別な暗号資産取引所の口座開設は不要です。MetaMaskをインストールすることでご利用いただけます。",
    image: "/assets/images/introduction-img-03.png",
    button: <><MetamaskButton /></>,
    color: '#98E8A7'
  },
  {
    number: "04",
    title: " ポイントとデジタル資産の違いは？",
    content: (
      <>
        1ポイント1円のポイントをもらっても、その価値は変わりません。
        <br />
        一方、イーサリアムなどのデジタル資産は市場の成長とともに価値が上昇する可能性があります。
        <br />
        リアルタイムチャートでデジタル資産の値動きを楽しむなんてことも。
      </>
    ),
    note: "※米価格予想サイト「Digitalcoin」による価格予想では2030年に13,145.20ドル（1,906,054円）に到達すると予想されています。(2024年12月時点で約3,700ドル（537,344円）)",
    image: "/assets/images/introduction-img-04.png",
    color: '#FFFF84'
  },
  {
    number: "05",
    title: "QRコード、NFC、Mapピン、URLからも簡単受け取り！",
    content: (
      <>
        QRコードをスマホでスキャンすることはもちろん、タッチ決済のようなNFCによるワンタッチ接続、Map上のピンをタップ、URLリンク経由など、多彩な方法でイーサリアムを誰でも簡単に受け取れます。
        <br />
        面倒な手続きや複雑な操作は一切不要で、誰でも自由に資産形成を始めることができます。
      </>
    ),
    image: "/assets/images/introduction-img-05.png",
    color: '#FFC28F'
  },
  {
    number: "06",
    title: "様々な種類のデジタル資産がもらえちゃう！",
    content: (
      <>
        COIN
        TOGETHERでは、イーサリアム（ETH）だけでなく、さまざまな種類のコインを受け取ることができます。提携店舗やサービスからの限定クーポンや割引サービスなど、多彩なメリットがあります。
        <br />
        これにより、資産形成だけでなく、日常の生活をより豊かに楽しむことができます。
      </>
    ),
    image: "/assets/images/introduction-img-06.png",
    color: '#FF929B'
  },
];


const IntroductionItem = ({
    number,
    title,
    content,
    note,
    button,
    image,
    color
  }: {
    number: string;
    title: string;
    content: ReactNode;
    note?: string;
    button?: ReactNode;
    image: string;
    color: string;
  }) => <div className="fade-up flex items-start group max-md:flex-col-reverse md:even:flex-row-reverse">
      <div className="flex flex-col py-10 md:py-5 items-center justify-center w-full md:w-[calc(50%+60px)] relative md:min-h-[440px] md:group-odd:mr-[-60px] md:group-even:ml-[-60px] px-8 md:px-[60px]" style={{backgroundColor: color}}>
        <div className="absolute top-0 left-0 w-[88px] md:w-[141px] aspect-[141/126] bg-[url('/assets/images/ic-tri.png')] text-[24px] md:text-[40px] font-semibold italic px-3 py-1 bg-cover">{number}</div>
        <div className="md:max-w-[595px] px-2.5">
            <h5 className="text-center md:text-[32px] text-[20px] font-black relative">{title}</h5>
            <p className="md:text-[18px] text-[15px] mt-6">
                {content}
            </p>
            {note && <p className="md:text-[16px] text-[13px] text-[#666] mt-4">{note}</p>}
            {button && button}
        </div>
      </div>
      <div className="md:pt-[130px] relative md:group-odd:pr-[60px] md:group-even:pl-[60px] w-full md:w-1/2">
          <img className="[box-shadow:0px_4px_100px_0px_rgba(0,_0,_0,_0.10)]" src={image} alt="" />
      </div>
  </div>;
  
const Introduction = () => {
  const ref = useScrollAnimations();
  return (
    <section
      ref={ref}
      className="relative bg-[#F0F1F3] pt-20 md:pt-[120px] pb-20 md:pb-[130px]"
    >
      <div className="w-full md:max-w-[1440px] max-w-[540px] mx-auto">
        <h3 className="text-center font-black text-[6.667vw] dt:text-[96px] leading-none tracking-widest">
          What's COIN TOGETHER
        </h3>
        <div className="mt-12 md:mt-[88px] md:space-y-20 space-y-12">
          {data.map((item, index) => (
            <IntroductionItem
            key={index}
              number={item.number}
              title={item.title}
              content={item.content}
              note={item.note}
                button={item.button}
                image={item.image}
                color={item.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Introduction;
