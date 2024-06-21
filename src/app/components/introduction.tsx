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
        <span className="bg-[linear-gradient(to_top,_#8EC5FC_30%,_transparent_30%)]">
          沖縄県宮古島の美しい自然に囲まれた「KARIMATA
        </span>
        (狩俣)供養所」。青い海と白い砂浜、そよ風が運ぶハイビスカスの香り。その静謐な空間に佇む供養所は、まるでペットたちに安らぎを与えているかのようです。ここで過ごす時間は、愛するペットへの感謝の気持ちを捧げる大切なひとときとなるでしょう。
      </>
    ),
    quote: (
      <>
        こんなに美しい場所で、愛する我が子のために手を合わせられるなんて…。
        <br />
        KARIMATA(狩俣)供養所での時間は、悲しみを乗り越える力をくれるんです。
      </>
    ),
    sign: "(60代女性)",
  },
  {
    image: "/assets/images/slider-01.png",
    title: "美しい自然に囲まれた、厳かなリアル供養所",
    text: (
      <>
        <span className="bg-[linear-gradient(to_top,_#8EC5FC_30%,_transparent_30%)]">
          沖縄県宮古島の美しい自然に囲まれた「KARIMATA
        </span>
        (狩俣)供養所」。青い海と白い砂浜、そよ風が運ぶハイビスカスの香り。その静謐な空間に佇む供養所は、まるでペットたちに安らぎを与えているかのようです。ここで過ごす時間は、愛するペットへの感謝の気持ちを捧げる大切なひとときとなるでしょう。
      </>
    ),
    quote: (
      <>
        こんなに美しい場所で、愛する我が子のために手を合わせられるなんて…。
        <br />
        KARIMATA(狩俣)供養所での時間は、悲しみを乗り越える力をくれるんです。
      </>
    ),
    sign: "(60代女性)",
  },
  {
    image: "/assets/images/slider-01.png",
    title: "美しい自然に囲まれた、厳かなリアル供養所",
    text: (
      <>
        <span className="bg-[linear-gradient(to_top,_#8EC5FC_30%,_transparent_30%)]">
          沖縄県宮古島の美しい自然に囲まれた「KARIMATA
        </span>
        (狩俣)供養所」。青い海と白い砂浜、そよ風が運ぶハイビスカスの香り。その静謐な空間に佇む供養所は、まるでペットたちに安らぎを与えているかのようです。ここで過ごす時間は、愛するペットへの感謝の気持ちを捧げる大切なひとときとなるでしょう。
      </>
    ),
    quote: (
      <>
        こんなに美しい場所で、愛する我が子のために手を合わせられるなんて…。
        <br />
        KARIMATA(狩俣)供養所での時間は、悲しみを乗り越える力をくれるんです。
      </>
    ),
    sign: "(60代女性)",
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
    <section ref={ref} className="overflow-hidden md:pb-[88px] pb-12">
      <div className="md:bg-[url('/assets/images/bg-title-03.png')] md:bg-cover bg-no-repeat bg-left-bottom md:h-[197px] bg-[#2FB4AC] relative flex items-center max-dt:pl-[361px] max-md:justify-center dt:justify-center max-md:px-5 max-md:flex-col max-md:py-10">
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
      <div className="w-full max-w-[1440px] mx-auto mt-4 md:pr-7 pr-4">
        <div className="bg-[url('/assets/images/bg-intro.png')]">
          <div className="w-full max-w-[1280px] py-8 border-b border-black/50 text-[#5F5F5F] md:text-[28px] text-[19px] font-semibold font-serif max-md:px-3 max-md:text-center md:pl-16">
            「メタでペット供養」は、現実とメタバースでの供養が織りなす、新しい供養のカタチです
          </div>
          <div className="">
            <div className="flex items-start mt-6 max-md:px-4 pr-4 max-md:flex-col max-md:items-center max-md:justify-center">
              <figure className="md:-ml-4 max-md:w-auto max-xl:w-1/2">
                <img
                  className="max-md:max-w-[400px]"
                  src="/assets/images/img-intro-01.png"
                  alt=""
                />
              </figure>
              <div className="bg-white/60 max-w-[636px] md:min-h-[205px] flex-1 px-9 py-8 font-sans font-medium md:text-[20px] text-[16px] md:mt-8 md:-ml-6 max-md:mt-5">
                現実の供養所である「KARIMATA(狩俣)供養所」とメタバース供養所が融合することで、ペットとの再会の喜びと死への向き合いをバランス良く体験可能です。あなた様とペットだけの特別な空間がそこには広がっています。
              </div>
            </div>
            <div className="w-full max-w-[1220px] mx-auto mt-9 mb-20">
              <div className="flex flex-wrap justify-center w-full max-w-[1040px] gap-x-[52px] gap-y-6">
                {data.map((item, index) => (
                  <div
                    className="size-[312px] relative rounded-full overflow-hidden"
                    key={index}
                  >
                    <figure>
                      <img src={item.image} alt="" />
                    </figure>
                    <div className="absolute inset-0">
                      <div className="w-[225px] mx-auto pt-12">
                        <p className="h-[67px] flex items-center justify-center text-[22px] font-sans text-center font-bold text-[#367A6E]">
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
            <div className="w-full max-w-[664px] mx-auto border-2 border-[#F1A819]/[50] bg-white/50 rounded-[36px] min-h-[131px] px-[50px] py-8 md:text-[17px] text-[#903400] font-sans">
              「メタでペット供養」は、ペットロスに悩む方々に寄り添い、ペットとの絆を永遠に大切にするお手伝いをします。。
            </div>
            <div className="md:pl-[125px] pl-6 mt-10 md:mt-[145px]">
              <div className="bg-[linear-gradient(94deg,_#DD6B5C_21.94%,_#B72E2E_92.77%)] md:text-[26px] text-[20px] text-white font-bold font-sans md:pl-[85px] pl-10 py-6">
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
                          <div className="md:w-[421px] w-[320px] md:h-[763px] h-[800px] bg-white border border-[#707070] mr-4 md:mr-[35px] p-5">
                            <figure>
                              <img src={item.image} alt="" />
                            </figure>
                            <div className="md:mt-[28px] mt-5">
                              <h5 className="md:text-[18px] text-[16px] font-bold font-sans">
                                <span>{item.title}</span>
                              </h5>
                              <p className="md:text-[16px] text-[13px] text-[#1B0220] mt-6 font-medium leading-[1.65] break-all ">
                                {item.text}
                              </p>
                              <div className="w-full border border-[#6F9D23] bg-[#F7FCEC] md:mt-7 mt-5">
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
            <div className="w-full max-w-[1050px] mx-auto"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
