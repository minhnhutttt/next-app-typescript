'use client'
import useScrollAnimations from '@/hooks/useScrollAnimations'
import Button from '@/components/button'
import { Splide, SplideSlide, SplideTrack } from 'react-splide-ts'
import '@splidejs/splide/css'
import '@splidejs/splide/css/core'
const dataSlider = [
  {
    image: '/assets/images/slider-01.png',
    title: '美しい自然に囲まれた、厳かなリアル供養所',
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
    sign: '(40代女性)',
  },
  {
    image: '/assets/images/slider-02.png',
    title: ' メタバースならではの特別な体験',
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
    sign: '(50代女性)',
  },
  {
    image: '/assets/images/slider-03.png',
    title: '大切な“おもいで”を風化させないために',
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
    sign: '(30代女性)',
  },
  {
    image: '/assets/images/slider-04.png',
    title: 'AI僧侶による読経と定期的な供養で、安らぎを',
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
    sign: '(60代男性)',
  },
]
const data = [
  {
    id: '1',
    image: '/assets/images/s1.png',
    title: '現実の供養所',
    content: '「KARIMATA(狩俣)供養所」で、ペットの遺骨や遺品を供養',
  },
  {
    id: '2',
    image: '/assets/images/s2.png',
    title: 'メタバース空間',
    content: '「KARIMATA(狩俣)メタバース」で、ペットとの“おもいで”を紡ぎなおす',
  },
  {
    id: '3',
    image: '/assets/images/s3.png',
    title: (
      <>
        “おもいで”が
        <br />
        よみがえる
      </>
    ),
    content: '風化しかけたペットの姿や鳴き声、一緒に過ごした記憶がみがえる',
  },
  {
    id: '4',
    image: '/assets/images/s4.png',
    title: '2D/3D化',
    content:
      '2D/3Dデータ化されたペットや“おもいで”の品をメタバース内に展示可能',
  },
  {
    id: '5',
    image: '/assets/images/s5.png',
    title: (
      <>
        ペットの冥福
        <br />
        を祈る
      </>
    ),
    content:
      'AI僧侶による定期的な読経やお線香をあげる体験（開発中）でペットの冥福を祈る',
  },
]

const Introduction = () => {
  const ref = useScrollAnimations()
  return (
    <section
      ref={ref}
      className="overflow-hidden pb-20 md:pb-[135px]"
      id="service"
    >
      <div className="fade-up relative flex h-[100px] items-center bg-[#2FB4AC] bg-[url('/assets/images/bg-title-08.png'),linear-gradient(96deg,_#47770A_28.64%,_#3A7BDD_77.21%)] bg-[length:auto_100%] bg-[center_left_-45px] bg-no-repeat max-dt:pl-[361px] max-md:flex-col max-md:justify-center max-md:px-5 max-md:py-10 md:h-[197px] md:bg-cover md:bg-left-bottom dt:justify-center">
        <p className="w-full font-serif text-[clamp(14px,4vw,22px)] font-black text-white max-md:text-center md:max-w-[51.389vw] md:text-[2.708vw] dt:max-w-[740px] dt:text-[39px]">
          『メタでペット供養』とは？
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
        <div className="bg-[url('/assets/images/bg-intro.png')] bg-cover md:bg-[length:100%_auto] bg-no-repeat">
          <div
            data-scroll="out"
            className="has-animation animation-ltr w-full max-w-[1280px] border-b border-black/50 py-8 font-serif text-[19px] font-semibold text-[#5F5F5F] before:bg-[#4EA4E3] after:bg-[#51BDE4] max-md:px-3 max-md:text-center md:pl-16 md:text-[28px]"
          >
            『メタでペット供養』は、現実とメタバースでの供養が織りなす新しい供養のカタチです
          </div>
          <div className="">
            <div className="fade-up mt-6 flex items-start pr-4 max-md:flex-col max-md:items-center max-md:justify-center max-md:px-4">
              <figure
                data-scroll="out"
                className="has-animation animation-ltr before:bg-[#4EA4E3] after:bg-[#51BDE4] max-xl:w-1/2 max-md:w-auto md:-ml-4 relative z-10"
              >
                <img
                  className="max-md:max-w-[400px]"
                  src="/assets/images/img-intro-01.png"
                  alt=""
                />
              </figure>
              <div
                data-scroll="out"
                className="has-animation animation-ltr max-w-[636px] flex-1 bg-white/60 px-9 pt-8 pb-4 text-[16px] font-medium before:bg-[#4EA4E3]  after:bg-[#51BDE4] max-md:mt-5 md:-ml-6 md:mt-8 md:min-h-[205px] md:text-[20px] relative"
              >
                <p>
                  現実の供養所である「KARIMATA(狩俣)供養所」とメタバース供養所が融合することで、ペットとの再会の喜びと死への向き合いをバランス良く体験可能です。あなた様とペットだけの特別な空間がそこには広がっています。
                </p>
                <div className="flex justify-center items-center mt-8">
                  <a href="" className="hover:opacity-75 duration-150 drop-shadow-xl">
                    <img src="/assets/images/btn-youtube.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="mx-auto mb-20 mt-9 w-full max-w-[1220px]">
              <div className="flex w-full max-w-[1040px] flex-wrap justify-center gap-x-[52px] gap-y-6">
                {data.map((item, index) => (
                  <div
                    className="fade-up relative size-[312px] overflow-hidden rounded-full"
                    key={index}
                  >
                    <figure>
                      <img src={item.image} alt="" />
                    </figure>
                    <div className="absolute inset-0">
                      <div className="mx-auto w-[225px] pt-12">
                        <p className="flex h-[67px] items-center justify-center text-center  text-[22px] font-bold text-[#367A6E]">
                          {item.title}
                        </p>
                        <div className="mt-2 border-t border-black px-4 pt-4 text-[17px] font-medium text-[#113931]">
                          {item.content}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="fade-up px-5">
              <div className="mx-auto min-h-[131px] w-full max-w-[664px] rounded-[36px] border-2 border-[#F1A819]/[50] bg-white/50 px-[50px] py-8 text-[#903400] md:text-[17px] ">
                「メタでペット供養」は、ペットロスに悩む方々に寄り添い、ペットとの絆を永遠に大切にするお手伝いをします。
              </div>
            </div>
            <div className="mb-10 mt-10 pl-6 md:-mr-7 md:mt-[145px] md:pl-[125px] ">
              <div className="fade-up bg-[linear-gradient(94deg,_#DD6B5C_21.94%,_#B72E2E_92.77%)] py-6 pl-8 text-[18px] font-bold  text-white md:pl-[85px] md:text-[26px]">
                ペットとの絆を深める特別な体験がここに。
                <br />
                再会を喜び、冥福を祈る新たなペット供養の選択肢
              </div>
              <div className="fade-up mt-10">
                <Splide
                  hasTrack={false}
                  options={{
                    autoplay: false,
                    arrows: true,
                    pagination: false,
                    autoWidth: true,
                    perPage: 3,
                    perMove: 1,
                    breakpoints: {
                      1440: {
                        perPage: 2,
                      },
                      1025: {
                        perPage: 1,
                      },
                    },
                  }}
                >
                  <div className="relative">
                    <SplideTrack>
                      {dataSlider.map((item, index) => (
                        <SplideSlide key={index}>
                          <div className="mr-4 h-[690px] w-[320px] border border-[#707070] bg-white p-5 md:mr-[25px] md:h-[790px] md:w-[421px]">
                            <figure>
                              <img src={item.image} alt="" />
                            </figure>
                            <div className="mt-5 md:mt-[28px]">
                              <h5 className="text-[16px] font-bold tracking-tight underline max-md:h-12 md:text-[18px]">
                                <span>{item.title}</span>
                              </h5>
                              <p className="mt-6 min-h-[184px] break-all text-[13px] font-medium leading-[1.65] text-[#1B0220] md:text-[16px]">
                                {item.text}
                              </p>
                              <div className="mt-5 w-full border border-[#6F9D23] bg-[#F7FCEC] md:mt-7 md:min-h-[230px] relative pb-[34px]">
                                <div className="flex pl-1">
                                  <figure>
                                    <img
                                      className="max-md:w-6"
                                      src="/assets/images/quote.png"
                                      alt=""
                                    />
                                  </figure>
                                </div>
                                <div className="flex justify-center px-3 py-3 md:px-5">
                                  <p className="text-[13px] font-medium leading-[1.7] md:text-[16px]">
                                    {item.quote}
                                  </p>
                                </div>
                                <div className="text-right absolute bottom-0 inset-x-0 h-[34px]">
                                  <span className="inline-block pb-2 pr-3 text-[14px] md:text-[16px]">
                                    {item.sign}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SplideSlide>
                      ))}
                    </SplideTrack>
                    <div className="splide__arrows flex justify-center gap-4 md:mt-8">
                      <button className="splide__arrow--prev disabled:point-event-none duration-150 hover:opacity-50 disabled:opacity-0 max-md:absolute max-md:!left-[-20px] max-md:!top-[calc(50%-20px)]">
                        <img
                          className="max-md:w-9"
                          src="/assets/images/arrow-prev.png"
                          alt=""
                        />
                      </button>
                      <button className="splide__arrow--next disabled:point-event-none duration-150 hover:opacity-50 disabled:opacity-0 max-md:absolute max-md:!right-[4px] max-md:!top-[calc(50%-20px)]">
                        <img
                          className="max-md:w-9"
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
              <div className="fade-up mx-auto mb-9 w-full max-w-[1050px] border border-[#A5A5A5] bg-[#FDFDF5] bg-[url('/assets/images/bg-girl.png')] bg-right-bottom bg-no-repeat px-5 pb-[30vw] pt-5 max-md:bg-[length:70vw_auto] md:mb-[66px] md:pb-9">
                <p className="mb-1 text-center font-serifHk text-[18px] font-semibold md:text-[23px]">
                  私たちの信念
                </p>
                <div className="flex items-center justify-center">
                  <img src="/assets/images/our-belief.png" alt="" />
                </div>
                <div className="mx-auto my-8 w-full max-w-[886px] md:my-12">
                  <p className="font-serif text-[15px] font-semibold leading-[2] md:text-[19px]">
                     「メタでペット供養」は、ペットとの再会の喜びと死への向き合いのバランスを大切にしています。
                    <br />
                    そのどちらもが、ペットとの真の絆を育む上で欠かせない要素だと考えているからです。
                    <br />
                    <span className="font-black text-[#F12929]">
                      ペットロスに悩む方々に寄り添い、家族同然のペットとの絆
                    </span>
                    を永遠に大切にする。
                  </p>
                  <div className="md:pr-[130px]">
                    <p className="mt-5 max-w-[706px] font-serif text-[15px] font-semibold leading-[2] md:text-[19px]">
                      それが、私たちの使命です。もしあなた様が、愛するペットとの絆を、新たな形で紡ぎなおしたいと願うのなら、ぜひ「メタでペット供養」をご利用ください。
                    </p>
                  </div>
                </div>
                <div className="mx-auto w-full max-w-[628px] border border-[#BBB]/[0.8] bg-white/80 p-4 pb-7 font-serif text-[15px] font-bold leading-[2.2] tracking-tight md:p-6 md:pb-10 md:text-[19px]">
                  私たちは、あなた様とペットの“おもいで”に心を込めて向き合い、
                  <br className="max-md:hidden" />
                  ペットとの絆を深める特別な体験を、全力でサポートいたします。
                </div>
              </div>
              <div className="fade-up flex justify-center">
                <Button
                  href="/price/"
                  rect="group md:w-[700px] md:h-[118px] w-[320px] h-20 font-sans text-white font-bold md:text-[32px] text-[20px] flex items-center justify-center md:rounded-[60px] rounded-[40px] bg-[#F12929]"
                >
                  <span className="group-hover:text-black">
                    価格・キャンペーンを確認する
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Introduction
