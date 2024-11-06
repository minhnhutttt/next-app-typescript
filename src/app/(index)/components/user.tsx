"use client";
import { ReactNode } from "react";
import Title from "@/components/title";
import Button from "@/components/button";
import useScrollAnimations from "@/hooks/useScrollAnimations";

interface ListItemProps {
  bgColor: string;
  imageSrc: string;
  text: ReactNode;
}

const ListItem = ({ bgColor, imageSrc, text }: ListItemProps) => {
  return (
    <li 
    style={{ backgroundColor: bgColor }}
    className="fade-up flex items-center max-md:flex-col last:mb-0 md:mb-[55px] mb-[25px] md:py-[38px] py-4 px-4 md:px-[46px] md:rounded-[12px] rounded-[6px]">
      <img src={imageSrc} className="size-[120px] drop-shadow-md" />
      <p className="md:text-[18px] text-[14px] md:ml-6 ml-0 flex-1 mt-3 md:mt-0">{text}</p>
    </li>
  );
};

interface ColumnProps {
  title: string;
  items: { bgColor:string; imageSrc: string; text: ReactNode }[];
}

const Column = ({ title, items }: ColumnProps) => {
  return (
    <div className="md:w-1/2 w-full md:px-10 md:py-8 p-[20px]">
      <h2 className="fade-up md:text-[64px] text-[30px] font-medium mb-[20px] text-[#fff] max-md:text-center">
        {title}
      </h2>
      <ul>
        {items.map((item, index) => (
          <ListItem key={index} bgColor={item.bgColor} imageSrc={item.imageSrc} text={item.text} />
        ))}
      </ul>
    </div>
  );
};

const leftItems = [
  {
    imageSrc: "/assets/images/user-img1.png",
    bgColor :"#FFEFFE",
    text: (
      <>
        OPEN
        Mapで初めて知ったカフェやお店がたくさんあって、週末ごとに新しい場所を開拓するのが楽しくなりました。
      </>
    ),
  },
  {
    imageSrc: "/assets/images/user-img2.png",
    bgColor :"#FFFEEA",
    text: (
      <>
        旅行中に現地限定のNFTをいくつかゲットできて、本当にいい思い出になりました。
      </>
    ),
  },
  {
    imageSrc: "/assets/images/user-img3.png",
    bgColor :"#DEFFFD",
    text: (
      <>
        OPEN
        Mapを使い始めてから、普段目にしない近場のイベントやキャンペーンの情報を見つけられるようになりました。こんなに多くの情報を見逃していたんだって感じです。
      </>
    ),
  },
];
const rightItems = [
  {
    imageSrc: "/assets/images/user-img4.png",
    bgColor :"#DEFFFD",
    text: (
      <>
        NFTとか全然分からなかったのですが、操作がすごく簡単で、必要な情報や特典をすぐに見つけられるのが気に入っています。
      </>
    ),
  },
  {
    imageSrc: "/assets/images/user-img5.png",
    bgColor :"#FFFEEA",
    text: (
      <>
        子どもの頃から住んでいる地域なのに、OPEN
        Mapで初めて知るイベントや特典があって驚きました。地元の良さを再発見するきっかけになり、改めてこの街に誇りを持つようになりました。
      </>
    ),
  },
  {
    imageSrc: "/assets/images/user-img6.png",
    bgColor :"#FFEFFE",
    text: (
      <>
        OPEN
        MapのNFTは無料で送れるので、友人にNFTクーポンをプレゼントしたら、とても喜んでもらえました。
      </>
    ),
  },
];
const User = () => {
  const ref = useScrollAnimations();

  return (
    <section ref={ref} className="bg-[#73E3DC]">
    <div
      className="md:py-[30px] py-[15px] bg-[#00AAFF] md:rounded-t-[80px] rounded-t-[40px] md:px-[30px] px-[15px]"
    >
      <div className="w-full mx-auto border-dashed border-[#fff] border-[4px] md:rounded-t-[60px] rounded-t-[30px]">
        <div className="w-full max-w-[1279px] mx-auto">
          <div className="border-b">
            <div className="max-w-[1360px] w-full mx-auto md:flex flex-row justify-between">
              <Column title="ユーザーレビュー" items={leftItems} />
              <Column title="" items={rightItems} />
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default User;
