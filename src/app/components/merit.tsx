"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";
import { Splide, SplideSlide, SplideTrack } from "react-splide-ts";
import "@splidejs/splide/css";
import "@splidejs/splide/css/core";

const data = [
  {
    id: "1",
    image: "/assets/images/merit-01.png",
    title: "新しい仕事の機会",
    text: (
      <>
        隙間時間を有効に活用できるため、企業や店舗との新たな出会いや追加収入の機会が増えます。
      </>
    ),
  },
  {
    id: "2",
    image: "/assets/images/merit-02.png",
    title: "柔軟な働き方",
    text: (
      <>
        自分ファーストで自分の都合に合わせて働けるため、柔軟な働き方が可能です。
      </>
    ),
  },
  {
    id: "3",
    image: "/assets/images/merit-03.png",
    title: "移動時間の削減",
    text: (
      <>
        隙間時間を有効に活用できるため、企業や店舗との新たな出会いや追加収入の機会が増えます。
      </>
    ),
  },
  {
    id: "4",
    image: "/assets/images/merit-04.png",
    title: "優れたタイムパフォーマンス",
    text: <>自分で仕事を探す手間がないので、時間対効果に優れています。</>,
  },
];

const Merit = () => {
  const ref = useScrollAnimations();
  return (
    <section id="merit" ref={ref} className="relative overflow-hidden">
      <h4 data-scroll className="ani-fade-up text-center md:text-[64px] text-[40px] font-extrabold md:pt-16 pt-10 md:pb-14 pb-8">
        メリットがいっぱい
      </h4>
      <div className="relative md:h-[646px] h-[480px] bg-bottom bg-[url('/assets/images/bg-02.png')]">
        <div className="absolute inset-0 flex justify-center text-center items-start md:text-[54px] lg:text-[64px] text-[24px] font-extrabold text-white md:pt-[85px] pt-20 leading-[1.4] px-5">
          <div data-scroll className="ani-fade-up w-full max-w-[976px] bg-black border-[8px] border-white rounded-[50px] py-7">
            リアル型サブクエスト <br />
            ↓↓↓
            <br />
            それがバイトクエストだ！
          </div>
        </div>
      </div>
      <div data-scroll className="ani-fade-up pb-4">
        <Splide
          hasTrack={false}
          options={{
            autoplay: true,
            type: "loop",
            arrows: true,
            pagination: false,
            autoWidth: true,
          }}
        >
          <div className="relative lg:pl-[231px] pl-10 md:pl-[120px] md:-mt-[120px] -mt-[80px]">
            <SplideTrack>
              {data.map((item, index) => (
                <SplideSlide key={index}>
                  <div className="md:w-[355px] w-[300px] h-[400px] md:h-[470px] border-[5px] border-[#FA3D51] rounded-[40px] overflow-hidden bg-[#FFE4E7] mr-5">
                    <figure>
                      <img src={item.image} alt="" />
                    </figure>
                    <div className="flex justify-center -mt-4">
                      <div className="md:size-[110px] size-[90px] flex items-center justify-center flex-col rounded-full bg-white font-black text-[#FA3D51] leading-none">
                        <p className="md:text-[20px] text-[16px]">メリット</p>
                        <p className="md:text-[60px] text-[36px]">{item.id}</p>
                      </div>
                    </div>
                    <div className="text-center md:text-[24px] text-[18px] font-extrabold mb-5 mt-6">
                      {item.title}
                    </div>

                    <div className="md:px-11 px-5">
                      <p className="md:text-[16px] text-[14px] font-medium">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </SplideSlide>
              ))}
            </SplideTrack>

            <div className="splide__arrows flex gap-5 justify-end py-6 md:mr-10 mr-6 ml-auto max-md:mb-6">
              <button className="splide__arrow--prev max-md:absolute max-md:top-1/2">
                <div className="md:size-[80px] size-[44px] flex items-center justify-center rounded-full">
                  <img src="/assets/images/arrow-prev.png" alt="" />
                </div>
              </button>
              <button className="splide__arrow--next max-md:absolute max-md:top-1/2">
                <div className="md:size-[80px] size-[44px] flex items-center justify-center rounded-full">
                  <img src="/assets/images/arrow-next.png" alt="" />
                </div>
              </button>
            </div>
          </div>
        </Splide>
      </div>
      <div className="md:h-[156px] h-[120px] bg-[url('/assets/images/gradation.png')]">
      </div>
    </section>
  );
};

export default Merit;
