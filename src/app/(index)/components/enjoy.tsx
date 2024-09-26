"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const data = [
    {
        id: '01',
        image: '/assets/images/howto-01.png',
        title: '限定NFTクーポンをGETせよ！',
        text: '決められた日時・場所でしか受け取れない限定NFTクーポンがあるらしい、よく行くお店の限定クーポンが色々な場所に点在している？コンプリートするしかないでしょ！'
    },
    {
        id: '02',
        image: '/assets/images/howto-02.png',
        title: 'スマホで簡単管理！',
        text: 'お気に入りのお店のNFTクーポンを簡単にコレクション！直感的な操作でコレクションを眺めたり、友達とシェアしたり、SNSに投稿して自慢しよう！'
    },
    {
        id: '03',
        image: '/assets/images/howto-03.png',
        title: '譲渡や販売も！',
        text: 'NFTの送受信が無料だから、友達にプレゼントしたり、楽しさをシェア！また、マーケットプレイスで販売して新たな価値を見つけることも可能！'
    }
]

const Enjoy = () => {
    const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative overflow-hidden pt-20 bg-[#FFF8BC]/[0.2]  md:pb-[9.931vw] dt:pb-[143px]">
        <div className="">
            <h3 className="fade-up text-center md:text-[42px] text-[32px] font-bold font-gothic">楽しみ方</h3>
            <div className="flex flex-wrap justify-center w-full max-w-[1220px] mx-auto gap-9 mt-12 md:mt-24 max-md:max-w-[380px]">
                {data.map((item,index)=> {
                    return (
                        <div className="fade-up w-full md:w-[380px] border border-[#A77020] rounded-[14px] p-4" key={index}>
                            <figure>
                                <img src={item.image} alt="" />
                            </figure>
                            <div className="bg-[linear-gradient(180deg,_#FFFCF4_-15.14%,_#FFDBA4_100%)] h-[262px] flex flex-col justify-between">
                                <div>
                                    <h5 className="md:text-[21px] text-[18px] font-bold text-center py-3 border-b border-[#A69F99]">{item.title}</h5>
                                    <p className="md:text-[19px] text-[16px] p-3 pb-0 leading-[1.4]">{item.text}</p>
                                </div>
                                <div className="text-right text-[44px] md:text-[66px] font-extrabold text-[#D29D4F] leading-none px-3 bg-[url(/assets/images/howto-bottom.png)] bg-no-repeat bg-right-bottom">
                                    {item.id}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
  );
};

export default Enjoy;
