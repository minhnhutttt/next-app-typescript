"use client";
import UnderlineText from "@/components/underlineText";
import useScrollAnimations from "@/hooks/useScrollAnimations";
import { ReactNode } from "react";

const Item = ({title, text}: {title: string, text: string}) => (
  <div className=" fade-up flex w-full md:w-1/2 mb-2.5">
    <div className="text-[14px] fot-bold">❌</div>
    <div className="flex-1">
      <p className="text-[14px] font-bold">{title}</p>
      <p className="text-[12px] font-medium">{text}</p>
    </div>
  </div>
)

const Card  = ({rect, children, ripple = 0}: {rect: string, children: ReactNode,  ripple?: number}) => (
  <div className={`hexagon flex items-center bg-white justify-center font-black absolute rounded-[15px] border min-[860px]:text-[19px] text-[2.209vw] px-[1.395vw] min-[860px]:px-3 h-[3.721vw] min-[860px]:h-8 z-10 ${rect}`} style={{ '--ripple-factor': ripple } as React.CSSProperties}>
    {children}
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
            <div data-scroll className="relative flex justify-center">
                <Card ripple={0} rect="left-[48%] top-[-1%] text-[#DF3939]/[0.8] border-[#E66161]">不動産仲介業</Card>
                <Card ripple={5} rect="left-[34%] top-[4%] text-[#FF6C1D]/[0.8] border-[#FF6C1D]">美容院・理髪店</Card>
                <Card ripple={5} rect="left-[55%] top-[4%] text-[#DC9004]/[0.8] border-[#DC9004]">歯科医院</Card>
                <Card ripple={12} rect="left-[37%] top-[9%] text-[#DC9004]/[0.8] border-[#DC9004]">整骨院・接骨院</Card>
                <Card ripple={10} rect="left-[26%] top-[11%] text-[#9AA000]/[0.8] border-[#9AA000]">学習塾</Card>
                <Card ripple={15} rect="left-[42%] top-[14%] text-[#289D34]/[0.8] border-[#289D34]">飲食店</Card>
                <Card ripple={15} rect="left-[53%] top-[14%] text-[#FF6C1D]/[0.8] border-[#FF6C1D]">エステサロン</Card>
                <Card ripple={18} rect="left-[20%] top-[19%] text-[#269E78]/[0.8] border-[#269E78]">法律事務所</Card>
                <Card ripple={20} rect="left-[36%] top-[20%] text-[#269E78]/[0.8] border-[#269E78]">税理士事務所</Card>
                <Card ripple={20} rect="left-[54%] top-[20%] text-[#0C749D]/[0.8] border-[#0C749D]">自動車販売店</Card>
                <Card ripple={25} rect="left-[36%] top-[25.5%] text-[#1B41B3]/[0.7] border-[#0C309D]">家電量販店</Card>
                <Card ripple={25} rect="left-[52%] top-[25.5%] text-[#1B41B3]/[0.7] border-[#0C309D]">ホテル・旅館</Card>
                <Card ripple={30} rect="left-[9%] top-[31%] text-[#8E6CEB] border-[#8E6CEB]">フィットネスクラブ</Card>
                <Card ripple={30} rect="left-[35%] top-[31%] text-[#0DA40F]/[0.8] border-[#0DA40F]">工務店</Card>
                <Card ripple={30} rect="left-[47%] top-[31%] text-[#DC9004]/[0.8] border-[#DC9004]">内科・小児科クリニック</Card>
                <Card ripple={33} rect="left-[76%] top-[34%] text-[#686B6C]/[0.8] border-[#686B6C]">ペットショップ</Card>
                <Card ripple={35} rect="left-[14%] top-[35.8%] text-[#4E32DB]/[0.8] border-[#694DF2]">結婚式場</Card>
                <Card ripple={35} rect="left-[28%] top-[35.8%] text-[#694DF2]/[0.8] border-[#4E32DB]">葬儀社</Card>
                <Card ripple={35} rect="left-[40%] top-[35.8%] text-[#9AA000]/[0.8] border-[#9AA000]">塾・予備校</Card>
                <Card ripple={35} rect="left-[56%] top-[35.8%] text-[#0C749D]/[0.8] border-[#0C749D]">中古車販売店</Card>
                <Card ripple={38} rect="left-[34%] top-[40.7%] text-[#1B41B3]/[0.8] border-[#0C309D]">家具・インテリアショップ</Card>
                <Card ripple={43} rect="left-[10%] top-[43%] text-[#1B41B3]/[0.8] border-[#0C309D]">アパレルショップ</Card>
                <Card ripple={45} rect="left-[46%] top-[46%] text-[#0DA40F]/[0.8] border-[#0DA40F]">リフォーム会社</Card>
                <Card ripple={48} rect="left-[67%] top-[44%] text-[#BA1E3D]/[0.9] border-[#DF2C35]">写真スタジオ</Card>
                <Card ripple={50} rect="left-[21%] top-[51.5%] text-[#952269]/[0.8] border-[#952269]">旅行代理店</Card>
                <Card ripple={50} rect="left-[37%] top-[51.5%] text-[#AB5D6C]/[0.9] border-[#AB5D6C]">引越し業者</Card>
                <Card ripple={50} rect="left-[53%] top-[51.5%] text-[#A71633]/[0.8] border-[#A71633]">保険代理店</Card>
                <Card ripple={50} rect="left-[70%] top-[51.5%] text-[#DF3939]/[0.8] border-[#E66161]">不動産管理会社</Card>
                <Card ripple={55} rect="left-[5%] top-[57%] text-[#FF6C1D]/[0.8] border-[#FF6C1D]">ネイルサロン</Card>
                <Card ripple={55} rect="left-[23%] top-[57%] text-[#FF6C1D]/[0.8] border-[#FF6C1D]">マッサージ店</Card>
                <Card ripple={55} rect="left-[41%] top-[57%] text-[#CA70DB] border-[#D853F0]">ヨガスタジオ</Card>
                <Card ripple={55} rect="left-[59%] top-[57%] text-[#CA70DB] border-[#D853F0]">ゴルフ場</Card>
                <Card ripple={58} rect="left-[72%] top-[59.5%] text-[#CA70DB] border-[#D853F0]">スキー場</Card>
                <Card ripple={60} rect="left-[20%] top-[62%] text-[#9AA000]/[0.8] border-[#9AA000]">英会話教室</Card>
                <Card ripple={60} rect="left-[36%] top-[62%] text-[#0C749D]/[0.8] border-[#0C749D]">自動車整備工場</Card>
                <Card ripple={65} rect="left-[30%] top-[67%] text-[#DC9004]/[0.8] border-[#DC9004]">薬局</Card>
                <Card ripple={65} rect="left-[39%] top-[67%] text-[#DC9004]/[0.8] border-[#DC9004]">眼科</Card>
                <Card ripple={65} rect="left-[48%] top-[67%] text-[#DC9004]/[0.8] border-[#DC9004]">皮膚科</Card>
                <Card ripple={70} rect="left-[41%] top-[72%] text-[#1B41B3]/[0.7] border-[#0C309D]">花屋</Card>
                <Card ripple={70} rect="left-[50%] top-[72%] text-[#1B41B3]/[0.7] border-[#0C309D]">楽器店</Card>
                <Card ripple={70} rect="left-[61%] top-[72%] text-[#1B41B3]/[0.7] border-[#0C309D]">スポーツ用品店</Card>
                <Card ripple={75} rect="left-[26%] top-[77%] text-[#9AA000]/[0.8] border-[#9AA000]">パソコン教室</Card>
                <Card ripple={75} rect="left-[45%] top-[77%] text-[#DC9004]/[0.8] border-[#DC9004]">介護サービス</Card>
                <Card ripple={75} rect="left-[64%] top-[77%] text-[#BA1E3D]/[0.9] border-[#DF2C35]">貸衣装店</Card>
                <Card ripple={80} rect="left-[38%] top-[83%] text-[#686B6C]/[0.8] border-[#686B6C]">ペットサロン</Card>
                <Card ripple={80} rect="left-[30%] top-[89%] text-[#1B41B3]/[0.8] border-[#0C309D]">靴屋</Card>
                <Card ripple={80} rect="left-[53%] top-[88%] text-[#BA1E3D]/[0.9] border-[#DF2C35]">クリーニング店</Card>
                <Card ripple={85} rect="left-[36%] top-[94%] text-[#1B41B3]/[0.8] border-[#0C309D]">時計・宝飾店</Card>
                <Card ripple={85} rect="left-[55%] top-[94%] text-[#1B41B3]/[0.8] border-[#0C309D]">文房具店</Card>
                <Card ripple={90} rect="left-[48%] top-[100%] text-[#0C749D]/[0.8] border-[#0C749D]">カーディーラー</Card>
                <figure className="fade-up max-[860px]:w-[92.209vw]">
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
