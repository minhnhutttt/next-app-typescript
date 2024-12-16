"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";
const CoinTogether = () => {
    const ref = useScrollAnimations();
    return (
      <section ref={ref} className="relative bg-[url('/assets/images/bg-coin.png')] bg-cover pt-20 md:pt-[120px] pb-16 px-5">
        <div className="w-full max-w-[1326px] mx-auto">
            <div className="flex justify-between max-md:flex-col">
                <div className="md:flex grid max-md:grid-cols-3 md:flex-col items-center gap-5 md:gap-10">
                    <img className="fade-up" src="/assets/images/coin-img-01.png" alt="" />
                    <img className="fade-up" src="/assets/images/coin-img-02.png" alt="" />
                    <img className="fade-up" src="/assets/images/coin-img-03.png" alt="" />
                </div>
                <div className="flex-1 max-w-[644px] md:min-w-[500px]">
                    <h3 className="fade-up flex justify-center md:text-[32px] lg:text-[48px] font-black text-[26px] gap-2.5 tracking-wider items-start"><img className="mt-2 md:mt-1 lg:mt-3.5 max-md:w-5" src="/assets/images/ic-coin.svg" alt="" />COIN TOGETHERとは</h3>

                    <p className="fade-up md:text-[24px] text-[18px] text-center font-bold mt-6 md:mt-10 border-b border-black pb-4">お店で買い物した分だけ<br />イーサリアムがもらえる<br />COIN TOGETHER</p>

                    <p className="fade-up text-[15px] md:text-[18px] px-3 md:px-5 py-6 md:py-10">
                    <span className="text-[#E90212] font-bold">日常のお買い物がイーサリアム（ETH）などのデジタル資産に変わる。</span><br />使えば使うほど、デジタル資産がどんどん貯まっていく。<br />それがCOIN TOGETHER。<br /><br /><span className="text-[#E90212] font-bold">COIN TOGETHERでは、ポイントではなく、デジタル資産がもらえます。</span><br />デジタル資産の価値が上がれば、その分あなたの資産も増える可能性があります。<br /><span className="font-bold">QRコードを読み取るだけで簡単にもらえちゃう！</span><br />すでにデジタル資産投資をしている人も、これから始めたいと思っている人も、今すぐデジタル資産を手に入れよう！
                    </p>

                    <div className="fade-up bg-white flex items-center justify-center flex-col border-black md:border-[8px] border-[4px] md:rounded-[60px] rounded-[30px] lg:px-[120px] px-5 py-6 md:py-[42px] mt-9">
                        <p className="md:text-[28px] text-[20px] font-black mb-5 md:mb-7 leading-none text-center">METAMASKをダウンロード</p>
                        <a href="https://metamask.io/" target="_blank" className="duration-150 hover:opacity-75">
                        <img src="/assets/images/metamask.png" alt="" /></a>
                    </div>
                </div>
                <div className="md:flex grid max-md:grid-cols-3 md:flex-col items-center gap-5 md:gap-10">
                    <img className="fade-up" src="/assets/images/coin-img-04.png" alt="" />
                    <img className="fade-up" src="/assets/images/coin-img-05.png" alt="" />
                    <img className="fade-up" src="/assets/images/coin-img-06.png" alt="" />
                </div>
            </div>
        </div>
      </section>
    );
  };
  
  export default CoinTogether;
  