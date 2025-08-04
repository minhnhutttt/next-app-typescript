"use client";

import { useSlideFadeUp } from "@/hooks/useSlideFadeUp";
import { ReactNode } from "react";

const data = [
  {
    phase: <>Phase 1: <br className="md:hidden" />Q2 2025</>,
    list: [
      "東京都内10店舗でテスト開始",
      "基本機能の実装と検証",
      "アーリーアダプターコミュニティ形成",
    ],
  },
  {
    phase: <>Phase 2: <br className="md:hidden" />Q3 2025</>,
    list: ["複数都市への展開", "OPEN FAVE連携開始", "ユーザーベース拡大"],
  },
  {
    phase: <>Phase 3: <br className="md:hidden" />Q4 2025</>,
    list: [
      "全国主要都市カバー",
      "地方自治体パートナーシップ",
      "エコシステムの本格稼働",
    ],
  },
  {
    phase: <>Phase 4: <br className="md:hidden" />2026</>,
    list: [
      "国際展開の検討",
      "新カテゴリー追加（宿泊、交通等）",
      "プラットフォームの更なる発展",
    ],
  },
];

interface RoadmapItemProps {
  item: {
    phase: ReactNode;
    list: string[];
  };
  index: number;
  className?: string;
}

const RoadmapItem: React.FC<RoadmapItemProps> = ({
  item,
  index,
  className = "",
}) => {
  return (
    <div
      key={index}
      className={`fade-item w-full md:max-w-[300px] md:mx-4 relative flex items-center md:justify-center ${className}`}
    >
      <div className="absolute max-md:left-[-65px] md:min-w-[400px] top-[min(-5%,-25px)] md:top-[min(-7vmin,-70px)] max-md:w-[200px] md:w-[min(65vmin,521px)]">
        <img src="/assets/images/bg-roadmap.png" alt="" />
      </div>
      <div className="relative max-md:flex max-md:gap-5">
        <h4 className="font-bold md:text-[min(2.7vmin,22px)] text-[14px] text-[#2EDCFF] font-audiowide text-center max-md:w-[72px]">
          {item.phase}
        </h4>
        <div className="flex justify-center max-md:flex-1">
          <ul className="list-disc md:pt-[min(3vmin,20px)] space-y-[min(1vmin,8px)] pl-5">
            {item.list.map((listItem, listIndex) => (
              <li
                key={listIndex}
                className="text-[13px] lg:text-[min(2.5vmin,16px)] md:text-[min(2.5vmin,12px)] text-white/80 "
              >
                {listItem}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export const Roadmap = ({ isActive }: { isActive: boolean }) => {
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
        className="w-full h-full flex items-center justify-center xl:px-[160px] md:pl-[160px] pl-10 pr-5"
      >
        <div className="w-full md:max-w-[1200px] max-w-[400px]">
          <div className="fade-item flex items-center justify-center max-md:pr-0 max-xl:pr-[160px]">
            <div className="relative flex flex-col items-center justify-center">
              <p className="absolute font-audiowide text-[min(18.52vmin,150px)] u-text-stroke opacity-10 leading-none whitespace-nowrap">
                Roadmap
              </p>
              <h3 className="lg:text-[min(5.7vmin,48px)] text-[min(5vmin,32px)] tracking-wider font-black text-center">
                ロードマップ
              </h3>
              <span className="bg-[linear-gradient(-270deg,_#F70FFF_6.79%,_rgba(18,_214,_223,_0.02)_100%)] w-full block h-1 rounded-full"></span>
            </div>
          </div>
          <div className="flex justify-center items-start w-full pt-[min(5.5vmin,44px)] pb-[min(3.7vmin,30px)] relative max-md:flex-col max-md:space-y-8">
            <div className="fade-item max-md:hidden absolute max-md:right-0 md:left-0 top-0 md:top-[min(35vmin,290px)] w-0.5 h-full md:w-full md:h-1 bg-[#1D0379] rounded-full">
                <span className="w-[70%] bg-[#DB00B2] h-full rounded-full absolute"></span>
            </div>
            <RoadmapItem
              item={data[0]}
              index={0}
              className=""
            />
            <RoadmapItem
              item={data[1]}
              index={1}
              className="md:mt-[min(35vmin,290px)] xl:-mx-[min(7vmin,100px)] md:-mx-[min(15vmin,140px)]"
            />
            <RoadmapItem
              item={data[2]}
              index={2}
              className=""
            />
            <RoadmapItem
              item={data[3]}
              index={3}
              className="md:mt-[min(35vmin,290px)] xl:-ml-[min(7vmin,100px)] md:-ml-[min(15vmin,140px)]"
            />
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
};
