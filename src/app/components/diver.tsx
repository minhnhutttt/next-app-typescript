"use client";
import Modal from "@/components/modal";
import useScrollAnimations from "@/hooks/useScrollAnimations";
import { useEffect, useRef, useState } from "react";

const Articles = [
  {
    number: "1",
    type: "Accuracy",
    title: "情報の正確性",
    image: "/images/diver-01.jpg",
    generally: "OCRによる読み取りのため、誤登録のリスクがあります。",
    diver:
      "デジタルデータ（NFTのメタデータ）をそのまま受け渡すため、常に正確な情報にアクセスできます。",
  },
  {
    number: "2",
    type: "Immediacy",
    title: "登録の即時性",
    image: "/images/diver-02.jpg",
    generally:
      "紙の名刺を受け取った後、アプリへの読み込み・登録に時間がかかり、すぐに連絡先として利用できない場合があります。",
    diver:
      "アプリ上での簡単な操作により、その場ですぐに名刺交換が完了。交換相手の連絡先をスピーディーに活用可能です。",
  },
  {
    number: "3",
    type: "Expandability",
    title: "情報の拡張性",
    image: "/images/diver-03.jpg",
    generally:
      "紙の名刺に印刷された情報のみが対象で、追加情報の記録は難しい場合があります。",
    diver:
      "テキスト、画像、動画など様々な情報を盛り込むことができ自己紹介やポートフォリオの共有も可能。また、リンク先情報を随時更新することで常に最新の情報を相手に提供できます。",
  },
  {
    number: "4",
    type: "Authenticity",
    title: "真正性保証",
    image: "/images/diver-04.jpg",
    generally:
      "偽造された紙の名刺を気づかないままスキャンしてしまう可能性があります。",
    diver:
      "ブロックチェーン上で発行者が証明され、なりすましや偽造が極めて困難。騙されたり、悪用されたりすることを防止できます。",
  },
  {
    number: "5",
    type: "Customizability",
    title: "デザイン性",
    image: "/images/diver-05.jpg",
    generally:
      "紙の名刺をスキャンするだけなので、デザイン性は元の名刺に依存します。",
    diver:
      "デジタルデザインの自由度が高く、自分らしさを表現できます。画像や動画などのメディア素材を用意して、インパクトのある名刺を制作してください。",
  },
  {
    number: "6",
    type: "Confidentiality",
    title: "情報の保護",
    image: "/images/diver-06.jpg",
    generally:
      "名刺データが無断で第三者と共有され、マーケティング目的で使用されるリスクがあります。",
    diver: (
      <span className="md:text-[16px] text-[12px]">
        情報はブロックチェーンで制御され、特別な暗号化により非公開NFTとして扱われます。第三者からの盗み見リスクがなく、情報共有を防ぎます。独自の転送制御技術で、NFT名刺の転送は1回のみに制限され、無断転送や拡散を防ぎ高度な情報保護を実現します。
      </span>
    ),
  },
  {
    number: "7",
    type: "Security",
    title: "セキュリティ",
    image: "/images/diver-07.jpg",
    generally:
      "アプリ提供者のセキュリティ対策に依存しており、クラウド上での情報流出リスクと隣り合わせです。",
    diver: (
      <span className="md:text-[16px] text-[12px]">
        ブロックチェーン技術による高度な暗号化とアプリ「DIVER
        Biz」独自の秘匿化技術の組み合わせにより、業界最高水準のセキュリティを実現。安心して名刺情報を管理・交換できます。
      </span>
    ),
  },
  {
    number: "8",
    type: "Sustainability",
    title: "サスティナビリティ",
    image: "/images/diver-08.jpg",
    generally:
      "紙の名刺を前提としているため、ペーパーレス化のメリットは限定的です。",
    diver:
      "紙の名刺を使用せずにデジタルで完結するため、森林資源の保護や廃棄物の削減に役立ちます。SDGsの目標達成を支援し、環境に優しいビジネスを促進できます。",
  },
  {
    number: "9",
    type: "Impression",
    title: "ビジネスシーンでの印象",
    image: "/images/diver-09.jpg",
    generally:
      "紙の名刺をスキャンしているだけでは、革新性をアピールしにくいと言えるでしょう。",
    diver: (
      <span className="md:text-[16px] text-[12px]">
        NFT名刺採用はDX{" "}
        <span className="md:text-[13px] text-[11px]">
          (デジタルトランスフォーメーション)
        </span>
        への積極姿勢を示し、革新性とテクノロジーへの理解を強調します。これにより、信頼を獲得し、ビジネスパートナーとの関係を強化できます。
      </span>
    ),
  },
];

const Diver = () => {
  const ref = useScrollAnimations();
  const [modalOpen, setModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;
    videoRef.current.play();
  }, []);
  return (
    <section ref={ref} className="bg-[#00FFD1] pt-[60px] md:pt-[120px]">
      <div className="px-5">
        <div
          data-scroll="out"
          className="w-full max-w-[1320px] mx-auto bg-[#101010] rounded-[30px] text-white pt-10 md:pt-14 pb-10 md:pb-[66px] relative px-5"
        >
          <div className="w-full max-w-[1130px] mx-auto">
            <p className="text-center md:text-[52px] text-[26px] font-black tracking-[0.4em]">
              徹底比較！
            </p>
            <div className="flex max-md:flex-col max-md:text-center justify-center md:items-end xl:text-[42px] lg:text-[32px] md:text-[24px] text-[20px] font-black tracking-[0.2em] mt-5 md:mt-9">
              <span>一般的な名刺管理アプリ</span>
              <span className="md:text-[28px] text-[14px] text-[#E40D2F] m-2 md:mx-5 leading-[1.7]">
                VS
              </span>
              <p className="relative max-md:mt-5">
                <span className="lg:text-[24px] text-[14px] text-center absolute bottom-full inset-x-0">
                  NFT名刺&アプリ
                </span>
                <span className="lg:text-[48px] md:text-[28px] text-[20px] whitespace-nowrap">
                  「DIVER Biz」
                </span>
              </p>
            </div>
            <p className="text-center md:text-[18px] text-[12px] font-bold tracking-[0.2em] md:mt-2 mt-1">
              名刺管理アプリで“効率化だけ”はできたかもしれません。でも...
            </p>
            <div className="flex max-lg:items-center max-md:flex-col max-md:items-center md:mt-10 mt-5 md:gap-7 lg:gap-10 md:mb-12 mb-7">
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
                      stroke="#00FFD1"
                      strokeWidth="7"
                      strokeLinecap="round"
                    />
                    <path
                      d="M3.52838 4.40381V127.807"
                      stroke="#00FFD1"
                      strokeWidth="7"
                      strokeLinecap="round"
                    />
                    <path
                      d="M3.52838 4.40381H52.5309"
                      stroke="#00FFD1"
                      strokeWidth="7"
                      strokeLinecap="round"
                    />
                  </svg>
                </figure>
                <span className="xl:text-[48px] md:text-[28px] text-[18px] break-keep font-black text-white tracking-[0.2em]">
                  情報の正確性:Accuracy
                </span>
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
                      d="M53.0271 4.32764L4.02454 4.32763"
                      stroke="#00FFD1"
                      strokeWidth="7"
                      strokeLinecap="round"
                    />
                    <path
                      d="M53.0271 127.404L53.0271 3.99994"
                      stroke="#00FFD1"
                      strokeWidth="7"
                      strokeLinecap="round"
                    />
                    <path
                      d="M53.0271 127.404L4.02454 127.404"
                      stroke="#00FFD1"
                      strokeWidth="7"
                      strokeLinecap="round"
                    />
                  </svg>
                </figure>
              </div>
            </div>
            <div className="fixed-btn opacity-0 flex justify-center sticky bottom-[80px]">
              <div className="fixed-btn-circle rounded-full w-[100px] md:w-[140px] aspect-square bg-[#00FFD1] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="fixed-btn-wrap  relative w-full max-w-[320px] md:max-w-[460px] h-[60px] md:h-[80px] flex items-center justify-center bg-white rounded-[70px] [box-shadow:0px_0px_10px_0px_rgba(255,_255,_255,_0.50)] outline-1 outline outline-[#000] md:outline-offset-[-5px] outline-offset-[-3px] md:text-[20px] text-[13px] font-black text-black gap-3 md:tracking-[0.25em] tracking-[0.15em]"
              >
                <span className="block fixed-btn-text opacity-0  mr-4">
                  vs名刺管理アプリの結果を見る
                </span>
                <svg
                  className="fixed-btn-ic absolute max-md:w-6 right-[17px] md:right-[19px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <circle cx="20" cy="20" r="20" fill="#00FFD1" />
                  <path
                    d="M30.2857 17.2812H22.5714V9.6875C22.5714 8.75568 21.8038 8 20.8571 8H19.1429C18.1962 8 17.4286 8.75568 17.4286 9.6875V17.2812H9.71429C8.76768 17.2812 8 18.0369 8 18.9688V20.6562C8 21.5881 8.76768 22.3438 9.71429 22.3438H17.4286V29.9375C17.4286 30.8693 18.1962 31.625 19.1429 31.625H20.8571C21.8038 31.625 22.5714 30.8693 22.5714 29.9375V22.3438H30.2857C31.2323 22.3438 32 21.5881 32 20.6562V18.9688C32 18.0369 31.2323 17.2812 30.2857 17.2812Z"
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
                一般的な名刺管理アプリの課題は、NFT名刺&アプリ「DIVER
                Biz」で解決できます。
                <br />
                NFT名刺&アプリ「DIVER
                Biz」なら、あらゆる面で優れた名刺管理体験を提供します。
                <br />
                今すぐフォームからNFT名刺を制作して、アプリ「DIVER
                Biz」を介した次世代の名刺管理とコミュニケーションの革新を体験してください！
              </p>
              <h3 className="relative text-white tracking-[0.36em]">
                一般的な名刺管理アプリの課題は、NFT名刺&アプリ「DIVER
                Biz」で解決できます。
                <br />
                NFT名刺&アプリ「DIVER
                Biz」なら、あらゆる面で優れた名刺管理体験を提供します。
                <br />
                今すぐフォームからNFT名刺を制作して、アプリ「DIVER
                Biz」を介した次世代の名刺管理とコミュニケーションの革新を体験してください！
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
            <source src="/videos/diver.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        rect="bg-[#00FFD1]"
      >
        <div className="flex flex-wrap max-md:justify-center gap-12 lg:gap-20 max-md:py-10 md:pt-[160px] px-5">
          {Articles.map((item, index) => (
            <div
              className="relative md:odd:top-[-160px] w-full lg:w-[calc(50%-40px)] md:w-[calc(50%-24px)] max-w-[400px] md:max-w-[580px] bg-[#101010] rounded-[30px] md:py-[55px] py-[30px] md:px-[30px] lg:px-[50px] px-6 [box-shadow:0px_0px_40px_0px_rgba(255,_255,_255,_0.75)]"
              key={index}
            >
              <div className="flex justify-center">
                <div className="flex items-center justify-between gap-5">
                  <figure className="md:flex-[0_0_19px] flex-[0_0_14px]">
                    <img src="/images/nl-01.png" alt="" />
                  </figure>
                  <p className="text-white font-black text-center lg:text-[24px] md:text-[20px] text-[16px] leading-tight">
                    比較
                    <span className="md:text-[28px] text-[20px]">
                      {item.number}
                    </span>
                    <br />
                    <span className="tracking-[0.16em]">{item.type}</span>
                  </p>
                  <figure className="md:flex-[0_0_19px] flex-[0_0_14px]">
                    <img
                      className="rotate-180"
                      src="/images/nl-01.png"
                      alt=""
                    />
                  </figure>
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
                    一般
                  </p>
                  <p className="text-white md:text-[18px] text-[13px] flex-1 tracking-widest">
                    {item.generally}
                  </p>
                </div>
                <div className="flex items-center gap-5 md:mt-5 mt-4">
                  <p className="text-[#00FFD1] md:text-[18px] text-[13px] w-[50px] md:w-[70px] h-[40px] md:h-[50px] flex items-center justify-center border border-[#00FFD1] text-center leading-tight">
                    DIVER <br />
                    Biz
                  </p>
                  <p className="text-[#00FFD1] md:text-[18px] text-[13px] flex-1 tracking-wide">
                    {item.diver}
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

export default Diver;
