'use client'

import { useEffect } from 'react'

import gsap, { Power0 } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
gsap.config({
  nullTargetWarn: false,
})

const GlobalDigitalAgency = () => {
  useEffect(() => {
    const marquiseLeft = document.querySelector('.marquise-left')
    const marquiseRight = document.querySelector('.marquise-right')
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
    })

    return () => ctx.revert()
  }, [])
  return (
    <>
      <section className="mb-[256px] max-md:mb-[82px]">
        <div className="container">
          <div>
            <div className="mb-[4vw] grid grid-cols-[.6fr_.4fr] items-end gap-[4vw] max-md:grid-cols-1">
              <div>
                <img src="/assets/images/techno_toppage.png" alt="" />
              </div>
              <div className="font-anton text-[calc(24px_+_6.5vw)] leading-none">
                Innovate Create Elevate
              </div>
            </div>
            <div className="mb-[32px] border-b border-solid border-b-[rgba(172,172,172,0.3)] pb-[32px] text-[24px] leading-[1.6] max-md:text-[16px]">
              株式会社
              Yumeaciは、デジタル技術とクリエイティブな発想を活かし、お客様のビジネスの成長と革新を支えるグローバルパートナーです。私たちは、WEB制作・システム開発、アパレル製品やノベルティグッズの企画の分野で豊富な経験と専門知識を持つチームが、お客様に最適なソリューションを提供します。Reactをはじめとする最新の技術を駆使し、カスタマイズされたウェブサイトやシステムを通じて、業務の効率化と最適化を実現します。
              <br />
              さらに、アパレルやノベルティグッズの企画力で、お客様のブランド価値を高めるお手伝いをしています。
              <br />
              株式会社
              Yumeaciは、お客様との長期的なパートナーシップを大切にし、共に未来に向かって成長し続けることを目指しています。
            </div>
            <div className="grid grid-cols-3 gap-[32px] max-md:grid-cols-1">
              <div>
                <div className="text-[calc(18px_+_2vw)] uppercase">
                  WEB(ホームページ)制作
                </div>
                <div className="text-[18px] leading-[1.6] max-md:text-[16px]">
                  お客様のビジネス成長を支えるWeb制作
                  <br />
                  <br />
                  私たちは、クライアントのビジネス目標を理解し、それに最適なWebサイトを制作します。市場動向、競合分析、ユーザーのニーズを基に、デザインから機能性までを細部にわたり考慮し、集客力と使いやすさを兼ね備えたWebサイトを提供します。最新の技術であるReactを活用し、ビジネスの成長を支える高パフォーマンスなWebソリューションを構築します。
                </div>
              </div>
              <div>
                <div className="text-[calc(18px_+_2vw)] uppercase">
                  システム開発事業
                </div>
                <div className="text-[18px] leading-[1.6] max-md:text-[16px]">
                  専門性と経験を活かしたシステム開発サービス
                  <br />
                  <br />
                  私たちは、業務効率化やビジネスの拡大に向けたシステム開発を提供します。豊富な経験と専門的な技術を活かし、業務プロセスを自動化し、効率化するためのカスタマイズシステムを構築します。これにより、お客様は日常業務にかかる負担を軽減し、本業に集中することができ、さらなるビジネス成長に専念できます。私たちのシステム開発は、迅速かつ効果的にお客様のニーズを満たすことを目指しています。
                </div>
              </div>
              <div>
                <div className="text-[calc(18px_+_2vw)] uppercase">
                  アパレル製品・ノベルティグッズの企画
                </div>
                <div className="text-[18px] leading-[1.6] max-md:text-[16px]">
                  最新のトレンドを取り入れたアパレル製品・ノベルティグッズの企画
                  <br />
                  <br />
                  私たちは、常に最新のトレンドとクリエイティブなアイデアを取り入れ、お客様のブランド価値を高めるアパレル製品やノベルティグッズを企画・提案します。ターゲット市場のデータ分析に基づき、デザイン、素材選定、製造まで、すべてのプロセスを最適化し、効果的なプロモーションツールとして活用できる商品を提供します。これにより、お客様の競争力を強化し、ブランドの認知度向上をサポートします。
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="scroll">
        <div className="overflow-hidden">
          <div>
            <div className="marquise-right stroke whitespace-nowrap font-anton text-[calc(24px_+_12vw)] leading-none">
              GLOBAL DIGITAL AGENCY GLOBAL DIGITAL AGENCY GLOBAL DIGITAL AGENCY
            </div>
          </div>
        </div>
        <div className="mb-[256px] overflow-hidden max-md:mb-[82px]">
          <div>
            <div className="marquise-left stroke relative left-[-20%] whitespace-nowrap font-anton text-[calc(24px_+_12vw)] leading-none">
              GLOBAL DIGITAL AGENCY GLOBAL DIGITAL AGENCY GLOBAL DIGITAL AGENCY
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default GlobalDigitalAgency
