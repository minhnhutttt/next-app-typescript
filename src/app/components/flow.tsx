"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const data = [
    {
        step: '1',
        image: '/assets/images/img-flow-01.png',
        title: 'お申し込み',
        text: (<>チャットからお申し込みください。</>)
    },
    {
        step: '2',
        image: '/assets/images/img-flow-02.png',
        title: '料金のお支払い',
        text: (<>NFTの発行枚数やアクセス数に応じて複数のプランをご用意しておりますので、お気軽にお問い合わせください。</>)
    },
    {
        step: '3',
        image: '/assets/images/img-flow-03.png',
        title: 'アカウント作成',
        text: (<>管理コンソールとAPIを提供します</>)
    },
    {
        step: '4',
        image: '/assets/images/img-flow-04.png',
        title: '運営スタート',
        text: (<>管理コンソールで簡単に管理できます。全てお任せのサポートプランもご用意しておりますので、お気軽にお問い合わせください。</>)
    },
]

const Flow = () => {
  const ref = useScrollAnimations();

  return (
    <section id="flow" ref={ref} className="relative overflow-hidden px-5 md:pt-[90px] pt-10 md:pb-[50px] pb-[30px]">
        <div className="w-full md:max-w-[1360px] max-w-[540px] mx-auto md:gap-[60px] gap-5 flex max-md:flex-wrap xl:justify-start justify-center">
            <div className="fade-up max-xl:w-full flex-1">
                <h3 className="md:text-[64px] text-[40px] font-inter font-medium tracking-wide leading-tight">Flow</h3>
                <p className="md:text-[24px] text-[18px] font-medium tracking-[0.3em] whitespace-nowrap">導入フロー</p>
            </div>
            <div className="flex gap-7 pt-4 flex-col w-full md:max-w-[630px] max-w-[400px]">
                {data.map((item, index)=> (
                    <div className="fade-up w-full md:h-[174px] bg-white rounded-[20px] shadow-base md:py-8 py-5 md:pl-[30px] px-4 pr-4 flex items-center text-main md:gap-[30px] gap-5" key={index}>
                        <figure>
                            <img className="max-md:w-[90px]" src={item.image} alt="" />
                        </figure>
                        <div className="flex-1">
                            <div className="flex md:items-center gap-3 mb-2 max-md:flex-col">
                                <span className="bg-[#CEE4FF] w-20 md:w-[96px] md:h-6 h-5 rounded-[50px] flex items-center justify-center md:text-[16px] text-[13px] font-bold">
                                    STEP{item.step}
                                </span>
                                <p className="md:text-[28px] text-[20px] font-bold">{item.title}</p>
                            </div>
                            <p className="md:text-[16px] text-[13px]">{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex-1 max-lg:hidden"></div>
        </div>
    </section>
  );
};

export default Flow;
