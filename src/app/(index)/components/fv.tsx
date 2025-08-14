'use client'
import gsap from 'gsap'
import useScrollAnimations from '@/hooks/useScrollAnimations'
import { ReactNode, useEffect, useLayoutEffect, useRef } from 'react'
import Button from '@/components/button'

const Bubble = ({ rect, children }: { rect: string; children: ReactNode }) => (
  <div
    className={`absolute z-10 scale-0 rounded-[26px] border border-[#9B9B9B] bg-white p-3 text-[14px] font-medium leading-[1.3] md:p-4 md:text-[18px] ${rect}`}
  >
    {children}
  </div>
)

const FV = () => {
  const ref = useScrollAnimations()
  const containerRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    let ctx = gsap.context(() => {
      if (containerRef.current) {
        let duration = 1
        let delay = 3
        const f1_img = containerRef.current.querySelector('.f1-img')
        const f2_img = containerRef.current.querySelector('.f2-img')
        const f3_img = containerRef.current.querySelector('.f3-img')
        const f4_img = containerRef.current.querySelector('.f4-img')
        const f5_img = containerRef.current.querySelector('.f5-img')

        const f1_bubble = containerRef.current.querySelector('.f1-bubble')
        const f2_bubble = containerRef.current.querySelector('.f2-bubble')
        const f3_bubble = containerRef.current.querySelector('.f3-bubble')
        const f4_bubble = containerRef.current.querySelector('.f4-bubble')
        const f5_bubble = containerRef.current.querySelector('.f5-bubble')
        const f6_bubble = containerRef.current.querySelector('.f6-bubble')
        const tl = gsap.timeline({ repeat: -1, ease: 'ease-in-out' })
        gsap.set([f2_img, f3_img, f4_img, f5_img], { opacity: 0 })
        gsap.set(
          [f1_bubble, f2_bubble, f3_bubble, f4_bubble, f5_bubble, f6_bubble],
          { scale: 0 }
        )

        tl.to(f1_bubble, {
          scale: 1,
          duration: 0.4,
        })
          .to(
            f1_img,
            {
              rotateY: 180,
              opacity: 0,
              duration: duration,
              delay: delay,
            },
            '<'
          )
          .to(
            f1_bubble,
            {
              scale: 0,
              duration: 0.4,
            },
            '<'
          )
          .to(
            f2_img,
            {
              rotateY: 180,
              opacity: 1,
              duration: duration,
            },
            '<'
          )
          .to(
            f2_bubble,
            {
              scale: 1,
              duration: 0.4,
            },
            '-=0.5'
          )
          .to(f2_img, {
            rotateY: 360,
            opacity: 0,
            duration: duration,
            delay: delay,
          })
          .to(
            f2_bubble,
            {
              scale: 0,
              duration: 0.4,
            },
            '<'
          )
          .to(
            f3_img,
            {
              rotateY: 180,
              opacity: 1,
              duration: duration,
            },
            '<'
          )
          .to(
            f3_bubble,
            {
              scale: 1,
              duration: 0.4,
            },
            '-=0.5'
          )
          .to(f3_img, {
            rotateY: 360,
            opacity: 0,
            duration: duration,
            delay: delay,
          })
          .to(
            f3_bubble,
            {
              scale: 0,
              duration: 0.4,
            },
            '<'
          )
          .to(
            f4_img,
            {
              rotateY: 180,
              opacity: 1,
              duration: duration,
            },
            '<'
          )
          .to(
            f4_bubble,
            {
              scale: 1,
              duration: 0.4,
            },
            '-=0.5'
          )
          .to(f4_img, {
            rotateY: 360,
            opacity: 0,
            duration: duration,
            delay: delay,
          })
          .to(
            f4_bubble,
            {
              scale: 0,
              duration: 0.4,
            },
            '<'
          )
          .to(
            f5_img,
            {
              rotateY: 180,
              opacity: 1,
              duration: duration,
            },
            '<'
          )
          .to(
            f5_bubble,
            {
              scale: 1,
              duration: 0.4,
            },
            '-=0.5'
          )
          .to(
            f6_bubble,
            {
              scale: 1,
              duration: 0.4,
            },
            '-=0.5'
          )
          .to(f5_img, {
            rotateY: 360,
            opacity: 0,
            duration: duration,
            delay: delay,
          })
          .to(
            f5_bubble,
            {
              scale: 0,
              duration: 0.4,
            },
            '<'
          )
          .to(
            f6_bubble,
            {
              scale: 0,
              duration: 0.4,
            },
            '<'
          )
          .to(
            f1_img,
            {
              rotateY: 0,
              opacity: 1,
              duration: duration,
            },
            '<'
          )
      }
    })

    return () => ctx.revert()
  })
  return (
    <section ref={ref} className="relative pr-2 md:pr-5">
      <div className="rounded-r-[45px] bg-[url('/assets/images/bg-01.png')] bg-[length:100%_100%] py-16 md:py-24">
        
        <div className="relative z-30 mx-auto h-full w-full  max-w-[1440px]">
          <div className="pointer-events-none absolute left-[354px] top-2 z-10">
            <img
              className="animate-[anistar_3s_ease-in-out_1s_infinite]"
              src="/assets/images/star-01.svg"
              alt=""
            />
          </div>
          <div className="pointer-events-none absolute left-[970px] top-0 z-10">
            <img
              className="animate-[anistar_3s_ease-in-out_2s_infinite]"
              src="/assets/images/star-02.svg"
              alt=""
            />
          </div>
          <div className="pointer-events-none absolute left-[40px] top-[460px] z-10">
            <img
              className="animate-[anistar_3s_ease-in-out_0.4s_infinite]"
              src="/assets/images/star-03.svg"
              alt=""
            />
          </div>
          <div className="pointer-events-none absolute left-[820px] top-[440px] z-10">
            <img
              className="animate-[anistar_3s_ease-in-out_infinite]"
              src="/assets/images/star-04.svg"
              alt=""
            />
          </div>
          <div className="flex gap-5 max-lg:flex-col max-lg:items-center lg:justify-end">
            <div className="pt-6 max-md:px-5 md:pl-5 md:pt-4 lg:w-full lg:max-w-[720px]">
              <div className="relative z-10 animate-[bgextendAnimeBase_1s_forwards] opacity-0">
                <span className="absolute z-10 h-full w-full scale-x-0 animate-[bgLRextendAnime_2s_forwards] bg-[linear-gradient(90deg,_rgba(150,68,255,1)_0%,_rgba(236,98,98,1)_80%)]"></span>
                <div className="animate-[bgextendAnimeBase_2s_0.8s_forwards] opacity-0">
                  <p className="flex max-lg:justify-center max-md:mb-1 lg:pl-[160px]">
                    <span className="rounded-[11px] bg-[linear-gradient(154deg,_#E8B85A_11.49%,_#EF38BE_83.76%)] px-3">
                      <span className="text-[24px] font-extrabold leading-[1.1] text-white md:text-[36px]">
                        S E I K A
                      </span>
                    </span>
                  </p>
                  <h1 className="space-y-1 text-[44px] font-extrabold leading-[1.1] md:text-[60px] lg:text-[62px] xl:text-[80px]">
                    <p>
                      真の成果を<span className="u-text-gradient-or">AI</span>と
                      <br />
                      狙い撃つ!!
                    </p>
                    <p>
                      <span className="inline-block rounded-[11px] bg-[linear-gradient(154deg,_#E8B85A_11.49%,_#EF38BE_83.76%)] px-3 text-white ">
                        SEIKAI
                      </span>{' '}
                      広告
                      <br />
                      エージェント
                    </p>
                  </h1>
                </div>
              </div>
              <ul className="relative z-10 mt-8 text-[16px] font-bold md:ml-6 md:mt-10 md:text-[22px] lg:ml-9">
                <li className="relative flex animate-[bgextendAnimeBase_1s_forwards] items-center opacity-0">
                  <span className="absolute z-10 h-full w-full scale-x-0 animate-[bgLRextendAnime_2s_forwards] bg-[linear-gradient(90deg,_rgba(150,68,255,1)_0%,_rgba(236,98,98,1)_80%)]"></span>
                  <span className="relative flex animate-[bgextendAnimeBase_2s_0.8s_forwards] items-start gap-2.5 opacity-0">
                    <figure>
                      <img
                        className="max-md:w-[24px]"
                        src="/assets/images/fv-list-star.svg"
                        alt=""
                      />
                    </figure>
                    <span className="flex-1">
                      実際の来店、購入、契約の増加にフォーカス!!
                      <span className="group ml-1 inline-flex size-6 cursor-default items-center justify-center rounded-full leading-[0] ">
                        ℹ️
                        <span className="absolute bottom-full right-0 hidden rounded-lg bg-white p-2 text-[14px] leading-[1.5] text-black group-hover:block">
                          広告から実際の来店、購入、契約等（オフラインコンバージョン）につながった場合に得られた顧客属性を定期的にアップロードすることで、AIが出稿中の広告と真の成果とのつながりにフォーカスして学習します。
                        </span>
                      </span>
                    </span>
                  </span>
                </li>
                <li className="relative flex animate-[bgextendAnimeBase_1s_forwards] items-center opacity-0">
                  <span className="absolute z-10 h-full w-full scale-x-0 animate-[bgLRextendAnime_2s_forwards] bg-[linear-gradient(90deg,_rgba(150,68,255,1)_0%,_rgba(236,98,98,1)_80%)]"></span>
                  <span className="flex animate-[bgextendAnimeBase_2s_0.8s_forwards] items-start gap-2.5 opacity-0">
                    <figure>
                      <img
                        className="max-md:w-[24px]"
                        src="/assets/images/fv-list-star.svg"
                        alt=""
                      />
                    </figure>
                    <span className="flex-1">
                      24時間365日休まず自動改善!!
                      <span className="group ml-1 inline-flex size-6 cursor-default items-center justify-center rounded-full leading-[0] ">
                        ℹ️
                        <span className="absolute bottom-full right-0 hidden rounded-lg bg-white p-2 text-[14px] leading-[1.5] text-black group-hover:block">
                          売上のそばにある情報のインプットを継続することで、AIは休むことなく改善アクションを取り続けます。続けるほどに、広告パフォーマンスの着実な向上を実感できます。
                        </span>
                      </span>
                    </span>
                  </span>
                </li>
                <li className="relative flex animate-[bgextendAnimeBase_1s_forwards] items-center opacity-0">
                  <span className="absolute z-10 h-full w-full scale-x-0 animate-[bgLRextendAnime_2s_forwards] bg-[linear-gradient(90deg,_rgba(150,68,255,1)_0%,_rgba(236,98,98,1)_80%)]"></span>
                  <span className="flex animate-[bgextendAnimeBase_2s_0.8s_forwards] items-start gap-2.5 opacity-0">
                    <figure>
                      <img
                        className="max-md:w-[24px]"
                        src="/assets/images/fv-list-star.svg"
                        alt=""
                      />
                    </figure>
                    <span className="flex-1">
                      専門知識・初期費用・固定コスト不要!!
                      <span className="group ml-1 inline-flex size-6 cursor-default items-center justify-center rounded-full leading-[0] ">
                        ℹ️
                        <span className="absolute bottom-full right-0 hidden rounded-lg bg-white p-2 text-[14px] leading-[1.5] text-black group-hover:block">
                          知識不要で使えるのは当然として、広告代理店のように広告費の20％の重い労働費用は一切徴収いたしません。代わりにAIの限界維持費用として広告費の3.99％が請求されますが、それでも日本一安いです。
                        </span>
                      </span>
                    </span>
                  </span>
                </li>
              </ul>
              <div className="zoom-out absolute left-0 top-[140px] md:top-[230px]">
                <img src="/assets/images/fv-arrow.svg" alt="" />
              </div>
            </div>
            <div ref={containerRef} className="fade-up pt-10 md:pt-10">
              <div className="relative aspect-[518/377] animate-[anibounce_2s_linear_infinite] max-md:w-[440px] max-[440px]:w-[360px] md:w-[518px]">
                <div className="f1 absolute inset-0 z-[6] size-full">
                  <Bubble rect="f1-bubble top-[25%] left-0 dt:-left-5">
                    せっかく広告出すか
                    <br />
                    ら売上に直結する運
                    <br />
                    用がしたい!!
                  </Bubble>
                  <figure className="f1-img">
                    <img src="/assets/images/fv-item-01.png" alt="" />
                  </figure>
                </div>
                <div className="f2 absolute inset-0 z-[5] size-full">
                  <Bubble rect="f2-bubble -top-5 left-0 dt:-left-5">
                    お金をかけたら、かけた <br />
                    だけの効果を手に入れ
                    <br />
                    たいよね!!
                  </Bubble>
                  <figure className="f2-img">
                    <img src="/assets/images/fv-item-02.png" alt="" />
                  </figure>
                </div>
                <div className="f3 absolute inset-0 z-[4] size-full">
                  <Bubble rect="f3-bubble -top-5 right-5">
                    SEIKAIは費用対効果が高くて、
                    <br />
                    上司や同僚からの評判もよく、
                    <br />
                    私も鼻が高いです。
                  </Bubble>
                  <figure className="f3-img">
                    <img src="/assets/images/fv-item-03.png" alt="" />
                  </figure>
                </div>
                <div className="f4 absolute inset-0 z-[3] size-full">
                  <Bubble rect="f4-bubble top-1/4 right-0 dt:-right-10">
                    毎日忙しくてもSEIKAIなら
                    <br />
                    やることがほとんどないし
                    <br />
                    お客さんも増えてます。
                  </Bubble>
                  <figure className="f4-img">
                    <img src="/assets/images/fv-item-04.png" alt="" />
                  </figure>
                </div>
                <div className="f5 absolute inset-0 z-[3] size-full">
                  <Bubble rect="f5-bubble top-0 left-0 dt:-left-10">
                    この現場もSEIKAI経由で <br />
                    契約したんだって。
                  </Bubble>
                  <Bubble rect="f6-bubble top-1/4 left-8 dt:left-14">
                    また!?
                  </Bubble>
                  <figure className="f5-img">
                    <img src="/assets/images/fv-item-05.png" alt="" />
                  </figure>
                </div>
              </div>
              <div className="fade-up relative z-30 mt-11 flex justify-center max-md:px-5">
                <img
                  className="w-full max-md:max-w-[400px] md:max-w-[422px]"
                  src="/assets/images/seikai.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="relative z-30 mt-10 flex justify-center md:mt-16">
            <Button href="mailto:info@cv-agent.ai">SEIKAIで真の成果を狙う</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FV
