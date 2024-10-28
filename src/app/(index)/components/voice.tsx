"use client";
import { ReactNode } from "react";
import Title from "@/components/title";
import Button from "@/components/button";

interface ListItemProps {
  imageSrc: string;
  text: string;
}

const ListItem = ({ imageSrc, text }: ListItemProps) => {
  return (
    <li className="py-2 flex items-center pb-[20px] last:mb-0 md:mb-[60px] mb-[30px] last:border-b-0 border-b border-dotted border-[rgba(0,0,0,0.3)]">
      <img src={imageSrc} alt={text} className="size-[120px] drop-shadow-md" />
      <p className="md:text-[16px] text-[14px] ml-4 flex-1">{text}</p>
    </li>
  );
};

interface ColumnProps {
  title: string;
  items: { imageSrc: string; text: string }[];
}

const Column = ({ title, items }: ColumnProps) => {
  return (
    <div className="md:w-1/2 w-full md:px-10 md:py-8 p-[20px] md:last:border-l max-sm:last:border-t border-dashed border-[#73E3DC]">
      <h2 className="md:text-[24px] text-[18px] font-medium mb-[20px]">{title}</h2>
      <ul>
        {items.map((item, index) => (
          <ListItem key={index} imageSrc={item.imageSrc} text={item.text} />
        ))}
      </ul>
    </div>
  );
};

const Voice = () => {
  const leftItems = [
    { imageSrc: "/assets/images/staff1.svg", text: "福利厚生サービスを探すのがとても簡単になりました！地図を開いて近くのサービスをすぐに見つけられるので、ランチタイムや仕事帰りに利用できて便利です。" },
    { imageSrc: "/assets/images/staff2.svg", text: "今までは福利厚生をあまり使っていなかったのですが、福利厚生Questのおかげで、自分が受けられるサービスが一目でわかり、活用する機会が増えました。会社の福利厚生がこんなに充実しているなんて、驚きです！" },
    { imageSrc: "/assets/images/staff3.svg", text: "近くのジムやカフェの割引サービスを気軽に利用できるようになり、日常生活がさらに豊かになりました。仕事とプライベートのバランスも取りやすくなり、毎日の満足度が上がっています！" },
  ];
  const rightItems = [
    { imageSrc: "/assets/images/company1.svg", text: "福利厚生クエストを導入してから、従業員からの福利厚生に関する問い合わせが減り、利用率が飛躍的に向上しました。社員が積極的にサービスを活用してくれるようになり、モチベーションが高まっているのを感じます。" },
    { imageSrc: "/assets/images/company2.svg", text: "福利厚生Questは、管理が簡単で、導入コストも手頃です。従業員が自らサービスを見つけて利用してくれるので、社内でのサポート負担も減りました。これまで以上に福利厚生制度をうまく運用できています。" },
    { imageSrc: "/assets/images/company3.svg", text: "求職者に福利厚生制度を説明するとき、福利厚生Questの導入が非常に大きなアピールポイントになっています。従業員の定着率も向上し、結果的に会社全体の雰囲気が良くなりました。" },
  ];

  return (
    <section className="md:py-[160px] py-[80px]">
      <div className="w-full max-w-[1440px] mx-auto">
       <Title
        text_ja="ユーザーの声"
        text_en="Users' Voices"
        alignment="center"
      />
      <div className="border-t border-[#73E3DC] border-b md:mt-[37px] mt-[18px]">
        <div className="max-w-[1360px] w-full mx-auto md:flex flex-row justify-between">
        <Column title="従業員の声" items={leftItems} />
        <Column title="企業担当者の声" items={rightItems} />
        </div>
      </div>
      <div className="md:mt-[44px] mt-[18px] max-w-[671px] md:w-full w-[90%] mx-auto border-dashed border border-[#73E3DC] bg-white md:px-[40px] px-[20px] md:py-[30px] py-[15px] rounded-[20px]">
        <h3 className="md:text-[22px] text-[18px] text-center font-bold border-b border-solid border-[#73E3DC] pb-[10px]">社員が福利厚生を選ぶ時代へ！</h3>
        <p className="md:text-[18px] text-[14px] left-5 md:py-[24px] py-[10px]">福利厚生クエストを導入し、社員の満足度とモチベーションを向上させ、企業全体の生産性とパフォーマンスを高めましょう！</p>
      <Button large link="#">LINEでお問い合わせ</Button>
      </div>
      </div>
    </section>
  );
};

export default Voice;
