import Modal from "@/components/modal";
import useScrollAnimations from "@/hooks/useScrollAnimations";
import { ReactNode, useEffect, useRef, useState } from "react";

interface VoiceItemProps {
  avatar: string;
  sign: string;
  children: ReactNode;
}

const Voices = [
  {
    image: "/images/avatar-03.png",
    content:
      "名刺交換した相手からの着信時に、自動で名刺情報が反映するんです。事前設定なしでこの機能が使えるのは、本当に便利。未登録の番号でも迷わず出られるようになりました。",
    sign: "金融コンサルタント・S.R様",
  },
  {
    image: "/images/avatar-04.png",
    content:
      "名刺の山から必要な情報を探すのは一苦労。でもDIVER Bizならラベル機能でグループ分けをすることで、目的の名刺にすぐアクセスできます。名刺探索の手間が省けて業務効率がアップしました。",
    sign: "広告代理店リーダー・K.Y様",
  },
  {
    image: "/images/avatar-05.png",
    content:
      "「DIVER Biz」アプリを使えば、NFTのイメージ領域を作品見本として活用できクライアントの注目を引くことができました。NFT名刺に作品販売サイトやポートフォリオのリンクを追加することでページからの反響も得られ、満足しています。",
    sign: "フリーランスイラストレーター・T.S様",
  },
  {
    image: "/images/avatar-06.png",
    content:
      "クライアントとの雑談の中で、NFT名刺の斬新さやテクノロジートレンドなどが話題に上ることが増えました。新しい技術をいち早く紹介できる立場になれたことで、信頼関係構築のツールとして役立っています。",
    sign: "ITコンサルタント・W.H様",
  },
  {
    image: "/images/avatar-07.png",
    content:
      "発行するNFT名刺には'1TT'という転送制御機能が備わっているので、受け取った相手から他者に勝手に回覧することがありません。紙名刺のような、知らぬ間の拡散を防げるのは大きな利点ですね。",
    sign: "研究者・N.T様",
  },
];

function VoiceItem({ avatar, sign, children }: VoiceItemProps) {
  return (
    <div className="bg-white [filter:drop-shadow(2px_2px_4px_rgba(0,_0,_0,_0.25))] relative flex rounded-[10px]">
      <figure className="relative top-[-25px] left-[-10px]">
        <img className="max-md:w-[90px]" src={avatar} alt="" />
      </figure>
      <div className="flex-1 px-2 md:px-5 py-5 md:text-[16px] text-[13px] leading-relaxed">
        <p className="">{children}</p>
        <p className="text-right mt-4">{sign}</p>
      </div>
    </div>
  );
}

const Voice = () => {
  const ref = useScrollAnimations();
  const [modalOpen, setModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;
    videoRef.current.play();
  }, []);
  return (
    <section
      ref={ref}
      data-scroll="out"
      className="relative bg-[#EDFFDC] pt-[60px] md:pt-[170px]"
    >
      <div className="px-5">
        <h3 className="fade-up text-center md:text-[80px] text-[40px] font-bold tracking-widest">
          リピーターが増えています！
        </h3>
        <p className="fade-up text-center md:text-[24px] text-[14px] font-bold tracking-widest mt-2">
          NFT名刺を使う理由をユーザーの声から抜粋してご紹介
        </p>
        <div className="fade-up grid md:grid-cols-2 w-full max-w-[1275px] mx-auto mt-10 md:mt-16 gap-10 mb-20">
          <VoiceItem avatar="/images/avatar-01.png" sign="IT企業CEO・N.K様">
            紙の名刺をスキャンして取り込む名刺管理アプリは、認識精度が今ひとつで、誤登録のチェックが面倒でした。でもNFT名刺なら受け取った情報は常に正確。安心してアクセスできるのが魅力です。
          </VoiceItem>
          <VoiceItem avatar="/images/avatar-02.png" sign="商社営業部長・T.M様">
            NFT名刺なら電話番号やメールアドレス、ウェブサイトのリンクをワンタップで開けるので、相手に負担をかけずスムーズにコンタクトできます。住所からのマップ表示も重宝しています。
          </VoiceItem>
        </div>
        <div className="fixed-btn opacity-0 flex justify-center sticky bottom-[80px]">
          <div className="fixed-btn-circle rounded-full w-[100px] md:w-[140px] aspect-square bg-[#7FFF00] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="fixed-btn-wrap  relative w-full max-w-[320px] md:max-w-[480px] h-[60px] md:h-[80px] flex items-center justify-center bg-white rounded-[70px] [box-shadow:0px_0px_10px_0px_rgba(255,_255,_255,_0.50)] outline-1 outline outline-[#000] md:outline-offset-[-5px] outline-offset-[-3px] md:text-[20px] text-[16px] font-black text-black gap-3 md:tracking-[0.25em]"
          >
            <span className="block fixed-btn-text opacity-0 max-md:mr-6">
              ユーザーの声をもっと見る
            </span>
            <svg
              className="fixed-btn-ic absolute max-md:w-6 right-[17px] md:right-[19px]"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <circle cx="20" cy="20" r="20" fill="#7FFF00" />
              <path
                d="M30.2857 17.2812H22.5714V9.6875C22.5714 8.75568 21.8038 8 20.8571 8H19.1429C18.1962 8 17.4286 8.75568 17.4286 9.6875V17.2812H9.71429C8.76768 17.2812 8 18.0369 8 18.9688V20.6562C8 21.5881 8.76768 22.3438 9.71429 22.3438H17.4286V29.9375C17.4286 30.8693 18.1962 31.625 19.1429 31.625H20.8571C21.8038 31.625 22.5714 30.8693 22.5714 29.9375V22.3438H30.2857C31.2323 22.3438 32 21.5881 32 20.6562V18.9688C32 18.0369 31.2323 17.2812 30.2857 17.2812Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="relative z-10 mt-16 md:mt-24">
        <h3 className="fade-up flex items-center justify-center px-5">
          <img src="/images/message.png" alt="MESSAGE" />
        </h3>
        <div className="fade-up relative">
          <div className="absolute inset-0 z-10 bg-[linear-gradient(0deg,_rgba(0,_0,_0,_0.80)_0%,_rgba(0,_0,_0,_0.80)_100%)] flex items-center justify-center px-5">
            <div className="relative w-full max-w-[600px] mx-auto text-white md:text-[18px] text-[14px] leading-[1.9]">
              <p className="absolute inset-0 text-white [-webkit-text-stroke:_4px_black] tracking-[0.36em]">
                名刺交換は単なる作業ではなく、
                <br />
                その1つ1つがユニークで大切な出会いの交差点です。
                <br />
                第一印象のチャンスは一度きり。
                <br />
                ひと味違うNFT名刺で相手の脳内に
                <br />
                あなたの印象を刻み込みましょう！
              </p>
              <h3 className="relative text-white tracking-[0.36em]">
                名刺交換は単なる作業ではなく、
                <br />
                その1つ1つがユニークで大切な出会いの交差点です。
                <br />
                第一印象のチャンスは一度きり。
                <br />
                ひと味違うNFT名刺で相手の脳内に
                <br />
                あなたの印象を刻み込みましょう！
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
            <source src="/videos/ready.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        rect="#EDFFDC"
      >
        <div className="grid md:grid-cols-2 max-md:justify-center gap-12 lg:gap-20 max-md:py-10 md:pt-[160px] px-5 md:pb-[95px] pb-[60px]">
          {Voices.map((item, index) => (
            <VoiceItem key={index} avatar={item.image} sign={item.sign}>
              {item.content}
            </VoiceItem>
          ))}
        </div>
      </Modal>
    </section>
  );
};

export default Voice;
