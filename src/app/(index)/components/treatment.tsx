'use client'

import { useRef } from 'react'

import { gsap } from 'gsap'

import useScrollAnimations from '@/hooks/useScrollAnimations'

const Treatment = () => {
  const ref = useScrollAnimations()
  const contentRef = useRef(null)
  const arrowRef = useRef(null)
  const isClosedRef = useRef(true)
  const handleExpanderClick = () => {
    const $content = contentRef.current
    const $arrow = arrowRef.current
    if (isClosedRef.current) {
      gsap.set($content, { height: 'auto' })
      gsap.from($content, { duration: 0.2, height: 0 })
      gsap.to($arrow, {
        duration: 0.1,
        rotation: -90,
        transformOrigin: 'center',
      })
    } else {
      gsap.to($content, { duration: 0.2, height: 0 })
      gsap.to($arrow, { duration: 0.1, rotation: 0 })
    }
    isClosedRef.current = !isClosedRef.current
  }

  return (
    <section ref={ref} className="px-5 pt-[50px] md:pt-[70px]">
      <div className="relative mx-auto w-full max-w-[510px]">
        <div className="fade-up flex items-center justify-center rounded-[20px] bg-[linear-gradient(90deg,_rgba(255,117,195,0.3)_0%,_rgba(255,166,71,0.3)_20%,_rgba(255,232,63,0.3)_40%,_rgba(159,255,91,0.3)_60%,_rgba(112,226,255,0.3)_80%,_rgba(201,147,255,0.3)_100%)] p-3 md:p-5">
          <div className="h-full w-full bg-white px-3 pb-5 pt-10">
            <div className="flex justify-center">
              <p className="flex h-12 items-center justify-center rounded-full bg-[#F25A29] px-5 text-[20px] tracking-wider text-white md:h-[54px] md:text-[28px]">
                【 特別待遇 】
              </p>
            </div>
            <button
              className="flex w-full items-center justify-between gap-5"
              onClick={handleExpanderClick}
            >
              <h5 className="mt-4 text-left text-[20px] font-bold leading-[1.2] tracking-widest md:text-[28px]">
                17LIVE公式ライバーの
                <br />
                秘密って ？？
              </h5>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 70 70"
                fill="none"
              >
                <rect
                  ref={arrowRef}
                  x="31.9999"
                  width="6"
                  height="70"
                  fill="#0F0F0F"
                />
                <rect
                  x="70"
                  y="32"
                  width="6"
                  height="70"
                  transform="rotate(90 70 32)"
                  fill="#0F0F0F"
                />
              </svg>
            </button>
            <p ref={contentRef} className="mt-7 h-0 overflow-hidden">
              <span className="inline-block text-[14px] leading-[1.3] tracking-widest md:text-[16px]">
                実は17LIVE公式ライバーは、報酬のメインになる投げ銭を貰える割合が非公式ライバーとは大きく異なります。
                <br />
                <br />
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
              <span className="inline-block text-[16px] font-bold leading-[1.8] md:text-[18px]">
                ● おしゃべりが好き！
                <br />
                ● ウェブの仕事がしたい！
                <br />
                ● ファンを増やしたい！
                <br />
                ● タレント業の宣伝がしたい！
                <br />
                <span className="inline-block text-[13px] font-light leading-none md:text-[14px]">
                  ※モデル・アイドル・女優・俳優・ダンサー・アーティスト等
                </span>
                <br />
                ● 配信を収入にしたい！
                <br />
                ● 歌、ダンス、マジック、楽器などの特技がある！
                <br />
              </span>
              <br />
              <br />
              <span className="inline-block text-[14px] md:text-[16px]">
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
  )
}

export default Treatment
