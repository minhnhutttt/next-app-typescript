"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";
import { useState } from "react";

const Champion = () => {
  const ref = useScrollAnimations();

  const [isOpen, setIsOpen] = useState(false);
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
                  <button
                    onClick={() => setIsOpen(true)}
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
                  </button>
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
      <div className={`fixed inset-0 bg-black/90 flex items-center justify-center w-full h-full z-50 p-5 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0" onClick={() => setIsOpen(false)}></div>
        <div className="w-full max-w-[840px] h-[90%] relative">
          <button  onClick={() => setIsOpen(false)} className="absolute max-md:right-0 md:left-[calc(100%+30px)] -top-10 md:top-0 md:text-[48px] text-[32px] text-[#FFB601] leading-none">×</button>
          <div data-lenis-prevent className=" bg-white/[0.96] mx-auto rounded-[30px] relative flex items-center justify-center overflow-auto h-full w-full">
          <div className="w-full max-w-[790px] h-full py-10 px-5">
            <p className="md:text-[18px] text-[15px] font-bold md:py-10 py-5 px-2">
              期間限定のスペシャルイベント <br />
            「年間獲得チャンピオンは誰だ？！」が開催中！<br /><br />COIN TOGETHERでイーサリアム(ETH)をたくさん獲得して、頂点を目指そう！<br />
              期間中に最も多くのETHを獲得したユーザーには、栄光の称号「COIN TOGETHER イーサリアムエンペラー」が授与されます！
            </p>
            <div className="border-y border-black md:py-10 py-5 space-y-3 md:text-[18px] text-[15px] font-bold">
              <p className="text-center md:text-[24px] text-[20px]">イベント詳細</p>
              <p className="text-center pb-5">2024年12月10日〜2024年12月10日</p>
              <p className="text-center">【参加方法】</p>
              <div className="w-full max-w-[600px] mx-auto">
                ①アプリをダウンロードし、アカウントを作成 <br />
                <br />
                ②提携店舗やサービスでお買い物・お支払いをして、ETHを獲得。獲得したETHは自動的にランキングに反映されます。
              </div>
            </div>
            <div className="md:py-10 pt-5 pb-10">
              <p className="text-center md:text-[24px] text-[20px]">イベント詳細</p>

              <div className="flex justify-center md:mt-[30px] mt-5 gap-5">
                <a href="http://" target="_blank" rel="noopener noreferrer"><img src="/assets/images/btn-google.png" alt="" /></a>
                <a href="http://" target="_blank" rel="noopener noreferrer"><img src="/assets/images/btn-apple.png" alt="" /></a>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Champion;
