'use client'
import useScrollAnimations from '@/hooks/useScrollAnimations'
import { ReactNode, useEffect, useRef } from 'react'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Button from '@/components/button'
import UnderlineText from '@/components/underlineText'

gsap.registerPlugin(ScrollTrigger)
gsap.config({
  nullTargetWarn: false,
})

const Item = ({
  step,
  title,
  list,
  children,
  rect,
}: {
  step: string
  title: string
  list: string[]
  children: ReactNode
  rect?: string
}) => (
  <div
    className={`${rect} step-item absolute inset-0 flex h-[400px] w-[300px] rounded-[51px] border border-black bg-white pb-6 pt-5 max-md:flex-col md:h-[434px] md:w-[657px] md:pb-[42px] md:pt-[34px]`}
  >
    <div className="flex items-center justify-center border-black md:w-[225px] md:border-r">
      <img className="max-md:h-20" src={step} alt="" />
    </div>
    <div className="flex flex-1 flex-col justify-between pl-4 pr-4 md:pr-8">
      <div className="">
        <h5 className="text-[16px] font-bold md:text-[26px]">{title}</h5>
        <div className="mt-2">
          {list.map((item, index) => (
            <p
              className="flex text-[13px] font-medium md:text-[19px]"
              key={index}
            >
              <span>・</span>
              <span>{item}</span>
            </p>
          ))}
        </div>
      </div>

      <div className="flex justify-end">{children}</div>
    </div>
  </div>
)

const Steps = () => {
  const ref = useScrollAnimations()
  const stepsRef = useRef<HTMLDivElement | null>(null)
  const bgRef = useRef<HTMLDivElement | null>(null)
  const buttonRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    let ctx = gsap.context(() => {
      if (stepsRef.current) {
        const stepItems = stepsRef.current.querySelectorAll('.step-item')

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: stepsRef.current,
            pin: true,
            start: 'top top',
            end: '+=4000',
            scrub: true,
          },
        })

        stepItems.forEach((item, index) => {
          tl.to(
            item,
            {
              y: '-130%',
              rotate: '-3deg',
              duration: 1,
            },
            index * 0.5
          )
        })
        tl.from(bgRef.current, {
          autoAlpha: 0,
          y: 30,
          scale: 0.7,
          duration: 1.3,
        })
        tl.from(buttonRef.current, {
          autoAlpha: 0,
          y: 30,
          duration: 1.3,
        })
      }
    })

    return () => ctx.revert()
  }, [])
  return (
    <section ref={ref} className="relative overflow-hidden bg-[#C5E1E5] ">
      <div className="mx-auto w-full overflow-hidden pt-[60px] md:pt-[84px] ">
        <div className="mx-auto flex w-full max-w-[834px] justify-center px-5">
          <div>
            <h3 className="fade-up relative text-[22px] font-black leading-[1.3] tracking-[-0.018em] md:text-[42px]">
              7ステップ、<UnderlineText>10クリックで広告出稿。</UnderlineText>
            </h3>
            <p className="fade-up mt-2 text-[16px] font-bold md:text-[23px]">
              用意するのはLPのURLとGoogle広告アカウントだけ。
            </p>
          </div>
        </div>
        <div
          ref={stepsRef}
          className="flex h-screen w-full flex-col justify-center  pb-14 pt-24 max-md:px-5 md:py-24"
        >
          <div className="relative pb-4">
            <span
              ref={bgRef}
              className="absolute inset-0 bg-[url('/assets/images/step-bg.svg')] bg-center bg-no-repeat max-md:bg-[length:100%_100%]"
            ></span>
            <div className="relative mx-auto h-[434px] w-[320px] md:w-[657px]">
              <Item
                rect="z-[10] rotate-[2deg]"
                step="/assets/images/step-01.svg"
                title="Google広告アカウント連携"
                list={[
                  'ボタン「Googleアカウント連携」をクリックしてください。',
                ]}
              >
                <img src="/assets/images/step-img-01.png" alt="" />
              </Item>
              <Item
                rect="z-[9] rotate-[4deg]"
                step="/assets/images/step-02.svg"
                title="広告運用の基本方針を選択"
                list={[
                  '好きな基本方針をクリックしてください。',
                  'ボタン「次へ」をクリックしてください。',
                ]}
              >
                <img src="/assets/images/step-img-02.png" alt="" />
              </Item>
              <Item
                rect="z-[8] rotate-[1deg]"
                step="/assets/images/step-03.svg"
                title="広告を出したLPのURLを貼り付ける"
                list={[
                  'URL入力欄にLPのURLを貼りけてください。',
                  'ボタン「次へ」をクリックしてください。',
                ]}
              >
                <img src="/assets/images/step-img-03.png" alt="" />
              </Item>
              <Item
                rect="z-[7] rotate-[3deg]"
                step="/assets/images/step-04.svg"
                title="あなたのSEIKAI広告エージェントが誕生！"
                list={[
                  'エージェントからのメッセージを確認してください。',
                  'ボタン「次へ」をクリックしてください。',
                ]}
              >
                <img src="/assets/images/step-img-04.png" alt="" />
              </Item>
              <Item
                rect="z-[6] rotate-[0deg]"
                step="/assets/images/step-05.svg"
                title="広告予算と出稿期間を設定"
                list={[
                  '広告予算と出稿期間を設定してください。',
                  'ボタン「次へ」をクリックしてください。',
                ]}
              >
                <img src="/assets/images/step-img-05.png" alt="" />
              </Item>
              <Item
                rect="z-[5] rotate-[-1deg]"
                step="/assets/images/step-06.svg"
                title="広告審査"
                list={[
                  '設定情報をもとにAIが複雑な広告設定を完了。',
                  '審査中はあなたのLPの内容をフィードバック。',
                ]}
              >
                <img src="/assets/images/step-img-06.png" alt="" />
              </Item>
              <Item
                rect="z-[4] rotate-[-2deg] !bg-[#FFFCE0]"
                step="/assets/images/step-07.svg"
                title="おめでとうございます！"
                list={[
                  'たったこれだけで広告出稿スタート。',
                  '24時間365日体制で本物のコンバージョンをあなたにもたらせるよう頑張ります！',
                  'ところでお客様が押し寄せる準備はできていますか？',
                ]}
              >
                <img src="/assets/images/step-img-07.png" alt="" />
              </Item>
            </div>
          </div>
          <div ref={buttonRef} className="mt-12 flex justify-center md:mt-20">
            <Button href="/">ステップ4で待ってます</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Steps
