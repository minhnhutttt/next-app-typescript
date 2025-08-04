"use client";

import { Splide, SplideSlide } from "react-splide-ts";
import "@splidejs/react-splide/css";

const dataEnhancements = [
  {
    icon: "/assets/images/ic-inazuma.svg",
    text: "月間交換回数に応じたボーナス",
  },
  {
    icon: "/assets/images/ic-shopping-bag.svg",
    text: "フラッシュセール、季節・地域キャンペーン",
  },
  {
    icon: "/assets/images/ic-fave.svg",
    text: (
      <>
        FAVERとの連携
        <br />
        <span className="md:text-[min(2vmin,15px)] text-[min(3vmin,20px)]">
          ( NFTチケット、限定グッズなど）
        </span>
      </>
    ),
  },
]

const dataIncentive = [
  {
    icon: "/assets/images/ic-incentive-01.svg",
    title: "ブロンズ",
    tgz: "100",
    text: <>基本交換レート</>,
    color: "#CD7F32",
  },
  {
    icon: "/assets/images/ic-incentive-02.svg",
    title: "シルバー",
    tgz: "500",
    text: (
      <>
        交換時5%割引
        <br />+<br />
        限定NFTアクセス
      </>
    ),
    color: "#C0C0C0",
  },
  {
    icon: "/assets/images/ic-incentive-03.svg",
    title: "ゴールド",
    tgz: "1,000",
    text: (
      <>
        交換時10%割引
        <br />+<br />
        月1回特別オファー
      </>
    ),
    color: "#FFD700",
  },
  {
    icon: "/assets/images/ic-incentive-04.svg",
    title: "プラチナ",
    tgz: "3,000",
    text: (
      <>
        交換時15%割引
        <br />+<br />
        VIPイベント
      </>
    ),
    color: "#E5E4E2",
  },
  {
    icon: "/assets/images/ic-incentive-05.svg",
    title: "ダイヤモンド",
    tgz: "5,000",
    text: (
      <>
        交換時20%割引
        <br />+<br />
        全特典
      </>
    ),
    color: "#B9F2FF",
  },
];

export const Benefits = ({ isActive }: { isActive: boolean }) => {

  return (
    <section className="w-full h-full overflow-hidden">
      <div
        className="w-full h-full flex justify-center flex-col md:pl-[160px] pl-14"
      >
        <div className="flex items-center justify-center md:pr-[160px] pr-14">
          <div className="relative flex flex-col items-center justify-center">
              <p className="absolute font-audiowide text-[min(18.52vmin,150px)] u-text-stroke tracking-widest opacity-10 leading-none">Benefits</p>
              <h3 className="lg:text-[min(5.7vmin,48px)] text-[min(4vmin,28px)] tracking-wider font-black text-center">アクションを促進するメカニズム</h3>
              <span className="bg-[linear-gradient(-270deg,_#F70FFF_6.79%,_rgba(18,_214,_223,_0.02)_100%)] w-full block h-1 rounded-full"></span>
          </div>
        </div>
        <div className="w-full">
          <div className="flex w-full pt-[min(5.5vmin,44px)] pb-[min(3.7vmin,30px)] max-md:flex-col md:items-center md:space-x-[30px]">
            <p className="md:text-[min(2.7vmin,22px)] text-[min(4vmin,30px)] max-md:pb-4 whitespace-nowrap flex-1">
              ユーティリティ強化
            </p>
            <div className="w-full">
              <Splide
                options={{
                  pagination: false,
                  arrows: false,
                  autoWidth: true,
                  gap: "1rem",
                }}
                className="w-full"
              >
                {dataEnhancements.map((item, index) => (
                  <SplideSlide key={index} className="fade-item relative !w-full md:max-w-[290px] max-w-[220px] px-4 md:py-[min(3vmin,24px)] py-[min(2vmin,17px)] md:h-[min(25vmin,200px)] rounded-[24px] bg-[rgba(255,_255,_255,_0.10)] backdrop-filter backdrop-blur-[3.5px] flex items-center justify-center">
                      <div className="relative space-y-[min(3vmin,24px)]">
                        <p>
                          <img src={item.icon} alt="" />
                        </p>
                        <p className="text-[min(4vmin,18px)]">{item.text}</p>
                      </div>
                  </SplideSlide>
                ))}
              </Splide>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex w-full pt-[min(5.5vmin,44px)] pb-[min(3.7vmin,30px)] max-md:flex-col md:items-center md:space-x-[30px]">
            <p className="fade-item md:text-[min(2.7vmin,22px)] text-[min(4vmin,30px)] max-md:pb-4 whitespace-nowrap">
              インセンティブ制度
            </p>
            <div className="w-[calc(100%-230px)] max-md:w-full">
              <Splide
                options={{
                  pagination: false,
                  arrows: false,
                  autoWidth: true,
                  gap: "1rem",
                }}
                className="w-full"
              >
                {dataIncentive.map((item, index) => (
                  <SplideSlide
                    key={index}
                    className="fade-item relative aspect-square md:w-full md:max-w-[min(33.33vmin,270px)] w-[200px] h-full md:max-h-[min(33.33vmin,270px)] rounded-full bg-[#18003D]/[0.3] backdrop-filter backdrop-blur-[3.5px] py-[min(3vmin,32px)] border" style={{ borderColor: item.color }}
                  >
                    <div className="relative text-center flex flex-col items-center">
                      <img className="w-full max-md:w-10 md:max-w-[min(6.3vmin,51px)]" src={item.icon} alt={item.title} />
                      <p className="md:text-[min(3vmin,24px)] text-[18px] font-medium">
                        {item.title}
                      </p>
                      <p className="text-[15px] md:text-[min(2.5vmin,16px)] border-b border-white/30 leading-none pb-[min(1vmin,10px)]">
                        <span className="text-[24px] md:text-[min(5vmin,40px)] font-bold mr-1">
                          {item.tgz}
                        </span>
                        TGZ
                      </p>
                      <p className="md:text-[min(2.5vmin,16px)] text-[14px] leading-snug pt-[min(1vmin,10px)]">
                        {item.text}
                      </p>
                    </div>
                  </SplideSlide>
                ))}
              </Splide>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
