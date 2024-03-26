"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import { ReactNode } from "react";

type IntroductionItemPropsType = {
  number: string;
  image: string;
  title: string;
  children: ReactNode;
};
function IntroductionItem({
  number,
  image,
  title,
  children,
}: IntroductionItemPropsType) {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <div
      ref={animateRefs}
      className="opacity-0 relative bg-[url('/images/introduction-bg.png')] bg-[length:100%_100%] bg-center max-w-[400px] px-10 md:px-[50px] pb-[40px] pt-[30px]"
    >
      <figure>
        <img src={image} alt="" />
      </figure>
      <p className="md:text-[18px] text-[15px] font-bold mt-6 leading-relaxed">
        {title}
      </p>
      <p className="md:text-[16px] text-[13px] font-medium mt-5">{children}</p>
      <span className="absolute bottom-0 right-0 leading-[0.8] md:text-[160px] text-[80px] text-[#FF9B9B]/[0.3] font-bold">
        {number}
      </span>
    </div>
  );
}

export default function Introduction() {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <section id="reason" className="relative md:mb-[135px] mb-24">
      <div className="bg-[linear-gradient(1deg,_#FE4848_2.98%,_#FF9B9B_91.39%)] px-5">
        <div className="w-full max-w-[1320px] mx-auto pt-16 md:pt-[90px] md:pb-[128px] pb-20">
          <div ref={animateRefs} className="opacity-0 relative">
            <p className="absolute tracking-[0.18em] inset-0 text-center text-[24px] font-boldt text-white [-webkit-text-stroke:_10px_white] md:text-[48px]">
              次世代証明書が
              <br className="md:hidden" />
              選ばれる理由
            </p>
            <h3 className="relative tracking-[0.18em] text-center text-[24px] font-bold text-[#FE4848] md:text-[48px]">
              次世代証明書が
              <br className="md:hidden" />
              選ばれる理由
            </h3>
          </div>
          <div className="mt-10 md:mt-[74px]">
            <div className="flex flex-wrap justify-center gap-8 md:gap-[60px] mb-8 md:mb-16">
              <IntroductionItem
                number="01"
                image="/images/introduction-01.png"
                title="NFTがもたらす認証機関不要の即時証明力！"
              >
                認証機関を介さずに済むので、証明がすぐに完了。手間なく信頼を築けます。
              </IntroductionItem>
              <IntroductionItem
                number="02"
                image="/images/introduction-02.png"
                title="紙の証明書運用で発生している金銭的・時間的コストをまるごと削減！"
              >
                制作や郵送、保管のコストが不要に。経済的かつ迅速に業務を進められます。
              </IntroductionItem>
            </div>
            <div className="flex flex-wrap justify-center gap-8 md:gap-[60px]">
              <IntroductionItem
                number="03"
                image="/images/introduction-03.png"
                title="ニセモノを一発検出！なりすましや書き換えのリスクがゼロ！"
              >
                偽造や改ざんの心配なし。安全性が大幅に向上します。
              </IntroductionItem>
              <IntroductionItem
                number="04"
                image="/images/introduction-04.png"
                title="モバイル中心の運用でいつでもどこでもすぐさま確認&証明！"
              >
                スマホ一つで全てが完結。場所を選ばずに必要な情報を確認できます。
              </IntroductionItem>
              <IntroductionItem
                number="05"
                image="/images/introduction-05.png"
                title="紙の消費量減少に貢献！SDGsな組織運営で未来をアシスト！"
              >
                紙を使わないので環境に優しく、持続可能な未来への貢献にも繋がります。
              </IntroductionItem>
            </div>
          </div>
        </div>
      </div>
      <div ref={animateRefs} className="opacity-0 px-3">
        <div className="flex justify-center relative mt-10">
          <figure>
            <img
              className="max-md:w-[120px]"
              src="/images/campaign-deco.png"
              alt=""
            />
          </figure>
          <div className="absolute top-2 md:top-[16px] tracking-[0.08em] md:text-[28px] lg:text-[36px] text-[24px] font-medium text-center">
            <div className="flex justify-center items-center md:text-[24px] text-[15px] font-medium">
              <figure>
                <img
                  className="max-md:w-3"
                  src="/images/ic-slash-l.png"
                  alt=""
                />
              </figure>
              <span>発行側にも受け取り側にも地球にも優しい</span>
              <figure>
                <img
                  className="max-md:w-3"
                  src="/images/ic-slash-r.png"
                  alt=""
                />
              </figure>
            </div>
            <p className="md:text-[32px] text-[20px] max-md:mt-2 font-medium">
              今すぐ次世代証明書でデジタル化を始めましょう
              <span className="md:text-[24px] text-[16px]">！</span>
            </p>
          </div>
        </div>
        <div
          ref={animateRefs}
          className="opacity-0 flex items-center justify-center overflow-hidden mt-10 md:mt-8"
        >
          <a
            href="https://lin.ee/e8GHxTR"
            target="_blank"
            className="px-6 md:px-[70px] h-[60px] md:h-[92px] flex items-center justify-center bg-[#FE4848] text-white rounded-[10px] md:text-[22px] text-[14px] font-bold tracking-widest group overflow-hidden relative"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#01B202] rounded-full group-hover:w-[500px] group-hover:h-[500px]"></span>
            <p className="relative flex items-center gap-2">
              <span>今すぐデジタル化を始める</span>
              <img className="max-md:w-3" src="/images/ic-tri.svg" alt="" />
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
