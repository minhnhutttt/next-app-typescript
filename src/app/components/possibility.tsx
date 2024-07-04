"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const data = [
    {
        image: '/assets/images/img-possibility-01.png',
        title: (<>収益化できる<br />サービスの構築</>),
        text: (<>ビジネスモデルは小売業！良いものを安く販売することによって収益を上げるだけです。<br />既存の商品ラインナップに手軽に追加できます！</>)
    },
    {
        image: '/assets/images/img-possibility-02.png',
        title: (<>最新の技術を使った<br />サービスの提供</>),
        text: '最新技術を駆使したソリューションを提案することで、顧客の満足度を高め、長期的な信頼関係を築くことができます。'
    },
    {
        image: '/assets/images/img-possibility-03.png',
        title: (<>ZEXAGIFTの商品も</>),
        text: (<>購入が困難な厳選された優良商品だけが販売されているZEXAGiftの商品も卸価格で購入、顧客への販売ができます。<br /><span className="text-[#FEEF01]">※近日対応予定</span></>)
    },
]

const Possibility = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative md:-mt-[100px] -mt-[50px] z-20">
        <div className="bg-[#00053A] md:rounded-t-[70px] rounded-t-[40px] md:pt-[150px] pt-20 md:pb-[135px] pb-16">
            <div className="w-full md:max-w-[1440px] max-w-[440px] mx-auto">
            <div className="fade-up text-center tracking-widest text-white">
                <p className="md:text-[24px] text-[18px] font-inter">Possibility</p>
                <h3 className="font-medium md:text-[56px] text-[32px] tracking-[0.1em]">広がる可能性</h3>
            </div>
            <div className="md:mt-[88px] mt-[50px] md:space-y-[60px] space-y-10">
                {data.map((item,index)=>(
                    <div className="fade-up group flex even:flex-row-reverse max-md:flex-col max-md:even:flex-col items-center  max-md:gap-7" key={index}>
                        <figure className="md:w-1/2 md:group-odd:rounded-r-[40px] md:group-even:rounded-l-[40px] overflow-hidden">
                            <img src={item.image} alt="" />
                        </figure>
                        <div className="text-white md:w-1/2 px-5 md:px-10 tracking-[0.15em]">
                            <h5 className="md:text-[48px] text-[24px] md:mb-7 mb-5">{item.title}</h5>
                            <p className="md:text-[18px] text-[14px] leading-[1.8]">{item.text}</p>
                        </div>
                    </div>
                ))}
                
            </div>
        </div>
        </div>
    </section>
  );
};

export default Possibility;
