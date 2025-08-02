"use client";

import { useSlideFadeUp } from "@/hooks/useSlideFadeUp";

export const Vision = ({ isActive }: {isActive: boolean}) => {
  const ref = useSlideFadeUp(isActive, {
    duration: 1.2,
    delay: 0.5,
    stagger: 0.1,
    y: 100,
    triggerOnActive: true 
  });

  return (
    <section className="w-full h-full flex items-center justify-center md:pl-[160px] px-10">
      <div 
        ref={ref}
        className="text-white w-full max-w-[1200px]"
      >
        <div className="flex justify-start">
            <div className="relative flex items-center justify-center flex-col">
                <div className="absolute"><img className="" src="/assets/images/bg-vision.png" alt="" /></div>
                <div className="relative">
                    <div className="relative flex items-center justify-center">
                        <p className="font-audiowide text-[min(18.52vmin,150px)] u-text-stroke tracking-widest opacity-10 leading-none">Vision</p>
                        <div className="absolute inset-0 text-[min(5.9vmin,48px)] flex items-center justify-center font-black flex-col">
                            <p>ビジョン</p>
                            <span className="bg-[linear-gradient(-270deg,_#F70FFF_6.79%,_rgba(18,_214,_223,_0.02)_100%)] w-[360px] h-1 rounded-full"></span>
                        </div>
                    </div>
                    <p className="text-center pt-[min(3vmin,24px)] text-[min(3vmin,24px)] font-bold tracking-wider">
                        実世界の行動とデジタル価値を結びつけ、地域経済の<br />活性化に貢献する分散型プラットフォーム
                    </p>
                </div>
            </div>
        </div>
        <div className="flex justify-end">
        <div className="relative flex items-center justify-center flex-col">
            <div className="absolute"><img className="" src="/assets/images/bg-vision-02.png" alt="" /></div>
            <div className="relative flex flex-col items-center justify-center">
                <div className="relative flex items-center justify-center">
                    <p className="font-audiowide text-[min(18.52vmin,150px)] u-text-stroke tracking-widest opacity-10 leading-none">Mission</p>
                    <div className="absolute inset-0 text-[min(5.9vmin,48px)] flex items-center justify-center font-black flex-col">
                        <p>ミッション</p>
                        <span className="bg-[linear-gradient(-270deg,_#F70FFF_6.79%,_rgba(18,_214,_223,_0.02)_100%)] w-[360px] h-1 rounded-full"></span>
                    </div>
                </div>
                <ul className="pt-[min(3vmin,24px)] text-[min(3vmin,24px)] font-bold tracking-wider list-decimal leading-relaxed">
                    <li>実店舗・イベントの効果的な集客支援</li>
                    <li>ユーザーの日常行動に価値を付与</li>
                    <li>地域経済へのトラフィック創出</li>
                    <li>トークングラフマーケティングの実現</li>
                </ul>
            </div>
        </div>
        </div>
      </div>
    </section>
  );
};