"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";

const Story = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="overflow-hidden md:pb-[150px] pb-24">
      <div className="fade-up md:bg-[url('/assets/images/bg-title-03.png')] md:bg-cover bg-no-repeat bg-left-bottom md:h-[197px] bg-[#2FB4AC] relative flex items-center max-dt:pl-[361px] max-md:justify-center dt:justify-center max-md:px-5 max-md:flex-col max-md:py-10">
        <p className="font-serif text-white font-black md:text-[2.708vw] dt:text-[39px] text-[5vw] w-full md:max-w-[51.389vw] dt:max-w-[740px]">
          「メタでペット供養」が紡いだ <br />
          ペットとの新たな物語
        </p>
        <span className="md:absolute bottom-4 right-4 dt:right-28 max-md:w-full max-md:mt-5">
          <img
            className="dt:w-[361px] md:w-[25.069vw] w-[50vw] ml-auto"
            src="/assets/images/sign-title-01.png"
            alt=""
          />
        </span>
      </div>
      <div className="px-7 md:px-20">
        <div className="w-full md:max-w-[1216px] max-w-[480px] mx-auto md:mt-[100px] mt-10 relative flex mb-[80px] md:mb-[140px]">
          <div className="relative w-full">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              cardsEffect={{
                rotate: false,
                slideShadows: false,
                perSlideOffset: 16
              }}
              breakpoints={{
                768: {
                  cardsEffect: {
                    perSlideOffset: 10
                  }
                },
              }}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className=" w-full max-w-[1216px] border border-[#046DA8] bg-[#F0FBFB] relative md:pt-5 pt-3 pb-4 md:px-9 px-5 rounded-[30px]">
                  <span className="absolute md:right-5 right-4 md:top-6 top-3">
                    <img
                      className="max-md:h-8"
                      src="/assets/images/number-1.png"
                      alt=""
                    />
                  </span>
                  <div className="w-full max-w-[700px]">
                    <h5 className="text-[#046DA8] font-bold text-[20px] md:text-[32px] md:leading-none pr-5">
                      もう二度と会えない」絶望から、再会の喜びへ
                    </h5>
                    <p className="md:text-[17px] text-[14px] font-medium mt-4">
                      大切なペットとの別れは、誰もが経験する悲しみ。「メタでペット供養」は、そんな悲しみに寄り添いながら、ペットとの新たな絆を紡ぐ機会を提供してくれているようです。
                    </p>
                  </div>
                  <div className="flex gap-8 max-lg:flex-col max-lg:items-center md:mt-6 mt-3">
                    <figure>
                      <img className="max-md:w-[180px]" src="/assets/images/img-story-01.png" alt="" />
                    </figure>
                    <div className="flex-1 flex md:gap-8 gap-4 max-md:flex-col">
                      <div className="w-full h-full max-w-[410px] border border-[#6F9D23] bg-[#F7FCEC] relative pb-6">
                        <div className="flex pl-1">
                          <figure>
                            <img
                              className="max-md:w-6"
                              src="/assets/images/quote-xl.png"
                              alt=""
                            />
                          </figure>
                        </div>
                        <div className="flex justify-center md:px-7 px-3 py-3 text-[#693109]">
                          <p className="md:text-[17px] text-[13px] leading-[1.7] font-medium">
                            愛犬を亡くした悲しみで、毎日涙が止まりませんでした。二度と会えないという現実を受け止めることは容易ではありません。それが『メタでペット供養』に出会ってからは、メタバース内で愛犬に再会できる喜びが、悲しみに寄り添ってくれるようになったんです。
                          </p>
                        </div>
                        <div className="text-right absolute bottom-0 inset-x-0">
                          <span className="md:text-[16px] text-[14px] pr-3 pb-2 inline-block text-[#693109]">
                            (40代女性)
                          </span>
                        </div>
                      </div>
                      <div className="w-full h-full max-w-[410px] border border-[#6F9D23] bg-[#F7FCEC] relative pb-6">
                        <div className="flex pl-1">
                          <figure>
                            <img
                              className="max-md:w-6"
                              src="/assets/images/quote-xl.png"
                              alt=""
                            />
                          </figure>
                        </div>
                        <div className="flex justify-center md:px-7 px-3 py-3 text-[#693109]">
                          <p className="md:text-[17px] text-[13px] leading-[1.7] font-medium">
                            妻が他界した後、妻が可愛がっていた猫も旅立ってしまい、喪失感に圧倒されていました。でも、『メタでペット供養』のおかげで、妻と猫の思い出を大切に守り続けることができる。そう思えた時、ペットとの絆に加え、メタバース上の猫を通じて妻とのつながりを再確認できたんです。
                          </p>
                        </div>
                        <div className="text-right absolute bottom-0 inset-x-0">
                          <span className="md:text-[16px] text-[14px] pr-3 pb-2 inline-block text-[#693109]">
                            (60代男性)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" w-full max-w-[1216px] border border-[#046DA8] bg-[#F0FBFB] relative md:pt-5 pt-3 pb-4 md:px-9 px-5 rounded-[30px]">
                  <span className="absolute md:right-5 right-4 md:top-6 top-3">
                    <img
                      className="max-md:h-8"
                      src="/assets/images/number-2.png"
                      alt=""
                    />
                  </span>
                  <div className="w-full max-w-[700px]">
                    <h5 className="text-[#046DA8] font-bold text-[20px] md:text-[32px] md:leading-none pr-5">
                    ペットとの絆が、メタバースで永遠に
                    </h5>
                    <p className="md:text-[17px] text-[14px] font-medium mt-4">
                    『メタでペット供養』は大切なペットとの絆を、メタバースの中で新たな形で継続していくことを可能にします。
                    </p>
                  </div>
                  <div className="flex gap-8 max-lg:flex-col max-lg:items-center md:mt-6 mt-3">
                    <figure>
                      <img className="max-md:w-[180px]" src="/assets/images/img-story-02.png" alt="" />
                    </figure>
                    <div className="flex-1 flex md:gap-8 gap-4 max-md:flex-col">
                      <div className="w-full h-full max-w-[410px] border border-[#6F9D23] bg-[#F7FCEC] relative pb-6">
                        <div className="flex pl-1">
                          <figure>
                            <img
                              className="max-md:w-6"
                              src="/assets/images/quote-xl.png"
                              alt=""
                            />
                          </figure>
                        </div>
                        <div className="flex justify-center md:px-7 px-3 py-3 text-[#693109]">
                          <p className="md:text-[17px] text-[13px] leading-[1.7] font-medium">
                          『メタでペット供養』に出会う前は、ペットとの思い出が薄れていくことが怖くて仕方なかった。でも今は、メタバース内のあの子と過ごす時間が、私とペットの絆を確かなものにしてくれています。メタバースと聞いた時、私には難しいかもと思ったけど、やってみるとスマホの操作だけで簡単なのもよかったです。
                          </p>
                        </div>
                        <div className="text-right absolute bottom-0 inset-x-0">
                          <span className="md:text-[16px] text-[14px] pr-3 pb-2 inline-block text-[#693109]">
                            (60代女性)
                          </span>
                        </div>
                      </div>
                      <div className="w-full h-full max-w-[410px] border border-[#6F9D23] bg-[#F7FCEC] relative pb-6">
                        <div className="flex pl-1">
                          <figure>
                            <img
                              className="max-md:w-6"
                              src="/assets/images/quote-xl.png"
                              alt=""
                            />
                          </figure>
                        </div>
                        <div className="flex justify-center md:px-7 px-3 py-3 text-[#693109]">
                          <p className="md:text-[17px] text-[13px] leading-[1.7] font-medium">
                          亡くなったペットの思い出の品を、デジタルの形で残せるのは本当に嬉しい。メタバース上再現されたあの子に作ってあげたおもちゃを見るたび、私たちの絆は新たな形で続いていくんだと実感するんです。現実では、おもちゃとあの子を一緒に見れる機会はもうありませんから。
                          </p>
                        </div>
                        <div className="text-right absolute bottom-0 inset-x-0">
                          <span className="md:text-[16px] text-[14px] pr-3 pb-2 inline-block text-[#693109]">
                            (20代男性)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" w-full max-w-[1216px] border border-[#046DA8] bg-[#F0FBFB] relative md:pt-5 pt-3 pb-4 md:px-9 px-5 rounded-[30px]">
                  <span className="absolute md:right-5 right-4 md:top-6 top-3">
                    <img
                      className="max-md:h-8"
                      src="/assets/images/number-3.png"
                      alt=""
                    />
                  </span>
                  <div className="w-full max-w-[700px]">
                    <h5 className="text-[#046DA8] font-bold text-[20px] md:text-[32px] md:leading-none pr-5">
                    ペットロスと向き合い、前を向く力をくれる
                    </h5>
                    <p className="md:text-[17px] text-[14px] font-medium mt-4">
                    『メタでペット供養』はペットとの再会だけでなく、ペットロスの悲しみと向き合い、前を向く力も与えてくれます。
                    </p>
                  </div>
                  <div className="flex gap-8 max-lg:flex-col max-lg:items-center md:mt-6 mt-3">
                    <figure>
                      <img className="max-md:w-[180px]" src="/assets/images/img-story-03.png" alt="" />
                    </figure>
                    <div className="flex-1 flex md:gap-8 gap-4 max-md:flex-col">
                      <div className="w-full h-full max-w-[410px] border border-[#6F9D23] bg-[#F7FCEC] relative pb-6">
                        <div className="flex pl-1">
                          <figure>
                            <img
                              className="max-md:w-6"
                              src="/assets/images/quote-xl.png"
                              alt=""
                            />
                          </figure>
                        </div>
                        <div className="flex justify-center md:px-7 px-3 py-3 text-[#693109]">
                          <p className="md:text-[17px] text-[13px] leading-[1.7] font-medium">
                          メタバースであの子に再会した時、あの子が亡くなったという現実に改めて向き合うことになりました。でも、AI僧侶の読経を聞いているうちに、少しずつ気持ちの整理がつき、前を向く勇気が湧いてきたんです。ああ、自分に足りなかったのは、
                          </p>
                        </div>
                        <div className="text-right absolute bottom-0 inset-x-0">
                          <span className="md:text-[16px] text-[14px] pr-3 pb-2 inline-block text-[#693109]">
                            (40代女性)
                          </span>
                        </div>
                      </div>
                      <div className="w-full h-full max-w-[410px] border border-[#6F9D23] bg-[#F7FCEC] relative pb-6">
                        <div className="flex pl-1">
                          <figure>
                            <img
                              className="max-md:w-6"
                              src="/assets/images/quote-xl.png"
                              alt=""
                            />
                          </figure>
                        </div>
                        <div className="flex justify-center md:px-7 px-3 py-3 text-[#693109]">
                          <p className="md:text-[17px] text-[13px] leading-[1.7] font-medium">
                          ペットロスの悲しみと向き合うことは容易ではありませんでした。『メタでペット供養』は、そんな私に寄り添い、ペットの死を受け止める機会をくれました。あの子はもういないけれど、私の心の中で生き続けている。そう実感できたことで、前を向いて生きていこうと思えるようになったんです。
                          </p>
                        </div>
                        <div className="text-right absolute bottom-0 inset-x-0">
                          <span className="md:text-[16px] text-[14px] pr-3 pb-2 inline-block text-[#693109]">
                            (50代男性)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="fade-up flex justify-center">
          <a
            href="/"
            className="md:w-[700px] md:h-[118px] w-[320px] h-20 font-sns text-white font-bold md:text-[32px] text-[20px] flex items-center justify-center md:rounded-[60px] rounded-[40px] bg-[#F12929] duration-150 hover:opacity-75"
          >
            価格・キャンペーンを確認する
          </a>
        </div>
      </div>
    </section>
  );
};

export default Story;
