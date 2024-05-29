"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const Recruitment = () => {
    const ref = useScrollAnimations();
  return (
    <section ref={ref} className="bg-white md:pt-[100px] pt-[60px] px-5">
        <div className="fade-up flex justify-center">
            <div className="flex justify-center items-center relative flex-col">
                <h3 className="lg:text-[48px] md:text-[3vw] text-[clamp(20px,5.4vw,32px)] font-black tracking-[0.2em] px-5 max-md:pt-2">代理店募集のご案内</h3>
                <p className="text-center md:text-[16px] text-[13px] font-bold mt-3">外国人材バックグラウンド調査をご自身のサービスとして展開したい事業者様へ</p>
            </div>
        </div>
        <div className="w-full max-w-[1320px] mx-auto relative md:mt-[54px] mt-7 md:pb-[205px] pb-[180px] lg:px-[100px] md:px-[60px] px-5">
             <span className="absolute left-0 top-0"><img className="fade-up max-md:w-[120px]" src="/assets/images/recruitment-deco.png" alt="" /></span>
             <span className="absolute right-0 bottom-0"><img className="fade-up max-md:w-[200px]" src="/assets/images/img-recruitment-02.png" alt="" /></span>
            <div className="w-full max-w-[1140px] mx-auto md:pt-[100px] pt-[30px] relative">
             <span className="absolute right-0 bottom-0"><img className="fade-up" src="/assets/images/recruitment-deco-2.png" alt="" /></span>

                <div className="flex items-end max-lg:flex-col max-md:items-center relative z-10">
                    <figure className="fade-up lg:pb-[100px]">
                        <img src="/assets/images/img-recruitment.png" alt="" />
                    </figure>
                    <div className="fade-up bg-[url('/assets/images/recruitment-box.png')] bg-[length:100%_100%] md:w-[460px] max-w-[460px] w-[86vw] aspect-[460/337] flex items-center justify-center max-md:mt-5 max-lg:mt-[-50px] md:ml-[-60px] md:px-[23px] md:py-[17px] p-4">
                        <div className="w-[414px] aspect-[414/300] bg-[#FDE3E3] px-6 md:text-[18px] text-[14px] font-medium flex items-center justify-center leading-[2]">
                        当社を下請け事業者として活用し、外国人材のバックグラウンド調査を自社サービスとして展開することが可能です。同じ悩みを持つ同業他社様へアプローチいただき、貴社のビジネスの幅を広げてください！
                        </div>
                    </div>
                </div>
                <div className="fade-up flex justify-center md:mt-16 mt-10 relative">
                    <a href="/" className="md:w-[400px] w-[300px] h-16 md:h-20 flex items-center justify-center bg-[#F25B54] rounded md:text-[22px] text-[16px] font-bold text-white duration-200 hover:opacity-75">代理店について詳しく知る</a>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Recruitment;
