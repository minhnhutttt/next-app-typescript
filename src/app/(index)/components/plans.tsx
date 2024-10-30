"use client";
import Title from "@/components/title";
import Button from "@/components/button";
import useScrollAnimations from "@/hooks/useScrollAnimations";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const plans = [
  {
    title: "ベーシックプラン",
    price: "¥30,000",
    description: "年間パスポートNFTの作成用コンソールのご提供",
    details:
      (<>NFT の作成を自ら行うプランです。<br />初期費用を抑えつつ、スムーズにサービスを開始できるため、小規模な企業や導入を検討中の企業にぴったりです。</>),
    bgColor: "#5DF340",
  },
  {
    title: "サポートプラン",
    price: "¥80,000",
    description: "ベーシックプラン + NFT作成サポート",
    details: (
      <>
        NFTの作成をサポートするプランです。
        <br />
        中規模企業や多くの従業員がいる企業に最適です。
      </>
    ),
    bgColor: "#F97E3C",
    popular: true,
  },
  {
    title: "フルサポートプラン",
    price: "¥150,000",
    description: "フルサポート",
    details:
      "NFT作成からお店のご紹介まで、全ての機能をフル活用できる最上位プランです。",
    bgColor: "#DF0F47",
  },
];

const Plans = () => {
  const ref = useScrollAnimations();

  return (
    <section ref={ref} className="md:pt-[160px] pt-20 overflow-hidden">
      <div className="w-full md:ml-10 ml-5 mx-auto bg-white  rounded-tl-[30px] rounded-bl-[30px] md:pt-[90px] pt-[40px] md:pb-[80px] pb-[40px] max-sm:px-[20px]">
      <Title
        text_ja="料金プラン"
        text_en="Rate Plans"
        alignment="center"
      />
      <div className="flex justify-center items-center w-full max-w-[1260px] mx-auto md:pt-[50px] pt-[25px] md:mb-[46px] mb-[23px] font-notoSans md:pr-10 pr-5">
        <div className="hidden md:flex flex-wrap justify-center items-center gap-[10px]">
          {plans.map((plan, index) => (
            <div
              key={index}
              style={{ backgroundColor: plan.bgColor }}
              className="fade-up text-black md:px-[20px] px-[10px] md:pt-[40px] pt-[20px] pb-[30px] md:rounded-[30px] rounded-2xl shadow-lg relative md:w-[400px] w-full"
            >
              {plan.popular && (
                <span className="absolute top-0 md:right-[38px] md:leading-5 leading-[14px] right-[18px] bg-[url(/assets/images/bg-no1.png);] md:w-[65px] w-[45px] md:h-[68px] h-[48px] bg-[length:100%_100%] text-black font-notoSans md:text-[18px] text-[12px] font-bold text-center md:pt-[7px] pt-[4px]">
                  人気
                  <br /> No.1
                </span>
              )}
              <h2 className="md:text-[32px] text-[24px] font-bold font-notoSans text-center mb-5">
                {plan.title}
              </h2>
              <p className="md:text-[20px] text-[18px] font-black mb-1 bg-white text-center font-notoSerif md:py-[10px] py-[15px]">
                年額
                <span className="md:text-[52px] text-[28px]">{plan.price}</span>{" "}
                (税別)
              </p>
              <p className="mb-1 md:text-[18px] text-[16px] bg-white md:px-[30px] px-[15px] md:py-3 py-[10px] font-bold font-notoSerif flex items-center justify-center min-h-[84px]">
                {plan.description}
              </p>
              <p className="min-h-[120px] flex items-center bg-white md:text-[15px] text-[14px] md:px-[30px] px-[15px] md:py-4 py-[10px] font-notoSerif">
                {plan.details}
              </p>
            </div>
          ))}
        </div>
        <div className="w-full max-w-[440px] px-5 md:hidden">
        <Swiper
                slidesPerView={1}
                spaceBetween={20}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper relative"
            >
                {plans.map((plan, index) => (
                  <SwiperSlide
                    key={index}
                    className=""
                  >
                    <div 
                    style={{ backgroundColor: plan.bgColor }}
                    className="text-black md:px-[20px] px-[10px] md:pt-[40px] pt-[20px] pb-[30px] md:rounded-[30px] rounded-2xl shadow-lg relative md:w-[400px] w-full">
                    {plan.popular && (
                      <span className="absolute top-0 md:right-[38px] md:leading-5 leading-[14px] right-[18px] bg-[url(/assets/images/bg-no1.png);] md:w-[65px] w-[45px] md:h-[68px] h-[48px] bg-[length:100%_100%] text-black font-notoSans md:text-[18px] text-[12px] font-bold text-center md:pt-[7px] pt-[4px]">
                        人気
                        <br /> No.1
                      </span>
                    )}
                    <h2 className="md:text-[32px] text-[24px] font-bold font-notoSans text-center mb-5">
                      {plan.title}
                    </h2>
                    <p className="md:text-[20px] text-[18px] font-black mb-1 bg-white text-center font-notoSerif md:py-[10px] py-[15px]">
                      年額
                      <span className="md:text-[52px] text-[28px]">{plan.price}</span>{" "}
                      (税別)
                    </p>
                    <p className="mb-1 md:text-[18px] text-[16px] bg-white md:px-[30px] px-[15px] md:py-3 py-[10px] font-bold font-notoSerif flex items-center justify-center min-h-[84px]">
                      {plan.description}
                    </p>
                    <p className="min-h-[120px] flex items-center bg-white md:text-[15px] text-[14px] md:px-[30px] px-[15px] md:py-4 py-[10px] font-notoSerif">
                      {plan.details}
                    </p>
                    </div>
                  </SwiperSlide>
                ))}
                </Swiper>
        </div>
      </div>
      <div className="fade-up max-w-[545px] w-full relative mx-auto mb-[30px]">
        <figure className="absolute md:left-[-30px] left-[-18px] md:-top-[28%] top-[-20px] z-10">
          <img
            className="max-sm:w-1/2 poyopoyo"
            src="/assets/images/ic-now.png"
            alt=""
          />
        </figure>
        <div className="relative box max-w-[495px] w-full border-[3px] rounded-[10px] border-[#000] mx-auto md:px-[48px] px-[26px] py-[38px]">
          <p className="md:text-[20px] text-[16px] inline u-underline">
            今ならベーシックプランの料金でサポートプランの利用が可能！
          </p>
        </div>
      </div>
      <Button>
        今すぐ申し込む
      </Button>
      </div>
    </section>
  );
};

export default Plans;
