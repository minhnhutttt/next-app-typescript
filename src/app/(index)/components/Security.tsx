"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const Security = () => {
  const ref = useScrollAnimations();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden sm:px-[30px] px-4 pb-20 sm:pb-[110px]"
    >
        <div className="relative">
            <h3 className="fade-up sm:text-[48px] text-[28px] font-bold text-center sm:border-b-[15px] border-b-[8px] border-[#3A86FF] pb-2">
                <p>セキュリティと信頼性</p>
                <p className="sm:text-[32px] text-[18px] font-normal text-left">すべてのユーザーが安心して使えるWeb3基盤を実現 </p>
            </h3>
            <div className="sm:pt-10 pt-7">
                <div className="fade-up sm:text-[24px] text-[16px]">
                    FAVEコインは、ブロックチェーン技術の信頼性と、法的な安定性の両立を目指して設計されています。<br /> 開発基盤や運用体制、法令対応まで、多面的に“安心して使える仕組み”を構築しています。
                </div>
                <div className="grid grid-cols-2 gap-[18px] sm:pt-[50px] pt-8">
                    <div className="border border-[#EFECFF] rounded-[20px] pt-[35px] px-6 leading-[1.3] pb-4 sm:min-h-[290px] [box-shadow:0_0_18px_0_rgba(0,_0,_0,_0.06)]">
                        <p className="flex justify-center items-center mb-5 sm:mb-[30px]"><img src="/assets/images/ic-security-01.png" alt="" /></p>
                        <p className="sm:text-[32px] text-[18px] font-medium">DIVER Chainを採用</p>
                        <p className="sm:text-[18px] text-[14px] mt-2.5">
                            （Ethereum互換／低手数料／高速処理）
                        </p>
                    </div>
                    <div className="border border-[#EFECFF] rounded-[20px] pt-[35px] px-6 leading-[1.3] pb-4 sm:min-h-[290px] [box-shadow:0_0_18px_0_rgba(0,_0,_0,_0.06)]">
                        <p className="flex justify-center items-center mb-5 sm:mb-[30px]"><img src="/assets/images/ic-security-02.png" alt="" /></p>
                        <p className="sm:text-[32px] text-[18px] font-medium">DRC-20トークン仕様による標準化と互換性</p>
                    </div>
                    <div className="border border-[#EFECFF] rounded-[20px] pt-[35px] px-6 leading-[1.3] pb-4 sm:min-h-[290px] [box-shadow:0_0_18px_0_rgba(0,_0,_0,_0.06)]">
                        <p className="flex justify-center items-center mb-5 sm:mb-[30px]"><img src="/assets/images/ic-security-03.png" alt="" /></p>
                        <p className="sm:text-[32px] text-[18px] font-medium">スマートコントラクトは第三者監査済</p>
                    </div>
                    <div className="border border-[#EFECFF] rounded-[20px] pt-[35px] px-6 leading-[1.3] pb-4 sm:min-h-[290px] [box-shadow:0_0_18px_0_rgba(0,_0,_0,_0.06)]">
                        <p className="flex justify-center items-center mb-5 sm:mb-[30px]"><img src="/assets/images/ic-security-04.png" alt="" /></p>
                        <p className="sm:text-[32px] text-[18px] font-medium">複雑なアクセス制御により不正操作をブロック</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Security;
