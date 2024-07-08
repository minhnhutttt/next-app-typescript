"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import useScrollAnimations from "@/hooks/useScrollAnimations";

const data = [
    {
        image: '/assets/images/img-diver-01.png',
        title: 'ブロックチェーンとは？',
        text: 'デジタル取引の記録を分散型ネットワーク上に構築する技術です。取引データ改ざんが極めて困難で信頼性と透明性が確保されます。ビットコインの誕生により広く知られるようになり、金融、物流、医療など多岐にわたる分野で応用が進んでいる革新的な技術です。'
    },
    {
        image: '/assets/images/img-diver-02.png',
        title: 'ビットコインの思想とは？',
        text: 'それは中央機関を介さずに個人間で直接取引を行うことを可能にする分散型デジタル通貨の理念です。これにより、取引の透明性とセキュリティが向上し、金融の民主化を目指しています。'
    },
    {
        image: '/assets/images/img-diver-03.png',
        title: 'イーサリアムの利便性とは？',
        text: 'それはスマートコントラクトという自動実行される契約をブロックチェーン上で運用できる点にあります。これにより、複雑な取引やアプリケーションを分散型ネットワーク上で実行でき、金融からエンターテインメントまで多岐にわたる分野での応用が可能です。'
    },
]

const Diver = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative bg-[url('/assets/images/bg-diver.png')] bg-cover bg-bottom md:pt-[160px] pt-20 px-5 md:pb-[278px] pb-[150px]">
        <div className="w-full max-w-[1360px] mx-auto">
            <div className="fade-up text-white">
                <p className="font-inter md:text-[24px] text-[18px] tracking-widest">What is a DIVER?</p>
                <h3 className="md:text-[56px] text-[32px] font-medium tracking-widest">DIVERとは？</h3>
            </div>
            <div className="fade-up flex justify-center xl:justify-end items-center max-xl:flex-col md:mt-20 mt-12 gap-10 md:gap-20 xl:gap-[137px] xl:pr-[110px]">
                <figure className="[filter:drop-shadow(0px_4px_170px_rgba(68,_151,_192,_0.20))]">
                    <img className="max-md:w-[200px]" src="/assets/images/logo-diver.png" alt="" />
                </figure>
                <div className="max-w-[574px] bg-white/5 md:py-[30px] md:px-[50px] py-5 px-6 text-white font-inter md:text-[20px] text-[16px] leading-[2] tracking-[0.2em]">
                    DIVERは、世界で唯一、取引手数料が完全無料であらゆるアプリが使える革新的なブロックチェーンです。ビットコインの思想とイーサリアムの利便性を基に、さらに進化させたグローバルプロジェクトです！
                </div>
            </div>
            <div className="hidden md:flex xl:px-10 flex-wrap md:mt-[100px] mt-[60px] justify-center md:gap-10 gap-6">
                {data.map((item,index)=>(
                    <div className="fade-up w-[400px] bg-[#18539E]/[0.2] border border-[#18539E] flex flex-col items-center p-4 md:p-7" key={index}>
                        <figure>
                            <img className="max-md:w-[80px]" src={item.image} alt={item.title} />
                        </figure>
                        <div className="text-white pt-4 md:pt-6 font-inter ">
                            <h5 className="text-center md:text-[18px] text-[15px] font-semibold tracking-widest">{item.title}</h5>
                            <p className="md:text-[16px] text-[13px] leading-[2] mt-3 md:mt-5 tracking-wide">{item.text}</p>
                        </div>
                    </div>
                ))}
                
            </div>
            <div className="md:mt-[100px] mt-[60px] w-full max-w-[440px] mx-auto md:hidden">
            <Swiper
                slidesPerView={'auto'}
                loop={true}
                centeredSlides={true}
                modules={[Navigation]}
                navigation={true}
                className="mySwiper relative"
            >
                {data.map((item, index) => (
                    <SwiperSlide className="w-[400px] !h-auto bg-[#18539E]/[0.2] border border-[#18539E] flex flex-col items-center justify-center p-5 md:p-7" key={index}>
                        <figure className='flex justify-center items-center'>
                            <img className="max-md:w-[80px]" src={item.image} alt={item.title} />
                        </figure>
                        <div className="text-white pt-4 md:pt-6 font-inter ">
                            <h5 className="text-center md:text-[18px] text-[15px] font-semibold tracking-widest">{item.title}</h5>
                            <p className="md:text-[16px] text-[13px] leading-[2] mt-3 md:mt-5 tracking-wide">{item.text}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>
        </div>
    </section>
  );
};

export default Diver;
