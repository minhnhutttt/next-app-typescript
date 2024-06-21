"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const Fear = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="overflow-hidden md:pb-[88px] pb-14">
      <div className="md:bg-[url('/assets/images/bg-title-01.png')] md:bg-cover bg-no-repeat bg-left-bottom md:h-[197px] bg-[#657FD8] relative flex items-center max-dt:pl-[361px] max-md:justify-center dt:justify-center max-md:px-5 max-md:flex-col max-md:py-10">
        <p className="font-serif text-white font-black md:text-[2.708vw] dt:text-[39px] text-[5vw] w-full md:max-w-[51.389vw] dt:max-w-[740px]">
          愛するペットとの 『 おもいで 』が <br />
          少しずつ風化していく恐怖…
        </p>
        <span className="md:absolute bottom-4 right-4 dt:right-28 max-md:w-full max-md:mt-5">
          <img
            className="dt:w-[361px] md:w-[25.069vw] w-[50vw] ml-auto"
            src="/assets/images/sign-title-01.png"
            alt=""
          />
        </span>
      </div>
      <div className="w-full max-w-[1440px] mx-auto mt-4 md:pr-7 pr-4">
        <div className="bg-[#DBF3FF] bg-[url('/assets/images/bg-fear.png')] bg-no-repeat bg-left-bottom pb-[50vw] max-md:bg-[length:100%_auto] md:pb-[537px]">
          <div className="w-full max-w-[1000px] py-8 border-b border-black/50 text-[#5F5F5F] md:text-[28px] text-[19px] font-semibold font-serif max-md:px-3 max-md:text-center md:pl-24">
            ペットを亡くした悲しみは、
            <br className="lg:hidden" />
            言葉では表せないほど深いものです。
          </div>
          <div className="px-5 pt-8">
            <div className="w-full md:max-w-[1220px] max-w-[540px] mx-auto">
              <div className="fade-up flex md:items-end max-md:flex-col max-md:justify-center items-center">
                <figure className="pb-6 max-lg:w-1/2 max-md:w-auto">
                  <img src="/assets/images/img-fear-01.png" alt="" />
                </figure>
                <div className="flex-1">
                  <p className="max-w-[672px] font-inter md:text-[17px] text-[14px] text-[#333] bg-white/90 md:-ml-16 py-6 md:px-10 px-5 md:min-h-[190px] flex items-center">
                    自宅や一緒に行った場所でふと思い出す、あの子の「声」「吐息」「仕草」「体温」「柔らかな毛並」。
                    <br />
                    <br />
                    何気ない日常のひとコマひとコマが、今は悲しみに変わって胸を締め付けます。
                  </p>
                </div>
              </div>
              <div className="w-full md:max-w-[914px] max-w-[440px] mx-auto md:pl-2 pt-6">
                <div className="fade-up border-2 border-[#7895EA]/[0.5] rounded-[36px] flex justify-center gap-6 bg-white/50 max-w-[760px] pt-6 md:pt-10 pb-5 md:px-9 px-4 mb-3 max-md:flex-col">
                  <figure>
                    <img
                      className="max-md:w-[100px]"
                      src="/assets/images/img-fear-02.png"
                      alt=""
                    />
                  </figure>
                  <p className="md:text-[18px] text-[15px] font-sans flex-1">
                    私も、3年前に最愛の愛犬を亡くしました。あれから一日たりとも、彼女のことを思わない日はありません。でも、月日が経つにつれ、少しずつ記憶があやふやになっていくんです。それが本当に怖いんです。
                    <br />
                    (40代女性)
                  </p>
                </div>
                <div className="fade-up relative border-2 border-[#15B325]/[0.5] rounded-[36px] flex justify-center gap-6 bg-white/50 max-w-[700px] mx-auto pt-6 md:pb-9 pb-32 pl-4 md:pl-9 md:pr-24 pr-4">
                  <p className="md:text-[18px] text-[15px] font-sans flex-1">
                    ペットを亡くしたあなた様は、今このような喪失感や悲しみ、そして大切な“おもいで”を失うことへの恐怖心を抱えているのではないでしょうか。
                    <br />
                    まだペットがご健在の方も、いずれ訪れるその時を真剣に想像してみてください...
                  </p>
                  <figure className="absolute bottom-0 md:right-[-60px] right-[-20px]">
                    <img
                      className="[filter:drop-shadow(4px_4px_4px_rgba(0,_0,_0,_0.25))] max-md:w-[130px]"
                      src="/assets/images/people.png"
                      alt=""
                    />
                  </figure>
                </div>
                <div className="fade-up w-full max-w-[913px] mx-auto md:mt-[30px] mt-10">
                  <div>
                    <h5 className="md:text-[28px] text-[18px] font-medium text-center font-serif">
                      悲しみに暮れるあなた様は、
                      <br className="md:hidden" />
                      こんな風に思っているかもしれません。
                    </h5>
                    <figure className="mt-4">
                      <img src="/assets/images/line-title.png" alt="" />
                    </figure>
                  </div>
                  <div className="w-full max-w-[732px] mx-auto md:mt-12 mt-7 md:space-y-8 space-y-6">
                    <div className="flex items-center md:gap-[30px] gap-5">
                      <figure>
                        <img
                          className="max-md:w-8"
                          src="/assets/images/ic-check.png"
                          alt=""
                        />
                      </figure>
                      <p className="md:text-[18px] text-[14px] font-medium flex-1">
                        この子のために、
                        <span className="bg-[linear-gradient(to_top,_#FBC70F_40%,_transparent_40%)]">
                          心を込めた供養をしてあげたい。
                        </span>
                        でも、仕事や家庭の事情で、思うような供養やお墓参りができない…
                      </p>
                    </div>
                    <div className="flex items-center md:gap-[30px] gap-5">
                      <figure>
                        <img
                          className="max-md:w-8"
                          src="/assets/images/ic-check.png"
                          alt=""
                        />
                      </figure>
                      <p className="md:text-[18px] text-[14px] font-medium flex-1">
                        ペットとの
                        <span className="bg-[linear-gradient(to_top,_#FBC70F_40%,_transparent_40%)]">
                          “おもいで”が、風化してしまう前に形に残しておきたい。
                        </span>
                        でも、どうすればいいのかわからない…
                      </p>
                    </div>
                    <div className="flex items-center md:gap-[30px] gap-5">
                      <figure>
                        <img
                          className="max-md:w-8"
                          src="/assets/images/ic-check.png"
                          alt=""
                        />
                      </figure>
                      <p className="md:text-[18px] text-[14px] font-medium flex-1">
                        あの時、もっとあの子のためにできたことがあったのに。なんで私はほかの事を優先しちゃったんだろう。
                        <span className="bg-[linear-gradient(to_top,_#FBC70F_40%,_transparent_40%)]">
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
        <div className="fade-up relative flex justify-center items-center md:mt-[88px] mt-12">
          <figure>
            <img
              className="max-md:w-[300px]"
              src="/assets/images/ic-triangle.png"
              alt=""
            />
          </figure>
          <div className="absolute inset-0 md:text-[22px] text-[16px] font-medium font-sans justify-center text-center md:pt-20 pt-10">
            <p>
              もしも愛するペットとの絆を永遠に紡ぐ方法があったら…
              <br />
              <span className="underline">
                そんな悲痛な想いに寄り添う、新しい供養のカタチがあります
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fear;
