"use client";
import useBgText from "@/app/hooks/useBgText";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import { ReactNode, useState } from "react";

type ExplanationItemPropsType = {
  number: string;
  image: string;
  children: ReactNode;
};
function ExplanationItem({
  number,
  image,
  children,
}: ExplanationItemPropsType) {
  return (
    <div className="relative md:pl-[24px] max-md:px-3 md:pt-[24px] pt-[16px]">
      <div className="absolute left-0 top-0 md:w-[58px] w-[48px] md:h-[58px] h-[48px] bg-[#FE4848] rounded-full flex items-center leading-none justify-center text-white md:text-[32px] text-[20px] font-medium pb-1">
        {number}
      </div>
      <figure>
        <img src={image} />
      </figure>
      <div className="lg:text-[22px] md:text-[18px] text-[15px] font-medium pt-3 md:pt-5 pb-4 md:pb-3 text-center md:min-h-[98px]">
        {children}
      </div>
    </div>
  );
}

export default function Explanation() {
  const animateRefs = useScrollAnimation("fadeUp");
  const spanRef = useBgText();
  const [tab, setTab] = useState<number>(1);
  return (
    <section className="relative px-5 md:mb-20 mb-16">
      <div className="w-full md:max-w-[1220px] max-w-[480px] mx-auto">
        <h4
          ref={animateRefs}
          className="opacity-0 flex items-center justify-center gap-2 md:gap-[30px] md:px-8"
        >
          <span className="flex-1 h-[3px] md:h-[5px] bg-black max-md:min-w-[24px] max-w-[110px]"></span>
          <p className="md:text-[48px] text-[24px] font-medium tracking-widest text-center">
            次世代証明書って何が次世代なの？
          </p>
          <span className="flex-1 h-[3px] md:h-[5px] bg-black max-md:min-w-[24px] max-w-[110px]"></span>
        </h4>
        
        <div ref={animateRefs} className="flex opacity-0 rounded-t-[32px] overflow-hidden mt-8">
            <button className="w-1/2 bg-[#FFE8D3] py-4 text-center md:text-[32px] text-[20px] font-medium md:hidden" onClick={()=> setTab(1)}>
              発行側
            </button>
            <button className="w-1/2 bg-[#FFF7D9] py-4 text-center md:text-[32px] text-[20px] font-medium md:hidden" onClick={()=> setTab(2)}>
              受け取り側
              </button>
          </div>
        <div
          ref={animateRefs}
          className="opacity-0 flex md:rounded-[50px] max-md:flex-wrap overflow-hidden md:mt-10"
        >
          <div className={`w-full md:w-1/2 bg-[#FFE8D3] px-5 pt-8 md:pt-12 md:pb-[62px] pb-8 ${tab === 1 ? 'max-md:block' : 'max-md:hidden'}`}>
            <div className="w-full max-w-[385px] mx-auto">
              <p className="text-center md:text-[32px] text-[20px] font-medium max-md:hidden">
                発行側
              </p>
              <div className="md:mt-10">
                <ExplanationItem number="01" image="/images/explanation-01.jpg">
                  デジタル化を決めたらサクッと発行
                </ExplanationItem>
                <ExplanationItem number="02" image="/images/explanation-02.jpg">
                  発行されたらササっと送信
                </ExplanationItem>
                <ExplanationItem number="03" image="/images/explanation-03.jpg">
                  在庫もキッチリ一元管理
                </ExplanationItem>
              </div>
            </div>
            <div className="flex justify-center relative max-md:mt-5">
              <figure>
                <img
                  className="max-md:w-[120px]"
                  src="/images/explanation-deco-01.png"
                  alt=""
                />
              </figure>
              <p className="absolute top-4 md:top-[24px] md:text-[28px] lg:text-[32px] text-[20px] font-medium text-center">
                いとも簡単にデジタル化を
                <span className="text-[#FE4848]">実現</span>
              </p>
            </div>
          </div>
          <div className={`w-full md:w-1/2 bg-[#FFF7D9] px-5 pt-8 md:pt-12 md:pb-[62px] pb-8 ${tab === 2 ? 'max-md:block' : 'max-md:hidden'}`}>
            <div className="w-full max-w-[385px] mx-auto">
              <p className="text-center md:text-[32px] text-[20px] font-medium max-md:hidden">
              受け取り側
              </p>
              <div className="md:mt-10">
                <ExplanationItem number="01" image="/images/explanation-04.jpg">
                  対面や郵送での受け取りのような面倒なプロセスをザクっと省略
                </ExplanationItem>
                <ExplanationItem number="02" image="/images/explanation-05.jpg">
                  いつでもスマートフォンでサクサク確認
                </ExplanationItem>
                <ExplanationItem number="03" image="/images/explanation-06.jpg">
                  証明もポチポチ表示で完了
                </ExplanationItem>
              </div>
            </div>
            <div className="flex justify-center relative max-md:mt-5">
              <figure>
                <img
                  className="max-md:w-[120px]"
                  src="/images/explanation-deco-02.png"
                  alt=""
                />
              </figure>
              <p className="absolute top-4 md:top-[24px] md:text-[28px] lg:text-[32px] text-[20px] font-medium text-center">
                いとも簡単にデジタル化に
                <span className="text-[#FE4848]">適応</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={animateRefs}
        className="opacity-0 w-full max-w-[770px] mx-auto md:text-[18px] text-[14px] font-medium px-5 md:px-[35px] py-[22px] mt-11 relative"
      >
        <span className="absolute left-0 top-0 bottom-0 w-[64px] md:border-[3px] border-[2px] border-[#FE4848] !border-r-0"></span>
        次世代証明書を「次世代」と定義づける中心的な機能は、その
        <span className="relative overflow-hidden">
        <span ref={spanRef} className="w-0 opacity-0 absolute inset-0 z-[-1] bg-[linear-gradient(to_top,_#FFD900_40%,_transparent_40%)]"></span>
          「即時証明力」
        </span>
        です。
        <br />
        <br />
        認証も、検証も、その場で完結できるその「即時証明力」は、証明書運用をより簡単に、効率的に実現します。
        <br />
        <span className="md:text-[15px] text-[12px] font-normal inline-block mt-4">
          ※通常、デジタル証明書を運用するには、第三者認証機関による認証が必要です。認証プロセスには時間がかかり、運用上の課題となっています。
        </span>
        <span className="absolute right-0 top-0 bottom-0 w-[64px] md:border-[3px] border-[2px] border-[#FE4848] !border-l-0"></span>
      </div>
    </section>
  );
}
