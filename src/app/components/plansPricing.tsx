"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const PlansPricing = () => {
  const ref = useScrollAnimations();

  return (
    <section id="plan" ref={ref} className="relative overflow-hidden md:pt-[193px] pt-[100px]">
    <div className="bg-white md:rounded-[40px] rounded-[24px] relative md:pb-[100px] pb-[60px] px-5">
        <span className="block h-px"></span>
        <div className="fade-up">
            <h4 className="text-center text-main text-inter md:text-[64px] text-[36px] font-medium tracking-wider md:-mt-[53px] -mt-6">Plans & Pricing</h4>
            <p className="text-center md:text-[24px] text-[18px] font-medium tracking-widest">料金プラン</p>
        </div>
        <div className="w-full max-w-[1360px] mx-auto flex flex-wrap md:my-10 my-8 gap-5 justify-center">
            <div className="fade-up w-[440px] rounded-[40px] bg-white overflow-hidden border border-[#FFC328]">
                <div className="md:h-[123px] h-[100px] px-5 flex items-center justify-center bg-[#FFC328] text-white font-bold md:text-[32px] text-[20px]">
                    ベーシックプラン
                </div>
                <div className="py-6 md:pb-[58px] pb-10 px-5">
                    <div className="max-w-[350px] w-full mx-auto">
                        <div className="flex items-center justify-center font-bold text-[#111C59] text-center">
                            <span className="md:text-[70px] text-[40px] tracking-[-0.28em] mr-2">３０,０００</span>
                            <p>
                                <span className="block md:text-[40px] text-[24px] leading-none mt-3">円</span>
                                <span className="block md:text-[20px] text-[16px]">(税込)</span>
                            </p>
                        </div>
                        <div className="md:text-[20px] text-[16px] px-4 mt-4 mb-5">
                        コンソール＋APIだけで、クライアントが柔軟に対応
                        </div>
                        <a href="/" className="w-full md:h-[70px] h-[60px] flex items-center justify-center border-[3px] border-[#FFC328] rounded-[20px] bg-[#FFFCF4] md:text-[20px] text-[16px] font-bold text-main">
                            このプランでお申し込み
                        </a>
                    </div>
                </div>
            </div>
            <div className="fade-up w-[440px] rounded-[40px] bg-white overflow-hidden border border-[#04C50C] relative">
                <span className="absolute top-0 left-0">
                    <img className="max-md:w-[120px]" src="/assets/images/ribbon.png" alt="" />
                </span>
                <div className="md:h-[123px] h-[100px] px-5 flex items-center justify-center bg-[#04C50C] text-white font-bold md:text-[32px] text-[20px]">
                スタートアッププラン
                </div>
                <div className="py-6 md:pb-[58px] pb-10 px-5">
                    <div className="max-w-[350px] w-full mx-auto">
                        <div className="flex items-center justify-center font-bold text-[#111C59] text-center">
                            <span className="md:text-[70px] text-[40px] tracking-widest">ASK</span>
                        </div>
                        <div className="md:text-[20px] text-[16px] mt-4 mb-5">
                        コンソール＋API＋マップ＋サービスサイトで、すぐに始められるプラン
                        </div>
                        <a href="/" className="w-full md:h-[70px] h-[60px] flex items-center justify-center border-[3px] border-[#04C50C] rounded-[20px] bg-[#F4FFF4] md:text-[20px] text-[16px] font-bold text-main">
                        このプランでお申し込み
                        </a>
                    </div>
                </div>
            </div>
            <div className="fade-up w-[440px] rounded-[40px] bg-white overflow-hidden border border-[#2639A6] relative">
                <div className="md:h-[123px] h-[100px] px-5 flex items-center justify-center bg-[#2639A6] text-white font-bold md:text-[32px] text-[20px]">
                プロフェッショナルプラン
                </div>
                <div className="py-6 md:pb-[58px] pb-10 px-5">
                    <div className="max-w-[350px] w-full mx-auto">
                        <div className="flex items-center justify-center font-bold text-[#111C59] text-center">
                            <span className="md:text-[70px] text-[40px] tracking-widest">ASK</span>
                        </div>
                        <div className="md:text-[20px] text-[16px] mt-4 mb-5">
                        スタートアッププランに加えて、広告出稿による収益化も可能
                        </div>
                        <a href="/" className="w-full md:h-[70px] h-[60px] flex items-center justify-center border-[3px] border-[#2639A6] rounded-[20px] bg-[#F4FFF4] md:text-[20px] text-[16px] font-bold text-main">
                        このプランでお申し込み
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <p className="fade-up text-center md:text-[16px] text-[13px] font-medium text-inter max-md:tracking-tight text-[#646464]">※NFTの発行枚数やアクセス数に応じて料金が異なります</p>
    </div>
</section>
  );
};

export default PlansPricing;
