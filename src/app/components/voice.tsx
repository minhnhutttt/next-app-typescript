import { ReactNode, useEffect, useRef, useState } from "react";

interface VoiceItemProps {
    avatar: string;
    sign: string;
    children: ReactNode;
  }

function VoiceItem({avatar, sign, children}:VoiceItemProps){
    return (
        <div className="bg-white [filter:drop-shadow(2px_2px_4px_rgba(0,_0,_0,_0.25))] relative flex rounded-[10px]">
            <figure className="relative top-[-25px] left-[-10px]">
                <img src={avatar} alt="" />
            </figure>
            <div className="flex-1 px-5 py-5 md:text-[16px] text-[13px] leading-relaxed">
                <p className="">
                    {children}
                </p>
                <p className="text-right mt-4">{sign}</p>
            </div>
        </div>
    )
}

const Voice = () => {
    const [modalOpen, setModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;
    videoRef.current.play();
  }, []);
    return (
      <section data-scroll="out" className="relative bg-[#EDFFDC] py-[170px] px-5">
        <h3 className="text-center md:text-[80px] text-[40px] font-bold tracking-widest">リピーターが増えています！</h3>
        <p className="text-center md:text-[24px] text-[14px] font-bold tracking-widest mt-2">NFT名刺を使う理由をユーザーの声から抜粋してご紹介</p>
        <div className="grid grid-cols-2 w-full max-w-[1275px] mx-auto mt-10 md:mt-16 gap-10 mb-20">
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
                className="fixed-btn-wrap relative w-full max-w-[320px] md:max-w-[480px] h-[60px] md:h-[80px] flex items-center justify-center bg-white rounded-[70px] [box-shadow:0px_0px_10px_0px_rgba(255,_255,_255,_0.50)] outline-1 outline outline-[#000] md:outline-offset-[-5px] outline-offset-[-3px] md:text-[20px] text-[16px] font-black text-black gap-3 md:tracking-[0.25em]"
              >
                <span className="block fixed-btn-text opacity-0 max-md:mr-6">
                ユーザーの声をもっと見る
                </span>
<svg className="fixed-btn-ic absolute max-md:w-6 right-[17px] md:right-[19px]" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <circle cx="20" cy="20" r="20" fill="#7FFF00"/>
  <path d="M30.2857 17.2812H22.5714V9.6875C22.5714 8.75568 21.8038 8 20.8571 8H19.1429C18.1962 8 17.4286 8.75568 17.4286 9.6875V17.2812H9.71429C8.76768 17.2812 8 18.0369 8 18.9688V20.6562C8 21.5881 8.76768 22.3438 9.71429 22.3438H17.4286V29.9375C17.4286 30.8693 18.1962 31.625 19.1429 31.625H20.8571C21.8038 31.625 22.5714 30.8693 22.5714 29.9375V22.3438H30.2857C31.2323 22.3438 32 21.5881 32 20.6562V18.9688C32 18.0369 31.2323 17.2812 30.2857 17.2812Z" fill="black"/>
</svg>
              </button>
            </div>
      </section>
    )
  }
  
  export default Voice
  