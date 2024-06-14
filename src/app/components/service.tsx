"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const data = [
    {
        bubble: (<>広告主のアサインは<br />我々が行います！</>),
        title: '広告保証',
        image: '/assets/images/img-service-01.png',
        text: (<><span className="underline">貴社専用のマップには広告掲載が可能！</span>広告主の獲得は私たちにお任せください。収益も見込めます。<br />※審査があります。</>)
    },
    {
        bubble: (<>簡単操作ですぐに<br />作成できます！</>),
        title: 'NFTの発行',
        image: '/assets/images/img-service-02.png',
        text: (<><span className="underline">NFTクーポンの発行と管理がとても簡単!!</span>直感的なインターフェースで、誰でも手軽にクーポンを作成し、貴社専用のNFT Mapに掲載できます。クーポンの利用状況を確認できるので、効率的なマーケティング戦略を実現します。手軽で効果的なNFTクーポンを活用して、顧客とのエンゲージメントを高めます。</>)
    },
    {
        bubble: (<>あなたの系列店だけ<br />表示される！</>),
        title: '貴社専用マップ',
        image: '/assets/images/img-service-03.png',
        text: (<><span className="underline">貴社専用のマップで、お店の魅力を最大限に発信！</span><br />マップを通じて、顧客にとって便利で魅力的な情報を提供。<br />広告や特典を効果的に配置し、来店促進を強化します。<br />貴社だけのオリジナルマップで、他社との差別化を図り、ビジネスの成長を加速させます。</>)
    },
]

const Service = () => {
  const ref = useScrollAnimations();

  return (
    <section ref={ref} className="relative overflow-hidden md:pr-10 pr-5">
        <div className="fade-up bg-[#2639A6] pl-10 md:pr-8 pr-5 md:py-20 py-12 rounded-r-[60px]">
            <div className="w-full max-w-[1360px] mx-auto flex gap-10 flex-wrap-reverse">
                <div className="w-full max-w-[1050px] flex gap-[30px] max-lg:flex-wrap justify-center">
                    {data.map((item, index)=> (
                        <div className="fade-up w-[330px] bg-white rounded-[20px] border border-[#CEE4FF] pt-3 pb-9 px-[25px]" key={index}>
                            <div className="w-[235px] h-[83px] bg-[url('/assets/images/img-service-bubble.png')] bg-cover mx-auto mtext-[16px] font-bold flex justify-center pt-3 text-center">
                                {item.bubble}
                            </div>
                            <div className="text-main text-center md:text-[28px] text-[20px] font-bold tracking-widest my-3">{item.title}</div>
                            <div className="rounded-[10px] overflow-hidden">
                                <img src={item.image} alt="" />
                            </div>
                            <div className="text-main md:text-[16px] text-[14px] mt-5">{item.text}</div>
                        </div>
                    ))}
                </div>
                <div className="fade-up flex-1 text-white flex justify-end">
                    <div>
                        <h3 className="md:text-[48px] text-[36px] font-inter font-medium tracking-wide leading-tight">Service
                        </h3>
                        <p className="md:text-[24px] text-[18px] font-medium tracking-[0.3em]">サービス内容</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Service;
