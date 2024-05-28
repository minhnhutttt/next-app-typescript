"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const Recruitment = () => {
  return (
    <section className="bg-white md:pt-[100px]">
            <div className="flex justify-center">
                <div className="flex justify-center items-center relative flex-col">
                    <h3 className="lg:text-[48px] md:text-[3vw] text-[6vw] font-black tracking-[0.2em] px-5 max-md:pt-2">代理店募集のご案内</h3>
                    <p className="text-center md:text-[16px] text-[13px] font-bold mt-3">外国人材バックグラウンド調査をご自身のサービスとして展開したい事業者様へ</p>
                </div>
            </div>
        <div className="w-full max-w-[1320px] mx-auto relative md:mt-[54px] mt-7 md:pb-[205px] px-[100px]">
             <span className="absolute left-0 top-0"><img src="/assets/images/recruitment-deco.png" alt="" /></span>
             <span className="absolute right-0 bottom-0"><img src="/assets/images/img-recruitment-02.png" alt="" /></span>
            <div className="w-full max-w-[1140px] mx-auto md:pt-[100px] pt-[64px] relative">
             <span className="absolute right-0 bottom-0"><img src="/assets/images/recruitment-deco-2.png" alt="" /></span>

                <div className="flex items-end max-lg:flex-col">
                    <figure className="lg:pb-[100px]">
                        <img src="/assets/images/img-recruitment.png" alt="" />
                    </figure>
                    <div className="bg-[url('/assets/images/recruitment-box.png')] bg-[length:100%_100%] w-[460px] h-[337px] flex items-center justify-center max-lg:mt-[-50px] md:ml-[-60px] px-[23px] py-[17px]">
                        <div className="w-[414px] h-[300px] bg-[#FDE3E3] px-6 md:text-[18px] text-[14px] font-medium flex items-center justify-center leading-[2]">
                        当社を下請け事業者として活用し、外国人材のバックグラウンド調査を自社サービスとして展開することが可能です。同じ悩みを持つ同業他社様へアプローチいただき、貴社のビジネスの幅を広げてください！
                        </div>
                    </div>
                </div>
                <div className="flex justify-center md:mt-16 mt-10 relative">
                    <a href="/" className="w-[400px] h-20 flex items-center justify-center bg-[#F25B54] rounded md:text-[22px] text-[16px] font-bold text-white">代理店について詳しく知る</a>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Recruitment;
