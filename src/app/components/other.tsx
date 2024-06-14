"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";
import { Splide, SplideSlide, SplideTrack } from "react-splide-ts";
import "@splidejs/splide/css";
import "@splidejs/splide/css/core";

const data = [
  {
    image: "/assets/images/slider-01.png",
    title: "イベント運営会社",
    text: (
      <>
        フェスをデジタルでさらに楽しむ！
        <br />
        NFTクーポンでフェスティバルの特典や限定アイテムを提供！
      </>
    ),
  },
  {
    image: "/assets/images/slider-02.png",
    title: "ケーブルテレビ局",
    text: (
      <>
        地域の魅力を発信！NFTクーポンと位置情報で、店舗やイベントを紹介。視聴者はデジタルクーポンを集め、地域を探索して経済活性化に貢献！
      </>
    ),
  },
  {
    image: "/assets/images/slider-03.png",
    title: "不動産業",
    text: <>物件情報を効果的に提供し、顧客の見学を促進！</>,
  },
  {
    image: "/assets/images/slider-04.png",
    title: "旅行会社",
    text: (
      <>
        旅行をもっと楽しく、便利に！
        <br />
        NFTクーポンで観光地や店舗の特典を提供！
      </>
    ),
  },
  {
    image: "/assets/images/slider-05.png",
    title: "大学",
    text: (
      <>
        キャンパスライフをもっと便利に、楽しく！
        <br />
        NFTクーポンで学内の特典やイベント情報を提供
      </>
    ),
  },
  {
    image: "/assets/images/slider-06.png",
    title: "プロスポーツチーム",
    text: (
      <>
        ファンとのエンゲージメントを高める新しい方法！
        <br />
        NFTクーポンを活用して試合の特典や限定アイテムを提供
      </>
    ),
  },
  {
    image: "/assets/images/slider-07.png",
    title: "行政",
    text: (
      <>
        NFTクーポンで区内の店舗やイベントの特典を提供、位置情報機能で区内の移動をスムーズにし、住民や観光客の満足度を高めます。
      </>
    ),
  },
];

const Other = () => {
  const ref = useScrollAnimations();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden md:pt-[70px] pt-10 md:pb-[66px] pb-10 md:pl-[120px] pl-5"
    >
      <div className="w-full md:pr-[140px]">
        <div className="fade-up md:text-[48px] text-[30px] font-medium tracking-wider">
          店舗以外の使い方
        </div>
      </div>
      <div className="fade-up mt-4">
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
          <div className="relative">
            <div className="splide__arrows md:absolute right-0 md:top-[-75px] flex gap-4 md:w-[254px] w-[140px] justify-end md:mr-10 mr-6 max-md:ml-auto max-md:mb-6">
              <button className=" splide__arrow--prev">
                <div className="md:size-[50px] size-[44px] border-2 border-[#2639A6] flex items-center justify-center bg-white rounded group hover:bg-[#2639A6] duration-150">
                  <svg
                  className="group-hover:fill-white fill-[#2639A6]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="18"
                    viewBox="0 0 11 18"
                    fill="none"
                  >
                    <path
                      d="M1.46617 17.4826C1.19054 17.4826 0.914905 17.3723 0.708179 17.1518C0.322292 16.7315 0.342966 16.0769 0.763307 15.691L7.98491 8.99996L0.763307 2.30894C0.342966 1.92306 0.322292 1.26843 0.708179 0.848084C1.09407 0.427743 1.7487 0.40707 2.16904 0.792958L10.2107 8.24196C10.4243 8.43491 10.5414 8.71054 10.5414 8.99996C10.5414 9.28937 10.4243 9.56501 10.2107 9.75795L2.16904 17.207C1.96921 17.393 1.72113 17.4826 1.46617 17.4826Z"
                    />
                  </svg>
                </div>
              </button>
              <button className=" splide__arrow--next">
              <div className="md:size-[50px] size-[44px] border-2 border-[#2639A6] flex items-center justify-center bg-white rounded group hover:bg-[#2639A6] duration-150">
                  <svg
                  className="group-hover:fill-white fill-[#2639A6]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="18"
                    viewBox="0 0 11 18"
                    fill="none"
                  >
                    <path
                      d="M1.46617 17.4826C1.19054 17.4826 0.914905 17.3723 0.708179 17.1518C0.322292 16.7315 0.342966 16.0769 0.763307 15.691L7.98491 8.99996L0.763307 2.30894C0.342966 1.92306 0.322292 1.26843 0.708179 0.848084C1.09407 0.427743 1.7487 0.40707 2.16904 0.792958L10.2107 8.24196C10.4243 8.43491 10.5414 8.71054 10.5414 8.99996C10.5414 9.28937 10.4243 9.56501 10.2107 9.75795L2.16904 17.207C1.96921 17.393 1.72113 17.4826 1.46617 17.4826Z"
                    />
                  </svg>
                </div>
              </button>
            </div>
            <SplideTrack>
              {data.map((item, index) => (
                <SplideSlide key={index}>
                  <div className="md:size-[300px] size-[270px] bg-white border-2 border-[#2639A6] rounded-[20px] mr-5 flex flex-col items-center pt-5 px-[15px]">
                    <figure>
                      <img
                        className="max-md:w-[100px]"
                        src={item.image}
                        alt=""
                      />
                    </figure>
                    <div className="text-center md:text-[22px] text-[18px] font-bold mt-2 tracking-wider">
                      {item.title}
                    </div>
                    <p className="md:text-[16px] text-[14px] tracking-tight pt-1 leading-[1.4]">
                      {item.text}
                    </p>
                  </div>
                </SplideSlide>
              ))}
            </SplideTrack>
          </div>
        </Splide>
      </div>
    </section>
  );
};

export default Other;
