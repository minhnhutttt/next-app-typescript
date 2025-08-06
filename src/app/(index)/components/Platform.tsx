"use client";

import { useSlideFadeUp } from "@/hooks/useSlideFadeUp";

export const Platform = ({ isActive }: {isActive: boolean}) => {
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
        className="w-full h-full flex items-center justify-center xl:px-[160px] md:pl-[160px] pl-5 pr-5"
      >
        <div className="w-full max-w-[1200px]">
            <div className="fade-item flex items-center justify-center max-md:pr-0 max-xl:pr-[160px]">
                <div className="relative flex flex-col items-center justify-center">
                    <p className="absolute font-audiowide text-[min(18.52vmin,150px)] u-text-stroke tracking-widest opacity-20 leading-none">Platform</p>
                    <h3 className="lg:text-[min(5.7vmin,48px)] md:text-[min(5vmin,32px)] text-[20px] tracking-wider font-black text-center">プラットフォームの仕組みと機能</h3>
                    <span className="bg-[linear-gradient(-270deg,_#F70FFF_6.79%,_rgba(18,_214,_223,_0.02)_100%)] w-full block h-1 rounded-full"></span>
                </div>
            </div>
            <div className="flex justify-center pt-10 md:pt-[min(5.5vmin,44px)] pb-10 md:pb-[min(3.7vmin,30px)] max-md:flex-col max-md:items-center">
                <div className="fade-item flex items-center">
                    <p className="font-bold md:text-[min(2.5vmin,20px)] text-[18px] max-md:text-center">
                        基本報酬が設定された<br />ユーザー行動でTGZを集める
                    </p>
                </div>
                <div className="fade-item w-full max-md:h-px md:w-px max-md:mt-2 mx-4 lg:mx-11 bg-white "></div>
                <div className="fade-item py-2.5 flex items-center">
                    <ul className="md:text-[min(2vmin,16px)] text-[13px] leading-loose">
                        <li>店舗訪問（GPS認証）</li>
                        <li>購買行動（レシート提出など）</li>
                        <li>コンテンツ収集（エリアNFT取得）</li>
                        <li>情報発信（レビュー・SNS投稿・友人紹介）</li>
                        <li>条件によるボーナス（天候・時間帯・新規店舗等）</li>
                    </ul>
                </div>
            </div>
            <div className="w-full max-w-[810px] mx-auto">
                <p className="fade-item text-center bg-[linear-gradient(90deg,_#2EDCFF_40.28%,_#8370D9_50.02%,_#DB00B2_60.17%)] u-text-gradient text-[20px] md:text-[min(2.22vmin,18px)] font-bold">集めたTGZでNFTクーポンを獲得</p>
                <table className="fade-item w-full text-[11px] md:text-[min(2vmin,15px)] text-center border-collapse mt-2.5 bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.00)_0%,_rgba(255,_255,_255,_0.20)_100%)] backdrop-filter backdrop-blur-[10px] border-[#2EDCFF]/[0.2] border [&_td]:border-[#2EDCFF]/[0.2] [&_td]:border-b [&_td]:py-2 md:[&_td]:py-[min(1vmin,8px)] md:[&_td]:px-3 [&_td]:px-1 [&_th]:py-2 md:[&_th]:py-[min(1vmin,8px)] md:[&_th]:px-3 [&_th]:px-1 [&_th]:font-bold [&_th]:border-[#2EDCFF]/[0.2] [&_th]:border-b">
                <thead>
                    <tr>
                        <th>カテゴリー</th>
                        <th>必要TGZ</th>
                        <th>割引率/特典</th>
                        <th>特典例</th>
                    </tr>
                    </thead>
                     <tbody>
                    <tr className="whitespace-nowrap">
                        <td>カフェ・軽食</td>
                        <td>50〜150</td>
                        <td>20-50%OFF</td>
                        <td>ドリンク券、<br className="md:hidden" />軽食割引など</td>
                    </tr>
                    <tr>
                        <td>レストラン</td>
                        <td>100-800</td>
                        <td>10-30%OFF</td>
                        <td>食事券・ディナー<br className="md:hidden" />割引など</td>
                    </tr>
                    <tr>
                        <td>エンタメ</td>
                        <td>300-1,200</td>
                        <td>交換券</td>
                        <td>映画、カラオケ、<br className="md:hidden" />FAVER限定グッズ<br />など施設利用券、<br className="md:hidden" />イベント割引</td>
                    </tr>
                    <tr>
                        <td>地域特産</td>
                        <td>400-1,500</td>
                        <td>1,000-<br className="md:hidden" />3,000円OFF</td>
                        <td>特産品交換、<br className="md:hidden" />観光施設優待</td>
                    </tr>
                    <tr>
                        <td>プレミアム</td>
                        <td>1,000-5,000</td>
                        <td>VIP特典</td>
                        <td>高級サービス、<br className="md:hidden" />特別体験</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
      </div>
    </section>
  );
};