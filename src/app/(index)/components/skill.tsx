'use client'

import { useLayoutEffect, useRef, useState } from 'react'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const getIsMobile = () => {
  return typeof window !== 'undefined' && window.innerWidth <= 768 // Check if window is defined
}

const item = [
  {
    image: '/assets/images/skill-01.svg',
    title: '経営戦略',
    text: '市場動向のリアルタイム分析により、より迅速な意思決定が可能に。',
    example: '競合の価格変更に即日対応し、売上の落ち込みを防止。',
  },
  {
    image: '/assets/images/skill-02.svg',
    title: '商品開発',
    text: '顧客の声や市場トレンドを AIが分析し、開発の方向性を提案。',
    example: 'SNSの話題から新アイデアを抽出し、商品化のリードタイムを短縮。',
  },
  {
    image: '/assets/images/skill-03.svg',
    title: 'マーケティング',
    text: '顧客セグメントごとの反応を予測し、効果的な広告配信を実現。',
    example: 'AIによる配信最適化で、同じ予算でのリーチ数が1.5倍に。',
  },
  {
    image: '/assets/images/skill-04.svg',
    title: '営業支援',
    text: '顧客の行動パターンを分析し、最適なアプローチのタイミングを提案。',
    example:
      '見込み客の Web サイト閲覧履歴から興味を推測し、的確な提案が可能に。',
  },
  {
    image: '/assets/images/skill-05.svg',
    title: '財務管理',
    text: '請求書や経費精算書の異常を自動検出し、不正や誤りを未然に防止。',
    example: '経費精算の承認プロセスが半自動化され、処理時間が40%短縮。',
  },
  {
    image: '/assets/images/skill-06.svg',
    title: '市場分析',
    text: 'SNSや口コミデータの分析から、新たな顧客ニーズを早期に発見。',
    example: '特定地域での需要増加を察知し、的確な在庫配置を実現。',
  },
  {
    image: '/assets/images/skill-07.svg',
    title: '業務自動化',
    text: '定型的な文書作成やデータ入力作業を AI が代行。',
    example: '請求書処理時間が従来の3分の1に短縮、入力ミスも大幅に減少。',
  },
  {
    image: '/assets/images/skill-08.svg',
    title: '業務効率化',
    text: '会議の音声をリアルタイムで文字起こし、要約作成を自動化。',
    example: '1時間の会議の要点を5分で共有可能に、情報伝達のスピードが向上。',
  },
  {
    image: '/assets/images/skill-09.svg',
    title: '顧客対応',
    text: 'AIチャットボットによる24時間対応で、顧客満足度が向上。',
    example: '夜間の問い合わせ対応率が100%に、翌日の対応遅れがゼロに。',
  },
  {
    image: '/assets/images/skill-10.svg',
    title: 'データ分析',
    text: '大量の非構造化データから、有用な情報を短時間で抽出。',
    example: '数千件の顧客レビューから、製品改善のヒントを数分で発見。',
  },
]

const Skill = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isMobile, setIsMobile] = useState(getIsMobile())

  useLayoutEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(getIsMobile())
    }

    window.addEventListener('resize', updateIsMobile)
    updateIsMobile()

    return () => {
      window.removeEventListener('resize', updateIsMobile)
    }
  }, [])

  useLayoutEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const dpr = window.devicePixelRatio || 1

    const context = canvas.getContext('2d')!
    context.imageSmoothingEnabled = false

    if (isMobile) {
      canvas.width = 768 * dpr
      canvas.height = 1544 * dpr
    } else {
      canvas.width = 960 * dpr
      canvas.height = 683 * dpr
    }

    const frameCount = isMobile ? 106 : 80
    const imagePath = isMobile
      ? '/assets/images/skill-sp/'
      : '/assets/images/skill/'
    const currentFrame = (index: number) =>
      isMobile
        ? `${imagePath}png-sequence-smartphone${index
            .toString()
            .padStart(3, '0')}.png`
        : `${imagePath}png-sequence${index.toString().padStart(2, '0')}.png`

    const images: HTMLImageElement[] = []
    const animationObject = { frame: 0 }

    for (let i = 0; i < frameCount; i++) {
      const img = new Image()
      img.src = currentFrame(i)
      images.push(img)
    }

    const ctx = gsap.context(() => {
      gsap.to(animationObject, {
        frame: frameCount - 1,
        snap: 'frame',
        ease: 'none',
        scrollTrigger: {
          trigger: '.canvas-container',
          start: 'top top',
          end: isMobile ? '+=1000' : '+=2000',
          pin: '.pin',
          anticipatePin: 1,
          invalidateOnRefresh: true,
          scrub: 0.1,
        },
        onUpdate: render,
      })

      gsap.utils.toArray<Element>('.fade').forEach((el: Element) => {
        gsap.from(el, {
          autoAlpha: 0,
          duration: 0.5,
          ease: 'Power2.easeInOut',
          scrollTrigger: {
            trigger: el,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        })
      })
    })

    images[0].onload = render

    function render() {
      if (!canvas) return
      context.clearRect(0, 0, canvas.width, canvas.height)
      context.drawImage(
        images[animationObject.frame],
        0,
        0,
        canvas.width,
        canvas.height
      )
    }

    return () => {
      ctx.revert()
    }
  }, [isMobile]) // Re-run effect when isMobile changes

  return (
    <div className="bg-[#174D59]">
      <div className="overflow-hidden">
        <div className="pin relative h-svh w-screen">
          <div className="canvas-container mx-auto flex h-svh w-full max-w-[960px] items-center justify-center pt-[86px] md:pt-[66px]">
            <canvas ref={canvasRef} className="w-full" />
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[960px] px-5 pb-12">
        <div className="mx-auto mb-8 aspect-[3/1] w-full max-w-[150px] bg-[#B0FFE7] [clip-path:polygon(100%_0,0_0,50%_100%)]"></div>
        <div className="mb-8 text-center text-[21px] font-bold text-white md:text-[24px]">
          AIスキルが事業に取り込まれると
          <br className="max-md:hidden" />
          各領域の生産性が大幅に向上します
          <br />
          <br />
          例えば...
        </div>
        <div className="grid justify-center gap-6 md:grid-cols-2 lg:grid-cols-3">
          {item.map(({ image, title, text, example }, i) => (
            <div
              className={`fade bg-[#FFFCE2] ${
                i == 0 && 'lg:col-span-3 lg:mx-auto lg:max-w-[290px]'
              }`}
              key={i}
            >
              <div className="p-3">
                <div className="mb-3 grid grid-cols-[64px_1fr] items-center gap-3">
                  <div className="flex aspect-square items-center justify-center rounded-md border border-[#9E9E9E] bg-white p-2">
                    <img src={image} alt="" />
                  </div>
                  <div className="font-bold">{title}</div>
                </div>
                <div className="bordr-[#D6D6D6] border bg-white p-3 text-[16px] font-medium leading-tight">
                  <div className="mb-4 border-b border-black/30 pb-6">
                    {text}
                  </div>
                  例：{example}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skill
