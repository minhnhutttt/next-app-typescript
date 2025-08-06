"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const Services = () => {
  const ref = useScrollAnimations();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden sm:px-[30px] px-4 pb-20 sm:pb-[100px]"
    >
        <div className="relative">
            <h3 className="fade-up sm:text-[48px] text-[28px] font-bold text-center sm:border-b-[15px] border-b-[8px] border-[#3A86FF] pb-2">
                <p>主要なVIPサービス</p>
                <p className="sm:text-[32px] text-[18px] font-normal">FAVER DIGITAL GOODS </p>
            </h3>
            <div className="pt-8 sm:space-y-11 space-y-6">
                <div className="fade-up flex gap-4">
                    <p className="mt-2"><img className="max-md:w-12" src="/assets/images/ic-crown.png" alt="" /></p>
                    <div className="flex-1">
                        <p className="sm:text-[32px] text-[18px] font-bold border-b border-dotted border-black pb-2.5">
                            多様なデジタル商品をVIPサービスとして提供
                        </p>
                        <p className="sm:text-[30px] text-[16px] py-2.5">
                            🎵 AI音声・リアルボイスコンテンツ<br /> 
                            🪙 コレクションコイン  <br /> 
                            🎨 限定デジタルアート<br /> 
                            📱 その他クリエイター独自商品
                        </p>
                    </div>
                </div>
                <div className="fade-up flex gap-4">
                    <p className="mt-2"><img className="max-md:w-12" src="/assets/images/ic-coin.png" alt="" /></p>
                    <div className="flex-1">
                        <p className="sm:text-[32px] text-[18px] font-bold border-b border-dotted border-black pb-2.5">
                            DWUベーストークン発行サービス<br />
                            <span className="sm:text-[27px] text-[16px] font-normal">直感的な価格表示でのVIPコイン発行</span>
                        </p>
                        <p className="sm:text-[30px] text-[16px] py-2.5">
                            ドルとイコールレートでの取引だからファンにとってもFAVERにとっても優しい
                        </p>
                    </div>
                </div>
                <div className="fade-up flex gap-4">
                    <p className="mt-2"><img className="max-md:w-12" src="/assets/images/ic-diamond.png" alt="" /></p>
                    <div className="flex-1">
                        <p className="sm:text-[32px] text-[18px] font-bold border-b border-dotted border-black pb-2.5">
                            その他のVIPサービス<br />
                            <span className="sm:text-[27px] text-[16px] font-normal leading-[1.5] inline-block">多層アンロック管理でファンに求められるVIPサービスを独自に解放</span>
                        </p>
                        <ul className="sm:text-[32px] text-[18px] py-6 list-disc pl-6 sm:pl-12 sm:space-y-7 space-y-4">
                            <li>FAVERが個別商品をサービスごとにアンロック可能</li>
                            <li>階層的なVIPサービス権限管理</li>
                            <li>段階的なサービス利用権の開放</li>
                            <li>コイン送付量に応じたアクセスレベル調整</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Services;
