"use client";

import { useSlideFadeUp } from "@/hooks/useSlideFadeUp";

const data = [
  {
    title: "プロモーション収益",
    list: [
      "店舗規模に応じた月額プラン",
      "成果報酬型の来店促進",
      "エリア独占権による年間契約",
    ],
  },
  {
    title: "データ分析サービス",
    list: ["定期レポートサービス", "カスタマイズ分析", "APIアクセス提供"],
  },
  {
    title: "プラットフォーム手数料",
    list: ["NFTクーポン発行手数料", "特別キャンペーン企画料", "システム利用料"],
  },
];

export const Revenue = ({ isActive }: { isActive: boolean }) => {
  const ref = useSlideFadeUp(isActive, {
    duration: 1.2,
    delay: 0.5,
    stagger: 0.1,
    y: 100,
    triggerOnActive: true,
  });

  return (
    <section className="w-full h-full overflow-hidden">
      <div
        ref={ref}
        className="w-full h-full flex items-center justify-center md:pl-[160px] xl:px-[160px] pl-10 pr-5"
      >
        <div className="w-full max-w-[1050px]">
          <div className="fade-item flex items-center justify-center max-md:pr-5">
            <div className="relative flex flex-col items-center justify-center max-md:pr-0 max-xl:pr-[160px]">
              <p className="absolute font-audiowide text-[min(18.52vmin,150px)] u-text-stroke opacity-10 leading-none whitespace-nowrap">
                Revenue
              </p>
              <h3 className="lg:text-[min(5.7vmin,48px)] text-[min(5vmin,32px)] tracking-wider font-black text-center">
                収益モデル
              </h3>
              <span className="bg-[linear-gradient(-270deg,_#F70FFF_6.79%,_rgba(18,_214,_223,_0.02)_100%)] w-full block h-1 rounded-full"></span>
            </div>
          </div>
          <div className="flex justify-center pt-[min(5.5vmin,44px)] pb-[min(3.7vmin,30px)] gap-3 md:gap-[min(3.7vmin,30px)] max-md:flex-col max-md:w-[320px] max-md:mx-auto">
            {data.map((item, index) => (
              <div
                key={index}
                className="fade-item w-[320px] md:h-[min(40vmin,320px)] p-[min(1vmin,15px)] flex items-center justify-center flex-col border [&:nth-of-type(1)]:border-[#2EDCFF] [&:nth-of-type(1)]:bg-[#2EDCFF]/[0.1] [&:nth-of-type(2)]:border-[#DB00B2] [&:nth-of-type(2)]:bg-[#DB00B2]/[0.1] [&:nth-of-type(3)]:border-[#6F00FF] [&:nth-of-type(3)]:bg-[#6F00FF]/[0.1] rounded-[20px] max-md:p-2"
              >
                <p className="font-bold text-center leading-loose text-[14px] xl:text-[min(3vmin,24px)] md:text-[min(2.5vmin,18px)] mb-1 md:mb-[min(3vmin,24px)]">
                  {item.title}
                </p>
                <ul className="text-[13px] xl:text-[min(2.5vmin,20px)] md:text-[min(2vmin,14px)] md:space-y-[min(2vmin,15px)] space-y-1 font-medium">
                  {item.list.map((listItem, listIndex) => (
                    <li key={listIndex} className="flex items-center gap-2">
                      <span>
                        <img className="max-md:w-3 max-lg:w-4" src="/assets/images/check-circle.svg" alt="" />
                      </span>
                      <span className="flex-1">{listItem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="fade-item w-full max-w-[544px] mx-auto">
            <div className="flex justify-center items-center gap-[30px]">
                <span className="h-px flex-1 bg-white"></span>
                <p className="font-medium text-[min(4vmin,18px)]">収益予測</p>
                <span className="h-px flex-1 bg-white"></span>
            </div>
            <div className="flex justify-center mt-[min(2.5vmin,16px)]">
                <p className="text-[13px] md:text-[min(2.5vmin,16px)] leading-loose">
                    初期（6ヶ月）　  ：　基盤構築、パートナー獲得 <br />
                    成長期（12ヶ月）：　ユーザー拡大、収益化本格化<br />
                    拡大期（24ヶ月）：　全国展開、収益最大化
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
