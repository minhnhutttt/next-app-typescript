"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import SectionTitle from "../../common/sectionTitle";
import { ReactNode, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

type methodCardType = {
  number: string;
  title: string;
  active: boolean;
  content: ReactNode;
  children: ReactNode;
};

function MethodCard({
  number,
  title,
  active,
  content,
  children,
}: methodCardType) {
  return (
    <div
      className={`bg-white scale-75 border w-[70vw] h-[500px] md:h-[597px] md:w-full md:max-w-[380px] border-[#DBF9FF] rounded-[20px] [box-shadow:0px_4px_34px_0px_rgba(0,_0,_0,_0.10)] px-5 md:px-10 pt-5 md:pt-10 flex flex-col items-center justify-start duration-500 ${!active && "blur-sm opacity-40 pointer-events-none"}`}
    >
      <div className="flex items-center justify-center flex-col max-md:max-w-[320px]">
        <div className="md:w-[112px] w-20 aspect-square flex items-center justify-center rounded-full bg-[#B1DDFC] font-zenMaru font-black md:text-[64px] text-[32px] mb-6 md:mb-10">
          {number}
        </div>
        <h5 className="font-bold md:text-[28px] text-[20px] mb-2">{title}</h5>
        <p className="md:text-[16px] text-[13px] leading-snug">{content}</p>
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}

export default function SectionHow() {
  const animateRefs = useScrollAnimation("fadeUp");
  const [currdeg, setCurrdeg] = useState<number>(0);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [isClosed, setIsClosed] = useState<boolean>(true);
  const [startX, setStartX] = useState<number>(0);
  const [endX, setEndX] = useState<number>(0);

  const [activeSlide, setActiveSlide] = useState<number>(1);
  const [arrSlide, setArrSlide] = useState<number[]>([4, 1, 2]);
  const [tabActive, setTabActive] = useState<number>(1);

  const handleTabChange = (tabNumber: number) => {
    setTabActive(tabNumber);
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    setStartX(event.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    const deltaX = endX - startX;
    const sensitivity = 50;
    if (deltaX > sensitivity) {
      rotate("p");
    } else if (deltaX < -sensitivity) {
      rotate("n");
    }
  };

  const rotate = (direction: string) => {
    const newCurrdeg = direction === "n" ? currdeg - 90 : currdeg + 90;
    const newActiveSlide =
      direction === "n"
        ? activeSlide < 4
          ? activeSlide + 1
          : 1
        : activeSlide === 1
          ? 4
          : activeSlide - 1;
      setCurrdeg(newCurrdeg);
      setActiveSlide(newActiveSlide);
      getAdjacentNumbers(newActiveSlide);
  };

  function getAdjacentNumbers(active: number) {
    const totalNumbers = 4;
    const adjacentNumbers = [];
    adjacentNumbers.push(((active - 2 + totalNumbers) % totalNumbers) + 1);
    adjacentNumbers.push(active);
    adjacentNumbers.push((active % totalNumbers) + 1);
    setArrSlide(adjacentNumbers);
  }

  const handleExpanderClick = () => {
    const $content = contentRef.current;
    if (isClosed) {
      gsap.set($content, { height: "auto" });
      gsap.from($content, { duration: 0.2, height: 0 });
      setIsClosed(false);
    } else {
      gsap.to($content, { duration: 0.2, height: 0 });
      setIsClosed(true);
    }
  };
  return (
    <section className="pt-[30px] relative pb-[50px] md:pb-[220px]">
      <SectionTitle
        type={
          <span className="[font-size:_clamp(100px,21.333vw,160px)] md:text-[15.278vw] xl:text-[220px]">
            How
          </span>
        }
        title="次世代名刺の作成・受け取り方法"
        content="次世代名刺は「自分で作る」方法と「サポートに依頼して作る」方法があります。"
        noBg
      >
        <div className="">
          <div className="flex items-center justify-center md:hidden">
            <div className="flex relative bg-[#fff] [box-shadow:0px_4px_34px_0px_rgba(0,_0,_0,_0.10)] p-3 rounded-[99px]">
            <input type="radio" id="radio-1" name="tabs" defaultChecked={tabActive === 1} onChange={() => handleTabChange(1)} className="hidden" />
            <label className="z-10 flex items-center justify-center [font-size:_clamp(13px,3vw,20px)] h-[54px] w-[30vw] font-medium rounded-[99px] cursor-pointer [transition:color_0.15s_ease-in]" htmlFor="radio-1">自分で作る</label>
            <input type="radio" id="radio-2" name="tabs" defaultChecked={tabActive === 2} onChange={() => handleTabChange(2)} className="hidden" />
            <label className="z-10 flex items-center justify-center [font-size:_clamp(13px,3vw,20px)] h-[54px] w-[30vw] font-medium rounded-[99px] cursor-pointer [transition:color_0.15s_ease-in]" htmlFor="radio-2">サポートに依頼</label>
            <input type="radio" id="radio-3" name="tabs" defaultChecked={tabActive === 3} onChange={() => handleTabChange(3)} className="hidden" />
            <label className="z-10 flex items-center justify-center [font-size:_clamp(13px,3vw,20px)] h-[54px] w-[30vw] font-medium rounded-[99px] cursor-pointer [transition:color_0.15s_ease-in]" htmlFor="radio-3">受取方法を見る</label>
            <span className="glider absolute flex h-[54px] w-[30vw] bg-[#e6eef9] rounded-[99px] [transition:0.25s_ease-out]"></span>
          </div>
          </div>
          <div className={`flex max-lg:flex-wrap justify-center gap-6 xl:gap-9 pt-10 md:pt-[132px] px-6 xl:px-12 ${tabActive === 3 ? 'max-md:hidden' : 'max-md:flex'}`}>
            <div className={`lg:w-1/2 max-w-[380px] bg-white border botder-[#DBF9FF] [box-shadow:0px_4px_34px_0px_rgba(0,_0,_0,_0.10)] rounded-[20px] p-6 xl:p-10 duration-150 ${tabActive === 1 ? 'max-md:block' : 'max-md:hidden'}`}>
              <figure className="flex justify-center">
                <img src="/images/image-how-01.png" alt="自分で作る" />
              </figure>
              <h4 className="text-center text-[20px] md:text-[28px] font-medium mt-5 md:mt-9 tracking-widest min-h-[72px]">
                自分で作る
              </h4>
              <p className="text-[14px] md:text-[16px] mt-3 md:mt-2">
              「受取方法」タブをタップして受け取りの流れをご確認ください。
              </p>
              <p className="text-center text-[18px] md:text-[20px] font-medium border-b-[3px] border-[#22ABF3] mt-3 md:mt-5 pb-2">
                こんな人におすすめ！
              </p>
              <div className="flex justify-center">
                <p className="md:text-[16px] text-[14px] pt-4 leading-snug">
                  ● フォーム入力が手間ではない
                  <br />
                  ● すぐに名刺が必要
                  <br />● 少しの日数も待てない
                </p>
              </div>
            </div>
            <div className={`lg:w-1/2 max-w-[380px] bg-white border botder-[#DBF9FF] [box-shadow:0px_4px_34px_0px_rgba(0,_0,_0,_0.10)] rounded-[20px] p-6 xl:p-10  ${tabActive === 2 ? 'max-md:block' : 'max-md:hidden'}`}>
              <figure className="flex justify-center">
                <img src="/images/image-how-02.png" alt="自分で作る" />
              </figure>
              <h4 className="text-center text-[20px] md:text-[28px] font-medium mt-5 md:mt-9 tracking-widest min-h-[72px] leading-tight">
                サポートに <br />
                依頼して作る
              </h4>
              <p className="text-[14px] md:text-[16px] mt-3 md:mt-2">
                サポートLINEにて名刺に必要な情報をご確認後、1営業日以内にお届けします。
              </p>
              <p className="text-center text-[18px] md:text-[20px] font-medium border-b-[3px] border-[#22ABF3] mt-3 md:mt-5 pb-2">
                こんな人におすすめ！
              </p>
              <div className="flex justify-center">
                <p className="md:text-[16px] text-[14px] pt-4 leading-snug">
                  ● 紙の名刺があるので全て丸投げしたい
                  <br />
                  ● 少しの日数なら待てる
                  <br />● フォームの入力が面倒
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionTitle>
      <div className={`relative overflow-hidden ${tabActive === 3 ? 'max-md:block' : 'max-md:hidden'}`}>
        <div className="w-full max-w-[1324px] mx-auto px-5 max-md:hidden">
          <button
            type="button"
            ref={animateRefs}
            onClick={handleExpanderClick}
            className="opacity-0 md:text-[80px] text-[40px] font-bold leading-none flex items-center gap-4 max-md:pointer-events-none"
          >
            <span>受取方法</span>
            <span className="max-md:hidden">
            {isClosed ?
              <span className={`before:cursor-pointer before:border-[solid] before:border-[#d8d8d8] before:p-[5px] before:text-[16px] md:before:text-[28px] md:before:ml-[5px] before:rounded-[5px] before:border-0 before:text-[#999] before:content-['［_▼_OPEN］']`}></span>
              :
              <span className={`before:cursor-pointer before:border-[solid] before:border-[#d8d8d8] before:p-[5px] before:text-[16px] md:before:text-[28px] md:before:ml-[5px] before:rounded-[5px] before:border-0 before:text-[#999] before:content-['［_▲_CLOSE］']`}></span>
            }
            </span>
          </button>
        </div>
        <div ref={contentRef} className="md:h-0 max-md:!h-auto overflow-hidden relative">
          <button
            className="w-[50px] aspect-square rounded-full bg-white md:w-[100px]  [box-shadow:0px_4px_34px_0px_rgba(0,_0,_0,_0.10)] z-50 absolute border-2 border-[#22ABF3] top-1/2 -translate-y-1/2 flex justify-center items-center right-4 md:right-[calc(50%-310px)]"
            onClick={() => rotate("n")}
          >
            <svg
              className="-rotate-90 max-md:w-7"
              xmlns="http://www.w3.org/2000/svg"
              width="53"
              height="28"
              viewBox="0 0 53 28"
              fill="none"
            >
              <path
                d="M49.6667 3.3335L26.5 24.6668L3.33331 3.3335"
                stroke="#22ABF3"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            className="w-[50px] aspect-square rounded-full bg-white [box-shadow:0px_4px_34px_0px_rgba(0,_0,_0,_0.10)] md:w-[100px] border-2 border-[#22ABF3] z-50 absolute top-1/2 -translate-y-1/2 flex justify-center items-center left-4 md:left-[calc(50%-310px)]"
            onClick={() => rotate("p")}
          >
            <svg
              className="rotate-90 max-md:w-7"
              xmlns="http://www.w3.org/2000/svg"
              width="53"
              height="28"
              viewBox="0 0 53 28"
              fill="none"
            >
              <path
                d="M49.6667 3.3335L26.5 24.6668L3.33331 3.3335"
                stroke="#22ABF3"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchMove={(event) => setEndX(event.touches[0].clientX)}
            className="w-full max-w-[1324px] mx-auto px-5 "
          >
            <div className="mt-[10vw] md:mt-12 relative w-[70vw] md:w-[380px] h-[540px] md:h-[610px] mx-auto [perspective:1000px]">
              <div
                className="h-full w-full absolute [transform-style:preserve-3d] [transition:transform_1s]"
                style={{ transform: `rotateY(${currdeg}deg)` }}
              >
                <div className="absolute [transform:rotateY(0deg)_translateZ(40vw)] md:[transform:rotateY(0deg)_translateZ(250px)]">
                  <MethodCard
                    number="01"
                    active={arrSlide.includes(1)}
                    title="アプリをダウンロード"
                    content="アプリDIVER Bizのダウンロードおよび初期設定が完了後、受信用アドレスをご確認ください。デジ名刺申し込み時に入力する必要があります。"
                  >
                    <div className="flex flex-col items-center justify-center py-5">
                      <figure className="py-5">
                        <img src="/images/logo-diver-biz.png" alt="DIVER BIZ" />
                      </figure>
                      <div className="space-y-7">
                        <a
                          href="http://"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                        >
                          <img src="/images/appstore.png" alt="" />
                        </a>
                        <a
                          href="http://"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                        >
                          <img src="/images/google-play.png" alt="" />
                        </a>
                      </div>
                    </div>
                  </MethodCard>
                </div>
                <div className="absolute md:[transform:rotateY(90deg)_translateZ(250px)] [transform:rotateY(90deg)_translateZ(40vw)]">
                  <MethodCard
                    number="02"
                    active={arrSlide.includes(2)}
                    title="フォームを入力"
                    content={
                      <>
                        以下の「次世代名刺を作る」ボタンを押すと次世代名刺作成フォームが開きます。
                        <br />
                        <br />
                        ボタンを押して作成に必要な項目をご確認ください。
                      </>
                    }
                  >
                    <div className="flex flex-col items-center justify-center py-5">
                      <a href="/" className="block mt-10">
                        <img src="/images/button-cards.png" alt="" />
                      </a>
                    </div>
                  </MethodCard>
                </div>
                <div className="absolute md:[transform:rotateY(180deg)_translateZ(250px)] [transform:rotateY(180deg)_translateZ(40vw)]">
                  <MethodCard
                    number="03"
                    active={arrSlide.includes(3)}
                    title="NFT名刺を確認"
                    content="フォームに入力したアドレス宛にNFT名刺が発行されます。アプリDIVER Bizを開いてご確認ください。"
                  >
                    <div className="flex flex-col items-center justify-center py-5">
                      <figure className="py-5">
                        <img src="/images/logo-diver-biz.png" alt="DIVER BIZ" />
                      </figure>
                      <div className="space-y-7">
                        <a
                          href="http://"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                        >
                          <img src="/images/appstore.png" alt="" />
                        </a>
                        <a
                          href="http://"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                        >
                          <img src="/images/google-play.png" alt="" />
                        </a>
                      </div>
                    </div>
                  </MethodCard>
                </div>
                <div className="absolute md:[transform:rotateY(270deg)_translateZ(250px)] [transform:rotateY(270deg)_translateZ(40vw)]">
                  <MethodCard
                    number="04"
                    active={arrSlide.includes(4)}
                    title="NFT名刺をシェアする"
                    content="DIVER Bizから、あなたのNFT名刺をシェアしましょう。"
                  >
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
        </div>
      </div>
    </section>
  );
}
