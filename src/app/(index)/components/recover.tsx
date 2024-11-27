'use client'
import useScrollAnimations from '@/hooks/useScrollAnimations'

const Recover = () => {
  const ref = useScrollAnimations()
  return (
    <section ref={ref} className="overflow-hidden pb-12 md:pb-[64px]">
      <div className="fade-up relative flex h-[100px] items-center justify-center bg-[#FF8C5A] bg-[url('/assets/images/bg-title-02.png')] bg-[length:auto_100%] bg-[bottom_left_-95px] bg-no-repeat max-md:flex-col max-md:px-5 max-md:py-10 md:h-[197px] md:bg-cover md:bg-[bottom_left_-200px] xl:bg-center">
        <div className="w-full max-w-[520px]">
          <p className="text-center font-serif text-[clamp(14px,3.8vw,20px)] font-black text-white md:text-[28px]">
            おもいで風化、する前に。
          </p>
          <p className="pt-4 max-md:flex max-md:justify-center md:pl-20">
            <img
              className="max-md:w-[40vw] max-md:max-w-[240px]"
              src="/assets/images/recover-title.png"
              alt=""
            />
          </p>
        </div>
        <span className="bottom-4 right-4 max-md:mt-5 max-md:hidden max-md:w-full md:absolute dt:right-28">
          <img
            className="ml-auto w-[50vw] md:w-[25.069vw] dt:w-[361px]"
            src="/assets/images/sign-title-01.png"
            alt=""
          />
        </span>
      </div>
      <div className="mx-auto mt-4 w-full max-w-[1440px] md:pl-7">
        <div className="bg-[#FFE1C6] bg-[url('/assets/images/bg-recover-02.png')] bg-left-bottom  bg-no-repeat pb-[50vw] max-md:bg-[length:100%_auto]  md:pb-[180px]">
          <div
            data-scroll="out"
            className="has-animation animation-ltr w-full max-w-[1000px] border-b border-black/50 py-8 font-serif text-[17px] font-semibold text-[#5F5F5F] before:bg-[#FDBB74] after:bg-[#EF7C43] max-md:px-3 max-md:text-center md:pl-24 md:text-[28px]"
          >
            <p>
              愛するペットとの絆を紡いでいく日常を、
              <br className="lg:hidden" />
              デジタルの力で復活
            </p>
          </div>
          <div className="relative px-5 pt-8">
            <span className="absolute right-0 top-[685px] md:top-[600px] xl:top-[130px]">
              <img
                className="fade-up max-xl:w-[72.431vw] max-md:w-[120vw]"
                src="/assets/images/bg-recover-01.png"
                alt=""
              />
            </span>
            <div className="relative mx-auto w-full max-w-[540px] md:max-w-[1200px]">
              <div className="fade-up flex items-center max-xl:flex-col max-xl:justify-center xl:items-start">
                <figure
                  data-scroll="out"
                  className="has-animation animation-ltr pt-6 before:bg-[#FDBB74] after:bg-[#EF7C43]"
                >
                  <img src="/assets/images/img-recover.png" alt="" />
                </figure>
                <div className="relative flex-1">
                  <div className="w-full max-w-[636px] md:-ml-5">
                    <div
                      data-scroll="out"
                      className="has-animation animation-ltr bg-white/70 px-4 pb-6 pt-5 before:bg-[#FDBB74] after:bg-[#EF7C43] md:px-8 md:pb-10"
                    >
                      <h5 className="border-b border-black text-center font-serif text-[20px] font-bold text-[#5F5F5F] md:text-[28px]">
                        もしも愛するペットに再会できたら...
                      </h5>
                      <p className="pt-5 text-center text-[14px] font-bold  md:text-[18px]">
                        そんな奇跡を「メタでペット供養」が実現します。
                      </p>
                      <p className="pt-7 text-[14px] leading-snug md:pt-10 md:text-[17px]">
                        現実の世界では叶えられなかった、ペットとの永遠の絆。
                        <br />
                        その絆を、メタバースという新しい世界で紡ぎなおすことができる時代になりました。
                      </p>
                    </div>
                    <div
                      data-scroll="out"
                      className="has-animation animation-ltr flex justify-center px-2 pt-4 before:bg-[#FDBB74] after:bg-[#EF7C43] md:px-10"
                    >
                      <p className="max-w-[555px] text-[13px]  leading-tight md:text-[15px]">
                        ※メタバースとは、インターネット上のバーチャルワールドのことを指します。当サービスは、ペットとの大切な“おもいで”をデジタル化技術で再現し、スマートフォン一つあればいつでもペットのお墓を含めた特別な場所を訪れることを可能にします。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative mx-auto mt-9 w-full max-w-[640px] md:max-w-[1024px]">
              <figure>
                <img
                  className="fade-up max-xl:w-[50.972vw] max-md:w-full"
                  src="/assets/images/img-recover-01.png"
                  alt=""
                />
              </figure>
            </div>
            <div className="fade-up relative mx-auto mt-36 w-full max-w-[640px] md:mt-16 md:max-w-[1080px]">
              <div
                data-scroll="out"
                className="relative w-full max-w-[911px] bg-[url('/assets/images/frame-recover.png')] bg-[length:100%_100%] md:h-[394px]"
              >
                <div className="relative z-10 h-full w-full px-5 pt-12 max-md:pb-36 md:px-8">
                  <div className="mb-4 flex justify-center">
                    <h5 className="font-serif text-[17px] font-semibold text-[#8B1D1D] max-md:text-center md:text-[20px] lg:text-[23px]">
                      <span className="text--fading" data-splitting="">
                        メタバース空間には、あなた様のペットだけの特別な場所があります。
                        <br />
                        そこでは、愛するペットの姿があなた様を出迎えてくれます。
                      </span>
                    </h5>
                  </div>
                  <div className="mx-auto w-full max-w-[530px] border-y-2 border-white py-6 text-center font-serif text-[17px] font-semibold text-white md:text-[23px]">
                    <span className="text--fading i01" data-splitting="">
                      愛くるしい仕草で話しかけてくる姿 <br />
                      一緒に歩いた思い出の散歩道
                    </span>
                  </div>
                  <h5 className="mt-4 text-center font-serif text-[17px] font-semibold text-[#8B1D1D] md:text-[23px]">
                    <span className="text--fading i02" data-splitting="">
                      今は亡きペットとの気ない日常が、あざやかによみがえります。
                    </span>
                  </h5>
                </div>
                <span className="absolute bottom-0 right-0 max-md:w-[100vw] max-md:max-w-[400px]">
                  <img src="/assets/images/frame-recover-pet.png" alt="" />
                </span>
              </div>
            </div>
            <div className="mx-auto w-full max-w-[440px] pt-9 md:max-w-[1160px] md:px-[50px] md:pt-12">
              <div className="flex justify-end md:pr-6">
                <div
                  data-scroll="out"
                  className="mb-3 flex max-w-[760px] items-center justify-center gap-6 rounded-[36px] border-2 border-[#7895EA]/[0.5] bg-white/50 px-4 pb-6 pt-6 max-md:flex-col md:px-9 md:pb-10 md:pt-10"
                >
                  <figure className="max-md:hidden">
                    <img
                      className="max-md:w-[100px]"
                      src="/assets/images/img-recover-02.png"
                      alt=""
                    />
                  </figure>
                  <p
                    data-splitting=""
                    className="text--fading flex-1 text-[15px]  md:text-[18px]"
                  >
                    まるで生き返ったみたい…。こんな供養の仕方があったなんて、そして愛するこの子との再会ができるなんて信じられません。本当に良かった…
                  </p>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="fade-up relative flex max-w-[700px] justify-center gap-6 rounded-[36px] border-2 border-[#F1A819]/[0.5] bg-white/50 pb-14 pl-4 pr-4 pt-6 text-[#903400] md:pb-9 md:pl-8 md:pr-24">
                  <p className="flex-1 text-[15px] tracking-tighter md:text-[18px]">
                    メタでペット供養は、時間や場所に縛られることなく、スマートフォンひとつあればいつでもペットに会いに行けます。話すことも、散歩することさえできます。
                    <br />
                    <br />
                    <span className="inline-block max-md:pr-24">
                      そこはまさに、悲しみを癒やし、絆を確かめ合える特別な空間なのです。
                    </span>
                  </p>
                  <figure className="absolute bottom-0 right-[-20px] md:right-[-60px]">
                    <img
                      className="[filter:drop-shadow(4px_4px_4px_rgba(0,_0,_0,_0.25))] max-md:w-[130px]"
                      src="/assets/images/people.png"
                      alt=""
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-5">
        <div className="fade-up relative mt-12 flex items-center justify-center md:mt-[88px]">
          <figure>
            <img
              className="max-md:w-[300px]"
              src="/assets/images/ic-triangle.png"
              alt=""
            />
          </figure>
          <div className="u-text-gradient absolute inset-0 flex animate-[hue_10s_infinite_linear] justify-center pt-4 text-[16px] font-semibold leading-[1.8] md:pt-6 md:text-[22px]">
            <p className="max-w-[550px]">
              私たちは、日本中のペットオーナーが抱えている、「ペットロスの悲しみ」や「記憶が薄れていく恐怖心」に寄り添い、メタでペット供養を通じて新しいペット供養のカタチを提案しています。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Recover
