"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const data = [
  {
    id: "01",
    title: "御社とユーザーにはモダン技術が必要です。ウェブを通じたユーザーとの対話を実装しましょう。",
    label: 'ウェブサイト制作',
    image: "/assets/images/service-05.svg",
  },
  {
    id: "02",
    title: "単なる情報発信では、もう不十分です。ユーザーの行動を導く、直感的な体験を。",
    label: 'ランディングペイジ制作',
    image: "/assets/images/service-01.svg",
  },
  {
    id: "03",
    title: "成長の鍵は、効率化された業務環境にあります。スピーディーな意思決定を可能にするシステムを。",
    label: 'システム開発',
    image: "/assets/images/service-04.svg",
  },
  {
    id: "04",
    title: "AI活用は、もはや選択肢ではありません。御社の強みを最大化する、必然の一手です。",
    label: 'AI事業開発',
    image: "/assets/images/service-02.svg",
  },
  {
    id: "05",
    title: "効果のない広告に、価値はありません。データと技術で、確実な成果を生み出します。",
    label: '広告運用',
    image: "/assets/images/service-03.svg",
  },
];

const Service = () => {
  
  return (
    <section className="md:pt-[9em] pt-[3em]">
        <div className="md:mb-[1em] text-[1em] font-medium uppercase text-gray-500">Services</div>
        <div className="mb-[2em] md:mb-[3em]">
          <h2 className="md:text-[3em] text-[1.3em] font-bold leading-[1.3]">
          新しい技術で作られるサービスは世界のスタンダードに。<br />
          古い技術のままでは使いづらいサービスの代表格に。
          </h2>
        </div>
        
        <div className="ani-content w-full ">
            <Swiper
                slidesPerView={"auto"}
                spaceBetween={30}
                className="mySwiper"
            >
                {data.map((item, index) => (
                <SwiperSlide key={index} className="shake !w-[16em] md:!w-[23.25em] md:!h-[27.5em] !h-[22.5em] bg-white rounded-[0.75em] relative">
                  <div className="w-full h-full absolute z-[-1] flex items-center justify-end flex-col">
                    <img className="object-cover h-[65%]" src={item.image} alt="" />
                    </div>
                    <div className="text-black p-[1em]">
                      <h3 className="md:text-[1.2em] text-[1em] font-bold mb-[1em]">{item.title}</h3>
                      <p className="border-black border inline-block py-[.25em] px-[1em] rounded-full text-[0.8em] md:text-[1em] font-medium">{item.label}</p>
                    </div>
                </SwiperSlide>
                ))}
            </Swiper>
            </div>
    </section>
  );
};

export default Service;
