'use client'
import useScrollAnimations from '@/hooks/useScrollAnimations'

const Fear = () => {
  const ref = useScrollAnimations()
  return (
    <section ref={ref} className="overflow-hidden pb-14 md:pb-[88px]">
      <div className="fade-up relative flex h-[100px] items-center bg-[#657FD8] bg-[url('/assets/images/bg-title-01.png')] bg-[length:auto_100%] bg-[center_left_-60px] bg-no-repeat max-dt:pl-[361px] max-md:flex-col max-md:justify-center max-md:px-5 max-md:py-10 md:h-[197px] md:bg-cover md:bg-left-bottom dt:justify-center">
        <p className="w-full font-serif text-[clamp(14px,3.8vw,20px)] font-black text-white max-md:text-center md:max-w-[51.389vw] md:text-[2.708vw] dt:max-w-[740px] dt:text-[39px]">
          愛するペットとの
          <br className="md:hidden" /> 『 おもいで 』が <br />
          少しずつ風化していく恐怖…
        </p>
        <span className="bottom-4 right-4 max-md:mt-5 max-md:hidden max-md:w-full md:absolute dt:right-28">
          <img
            className="ml-auto w-[50vw] md:w-[25.069vw] dt:w-[361px]"
            src="/assets/images/sign-title-01.png"
            alt=""
          />
        </span>
      </div>
      <div className="mx-auto mt-4 w-full max-w-[1440px] md:pr-7">
        <div className="bg-[#DBF3FF] bg-[url('/assets/images/bg-fear.png')] bg-left-bottom bg-no-repeat pb-[50vw] max-md:bg-[length:170%_auto] md:pb-[537px]">
          <div
            data-scroll="out"
            className="has-animation animation-ltr w-full max-w-[1000px] border-b border-black/50 py-8 font-serif text-[19px] font-semibold text-[#5F5F5F] before:bg-[#819EF3] after:bg-[#6680D8] max-md:px-3 max-md:text-center md:pl-24 md:text-[28px]"
          >
            <p>
              ペットを亡くした悲しみは、
              <br className="lg:hidden" />
              言葉では表せないほど深いものです。
            </p>
          </div>
          <div className="px-5 pt-8">
            <div className="mx-auto w-full max-w-[540px] md:max-w-[1220px]">
              <div className="fade-up flex items-center max-md:flex-col max-md:justify-center md:items-end">
                <figure
                  data-scroll="out"
                  className="has-animation animation-ltr pb-6 before:bg-[#819EF3] after:bg-[#6680D8] max-lg:w-1/2 max-md:w-auto"
                >
                  <img src="/assets/images/img-fear-01.png" alt="" />
                </figure>
                <div
                  data-scroll="out"
                  className="has-animation animation-ltr relative flex-1 before:bg-[#819EF3] after:bg-[#6680D8]"
                >
                  <p className="flex max-w-[672px] items-center bg-white/90 px-5 py-6 text-[14px] text-[#333] md:-ml-16 md:min-h-[190px] md:px-10 md:text-[17px]">
                    自宅や一緒に行った場所でふと思い出す、あの子の「声」「吐息」「仕草」「体温」「柔らかな毛並」。
                    <br />
                    <br />
                    何気ない日常のひとコマひとコマが、今は悲しみに変わって胸を締め付けます。
                  </p>
                </div>
              </div>
              <div className="mx-auto w-full max-w-[440px] pt-6 md:max-w-[914px] md:pl-2">
                <div
                  data-scroll="out"
                  className="fade-up mb-3 flex max-w-[760px] justify-center gap-6 rounded-[36px] border-2 border-[#7895EA]/[0.5] bg-white/50 px-4 pb-5 pt-6 max-md:flex-col md:px-9 md:pt-10"
                >
                  <figure className="max-md:hidden">
                    <img
                      className="max-md:w-[100px]"
                      src="/assets/images/img-fear-02.png"
                      alt=""
                    />
                  </figure>
                  <p
                    data-splitting=""
                    className="text--fading flex-1 text-[15px] md:text-[18px]"
                  >
                    私も、3年前に最愛の愛犬を亡くしました。あれから一日たりとも、彼女のことを思わない日はありません。でも、月日が経つにつれ、少しずつ記憶があやふやになっていくんです。それが本当に怖いんです。
                    <br />
                    <span className="block text-right">(40代女性)</span>
                  </p>
                </div>
                <div className="fade-up relative mx-auto flex max-w-[700px] justify-center gap-6 rounded-[36px] border-2 border-[#15B325]/[0.5] bg-white/50 pb-16 pl-4 pr-4 pt-6 md:pb-9 md:pl-9 md:pr-24">
                  <p className="flex-1 text-[15px] md:text-[18px]">
                    ペットを亡くしたあなた様は、今このような喪失感や悲しみ、そして大切な“おもいで”を失うことへの恐怖心を抱えているのではないでしょうか。
                    <br />
                    <span className="inline-block max-md:pr-20">
                      まだペットがご健在の方も、いずれ訪れるその時を真剣に想像してみてください...
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
                <div className="fade-up mx-auto mt-10 w-full max-w-[335px] md:mt-[30px] md:max-w-[913px]">
                  <div>
                    <h5 className="text-center font-serif text-[18px] font-medium md:text-[28px]">
                      悲しみに暮れるあなた様は、
                      <br className="md:hidden" />
                      こんな風に思っているかもしれません。
                    </h5>
                    <figure className="mt-4">
                      <img src="/assets/images/line-title.png" alt="" />
                    </figure>
                  </div>
                  <div className="mx-auto mt-7 w-full max-w-[732px] space-y-6 md:mt-12 md:space-y-8">
                    <div className="flex items-center gap-5 md:gap-[30px]">
                      <figure>
                        <img
                          className="max-md:w-8"
                          src="/assets/images/ic-check.png"
                          alt=""
                        />
                      </figure>
                      <p className="flex-1 font-zen text-[14px] font-medium md:text-[18px] ">
                        この子のために、
                        <span className="relative inline-block">
                          <span className="bgtext absolute inset-0 z-[-1] w-0 bg-[linear-gradient(to_top,_#FBC70F_40%,_transparent_40%)] opacity-0"></span>
                          心を込めた供養をしてあげたい。
                        </span>
                        でも、仕事や家庭の事情で、思うような供養やお墓参りができない…
                      </p>
                    </div>
                    <div className="flex items-center gap-5 md:gap-[30px]">
                      <figure>
                        <img
                          className="max-md:w-8"
                          src="/assets/images/ic-check.png"
                          alt=""
                        />
                      </figure>
                      <p className="flex-1 font-zen text-[14px] font-medium md:text-[18px]">
                        ペットとの
                        <span className="relative inline-block max-md:hidden">
                          <span className="bgtext absolute inset-0 z-[-1] w-0 bg-[linear-gradient(to_top,_#FBC70F_40%,_transparent_40%)] opacity-0"></span>
                          “おもいで”が、風化してしまう前に形に残しておきたい。
                        </span>
                        <span className="relative inline-block md:hidden">
                          <span className="bgtext absolute inset-0 z-[-1] w-0 bg-[linear-gradient(to_top,_#FBC70F_40%,_transparent_40%)] opacity-0"></span>
                          “おもいで”が、風化してしまう前に形に残し
                        </span>
                        <span className="relative inline-block md:hidden">
                          <span className="bgtext absolute inset-0 z-[-1] w-0 bg-[linear-gradient(to_top,_#FBC70F_40%,_transparent_40%)] opacity-0"></span>
                          ておきたい。
                        </span>
                        でも、どうすればいいのかわからない…
                      </p>
                    </div>
                    <div className="flex items-center gap-5 md:gap-[30px]">
                      <figure>
                        <img
                          className="max-md:w-8"
                          src="/assets/images/ic-check.png"
                          alt=""
                        />
                      </figure>
                      <p className="flex-1 font-zen text-[14px] font-medium md:text-[18px]">
                        あの時、もっとあの子のためにできたことがあったのに。なんで私はほかの事を優先しちゃったんだろう。
                        <span className="relative inline-block">
                          <span className="bgtext absolute inset-0 z-[-1] w-0 bg-[linear-gradient(to_top,_#FBC70F_40%,_transparent_40%)] opacity-0"></span>
                          あの頃に戻れるなら戻りたい...
                        </span>
                      </p>
                    </div>
                  </div>
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
          <div className="u-text-gradient absolute inset-0 animate-[hue_10s_infinite_linear] justify-center pt-10 text-center text-[16px] font-medium md:pt-20 md:text-[22px]">
            <p>
              もしも愛するペットとの絆を
              <br className="md:hidden" />
              永遠に紡ぐ方法があったら…
              <br />
              <span className="underline">
                そんな悲痛な想いに寄り添う、
                <br className="md:hidden" />
                新しい供養のカタチがあります
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Fear
