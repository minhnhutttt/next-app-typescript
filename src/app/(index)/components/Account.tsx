"use client";

import { useEffect, useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.config({
  nullTargetWarn: false,
});

const Account: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef<boolean>(false);

  const animateCountUp = (element: HTMLElement, targetValue: number, duration: number = 3000): void => {
    const startValue: number = 0;
    const startTime: number = performance.now();
    
    const plusIcon = element.querySelector('.ic-plus') as HTMLImageElement;
    
    const updateCount = (currentTime: number): void => {
      const elapsedTime: number = currentTime - startTime;
      const progress: number = Math.min(elapsedTime / duration, 1);
      
      const easedProgress: number = 1 - Math.pow(1 - progress, 3);
      const currentValue: number = Math.floor(startValue + (targetValue - startValue) * easedProgress);
      
      if (targetValue >= 10000000) {
        if (progress < 1) {
          (element.childNodes[0] as Text).textContent = currentValue.toString();
        } else {
          const manValue: number = Math.floor(currentValue / 10000);
          (element.childNodes[0] as Text).textContent = manValue.toString();
        }
      } else {
        (element.childNodes[0] as Text).textContent = currentValue.toString();
      }
      
      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        if (plusIcon) {
          gsap.to(plusIcon, {
            width: 'auto',
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: "back.out(1.7)",
            delay: 0.2
          });
        }
      }
    };
    
    requestAnimationFrame(updateCount);
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const countElements = sectionRef.current.querySelectorAll<HTMLElement>('[data-count]');
    
    countElements.forEach((element) => {
      const plusIcon = element.querySelector('.ic-plus') as HTMLImageElement;
      if (plusIcon) {
        gsap.set(plusIcon, { opacity: 0, scale: 0.5, width: 0 });
      }
    });

    const scrollTrigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 80%",
      end: "bottom 20%",
      onEnter: () => {
        if (!hasAnimated.current) {
          hasAnimated.current = true;
          
          countElements.forEach((element: HTMLElement) => {
            const dataCount = element.getAttribute('data-count');
            const targetValue = dataCount ? parseInt(dataCount, 10) : 0;
            animateCountUp(element, targetValue);
          });
        }
      },
    });

    return () => {
      scrollTrigger.kill();
    };
  }, []);

  return (
    <section className="overflow-hidden px-[15px]" ref={sectionRef}>
      <div className="bg-[linear-gradient(158deg,_#D842D9_0%,_#9A35FC_100%)] md:rounded-[100px] rounded-[50px] py-16 md:py-[100px] px-4 text-white">
        <h2 className="sm:text-[48px] text-[24px] font-bold text-center tracking-widest">
          応援が直接届く、<br />カタチに残る新しい
        </h2>
        <div className="flex justify-center pt-1">
          <img className="max-md:w-[200px]" src="/assets/images/tag.svg" alt="" />
        </div>
        <p className="sm:text-[48px] text-[24px] font-bold text-center tracking-widest">
          をあなたの日常にも。
        </p>
        <div className="flex justify-center items-center flex-col sm:pt-16 pt-10">
          <p className="sm:text-[36px] text-[20px] font-medium tracking-widest">ユーザー急拡大中</p>
          <img src="/assets/images/line.png" alt="" />
        </div>
        <div className="grid grid-cols-2 sm:mt-11 mt-6 md:gap-[30px] gap-4">
          <div className="bg-white md:rounded-[70px] rounded-[36px] flex items-center justify-center flex-col aspect-square">
            <p className="font-roboto font-black md:text-[64px] text-[32px] text-[#771DD3] leading-tight flex items-center" data-count="700">
              0<span><span className="ic-plus inline-flex"><img src="/assets/images/ic-plus.svg" alt="" className="inline-block max-md:w-5 mb-3 md:mb-4" /></span></span>
            </p>
            <p className="sm:text-[24px] text-[13px] font-medium text-black">登録FAVER総数</p>
          </div>
          <div className="bg-white md:rounded-[70px] rounded-[36px] flex items-center justify-center flex-col aspect-square">
            <p className="font-roboto font-black md:text-[64px] text-[32px] text-[#771DD3] leading-tight flex items-center" data-count="300">
              0<span><span className="ic-plus inline-flex"><img src="/assets/images/ic-plus.svg" alt="" className="inline-block max-md:w-5 mb-3 md:mb-4" /></span></span>
            </p>
            <p className="sm:text-[24px] text-[13px] font-medium text-black">発行コイン数</p>
          </div>
          <div className="bg-white md:rounded-[70px] rounded-[36px] flex items-center justify-center flex-col aspect-square">
            <p className="font-roboto font-black md:text-[64px] text-[32px] text-[#771DD3] leading-tight flex items-center" data-count="10000">
              0<span><span className="ic-plus inline-flex"><img src="/assets/images/ic-plus.svg" alt="" className="inline-block max-md:w-5 mb-3 md:mb-4" /></span></span>
            </p>
            <p className="sm:text-[24px] text-[13px] font-medium text-black">累計コインホルダー数</p>
          </div>
          <div className="bg-white md:rounded-[70px] rounded-[36px] flex items-center justify-center flex-col aspect-square">
            <p className="font-roboto font-black md:text-[64px] text-[32px] text-[#771DD3] leading-tight flex items-center" data-count="30000000">
              0 <span className="ic-plus flex items-center"><span className="sm:text-[20px] text-[14px] leading-none inline-flex flex-col"><span>万</span><span>人</span></span><span><img src="/assets/images/ic-plus.svg" alt="" className="inline-block max-md:w-5 mb-2" /></span></span>
            </p>
            <p className="sm:text-[24px] text-[13px] font-medium text-black">FAVER総フォロワー数</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Account;