"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";
import { ReactNode } from "react";

const ProfileItem = ({title, children}: {title: string, children: ReactNode}) => (
  <div className="fade-up space-y-2">
    <p className="md:text-[20px] text-[5vw] font-semibold tracking-[0.1em]">{title}</p>
    <p className="md:text-[18px] text-[4vw] tracking-[0.08em]">{children}</p>
  </div>
)

const Profile = () => {
  const ref = useScrollAnimations();

  return (
    <section
      ref={ref}
    >
      <div className="flex justify-center items-center px-5">
        <h3 className="fade-up font-semibold relative px-5 md:pl-10 md:pr-7 flex items-center justify-center py-6 md:py-9">
            <span className="w-[5vw] md:w-[92px] h-full border border-white absolute left-0 border-r-0"></span>
            <div className="">
                <p className="text-[6.5vw] md:text-[52px] xl:text-[80px] tracking-[0.2em] leading-none">経愛に宿した経営人格</p>
                <p className="text-[2.4vw] md:text-[19px] xl:text-[30px] tracking-[0.2em] max-md:mt-[2vw]">事業家、挑戦者、多角経営、海外展開、実践者、そして愛。</p>
            </div>
            <span className="w-[5vw] md:w-[92px] h-full border border-white absolute right-0 border-l-0"></span>
        </h3>
      </div>
      <div className="flex gap-[60px] mt-[5vw] md:mt-16 pb-[208px] max-lg:flex-col max-lg:items-center max-lg:justify-center">
          <span className="fade-up max-lg:w-auto max-xl:w-1/2">
            <img src="/assets/images/img-profile.png" alt="" />
          </span>
          <div className="flex-1 max-lg:px-5 lg:pr-11">
            <h4 className="fade-up leading-none">
              <span className="md:text-[48px] text-[10vw] font-semibold tracking-[0.2em]">加藤慶也</span>
              <span className="md:text-[32px] text-[5vw] font-['Times_New_Roman'] ml-[2vw] md:ml-7 tracking-[0.12em]">Yoshiya Kato</span>
            </h4>
            <p className="fade-up md:text-[18px] text-[4vw] leading-loose mt-[7vw] md:mt-8 tracking-widest">
              ベンチャー投資、スポーツビジネス、エンターテインメント、ITソリューションなど、幅広い分野での経験と実績を持ち、企業の成長戦略や新規事業開発において的確なアドバイスを提供します。また、国際的な視野を活かし、海外展開やクロスボーダーM&Aなど、グローバルなビジネス展開にも精通しています。
            </p>
            <div className="fade-up flex mt-[7vw] md:mt-6 items-center gap-9">
              <p className="md:text-[24px] text-[5.5vw] tracking-[0.2em]">主な経歴と実績</p>
              <span className="flex-1 h-px bg-white"></span>
            </div>
            <div className="leading-loose mt-[9vw] md:mt-7 md:space-y-10 space-y-[10vw]">
              <ProfileItem title="◻️ FIBA公認 3x3国際プロバスケットボールリーグ「3BL」チェアマン">
                2017年、インドにて3x3バスケットボールリーグ「3BL」を設立し、チェアマンに就任。国際的なスポーツビジネスの発展に寄与しています。
              </ProfileItem>
              <ProfileItem title="◻️ YKBK48 Entertainment Private Limited オーナー">
                インドにおけるAKB48の姉妹グループ「DEL48」「MUB48」の運営を手掛け、エンターテインメント分野での国際展開を推進しています。
              </ProfileItem>
              <ProfileItem title="◻️ 株式会社YKBK HITO Solutions 代表取締役">
                ITソリューションや人材派遣、建設業など多岐にわたる事業を展開し、企業の多様なニーズに応えています。
              </ProfileItem>
              <ProfileItem title="◻️ 株式会社カタリストキャピタル 代表取締役">
                経済産業省認定のベンチャーファンドを運営し、スタートアップ企業への投資と成長支援を行っています。
              </ProfileItem>
              <ProfileItem title="◻️株式会社SKALE 経営責任者">
                デジタル領域における包括的なソリューションを提供し、企業のデジタルトランスフォーメーションを支援しています。
              </ProfileItem>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Profile;
