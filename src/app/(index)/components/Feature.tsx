import React, { memo } from 'react'; 
import Image from 'next/image';

const features = [
    {
        icon: "/images/sections/feature/ic_goal.png",
        firstLineSegments: [
            { text: "目的別ゴール", isBold: true },
            { text: " (ボタン)をトップページに表示" }
        ],
        subtitle: "", 
        alt: "Goal"
    },
    {
        icon: "/images/sections/feature/ic_arrows-spin.png",
        firstLineSegments: [
            { text: "イベントごとに" },
            { text: "ゴール変更も可能", isBold: true }
        ],
        subtitle: "",
        alt: "Refresh"
    },
    {
        icon: "/images/sections/feature/ic_target-line.png",
        firstLineSegments: [
            { text: "目的から" },
            { text: "直接ページ遷移", isBold: true }
        ],
        subtitle: "することができる",
        alt: "Target"
    },
    {
        icon: "/images/sections/feature/ic_moon.png",
        firstLineSegments: [
            { text: "クッキーによる" },
            { text: "訪問履歴分析", isBold: true }
        ],
        subtitle: "",
        alt: "Cookie"
    }
] as const;

interface TextSegment {
    text: string;
    isBold?: boolean;
}

interface FeatureCardProps {
    icon: string;
    firstLineSegments: readonly TextSegment[];
    subtitle: string;
    alt: string;
}

const FeatureCard = ({ icon, firstLineSegments, subtitle, alt }: FeatureCardProps) => (
    <div className="flex flex-col items-center max-w-[240px] sm:max-w-xs mx-auto">
        <div className="bg-[#F7F7F7] rounded-full border-2 border-[#10E188] w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 xl:w-56 xl:h-56 2xl:w-60 2xl:h-60 flex items-center justify-center mb-3 sm:mb-4 md:mb-6">
            <img src="" alt="" />
        </div>
        <div className="max-w-[264px] flex flex-col items-start text-left text-14-16-18-20-24">
            <p className="leading-10">
                {firstLineSegments.map((segment, index) => (
                    <span key={index} className={segment.isBold ? "font-bold" : ""}>
                        {segment.text}
                    </span>
                ))}
            </p>
            {subtitle && (
                <p className="leading-tight">{subtitle}</p>
            )}
        </div>
    </div>
);


const Feature = () => {
    return (
        <section className="relative pt-[120px] md:pt-[240px]">
            <div className="flex md:items-end w-full md:max-w-[1440px] max-w-[480px] mx-auto px-5 md:px-10  md:gap-8 lg:gap-16 max-md:flex-col">
                <div className="flex-1 md:pb-12 pb-8">
                    <div className="flex items-center">
                        <span className="bg-gradient-to-br from-[#10E188] to-[#05BAEA] w-10 md:w-[50px] h-1.5 md:h-2 mr-3 rounded-full"></span>
                        <p className="text-black text-[18px] md:text-[32px] font-bold font-syne">FEATURES</p>
                    </div>
                    
                    <h1 className="text-[24px] md:text-[32px] lg:text-[40px] xl:text-[50px]  min-[1366px]:text-[64px] font-black pt-3 tracking-[0.2em]">
                        あなたのサイト<br/>
                        <span className="bg-gradient-to-r from-[#10E188] to-[#05BAEA] text-transparent bg-clip-text">
                            目的達成の導線
                        </span><br/>
                        できていますか？
                    </h1>
                    
                    <div className="text-left space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-9 md:text-[18px] text-[15px] lg:text-[24px] pt-5 md:pt-8 lg:pt-12 lg:pl-10 md:pl-4">
                        <p>
                            従来のウェブサイトは、「説明から誘導」の流れが主流でした。
                        </p>
                        <p>
                            しかし、今のユーザーは「目的から直行」する行動を求めています。
                        </p>
                        <p>
                            ウェブサイトにも案内系が必要な時代に必要なのは、一直線に目的を達成できる構造です。
                        </p>
                        <p>
                            UDMなら簡単設定・即実装。今日からコンバージョンファーストのサイトにスイッチできます。
                        </p>
                    </div>
                </div>

                <div className="relative md:max-[1366px]:w-1/2">
                    <div className="relative w-full">
                        <img src="/assets/images/feature-img.png" alt="" />
                    </div>
                </div>
            </div>

            <div className="flex flex-col mt-8 md:mt-12 lg:mt-20 text-center items-center justify-center w-full z-20">
                <div className="max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-5xl border-b border-black mt-2 sm:mt-4 mb-6 sm:mb-8 md:mb-12 lg:mb-16 px-4">
                    <h2 className="text-[20px] md:text-[32px] font-bold inline-block pb-2 sm:pb-5 px-2 md:px-20">
                        シンプルな仕組み、驚きの効果
                    </h2>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-10 md:mt-12 w-full px-2 sm:px-4 md:px-6 lg:px-8">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Feature;