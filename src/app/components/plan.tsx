"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const Plan = () => {
    const ref = useScrollAnimations();
  return (
    <section ref={ref} className="md:mt-[145px] mt-20 md:pb-[110px] px-5">
      <div className="fade-up flex justify-center">
                <div className="flex justify-center items-center relative flex-col">
                    <h3 className="lg:text-[48px] md:text-[3vw] text-[clamp(20px,5.4vw,32px)] font-black tracking-[0.2em] px-5 max-md:pt-2">料金プラン</h3>
                    <p className="text-center md:text-[16px] text-[13px] font-bold mt-3">明朗な会計でニーズに合わせて選べる3つのプラン</p>
                </div>
             </div>
             <div className="w-full max-w-[1280px] mx-auto flex flex-wrap justify-center text-white md:mt-14 mt-10 md:gap-2.5 gap-3">
                <div className="fade-up md:w-[420px] w-full max-w-[420px] bg-[linear-gradient(180deg,_#FDC624_0%,_#E6C434_99.36%)] pt-10 md:pb-[67px] pb-9 relative">
                    <div className="max-md:max-w-[300px] w-full mx-auto">
                        <figure className="md:w-[240px] md:h-[256px] w-[200px] h-[213px] flex items-center justify-center mx-auto">
                            <img src="/assets/images/plan-01.png" alt="" />
                        </figure>
                        <div className="md:px-[53px] px-5 md:pt-6 pt-5">
                            <h5 className="md:text-[32px] text-[20px] font-black leading-none">スポットプラン</h5>
                            <p className="md:text-[19px] text-[15px] font-black">Spot plan</p>
                        </div>
                        <div className="md:pt-8 pt-5 md:px-[43px] px-5">
                            <p className="md:text-[25px] text-[18px] font-black">1件あたり</p>
                            <p className="md:text-[100px] text-[40px] font-black leading-none">15<span className="md:text-[64px] text-[28px]">万円</span></p>
                        </div>
                        <div className="flex items-center md:text-[24px] text-[16px] font-black md:px-[53px] px-5 md:pt-9 pt-6 gap-2.5">
                            <img src="/assets/images/ic-check.svg" alt="" />
                            単発の調査に最適
                        </div>
                        <a href="/" className="flex justify-center md:mt-10 mt-7">
                            <div className="md:w-[310px] w-[280px] h-[60px] md:h-[70px] flex items-center justify-center bg-white text-[#ECC531] md:text-[22px] text-[16px] font-black tracking-[0.4em]">申し込む</div>
                        </a>
                    </div>
                </div>
                <div className="fade-up md:w-[420px] w-full max-w-[420px] bg-[#4BD5DF] pt-10 md:pb-[67px] pb-9 relative">
                    <div className="absolute top-0 inset-x-0 flex items-center justify-center md:text-[22px] text-[15px] font-black h-[49px] bg-[#3FC7D0]">
                        <img src="/assets/images/ic-star.svg" alt="" />
                        一番人気！
                    </div>
                    <div className="max-md:max-w-[300px] w-full mx-auto">
                        <figure className="md:w-[240px] md:h-[256px] w-[200px] h-[213px] flex items-center justify-center mx-auto">
                            <img src="/assets/images/plan-02.png" alt="" />
                        </figure>
                        <div className="md:px-[53px] px-5 md:pt-2 pt-5">
                            <h5 className="md:text-[32px] text-[20px] font-black leading-none">年間<span className="md:text-[48px] text-[28px]">10</span>件プラン</h5>
                            <p className="md:text-[19px] text-[15px] font-black">10 cases per year</p>
                        </div>
                        <div className="md:pt-8 pt-5 md:px-[43px] px-5">
                            <p className="md:text-[25px] text-[18px] font-black">年間</p>
                            <p className="md:text-[100px] text-[40px] font-black leading-none">100<span className="md:text-[64px] text-[28px]">万円</span></p>
                        </div>
                        <div className="flex items-center md:text-[24px] text-[16px] font-black md:px-[53px] px-5 md:pt-9 pt-6 gap-2.5">
                            <img src="/assets/images/ic-check.svg" alt="" />
                            定期的な調査に最適
                        </div>
                        <a href="/" className="flex justify-center md:mt-10 mt-7">
                            <div className="md:w-[310px] w-[280px] h-[60px] md:h-[70px] flex items-center justify-center bg-white text-[#4BD5DF] md:text-[22px] text-[16px] font-black tracking-[0.4em]">申し込む</div>
                        </a>
                    </div>
                </div>
                <div className="fade-up md:w-[420px] w-full max-w-[420px] bg-[#34CEFF] pt-10 md:pb-[67px] pb-9 relative">
                <div className="max-md:max-w-[300px] w-full mx-auto">
                    <figure className="md:w-[240px] md:h-[256px] w-[200px] h-[213px] flex items-center justify-center mx-auto">
                        <img src="/assets/images/plan-03.png" alt="" />
                    </figure>
                    <div className="md:px-[53px] px-5 md:pt-2 pt-5">
                        <h5 className="md:text-[32px] text-[20px] font-black leading-none">年間<span className="md:text-[48px] text-[28px]">100</span>件プラン</h5>
                        <p className="md:text-[19px] text-[15px] font-black">100 cases per year</p>
                    </div>
                    <div className="md:pt-8 pt-5 md:px-[43px] px-5">
                        <p className="md:text-[25px] text-[18px] font-black">年間</p>
                        <p className="md:text-[100px] text-[40px] font-black leading-none">300<span className="md:text-[64px] text-[28px]">万円</span></p>
                    </div>
                    <div className="flex items-center md:text-[22px] text-[15px] leading-tight font-black md:pl-[53px] px-5 md:pt-5 pt-6 gap-2.5">
                        <img src="/assets/images/ic-check.svg" alt="" />
                        定期的な調査・大量採用・<br />
                        代理店としての事業化に最適
                    </div>
                    <div className="flex justify-center md:mt-9 mt-7">
                        <a href="/" className="md:w-[310px] w-[280px] h-[60px] md:h-[70px] flex items-center justify-center bg-white text-[#67DAFF] md:text-[22px] text-[16px] font-black tracking-[0.4em]">申し込む</a>
                    </div>
                </div>
                </div>
             </div>
    </section>
  );
};

export default Plan;
