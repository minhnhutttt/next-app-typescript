"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import useScrollAnimations from "@/hooks/useScrollAnimations";

const data = [
    {
        image: '/assets/images/img-sell-01.png',
        title: 'DIVER Storage',
        text: (<><span className="font-bold">購入者のウォレットアドレスへNFTを転送するだけ！</span>スマホから数回タップするだけで簡単に送信できます。</>)
    },
    {
        image: '/assets/images/img-sell-02.png',
        title: 'DIVER Tag',
        text: (<><span className="font-bold">NFCタグを販売するだけ！</span>設定はお客様ご自身で簡単に行えます。</>)
    },
    {
        image: '/assets/images/img-sell-03.png',
        title: 'DIVER Domain',
        text: (<>ウェブサイトで直感的な操作で、<span className="font-bold">簡単に取得や譲渡が可能！</span></>)
    },
]

const Sell = () => {
  const ref = useScrollAnimations();
  return (
    <section id="sales" ref={ref} className="relative z-10">
        <div className="w-full mx-auto border-[10px] border-[#18539E] md:rounded-t-[70px] rounded-t-[40px] md:pt-[124px] pt-20 md:pb-[200px] pb-[100px] px-5">
            <div className="w-full max-w-[1360px] mx-auto">
                <div className="fade-up">
                    <p className="font-inter md:text-[24px] text-[18px] tracking-widest">Selling is very easy!</p>
                    <h3 className="md:text-[56px] text-[32px] font-medium tracking-widest">販売方法はとっても簡単</h3>
                </div>
                <div className="hidden md:flex flex-wrap md:mt-[90px] mt-[60px] justify-center md:gap-[60px] gap-6">
                    {data.map((item,index)=>(
                        <div className="fade-up w-[410px] flex flex-col items-center" key={index}>
                            <figure>
                                <img src={item.image} alt={item.title} />
                            </figure>
                            <div className="pt-4 md:pt-6">
                                <h5 className="text-center md:text-[26px] text-[20px] font-bold tracking-widest">{item.title}</h5>
                                <p className="md:text-[21px] text-[16px] leading-[1.9] mt-3 md:mt-5 tracking-wide">{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="md:hidden md:mt-[90px] mt-[60px] w-full max-w-[380px] mx-auto">
                    <Swiper
                    slidesPerView={'auto'}
                        loop={true}
                        centeredSlides={true}
                        modules={[Navigation]}
                        navigation={true}
                        className="sellSwiper relative"
                    >
                        {data.map((item, index) => (
                                <SwiperSlide className="w-[410px] !h-auto flex flex-col items-center" key={index}>
                            <figure>
                                <img src={item.image} alt={item.title} />
                            </figure>
                            <div className="pt-4 md:pt-6">
                                <h5 className="text-center md:text-[26px] text-[20px] font-bold tracking-widest">{item.title}</h5>
                                <p className="md:text-[21px] text-[16px] leading-[1.9] mt-3 md:mt-5 tracking-wide">{item.text}</p>
                            </div>
                        </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Sell;
