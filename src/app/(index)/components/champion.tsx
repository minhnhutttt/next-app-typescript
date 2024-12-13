"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const Champion = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative px-5 md:pt-[160px] pt-20 overflow-hidden">
      <div className="w-full max-w-[1360px] mx-auto bg-white md:border-[10px] border-[5px] border-[#FFB601] rounded-t-[60px]">
        <div className="w-full flex flex-col justify-center items-center md:pt-[125px] pt-12 px-5">
          <h4 className="fade-up">
            <img className="max-md:w-[300px]" src="/assets/images/champion-ribon.png" alt="" />
          </h4>
          <h3 className="fade-up font-black md:text-[64px] text-[28px] leading-[1.3] text-center">
            年間獲得 <br className="md:hidden" />
            <span className="md:text-[84px] text-[40px] ">チャンピオン</span> <br className="md:hidden" />
            は誰だ?!
          </h3>

          <div className="w-full max-w-[840px] rounded-[30px] md:border-[8px] border-[4px] border-black bg-[url('/assets/images/champion-bg.png')] bg-cover md:mt-[54px] mt-8 md:pt-[70px] pt-8 md:pb-[24px] pb-7 px-5 md:mb-[100px] mb-16">
            <div className="w-full max-w-[640px] mx-auto tracking-widest">
              <p className="fade-up md:text-[20px] text-[16px] font-bold ">
                期間中に最も多くのイーサリアム（ETH）を獲得したユーザーをランキング形式で競い合い、年間チャンピオンを決定するイベント開催中！「COIN
                TOGETHER イーサリアムエンペラー」の称号を手に入れろ！
              </p>

              <div className="fade-up flex justify-center w-full mt-5 md:mt-7">
                <div className="w-[240px] md:w-[280px] h-[45px] md:h-[69px] flex group">
                  <a
                    href="/"
                    className="group-hover:mt-[5px] group-hover:[box-shadow:0px_0px_0px_0px_#FFB601] duration-150 flex items-center w-full h-10 md:h-[64px] justify-center md:gap-2.5 gap-2 bg-black rounded-[50px] font-bold [box-shadow:0px_5px_0px_0px_#FFB601] md:text-[24px] text-[20px] text-white relative"
                  >
                    詳しく見る
                    <svg
                      className="absolute right-3"
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="16"
                      viewBox="0 0 13 16"
                      fill="none"
                    >
                      <path
                        d="M12.5 7.13397C13.1667 7.51888 13.1667 8.48112 12.5 8.86602L2 14.9282C1.33333 15.3131 0.499999 14.832 0.499999 14.0622L0.5 1.93782C0.5 1.16802 1.33333 0.686896 2 1.0718L12.5 7.13397Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <a href="/" className="fade-up flex items-center justify-center max-md:flex-col gap-6">
            <div className="flex items-center gap-1 md:text-[32px] text-[22px] font-black">
                <img src="/assets/images/ic_ranking.svg" alt="" />
                ランキングページを見る
            </div>
            <img className="max-md:w-[200px]" src="/assets/images/ic-link.png" alt="" />
          </a>
        </div>
        <div className="fade-up w-full mt-5">
            <img src="/assets/images/champion-bottom.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Champion;
