"use client";

import { useEffect } from "react";
import gsap, { Power0 } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
gsap.config({
  nullTargetWarn: false,
})

const GlobalDigitalAgency = () => {
  useEffect(() => {
    const marquiseLeft = document.querySelector(".marquise-left");
    const marquiseRight = document.querySelector(".marquise-right");
    let ctx = gsap.context(() => {
        gsap
        .timeline({
          scrollTrigger: {
            trigger: marquiseLeft,
            start: 'top bottom',
            end: 'bottom top',
            toggleActions: 'play pause reverse pause',
            scrub: true,
          },
        })
        .to(marquiseLeft, {
          xPercent: 10,
          ease: Power0.easeInOut,
        })
        gsap
        .timeline({
          scrollTrigger: {
            trigger: marquiseRight,
            start: 'top bottom',
            end: 'bottom top',
            toggleActions: 'play pause reverse pause',
            scrub: true,
          },
        })
        .to(marquiseRight, {
          xPercent: -10,
          ease: Power0.easeInOut,
        })
    });

    return () => ctx.revert();
  }, []);
  return (
    <>
      <section className="mb-[256px] max-md:mb-[82px]">
        <div className="container">
          <div>
            <div className="grid grid-cols-[.6fr_.4fr] items-end max-md:grid-cols-1 gap-[4vw] mb-[4vw]">
              <div>
                <img src="/assets/images/techno_toppage.png" alt="" />
              </div>
              <div className="font-anton text-[calc(24px_+_8vw)] leading-none">
                GLOBAL DIGITAL AGENCY
              </div>
            </div>
            <div className="font-sans text-[24px] max-md:text-[16px] mb-[32px] pb-[32px] leading-[1.6] border-b border-solid border-b-[rgba(172,172,172,0.3)]">
            TECHNO LLCは、テクノロジーを駆使し、お客様のビジネスの成長と革新をサポートするグローバルなパートナーです。私たちは、調査、代行、デジタルマーケティングの3つの領域において、豊富な経験と高い専門性を持つプロフェッショナルチームを擁しています。お客様のニーズに合わせたカスタマイズされたソリューションを提供し、ビジネスの効率化と最適化を実現します。AIをはじめとして、常に最新のテクノロジーとトレンドを取り入れ、お客様の競争力強化に貢献します。TECHNO LLCは、お客様との長期的なパートナーシップを大切にし、共に成長することを目指しています。
            </div>
            <div className="grid grid-cols-3 max-md:grid-cols-1 gap-[32px] font-sans">
              <div>
                <div className="text-[calc(21px_+_2vw)] uppercase">
                調査力と分析力
                </div>
                <div className="text-[18px] max-md:text-[16px] leading-[1.6]">
                ビジネスの意思決定を支える調査と分析<br /><br />私たちは、お客様のビジネスに必要な情報を収集し、専門的な視点から分析します。市場動向、競合他社、顧客ニーズなど、あらゆる角度からデータを収集し、意思決定に役立つ洞察を提供します。
                </div>
              </div>
              <div>
                <div className="text-[calc(21px_+_2vw)] uppercase">
                代行の効率性と効果
                </div>
                <div className="text-[18px] max-md:text-[16px] leading-[1.6]">
                専門性と経験を活かした業務代行サービス<br /><br />
                私たちは、広告運用、営業活動、ECプラットフォームへの出品など、様々な業務を代行します。豊富な経験と専門知識を活かし、効率的かつ効果的にお客様の業務を遂行します。これにより、お客様は本業に集中し、ビジネスの成長に注力できます。
                </div>
              </div>
              <div>
                <div className="text-[calc(21px_+_2vw)] uppercase">
                デジタル領域の革新性
                </div>
                <div className="text-[18px] max-md:text-[16px] leading-[1.6]">
                最新のデジタルマーケティング戦略で競争力を強化<br /><br />私たちは、デジタル領域における最新のトレンドと技術を常に取り入れ、お客様のビジネスに活用します。データ分析に基づいたターゲティング、クリエイティブな広告制作、最適なチャネル選択など、効果的なデジタルマーケティング戦略を立案・実行します。
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="scroll">
        <div className="overflow-hidden">
          <div>
            <div className="marquise-right font-anton text-[calc(24px_+_12vw)] whitespace-nowrap stroke leading-none">
              GLOBAL DIGITAL AGENCY GLOBAL DIGITAL AGENCY GLOBAL DIGITAL AGENCY
            </div>
          </div>
        </div>
        <div className="mb-[256px] max-md:mb-[82px] overflow-hidden">
          <div>
            <div className="marquise-left font-anton text-[calc(24px_+_12vw)] whitespace-nowrap stroke leading-none relative left-[-20%]">
              GLOBAL DIGITAL AGENCY GLOBAL DIGITAL AGENCY GLOBAL DIGITAL AGENCY
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GlobalDigitalAgency;
