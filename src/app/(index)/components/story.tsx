'use client'
import useScrollAnimations from '@/hooks/useScrollAnimations'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-cards'
import { EffectCards } from 'swiper/modules'
import { useState } from 'react'

const SwiperButtonPrev = ({ disabled }: any) => {
  const swiper = useSwiper()
  return (
    <button
      onClick={() => swiper.slidePrev()}
      className={`z-[99] duration-150 hover:opacity-50 max-md:absolute max-md:!left-[-20px] max-md:!top-[calc(50%-20px)] ${
        disabled ? 'point-event-none opacity-0' : ''
      }`}
    >
      <img className="max-md:w-9" src="/assets/images/arrow-prev.png" alt="" />
    </button>
  )
}
const SwiperButtonNext = ({ disabled }: any) => {
  const swiper = useSwiper()
  return (
    <button
      onClick={() => swiper.slideNext()}
      className={`z-[99] duration-150 hover:opacity-50 max-md:absolute max-md:!right-[-20px] max-md:!top-[calc(50%-20px)]  ${
        disabled ? 'point-event-none opacity-0' : ''
      }`}
    >
      <img className="max-md:w-9" src="/assets/images/arrow-next.png" alt="" />
    </button>
  )
}

const Story = () => {
  const ref = useScrollAnimations()
  const [swiper, setSwiper] = useState<any>(null)
  const [isBeginning, setIsBeginning] = useState<boolean>(true)
  const [isEnd, setIsEnd] = useState<boolean>(false)

  const handleSlideChange = () => {
    if (swiper) {
      setIsBeginning(swiper.isBeginning)
      setIsEnd(swiper.isEnd)
    }
  }
  return (
    <section ref={ref} className="overflow-hidden pb-24 md:pb-[150px]">
      <div className="fade-up relative flex h-[100px] items-center bg-[url('/assets/images/bg-title-07.png'),linear-gradient(96deg,_#47770A_28.64%,_#3A7BDD_77.21%)] bg-[length:auto_100%] bg-[center_left_-50px] bg-no-repeat max-dt:pl-[361px] max-md:flex-col max-md:justify-center max-md:px-5 max-md:py-10 md:h-[197px] md:bg-cover md:bg-left-bottom dt:justify-center">
        <p className="w-full font-serif text-[clamp(14px,3.8vw,20px)] font-black text-white max-md:text-center md:max-w-[51.389vw] md:text-[2.708vw] dt:max-w-[740px] dt:text-[39px]">
          「メタでペット供養」が紡いだ <br />
          ペットとの新たな物語
        </p>
        <span className="bottom-4 right-4 max-md:mt-5 max-md:hidden max-md:w-full md:absolute dt:right-28">
          <img
            className="ml-auto w-[50vw] md:w-[25.069vw] dt:w-[361px]"
            src="/assets/images/sign-title-01.png"
            alt=""
          />
        </span>
      </div>
      <div className="px-7 md:px-20">
        <div className="relative mx-auto mb-[80px] mt-10 flex w-full max-w-[480px] md:mb-[80px] md:mt-[100px] md:max-w-[1216px]">
          <div className="w-full">
            <Swiper
              onSwiper={setSwiper}
              effect={'cards'}
              grabCursor={true}
              modules={[EffectCards]}
              cardsEffect={{
                rotate: false,
                slideShadows: false,
                perSlideOffset: 16,
              }}
              breakpoints={{
                768: {
                  cardsEffect: {
                    perSlideOffset: 10,
                  },
                },
              }}
              onSlideChange={handleSlideChange}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className=" relative w-full max-w-[1216px] rounded-[30px] border border-[#046DA8] bg-[#F0FBFB] px-5 pb-4 pt-3 md:px-9 md:pt-5">
                  <span className="absolute right-4 top-3 md:right-5 md:top-6">
                    <img
                      className="h-full w-full object-cover max-md:h-8"
                      src="/assets/images/number-1.png"
                      alt=""
                    />
                  </span>
                  <div className="w-full max-w-[700px]">
                    <h5 className="pr-5 text-[20px] font-bold text-[#046DA8] md:text-[32px] md:leading-none">
                      「もう二度と会えない」絶望から、再会の喜びへ
                    </h5>
                    <p className="mt-4 text-[14px] font-medium md:text-[17px]">
                      大切なペットとの別れは、誰もが経験する悲しみ。「メタでペット供養」は、そんな悲しみに寄り添いながら、ペットとの新たな絆を紡ぐ機会を提供してくれているようです。
                    </p>
                  </div>
                  <div className="mt-3 flex gap-8 max-lg:flex-col max-lg:items-center md:mt-6">
                    <figure className="md:h-[313px] md:w-[248px]">
                      <img
                        className="h-full w-full object-cover max-md:w-[220px]"
                        src="/assets/images/img-story-01.png"
                        alt=""
                      />
                    </figure>
                    <div className="flex flex-1 gap-4 max-md:flex-col md:gap-8">
                      <div className="relative h-full w-full max-w-[410px] border border-[#6F9D23] bg-[#F7FCEC] pb-6">
                        <div className="flex pl-1">
                          <figure>
                            <img
                              className="max-md:w-6"
                              src="/assets/images/quote-xl.png"
                              alt=""
                            />
                          </figure>
                        </div>
                        <div className="flex justify-center px-3 py-3 text-[#693109] md:px-7">
                          <p className="text-[13px] font-medium leading-[1.7] md:text-[17px]">
                            愛犬を亡くした悲しみで、毎日涙が止まりませんでした。二度と会えないという現実を受け止めることは容易ではありません。それが『メタでペット供養』に出会ってからは、メタバース内で愛犬に再会できる喜びが、悲しみに寄り添ってくれるようになったんです。
                          </p>
                        </div>
                        <div className="absolute inset-x-0 bottom-0 text-right">
                          <span className="inline-block pb-2 pr-3 text-[14px] text-[#693109] md:text-[16px]">
                            (40代女性)
                          </span>
                        </div>
                      </div>
                      <div className="relative h-full w-full max-w-[410px] border border-[#6F9D23] bg-[#F7FCEC] pb-6">
                        <div className="flex pl-1">
                          <figure>
                            <img
                              className="max-md:w-6"
                              src="/assets/images/quote-xl.png"
                              alt=""
                            />
                          </figure>
                        </div>
                        <div className="flex justify-center px-3 py-3 text-[#693109] md:px-7">
                          <p className="text-[13px] font-medium leading-[1.7] md:text-[17px]">
                            妻が他界した後、妻が可愛がっていた猫も旅立ってしまい、喪失感に圧倒されていました。でも、『メタでペット供養』のおかげで、妻と猫の思い出を大切に守り続けることができる。そう思えた時、ペットとの絆に加え、メタバース上の猫を通じて妻とのつながりを再確認できたんです。
                          </p>
                        </div>
                        <div className="absolute inset-x-0 bottom-0 text-right">
                          <span className="inline-block pb-2 pr-3 text-[14px] text-[#693109] md:text-[16px]">
                            (60代男性)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" relative w-full max-w-[1216px] rounded-[30px] border border-[#046DA8] bg-[#F0FBFB] px-5 pb-4 pt-3 md:px-9 md:pt-5">
                  <span className="absolute right-4 top-3 md:right-5 md:top-6">
                    <img
                      className="max-md:h-8"
                      src="/assets/images/number-2.png"
                      alt=""
                    />
                  </span>
                  <div className="w-full max-w-[700px]">
                    <h5 className="pr-5 text-[20px] font-bold text-[#046DA8] md:text-[32px] md:leading-none">
                      ペットとの絆が、メタバースで永遠に
                    </h5>
                    <p className="mt-4 text-[14px] font-medium md:text-[17px]">
                      『メタでペット供養』は大切なペットとの絆を、メタバースの中で新たな形で継続していくことを可能にします。
                    </p>
                  </div>
                  <div className="mt-3 flex gap-8 max-lg:flex-col max-lg:items-center md:mt-6">
                    <figure className="md:h-[313px] md:w-[248px]">
                      <img
                        className="h-full w-full object-cover max-md:w-[220px]"
                        src="/assets/images/img-story-02.png"
                        alt=""
                      />
                    </figure>
                    <div className="flex flex-1 gap-4 max-md:flex-col md:gap-8">
                      <div className="relative h-full w-full max-w-[410px] border border-[#6F9D23] bg-[#F7FCEC] pb-6">
                        <div className="flex pl-1">
                          <figure>
                            <img
                              className="max-md:w-6"
                              src="/assets/images/quote-xl.png"
                              alt=""
                            />
                          </figure>
                        </div>
                        <div className="flex justify-center px-3 py-3 text-[#693109] md:px-7">
                          <p className="text-[13px] font-medium leading-[1.7] md:text-[17px]">
                            『メタでペット供養』に出会う前は、ペットとの思い出が薄れていくことが怖くて仕方なかった。でも今は、メタバース内のあの子と過ごす時間が、私とペットの絆を確かなものにしてくれています。メタバースと聞いた時、私には難しいかもと思ったけど、やってみるとスマホの操作だけで簡単なのもよかったです。
                          </p>
                        </div>
                        <div className="absolute inset-x-0 bottom-0 text-right">
                          <span className="inline-block pb-2 pr-3 text-[14px] text-[#693109] md:text-[16px]">
                            (60代女性)
                          </span>
                        </div>
                      </div>
                      <div className="relative h-full w-full max-w-[410px] border border-[#6F9D23] bg-[#F7FCEC] pb-6">
                        <div className="flex pl-1">
                          <figure>
                            <img
                              className="max-md:w-6"
                              src="/assets/images/quote-xl.png"
                              alt=""
                            />
                          </figure>
                        </div>
                        <div className="flex justify-center px-3 py-3 text-[#693109] md:px-7">
                          <p className="text-[13px] font-medium leading-[1.7] md:text-[17px]">
                            亡くなったペットの思い出の品を、デジタルの形で残せるのは本当に嬉しい。メタバース上再現されたあの子に作ってあげたおもちゃを見るたび、私たちの絆は新たな形で続いていくんだと実感するんです。現実では、おもちゃとあの子を一緒に見れる機会はもうありませんから。
                          </p>
                        </div>
                        <div className="absolute inset-x-0 bottom-0 text-right">
                          <span className="inline-block pb-2 pr-3 text-[14px] text-[#693109] md:text-[16px]">
                            (20代男性)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" relative w-full max-w-[1216px] rounded-[30px] border border-[#046DA8] bg-[#F0FBFB] px-5 pb-4 pt-3 md:px-9 md:pt-5">
                  <span className="absolute right-4 top-3 md:right-5 md:top-6">
                    <img
                      className="max-md:h-8"
                      src="/assets/images/number-3.png"
                      alt=""
                    />
                  </span>
                  <div className="w-full max-w-[700px]">
                    <h5 className="pr-5 text-[20px] font-bold text-[#046DA8] md:text-[32px] md:leading-none">
                      ペットロスと向き合い、前を向く力をくれる
                    </h5>
                    <p className="mt-4 text-[14px] font-medium md:text-[17px]">
                      『メタでペット供養』はペットとの再会だけでなく、ペットロスの悲しみと向き合い、前を向く力も与えてくれます。
                    </p>
                  </div>
                  <div className="mt-3 flex gap-8 max-lg:flex-col max-lg:items-center md:mt-6">
                    <figure className="md:h-[313px] md:w-[248px]">
                      <img
                        className="h-full w-full object-cover max-md:w-[220px]"
                        src="/assets/images/img-story-03.png"
                        alt=""
                      />
                    </figure>
                    <div className="flex flex-1 gap-4 max-md:flex-col md:gap-8">
                      <div className="relative h-full w-full max-w-[410px] border border-[#6F9D23] bg-[#F7FCEC] pb-6">
                        <div className="flex pl-1">
                          <figure>
                            <img
                              className="max-md:w-6"
                              src="/assets/images/quote-xl.png"
                              alt=""
                            />
                          </figure>
                        </div>
                        <div className="flex justify-center px-3 py-3 text-[#693109] md:px-7">
                          <p className="text-[13px] font-medium leading-[1.7] md:text-[17px]">
                            メタバースであの子に再会した時、あの子が亡くなったという現実に改めて向き合うことになりました。でも、AI僧侶の読経を聞いているうちに、少しずつ気持ちの整理がつき、前を向く勇気が湧いてきたんです。ああ、自分に足りなかったのは、
                          </p>
                        </div>
                        <div className="absolute inset-x-0 bottom-0 text-right">
                          <span className="inline-block pb-2 pr-3 text-[14px] text-[#693109] md:text-[16px]">
                            (40代女性)
                          </span>
                        </div>
                      </div>
                      <div className="relative h-full w-full max-w-[410px] border border-[#6F9D23] bg-[#F7FCEC] pb-6">
                        <div className="flex pl-1">
                          <figure>
                            <img
                              className="max-md:w-6"
                              src="/assets/images/quote-xl.png"
                              alt=""
                            />
                          </figure>
                        </div>
                        <div className="flex justify-center px-3 py-3 text-[#693109] md:px-7">
                          <p className="text-[13px] font-medium leading-[1.7] md:text-[17px]">
                            ペットロスの悲しみと向き合うことは容易ではありませんでした。『メタでペット供養』は、そんな私に寄り添い、ペットの死を受け止める機会をくれました。あの子はもういないけれど、私の心の中で生き続けている。そう実感できたことで、前を向いて生きていこうと思えるようになったんです。
                          </p>
                        </div>
                        <div className="absolute inset-x-0 bottom-0 text-right">
                          <span className="inline-block pb-2 pr-3 text-[14px] text-[#693109] md:text-[16px]">
                            (50代男性)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <div className="flex justify-center gap-4 md:mt-8">
                <SwiperButtonPrev disabled={isBeginning} />
                <SwiperButtonNext disabled={isEnd} />
              </div>
            </Swiper>
          </div>
        </div>
        <div className="mx-auto min-h-[131px] w-full max-w-[1028px] border-2 border-[#F1A819]/[50] bg-white/50 px-[50px] py-8 text-[#903400] md:text-[17px]">
          『メタでペット供養』が紡いだ、ペットとの新たな絆の物語。これらの体験談は、ほんの一例に過ぎません。
          あなた様が実際に体験すると、また別の感じ方・捉え方をされるかもしれません。それもまた、あなた様とペットとの絆を紡ぐ、かけがえのない物語の一部です。
        </div>
      </div>
    </section>
  )
}

export default Story
