"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";
import { ReactNode } from "react";

const data = [
    {
        id: "01",
        title: "3分で完了する経営診断（10問）",
        text :"事業分野・成長段階・直面する課題・リーダーシップスタイルなど、経営の本質に関わる10の質問。 回答するだけで自社の現状と方向性が明確になり、意思決定の土台が形成されます。",
        image: "/assets/images/feature-img-01.jpg",
    },
    {
        id: "02",
        title: "加藤慶也AIが経営難題に即答",
        text :"加藤慶也氏の経営哲学をベースに構築した人格AIが、あなたの回答データをもとに深い洞察と実行プランを即提示します。",
        image: "/assets/images/feature-img-02.jpg",
        list: [
            "経営課題の本質を抽出し、根本原因を特定",
            "加藤氏の実体験に基づく、具体的で実行可能なアクションプラン",
            "地方創生とグローバル展開、両視点からの戦略提案",
            "即効性と影響力を考慮した「次の一手」の明確化",
        ]
    },
    {
        id: "03",
        title: "戦略的判断の見える化・共有化",
        text :"診断結果はビジュアル化されたレポートとしてWeb・PDFで提供。経営者の意図や戦略が構造化された状態で、役員会議・社内共有・パートナー折衝の資料としてそのまま活用できます。 回答するだけで自社の現状と方向性が明確になり、意思決定の土台が形成されます。",
        image: "/assets/images/feature-img-03.jpg",
    },
    {
        id: "04",
        title: "即実行可能な現実的戦略提案",
        text :"机上の空論ではなく、あなたの業種・企業規模・成長段階に適合した実践的アドバイス。抽象的な方向性ではなく、明日から着手できる具体的な「打ち手」を提示し、意思決定から行動までの時間を大幅に短縮します。 回答するだけで自社の現状と方向性が明確になり、意思決定の土台が形成されます。",
        image: "/assets/images/feature-img-04.jpg",
    },
]

const FeatureItem = ({id, title, text, image, list}: {id: string, title: string, text: ReactNode,image: string, list?: string[]}) => (
    <div className="border border-[#01A92E] bg-[linear-gradient(17deg,_#012200_2.14%,_#00320D_22.45%,_#003F18_43.68%,_#004914_49.22%,_#00650C_67.68%,_#007606_82.45%,_#007C05_94.45%)] [box-shadow:0px_4px_80px_0px_rgba(8,_90,_29,_0.60)] py-[15vw] md:py-[95px] px-5 relative overflow-hidden
">
    <span className="absolute top-0 left-0 md:left-[-25px] leading-[0.7] font-['Times_New_Roman'] text-white/20 font-bold italic text-[20vw] md:text-[400px]">{id}</span>
    <div className="w-full max-w-[1210px] mx-auto flex items-center gap-10 lg:gap-2 max-lg:flex-col-reverse">
        <div className="flex-1">
            <h5 className="md:text-[42px] text-[5.5vw] font-bold">{title}</h5>
            <p className="md:text-[18px] text-[3.5vw] font-medium mt-[5vw] md:mt-5 leading-loose md:pr-5">{text}</p>
            {(list && list.length > 0) &&
            <div className="md:mt-[70px] mt-[5vw] pl-6 md:pl-10">
                <ul className="md:text-[16px] text-[3vw] font-medium leading-loose list-disc">
                    {list.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            }
        </div>
        <div className="xl:w-[600px] lg:w-1/2">
            <img src={image} alt={title} />
        </div>
    </div>
</div>
)

const Features = () => {
  const ref = useScrollAnimations();
  return (
    <section
      ref={ref}
      className="px-5 mt-10"
    >
      <div className="w-full max-w-[1440px] mx-auto">
        <h3 className="md:text-[80px] text-[10vw] font-semibold text-center tracking-wider">経愛はこう使う！<br />使用ステップ</h3>
        <div className="w-full max-w-[1360px] mx-auto md:mt-16 mt-[10vw] md:space-y-20 space-y-[10vw]">
            {data.map((item)=>
            <FeatureItem
                id={item.id}
                title={item.title}
                text={item.text}
                image={item.image}
                list={item.list}
                key={item.id}
            />
            )}
            
        </div>
      </div>
    </section>
  );
};

export default Features;
