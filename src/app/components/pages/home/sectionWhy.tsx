"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import SectionTitle from "../../common/sectionTitle";
import { ReactNode, useRef, useState } from "react";

type ReasonCardType = {
  number: string;
  title: string;
  content: ReactNode;
  explanationTitle: ReactNode;
  explanationContent: ReactNode;
}

function ReasonCard({number, title, content, explanationTitle, explanationContent} : ReasonCardType) {
  return (
    <div className="bg-white scale-[0.78] w-[70vw] h-[500px] md:h-[685px] md:w-full md:max-w-[400px] rounded-[40px] px-5 md:px-4 pt-5 md:pt-10 flex flex-col items-center justify-start border-8 border-[#3F3F3F]">
      <div className="relative w-full flex justify-center">
        <img src="/images/number-01.png" alt="" />
        <div className="absolute flex items-center justify-center inset-0 md:text-[20px] text-[16px] font-bold text-center">
            {title}
        </div>
      </div>
      <div className="md:border-4 border-2 border-[#22ABF3] rounded-[32px] mt-4 px-3 py-6 md:pt-11 min-h-[255px] relative after:absolute after:aspect-[19/20] after:bg-[url('/images/bubble.png')] after:bg-cover after:left-1/2 after:-translate-x-1/2 after:top-full after:w-[19px]">
        {content}
      </div>
    </div>
  )
}

export default function SectionWhy() {
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
    <section className="pt-[30px] relative pb-[50px] md:pb-[220px]">
      <SectionTitle reverse type={<span className="[font-size:_clamp(80px,17.2vw,120px)] md:text-[12.5vw] xl:text-[180px]">Why</span>} title="次世代名刺がなぜ人気に？">
        <div className="px-[56px] w-full pt-[100px]">
            <div className="flex w-full max-w-[682px] gap-4">
            <figure>
                <img src="/images/image-why.png" alt="" />
            </figure>
            <div className="relative flex-1">
                <div className="flex justify-end">
                    <div className="bg-[url('/images/wrap-text.png')] bg-cover bg-no-repeat md:text-[18px] font-bold text-[14px] w-[370px] h-[80px] flex items-center justify-center">
                        <span className="rotate-[6deg] pb-2">実際のユーザーに聞いてみたらわかった</span>
                    </div>
                </div>
                <h5 className="md:text-[40px] text-[24px] font-bold -mt-3 tracking-widest">
                    次世代名刺が人気化した理由８選
                </h5>
            </div>
            </div>
        </div>
      </SectionTitle>
      <div className="relative overflow-hidden md:-mt-14">
        <div className="overflow-hidden relative">
          <div className="w-full max-w-[1324px] mx-auto px-5 ">
            <div className="mt-12 relative w-[70vw] md:w-[400px] h-[540px] md:h-[610px] mx-auto [perspective:1000px]">
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
                <div className="absolute w-full [transform:rotateY(0deg)_translateZ(40vw)] md:[transform:rotateY(0deg)_translateZ(250px)]">
                 <ReasonCard
                    number="/images/number-01.png"
                    title="名刺管理アプリの誤登録からの脱却"
                    content="名刺管理アプリを使っているんですけど、紙の名刺を取り込もうとした時に撮影で完結するのはいいとして精度が粗いんですよね。情報の誤登録が怖くていちいちチェックしたりするのが面倒でした。次世代名刺なら受け取った情報に誤りがないので、常に正しい情報にアクセスできます。安心感が違いますね。"
                    explanationTitle="ワンポイント解説"
                    explanationContent="名刺管理アプリは便利だけど、精度が荒いのは問題だよね。間違えて登録されたらビジネスチャンスも失いかねないし、常に正しい情報にアクセスできることは本当に価値があることなんだ。"
                 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
