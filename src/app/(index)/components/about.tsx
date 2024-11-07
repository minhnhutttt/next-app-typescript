"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const About = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="md:-mt-5 mt-8 overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto  bg-[url('/assets/images/about-map.png')] bg-center md:bg-top bg-no-repeat max-md:bg-contain pt-[32px] md:pb-[100px] pb-[100px]">
        <div className="md:space-y-20 space-y-14">
            <div className="flex md:items-end max-md:flex-col">
                <figure className="fade-up md:rounded-r-[60px] overflow-hidden dt:flex-[0_0_780px] flex-[0_0_54.167vw]">
                    <img src="/assets/images/about-img.png" alt="" />
                </figure>
                <div className="fade-up max-md:mt-10 md:ml-[-15.278vw] dt:ml-[-220px] dt:text-[48px] text-[20px] md:text-[3.333vw] leading-none flex flex-col items-center md:items-end whitespace-nowrap font-bold md:pr-10 md:pb-5 space-y-2.5">
                    <p className="flex justify-center w-full -mb-2.5"><img className="korokoro" src="/assets/images/about-bubble.png" alt="" /></p>
                    <p className="bg-white md:p-2.5 p-1.5">地域情報×マップで広がる新しい体験</p>
                    <p className="bg-white md:p-2.5 p-1.5">地域情報誌の親しみやすさと</p>
                    <p className="bg-white md:p-2.5 p-1.5">NFTの新しい</p>
                    <p className="bg-white md:p-2.5 p-1.5">テクノロジーが一つに！</p>
                </div>
            </div>
            <div className="flex md:items-center max-md:flex-col md:flex-row-reverse">
                <figure className="fade-up md:rounded-l-[60px] overflow-hidden dt:flex-[0_0_780px] flex-[0_0_54.167vw]">
                    <img src="/assets/images/about-img-2.png" alt="" />
                </figure>
                <div className="fade-up max-md:mt-10 dt:text-[24px] text-[16px] md:text-[1.667vw] leading-loose flex flex-col items-center md:items-end font-bold px-5 md:px-10 md:pb-5 space-y-2.5">
                <span className="text-[#DF0F47]">あなたのすぐそばで使える特典、イベント、ショップ情報がNFTとなり、リアルタイムで更新される地域情報サービスが爆誕！</span><br />今すぐOPEN Mapを開いて、これまで気づかなかった地元の魅力や、限定特典を見つけに出かけよう！
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
