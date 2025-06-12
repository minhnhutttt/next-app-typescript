import Image from 'next/image';
import { title } from 'process';
import { ReactNode } from 'react';

const features = [
    {
        icon: "/assets/images/feature-item-01.png",
        title: (<><span className="font-bold">目的別ゴール</span> (ボタン)をトップページに表示</>),
        alt: "Goal"
    },
    {
        icon: "/assets/images/feature-item-02.png",
        title: (<>イベントごとに<span className="font-bold">ゴール変更も可能</span></>),
        alt: "Refresh"
    },
    {
        icon: "/assets/images/feature-item-03.png",
        title: (<>目的から<span className="font-bold">直接ページ遷移</span>することができる</>),
        alt: "Target"
    },
    {
        icon: "/assets/images/feature-item-04.png",
        title: (<>クッキーによる<span className="font-bold">訪問履歴分析</span></>),
        alt: "Cookie"
    }
] as const;

interface FeatureCardProps {
    icon: string;
    title: ReactNode;
    alt: string;
}

const FeatureCard = ({ icon, title,  alt }: FeatureCardProps) => (
    <div className="flex flex-col items-center max-w-[240px] sm:max-w-xs mx-auto">
        <div className="rounded-full flex items-center justify-center mb-3 sm:mb-4 md:mb-6">
            <img src={icon} alt={alt} />
        </div>
        <div className="max-w-[264px] flex flex-col items-start text-left md:text-[23px] text-[16px] font-medium">
            <p className="">
                {title}
            </p>
        </div>
    </div>
);


const Feature = () => {
    return (
        <section className="relative pt-[120px] md:pt-[240px]">
            <div className="w-full md:max-w-[1440px] max-w-[480px] mx-auto px-5 md:px-10">
                <div className="flex md:items-end md:gap-8 lg:gap-16 max-md:flex-col">
                    <div className="flex-1 md:pb-12 pb-8">
                        <div className="flex items-center">
                            <span className="bg-gradient-to-br from-[#10E188] to-[#05BAEA] w-10 md:w-[50px] h-1.5 md:h-2 mr-3 rounded-full"></span>
                            <p className=" text-[18px] md:text-[32px] font-bold font-syne">FEATURES</p>
                        </div>
                        
                        <h3 className="text-[24px] md:text-[32px] lg:text-[40px] xl:text-[50px]  min-[1366px]:text-[64px] font-black pt-3 tracking-[0.2em]">
                            あなたのサイト<br/>
                            <span className="bg-gradient-to-r from-[#10E188] to-[#05BAEA] text-transparent bg-clip-text">
                                目的達成の導線
                            </span><br/>
                            できていますか？
                        </h3>
                        
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
                    <div className="max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-5xl border-b border-black mt-2 sm:mt-4 mb-10 sm:mb-8 md:mb-12 lg:mb-16 px-4">
                        <h2 className="text-[20px] md:text-[32px] font-bold inline-block pb-2 sm:pb-5 px-2 md:px-20">
                            シンプルな仕組み、驚きの効果
                        </h2>
                    </div>
                    
                    <div className="grid grid-cols-2 xl:grid-cols-4 w-full max-w-[1280px] mx-auto max-md:gap-10 gap-y-10">
                        {features.map((feature, index) => (
                            <FeatureCard key={index} {...feature} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feature;