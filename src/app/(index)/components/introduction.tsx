"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";
import { ReactNode } from "react";


const MetamaskButton = () => (
    <div className="border-t border-black/30 mt-6 md:mt-10 pt-3 md:pt-5">
        <p className="text-center md:text-[18px] font-bold text-[15px] mb-3">METAMASKをダウンロード</p>
        <div className="flex justify-center">
        <a href="https://metamask.io/" target="_blank" className="duration-150 hover:opacity-75">
        <img className="max-md:w-[240px]" src="/assets/images/metamask.png" alt="" /></a>
        </div>
    </div>
)

const data = [
  {
    number: "01",
    title: (<>どのくらいデジタル資産が<br />もらえるの？</>),
    content:
      "COIN TOGETHERでは、提携店舗やサービスでのご利用金額やキャンペーン内容に応じて、イーサリアム（ETH）などのデジタル資産が還元されます。",
    note: "※具体的な還元率や受け取れるETHやデジタル資産の量は、店舗やサービスによって異なりますので、詳細は各提携先の情報をご確認ください。",
    image: (<>
      <img src="/assets/images/introduction-img-01.png" alt="" />
      <img style={{ "--delay": 0.4 } as React.CSSProperties} className="blink absolute top-[47%] left-[13%] w-[6%]" src="/assets/images/star-01-01.png" alt="" />
      <img style={{ "--delay": 1.2 } as React.CSSProperties} className="blink absolute top-[68%] left-[29.4%] w-[4.5%]" src="/assets/images/star-01-01.png" alt="" />
      <img style={{ "--delay": 0.2 } as React.CSSProperties} className="blink absolute top-[8%] left-[47%] w-[4.3%]" src="/assets/images/star-01-01.png" alt="" />
      <img style={{ "--delay": 0.8 } as React.CSSProperties} className="blink absolute top-[34%] left-[67%] w-[5.7%]" src="/assets/images/star-01-01.png" alt="" />
      <img style={{ "--delay": 0.6 } as React.CSSProperties} className="blink absolute top-[17%] left-[81.5%] w-[5%]" src="/assets/images/star-01-01.png" alt="" />
      <img style={{ "--delay": 1 } as React.CSSProperties} className="blink absolute top-[74%] left-[76%] w-[5%]" src="/assets/images/star-01-01.png" alt="" />
    </>),
    color: '#F496EE'
  },
  {
    number: "02",
    title: (<>もらったデジタル資産は<br />どうしたらいい？</>),
    content: (
      <>
        受け取ったイーサリアムなどのデジタル資産はさまざまな方法でご活用いただけます。
        <br />
        そのまま保有して将来的な価値の上昇を期待することや、暗号資産取引所を通じて日本円や他の暗号資産に交換したり、ステーキングや分散型金融（DeFi）サービスを利用して資産運用を行うこともできます。
      </>
    ),
    image: (<>
      <img src="/assets/images/introduction-img-02.png" alt="" />
      <img style={{ "--delay": 0.2 } as React.CSSProperties} className="blink absolute top-[37%] left-[13%] w-[2.9%]" src="/assets/images/star-02-01.png" alt="" />
      <img style={{ "--delay": 1.2 } as React.CSSProperties} className="blink absolute top-[17%] left-[13%] w-[2.8%]" src="/assets/images/star-02-01.png" alt="" />
      <img style={{ "--delay": 1.4 } as React.CSSProperties} className="blink absolute top-[8%] left-[27.5%] w-[3%]" src="/assets/images/star-02-01.png" alt="" />
      <img style={{ "--delay": 0.4 } as React.CSSProperties} className="blink absolute top-[18%] left-[31%] w-[2.6%]" src="/assets/images/star-02-01.png" alt="" />
      <img style={{ "--delay": 1 } as React.CSSProperties} className="blink absolute top-[27%] left-[29%] w-[2.6%]" src="/assets/images/star-02-01.png" alt="" />
      <img style={{ "--delay": 0.8 } as React.CSSProperties} className="blink absolute top-[50%] left-[33%] w-[2.6%]" src="/assets/images/star-02-01.png" alt="" />
      <img style={{ "--delay": 0.6 } as React.CSSProperties} className="blink absolute top-[32%] left-[42%] w-[2.6%]" src="/assets/images/star-02-01.png" alt="" />

      <img style={{ "--delay": 1.2 } as React.CSSProperties} className="blink absolute top-[48.5%] left-[43.5%] w-[3.2%]" src="/assets/images/star-02-02.png" alt="" />
      <img style={{ "--delay": 0.4 } as React.CSSProperties} className="blink absolute top-[58%] left-[34%] w-[3.2%]" src="/assets/images/star-02-02.png" alt="" />
      <img style={{ "--delay": 2 } as React.CSSProperties} className="blink absolute top-[58%] left-[55%] w-[3.2%]" src="/assets/images/star-02-02.png" alt="" />
      <img style={{ "--delay": 1.6 } as React.CSSProperties} className="blink absolute top-[75.5%] left-[32.5%] w-[3.2%]" src="/assets/images/star-02-02.png" alt="" />
      <img style={{ "--delay": 0.8 } as React.CSSProperties} className="blink absolute top-[75.5%] left-[58%] w-[3.2%]" src="/assets/images/star-02-02.png" alt="" />
    </>),
    color: '#AAAAFF'
  },
  {
    number: "03",
    title: "暗号資産口座開設は必要？",
    content:
      "COIN TOGETHERでは、初めての方でも特別な暗号資産取引所の口座開設は不要です。MetaMaskをインストールすることでご利用いただけます。",
      image: (<>
        <img src="/assets/images/introduction-img-03.png" alt="" />
        <img style={{ "--delay": 1 } as React.CSSProperties} className="blink absolute bottom-[8.6%] right-[17%] w-[14.2424%]" src="/assets/images/star-03-01.png" alt="" />
      </>),
    button: <><MetamaskButton /></>,
    color: '#98E8A7'
  },
  {
    number: "04",
    title: (<>ポイントとデジタル資産の<br />違いは？</>),
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
    image: (<>
      <img src="/assets/images/introduction-img-04.png" alt="" />
      <img style={{ "--delay": 1 } as React.CSSProperties} className="blink absolute bottom-[37%] right-[21%] w-[32.7272%]" src="/assets/images/star-04-01.png" alt="" />
      <img className="shake absolute bottom-[44.5%] right-[7.5%] w-[11.06%]" src="/assets/images/star-04-02.png" alt="" />
    </>),
    color: '#FFFF84'
  },
  {
    number: "05",
    title: (<>様々な種類のデジタル資産が<br />もらえちゃう！</>),
    content: (
      <>
        COIN
        TOGETHERでは、イーサリアム（ETH）だけでなく、さまざまな種類のコインを受け取ることができます。提携店舗やサービスからの限定クーポンや割引サービスなど、多彩なメリットがあります。
        <br />
        これにより、資産形成だけでなく、日常の生活をより豊かに楽しむことができます。
      </>
    ),
    image: (<>
      <img src="/assets/images/introduction-img-06.png" alt="" />
      <div data-scroll className="absolute inset-0 flex items-center justify-center flex-col px-[7.1212%] space-y-[3.9394%] [filter:drop-shadow(4px_4px_10px_rgba(0,_0,_0,_0.25))]">
        <div className="flex w-full justify-center gap-[6.06%]">
          <img className="ani-fade-up delay-[200ms] w-[24.734%]" src="/assets/images/star-06-01.png" alt="" />
          <img className="ani-fade-up delay-[400ms] w-[24.734%]" src="/assets/images/star-06-02.png" alt="" />
          <img className="ani-fade-up delay-[600ms] w-[24.734%]" src="/assets/images/star-06-03.png" alt="" />
        </div>
        <div className="flex w-full justify-center gap-[6.06%]">
          <img className="ani-fade-up delay-[800ms] w-[24.734%]" src="/assets/images/star-06-04.png" alt="" />
          <img className="ani-fade-up delay-[1000ms] w-[24.734%]" src="/assets/images/star-06-05.png" alt="" />
        </div>
      </div>
    </>),
    color: '#FF929B'
  },
];


const IntroductionItem = ({
    title,
    content,
    note,
    button,
    image,
    color
  }: {
    title: ReactNode;
    content: ReactNode;
    note?: string;
    button?: ReactNode;
    image: ReactNode;
    color: string;
  }) => <div className="fade-up flex items-start group max-md:flex-col-reverse md:even:flex-row-reverse">
      <div className="flex flex-col py-10 md:py-5 items-center justify-center w-full md:w-[calc(50%+60px)] relative md:min-h-[440px] md:group-odd:mr-[-60px] md:group-even:ml-[-60px] px-8 md:px-[60px]" style={{backgroundColor: color}}>
        <div className="absolute top-0 left-0 w-[88px] md:w-[141px] aspect-[141/126] bg-[url('/assets/images/ic-tri.png')] text-[24px] md:text-[40px] font-semibold italic px-3 py-1 bg-cover"></div>
        <div className="md:max-w-[595px] px-2.5">
            <h5 className="text-center md:text-[32px] text-[20px] font-black relative">{title}</h5>
            <p className="md:text-[18px] text-[15px] mt-6 text-[#313131]">
                {content}
            </p>
            {note && <p className="md:text-[16px] text-[13px] text-[#666] mt-4">{note}</p>}
            {button && button}
        </div>
      </div>
      <div className="md:pt-[130px] relative md:group-odd:pr-[60px] md:group-even:pl-[60px] w-full md:w-1/2">
        <div className="[box-shadow:0px_4px_100px_0px_rgba(0,_0,_0,_0.10)] relative">
          {image}
        </div>
      </div>
  </div>;
  
const Introduction = () => {
  const ref = useScrollAnimations();
  return (
    <section
      ref={ref}
      className="relative bg-[#F0F1F3] pt-12 md:pt-[120px] pb-20 md:pb-[130px]"
    >
      <div className="w-full md:max-w-[1440px] max-w-[540px] mx-auto">
        <h3 className="text-center font-black text-[6vw] md:text-[6.667vw] dt:text-[96px] leading-none tracking-widest">
          What's COIN TOGETHER
        </h3>
        <div className="mt-12 md:mt-[88px] md:space-y-20">
          {data.map((item, index) => (
            <IntroductionItem
            key={index}
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
