"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const Pack = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative md:mt-10 px-5">
      <div className="w-full max-w-[1257px] mx-auto">
        <div className="flex max-xl:flex-wrap justify-center gap-[35px]">
            <div className="w-[350px] md:w-[611px] bg-white rounded-[26px] border-[3px] border-[#9C37DF] overflow-hidden">
                <div className="md:h-[72px] h-[44px] flex items-center justify-center bg-[url('/assets/images/price/pack-01.png')] bg-cover">
                    <img className="max-md:h-8" src="/assets/images/price/pack-title-01.png" alt="" />
                </div>
                <div className="pt-4 px-[18px] pb-5">
                    <p className="text-center font-gothic md:text-[34px] text-[20px] font-extrabold">メタバース供養所 初期費用</p>
                    <p className="text-center font-gothic md:text-[34px] text-[20px] font-extrabold">
                    定価 <span className="md:text-[48px] text-[32px]">250,000</span> 円 <span className="md:text-[26px] text-[16px]">(税抜）</span>
                    </p>
                    <figure className="mt-3 flex justify-center items-center">
                        <img src="/assets/images/price/pack-banner-01.png" alt="" />
                    </figure>
                </div>
            </div>
            <div className="w-[350px] md:w-[611px] bg-white rounded-[26px] border-[3px] border-[#9C37DF] overflow-hidden">
            <div className="md:h-[72px] h-[44px] flex items-center justify-center bg-[url('/assets/images/price/pack-01.png')] bg-cover">
                    <img className="max-md:h-8" src="/assets/images/price/pack-title-02.png" alt="" />
                </div>
                <div className="pt-4 px-[18px] pb-5">
                    <p className="text-center font-gothic md:text-[34px] text-[20px] font-extrabold">2Dアバター制作費用
                    </p>
                    <p className="text-center font-gothic md:text-[34px] text-[20px] font-extrabold">
                    定価 <span className="md:text-[48px] text-[32px]">50,000</span> 円 <span className="md:text-[26px] text-[16px]">(税抜）</span>
                    </p>
                    <figure className="mt-3 flex justify-center items-center">
                        <img src="/assets/images/price/pack-banner-02.png" alt="" />
                    </figure>
                </div>
            </div>
        </div>
        <div className="flex flex-wrap justify-center mt-[30px] gap-[20px]">
            <div className="w-[350px] md:w-[405px] bg-white rounded-[26px] overflow-auto border-[3px] border-[#9C37DF]">
                <div className="bg-[#9C37DF] md:h-[58px] h-10 flex items-center justify-center">
                    <img className="max-md:h-7" src="/assets/images/price/pack-title-03.png" alt="" />
                </div>
                <div className="px-5 pt-4">
                    <p className="md:text-[24px] text-[20px] font-bold text-center">
                        メタバース内に <br />
                        配置可能な2Dアイテム
                    </p>
                    <p className="md:text-[24px] text-[20px] font-bold text-center text-[#F54A25]">
                        1アイテムプレゼント
                    </p>
                    <p className="md:text-[16px] text-[13px] font-bold text-center leading-loose">
                    ※5つのアイテムからお選びいただけます。<br />
                    (2万円相当)
                    </p>
                </div>
            </div>
            <div className="w-[350px] md:w-[405px] bg-white rounded-[26px] overflow-auto border-[3px] border-[#9C37DF]">
                <div className="bg-[#9C37DF] md:h-[58px] h-10 flex items-center justify-center">
                    <img className="max-md:h-7" src="/assets/images/price/pack-title-04.png" alt="" />
                </div>
                <div className="px-5 pt-4">
                    <p className="md:text-[24px] text-[20px] font-bold text-center">
                        メタバース内 <br />
                        専用個別スペース
                    </p>
                    <p className="md:text-[24px] text-[20px] font-bold text-center text-[#F54A25]">
                        プレミアム <br />
                        カスタマイズ権
                    </p>
                    <p className="md:text-[16px] text-[13px] font-bold text-center leading-loose">
                    (3万円相当)
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Pack;
