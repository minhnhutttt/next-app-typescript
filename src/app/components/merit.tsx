"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";
import { Splide, SplideSlide, SplideTrack } from "react-splide-ts";
import "@splidejs/splide/css";
import "@splidejs/splide/css/core";

const data = [
  {
    id: "/assets/images/number01.png",
    image: "/assets/images/merit-01.jpg",
    title: "新しい仕事の機会",
    text: (
      <>
        隙間時間を有効に活用できるため、企業や店舗との新たな出会いや追加収入の機会が増えます。
      </>
    ),
  },
  {
    id: "/assets/images/number02.png",
    image: "/assets/images/merit-02.jpg",
    title: "柔軟な働き方",
    text: (
      <>
        自分ファーストで自分の都合に合わせて働けるため、柔軟な働き方が可能です。
      </>
    ),
  },
  {
    id: "/assets/images/number03.png",
    image: "/assets/images/merit-03.jpg",
    title: "移動時間の削減",
    text: (
      <>
        隙間時間を有効に活用できるため、企業や店舗との新たな出会いや追加収入の機会が増えます。
      </>
    ),
  },
  {
    id: "/assets/images/number01.png",
    image: "/assets/images/merit-04.jpg",
    title: "優れたタイムパフォーマンス",
    text: <>自分で仕事を探す手間がないので、時間対効果に優れています。</>,
  },
];

const Merit = () => {
  const ref = useScrollAnimations();
  return (
    <section id="merit" ref={ref} className="relative bg-[url('/assets/images/bg-slider.png')] pb-[10%] bg-cover bg-no-repeat md:bg-[length:100%_auto] bg-top [clip-path:polygon(0_11.5vw,_100%_0,_100%_calc(100%-11.5vw),_0%_100%)]">
    <figure className="flex justify-center md:px-1 px-8 pt-[36%] md:pb-[2%] pb-[5%]">
        <img className="md:hidden"
                src="/assets/images/merit-title-sp.png"
                alt="DELIVERY Man Mapのメリットとは？！"
              />
              <img className="max-md:hidden"
                src="/assets/images/merit-title.png"
                alt="DELIVERY Man Mapのメリットとは？！"
              />
        </figure>
      <div data-scroll className="ani-fade-up pb-4">
        <Splide
          hasTrack={false}
          options={{
            autoplay: false,
            type: "loop",
            arrows: true,
            pagination: false,
            autoWidth: true,
          }}
        >
          <div className="relative pl-6 md:pl-[80px]">
            <SplideTrack>
              {data.map((item, index) => (
                <SplideSlide key={index}>
                  <div className="md:w-[381px] w-[330px] border-[1px] border-[#808080] bg-white mr-3 md:mr-5 px-3 py-3">
                    <figure className="border-[1px] border-[#808080] mb-[5px]">
                      <img src={item.image} alt="" />
                    </figure>
                    <div className="bg-gradient-to-b from-[#FFFCF4] to-[#B3E6F1] bg-bottom-merit">
                        <h3 className="md:text-[21px] text-[16px] font-bold border-b-[1px] border-[#808080] py-[11px] px-[5px]">{item.title}</h3>
                        <div className="w-full px-[14px] py-[12px]">
                        <p className="md:text-[16px] text-[14px] min-h-20">
                            {item.text}
                        </p>
                        </div>
                        <figure className="relative z-10 mr-4">
                            <img className="ml-auto md:max-w-[94px] max-w-[50px]" src={item.id} alt="" />
                        </figure>
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
      <div className="absolute bottom-[30px] lg:left-[231px] left-10 md:left-[120px]">
        <img className="" src="/assets/images/newwayofworking.png" alt="" />
    </div>
    </section>
  );
};

export default Merit;
