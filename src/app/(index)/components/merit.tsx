"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";
import { ReactNode } from "react";

const Item = ({title, children} : {title: string, children: ReactNode}) => (
    <div className="fade-up">
        <span className="h-0.5 block u-border-dash"></span>
        <p className="text-center md:text-[22px] text-[18px] font-bold pt-[34px]">{title}</p>
        <div className="flex justify-center px-4 mt-4 pb-12">
            <p className=" md:text-[20px] text-[16px] leading-[1.2]">{children}</p>
        </div>
    </div>
)

const Merit = () => {
  const ref = useScrollAnimations();
  return <section ref={ref} className="px-5 pt-[100px] md:pt-[150px]">
    <div className="fade-up relative mx-auto flex w-full max-w-[414px]">
        <div className="absolute top-[-75px] md:left-[-40px] left-[-15px]">
          <img className="max-md:w-[90px]" src="/assets/images/hand.png" alt="" />
        </div>
        <h4>
            <img src="/assets/images/merit-title.svg" alt="所属すると特典が満載" />
        </h4>
      </div>
      <div className="w-full max-w-[440px] mx-auto mt-8 space-y-12">
        <div className="relative bg-[linear-gradient(90deg,_rgba(255,125,211,1)_0%,_rgba(60,232,255,1)_100%)] p-px flex items-center justify-center rounded-[20px]">
            <div className="absolute bg-[linear-gradient(90deg,_rgba(255,125,211,1)_0%,_rgba(60,232,255,1)_100%)] w-full h-full right-[-10px] bottom-[-10px] rounded-[20px]"></div>
            <div className="w-full h-full bg-white rounded-[20px] overflow-hidden relative pt-6">
                <div className="fade-up flex justify-center"><img className="max-md:w-[120px]" src="/assets/images/merit-ic-01.png" alt="" /></div>
                <h5 className="fade-up text-center md:text-[32px] text-[24px] font-semibold">配信サポート</h5>
                <div className="w-full max-w-[376px] mx-auto mt-5">
                    <Item title="新人さんレクチャー！！">
                        全く操作が分からない方も安心。オンラインレクチャーにて丁寧に操作方法などを説明致します。
                    </Item>
                    <Item title="新人さん講習！！">
                        いつでも自由に読めるTOP LIVE所属ライバー専用の新人講習ルームがあります。過去にあったTOPライバーの成功事例や悩みをいつでも好きな時に学べます。
                    </Item>
                    <Item title="所属ライバー × 協力">
                    所属ライバー専用の配信告知ルームでは、ライバー同士が応援し合い、相互効果を生み出します。新人ライバーさんもすぐに仲間ができます。
                    </Item>
                    <Item title="365日対応の相談窓口">
                    専属マネージャーが、操作方法や配信に関するお悩みはもちろんのこと、適切な配信時間の提案や操作方法、運営への連絡まで何でも相談できます。
                    </Item>
                </div>
            </div>
        </div>
        <div className="relative bg-[linear-gradient(90deg,_rgba(255,125,211,1)_0%,_rgba(60,232,255,1)_100%)] p-px flex items-center justify-center rounded-[20px]">
            <div className="absolute bg-[linear-gradient(90deg,_rgba(255,125,211,1)_0%,_rgba(60,232,255,1)_100%)] w-full h-full right-[-10px] bottom-[-10px] rounded-[20px]"></div>
            <div className="w-full h-full bg-white rounded-[20px] overflow-hidden relative pt-6">
                <div className="fade-up flex justify-center"><img className="max-md:w-[120px]" src="/assets/images/merit-ic-02.png" alt="" /></div>
                <h5 className="fade-up text-center md:text-[32px] text-[24px] font-semibold">素敵な特典</h5>
                <div className="w-full max-w-[376px] mx-auto mt-5">
                    <Item title="新人特典">
                    新人さんが続けられるよう、弊社独自の特別ボーナスキャンペーンがあります。
                    </Item>
                    <Item title="各種事務所イベント">
                    プレゼントイベントや広告起用イベント、現金獲得イベントなどを定期的に開催。
                    </Item>
                    <Item title="企業案件あり">
                    テレビ出演オファーや、各種企業案件もあります。
                    </Item>
                </div>
            </div>
        </div>
      </div>
      <div className="md:mt-24 mt-16 pb-5">
        <h5 className="fade-up text-center md:text-[28px] text-[20px] font-semibold mb-6">
            楽しく配信するために... <br />
            全力でサポートいたします♪♪
        </h5>
        <figure className="fade-up rounded-[30px] overflow-hidden">
            <img src="/assets/images/merit-img.png" alt="" />
        </figure>
        <p className="fade-up text-center md:text-[17px] text-[15px] font-bold mt-5">- 世界大会授賞式の模様(ののさん) -</p>
      </div>
  </section>;
};

export default Merit;
