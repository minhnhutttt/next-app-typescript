"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";
import { useRef, useState } from "react";
import { gsap } from "gsap";
const Treatment = () => {
  const ref = useScrollAnimations();
  const contentRef = useRef(null);
  const arrowRef = useRef(null);
  const isClosedRef = useRef(true);
  const handleExpanderClick = () => {
    const $content = contentRef.current;
    const $arrow = arrowRef.current;
    if (isClosedRef.current) {
      gsap.set($content, { height: "auto" });
      gsap.from($content, { duration: 0.2, height: 0 });
      gsap.to($arrow, { duration: 0.1, rotation: -90, transformOrigin: 'center'});
    } else {
      gsap.to($content, { duration: 0.2, height: 0 });
      gsap.to($arrow, { duration: 0.1, rotation: 0 });
    }
    isClosedRef.current = !isClosedRef.current;
  };
  return (
    <section ref={ref} className="px-5 pt-[50px] md:pt-[70px]">
      <div className="relative mx-auto w-full max-w-[510px]">
        <div className="fade-up bg-[linear-gradient(90deg,_rgba(255,117,195,0.3)_0%,_rgba(255,166,71,0.3)_20%,_rgba(255,232,63,0.3)_40%,_rgba(159,255,91,0.3)_60%,_rgba(112,226,255,0.3)_80%,_rgba(201,147,255,0.3)_100%)] md:p-5 p-3 rounded-[20px] flex justify-center items-center">
          <div className="w-full h-full pt-10 pb-5 px-3 bg-white">
            <div className="flex justify-center">
              <p className="md:text-[28px] text-[20px] text-white bg-[#F25A29] rounded-full h-12 md:h-[54px] flex items-center justify-center tracking-wider px-5">
                【 特別待遇 】
              </p>
            </div>
            <button className="flex items-center justify-between gap-5 w-full" onClick={handleExpanderClick}>
              <h5 className="text-left md:text-[28px] text-[20px] font-bold tracking-widest mt-4 leading-[1.2]">
                17LIVE公式ライバーの
                <br />
                秘密って ？？
              </h5>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 70 70" fill="none">
              <rect ref={arrowRef} x="31.9999" width="6" height="70" fill="#0F0F0F"/>
              <rect x="70" y="32" width="6" height="70" transform="rotate(90 70 32)" fill="#0F0F0F"/>
            </svg>
            </button>
            <p ref={contentRef} className="mt-7 overflow-hidden h-0">
              <span className="md:text-[16px] text-[14px] leading-[1.3] tracking-widest inline-block">
                実は17LIVE公式ライバーは、報酬のメインになる投げ銭を貰える割合が非公式ライバーとは大きく異なります。
                <br /><br />
                また一般ライバーよりもアプリ内で人目につきやすく、公式ライバー限定のイベントや、人気ライバーには広告などのオファーもあります。
                <br />
                 <br />
                実際に月に数百万円稼ぐライバーも、ほとんどが17LIVE公式ライバーです。
                 <br />
                そんな公式ライバーですが、実は、「何の特技もない、全く操作方法もわからない、ただの一般人です」というところから始めたという方がほとんどですので、勇気を出して挑戦してみましょう♪
                <br />
                <br />
                もちろん
                <br />
                <br />
              </span>
              <span className="font-bold md:text-[18px] text-[16px] leading-[1.8] inline-block">
                ● おしゃべりが好き！
                <br />
                ● ウェブの仕事がしたい！
                <br />
                ● ファンを増やしたい！
                <br />
                ● タレント業の宣伝がしたい！
                <br />
                <span className="font-light md:text-[14px] text-[13px] leading-none inline-block">※モデル・アイドル・女優・俳優・ダンサー・アーティスト等</span>
                <br />
                ● 配信を収入にしたい！
                <br />
                ● 歌、ダンス、マジック、楽器などの特技がある！
                <br />
              </span>
              <br />
              <br />
              <span className="inline-block md:text-[16px] text-[14px]">
              という方にもピッタリですよ♪
              <br />
               <br />
              ※17LIVE公式ライバーでは事務所契約・直接契約どちらでも報酬の割合は同じです。しかし直接契約では相談サポートは一切受けられないのが大きな違いです。
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Treatment;
