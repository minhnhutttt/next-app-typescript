"use client";

import { useSlideFadeUp } from "@/hooks/useSlideFadeUp";

export const WhatIs = ({ isActive }: {isActive: boolean}) => {
  const ref = useSlideFadeUp(isActive, {
    duration: 1.2,
    delay: 0.5,
    stagger: 0.1,
    y: 100,
    triggerOnActive: true
  });

  return (
    <section className="w-full h-full overflow-hidden">
      <div 
        ref={ref}
        className="w-full md:py-[min(15vmin,120px)] py-[min(20vmin,160px)] max-md:flex items-center justify-center flex-col h-full"
      >
        <div className="fade-item bg-[linear-gradient(-270deg,_#2EDCFF_0.39%,_rgba(219,_0,_178,_0.4)_70.4%,_rgba(219,_0,_178,_0.03)_96.4%)] min-h-[min(10.25vmin,84px)] flex items-center w-full max-md:py-2">
          <div className="w-full max-w-[min(160vmin,1200px)] flex items-center justify-center mx-auto">
            <h3 className="lg:pl-[min(21vmin,170px)] md:pl-[min(14vmin,120px)] pl-4">
              <img className="max-md:w-[300px]" src="/assets/images/tgz.svg" alt="" />
            </h3>
            <p className="md:text-[min(2vmin,16px)] text-[11px] text-white pl-[min(8.6vmin,70px)] pr-[min(3vmin,30px)]">
              トゥギャザーコイン（TGZ）は、位置情報連動型のアクション報酬システムとNFTクーポンを組み合わせた、実店舗・イベント・地域への集客を促進するユーティリティトークンです。
            </p>
          </div>
        </div>
        <div className="px-12 md:px-[100px] pt-[min(7.4vmin,60px)] flex justify-center">
          <div className="flex md:items-center max-md:w-full max-w-[1100px] mx-auto">
            <span className="fade-item md:w-[min(46.91vmin,380px)] max-md:hidden">
              <img src="/assets/images/img-enako.png" alt="" />
            </span>
            <div className="text-white md:pl-[min(7.4vmin,60px)]">
              <div className="fade-item max-md:flex items-center max-md:gap-4">
                <span className="w-[160px] md:hidden">
                <img src="/assets/images/img-enako.png" alt="" />
              </span>
              <div className="text-[min(3vmin,24px)] font-bold pb-[min(5.8vmin,47px)]">
                <p className="">
                  実世界の行動で<span className="text-[min(5vmin,40px)]">稼げる</span>
                </p>
                <p className="">
                  「トゥギャザーコイン（TGZ）」
                </p>
              </div>
              </div>

              <div className="space-y-[min(3.7vmin,30px)]">
                {[
                  {
                    title: "アクション報酬",
                    text: "特定の場所での行動に対してTGZを付与"
                  },
                  {
                    title: "NFTクーポン交換",
                    text: "TGZを実店舗で使える割引クーポンと交換"
                  },
                  {
                    title: "循環型エコシステム",
                    text: "100万枚固定供給による持続可能な経済圏"
                  },
                  {
                    title: "分散型運営",
                    text: "DAOによるコミュニティ主導の意思決定"
                  }
                ].map((item, index) => (
                  <div className="fade-item flex items-center gap-[30px]" key={index}>
                    <div className="aspect-[247/70] text-[min(2.72vmin,22px)] bg-[url(/assets/images/frame.png)] bg-cover w-[min(29.88vmin,242px)] flex items-center justify-center">{item.title}</div>
                    <div className="flex-1 text-[min(2.22vmin,18px)]">{item.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};