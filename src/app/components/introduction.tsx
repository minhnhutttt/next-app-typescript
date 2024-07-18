"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const data = [
    {
        image: '/assets/images/slider-01.png',
        title: 'デジタルアート',
        text: 'アーティストが自身のデジタルアート作品をNFTとして販売することで、作品の所有権を証明し、転売の際にも収益を得ることができます。'
    },
    {
        image: '/assets/images/slider-02.png',
        title: 'デジタルコレクティブ',
        text: 'デジタルアイテムを収集、売買することができます。'
    },
    {
        image: '/assets/images/slider-03.png',
        title: 'ゲームアイテム',
        text: 'ゲーム内アイテムやキャラクターをNFTとして発行し、プレイヤーが所有することで、マーケットプレイスで売買することができます。'
    },
    {
        image: '/assets/images/slider-04.png',
        title: 'スポーツ',
        text: 'アスリートが限定版のデジタルアイテムやハイライト映像をNFTとして販売し、ファンとのエンゲージメントを高めています。'
    },
    {
        image: '/assets/images/slider-05.png',
        title: '音楽',
        text: 'ミュージシャンが楽曲やアルバムをNFTとして販売することができます。また、ファンはアーティストの作品の所有権を持つことができます。'
    },
    {
        image: '/assets/images/slider-06.png',
        title: 'ファッション',
        text: 'NFTデジタルファッションとして、衣服やアクセサリーを販売することができます。バーチャルアバターやソーシャルメディアで使用されます。'
    },
    {
        image: '/assets/images/slider-07.png',
        title: '不動産',
        text: '現実世界の不動産NFTをトークン化し、所有権をデジタル証明することができます。これにより不動産の取引がより簡単かつ透明になります。'
    },
    {
        image: '/assets/images/slider-08.png',
        title: '学術・資格証明',
        text: '学位証明書や資格証明書をNFTとして発行し、これらの証明書の正当性を簡単に検証できるようにします。'
    },
    {
        image: '/assets/images/slider-09.png',
        title: '慈善活動',
        text: 'チャリティーオークションでNFTを販売し、収益を慈善団体に寄付することで、支援活動を行います。'
    }
]

const Introduction = () => {
  return (
    <section className="relative md:pt-[96px] pt-12">
        <div className="relative">
        <span className="absolute md:h-[calc(100%-280px)] h-[calc(100%-180px)] px-5 top-0 inset-x-0 ">
            <span className="w-full h-full bg-white rounded-[60px] block"></span>
        </span>
        <div className="px-5">
        <div className="w-full max-w-[1350px] mx-auto relative">
            <div className="relative pl-[4.583vw] dt:pl-[66px] pt-5 pr-5">
                <div className="flex md:gap-[40px] gap-7 max-md:flex-col">
                    <figure data-scroll className="ani-slide-left max-md:w-[50vw] max-dt:w-[33.75vw]">
                        <img src="/assets/images/img-intro-01.png" alt="NFTってなんだ？" />
                    </figure>
                    <div className="flex-1 md:pt-[7.778vw] dt:pt-28">
                        <div className="leading-[2]">
                        <p data-scroll className="ani-fade-up md:text-[18px] text-[15px] max-w-[526px]">
                            NFTとは「世界にひとつだけの証明番号」を画像やビデオ、3D、音楽、音声などに付与する技術を活用して発行されるものです。証明番号は第三者から書き換えられたりするリスクがなく、デジタルの世界に&quot;ひとつだけ&quot;であることを証明するために使われています。
                        </p>
                        <div className="flex pt-3 max-dt:gap-2 max-md:flex-col">
                            <p data-scroll className="ani-fade-up md:text-[16px] text-[13px] flex-1">
                            ※Non-Fungible Token（ノンファンジブルトークン）の略称で、日本語では「非代替性トークン」と訳されることが多いです。
                            </p>
                            <figure data-scroll className="ani-slide-right min-[860px]:-mt-[4.444vw] dt:-mt-16 dt:-ml-5 max-md:w-[40vw] max-dt:w-[19.514vw] max-md:ml-auto">
                                <img src="/assets/images/img-teacher.png" alt="" />
                            </figure>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
        <div className="pl-8 md:pl-[70px] mt-12 md:mt-24 lg:mt-[46px] relative">
            <span data-scroll className="ani-fade-up absolute md:top-[-86px] top-[-40px] md:left-[70px] left-[40px] z-10">
                <img className="max-md:w-[280px] animate-[anim-bounce_1s_infinite_ease-in-out]" src="/assets/images/bubble.png" alt="" />
            </span>
            <div data-scroll className="ani-fade-up">
            <Swiper
                slidesPerView={'auto'}
                loop={true}
                spaceBetween={20}
                className="mySwiper"
            >
                {data.map((item, index) =>(
                    <SwiperSlide key={index} className="!size-[300px] md:!size-[420px] relative rounded-[20px] overflow-hidden">
                        <figure className="w-full h-full">
                            <img className="w-full h-full object-cover object-center" src={item.image} alt="" />
                        </figure>
                        <div className="absolute inset-x-0 bottom-0 p-2.5">
                            <div className="h-[113px] bg-white/80 rounded-[20px] px-5 py-2.5">
                                <h5 className="font-extrabold md:text-[20px] text-[16px]">{item.title}</h5>
                                <p className="md:text-[16px] text-[12px]">{item.text}</p>
                            </div>
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

export default Introduction;
