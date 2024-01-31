"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import StepItem from "./stepItem";

export default function Steps() {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <div>
      <div ref={animateRefs} className="flex justify-center md:text-[50px] text-[28px] text-white text-center bg-[#184E97] font-bold p-5">
        お申し込みについて
      </div>
      <div className="w-full md:max-w-[1240px] max-w-[480px] mx-auto px-5 relative py-10 md:py-20 mb-12 md:mb-[92px] mt-10 md:mt-[85px]">
        <span ref={animateRefs} className="absolute h-full w-2 md:w-[15px] bg-[#D9D9D9] top-0 lg:left-[345px] md:left-[247px] left-[22px] z-0"></span>
        <div className="relative md:space-y-[54px] space-y-10">
          <StepItem
            step="1"
            title="お申し込み "
            content={<>LINEよりご連絡ください </>}
          />
          <StepItem
            step="2"
            title="ヒアリング "
            content={
              <>
                HP デザインの雰囲気や配色などお伺いします。
                <br />
                ヒアリングシートの質問にお答え頂くだけで <br />
                ご希望のホームページが出来上がります。{" "}
              </>
            }
          />
          <StepItem
            step="3"
            title="各種デザイン制作 "
            content={
              <>
                HPのデザインにあわせてメインビジュアルや
                コンテンツに必要な画像を制作していきます。{" "}
              </>
            }
          />
          <StepItem
            step="4"
            title="アカウント開設・各種設定 "
            content={<>面倒な各種設定など漏れなく対応させて頂きます。 </>}
          />
          <StepItem
            step="5"
            title="スケジュール登録 "
            content={
              <>
                お客様がHPにアクセスしてから予約までたどり着けるよう出勤時間などを
                登録していきます。{" "}
              </>
            }
          />
          <StepItem
            step="6"
            title="運用開始 "
            content={
              <>
                運営に使用するLINEアカウントやSNSのアカウントなどを登録しすぐに運営できます。
              </>
            }
          />
        </div>
      </div>
    </div>
  );
}
