"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import PointItem from "./pointItem";
import type { PointItemPropsType } from "./pointItem";

const pointData: PointItemPropsType[] = [
  {
    point: "01",
    subTitle: "データが重くなるほどサクサクに",
    title: "読み込み速度が早い！",
    content: (
      <>
        世界基準の読み込み速度 Instagram、Netflix 等の世界の大企業の
        ホームページに採用されているライブラリ「React」で制作します。
      </>
    ),
  },
  {
    point: "02",
    subTitle: "スマホで直感的な操作が可能",
    title: "充実した管理画面",
    content: (
      <>
        店舗のオフィシャルサイト制作運営に特化した便利な機能がスマホで簡単に管理できます。
      </>
    ),
  },
  {
    point: "03",
    subTitle: "必要機能を盛り込みます",
    title: "必要機能の追加作成",
    content: (
      <>
        欲しい機能をカスタマイズできます。
        <br />
        お気軽にご相談下さい
      </>
    ),
  },
  {
    point: "04",
    subTitle: "忙しいオーナー様へ即対応！",
    title: "読み込み速度が早い！",
    content: (
      <>
        店舗オーナー様やシステムエンジニアの意見を
        <br className="max-md:hidden" />
        盛り込んで 随時機能はアップデートされます。
      </>
    ),
  },
];

export default function Points() {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <div className="px-5 bg-[linear-gradient(180deg,_#F4F4F4_0%,_rgba(244,_244,_244,_0.00)_100%)] py-[74px]">
      <div className="w-full lg:max-w-[1200px] md:max-w-[595px] max-w-[400px] mx-auto">
        <h3 ref={animateRefs} className="text-center lg:text-[80px] md:text-[50px] text-[30px] font-bold leading-none whitespace-nowrap">
          <p>
            <span className="text-[#112E77]">メンエスバズーカ</span>
            <span className="lg:text-[64px] md:text-[40px] text-[20px]">
              が
            </span>
          </p>
          <p className="">
            <span>選ばれる</span>
            <span className="lg:text-[125px] md:text-[80px] text-[36px] text-[#0F367C] font-hiragino">
              4
            </span>
            <span className="lg:text-[64px] md:text-[40px] text-[20px]">
              つの
            </span>
            <span className="text-[#112E77]">ポイント</span>
          </p>
        </h3>
        <div className="grid lg:grid-cols-2 mt-10 md:mt-[74px] gap-x-2.5 gap-y-4">
          {pointData.map((pointData, index) => (
            <PointItem key={index} {...pointData}></PointItem>
          ))}
        </div>
      </div>
    </div>
  );
}
