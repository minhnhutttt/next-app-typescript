"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import SectionTitle from "../../common/sectionTitle";
import { ReactNode } from "react";

type UseItemPropsType = {
    image: string;
    title: string;
    children: ReactNode;
    color?: string;
};

function UseItem({ image, title, children, color }: UseItemPropsType) {
  const animateUpRefs = useScrollAnimation("fadeUp");
  return (
    <div  ref={animateUpRefs} className="opacity-0 w-full md:w-[45%] max-w-[380px] md:max-w-[537px] aspect-square rounded-full" style={{backgroundColor: color}}>
    <div className="xl:max-w-[350px] max-w-[75%] md:max-w-[28vw] w-full h-full mx-auto flex items-center justify-center flex-col">
        <figure className="h-[50px] md:h-[9.722vw] min-[1440px]:h-[140px]">
            <img className="max-h-full" src={image} alt={title} />
        </figure>
        <h5 className="text-center md:text-[20px] lg:text-[24px] text-[18px] font-bold mt-5 lg:mt-8">{title}</h5>
        <p className="lg:text-[18px] text-[13px] font-medium mt-2 lg:mt-4 leading-relaxed">{children}</p>
    </div>
</div>
  );
}
export default function Use() {
  const animateRefs = useScrollAnimation("zoom");
  const animateRightRefs = useScrollAnimation("slideRight");
  return (
    <section className="px-5 py-16">
        <div className="w-full max-w-[420px] md:max-w-[1195px] mx-auto">
            <SectionTitle subTitle="現物資産×NFT">
            RWAタグでできること
            </SectionTitle>
            <div className="flex justify-center mt-7 md:mt-10">
                <UseItem image="/images/use-01.png" title="権利を譲渡する" color="#B7E7FF">
                    シーズンパス券などの所有権や譲渡履歴を明確に記録できるため、盗難や偽造からの保護にも効果的です。
                </UseItem>
            </div>
            <div className="flex max-md:flex-wrap justify-between md:mt-[-4.444vw] min-[1440px]:mt-[-64px] mt-6 max-md:space-y-6">
                <UseItem image="/images/use-02.png" title="所有権を証明する" color="#BADFFF">
                    現物資産の所有権を簡単かつ確実に証明することが可能です。
                </UseItem>
                <UseItem image="/images/use-03.png" title="管理を記録する" color="#E0F3FF">
                機器に関連する情報(機器ID,種類,購入日,最終メンテナンス日等)をブロックチェーンに記録することで、その情報の真正性、不変性、および透明性を保証します。
                </UseItem>
            </div>
        </div>
    </section>
  );
}
