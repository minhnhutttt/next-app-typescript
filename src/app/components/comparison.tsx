"use client";
import Modal from "@/components/modal";
import useScrollAnimations from "@/hooks/useScrollAnimations";
import { useEffect, useRef, useState } from "react";

const Articles = [
  {
    number: "1",
    type: "Impression",
    title: "忘れがちな顔と名前",
    image: "/images/comparison-01.jpg",
    paper:
      "似たような紙名刺では、あなたの顔と名前が相手の記憶からすぐに薄れます。",
    nft: "NFT名刺なら、相手に新鮮な印象を与え独自のアピール動線も設計できるので仕事につながります",
  },
  {
    number: "2",
    type: "Cost",
    title: "コストと印象のジレンマ",
    image: "/images/comparison-02.jpg",
    paper:
      "安っぽい名刺は印象が薄く、高級な名刺はコストの割に印象に残るか不透明です。",
    nft: "NFT名刺なら、圧倒的な低コストで作成できます。印象に残る名刺を手軽に作成できます。",
  },
  {
    number: "3",
    type: "Shortage",
    title: "名刺切れ問題",
    image: "/images/comparison-03.jpg",
    paper:
      "1度しかない出会いのタイミングで名刺を切らすと、仕事がデキない印象になり商談もうまくいきません。",
    nft: "NFT名刺なら、いつでも必要な枚数を即座に共有できます。大切な商談の場で名刺切れの心配はもういりません。",
  },
  {
    number: "4",
    type: "Accessibility",
    title: "名刺情報へのアクセスが不便",
    image: "/images/comparison-04.jpg",
    paper:
      "名刺が手元になければ連絡先もわからず、チャンスを台無しにすることがあります。",
    nft: "NFT名刺なら、スマートフォンひとつでいつでもどこでも相手の連絡先にアクセス可能。ビジネスチャンスを逃しません。",
  },
  {
    number: "5",
    type: "Management",
    title: "名刺管理の煩わしさ",
    image: "/images/comparison-05.jpg",
    paper: "紙名刺の整理や保管は面倒で、紛失や破損リスクも伴います。",
    nft: "NFT名刺なら、アプリ上で整理・保管されるため管理の手間を大幅に削減。紛失や破損の心配もありません。",
  },
  {
    number: "6",
    type: "Privacy",
    title: "知らない人が自分の名刺を持つ不安",
    image: "/images/comparison-06.jpg",
    paper:
      "紙名刺の一人歩きが起こり、自分の名刺交換した人以外に共有されるリスクがあります。",
    nft: "NFT名刺なら、ブロックチェーン技術により所有者が明確。許可なく共有されるリスクを防ぎ安心して名刺交換ができます。",
  },
  {
    number: "7",
    type: "Security",
    title: "なりすましや犯罪への悪用リスク",
    image: "/images/comparison-07.jpg",
    paper:
      "名刺交換などで手に入れた紙名刺を悪用し、本人になりすまして犯罪に利用される事件が実際に起きています。",
    nft: "NFT名刺なら、なりすましや犯罪利用のリスクを大幅に低減できます。",
  },
  {
    number: "8",
    type: "Trend",
    title: "デジタル化トレンドからの乖離",
    image: "/images/comparison-08.jpg",
    paper:
      "ビジネスがデジタル化を進める中で、紙の名刺は時代遅れの印象を与えかねません。",
    nft: "NFT名刺なら、最先端のデジタル技術なのでデジタルに精通した印象を与えられます。",
  },
  {
    number: "9",
    type: "Sustainability",
    title: "デジタル化トレンドからの乖離",
    image: "/images/comparison-08.jpg",
    paper:
      "紙の使用は環境への負担となりうるため、エコフレンドリーな選択肢を模索する声が高まっています。",
    nft: "NFT名刺なら、ペーパーレスで環境に優しいのでSDGsに貢献する姿勢をアピールできます。",
  },
];

const Comparison = () => {
  const ref = useScrollAnimations();
  const [modalOpen, setModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;
    videoRef.current.play();
  }, []);
  return (
    <section ref={ref} className="bg-[#7FFF00] pt-[60px] md:pt-[120px]">
      <div className="px-5">
        <div
          data-scroll="out"
          className="w-full max-w-[1320px] mx-auto bg-[#101010] rounded-[30px] text-white pt-10 md:pt-14 pb-10 md:pb-[66px] relative px-5"
        >
          <div className="w-full max-w-[1130px] mx-auto">
            <p className="text-center md:text-[52px] text-[26px] font-black tracking-[0.4em]">
              徹底比較！
            </p>
            <div className="flex justify-center items-end md:text-[48px] text-[20px] font-black tracking-[0.35em] mt-5 md:mt-9">
              紙名刺
              <span className="md:text-[28px] text-[14px] text-[#E40D2F] mx-5 leading-[1.7]">
                VS
              </span>
              NFT名刺
            </div>
            <p className="text-center md:text-[18px] text-[12px] font-bold tracking-[0.2em] md:mt-2 mt-1">
              従来の名刺交換で相手に覚えてもらえる自信はありますか？
              <br />
              NFT名刺なら...
            </p>
            <div className="flex max-md:flex-col max-md:items-center md:mt-10 mt-5 md:gap-10 md:mb-12 mb-7">
              <div className="text-white leading-tight">
                <p className="lg:text-[98px] md:text-[60px] text-[32px] max-md:text-center font-black tracking-widest">
                  比較1
                </p>
                <p className="lg:text-[24px] md:text-[20px] text-[14px] font-bold lg:tracking-[0.5em] md:tracking-[0.3em] md:ml-2">
                  Comparison
                </p>
              </div>
              <div className="flex items-center justify-between flex-1">
                <figure>
                  <svg
                    className="max-md:w-8 max-lg:w-10"
                    xmlns="http://www.w3.org/2000/svg"
                    width="57"
                    height="132"
                    viewBox="0 0 57 132"
                    fill="none"
                  >
                    <path
                      d="M3.52838 127.48H52.5309"
                      stroke="#7FFF00"
                      strokeWidth="7"
                      strokeLinecap="round"
                    />
                    <path
                      d="M3.52838 4.4043V127.808"
                      stroke="#7FFF00"
                      strokeWidth="7"
                      strokeLinecap="round"
                    />
                    <path
                      d="M3.52838 4.4043H52.5309"
                      stroke="#7FFF00"
                      strokeWidth="7"
                      strokeLinecap="round"
                    />
                  </svg>
                </figure>
                <div className="md:h-[70px] overflow-hidden">
                  <div className="text-center leading-[70px] min-[1440px]:text-[48px] md:text-[3.333vw] text-[20px] break-keep font-black text-white tracking-[0.2em] animate-[20s_normal_infinite_running_scroll]">
                    <p>
                      印象:Impression
                    </p>
                    <p>
                    コスト:Cost
                    </p>
                    <p>
                    不足:Shortage
                    </p>
                    <p>
                    アクセス:Accessibility
                    </p>

                    <p>
                    管理:Management
                    </p>
                    <p>
                    プライバシーPrivacy
                    </p>
                    <p>
                    セキュリティ:Security
                    </p>
                    <p>
                    トレンド:Trend
                    </p>
                    <p>
                    サスティナビリティ: <br />Sustainability
                    </p>
                  </div>
                </div>
                <figure>
                  <svg
                    className="max-md:w-8 max-lg:w-10"
                    xmlns="http://www.w3.org/2000/svg"
                    width="57"
                    height="131"
                    viewBox="0 0 57 131"
                    fill="none"
                  >
                    <path
                      d="M53.0271 4.32715L4.02454 4.32714"
                      stroke="#7FFF00"
                      strokeWidth="7"
                      strokeLinecap="round"
                    />
                    <path
                      d="M53.0271 127.403L53.0271 3.9997"
                      stroke="#7FFF00"
                      strokeWidth="7"
                      strokeLinecap="round"
                    />
                    <path
                      d="M53.0271 127.403L4.02454 127.403"
                      stroke="#7FFF00"
                      strokeWidth="7"
                      strokeLinecap="round"
                    />
                  </svg>
                </figure>
              </div>
            </div>
            <div className="fixed-btn opacity-0 flex justify-center sticky bottom-[80px]">
              <div className="fixed-btn-circle rounded-full w-[100px] md:w-[140px] aspect-square bg-[#7FFF00] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="fixed-btn-wrap  relative w-full max-w-[300px] md:max-w-[380px] h-[60px] md:h-[80px] flex items-center justify-center bg-white rounded-[70px] [box-shadow:0px_0px_10px_0px_rgba(255,_255,_255,_0.50)] outline-1 outline outline-[#000] md:outline-offset-[-5px] outline-offset-[-3px] md:text-[20px] text-[16px] font-black text-black gap-3 tracking-[0.25em]"
              >
                <span className="block fixed-btn-text opacity-0">
                  VS紙名刺の結果を見る
                </span>
                <svg
                  className="fixed-btn-ic absolute max-md:w-6 right-[17px] md:right-[19px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="41"
                  height="40"
                  viewBox="0 0 41 40"
                  fill="none"
                >
                  <circle cx="20.088" cy="20" r="20" fill="#7FFF00" />
                  <path
                    d="M30.3737 17.2812H22.6594V9.6875C22.6594 8.75568 21.8918 8 20.9452 8H19.2309C18.2843 8 17.5166 8.75568 17.5166 9.6875V17.2812H9.8023C8.85569 17.2812 8.08801 18.0369 8.08801 18.9688V20.6562C8.08801 21.5881 8.85569 22.3438 9.8023 22.3438H17.5166V29.9375C17.5166 30.8693 18.2843 31.625 19.2309 31.625H20.9452C21.8918 31.625 22.6594 30.8693 22.6594 29.9375V22.3438H30.3737C31.3203 22.3438 32.088 21.5881 32.088 20.6562V18.9688C32.088 18.0369 31.3203 17.2812 30.3737 17.2812Z"
                    fill="black"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-16 md:mt-24">
        <h3 className="fade-up flex items-center justify-center px-5">
          <img src="/images/message.png" alt="MESSAGE" />
        </h3>
        <div className="fade-up relative">
          <div className="absolute inset-0 z-10 bg-[linear-gradient(0deg,_rgba(0,_0,_0,_0.80)_0%,_rgba(0,_0,_0,_0.80)_100%)] flex items-center justify-center px-5">
            <div className="relative w-full max-w-[583px] mx-auto text-white md:text-[18px] text-[14px] leading-[1.9]">
              <p className="absolute inset-0 text-white [-webkit-text-stroke:_4px_black] tracking-[0.36em]">
                紙名刺の問題点は、NFT名刺で解決できます。
                <br />
                今すぐフォームからNFT名刺を制作して、アプリ「DIVER
                Biz」を介した便利で印象に残る新時代の名刺コミュニケーションを体験してください！
              </p>
              <h3 className="relative text-white tracking-[0.36em]">
                紙名刺の問題点は、NFT名刺で解決できます。
                <br />
                今すぐフォームからNFT名刺を制作して、アプリ「DIVER
                Biz」を介した便利で印象に残る新時代の名刺コミュニケーションを体験してください！
              </h3>
            </div>
          </div>
          <video
            ref={videoRef}
            muted
            loop
            className="object-cover w-full h-[360px] md:h-[518px]"
            poster=""
          >
            <source src="/videos/comparison.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        rect="#7FFF00"
      >
        <div className="flex flex-wrap max-md:justify-center gap-12 lg:gap-20 max-md:py-10 md:pt-[160px] px-5">
          {Articles.map((item, index) => (
            <div
              className="relative md:odd:top-[-160px] w-full lg:w-[calc(50%-40px)] md:w-[calc(50%-24px)] max-w-[400px] md:max-w-[580px] bg-[#101010] rounded-[30px] md:py-[55px] py-[30px] md:px-[30px] lg:px-[50px] px-6 [box-shadow:0px_0px_40px_0px_rgba(255,_255,_255,_0.75)]"
              key={index}
            >
              <div className="flex justify-center">
                <div className="flex items-center justify-between max-md:flex-col md:gap-5">
                  <p className="text-white font-black text-center lg:text-[24px] md:text-[20px] text-[16px] leading-tight">
                    比較
                    <span className="md:text-[28px] text-[20px]">
                      {item.number}
                    </span>
                  </p>
                  <div className="flex items-center gap-5">
                    <figure className="md:w-[19px] w-[12px]">
                      <svg
                      className="md:w-[19px] w-[12px]"
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="62"
                        viewBox="0 0 19 62"
                        fill="none"
                      >
                        <path
                          d="M1.95865 60.8408H18"
                          stroke="#7FFF00"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M1.95865 1V61"
                          stroke="#7FFF00"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M1.95865 1H18"
                          stroke="#7FFF00"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </figure>
                    <p className="text-white font-black text-center lg:text-[24px] md:text-[20px] text-[16px] leading-tight">
                      <span className="tracking-[0.16em]">{item.type}</span>
                    </p>
                    <figure className="md:w-[19px] w-[12px]">
                      <svg
                        className="md:w-[19px] w-[12px]"
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="62"
                        viewBox="0 0 19 62"
                        fill="none"
                      >
                        <path
                          d="M17.0414 1.15918L1.00001 1.15918"
                          stroke="#7FFF00"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M17.0414 61L17.0414 1"
                          stroke="#7FFF00"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M17.0414 61L1.00001 61"
                          stroke="#7FFF00"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </figure>
                  </div>
                </div>
              </div>
              <p className="text-center text-white font-black lg:text-[26px] md:text-[22px] text-[18px] tracking-[0.3em] mt-2 md:mt-4 md:mb-6 mb-4">
                {item.title}
              </p>
              <figure>
                <img className="" src={item.image} alt={item.title} />
              </figure>
              <div className="mt-8">
                <div className="flex items-center gap-5">
                  <p className="text-white md:text-[18px] text-[13px] w-[50px] md:w-[70px] h-[40px] md:h-[50px] flex items-center justify-center border border-white">
                    紙
                  </p>
                  <p className="text-white md:text-[18px] text-[13px] flex-1 tracking-widest">
                    {item.paper}
                  </p>
                </div>
                <div className="flex justify-center my-4 md:my-5">
                  <img
                    className="max-md:w-5"
                    src="/images/comparison-arrow.svg"
                    alt=""
                  />
                </div>
                <div className="flex items-center gap-5">
                  <p className="text-[#7FFF00] md:text-[18px] text-[13px] w-[50px] md:w-[70px] h-[40px] md:h-[50px] flex items-center justify-center border border-[#7FFF00]">
                    NFT
                  </p>
                  <p className="text-[#7FFF00] md:text-[18px] text-[13px] flex-1 tracking-widest">
                    {item.nft}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Modal>
    </section>
  );
};

export default Comparison;
