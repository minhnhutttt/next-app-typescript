"use client"
import Text from "@/components/text";
import Title from "@/components/title";
import useScrollAnimations from "@/hooks/useScrollAnimations";
import React, { ReactNode } from "react";

const Item = ({number, title, children, rect, color}: {number:string, title: string, children: ReactNode, rect?: string, color: string}) => (
  <div className={`${rect} fade-up  size-[70vw] md:size-[29.861vw] dt:size-[430px] rounded-full flex flex-col items-center border-[1.042vw] dt:border-[15px] bg-white text-center p-[0.556vw] dt:p-2 [box-shadow:0px_5px_10px_0px_rgba(0,_0,_0,_0.20)]`} style={{borderColor: color}}>
    <div className="w-full md:max-w-[19.444vw] max-w-[55vw] dt:max-w-[280px]">
      <span className="dt:text-[80px] text-[15vw] md:text-[5.556vw] font-bold tracking-widest" style={{color: color}}>{number}</span>
      <h3 className="dt:text-[20px] text-[4vw] md:text-[1.389vw] my-[1.111vw] dt:my-4 font-bold">{title}</h3>
      <p className="text-left dt:text-[16px] text-[2.8vw] md:text-[1.111vw]">{children}</p>
    </div>
  </div>
)

const Risk = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative">
      <div className="md:px-5 md:pt-[155px] pt-20">
      <div className="w-full max-w-[1360px] mx-auto md:mb-[70px] mb-10 relative">
        <div className="max-md:px-5">
        <Title
            text_ja="見直される福利厚生の重要性"
            text_en="Importance of Benefits"
            alignment="left"
          />
          <div className="mt-5">
            <Text>
            現代のビジネス環境では<span className="relative gradient-background bg-no-repeat bg-[size:0_100%] bg-[linear-gradient(to_top,_#FAC103_30%,_transparent_30%)]">福利厚生の充実は単なる付加価値ではなく企業の成長と持続可能性に直結する重要な要素</span>です。
            </Text>
          </div>
          </div>
        <div className="relative w-full dt:w-[1330px] mx-auto mt-12 md:mt-20 overflow-auto no-scrollbar max-md:px-10">
          <div className="relative w-full md:h-full max-md:flex max-md:items-center max-md:gap-[6.25vw]">
          <div className="flex-[0_0_50vw] md:absolute flex flex-col justify-center max-md:mx-auto size-[50vw] md:size-[22.639vw] dt:size-[326px] rounded-full bg-white border-[1.389vw] dt:border-[20px] border-[#D9D9D9] text-center p-[1.111vw] dt:p-4 shadow-md md:top-[20.833vw] dt:top-[260px] left-1/2 transform md:-translate-x-1/2 mt-[6.25vw]">
              <p className="dt:text-[32px] text-[4vw] md:text-[2.222vw]">リスクについて</p>
              <p className="dt:text-[16px] text-[3vw] md:text-[1.111vw] mt-[10px] px-[1.944vw] dt:px-7 text-left">
                もし、福利厚生が不十分な場合、５種類リスクが生じる可能性があります。
              </p>
            </div>
            <div className="flex justify-center gap-[6.25vw] dt:gap-[90px]  max-md:justify-center max-md:items-center">
            <Item number="01" title="優秀な人材が流出するリスク" color="#73E3DC">
              優秀な従業員が、より福利厚生の充実した競合他社へと流出する可能性が高まります。<span className="font-bold">従業員の定着率が下がれば、採用コストが増加</span>し、チームの一体感も損なわれます。
            </Item>
            <Item number="02" title="従業員のモチベーション低下"  color="#5DF340">
            福利厚生が不十分だと、従業員の満足度が低下し、仕事に対するモチベーションや生産性も下がる傾向があります。これは<span className="font-bold">企業全体の業績にも悪影響</span>を与えます。
            </Item>
            </div>
            <div className="flex justify-between gap-5 md:mt-[44px] max-md:flex-row-reverse  max-md:justify-center max-md:items-center max-md:gap-[6.25vw] mt-[6.25vw]">
            <Item number="05" title="競合に遅れを取るリスク" color="#DF0F47">
            競合他社が福利厚生の充実を図っている中、自社だけがその取り組みを怠ると、市場での競争力が低下します。<span className="font-bold">福利厚生が優れた企業は、より優秀な人材を集め、強力な組織を築くことができます。</span>
            </Item>
            <Item number="04" title="メンタルヘルス問題の増加" color="#FFC300" rect="md:mt-[18.75vw] dt:mt-[270px]">
            福利厚生が不足していると、従業員の健康管理が不十分になり、メンタルヘルスの問題やストレスによる長期休暇が増加するリスクがあります。これは、<span className="font-bold">企業の生産性を低下させる大きな要因です。</span>
            </Item>
            <Item number="03" title="企業イメージの低下"  color="#F97E3C">
            企業が従業員の福利に投資しないことは、外部から「従業員を大切にしない企業」という印象を与える可能性があり、<span className="font-bold">求職者や取引先、顧客に対してもマイナスの影響を与えます。</span>
            </Item>
            </div>

          </div>
        </div>
        </div>
      </div>
      <div className="px-5">
        <div className="fade-up md:text-[18px] text-[14px] font-medium leading-loose bg-[#73E3DC]/[0.1] border border-dashed border-[#73E3DC] w-full max-w-[737px] mx-auto md:p-10 p-5 rounded-[20px]">
        <span className="font-bold">福利厚生の充実は単なる付加価値ではなく、企業の成長と持続可能性に直結する重要な要素です。</span><br />
        「 福利厚生クエスト 」は、これらの課題を解決し、従業員の満足度を向上させるための最適なソリューションです。
        </div>
      </div>
    </section>
  );
};

export default Risk;
