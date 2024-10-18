"use client";
import UnderlineText from "@/components/underlineText";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const Item = ({title, text}: {title: string, text: string}) => (
  <div className="fade-up flex w-full md:w-1/2 mb-2.5">
    <div className="text-[14px] fot-bold">❌</div>
    <div className="flex-1">
      <p className="text-[14px] font-bold">{title}</p>
      <p className="text-[12px] font-medium">{text}</p>
    </div>
  </div>
)

const Supports = () => {
  const ref = useScrollAnimations();

  return (
    <section ref={ref} className="relative px-5 md:pt-[170px] pt-[100px] md:pb-[140px] pb-[80px] border-b border-[#838383]">
      <div className="w-full max-w-[793px] mx-auto">
          <div className="flex justify-center max-lg:px-5">
            <div>
                <h3 className="fade-up md:text-[42px] text-[22px] font-black leading-[1.3] relative tracking-[-0.018em]">
                多業界対応。もちろん<UnderlineText>あなたの業界も</UnderlineText>
                </h3>
                <p className="fade-up text-[16px] md:text-[23px] font-bold mt-2">
                クオリティアップに業界特化が必要なのは人間だけ。
                </p>
            </div>
          </div>
          <div className="flex justify-center mt-10 md:mt-12">
            <div className="relative md:text-[27px] text-[16px] leading-[1.3] whitespace-nowrap">
                <figure className="fade-up max-lg:w-[77.441vw]">
                    <img src="/assets/images/globular.png" alt="" />
                </figure>
            </div>
          </div>
          <div className="md:mt-24 mt-16">
            <p className="text-center md:text-[23px] text-[17px] font-bold">※当然ですが念のため。禁止カテゴリー</p>
            <div className="flex flex-wrap w-full md:max-w-[550px] max-w-[350px] mx-auto mt-5 md:mt-8">
              <Item title="違法なモノやサービス" text="麻薬、盗品、偽造品、無許可の薬" />
              <Item title="ギャンブルと依存性の高いもの" text="違法カジノ、非公認ギャンブル、危険ドラッグ" />
              <Item title="大人向けの過激なコンテンツ" text="ポルノ、風俗店、アダルトグッズ" />
              <Item title="危険な製品やサービス" text="銃器、爆発物、違法な車両改造" />
              <Item title="詐欺や悪質商法" text="霊感商法、ネズミ講、誇大広告" />
              <Item title="他人の権利を侵害するもの" text="個人情報売買、著作権侵害品、盗撮器具" />
            </div>
          </div>
      </div>
    </section>
  );
};

export default Supports;
