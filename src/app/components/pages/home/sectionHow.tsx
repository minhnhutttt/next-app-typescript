"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import SectionTitle from "../../common/sectionTitle";
import { ReactNode, useState } from "react";

type methodCardType = {
  number: string;
  title: string;
  content: ReactNode;
  children: ReactNode;
}

function MethodCard({number, title, content, children} : methodCardType) {
  return (
    <div className="bg-white scale-75 border w-[70vw] h-[500px] md:h-[597px] md:w-full md:max-w-[380px] border-[#DBF9FF] rounded-[20px] [box-shadow:0px_4px_34px_0px_rgba(0,_0,_0,_0.10)] px-5 md:px-10 pt-5 md:pt-10 flex flex-col items-center justify-start">
      <div className="flex items-center justify-center flex-col max-md:max-w-[320px]">
        <div className="md:w-[112px] w-20 aspect-square flex items-center justify-center rounded-full bg-[#B1DDFC] font-zenMaru font-black md:text-[64px] text-[32px] mb-6 md:mb-10">{number}</div>
        <h5 className="font-bold md:text-[28px] text-[20px] mb-2">{title}</h5>
        <p className="md:text-[16px] text-[13px] leading-snug">{content}</p>
      </div>
      <div className="flex-1">{children}</div>
    </div>
  )
}

export default function SectionHow() {
  const animateRefs = useScrollAnimation("fadeUp");
  const [currdeg, setCurrdeg] = useState(0);

  const rotate = (direction: string) => {
    if (direction === 'n') {
      setCurrdeg(currdeg - 90);
    } else if (direction === 'p') {
      setCurrdeg(currdeg + 90);
    }
  };
  return (
    <section className="pt-[30px] relative pb-[120px] md:pb-[220px]">
      <SectionTitle type={<span className="[font-size:_clamp(100px,21.333vw,160px)] md:text-[15.278vw] xl:text-[220px]">How</span>} title="次世代名刺の作成・受け取り方法" content="次世代名刺は「自分で作る」方法と「サポートに依頼して作る」方法があります。">
        <div className="flex max-lg:flex-wrap justify-center gap-6 xl:gap-9 pt-10 md:pt-[132px] px-6 xl:px-12">
          <div className="lg:w-1/2 max-w-[380px] bg-white border botder-[#DBF9FF] [box-shadow:0px_4px_34px_0px_rgba(0,_0,_0,_0.10)] rounded-[20px] p-6 xl:p-10">
              <figure className="flex justify-center">
                <img src="/images/image-how-01.png" alt="自分で作る" />
              </figure>
              <h4 className="text-center text-[20px] md:text-[28px] font-medium mt-5 md:mt-9 tracking-widest min-h-[72px]">自分で作る</h4>
              <p className="text-[14px] md:text-[16px] mt-3 md:mt-2">「次世代名刺の作成・受け取りの流れ」をご確認ください。</p>
              <p className="text-center text-[18px] md:text-[20px] font-medium border-b-[3px] border-[#22ABF3] mt-3 md:mt-5 pb-2">こんな人におすすめ！</p>
              <div className="flex justify-center">
                <p className="md:text-[16px] text-[14px] pt-4 leading-snug">
                  ● フォーム入力が手間ではない<br />
                  ● すぐに名刺が必要<br />
                  ● 少しの日数も待てない
                </p>
              </div>
          </div>
          <div className="lg:w-1/2 max-w-[380px] bg-white border botder-[#DBF9FF] [box-shadow:0px_4px_34px_0px_rgba(0,_0,_0,_0.10)] rounded-[20px] p-6 xl:p-10">
              <figure className="flex justify-center">
                <img src="/images/image-how-02.png" alt="自分で作る" />
              </figure>
              <h4 className="text-center text-[20px] md:text-[28px] font-medium mt-5 md:mt-9 tracking-widest min-h-[72px] leading-tight">サポートに <br />依頼して作る</h4>
              <p className="text-[14px] md:text-[16px] mt-3 md:mt-2">サポートLINEにて名刺に必要な情報をご確認後、1営業日以内にお届けします。</p>
              <p className="text-center text-[18px] md:text-[20px] font-medium border-b-[3px] border-[#22ABF3] mt-3 md:mt-5 pb-2">こんな人におすすめ！</p>
              <div className="flex justify-center">
                <p className="md:text-[16px] text-[14px] pt-4 leading-snug">
                紙の名刺があるので全て丸投げしたい<br />少しの日数なら待てる<br />フォームの入力が面倒
                </p>
              </div>
          </div>
        </div>
      </SectionTitle>
      <div className="w-full max-w-[1324px] mx-auto relative overflow-hidden px-5 max-md:mt-24">
        <h3 className="md:text-[80px] text-[40px] font-bold leading-none">受取方法</h3>
        <div className="mt-12 relative w-[70vw] md:w-[380px] h-[540px] md:h-[610px] mx-auto [perspective:1000px]">
          <button className="bg-white/30 h-full w-[10vw] md:w-[100px] z-10 absolute top-1/2 -translate-y-1/2 flex justify-center items-center right-[-15%] md:right-[-120px]" onClick={() => rotate('n')}>
            <svg className="-rotate-90" xmlns="http://www.w3.org/2000/svg" width="53" height="28" viewBox="0 0 53 28" fill="none">
              <path d="M49.6667 3.3335L26.5 24.6668L3.33331 3.3335" stroke="#22ABF3" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="bg-white/30 h-full w-[10vw] md:w-[100px] z-10 absolute top-1/2 -translate-y-1/2 flex justify-center items-center left-[-15%] md:left-[-120px]" onClick={() => rotate('p')}>
            <svg className="rotate-90" xmlns="http://www.w3.org/2000/svg" width="53" height="28" viewBox="0 0 53 28" fill="none">
              <path d="M49.6667 3.3335L26.5 24.6668L3.33331 3.3335" stroke="#22ABF3" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="h-full w-full absolute [transform-style:preserve-3d] [transition:transform_1s]" style={{ transform: `rotateY(${currdeg}deg)` }}>
            <div className="absolute [transform:rotateY(0deg)_translateZ(40vw)] md:[transform:rotateY(0deg)_translateZ(250px)]">
              <MethodCard number="01" title="アプリをダウンロード" content="アプリDIVER Bizのダウンロードおよび初期設定が完了後、受信用アドレスをご確認ください。デジ名刺申し込み時に入力する必要があります。">
                <div className="flex flex-col items-center justify-center py-5">
                  <figure className="py-5">
                    <img src="/images/logo-diver-biz.png" alt="DIVER BIZ" />
                  </figure>
                  <div className="space-y-7">
                    <a href="http://" target="_blank" rel="noopener noreferrer" className="block">
                      <img src="/images/appstore.png" alt="" />
                    </a>
                    <a href="http://" target="_blank" rel="noopener noreferrer" className="block">
                      <img src="/images/google-play.png" alt="" />
                    </a>
                  </div>
                </div>
              </MethodCard>
            </div>
            <div className="absolute md:[transform:rotateY(90deg)_translateZ(250px)] [transform:rotateY(90deg)_translateZ(40vw)]">
              <MethodCard number="02" title="フォームを入力" content={<>以下の「次世代名刺を作る」ボタンを押すと次世代名刺作成フォームが開きます。<br /><br />ボタンを押して作成に必要な項目をご確認ください。</>}>
                <div className="flex flex-col items-center justify-center py-5">
                  <a href="/" className="block mt-10">
                    <img src="/images/button-cards.png" alt="" />
                  </a>
                </div>
              </MethodCard>
            </div>
            <div className="absolute md:[transform:rotateY(180deg)_translateZ(250px)] [transform:rotateY(180deg)_translateZ(40vw)]">
              <MethodCard number="03" title="NFT名刺を確認" content="フォームに入力したアドレス宛にNFT名刺が発行されます。アプリDIVER Bizを開いてご確認ください。">
                <div className="flex flex-col items-center justify-center py-5">
                  <figure className="py-5">
                    <img src="/images/logo-diver-biz.png" alt="DIVER BIZ" />
                  </figure>
                  <div className="space-y-7">
                    <a href="http://" target="_blank" rel="noopener noreferrer" className="block">
                      <img src="/images/appstore.png" alt="" />
                    </a>
                    <a href="http://" target="_blank" rel="noopener noreferrer" className="block">
                      <img src="/images/google-play.png" alt="" />
                    </a>
                  </div>
                </div>
              </MethodCard>
            </div>
            <div className="absolute md:[transform:rotateY(270deg)_translateZ(250px)] [transform:rotateY(270deg)_translateZ(40vw)]">
              <MethodCard number="04" title="NFT名刺をシェアする" content="DIVER Bizから、あなたのNFT名刺をシェアしましょう。">
                <div className="flex flex-col items-center h-full justify-end pt-5">
                  <figure className="">
                    <img src="/images/img-phone-card.png" alt="" />
                  </figure>
                </div>
              </MethodCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
