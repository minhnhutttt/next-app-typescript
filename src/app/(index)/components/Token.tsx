"use client";

import { useSlideFadeUp } from "@/hooks/useSlideFadeUp";

export const Token = ({ isActive }: {isActive: boolean}) => {
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
              <p className="absolute font-audiowide text-[min(18.52vmin,150px)] u-text-stroke opacity-20 leading-none whitespace-nowrap">Token Economics</p>
              <h3 className="lg:text-[min(5.7vmin,48px)] md:text-[min(5vmin,32px)] text-[20px] tracking-wider font-black text-center">トークンエコノミクス</h3>
              <span className="bg-[linear-gradient(-270deg,_#F70FFF_6.79%,_rgba(18,_214,_223,_0.02)_100%)] w-full block h-1 rounded-full"></span>
          </div>
            </div>
            <div className="flex justify-center pt-8 md:pt-[min(5.5vmin,44px)] pb-[min(3.7vmin,30px)] max-md:flex-col max-md:items-center space-y-2 md:space-x-5 lg:space-x-14">
                <div className="fade-item flex items-center">
                    <p className="font-bold md:text-[min(2.5vmin,20px)] text-[18px] max-md:text-center whitespace-nowrap">
                        トークン概要
                    </p>
                </div>
                <div className="fade-item py-2.5 flex items-center">
                    <ul className="md:text-[min(2vmin,16px)] text-[14px] leading-loose">
                        {
                            [
                                {
                                    title: "トークン名",
                                    value: "Together Coin（TGZ）"
                                },
                                 {
                                    title: "ブロックチェーン",
                                    value: "DIVER Chain（DRC-20）"
                                },
                                 {
                                    title: "総発行量",
                                    value: "1,000,000 TGZ（固定）"
                                },
                            ].map((item, index) => (
                                <li key={index} className="flex md:gap-12 border-b border-[#5F5F5F] gap-5 mb-[min(2.5vmin,12px)]">
                                    <span className="lg:text-[min(2.5vmin,20px)] md:text-[min(3vmin,16px)] text-[14px] font-bold w-[120px] md:w-[130px] lg:w-[174px]">{item.title}</span>
                                    <span className="lg:text-[min(3vmin,24px)] md:text-[min(2vmin,20px)] text-[16px]">{item.value}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className="w-full max-w-[810px] mx-auto">
                <table className="fade-item w-full text-[12px] md:text-[min(2vmin,15px)] text-center border-collapse mt-2.5 bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.00)_0%,_rgba(255,_255,_255,_0.20)_100%)] backdrop-filter backdrop-blur-[10px] border-[#2EDCFF]/[0.2] border [&_td]:border-[#2EDCFF]/[0.2] [&_td]:border-b [&_td]:py-2 md:[&_td]:py-[min(1vmin,8px)] md:[&_td]:px-3 [&_td]:px-1 [&_th]:py-2 md:[&_th]:py-[min(1vmin,8px)] md:[&_th]:px-3 [&_th]:px-1 [&_th]:font-bold [&_th]:border-[#2EDCFF]/[0.2] [&_th]:border-b">
                <thead>
                    <tr>
                        <th>用途</th>
                        <th>割合</th>
                        <th>枚数</th>
                        <th>枚数</th>
                    </tr>
                    </thead>
                     <tbody>
                    <tr className="whitespace-nowrap">
                        <td>エコシス<br className="md:hidden" />テム循環</td>
                        <td>45%</td>
                        <td>450,000</td>
                        <td>アクション報酬プール</td>
                    </tr>
                    <tr>
                        <td>初期流動性</td>
                        <td>15%</td>
                        <td>150,000</td>
                        <td>市場形成用</td>
                    </tr>
                    <tr>
                        <td>パートナー<br className="md:hidden" />シップ</td>
                        <td>20%</td>
                        <td>200,000</td>
                        <td>提携企業インセンティブ</td>
                    </tr>
                    <tr>
                        <td>運営資金</td>
                        <td>10%</td>
                        <td>100,000</td>
                        <td>プラットフォーム運営資金</td>
                    </tr>
                    <tr>
                        <td>マーケティング</td>
                        <td>10%</td>
                        <td>100,000</td>
                        <td>プロモーション・エアドロップ</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
      </div>
    </section>
  );
};