"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";
import { ReactNode } from "react";

interface ItemProps {
    children: ReactNode;
    rect: string;
}
const Item = ({children, rect}: ItemProps) => {
    return (
        <div className={`relative inline-flex max-md:w-full desktop:px-5 lg:px-[1.389vw] md:px-[1.5vw] px-[2vw] desktop:py-[15px] lg:py-[1.042vw] md:py-[1.2vw] py-[2vw] desktop:text-[16px] lg:text-[1.111vw] text-[2.8vw] md:text-[1.6vw] leading-[1.1] font-medium md:rounded-[80px] rounded-[20px] ${rect}`}>{children}</div>
    )
}

const Introduction = () => {
    const ref = useScrollAnimations();
  return (
    <section className="md:mt-[90px] mt-10 relative px-5 lg:px-10">
        <span className="absolute top-10 inset-0 bg-white -skew-y-[3.5deg] z-0"></span>
        <div className="relative w-full max-w-[1400px] mx-auto">
            <h3 className="md:text-[48px] text-[24px] font-bold text-center">Research Shield+AIってどんなサービス？</h3>
            <div className="flex max-lg:flex-col max-lg:justify-center gap-8 desktop:pt-[90px] pt-[6.25vw] relative">
                <span className="absolute top-0 left-[-24px]">
                    <img className="max-desktop:w-[20.903vw]" src="/assets/images/intro-deco-01.png" alt="" />
                </span>
                <div className="desktop:w-[737px] w-full md:w-[70vw] lg:w-[51.181vw] flex flex-col items-center relative z-10">
                    <div className="absolute desktop:w-[293px] lg:w-[20.347vw] w-[30vw] desktop:space-y-[19px] lg:space-y-[1.319vw] space-y-[2vw] left-0 top-0">
                        <Item rect="desktop:ml-[58px] md:ml-[4.028vw] max-md:right-[-8vw] bg-[#EDEDED]">候補者の学歴・職歴の詐称</Item>
                        <Item rect="bg-[#BDE3FF]">雇用後の不正行為や犯罪</Item>
                        <Item rect="bg-[#EDEDED]">母国の政情不安による業務へ<br className="max-md:hidden" />の影響</Item>
                        <Item rect="desktop:ml-[10px] md:ml-[0.694vw] bg-[#BDE3FF]">テロリストや過激<br className="max-md:hidden" />派組織との関連</Item>
                        <Item rect="max-md:right-[-8vw] desktop:ml-[15px] md:ml-[1.042vw] bg-[#EDEDED]">言語・コミュニケーション<br className="max-md:hidden" />能力の不足</Item>
                    </div>
                    <div className="absolute desktop:w-[264px] lg:w-[18.333vw] md:w-[26vw] w-[30vw] desktop:space-y-[30px] lg:space-y-[2.083vw] space-y-[2.7vw] right-0 top-0">
                        <Item rect="max-md:left-[-8vw] bg-[#BDE3FF]">ビザ取得の可否</Item>
                        <Item rect="desktop:ml-[48px] md:ml-[3.333vw] bg-[#EDEDED]">薬物使用・依存の可能性</Item>
                        <Item rect="desktop:ml-[48px] md:ml-[3.333vw] bg-[#BDE3FF]">企業文化へのフィット</Item>
                        <Item rect="desktop:ml-[38px] md:ml-[2.639vw] bg-[#EDEDED]">候補者の健康状態や<br className="max-md:hidden" />感染症</Item>
                        <Item rect="max-md:left-[-8vw] bg-[#BDE3FF]">技能レベルや資格の偽装</Item>
                    </div>
                    <figure className="md:pt-4 pt-[12vw]">
                        <img className="max-md:w-[32vw] max-lg:w-[32vw] max-desktop:w-[24.167vw]" src="/assets/images/img-intro-01.png" alt="" />
                    </figure>
                    <div className="flex items-center justify-center desktop:ml-[-55px] lg:mt-[3.889vw] md:mt-[4vw] mt-[20vw] desktop:mt-14">
                        <Item rect="bg-[#BDE3FF]">ハラスメント行為などのコンプライアンス違反</Item>
                    </div>
                </div>
                <div className="desktop:w-[540px] max-w-[540px] md:w-[35.5vw] w-[70vw] desktop:mt-[130px] lg:mt-[9.028vw] md:mt-[-8vw] relative max-lg:ml-auto max-md:flex max-md:flex-col max-md:items-center">
                    <span className="absolute bottom-0 right-[-24px]">
                        <img className="max-md:w-[40vw] max-desktop:w-[20.833vw]" src="/assets/images/intro-deco-02.png" alt="" />
                    </span>
                    <span className="absolute lg:top-1/2 md:top-[10vw] lg:left-[-6.25vw] left-[-8.25vw] desktop:left-[-90px]"><img className="max-md:w-[10vw] max-desktop:w-[6.319vw]" src="/assets/images/intro-arrow.png" alt="" /></span>
                    <div className="relative desktop:mb-[-105px] md:mb-[-7.292vw] mb-[-14vw] max-md:w-[60vw] max-desktop:w-[37.431vw]">
                        <figure>
                            <img className="max-md:w-[60vw] max-desktop:w-[37.431vw]" src="/assets/images/img-intro-bubble.png" alt="" />
                        </figure>
                        <div className="absolute inset-0 flex justify-center md:pt-[3.333vw] pt-[5.5vw] \ desktop:pt-12">
                            <div className="desktop:max-w-[430px] md:max-w-[29.861vw] max-w-[46vw] mx-auto desktop:text-[24px] md:text-[1.667vw] text-[2.5vw] font-bold">
                                AIを搭載したバックグラウンド <br />
                                調査で事前にリスクを把握！<br />
                                <br />
                                人手不足と外国人材の採用リスクの<br />
                                トレードオフを解決するサービスです。
                            </div>
                        </div>
                    </div>
                    <figure className="flex justify-center">
                        <img src="/assets/images/img-intro-02.png" alt="" />
                    </figure>
                </div>
            </div>
        </div>
        <div className="w-full max-w-[1260px] mx-auto">
            <div className="flex">
                <figure>
                    <img src="/assets/images/img-intro-03.png" alt="" />
                </figure>
                <div className="">
                    <div className="flex md:text-[28px] text-[20px] font-bold">
                        <div className="flex">
                            <figure><img src="/assets/images/logo-sm.png" alt="" /></figure>は、外国人材の採用・活用に</div>
                        ともなう多様なリスクを徹底的に排除します。
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Introduction;
