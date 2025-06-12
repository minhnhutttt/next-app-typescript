import { memo } from 'react';
import Image from 'next/image';

interface FeatureItemProps {
  icon: string;
  title: string;
  description: string;
  alt: string;
}

const FeatureItem = memo(({ icon, title, description, alt }: FeatureItemProps) => (
  <div className="relative flex items-start p-3 sm:p-4 rounded-lg before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#10E188] before:to-[#05BAEA] before:opacity-40 before:rounded-lg z-30">
    <div className="relative md:size-[50px] size-10">
      <img src={icon} alt={alt} />
    </div>
    <div className="pl-2 sm:pl-4 relative z-10">
      <h4 className="font-bold text-[16px] md:text-[20px]  mb-1 leading-tight">{title}</h4>
      <p className=" text-[13px] md:text-[14px] font-light leading-relaxed">{description}</p>
    </div>
  </div>
));

FeatureItem.displayName = 'FeatureItem';

const features = [
  {
    icon: "/assets/images/seo-icon-1.png",
    title: "Googleアナリティクスとシームレス連携",
    description: "統計的なアクセスデータを簡単に確認できる環境です",
    alt: "Analytics Integration Icon"
  },
  {
    icon: "/assets/images/seo-icon-2.png",
    title: "詳細なアクセスデータ収集・分析",
    description: "訪問者の動きやパターンを把握",
    alt: "Data Collection Icon"
  },
  {
    icon: "/assets/images/seo-icon-3.png",
    title: "改善点等の把握",
    description: "改善施策の策定に役立つデータを提供",
    alt: "Improvement Icon"
  },
  {
    icon: "/assets/images/seo-icon-4.png",
    title: "データに基づいた施策の最適化",
    description: "効果的なWeb戦略を推進",
    alt: "Optimization Icon"
  }
] as const;

const Seo =() => {
  return (
    <section className="relative pt-[120px] md:pt-[240px]">
      <div className="w-full md:max-w-[1440px] max-w-[480px] mx-auto px-5 md:px-10">
        <div className='flex flex-col md:flex-row md::items-center gap-6 lg:gap-8'>
          <div className="lg:w-1/2 ">
            <div className="flex items-center">
              <span className="bg-gradient-to-br from-[#EFCB27] to-[#EC530C] w-10 md:w-[50px] h-1.5 md:h-2 mr-3 rounded-full"></span>
              <p className=" text-[18px] md:text-[32px] font-bold font-syne">SEO</p>
            </div>
            <h3 className="text-[24px] md:text-[32px] lg:text-[40px] xl:text-[50px]  min-[1366px]:text-[64px] font-black pt-3 tracking-[0.2em]">
              CVRだけじゃない<br/>
              SEOにも好影響
            </h3>
          </div>
          <div className="relative flex justify-center items-center mx-auto lg:mx-0 lg:w-1/2">
            <img className="md:max-lg:w-[300px]" src="/assets/images/logo-ga.png" alt="" />
          </div>
        </div>
        
        <div className="mx-auto flex flex-col lg:flex-row justify-between md:mt-24">
          <div className="text-center lg:text-left lg:flex-shrink-0 md:pl-7">
            <p className="md:text-[32px] text-[18px] font-bold text-center tracking-[0.2em]">
              Google Analytics4の
              <br />
              トップページ平均滞在時間
              <br />
              約<span className="md:text-[48px] text-[24px] font-black">2分30秒</span>
              <span className="">が</span>
              <br />
              全業界の平均とされています。
            </p>
          </div>
          
          <div className="flex-1 max-md:w-full">
            <div className="flex flex-wrap gap-2.5 mt-4 sm:mt-6 justify-center lg:justify-start">
              {[
                { label: "教育", value: "3分20秒" },
                { label: "旅行・レジャー", value: "3分16秒" },
                { label: "ヘルスケア", value: "2分44秒" },
                { label: "食品", value: "2分47秒" },
                { label: "テクノロジー", value: "2分44秒" },
                { label: "Eコマース", value: "2分23秒" }
              ].map((item, index) => (
                <div key={index} className="">
                  <p className="font-bold text-[14px] md:text-[18px] bg-white border border-[#05BAEA] px-3 lg:px-5 py-1.5 md:min-h-[58px] min-h-[44px] rounded-full  flex items-center justify-center whitespace-nowrap md:tracking-[0.2em]">
                    {item.label}: <span className="font-bold ml-1">{item.value}</span>
                  </p>
                </div>
              ))}
            </div>
            
            <p className="font-medium md:text-[14px] text-[12px] mt-3 sm:mt-5">
              ※出典：Databox「Google Analytics 4 Industry Benchmarks for 2023 and Beyond」（2023年8月）
            </p>
          </div>
        </div>
      </div>
<div className="px-5">
      <div className="relative max-w-[1100px] w-full mx-auto bg-white flex p-6 md:p-10 md:mt-[100px] mt-16 max-md:flex-col">
        <div className="relative flex items-center justify-center md:pr-10">
          <img src="/assets/images/ic_seo.png" alt="" />
        </div>
        <div className="flex-1 max-md:border-t md:border-l border-[#999999] max-md:pt-5 md:pl-10 md:text-[18px] leading-relaxed md:space-y-3 space-y-2">
          <p>
            平均滞在時間「2分30秒」は一見すると長くて良さそうですが、滞在時間が長い＝迷っているということも意味します。むしろ、目的のページにたどり着けずに迷っている時間が含まれている可能性があります。
          </p>
          <p>
            当社の最適構造化システムを導入することで、ユーザーが迷わず必要な情報にたどり着けるようになり、離脱率が減少し、ページの回遊も自然と促進されます。
          </p>
          <p className="font-bold"> 
            結果として「滞在時間」「直帰率」「内部リンク構造」が改善され、検索エンジンからの評価が高まり、SEO効果の向上につながります。           
          </p>
        </div>
      </div>

      <div className="mx-auto flex justify-center mb-8 sm:mb-20 mt-16 md:mt-[100px]">
        <div className="border-b border-black mx-auto px-5">
          <h2 className="md:text-[32px] text-[18px] font-bold pb-5 tracking-widest text-center">
            強力なデータ分析で訪問者を理解する
          </h2>
        </div>
      </div>

      <div className="relative mx-auto flex w-full max-w-[1240px] items-center xl:gap-[77px] gap-10 justify-between max-lg:flex-col">
        <div className="flex flex-col justify-between space-y-4 sm:space-y-[30px] w-full lg:w-[484px]">
          {features.map((feature, index) => (
            <FeatureItem key={index} {...feature} />
          ))}
        </div>
        
        <div className="bg-white">
          <div className="relative w-full">
            <img className="rounded-lg" src="/assets/images/seo-img.png" alt="" />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Seo;