"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReactNode, useRef } from "react";
type SliderProp = {
    id: string;
    imageSrc: string;
    title: string;
    content: ReactNode;
}
const sliderData: SliderProp[] = [
    {
      id: "1",
      title: "SNSのアイコンに",
      imageSrc: "/images/ic-slider-01.png",
      content: (
        <>
          お気に入りのNFTをアイコンに設定できます
        </>
      ),
    },
    {
        id: "2",
        title: "コレクションする",
        imageSrc: "/images/ic-slider-02.png",
        content: (
          <>
            ダイバーウォレットでNFTを一括管理できます
          </>
        ),
      },
      {
        id: "3",
        title: "交換する",
        imageSrc: "/images/ic-slider-03.png",
        content: (
          <>
            NFTを無料で送受信できます
          </>
        ),
      },
      {
        id: "4",
        title: "入場チケットとして",
        imageSrc: "/images/ic-slider-04.png",
        content: (
          <>
            転売を防止するチケットとして使えます
          </>
        ),
      },
      {
        id: "5",
        title: "割引クーポンとして",
        imageSrc: "/images/ic-slider-05.png",
        content: (
          <>
            特別割引を受けられます
          </>
        ),
      },
      {
        id: "6",
        title: "カードゲームをする",
        imageSrc: "/images/ic-slider-06.png",
        content: (
          <>
            カードを集めてカードバトルができます
          </>
        ),
      },
  ];
export default function NFTSlider() {
    const sliderRef = useRef(null);
    const sliderSettings = {
        dots: false,
        infinite: true,
        slidesToScroll: 1,
        focusOnSelect: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1500,
        variableWidth: true,
        adaptiveHeight: true,
    };
    return (
        <section className="pl-[5.556vw] md:mt-[70px] mt-[50px]">
            <div className="bg-[url('/images/bg-slider.png')] bg-cover rounded-s-[60px] md:pt-[11.111vw] min-[1440px]:pt-[160px] pt-[100px] relative md:pb-[110px] pb-[60px] pl-4">
                <span className="absolute right-[3.333vw] min-[1440px]:right-12 top-[9vw] min-[1440px]:top-[94px] max-[1439px]:w-[15.764vw]">
                    <img src="/images/ic-slider-men.png" alt="" />
                </span>
                <span className="absolute left-16 bottom-[-70px]">
                    <img src="/images/ic-slider-nft.png" alt="" />
                </span>
                <div className="text-center relative">
                    <p className="md:text-[24px] [font-size:_clamp(14px,4.8vw,18px)] tracking-widest font-medium">ワクワクが止まらない！</p>
                    <h3 className="min-[1440px]:text-[62px] md:text-[4.306vw] [font-size:_clamp(20px,7.5vw,32px)] font-bold tracking-[0.15em] md:mt-2">受け取ったNFTの活用ケース</h3>
                </div>
                <div className="md:mt-[72px]">
                <Slider ref={sliderRef} {...sliderSettings} className="w-full">
                    {sliderData.map(({ id, imageSrc, title, content }) => (
                    <div className="px-[15px] pb-2" key={id}>
                        <div className="w-[220px] h-[240px] py-4 px-2.5 md:py-6 rounded-[40px] border border-solid border-[#FF4500] bg-[rgba(255,_255,_255,_0.80)] [box-shadow:6px_6px_0px_0px_#FF6347]">
                            <figure className="flex items-center justify-center">
                                <img src={imageSrc} alt={title} />
                            </figure>
                            <p className="text-center md:text-[18px] text-[14px] font-bold md:mt-4">{title}</p>
                            <p className="md:text-[16px] text-[13px] font-medium md:mt-2">{content}</p>
                        </div>
                    </div>
                    ))}
                </Slider>
                </div>
            </div>
        </section>
    );
  }
  