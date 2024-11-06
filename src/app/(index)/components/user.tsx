"use client";
import { ReactNode } from "react";
import useScrollAnimations from "@/hooks/useScrollAnimations";


interface ColumnProps {
  items: { bgColor:string; imageSrc: string; text: ReactNode }[];
}

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


const Column = ({ items }: ColumnProps) => {
  return (
    <div className="w-full">
      <ul>
        {items.map((item, index) => (
          <li key={index}
    style={{ backgroundColor: item.bgColor }}
    className="fade-up flex items-center max-md:flex-col last:mb-0 md:min-h-[194px] md:mb-[55px] mb-[25px] py-4 px-4 md:px-7 xl:px-[46px] md:rounded-[12px] rounded-[6px]">
      <img src={item.imageSrc} className="size-[80px] xl:size-[120px] drop-shadow-md" />
      <p className="md:text-[18px] text-[14px] md:ml-6 ml-0 flex-1 mt-3 md:mt-0">{item.text}</p>
    </li>
        ))}
      </ul>
    </div>
  );
};


const User = () => {
  const ref = useScrollAnimations();

  return (
    <section ref={ref} className="bg-[#73E3DC]">
    <div
      className="md:py-[30px] py-[15px] bg-[#00AAFF] md:rounded-t-[80px] rounded-t-[40px] md:px-[30px] px-[15px]"
    >
      <div className="w-full mx-auto border-dashed border-[#fff] border-[4px] md:rounded-t-[60px] rounded-t-[30px] pb-10 px-5">
        <div className="w-full max-w-[1280px] mx-auto relative">
        <p className="absolute top-[-50px] md:top-[-70px]">
          <img className="max-md:w-[170px]" src="/assets/images/user-bubble.png" alt="" />
        </p>
          <div className="">
            <div className="max-w-[1360px] w-full mx-auto flex flex-row max-md:flex-col justify-between relative xl:gap-[95px] md:gap-16 gap-[25px]">
              <div className="w-full md:w-1/2">
                <h2 className="fade-up md:text-[64px] text-[30px] mb-[20px] text-[#fff] max-md:text-center font-bold pt-10 md:pt-12 md:pb-8">
                ユーザーレビュー
                </h2>
                <Column items={leftItems} />
              </div>
              <div className="w-full md:w-1/2 md:pt-11">
                <Column items={rightItems} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default User;
