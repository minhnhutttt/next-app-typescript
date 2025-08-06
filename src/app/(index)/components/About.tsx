"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";
import { ReactNode } from "react";

const AboutItem = ({image, title, subtitle, children, color} : {image: string, title: ReactNode, subtitle: ReactNode, children: ReactNode, color: string}) => (
    <div className="fade-up rounded-[30px] overflow-hidden [box-shadow:0_4px_30px_0_rgba(0,_0,_0,_0.25)]">
        <div className="flex items-center relative px-5 py-[25px] gap-4">
            <div className="absolute inset-0 opacity-20 pointer-events-none"  style={{ backgroundColor: color}}></div>
            <span><img className="[box-shadow:0_0_30px_0_rgba(0,_0,_0,_0.10)] rounded-full max-sm:w-[120px]" src={image} alt="" /></span>
            <div className="">
                <p className="sm:text-[32px] text-[18px] font-bold mb-1" style={{color: color}}>{title}</p>
                <p className="sm:text-[28px] text-[16px] font-bold">{subtitle}</p>
            </div>
        </div>
        <div className="sm:text-[28px] text-[16px] px-5 py-[30px]">
            {children}
        </div>
    </div>
)

const About = () => {
  const ref = useScrollAnimations();

  return (
    <section
      ref={ref}
      id="about"
      className="relative overflow-hidden sm:px-[30px] px-4 pb-20 sm:pb-[100px]"
    >
        <div className="relative">
            <h3 className="fade-up sm:text-[48px] text-[28px] font-bold text-center sm:border-b-[15px] border-b-[8px] border-[#3A86FF]">FAVEコインとは？</h3>
            <div className="relative pt-5 sm:pt-8 px-[15px] bg-white sm:pb-[98px] pb-12">
                <div className="fade-up absolute bg-[url(/assets/images/bg-about.png)] bg-cover inset-0 pointer-events-none"></div>
                <div className="fade-up relative">
                    <p className="underline sm:underline-offset-8 underline-offset-4 decoration-[3px] decoration-[#F3D321] py-5 px-0.5 sm:text-[36px] text-[22px] leading-relaxed font-bold sm:leading-[1.35]">ファンの応援をサービスと権利に変える</p>
                    <p className="sm:text-[32px] text-[18px] mt-2">
                        FAVEコインはファンとFAVERの関係性を次の段階へ進化させるために生まれたユーティリティトークンです。 <br />
                        <br />
                        ファンの投げ銭がFAVERのVIPサービスを開放を支援し、ファン自身もVIPサービス・コンテンツを受け取れる新しい推し活の仕組みをブロックチェーンで実現します。
                    </p>
                </div>
            </div>
        </div>
        <div className="pt-5">
            <p className="fade-up text-center sm:text-[36px] text-[22px] font-bold">FAVEの3つ特徴</p>
            <div className="mt-6 space-y-[30px]">
                <AboutItem
                    image="/assets/images/ic-access.png"
                    title="サービスアクセス権"
                    subtitle={<>FAVERのVIPサービス<br />アンロック</>}
                    color="#FF46DC"
                >
                    FAVERがFAVEコインを運営ウォレットに送付することで、 VIPコイン発行、FAVER DIGITAL GOODSサービスなどの VIP機能をアンロックできます。
                </AboutItem>
                <AboutItem
                    image="/assets/images/ic-right.png"
                    title="ファンサポート機能"
                    subtitle={<>推しクリエイターへの<br />直接支援</>}
                    color="#3A86FF"
                >
                    ファンはFAVEコインを購入してFAVERに投げ銭することで、FAVERのVIPサービスアンロックを直接支援できます。<br />ファン自身もVIPサービスの恩恵を受け取れる双方向の価値交換を実現します。
                </AboutItem>
                <AboutItem
                    image="/assets/images/ic-proof.png"
                    title="コミュニティ証明"
                    subtitle={<>“応援者”としての<br />デジタル証明</>}
                    color="#A90BFE"
                >
                    FAVEコインでのFAVER支援は、ファンの応援意思の証明です。 投げ銭を通じてエコシステム内での一体感や つながりを実感できます。
                </AboutItem>
            </div>
        </div>
    </section>
  );
};

export default About;
