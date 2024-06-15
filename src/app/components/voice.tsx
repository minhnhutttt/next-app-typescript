"use client";
import Button from "@/components/button";
import useScrollAnimations from "@/hooks/useScrollAnimations";
import { useState } from "react";

const data = [
  {
    image: "/assets/images/voice-01.png",
    title: "「もう二度と会えない」絶望から、再会の喜びへ",
    text: (
      <>
        大切なペットとの別れは、誰もが経験する悲しみ。「メタでペット供養」は、そんな悲しみに寄り添いながら、ペットとの新たな絆を紡ぐ機会を提供してくれているようです。
      </>
    ),
    quotes: [
      {
        quote: (
          <>
            愛犬を亡くした悲しみで、毎日涙が止まりませんでした。
            <span className="bg-[linear-gradient(to_top,_#8EC5FC_30%,_transparent_30%)]">
              二度と会えないという現実を受け止めることは容易ではありません。
            </span>
            それが『メタでペット供養』に出会ってからは、メタバース内で愛犬に再会できる喜びが、悲しみに寄り添ってくれるようになったんです。
          </>
        ),
        sign: "(40代女性)",
      },
      {
        quote: (
          <>
            妻が他界した後、妻が可愛がっていた猫も旅立ってしまい、喪失感に圧倒されていました。でも、
            <span className="bg-[linear-gradient(to_top,_#8EC5FC_30%,_transparent_30%)]">
              『メタでペット供養』のおかげで、妻と猫の思い出を大切に守り続けることができる。
            </span>
            そう思えた時、ペットとの絆に加え、メタバース上の猫を通じて妻とのつながりを再確認できたんです。
          </>
        ),
        sign: "(40代女性)",
      },
    ],
  },
  {
    image: "/assets/images/voice-02.png",
    title: "ペットとの絆が、メタバースで永遠に",
    text: (
      <>
        『メタでペット供養』は、大切なペットとの絆を、メタバースの中で新たな形で継続していくことを可能にします。
      </>
    ),
    quotes: [
      {
        quote: (
          <>
            『メタでペット供養』に出会う前は、
            <span className="bg-[linear-gradient(to_top,_#8EC5FC_30%,_transparent_30%)]">
              ペットとの思い出が薄れていくことが怖くて
            </span>
            仕方なかった。でも今は、メタバース内のあの子と過ごす時間が、私とペットの絆を確かなものにしてくれています。メタバースと聞いた時、私には難しいかもと思ったけど、やってみるとスマホの操作だけで簡単なのもよかったです
          </>
        ),
        sign: "(60代女性)",
      },
      {
        quote: (
          <>
            亡くなったペットの思い出の品を、デジタルの形で残せるのは本当に嬉しい。メタバース上再現された
            <span className="bg-[linear-gradient(to_top,_#8EC5FC_30%,_transparent_30%)]">
              あの子に作ってあげたおもちゃを見るたび、私たちの絆は新たな形で続いていくん
            </span>
            だと実感するんです。
          </>
        ),
        sign: "(20代女性)",
      },
    ],
  },
  {
    image: "/assets/images/voice-03.png",
    title: "ペットロスと向き合い、前を向く力をくれる",
    text: (
      <>
        『メタでペット供養』は、ペットとの再会だけでなく、ペットロスの悲しみと向き合い、前を向く力も与えてくれます。
      </>
    ),
    quotes: [
      {
        quote: (
          <>
            『メタでペット供養』に出会う前は、
            <span className="bg-[linear-gradient(to_top,_#8EC5FC_30%,_transparent_30%)]">
              ペットとの思い出が薄れていくことが怖くて
            </span>
            仕方なかった。でも今は、メタバース内のあの子と過ごす時間が、私とペットの絆を確かなものにしてくれています。メタバースと聞いた時、私には難しいかもと思ったけど、やってみるとスマホの操作だけで簡単なのもよかったです
          </>
        ),
        sign: "(40代女性)",
      },
      {
        quote: (
          <>
            ペットロスの悲しみと向き合うことは容易ではありませんでした。
            <span className="bg-[linear-gradient(to_top,_#8EC5FC_30%,_transparent_30%)]">
              『メタでペット供養』は、そんな私に寄り添い、ペットの死を受け止める機会をくれました。
            </span>
            あの子はもういないけれど、私の心の中で生き続けている。そう実感できたことで、前を向いて生きていこうと思えるようになったんです。
          </>
        ),
        sign: "(20代女性)",
      },
    ],
  },
];
const Voice = () => {
  const ref = useScrollAnimations();
  const [expanded, setExpanded] = useState<boolean[]>(
    new Array(data.length).fill(false)
  );

  const toggleExpand = (index: number) => {
    setExpanded(expanded.map((exp, i) => (i === index ? !exp : exp)));
  };
  return (
    <section ref={ref} className="md:pb-[151px] pb-20 overflow-hidden">
      <div className="fade-up gradient-03 px-5 text-center md:h-[255px] h-[180px] flex items-center justify-center text-white font-bold xl:text-[48px] text-[clamp(20px,5.5vw,36px)] md:text-[clamp(32px,3.8vw,48px)]">
        「メタでペット供養」が紡いだ <br />
        ペットとの新たな絆の物語
      </div>
      <div className="md:pb-[20px] pb-[40px]">
        <div className="w-full md:max-w-[1440px] max-w-[540px] mx-auto md:pt-[60px] pt-12 flex px-2.5 gap-5 flex-wrap justify-center">
          {data.map((item, index) => (
            <div key={index}>
              <div
                className={`fade-up relative md:w-[460px] max-md:max-w-[400px] w-full duration-200 ${expanded[index] ? "md:h-auto" : "md:h-[967px]"} ${expanded[index] ? "md:h-auto" : "md:h-[800px]"} overflow-hidden bg-white rounded-[10px] [box-shadow:0px_0px_50px_0px_rgba(142,_197,_252,_0.40)]`}
              >
                <figure>
                  <img src={item.image} alt="" />
                </figure>
                <div className="md:mt-[28px] mt-4 px-7">
                  <h5 className="md:text-[18px] text-[16px] font-bold text-gradient-01 flex items-center gap-[5px] tracking-tight">
                    <span className="w-[5px] gradient-03 h-[38px]"></span>
                    <span>{item.title}</span>
                  </h5>
                  <p className="md:text-[16px] text-[13px] mt-4 font-medium leading-[1.4] break-all h-[110px]">
                    {item.text}
                  </p>
                  <div className="space-y-6 pb-9">
                    {item.quotes.map((item, index) => (
                      <div className="w-full pt-2" key={index}>
                        <div className="flex gap-2 pl-1">
                          <figure>
                            <img
                              className="max-md:w-6"
                              src="/assets/images/quote-left-p.png"
                              alt=""
                            />
                          </figure>
                          <span className="flex-1 bg-[#C8AEE0] h-0.5"></span>
                        </div>
                        <div className="flex justify-center md:px-5 px-3 py-3">
                          <p className="md:text-[16px] text-[13px] leading-snug font-medium">
                            {item.quote}
                          </p>
                        </div>
                        <div className="flex items-end gap-2 pr-1">
                          <div className="flex-1 text-right">
                            <span className="md:text-[16px] text-[14px] pr-7 pb-1 inline-block">
                              {item.sign}
                            </span>
                            <span className="block bg-[#C8AEE0] h-0.5"></span>
                          </div>
                          <figure>
                            <img
                              className="max-md:w-6"
                              src="/assets/images/quote-right-p.png"
                              alt=""
                            />
                          </figure>
                        </div>
                      </div>
                    ))}
                  </div>
                  {!expanded[index] && (
                    <div className="absolute bottom-0 inset-x-0 bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.70)_0%,_#FFF_100%)] flex justify-center py-9">
                      <button
                        className="w-[240px] h-10 flex items-center justify-center rounded-[50px] gradient-03 md:text-[16px] text-[13px] gap-2 text-white duration-150 hover:opacity-75"
                        onClick={() => toggleExpand(index)}
                      >
                        <figure>
                          <img src="/assets/images/ic-btn-expand.svg" alt="" />
                        </figure>
                        <span>続きを読む</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="fade-up px-5">
        <div className="w-full max-w-[1141px] mx-auto xl:pt-[90px] pt-8 relative md:pb-6 pb-4">
          <span className="xl:absolute top-2 left-[90px]">
            <img
              className="max-md:w-[120px]"
              src="/assets/images/slider-animal-04.png"
              alt=""
            />
          </span>
          <div className="w-full max-w-[800px] mx-auto md:bg-[url('/assets/images/line.png')] bg-[url('/assets/images/line-sp.png')] bg-repeat-y bg-bottom">
            <p className="md:text-[20px] text-[16px] font-medium md:leading-[2.7] leading-[2.2]">
              『メタでペット供養』が紡いだ、ペットとの新たな絆の物語。これらの体験談は、ほんの一例に過ぎません。あなた様が実際に体験すると、また別の感じ方・捉え方をされるかもしれません。それもまた、あなた様とペットとの絆を紡ぐ、かけがえのない物語の一部です。
            </p>
          </div>
          <span className="md:absolute block bottom-0 right-20">
            <img
              className="max-md:w-[60px] max-md:ml-auto"
              src="/assets/images/slider-animal-05.png"
              alt=""
            />
          </span>
        </div>
      </div>
      <div className="fade-up px-5 pt-2">
        <div className="fade-up w-full max-w-[1141px] mx-auto flex items-center md:gap-[35px] gap-7 max-md:flex-col relative ">
          <figure>
            <img
              className="max-md:w-[200px]"
              src="/assets/images/img-staff.png"
              alt=""
            />
          </figure>
          <div className="w-full max-w-[747px] flex-1">
            <div className="rounded-[40px] border-2 border-[#C985FF] bg-white/40 bg-[url('/assets/images/bg-memories-03.png')] bg-no-repeat bg-right-bottom md:text-[20px] text-[18px] font-medium md:py-[31px] md:px-[51px] py-4 px-6 leading-[1.8] tracking-wide">
              家族同然のペットとの“おもいで”を振り返り、新たな絆を育む。
              <br className="max-md:hidden" />
              そんな温かく深い時間を、ぜひ「メタでペット供養」で過ごしてみませんか？
            </div>
          </div>
          <span className="absolute block lg:-bottom-2 md:-bottom-4 -bottom-20 -right-14 md:w-[148px] w-[100px] max-md:ml-auto">
            <img src="/assets/images/slider-animal-06.png" alt="" />
          </span>
        </div>
      </div>
      <div className="fade-up flex justify-center md:mt-20 mt-7">
        <Button
          href="#"
          rect="md:w-[410px] w-[310px] h-20 md:text-[20px] text-[16px]"
        >
          価格・キャンペーンを確認する
        </Button>
      </div>
    </section>
  );
};

export default Voice;
