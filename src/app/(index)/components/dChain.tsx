"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import useScrollAnimations from '@/hooks/useScrollAnimations';

const data = [
    {
        image: '/assets/images/d-chain-img-01.png',
        title: 'Complete elimination of transaction costs',
        text: 'No fees or gas costs for sending tokens or NFTs.'
    },
    {
        image: '/assets/images/d-chain-img-02.png',
        title: 'Scalability',
        text: 'High transaction processing capacity and low latency. Capable of processing 240,000 transactions per second.'
    },
    {
        image: '/assets/images/d-chain-img-03.png',
        title: 'Security',
        text: 'Ensuring security through advanced consensus algorithms and decentralized governance.'
    },
    {
        image: '/assets/images/d-chain-img-04.png',
        title: 'Interoperability',
        text: 'Seamless integration with other blockchains and dApps.'
    },
    {
        image: '/assets/images/d-chain-img-01.png',
        title: 'Complete elimination of transaction costs',
        text: 'No fees or gas costs for sending tokens or NFTs.'
    },
    {
        image: '/assets/images/d-chain-img-02.png',
        title: 'Scalability',
        text: 'High transaction processing capacity and low latency. Capable of processing 240,000 transactions per second.'
    },
    {
        image: '/assets/images/d-chain-img-03.png',
        title: 'Security',
        text: 'Ensuring security through advanced consensus algorithms and decentralized governance.'
    },
    {
        image: '/assets/images/d-chain-img-04.png',
        title: 'Interoperability',
        text: 'Seamless integration with other blockchains and dApps.'
    },
]

const DChain = () => {
    const ref = useScrollAnimations();
  return (
    <section ref={ref} className="md:mt-[-160px] mt-[-80px] bg-[url('/assets/images/d-chain-bg.png')] bg-cover bg-left-top md:[clip-path:polygon(0_160px,_100%_0,_100%_100%,_0%_100%)] [clip-path:polygon(0_80px,_100%_0,_100%_100%,_0%_100%)] overflow-hidden">
        <div className="md:pt-[260px] pt-[160px] md:pb-[250px] pb-[120px]">
            <h3 className="fade-up text-center text-white md:text-[58px] text-[32px] font-black tracking-[0.22em]">
            Overview of DIVER Chain
            </h3>
            <div className="md:mt-[170px] mt-[80px]">
                <div className="fade-up px-5">
                    <p className="text-center md:text-[32px] text-[20px] font-black tracking-widest">What is DIVER Chain?</p>
                    <p className="w-full max-w-[665px] mx-auto md:text-[16px] text-[14px] tracking-widest mt-4">
                    DIVER Chain is a high-performance blockchain designed specifically for the modern decentralized economy. Its main features include:
                    </p>
                </div>
                <div className="md:pl-20 pl-6 md:mt-[95px] mt-[45px]">
                    <Swiper
                        slidesPerView={'auto'}
                        loop={true}
                        spaceBetween={16}
                        modules={[Autoplay]}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            768: {
                              spaceBetween: 32,
                            },
                          }}
                        className="mySwiper"
                    >
                        {data.map((item, index) =>(
                            <SwiperSlide key={index} className="!w-[300px] md:!w-[380px] md:!h-[442px] !h-[400px] relative !flex flex-col items-center rounded-[20px] border border-[#2379E7] bg-white/20 [box-shadow:0px_0px_40px_0px_rgba(38,_64,_141,_0.10)] overflow-hidden md:pt-10 pt-6 px-[22px] space-y-5">
                                <p className="text-center md:text-[19px] text-[17px] font-bold h-10 md:h-12 leading-[1.4]">{item.title}</p>
                                <figure>
                                    <img className="max-md:w-[180px]" src={item.image} alt="" />
                                </figure>
                                <p className="md:text-[18px] text-[16px] font-medium leading-[1.3]">
                                    {item.text}
                                </p>
                            </SwiperSlide>
                        ))}
                        
                    </Swiper>
                </div>
                <div className="w-full max-w-[1440px] mx-auto md:mt-[160px] mt-[100px]">
                    <p className="text-center md:text-[32px] text-[20px] font-black leading-[1.3] tracking-[0.1em] px-5">Reasons to Use DwETH on DIVER Chain</p>
                    <div className="fade-up flex max-md:flex-col items-center md:items-start gap-6 md:gap-[35px] mt-16">
                        <figure className="md:rounded-r-[30px] overflow-hidden max-xl:w-1/2 max-md:w-auto relative">
                            <img src="/assets/images/d-chain-thumb.png" alt="" />
                            <img className="animate-[fuwafuwa_1.8s_ease-in-out_infinite_alternate] absolute w-[9.0278%] top-[19%] right-[11%]" src="/assets/images/d-chain-thumb-01.png" alt="" />
                            <img className="animate-[fuwafuwa_1.8s_ease-in-out_infinite_alternate] absolute w-[7.777%] left-[7.5%] top-[64%]" src="/assets/images/d-chain-thumb-02.png" alt="" />
                        </figure>
                        <div className="flex flex-1 max-md:px-5">
                            <p className="md:text-[18px] text-[15px] font-medium leading-loose tracking-[0.1em] max-w-[487px]">
                            DIVER Chain provides a robust infrastructure suitable for operating DeFi applications, making it an ideal platform for Wrapped ETH. Features such as completely free transaction fees and fast block generation times enhance the user experience. As a result, DwETH adoption is promoted across a wide range of fields.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default DChain;
