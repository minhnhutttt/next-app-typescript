"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const Introduction = () => {
  const ref = useScrollAnimations();
  return (
    <section id="introduction" ref={ref} className="relative bg-[url('/assets/images/bg-introduction.png')] bg-cover bg-top md:pt-[160px] md:pb-[140px] pb-16 pt-20 px-5">
        <div className="w-full max-w-[1360px] mx-auto">
            <div className="fade-up">
                <p className="font-inter md:text-[24px] text-[18px] tracking-widest">What is a DIVER Agent?</p>
                <h3 className="md:text-[56px] text-[32px] font-medium tracking-widest">DIVER Agentとは？</h3>
            </div>
            <div className="flex justify-center items-center max-xl:flex-col md:mt-[60px] mt-8 gap-10 md:gap-20">
                <figure>
                    <img className="fade-up max-md:w-[300px]" src="/assets/images/img-intro.png" alt="" />
                </figure>
                <div className="">
                    <div className="fade-up flex items-center max-md:justify-center gap-4 xl:gap-8 tracking-[0.4em]">
                        <p className="font-inter md:text-[36px] text-[20px] text-[#00053A]">Blockchain</p>
                        <figure className="md:flex-[0_0_88px] flex-[0_0_40px]">
                            <img src="/assets/images/img-x.png" alt="" />
                        </figure>
                        <p className="font-inter md:text-[36px] text-[20px] text-[#00053A]">DIVER</p>
                    </div>
                    <div className="fade-up max-w-[568px] bg-[#00053A] text-white md:py-[30px] py-5 px-8 md:px-12 font-inter md:text-[20px] text-[16px] leading-[2] mt-10 md:mt-14">
                        革新的なブロックチェーン技術と話題沸騰の「DIVER」で構築された商品を卸価格で購入し、顧客に販売できるサービスです。
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Introduction;
