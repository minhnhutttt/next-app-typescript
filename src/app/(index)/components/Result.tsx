import React, { ReactNode } from 'react';

interface ChartCardProps {
  title: string;
  head: string;
  text: ReactNode;
  imgSrc: string;
  arrowUp?: boolean
}

const ChartCard = ({ 
  title,
  head,
  text,
  imgSrc,
  arrowUp = false
}: ChartCardProps) => {
  return (
    <div data-scroll className="fade-up flex flex-col justify-center items-center bg-white p-4 sm:p-6 md:p-10 rounded-[20px] [box-shadow:0px_4px_20px_0px_rgba(0,_0,_0,_0.10)] relative overflow-hidden w-full">
      <h3 className="md:text-[24px] text-[16px] text-center leading-tight font-bold md:mb-5 mb-3">
        {title}
      </h3>
      <div className="flex justify-center">
        <div className="relative w-full">
            <img src={imgSrc} alt={title} />
            {arrowUp ? 
            <div className="w-[36.245%] h-[43.539%] absolute top-[8%] left-[16%] overflow-hidden">
              <img className='animate-[arrowUp_3s_ease-in_infinite]' src="/assets/images/arrow2.svg" alt="" />
            </div>
            : 
            <div className="w-[36.245%] h-[43.539%] absolute top-[8%] right-[10%] overflow-hidden">
              <img className='animate-[arrowDown_3s_ease-in_infinite]' src="/assets/images/arrow.svg" alt="" />
            </div>
            }
        </div>
      </div>
      
      <div className="text-center md:mt-4 mt-3">
        <p className="md:text-[24px] text-[13px]">{head}</p>
        <p className="md:text-[30px] text-[18px] font-bold">{text}</p>
      </div>
    </div>
  );
};


const Result = () => {
  return (
    <section className="relative pt-[120px] md:pt-[240px]">
      <div className="w-full md:max-w-[1440px] max-w-[480px] mx-auto px-5 md:px-10">
        <div className="md:pb-14 pb-8">
          <div data-scroll className="fade-up flex items-center">
            <span className="bg-gradient-to-br from-[#CF2FF7] to-[#214BE6] w-10 md:w-[50px] h-1.5 md:h-2 mr-3 rounded-full"></span>
            <p className="text-[24px] md:text-[32px] font-bold font-syne">RESULTS</p>
          </div>
          
          <h3 data-scroll className="fade-up text-[32px] md:text-[36px] lg:text-[40px] xl:text-[50px] min-[1366px]:text-[64px] font-black pt-3 tracking-[0.2em]">
            トップページの<br/>
            <span className="bg-gradient-to-r from-[#CF2FF7] to-[#214BE6] text-transparent bg-clip-text">
              構造を変えるだけで
            </span><br/>
            ここまで変わる。
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-9 mb-8 sm:mb-9">
          <ChartCard
            title="● 平均ページ滞在時間の短縮"
            head="導入前：2分30秒（目的にたどり着けず回遊）"
            text={(<>
            導入後：<span className="bg-gradient-to-r from-[#26D48A] to-[#0CBDEC] text-transparent bg-clip-text font-black">1分10秒</span>（ゴールに直行）
            </>)}
            imgSrc="/assets/images/chart-1.png"
          />
          
          <ChartCard
            title="● 直帰率の改善"
            head="導入前：65%（どこに何があるのか分からない）"
            text={(<>
            導入後：<span className="bg-gradient-to-r from-[#EFCB27] to-[#EC530C] text-transparent bg-clip-text font-black">38%</span>（ゴールに直行）
            </>)}
            imgSrc="/assets/images/chart-2.png"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-9 items-center">
          <div>
            <ChartCard
              title="● CVR (コンバージョン率) の向上"
              head="導入前：1.8%(訪問者が目的地にたどり着けない"
            text={(<>
            導入後：<span className="bg-gradient-to-r from-[#CF2FF7] to-[#214BE6] text-transparent bg-clip-text font-black">4.3%</span>（ゴールに直行）
            </>)}
              imgSrc="/assets/images/chart-3.png"
              arrowUp
            />
          </div>
          
          <div data-scroll className="fade-up flex items-center justify-center lg:justify-start p-4 sm:p-6">
            <p className="font-bold md:text-[32px] text-[20px] leading-relaxed max-md:w-[300px] lg:w-[370px]">
              目的に直行できることでユーザーの迷いが減り、<br />
              ⚫︎滞在時間は短縮<br />
              ⚫︎ページ離脱は減少<br />
              ⚫︎CVRは約2.4倍に向上することが見込まれます。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Result;
