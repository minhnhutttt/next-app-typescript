"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const data = [
    {
        topic: 'バイトクエストとは？',
        image: '/assets/images/item-01.png',
        label: '企業からのオファーを待て！',
        title: '地図上に表示されたあなたのNFTに届く仕事依頼をクリアして報酬をゲットせよ！',
        content: (<>バイトクエストは、マップの閲覧を許可された信頼ある企業や店舗からあなたの元へ仕事のオファーが届きます！<br />あなたは働ける日時やスキルを記載したNFTをバイトクエストマップに掲載し、ただ待つだけ。<br />あなたを必要としている企業からのオファーを見逃すな！</>)
    },
    {
        topic: 'GPSでオファー待ち！',
        image: '/assets/images/item-02.png',
        label: '企業よ、私はここにいる！',
        content: (<>高精度の位置情報機能を使って、まるで宝探しのように企業や店舗はあなたを見つけ出します！<br />あなたの価値を最大限に活かせる仕事がここにあります！</>)
    },
    {
        topic: 'NFTで自分を証明！',
        image: '/assets/images/item-03.png',
        label: '企業よ、これが私だ！',
        content: (<>NFTには基本情報に加えて、動画など自分をよりよく理解してもらうための情報も掲載できます！</>)
    },
]

const List = () => {
    const ref = useScrollAnimations();
    return (
        <section ref={ref} className="relative overflow-hidden py-[100px] md:py-[160px] px-4">
            <div className="w-full max-w-[1180px] mx-auto">
                {data.map((item, index) => (
                    <div className="" key={index}>
                        <div className="md:text-[40px] text-[24px] text-white font-extrabold flex items-center justify-center gap-4 h-20 md:h-[120px] relative">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="34" viewBox="0 0 21 34" fill="none">
                                    <path d="M20.1271 16.2441C20.5876 16.6428 20.5876 17.3572 20.1271 17.7559L1.65465 33.7536C1.00701 34.3144 -1.65467e-06 33.8544 -1.61722e-06 32.9976L-2.1866e-07 1.00237C-1.81211e-07 0.145615 1.00701 -0.314438 1.65465 0.246438L20.1271 16.2441Z" fill="white"/>
                                </svg>
                            </span>
                            {item.topic}
                            <span className="absolute">
                                <img src="/assets/images/deco.png" alt="" />
                            </span>
                        </div>
                        <div className="bg-black border-[5px] border-white rounded-[40px] md:py-[74px] py-8 md:px-10 px-5 flex items-center md:gap-[52px] gap-10">
                            <figure>
                                <img src={item.image} alt="" />
                            </figure>
                            <div className="">
                                <div className="flex">
                                    <h5 className="relative aspect-[351/79] bg-[url('/assets/images/bg-list.png')] bg-cover">
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default List;
