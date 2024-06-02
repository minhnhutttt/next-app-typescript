"use client";

import Title from "@/components/title";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const Plan = () => {
  const ref = useScrollAnimations();
  
  return (
    <section ref={ref} className="md:mt-[115px] mt-[12vw] px-5">
        <div className="w-full max-w-[1376px] mx-auto md:border-[7px] border-[4px] border-[#0D0A8E] rounded-[30px] md:py-16 py-10 md:px-9 px-5 md:pb-[105px] pb-[60px]">
            <Title sub="Plan">デジタルドキュメント<br className="md:hidden" />生産ロボの稼働料金</Title>
            <div className="flex flex-wrap justify-center md:mt-7 mt-5 md:gap-[30px] gap-5">
                <div className="fade-up relative w-[410px] bg-[#1E78FF] rounded-[30px] md:pt-10 pt-7 pb-5 md:pb-[30px] px-[15px]">
                    <div className="bg-white md:h-[300px] md:pt-[45px] pt-8 px-[15px] pb-5 md:pb-[30px] rounded-[28px]">
                        <p className="md:text-[32px] text-[20px] text-center font-semibold border-b border-black">お試しプラン</p>
                        <p className="md:mt-[30px] mt-5 md:text-[56px] text-[32px] font-semibold text-center leading-none">
                            1<span className="md:text-[42px] text-[24px]">回</span>10<span className="md:text-[42px] text-[24px]">枚</span>無料
                        </p>
                        <p className="text-center md:text-[16px] text-[13px] font-semibold mt-4 md:mt-12 leading-tight">
                            NFT化したドキュメントを <br />
                            発行して確認したい
                        </p>
                    </div>
                    <div className="flex justify-center md:pt-[30px] pt-5">
                        <a href="/" className="relative md:w-[270px] w-[240px] md:h-[70px] h-[55px] flex items-center justify-center bg-[#F5CF06] rounded-[10px] font-semibold md:text-[18px] text-[15px] duration-200 hover:opacity-75">
                            <span>お問い合わせください</span>
                            <img className="absolute right-0" src="/assets/images/arrow.svg" alt="" />
                        </a>
                    </div>
                </div>
                <div className="fade-up relative w-[410px] bg-[#0D0A8E] rounded-[30px] md:pt-10 pt-7 pb-5 md:pb-[30px] px-[15px]">
                    <span className="absolute top-0 left-0">
                        <img className="max-md:w-[160px]" src="/assets/images/img-ribbon.png" alt="迷ったらこれ！" />
                    </span>
                    <div className="bg-white md:h-[300px] md:pt-[45px] pt-8 px-[15px] pb-5 md:pb-[30px] rounded-[28px]">
                        <p className="md:text-[32px] text-[20px] text-center font-semibold border-b border-black">Basicプラン</p>
                        <p className="md:mt-[30px] mt-5 md:text-[56px] text-[32px] font-semibold text-center leading-none">
                        <span className="md:text-[42px] text-[24px]">従業員</span>6~20名<br />
                        <span className="md:text-[42px] text-[24px]">程度の企業様向き</span>
                        </p>
                        <p className="text-center md:text-[16px] text-[13px] font-semibold mt-4 md:mt-6 leading-tight">
                        ※10回作成○○円
                        </p>
                    </div>
                    <div className="flex justify-center md:pt-[30px] pt-5">
                        <a href="https://lin.ee/L78hjIW" target="_blank" className="relative md:w-[270px] w-[240px] md:h-[70px] h-[55px] flex items-center justify-center bg-[#F5CF06] rounded-[10px] font-semibold md:text-[18px] text-[15px] duration-200 hover:opacity-75">
                            <span>お問い合わせください</span>
                            <img className="absolute right-0" src="/assets/images/arrow.svg" alt="" />
                        </a>
                    </div>
                </div>
                <div className="fade-up relative w-[410px] bg-[#6C0A8E] rounded-[30px] md:pt-10 pt-7 pb-5 md:pb-[30px] px-[15px]">
                    <div className="bg-white md:h-[300px] md:pt-[45px] pt-8 px-[15px] pb-5 md:pb-[30px] rounded-[28px]">
                        <p className="md:text-[32px] text-[20px] text-center font-semibold border-b border-black">Enterpriseプラン</p>
                        <p className="md:mt-[30px] mt-5 md:text-[56px] text-[32px] font-semibold text-center leading-none">
                        <span className="md:text-[42px] text-[24px]">従業員</span>21名<br />
                        <span className="md:text-[42px] text-[24px]">以上の企業様向き</span>
                        </p>
                        <p className="text-center md:text-[16px] text-[13px] font-semibold mt-4 md:mt-6 leading-tight">
                        ※10回作成○○円
                        </p>
                    </div>
                    <div className="flex justify-center md:pt-[30px] pt-5">
                        <a href="/" className="relative md:w-[270px] w-[240px] md:h-[70px] h-[55px] flex items-center justify-center bg-[#F5CF06] rounded-[10px] font-semibold md:text-[18px] text-[15px] duration-200 hover:opacity-75">
                            <span>お問い合わせください</span>
                            <img className="absolute right-0" src="/assets/images/arrow.svg" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Plan;
