"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const Introduction = () => {
  const ref = useScrollAnimations();

  return (
    <section
      ref={ref}
      className="px-5"
    >
      <div className="md:py-[160px] py-[20vw] flex items-center justify-center w-full max-w-[1360px] mx-auto md:gap-[60px] gap-[8vw] flex-wrap">
        <h2 className="fade-up md:text-[64px] text-[8vw] font-bold">
            <p>「誰にも相談できない」</p>
            <p>経営難題にAIの力を。</p>
        </h2>
        <div className="md:w-[504px]">
            <div className="fade-up">
                <p className="md:text-[20px] text-[4vw] leading-loose">
                    経愛は、グローバル展開・多角経営で成功を収めた加藤慶也氏の経営哲学をAIに継承した、経営者のための次世代型意思決定支援サービスです。 わずか3分の質問に答えるだけで、あなたの事業環境・課題・リーダーシップスタイルを分析。加藤氏の実践知と洞察力を活かした、あなただけの経営アドバイスを即時に提供します。
                </p>
                <div className="flex flex-wrap md:mt-[50px] mt-[6vw] gap-5">
                    <p className="border border-white px-5 h-10 flex items-center justify-center">資金調達</p>
                    <p className="border border-white px-5 h-10 flex items-center justify-center">高度人材紹介</p>
                    <p className="border border-white px-5 h-10 flex items-center justify-center">DX</p>
                    <p className="border border-white px-5 h-10 flex items-center justify-center">節税</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
