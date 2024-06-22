"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";
import { Splide, SplideSlide, SplideTrack } from "react-splide-ts";
import "@splidejs/splide/css";
import "@splidejs/splide/css/core";
const dataSlider = [
  {
    image: "/assets/images/slider-01.png",
    title: "美しい自然に囲まれた、厳かなリアル供養所",
    text: (
      <>
        沖縄県宮古島の美しい自然に囲まれた狩俣供養所。青い海と白い砂浜、そよ風が運ぶハイビスカスの香り。その静謐な空間に佇む供養所は、まるでペットたちに安らぎを与えているかのようです。ここで過ごす時間は、愛するペットへの感謝の気持ちを捧げる大切なひとときとなるでしょう。
      </>
    ),
    quote: (
      <>
        こんなに美しい場所で、愛するあの子のために手を合わせられるなんて…。頻繁には来れないけど、私には大切な時間となっています。狩俣供養所での時間は、悲しみを乗り越える力をくれるんです。
      </>
    ),
    sign: "(40代女性)",
  },
  {
    image: "/assets/images/slider-02.png",
    title: " メタバースならではの特別な体験",
    text: (
      <>
        画面の中に映し出されるペットの姿や鳴き声は、まるで本当にそこにいるかのよう。ペットとの楽しい会話、一緒に過ごした部屋、思い出のおもちゃなど、大切な瞬間がデジタルの世界で鮮やかによみがえります。メタバースでのペットとの再会は、悲しみを癒し、絆を確かめ合う特別な体験となるでしょう。
      </>
    ),
    quote: (
      <>
        メタバース上のあの子は、リアルに再現されていて驚きました。あの子との“おもいで”の風化を止め、メタバースを通じて心の中で生き続けさせる大切さを実感しました。
      </>
    ),
    sign: "(50代女性)",
  },
  {
    image: "/assets/images/slider-03.png",
    title: "大切な“おもいで”を風化させないために",
    text: (
      <>
        メタバース空間には、3Dデータ化された思い出のアイテムを自由に展示できる機能も。ペットが愛用していたおもちゃや首輪、写真など、あの子との大切な思い出の品々を、美しく飾ることができます。それらはペットとの絆を象徴する大切な宝物。“おもいで”の品を通して、ペットとの絆を永遠のものにしていく助けとなるでしょう。
      </>
    ),
    quote: (
      <>
        亡くなったペットの思い出の品を、デジタルの形で残せるのは本当に嬉しい。あの子はもういないけれど、こうして思い出の品を通した体験がペットロスを乗り越える原動力になっているんだと思います。
      </>
    ),
    sign: "(30代女性)",
  },
  {
    image: "/assets/images/slider-04.png",
    title: "AI僧侶による読経と定期的な供養で、安らぎを",
    text: (
      <>
        『メタでペット供養』では、AI僧侶による厳かな読経も行われます。故人を弔う際と同じように、ペットのために心を込めて供養を捧げる姿に、深い安らぎを覚えずにはいられません。定期的な法要は、ペットの死を受け止め、前に進む力を与えてくれます。ペットとの再会を喜ぶ一方で、死と向き合うことの大切さを教えてくれるのです。
      </>
    ),
    quote: (
      <>
        AI僧侶の読経は自然で荘厳。読経にあいつも喜んでいるような気がして、定期的に法要をするようになりました。読経を聞いていると、不思議と自分の悩みも和らぐので、毎月の日課となっています。
      </>
    ),
    sign: "(30代女性)",
  },
];
const data = [
  {
    id: "1",
    image: "/assets/images/s1.png",
    title: "現実の供養所",
    content: "「KARIMATA(狩俣)供養所」で、ペットの遺骨や遺品を供養",
  },
  {
    id: "2",
    image: "/assets/images/s2.png",
    title: "メタバース空間",
    content: "「KARIMATA(狩俣)メタバース」で、ペットとの“おもいで”を紡ぎなおす",
  },
  {
    id: "3",
    image: "/assets/images/s3.png",
    title: (
      <>
        “おもいで”が
        <br />
        よみがえる
      </>
    ),
    content: "風化しかけたペットの姿や鳴き声、一緒に過ごした記憶がみがえる",
  },
  {
    id: "4",
    image: "/assets/images/s4.png",
    title: "2D/3D化",
    content:
      "2D/3Dデータ化されたペットや“おもいで”の品をメタバース内に展示可能",
  },
  {
    id: "5",
    image: "/assets/images/s5.png",
    title: (
      <>
        ペットの冥福
        <br />
        を祈る
      </>
    ),
    content: "AI僧侶による定期的な読経やお線香をあげる体験でペットの冥福を祈る",
  },
];

const Introduction = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="overflow-hidden md:pb-[135px] pb-20">
      <div className="fade-up md:bg-[url('/assets/images/bg-title-03.png')] md:bg-cover bg-no-repeat bg-left-bottom md:h-[197px] bg-[#2FB4AC] relative flex items-center max-dt:pl-[361px] max-md:justify-center dt:justify-center max-md:px-5 max-md:flex-col max-md:py-10">
        <p className="font-serif text-white font-black md:text-[2.708vw] dt:text-[39px] text-[5vw] w-full md:max-w-[51.389vw] dt:max-w-[740px]">
          「メタでペット供養」とは？
        </p>
        <span className="md:absolute bottom-4 right-4 dt:right-28 max-md:w-full max-md:mt-5">
          <img
            className="dt:w-[361px] md:w-[25.069vw] w-[50vw] ml-auto"
            src="/assets/images/sign-title-01.png"
            alt=""
          />
        </span>
      </div>
      <div className="w-full max-w-[1440px] mx-auto mt-4 md:pr-7">
        <div className="bg-[url('/assets/images/bg-intro.png')] bg-cover bg-no-repeat">
          <div className="fade-up w-full max-w-[1280px] py-8 border-b border-black/50 text-[#5F5F5F] md:text-[28px] text-[19px] font-semibold font-serif max-md:px-3 max-md:text-center md:pl-16">
            「メタでペット供養」は、現実とメタバースでの供養が織りなす、新しい供養のカタチです
          </div>
          <div className="">
            <div className="fade-up flex items-start mt-6 max-md:px-4 pr-4 max-md:flex-col max-md:items-center max-md:justify-center">
              <figure className="md:-ml-4 max-md:w-auto max-xl:w-1/2">
                <img
                  className="max-md:max-w-[400px]"
                  src="/assets/images/img-intro-01.png"
                  alt=""
                />
              </figure>
              <div className="bg-white/60 max-w-[636px] md:min-h-[205px] flex-1 px-9 py-8  font-medium md:text-[20px] text-[16px] md:mt-8 md:-ml-6 max-md:mt-5">
                現実の供養所である「KARIMATA(狩俣)供養所」とメタバース供養所が融合することで、ペットとの再会の喜びと死への向き合いをバランス良く体験可能です。あなた様とペットだけの特別な空間がそこには広がっています。
              </div>
            </div>
            <div className="w-full max-w-[1220px] mx-auto mt-9 mb-20">
              <div className="flex flex-wrap justify-center w-full max-w-[1040px] gap-x-[52px] gap-y-6">
                {data.map((item, index) => (
                  <div
                    className="fade-up size-[312px] relative rounded-full overflow-hidden"
                    key={index}
                  >
                    <figure>
                      <img src={item.image} alt="" />
                    </figure>
                    <div className="absolute inset-0">
                      <div className="w-[225px] mx-auto pt-12">
                        <p className="h-[67px] flex items-center justify-center text-[22px]  text-center font-bold text-[#367A6E]">
                          {item.title}
                        </p>
                        <div className="border-t border-black mt-2 text-[#113931] px-4 text-[17px] font-medium pt-4">
                          {item.content}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="fade-up px-5">
                <div className="w-full max-w-[664px] mx-auto border-2 border-[#F1A819]/[50] bg-white/50 rounded-[36px] min-h-[131px] px-[50px] py-8 md:text-[17px] text-[#903400] ">
                「メタでペット供養」は、ペットロスに悩む方々に寄り添い、ペットとの絆を永遠に大切にするお手伝いをします。。
                </div>
            </div>
            <div className="md:pl-[125px] pl-6 mt-10 md:mt-[145px] mb-10 md:-mr-7 ">
              <div className="fade-up bg-[linear-gradient(94deg,_#DD6B5C_21.94%,_#B72E2E_92.77%)] md:text-[26px] text-[18px] text-white font-bold  md:pl-[85px] pl-8 py-6">
                ペットとの絆を深める特別な体験がここに。
                <br />
                再会を喜び、冥福を祈る新たなペット供養の選択肢
              </div>
              <div className="fade-up mt-10">
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
                    <SplideTrack>
                      {dataSlider.map((item, index) => (
                        <SplideSlide key={index}>
                          <div className="md:w-[421px] w-[320px] md:h-[790px] h-[690px] bg-white border border-[#707070] mr-4 md:mr-[25px] p-5">
                            <figure>
                              <img src={item.image} alt="" />
                            </figure>
                            <div className="md:mt-[28px] mt-5">
                              <h5 className="md:text-[18px] text-[16px] font-bold underline">
                                <span>{item.title}</span>
                              </h5>
                              <p className="md:text-[16px] text-[13px] text-[#1B0220] mt-6 font-medium leading-[1.65] break-all min-h-[184px]">
                                {item.text}
                              </p>
                              <div className="w-full border border-[#6F9D23] bg-[#F7FCEC] md:mt-7 mt-5 md:min-h-[230px]">
                                <div className="flex pl-1">
                                  <figure>
                                    <img
                                      className="max-md:w-6"
                                      src="/assets/images/quote.png"
                                      alt=""
                                    />
                                  </figure>
                                </div>
                                <div className="flex justify-center md:px-5 px-3 py-3">
                                  <p className="md:text-[16px] text-[13px] leading-[1.7] font-medium">
                                    {item.quote}
                                  </p>
                                </div>
                                <div className="text-right">
                                  <span className="md:text-[16px] text-[14px] pr-3 pb-2 inline-block">
                                    {item.sign}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SplideSlide>
                      ))}
                    </SplideTrack>
                    <div className="splide__arrows flex gap-4 justify-center mt-8">
                      <button className=" splide__arrow--prev hover:opacity-50 duration-150">
                        <img
                          className="max-md:w-12"
                          src="/assets/images/arrow-prev.png"
                          alt=""
                        />
                      </button>
                      <button className=" splide__arrow--next hover:opacity-50 duration-150">
                        <img
                          className="max-md:w-12"
                          src="/assets/images/arrow-next.png"
                          alt=""
                        />
                      </button>
                    </div>
                  </div>
                </Splide>
              </div>
            </div>
            <div className="px-5">
                <div className="fade-up w-full max-w-[1050px] mx-auto md:mb-[66px] mb-9 bg-[#FDFDF5] border border-[#A5A5A5] pt-5 bg-[url('/assets/images/bg-girl.png')] bg-no-repeat bg-right-bottom max-md:bg-[length:70vw_auto] md:pb-9 pb-[30vw] px-5">
                    <p className="text-center md:text-[23px] text-[18px] font-semibold font-mincho mb-1">私たちの信念</p>
                    <div className="flex justify-center items-center"><img src="/assets/images/our-belief.png" alt="" /></div>
                    <div className="w-full max-w-[886px] mx-auto md:my-12 my-8">
                        <p className="font-semibold md:text-[19px] text-[15px] font-serif leading-[2]">
                         「メタでペット供養」は、ペットとの再会の喜びと死への向き合いのバランスを大切にしています。<br />
                        そのどちらもが、ペットとの真の絆を育む上で欠かせない要素だと考えているからです。<br />
                        <span className="text-[#F12929] font-black">ペットロスに悩む方々に寄り添い、家族同然のペットとの絆</span>を永遠に大切にする。
                        </p>
                        <div className="md:pr-[130px]">
                            <p className="max-w-[706px] font-semibold md:text-[19px] text-[15px] font-mincho leading-[2] mt-5">
                                それが、私たちの使命です。もしあなた様が、愛するペットとの絆を、新たな形で紡ぎなおしたいと願うのなら、ぜひ「メタでペット供養」をご利用ください。
                            </p>
                        </div>
                    </div>
                    <div className="bg-white/80 border border-[#BBB]/[0.8] w-full max-w-[628px] font-mincho font-semibold md:text-[19px] text-[15px] leading-[2.2] mx-auto md:p-6 p-4 md:pb-10 pb-7">
                        私たちは、あなた様とペットの“おもいで”に心を込めて向き合い、<br className="max-md:hidden" />
                        ペットとの絆を深める特別な体験を、全力でサポートいたします。
                    </div>
                </div>
                <div className="fade-up flex justify-center">
                  <a href="/" className="md:w-[700px] md:h-[118px] w-[320px] h-20 font-sns text-white font-bold md:text-[32px] text-[20px] flex items-center justify-center md:rounded-[60px] rounded-[40px] bg-[#F12929] duration-150 hover:opacity-75">
                  価格・キャンペーンを確認する
                  </a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
