"use client";
import Modal from "@/components/modal";
import useScrollAnimations from "@/hooks/useScrollAnimations";
import { useEffect, useRef, useState } from "react";

const Articles = [
  {
    number: "1",
    type: "発行力",
    title: "たった3分で作成",
    image: "/images/approach-01.jpg",
    content:
      "NFT名刺制作フォームから誰でも簡単にNFT名刺を制作できます。設定する画像と制作する名刺を受け取るアプリ「DIVER Biz」のアドレスを用意したら、名刺情報を入力するだけ。たった3分で、あなたのNFT名刺が完成します。",
  },
  {
    number: "2",
    type: "交換力",
    title: "ワンタッチで即交換/即連絡",
    image: "/images/approach-02.jpg",
    content:
      "NFT名刺なら、出会った瞬間にその場で交換が可能。相手のQRコードを読み取るかアプリ上で送信するだけで、NFT名刺がすぐに共有されます。スピーディーな名刺交換で、ビジネスチャンスを逃しません。",
  },
  {
    number: "3",
    type: "印象力",
    title: "最先端のNFT名刺で印象強化",
    image: "/images/approach-03.jpg",
    content:
      "フォームから作成する名刺は、ブロックチェーン技術を活用したNFTとして発行されます。新鮮で相手の記憶に残りやすいだけでなく、テクノロジーに精通した印象になりデキるビジネスマンを演出できます。",
  },
  {
    number: "4",
    type: "効率力",
    title: "合理性を重視した機能で時間と費用を削減",
    image: "/images/approach-04.jpg",
    content:
      "NFT名刺は管理や共有がスムーズ。もう名刺の束を持ち歩く必要はありません。必要な時にサッと確認でき、紛失の心配もなし。印刷コストや再発行の手間も大幅に削減できます。名刺管理に割いていた時間とコストを、もっと価値のある活動に使えます。",
  },
];

const Approach = () => {
  const ref = useScrollAnimations();
  const [modalOpen, setModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;
    videoRef.current.play();
  }, []);
  return (
    <section ref={ref} className="bg-[#00F0FF] py-[60px] md:py-[120px]">
      <div className="px-5">
        <div
          data-scroll="out"
          className="w-full max-w-[1320px] mx-auto bg-[#101010] rounded-[30px] text-white pt-10 md:pt-14 pb-10 md:pb-[66px] relative px-5"
        >
          <div className="w-full max-w-[1130px] mx-auto">
            <h3 className="text-center md:text-[48px] text-[20px] font-black tracking-[0.4em] md:leading-tight">
              デキるビジネスマンが選ぶ <br />
              DIVER Biz
              <br />
              4つの名刺革新アプローチ
            </h3>
            <div className="flex items-center justify-center md:mt-20 mt-10">
              <div className="space-y-6">
                <div className="flex items-center gap-2.5">
                  <figure>
                    <img
                      className="max-md:w-8"
                      src="/images/ic-check.svg"
                      alt=""
                    />
                  </figure>
                  <div className="flex-1 flex items-center gap-2.5">
                    <p className="text-[#00F0FF] bg-black rounded-[10px] md:text-[18px] text-[13px] whitespace-nowrap font-black [text-shadow:0px_0px_15px_#00D1FF] px-1 md:p-2.5 tracking-[0.2em]">
                      発行力
                    </p>
                    <p className="md:text-[20px] text-[15px] text-white font-bold tracking-[0.2em]">
                      たった3分で制作
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <figure>
                    <img
                      className="max-md:w-8"
                      src="/images/ic-check.svg"
                      alt=""
                    />
                  </figure>
                  <div className="flex-1 flex items-center gap-2.5">
                    <p className="text-[#00F0FF] bg-black rounded-[10px] md:text-[18px] text-[13px] whitespace-nowrap font-black [text-shadow:0px_0px_15px_#00D1FF] px-1 md:p-2.5 tracking-[0.2em]">
                      交換力
                    </p>
                    <p className="md:text-[20px] text-[15px] text-white font-bold tracking-[0.2em]">
                      ワンタッチで即交換、即連絡
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <figure>
                    <img
                      className="max-md:w-8"
                      src="/images/ic-check.svg"
                      alt=""
                    />
                  </figure>
                  <div className="flex-1 flex items-center gap-2.5">
                    <p className="text-[#00F0FF] bg-black rounded-[10px] md:text-[18px] text-[13px] whitespace-nowrap font-black [text-shadow:0px_0px_15px_#00D1FF] px-1 md:p-2.5 tracking-[0.2em]">
                      印象力
                    </p>
                    <p className="md:text-[20px] text-[15px] text-white font-bold tracking-[0.2em]">
                      最先端のNFT名刺で印象強化
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <figure>
                    <img
                      className="max-md:w-8"
                      src="/images/ic-check.svg"
                      alt=""
                    />
                  </figure>
                  <div className="flex-1 flex items-center gap-2.5">
                    <p className="text-[#00F0FF] bg-black rounded-[10px] md:text-[18px] text-[13px] whitespace-nowrap font-black [text-shadow:0px_0px_15px_#00D1FF] px-1 md:p-2.5 tracking-[0.2em]">
                      効率力
                    </p>
                    <p className="md:text-[20px] text-[15px] text-white font-bold tracking-[0.2em]">
                      合理性を重視した機能で時間と費用を削減
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center md:text-[16px] text-[13px] font-medium tracking-widest my-12">
              相乗効果を発揮する発行力・交換力・印象力・効率力の
              <br />
              4つの名刺革新アプローチであなたを印象優位に導きます。
            </p>
            <div className="fixed-btn opacity-0 flex justify-center sticky bottom-[80px]">
              <div className="fixed-btn-circle rounded-full w-[100px] md:w-[140px] aspect-square bg-[#00F0FF] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="fixed-btn-wrap  relative w-full max-w-[320px] md:max-w-[480px] h-[60px] md:h-[80px] flex items-center justify-center bg-white rounded-[70px] [box-shadow:0px_0px_10px_0px_rgba(255,_255,_255,_0.50)] outline-1 outline outline-[#000] md:outline-offset-[-5px] outline-offset-[-3px] md:text-[20px] text-[16px] font-black text-black gap-3 md:tracking-[0.25em]"
              >
                <span className="block fixed-btn-text opacity-0 max-md:mr-6">
                  4つのアプローチをさらに詳しく
                </span>
                <svg
                  className="fixed-btn-ic absolute max-md:w-6 right-[17px] md:right-[19px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <circle cx="20" cy="20" r="20" fill="#00F0FF" />
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

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        rect="#00F0FF"
      >
        <div className="flex flex-wrap max-md:justify-center gap-12 lg:gap-20 max-md:py-10 md:pt-[160px] px-5 md:pb-[95px] pb-[60px]">
          {Articles.map((item, index) => (
            <div
              className="relative md:odd:top-[-160px] w-full lg:w-[calc(50%-40px)] md:w-[calc(50%-24px)] max-w-[400px] md:max-w-[580px] bg-[#101010] rounded-[30px] md:py-[55px] py-[30px] md:px-[30px] lg:px-[50px] px-6 [box-shadow:0px_0px_40px_0px_rgba(255,_255,_255,_0.75)]"
              key={index}
            >
              <div className="flex justify-center">
                <div className="flex items-center justify-between gap-5">
                  <figure className="md:flex-[0_0_19px] flex-[0_0_14px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="62"
                      viewBox="0 0 19 62"
                      fill="none"
                    >
                      <path
                        d="M1.95865 60.8408H18"
                        stroke="#00F0FF"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M1.95865 1V61"
                        stroke="#00F0FF"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M1.95865 1H18"
                        stroke="#00F0FF"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </figure>
                  <p className="text-white font-black text-center lg:text-[24px] md:text-[20px] text-[16px] leading-tight">
                    Approach
                    <span className="md:text-[28px] text-[20px]">
                      {item.number}
                    </span>
                    <br />
                    <span className="tracking-[0.16em]">{item.type}</span>
                  </p>
                  <figure className="md:flex-[0_0_19px] flex-[0_0_14px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="62"
                      viewBox="0 0 19 62"
                      fill="none"
                    >
                      <path
                        d="M17.0414 1.15918L1.00001 1.15918"
                        stroke="#00F0FF"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M17.0414 61L17.0414 1"
                        stroke="#00F0FF"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M17.0414 61L1.00001 61"
                        stroke="#00F0FF"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
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
                <p className="md:text-[18px] text-[14px] font-medium text-white">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Modal>
    </section>
  );
};

export default Approach;
