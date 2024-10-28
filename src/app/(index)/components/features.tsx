"use client";
import Title from "@/components/title";
import Text from "@/components/text";

const features = [
  {
    img: "/assets/images/map.svg",
    text: (<>GPSによる近隣の<br />サービス表示</>),
  },
  {
    img: "/assets/images/ticket.svg",
    text: (
        <>
福利厚生チケットの<br />簡単取得
</>
    ),
  },
  {
    img: "/assets/images/ntf.svg",
    text: "安心のNFT認証",
  },
  {
    img: "/assets/images/phone.svg",
    text: (
        <>
        年間パスポートNFTによ<br />るセキュアなアクセス
        </>
    ),
  },
];

const Features = () => {
  return (
    <section className="md:pt-[155px] pt-[100px]">
      <div className="w-full max-w-[1440px] mx-auto flex md:items-end max-md:flex-col">
        <div className="w-auto px-5 md:px-10">
          <Title
            text_ja="福利厚生クエストの特徴"
            text_en="Quest Features"
            alignment="left"
          />
        </div>
        <div className="px-5 max-md:mt-5 md:px-3">
          <Text>
          福利厚生クエストは、従業員が近くで利用可能な福利厚生サービスを瞬時に見つけ、簡単にアクセスできる地図プラットフォームです。
          </Text>
        </div>
      </div>

      <ul className="grid md:grid-cols-4 grid-cols-2 border-t border-b border-solid border-[#73E3DC] md:mt-[52px] mt-[25px]">
        {features.map((feature, index) => (
          <li className="text-center md:pt-[58px] pt-[30px] md:pb-[100px] pb-[50px] max-md:odd:border-r md:border-r border-b border-dashed border-[#73E3DC] last:border-0 px-5" key={index}>
            <figure className="flex justify-center items-center bg-white rounded-full size-[130px] lg:size-[260px] aspect-square shadow-[3px_5px_0_0_#73E3DC] mx-auto border border-[#73E3DC]" key={index}>
                <img className="max-md:h-16" src={feature.img} alt="" />
            </figure>
            <p className="md:text-[20px] text-[16px] text-center leading-[30px] md:mt-[30px] mt-[15px]">{feature.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Features;
