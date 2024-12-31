"use client";

import useScrollAnimations from "@/app/hooks/useScrollAnimations";

const Special = () => {
  const ref = useScrollAnimations();
  return (
    <section id="special" ref={ref} className="relative overflow-hidden md:pt-[100px] pt-16 px-5 bg-[url(/assets/images/bg-special.png)] bg-cover bg-center">
        <div className="fade-up text-center">
            <h3 className="md:text-[36px] text-[24px] font-bold tracking-wider">スペシャルイベント</h3>
            <span className="w-20 h-[3px] bg-[#21012D] block mx-auto mt-2"></span>
        </div>
        <div className="fade-up flex items-center justify-center">
            <div className="relative max-md:pt-10">
                <span className="absolute w-[110px] md:w-[153px] bottom-[calc(100%-100px)] md:left-[calc(100%-120px)] left-[calc(100%-90px)]">
                    <img className="animate-[fuwafuwa_3s_ease-in-out_infinite_alternate]" src="/assets/images/fave-coin-now.png" alt="今だけ限定チャンス!!" />
                </span>
                <h5><img src="/assets/images/fave-coin-1000.svg" alt="Fave Coin" /></h5>
            </div>
        </div>
        <div className="w-full max-w-[456px] mx-auto">
            <div className="fade-up bg-white rounded-[20px] border-[4px] border-[#21012D] md:p-[30px] p-5 md:text-[28px] text-[20px] font-black text-center">
                新規登録で先着1,000名様に <br />
                1,000FAVE COINプレゼント！
            </div>
            <p className="fade-up md:text-[18px] text-[15px] font-medium md:py-10 py-8">
            気になるインフルエンサーへいち早く投げ銭して、特別なNFT作品を手に入れよう！<br />
            この機会に「価値の交換」を体感してみてください！
            </p>
        </div>
    </section>
  );
};

export default Special;
