"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import "swiper/css";
const data = [
    {
        image: '/assets/images/feature-img-01.png',
        title: "Simple Token Swap",
        content: (<>With the swap feature, efficiently exchange tokens on the DIVER Chain.</>)
    },
    {
        image: '/assets/images/feature-img-02.png',
        title: "Cross-Chain Asset Transfer",
        content: (<>Utilize the bridge feature to move assets securely and swiftly across different blockchains.</>)
    },
    {
        image: '/assets/images/feature-img-03.png',
        title: "Zero fees swaps",
        content: (<>On the DIVER Time Network, there are no fees for token swaps. <br />
        * Bridge fees apply only during the unwrap process.</>)
    },
    {
        image: '/assets/images/feature-img-04.png',
        title: (<>&nbsp;</>),
        content: (<>Self-sign and approve on wallet for all transactions. Personal assets are always under users own control.</>)
    },
]
const Features = () => {
  const ref = useScrollAnimations();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[url(/assets/images/features-bg.png)] bg-cover pt-20 md:pt-[160px] md:pb-[230px] pb-[150px]"
    >
      <h4 className="px-5 text-center md:text-[80px] text-[40px] text-white font-bold leading-none">Features</h4>
      <div className="ani-content w-full mt-16 max-w-[1800px] mx-auto">
            <Swiper
                slidesPerView={"auto"}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                {data.map((item, index) => (
                <SwiperSlide key={index} className="!w-[300px] md:!w-[400px] md:min-h-[520px] bg-[#080A1A] rounded-[10px] overflow-hidden [box-shadow:0px_4px_30px_0px_rgba(171,_190,_209,_0.40)] ml-5 md:ml-10 text-white border border-white">
                    <div><img src={item.image} alt="" /></div>
                    <div className="md:pt-[42px] py-7 px-4 md:px-7">
                        <p className=" md:text-[21px] text-[18px] font-bold">{item.title}</p>
                        <p className="md:text-[16px] text-[13px] font-medium mt-3">
                            {item.content}
                        </p>
                    </div>
                </SwiperSlide>
                ))}
            </Swiper>
            </div>
    </section>
  );
};

export default Features;
