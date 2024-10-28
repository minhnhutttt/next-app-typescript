"use client";
import Title from "@/components/title";
import { title } from "process";
const merits = [
    {
      title: "従業員満足度の向上",
      description: "福利厚生クエストを導入することで、従業員が福利厚生サービスを簡単に利用できるようになり、従業員満足度が向上します。便利な地図プラットフォームを通じて、従業員は近隣の福利厚生サービスをすぐに見つけ、日常的に活用することが可能です。福利厚生をより身近に感じることで、従業員のモチベーションが上がり、仕事へのエンゲージメントが高まります。",
    },
    {
        title: "従業員の定着率アップ",
        description: "福利厚生が充実することで、従業員が長く会社に留まりたいと感じるようになります。特に、競合他社と比較して福利厚生が魅力的であれば、優秀な人材の流出を防ぎ、従業員の定着率が向上します。これにより、採用や研修にかかるコストを削減できるだけでなく、企業内のスキルや知識の蓄積も促進されます。",
      },
      {
        title: "企業のブランド力強化",
        description: "福利厚生制度が充実している企業は、社外からも「従業員を大切にする企業」というポジティブなイメージを持たれやすく、企業ブランドの向上に繋がります。福利厚生クエストは、簡単で効果的に福利厚生を強化できるツールであり、他社との差別化を図るための強力な武器となります。",
      },
  ];

const Merit = () => {
  
  
    return (
      <section className="md:pt-[160px] pt-24">
        <div className="bg-white/70 md:mr-10 mr-5 md:rounded-tr-[120px] rounded-tr-[60px] md:rounded-br-[120px] rounded-br-[60px] md:pt-[130px] pt-[40px] md:pb-[80px] pb-[40px] max-sm:px-[20px] ">
        <Title
          text_ja="福利厚生クエスト導入のメリット"
          text_en="Advantages of Introduction"
          alignment="center"
        />
        <div className="md:flex justify-center w-full mx-auto max-md:max-w-[520px] md:pt-[36px] pt-[25px] md:mb-[46px] mb-[23px]">
          <figure className="md:w-[37%] max-w-[520px] w-full">
            <img className="w-full" src="/assets/images/img-merit.jpg" alt="" />
          </figure>
          <div className="flex-1 md:pl-[30px] md:pr-[50px] md:px-4">
            <ul>
            {merits.map((merit, index) => (
             <li className="md:py-[45px] py-7 border-t last:border-b border-solid border-[rgba(0, 15, 18, 0.30)] px-4" key={index}>
                <p className="md:flex align-center border-l-8 border-b border-[#73E3DC] mb-[22px] pl-[10px]">
                    <span className="text-[14px] font-bold mr-[14px]  uppercase">Merit <span className="md:text-[24px] text-[18px]">{index+1}</span></span>
                    <span className="font-bold md:text-[24px] text-[18px]">{merit.title}</span>
                </p>
                <p className="md:text-[16px] text-[12px]">{merit.description}</p>
             </li>
            ))}
            </ul>
          </div>
        </div>
        </div>
      
      </section>
    );
  };
  
  export default Merit;