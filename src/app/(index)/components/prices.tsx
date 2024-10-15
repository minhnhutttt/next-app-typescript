"use client";
import Button from "@/components/button";
import UnderlineText from "@/components/underlineText";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const data = [
    {
        image: '/assets/images/price-img-01.png',
        title: (<>エージェントとしての<UnderlineText>手数料ゼロ。</UnderlineText></>),
        text: '広告代理店が当たり前に徴収する広告費×20％の重い労働費用がSEIKAI広告エージェントなら一切不要。'
    },
    {
        image: '/assets/images/price-img-02.png',
        title: (<>AIの限界維持費用<UnderlineText>3.99％</UnderlineText></>),
        text: 'SEIKAI広告エージェントの質や機能性を維持向上するための限界費用です。文字通り限界まで抑えました。'
    },
]

const Prices = () => {
  const ref = useScrollAnimations();

  return (
    <section ref={ref} className="relative px-5 md:pt-[105px] pt-[100px] md:pb-[137px] pb-[80px] border-b border-[#838383]">
      <div className="w-full max-w-[1032px] mx-auto">
          <div className="flex justify-center max-lg:px-5">
            <div>
                <h3 className="fade-up md:text-[42px] text-[22px] font-black leading-[1.3] relative tracking-[-0.018em]">
                <UnderlineText>明快かつ驚きの価格</UnderlineText>をあなたへ。
                </h3>
                <p className="fade-up text-[16px] md:text-[23px] font-bold mt-2">
                広告代理店よりも優秀なAIがこの価格。
                </p>
            </div>
          </div>
          <div className="flex justify-center flex-wrap mt-[100px] md:mt-[175px] gap-20 md:gap-[102px] max-md:max-w-[440px] max-md:mx-auto">
            {data.map((item,index) => (
                <div className="fade-up md:w-[463px] w-full" key={index}>
                    <figure className="rounded-[45px] border border-[#7E7E7E] overflow-hidden">
                        <img src={item.image} alt="" />
                    </figure>
                    <div className="md:mt-10 mt-6">
                        <h4 className="md:text-[26px] text-[18px] font-bold">{item.title}</h4>
                        <p className="md:text-[19px] text-[15px] font-medium mt-1">
                            {item.text}
                        </p>
                    </div>
                </div>
            ))}
          </div>
          <div className="flex justify-center md:pt-28 pt-24 relative max-md:mt-6 md:mt-12">
                <div className="fade-up absolute top-0 right-[6%] aspect-[302/110] md:w-[302px] w-[240px] bg-[url('/assets/images/bubble-2.png')] bg-cover">
                    <p className="md:text-[19px] text-[15px] font-bold pt-3 md:pt-4 pl-4 md:pl-5">将来値上がりしても、<br />
                    契約時の価格が維持されます。 </p>
                </div>
            <Button href="/">
            今すぐ試すのが正解
            </Button>
        </div>
      </div>
    </section>
  );
};

export default Prices;
