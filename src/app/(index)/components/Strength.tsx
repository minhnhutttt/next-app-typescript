"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const data = [
  {
    image: "/assets/images/slider-01.jpg",
    text: "お母さんの誕生日に",
  },
  {
    image: "/assets/images/slider-02.jpg",
    text: "弟へ感謝の気持ち",
  },
  {
    image: "/assets/images/slider-03.jpg",
    text: "友達へありがとう",
  },
  {
    image: "/assets/images/slider-04.jpg",
    text: "息子へ何気ない気持ち",
  },
];

const Strength = () => {
  return (
    <section className="px-5">
      <div className="w-full max-w-[1280px] mx-auto bg-white md:pb-[220px] pb-[120px]">
        <div className="w-full max-w-[912px] mx-auto pt-[100px]">
          <h3 data-scroll className="fade-up lg:text-[48px] md:text-[36px] text-[26px] font-bold text-center tracking-[0.18em]">
            言葉を選ぶ。
            <br className="md:hidden" />
            それが本当の強さだ。
          </h3>
          <p data-scroll className="fade-up lg:text-[28px] md:text-[24px] text-[18px] font-medium tracking-[0.2em] px-6 pt-10">
            荒っぽさや威圧感じゃない。
            <br />
            本当に強い人は、自分の言葉に責任を持つ。
            <br />
            <br />
            感情のままにぶつけるんじゃなく、
            <br />
            誰かの気持ちを思いやって言葉を選ぶ。
            <br />
            <br />
            それが「優しさ」であり、「男らしさ」だと思う。
            <br />
            あなたが選ぶたった一言で、誰かの心は軽くもなれば、深く傷つくこともある。
            <br />
            <br />
            だったら、前向きな力になれる言葉を選ぼう。
            <br />
            強くて優しい、自分だけの言葉で。
          </p>
        </div>
        <div className="w-full max-w-[763px] mx-auto pt-[70px] md:pt-[136px] max-md:px-5">
          <h4 data-scroll className="fade-up lg:text-[128px] md:text-[100px] text-[50px] text-center font-medium tracking-[0.18em] border-b border-black pb-2">
            利用シーン
          </h4>
          <p data-scroll className="fade-up text-center md:text-[32px] text-[24px] font-bold tracking-[0.2em] pt-8">
            どんなときでも、
            <br className="md:hidden" />
            「気持ちを伝える」。
          </p>
        </div>
        <div data-scroll className="fade-up mt-20 md:mt-[115px]">
          <Swiper
            slidesPerView={"auto"}
            loop={true}
            modules={[Autoplay]}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            className="w-full"
          >
            {data.map((item, index) => (
              <SwiperSlide
                key={index}
                className="relative h-auto md:!w-[360px] !w-[280px] mx-2.5 md:px-8 px-4 py-[22px] bg-black/5 rounded-[10px]"
              >
                <div>
                  <img
                    className="[box-shadow:0px_0px_4.4px_0px_rgba(0,_0,_0,_0.06),_0px_5px_19px_0px_rgba(0,_0,_0,_0.08)]"
                    src={item.image}
                    alt=""
                  />
                </div>
                <div className="md:text-[24px] text-[18px] font-bold pt-5">
                  お母さんの誕生日に
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Strength;
