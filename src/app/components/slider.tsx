"use client";

import { Splide, SplideSlide, SplideTrack } from "react-splide-ts";
import "@splidejs/splide/css";
import "@splidejs/splide/css/core";
import Button from "@/components/button";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const data = [
  {
    image: "/assets/images/slider-01.png",
    title: "美しい自然に囲まれた、厳かなリアル供養所",
    text: (
      <>
        <span className="bg-[linear-gradient(to_top,_#8EC5FC_30%,_transparent_30%)]">沖縄県宮古島の美しい自然に囲まれた「KARIMATA(狩俣)供養所」。</span>青い海と白い砂浜、そよ風が運ぶハイビスカスの香り。その静謐な空間に佇む供養所は、まるでペットたちに安らぎを与えているかのようです。ここで過ごす時間は、愛するペットへの感謝の気持ちを捧げる大切なひとときとなるでしょう。
      </>
    ),
    quote: (
        <>
          こんなに美しい場所で、愛する我が子のために手を合わせられるなんて…。<br /><span className="bg-[linear-gradient(to_top,_#8EC5FC_30%,_transparent_30%)]">KARIMATA(狩俣)供養所での時間は、悲しみを乗り越える力をくれるんです。</span>
        </>
    ),
    sign: "(60代女性)"
  },
  {
    image: "/assets/images/slider-02.png",
    title: "メタバースならではの特別な体験",
    text: (
      <>
        画面の中に映し出されるペットの姿や鳴き声は、まるで本当にそこにいるかのよう。ペットとの楽しい会話、一緒に過ごした部屋、思い出のおもちゃなど、大切な瞬間がデジタルの世界で鮮やかによみがえります。<span className="bg-[linear-gradient(to_top,_#8EC5FC_30%,_transparent_30%)]">メタバースでのペットとの再会は、悲しみを癒し、絆を確かめ合う特別な体験と</span>なるでしょう。そして同時に、<span className="bg-[linear-gradient(to_top,_#8EC5FC_30%,_transparent_30%)]">ペットを失った現実と向き合い、そのロスを受け止める大切なプロセスで</span>もあるのです。
      </>
    ),
    quote: (
        <>
          メタバース上のあの子は、リアルに再現されていて驚きました。でも、それはデジタルの世界のあの子。現実のあの子はもういないという事実と、メタバースでは改めて向き合うことになります。悲しみを感じつつも、<span className="bg-[linear-gradient(to_top,_#8EC5FC_30%,_transparent_30%)]">あの子との“おもいで”の風化を止め、メタバースを通じて心の中で生き続けさせる</span>大切さを実感しました。
        </>
    ),
    sign: "(50代女性)"
  },
  {
    image: "/assets/images/slider-03.png",
    title: "大切な“おもいで”を風化させないために",
    text: (
      <>
        メタバース空間には、3Dデータ化された思い出のアイテムを自由に展示できる機能も。ペットが愛用していたおもちゃや首輪、写真など、あの子との大切な思い出の品々を、美しく飾ることができます。それらは<span className="bg-[linear-gradient(to_top,_#8EC5FC_30%,_transparent_30%)]">ペットとの絆を象徴する大切な宝物。“おもいで”の品を通して、ペットとの絆を永遠のものに</span>していく助けとなるでしょう。
      </>
    ),
    quote: (
        <>
          亡くなったペットの思い出の品を、デジタルの形で残せるのは本当に嬉しい。メタバースに飾られたあの子のお気に入りのおもちゃを見ていると、今でも一緒に過ごしているような、不思議な感覚に包まれるんです。<span className="bg-[linear-gradient(to_top,_#8EC5FC_30%,_transparent_30%)]">あの子はもういないけれど、こうして思い出の品を通して、あの子との絆を感じることができる。</span>それが、ペットロスを乗り越える原動力になっているんだと思います。
        </>
    ),
    sign: "(40代女性)"
  },
  {
    image: "/assets/images/slider-04.png",
    title: "AI僧侶による読経と定期的な供養で、安らぎを",
    text: (
      <>
        『メタでペット供養』では、AI僧侶による厳かな読経も行われます。故人を弔う際と同じように、ペットのために心を込めて供養を捧げる姿に、深い安らぎを覚えずにはいられません。定期的な法要は、<span className="bg-[linear-gradient(to_top,_#8EC5FC_30%,_transparent_30%)]">ペットの死を受け止め、前に進む力を与えてくれます。ペットとの再会を喜ぶ一方で、死と向き合う</span>ことの大切さを教えてくれるのです。
      </>
    ),
    quote: (
        <>
          AI僧侶の読経は、自然で荘厳。読経の音色に、あいつも喜んでいるような気がして…。でも、<span className="bg-[linear-gradient(to_top,_#8EC5FC_30%,_transparent_30%)]">読経はあいつが亡くなったという現実も突きつ</span>けてくる。その現実と向き合うたびに、あいつ<span className="bg-[linear-gradient(to_top,_#8EC5FC_30%,_transparent_30%)]">との絆はより深く、強いものになっていくん</span>です。
        </>
    ),
    sign: "(60代女性)"
  },
];

const Slider = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="md:pb-[160px] pb-24">
        <div className="bg-[url('/assets/images/bg-slider.png')] bg-cover bg-right-top md:pt-[366px] pt-[140px] md:pb-[88px] pb-16">
      <div className="w-full mx-auto">
        <div className="fade-up gradient-03 xl:text-[42px] md:text-[clamp(16px,2.4vw,30px)] text-[clamp(13px,3.2vw,28px)] text-white font-bold md:w-[calc(100%-254px)] w-[calc(100%-40px)] flex md:pl-[105px] pl-5 tracking-widest leading-[1.6] py-5 pr-3">
          <p>
            ペットとの絆を深める特別な体験がここに。
            <br />
            再会を喜び、冥福を祈る新たなペット供養の選択肢
          </p>
        </div>
      </div>
      <div className="md:pl-[105px] pl-6 mt-10 md:mt-[62px]">
        <div className="fade-up">
          <Splide
            hasTrack={false}
            options={{
              autoplay: false,
              type: "loop",
              arrows: true,
              pagination: false,
              autoWidth: true,
            }}
          >
            <div className="relative">
              <div className="splide__arrows md:absolute right-0 md:top-[-135px] flex gap-4 md:w-[254px] w-[140px] justify-center max-md:ml-auto max-md:mb-6">
                <button className=" splide__arrow--prev">
                    <img className="max-md:w-12" src="/assets/images/arrow-prev.svg" alt="" />
                </button>
                <button className=" splide__arrow--next">
                    <img className="max-md:w-12" src="/assets/images/arrow-next.svg" alt="" />
                </button>
              </div>
              <SplideTrack>
                {data.map((item, index) => (
                  <SplideSlide key={index}>
                    <div className="md:w-[460px] w-[320px] md:h-[883px] h-[800px] bg-white rounded-[10px] [box-shadow:0px_0px_50px_0px_rgba(142,_197,_252,_0.40)] mr-4 md:mr-[30px]">
                      <figure>
                        <img src={item.image} alt="" />
                      </figure>
                      <div className="md:mt-[23px] mt-4 px-7">
                        <h5 className="md:text-[18px] text-[16px] font-bold text-gradient-03 flex items-center gap-[5px]">
                            <span className="w-[5px] gradient-03 h-[38px]"></span>
                            <span>
                                {item.title}
                            </span>
                        </h5>
                        <p className="md:text-[16px] text-[13px] mt-4 font-medium leading-[1.6] break-all h-[220px]">
                          {item.text}
                        </p>
                        <div className="w-full pt-2">
                    <div className="flex gap-2 pl-1">
                        <figure>
                            <img className="max-md:w-6" src="/assets/images/quote-left-p.png" alt="" />
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
                            <span className="md:text-[16px] text-[14px] pr-7 pb-1 inline-block">{item.sign}</span>
                            <span className="block bg-[#C8AEE0] h-0.5"></span>
                        </div>
                        <figure>
                            <img className="max-md:w-6" src="/assets/images/quote-right-p.png" alt="" />
                        </figure>
                    </div>
                </div>
                      </div>
                    </div>
                  </SplideSlide>
                ))}
              </SplideTrack>
            </div>
          </Splide>
        </div>
      </div>
      </div>
      <div className="fade-up px-5">
        <div className="w-full max-w-[1141px] mx-auto xl:pt-[90px] pt-8 relative md:pb-12 pb-4">
            <span className="xl:absolute top-12 left-[50px] w-[109px]">
                <img className="max-md:w-[80px]" src="/assets/images/slider-animal-01.png" alt="" />
            </span>
            <div className="w-full max-w-[800px] mx-auto md:bg-[url('/assets/images/line.png')] bg-[url('/assets/images/line-sp.png')] bg-repeat-y bg-bottom">
                <p className="md:text-[20px] text-[16px] font-medium md:leading-[2.7] leading-[2.2]">
                『メタでペット供養』は、ペットとの再会の喜びと死への向き合いのバランスを大切にしています。そのどちらもが、ペットとの真の絆を育む上で欠かせない要素だと考えているからです。<br />ペットロスに悩む方々に寄り添い、家族同然のペットとの絆を永遠に大切にする。それが、私たちの使命です。もしあなた様が、愛するペットとの絆を、新たな形で紡ぎなおしたいと願うのなら、<br />ぜひ「メタでペット供養」をご利用ください。
                </p>
            </div>
            <span className="md:absolute block bottom-0 right-20 md:w-[123px] w-[100px] max-md:ml-auto">
                <img src="/assets/images/slider-animal-02.png" alt="" />
            </span>
        </div>
      </div>
      <div className="fade-up px-5">
      <div className="w-full max-w-[1141px] mx-auto flex items-center md:gap-[35px] gap-7 max-md:flex-col pt-4 relative ">
                <figure>
                    <img className="max-md:w-[200px]" src="/assets/images/img-staff.png" alt="" />
                </figure>
                <div className="w-full max-w-[747px] flex-1">
                    <div className="rounded-[40px] border-2 border-[#C985FF] bg-white/40 bg-[url('/assets/images/bg-memories-03.png')] bg-no-repeat bg-right-bottom md:text-[20px] text-[18px] font-medium md:p-[51px] p-6 leading-[1.8] tracking-wide">
                    私たちは、あなた様とペットの“おもいで”に心を込めて向き合い、ペットとの絆を深める特別な体験を、全力でサポートいたします。
                    </div>
                </div>
                <span className="absolute block lg:bottom-2 md:-bottom-4 -bottom-20 -right-2 md:w-[148px] w-[120px] max-md:ml-auto">
                <img src="/assets/images/slider-animal-03.png" alt="" />
            </span>
            </div>
      </div>
      <div className="fade-up flex justify-center md:mt-11 mt-7">
        <Button href="#" rect="md:w-[410px] w-[310px] h-20 md:text-[20px] text-[16px]">価格・キャンペーンを確認する</Button>
      </div>
    </section>
  );
};

export default Slider;
