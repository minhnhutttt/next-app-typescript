"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";
import { useEffect, useRef } from "react";
import confetti from "canvas-confetti";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Đăng ký plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);
const data = [
    {
        id: '01',
        image: '/assets/images/deals-01.png',
        title: (<>好きなお店のNFTクーポンを<br />コレクション！</>),
        text: '大好きなお店のクーポンを簡単コレクション！かさばらず、色褪せない！可愛いデザインのクーポンも、捨てずにそのままコレクションできちゃいます！'
    },
    {
        id: '02',
        image: '/assets/images/deals-02.png',
        title: (<>NFTクーポン保有者だけの<br />サプライズ特典をゲット！</>),
        text: '大好きなお店のクーポンを簡単コレクション！かさばらず、色褪せない！可愛いデザインのクーポンも、捨てずにそのままコレクションできちゃいます！'
    },
    {
        id: '03',
        image: '/assets/images/deals-03.png',
        title: (<>特別なサービスへのアクセス権！</>),
        text: 'NFTを保有していることで、限定的なサービス、特定のウェブサービスやイベントへのアクセスが可能になることも！'
    }
]

const Deals = () => {
    const ref = useScrollAnimations();
    const confettiSectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      ScrollTrigger.create({
        trigger: confettiSectionRef.current,
        start: 'top +=30%', 
        onEnter: () => fireConfetti(), 
      });
    }, []);
  
    const fireConfetti = () => {
      confetti({
        particleCount: 1000,
        spread: 1200,
        origin: { y: 0.6 },
        scalar: 1.5,
      });
    };
  return (
    <section ref={confettiSectionRef} className="relative overflow-hidden bg-[url('/assets/images/bg-03.png')] bg-cover md:bg-[length:100%_100%] bg-center pb-[70px] px-5 z-20">
        <div className="mt-32 md:mt-24">
        <div className="fade-up flex justify-center items-start gap-2 md:gap-12">
                <span className="max-md:hidden"><img src="/assets/images/ribbon-left.png" alt="" /></span>
                <h3 className="mt-5 md:mt-12">
                    <img src="/assets/images/deals-title.png" alt="" />
                </h3>
                <span className="max-md:hidden"><img src="/assets/images/ribbon-right.png" alt="" /></span>
            </div>
        <div className="w-full max-w-[1285px] mx-auto  max-md:max-w-[380px] relative">
            
            <div className="flex flex-wrap justify-center gap-8 mt-12">
                {data.map((item,index)=> (
                    <div className="fade-up w-full md:w-[407px] border border-black rounded-[33px] overflow-hidden bg-white" key={index}>
                        <div className="bg-[#65258B] h-[60px] flex items-center justify-center text-white md:text-[24px] text-[20px] font-black">
                            お得ポイント<span className="md:text-[34px] text-[24px]">{item.id}</span>
                        </div>
                        <figure>
                            <img src={item.image} alt="" />
                        </figure>
                        <div className="p-5 pb-7 md:pb-10">
                            <h5 className="text-center md:text-[24px] text-[18px] font-black leading-[1.4] md:h-[68px] flex items-center justify-center">{item.title}</h5>
                            <p className="md:text-[19px] text-[17px] font-medium px-2 mt-4 tracking-wider leading-[1.35]">
                                {item.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <p className="fade-up text-center md:text-[42px] text-[20px] font-black font-mplus text-white leading-[1.2] mt-9">
                宝の地図を広げて、<br />
                ワクワクするお得体験を楽しもう！<br />
                年間パスポートNFTを今だけ無料配布中！
            </p>
            <div className="fade-up flex justify-center relative z-10">
                <div className="relative pt-32 md:pt-48 xl:pt-20 px-10 md:px-5">
                    <a href="https://lin.ee/5WfLOMX" target="_blank" className=""><img className="max-md:w-[260px]" src="/assets/images/line-button.png" alt="" /></a>
                    <div className="absolute xl:left-full max-md:right-0 md:left-1/2 top-5 aspect-[375/159] w-[240px] md:w-[375px] pl-10 bg-[url('/assets/images/bubble.png')] bg-cover flex items-center justify-center">
                        <p className="md:text-[22px] text-[17px] font-medium">DIVER Walletの<br />
                        アドレスを送るだけ！</p>
                    </div>
                </div>
            </div>
            <div className="fade-up max-xl:hidden absolute bottom-[80px] left-[60px]"><img src="/assets/images/deco-01.png" alt="" /></div>
            <div className="fade-up max-xl:hidden absolute bottom-0 right-0"><img src="/assets/images/deco-02.png" alt="" /></div>
        </div>
        </div>
    </section>
  );
};

export default Deals;
