"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import { ReactNode } from "react";

type MindItemPropsType = {
    image: string;
    title: ReactNode;
    children: ReactNode;
  };
  function MindItem({ image, title, children }: MindItemPropsType) {
    const animateRefs = useScrollAnimation("fadeUp");
    return (
        <div ref={animateRefs} className="opacity-0 w-[282px] h-[280px] md:h-[320px] bg-white border border-[#FE4848] p-[30px] rounded-[30px] [box-shadow:4px_4px_30px_0px_rgba(0,_0,_0,_0.10)]">
            <figure className="flex justify-center">
                <img src={image} alt="" />
            </figure>
            <p className="md:text-[32px] text-[20px] font-bold py-[16px] text-center">{title}</p>
            <p className="md:text-[18px] text-[14px] font-medium">{children}</p>
        </div>
    );
  }
export default function Mind() {
    const animateRefs = useScrollAnimation("fadeUp");
    return (
      <section className="relative md:mb-[130px] mb-8 px-4">
          <div className="w-full max-w-[1100px] mx-auto">
          <h4 ref={animateRefs} className="opacity-0 flex items-center justify-center gap-2 md:gap-[30px] md:px-8">
                <span className="flex-1 h-[3px] md:h-[5px] bg-black max-md:min-w-[24px] max-w-[110px]"></span>
                <p className="md:text-[48px] text-[20px] font-medium tracking-widest text-center leading-none">次世代証明書導入サポート<br />安心<span className="text-[#FE4848]"><span className="md:text-[90px] text-[40px]">5</span>つ</span>のお約束</p>
                <span className="flex-1 h-[3px] md:h-[5px] bg-black max-md:min-w-[24px] max-w-[110px]"></span>
            </h4>
            <div className="flex justify-center flex-wrap gap-4 md:gap-[50px] mt-10 md:mt-12">
                <MindItem image="/images/flag-01.png" title="売り込み">
                    ご相談いただいく際は強引に導入を勧めることはいたしません。
                </MindItem>
                <MindItem image="/images/flag-01.png" title="追跡セールス">
                導入を見送る決定をされても、後追いの連絡は一切行ないません。
                </MindItem>
            </div>
            <div className="flex justify-center flex-wrap gap-4 md:gap-[50px] mt-6 md:mt-12">
                <MindItem image="/images/flag-02.png" title="情報厳守">
                サポート時にお伺いした情報は厳守し、外部に漏らすことはありません。
                </MindItem>
                <MindItem image="/images/flag-02.png" title="迅速丁寧">
                ご質問や不安には、迅速かつ丁寧に対応いたします。
                </MindItem>
                <MindItem image="/images/flag-02.png" title="継続サポート">
                導入後も不明点や問題があればいつでもサポートいたします。
                </MindItem>
            </div>
          </div>
      </section>
    );
  }
  