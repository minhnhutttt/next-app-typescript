"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import SectionTitle from "../../common/sectionTitle";
import { ReactNode } from "react";

type FeatureCardPropsType = {
    image: string;
    title: string;
    children: ReactNode;
    color?: string;
};
function FeatureCard({ image, title, children, color }: FeatureCardPropsType) {
  const animateUpRefs = useScrollAnimation("fadeUp");
  return (
    <div ref={animateUpRefs} className="opacity-0 font-bold md:max-w-[420px] max-w-[380px] lg:rounded-[60px] rounded-[30px] md:border-[5px] border-[3px] p-3 lg:p-5" style={{borderColor: color}}>
        <figure>
            <img className="lg:rounded-[40px] rounded-[20px]" src={image} alt="" />
        </figure>
        <div className="pt-5 md:pt-8 px-2 lg:px-4 pb-2">
            <h5 className="text-center md:text-[18px] text-[16px] font-bold mb-3">{title}</h5>
            <p className="md:text-[16px] text-[14px]">{children}</p>
        </div>
    </div>
  );
}

export default function Feature() {
  const animateRefs = useScrollAnimation("zoom");
  const animateRightRefs = useScrollAnimation("slideRight");
  return (
    <section className="bg-[#F7F7F7] px-5 pt-10 pb-14 md:pt-16 md:pb-20">
        <div className="w-full max-w-[420px] md:max-w-[1320px] mx-auto">
            <SectionTitle subTitle="現実世界とデジタル世界を橋渡し">
                RWAタグの特徴
            </SectionTitle>
            <div className="grid md:grid-cols-3 justify-center gap-5 lg:gap-[30px] mt-6">
                <FeatureCard title="フィジカルとデジタルの融合" image="/images/feature-01.jpg" color="#FEBB08">
                    NFTタグとRWAタグの連携によって、物理的なアイテムとデジタルアイテムのシームレスな統合が実現！展示会やイベントでは、タッチするだけでアートの情報やストーリーを共有できます。
                </FeatureCard>
                <FeatureCard title="簡単・シンプル" image="/images/feature-02.jpg" color="#EA4335">
                    高速通信と直感的な操作でNFTをRWAタグにセット。ワンタッチでNFTを転送できます。
                </FeatureCard>
                <FeatureCard title="安全・安心" image="/images/feature-03.jpg" color="#34A853">
                    RWAタグは暗号化通信に対応しており、NFTのブロックチェーン技術と組み合わせることで、より強固なセキュリティと安全性を提供します。
                </FeatureCard>
            </div>
        </div>
    </section>
  );
}
