"use client";

import { useSlideFadeUp } from "@/hooks/useSlideFadeUp";

const data = [
    {
        phase: "Phase 1: Q2 2025",
        list: [
            "東京都内10店舗でテスト開始",
            "基本機能の実装と検証",
            "アーリーアダプターコミュニティ形成"
        ]
    },
    {
        phase: "Phase 2: Q3 2025",
        list: [
            "複数都市への展開",
            "OPEN FAVE連携開始",
            "ユーザーベース拡大"
        ]
    },
    {
        phase: "Phase 3: Q4 2025",
        list: [
            "全国主要都市カバー",
            "地方自治体パートナーシップ",
            "エコシステムの本格稼働"
        ]
    },
    {
        phase: "Phase 4: 2026",
        list: [
            "国際展開の検討",
            "新カテゴリー追加（宿泊、交通等）",
            "DAOへの完全移行"
        ]
    },
]

export const Roadmap = ({ isActive }: {isActive: boolean}) => {
  const ref = useSlideFadeUp(isActive, {
    duration: 1.2,
    delay: 0.5,
    stagger: 0.1,
    y: 100,
    triggerOnActive: true
  });

  return (
    <section className="w-full h-full overflow-hidden">
      <div 
        ref={ref}
        className="w-full h-full flex items-center justify-center md:px-[160px] pl-10 pr-5"
      >
        <div className="w-full max-w-[1200px]">
            <div className="fade-item flex items-center justify-center max-md:pr-5">
                <div className="relative flex flex-col items-center justify-center">
              <p className="absolute font-audiowide text-[min(18.52vmin,150px)] u-text-stroke opacity-10 leading-none whitespace-nowrap">Roadmap</p>
              <h3 className="lg:text-[min(5.7vmin,48px)] text-[min(5vmin,32px)] tracking-wider font-black text-center">ロードマップ</h3>
              <span className="bg-[linear-gradient(-270deg,_#F70FFF_6.79%,_rgba(18,_214,_223,_0.02)_100%)] w-full block h-1 rounded-full"></span>
          </div>
            </div>
            <div className="flex justify-center pt-[min(5.5vmin,44px)] pb-[min(3.7vmin,30px)]">
                {data.map((item, index) => (
                    <div key={index} className="fade-item w-full max-w-[300px] mx-4">
                        <h4 className="font-bold text-[min(4vmin,18px)]">{item.phase}</h4>
                        <ul className="list-disc pl-5">
                            {item.list.map((listItem, listIndex) => (
                                <li key={listIndex} className="text-[min(3vmin,16px)]">{listItem}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};