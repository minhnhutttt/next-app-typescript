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
            <div className="w-full md:max-w-[1180px] max-w-[480px] mx-auto md:space-y-20 space-y-10">
                {data.map((item, index) => (
                    <div className="" key={index}>
                        <div className="md:text-[40px] text-[24px] text-white font-extrabold flex items-center justify-center gap-4 h-20 md:h-[120px] relative mb-2">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="md:w-[21px] w-4" viewBox="0 0 21 34" fill="none">
                                    <path d="M20.1271 16.2441C20.5876 16.6428 20.5876 17.3572 20.1271 17.7559L1.65465 33.7536C1.00701 34.3144 -1.65467e-06 33.8544 -1.61722e-06 32.9976L-2.1866e-07 1.00237C-1.81211e-07 0.145615 1.00701 -0.314438 1.65465 0.246438L20.1271 16.2441Z" fill="white"/>
                                </svg>
                            </span>
                            {item.topic}
                            <span className="absolute">
                                <img className="max-md:w-[70px]" src="/assets/images/deco.png" alt="" />
                            </span>
                        </div>
                        <div className="bg-black border-[5px] border-white rounded-[40px] md:py-[74px] py-8 md:px-10 px-5 flex items-center max-md:flex-col md:gap-[52px] gap-6">
                            <figure className="max-md:w-full max-lg:w-1/2">
                                <img src={item.image} alt="" />
                            </figure>
                            <div className="flex-1">
                                <h5 className="md:mb-5 mb-3 md:text-[24px] leading-none text-[18px] font-extrabold relative flex items-center justify-center w-full aspect-[351/79] md:max-w-[351px] max-w-[300px] bg-[url('/assets/images/bg-list.png')] bg-cover">
                                    {item.label}
                                </h5>
                                {item.title && <p className="text-white font-extrabold md:text-[24px] text-[18px]">{item.title}</p>}
                                <p className="md:text-[18px] text-[15px] text-white leading-[2]">{item.content}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default List;
