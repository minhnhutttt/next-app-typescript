"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";

export default function Voice() {
    const animateRefs = useScrollAnimation("fadeUp");
    return (
      <section className="relative md:pt-[74px] pt-16 md:mb-20 mb-12 px-4">
          <div className="w-full max-w-[1340px] mx-auto">
            <h4  ref={animateRefs} className="opacity-0 flex items-center justify-center gap-2 md:gap-[30px] md:px-8">
                <span className="flex-1 h-[3px] md:h-[5px] bg-black max-md:min-w-[24px] max-w-[110px]"></span>
                <p className="md:text-[48px] text-[24px] font-medium tracking-widest text-center">お客様の声</p>
                <span className="flex-1 h-[3px] md:h-[5px] bg-black max-md:min-w-[24px] max-w-[110px]"></span>
            </h4>
            <div className="mt-12 md:mt-[132px] flex-wrap justify-center flex max-lg:gap-16">
                <div ref={animateRefs} className="opacity-0 relative aspect-[506/388] max-md:max-w-[400px] md:w-[506px]">
                    <figure>
                        <img src="/images/voice-01.png" alt="" />
                    </figure>
                    <div className="absolute top-[18%] md:top-[67px] left-[25%] md:left-[110px] w-[60%] md:w-[333px]">
                        <div className="md:text-[22px] text-[15px] font-bold flex justify-center border-b border-black leading-snug pb-1">
                            <p>やっとデジタル化を進め<br />られました！</p>
                        </div>
                        <p className="py-2 md:py-5 px-2.5 md:text-[18px] text-[14px] leading-tight">
                        長年紙の証明書に頼っていましたが、NFT証明書のおかげで業務が劇的にスムーズになりました。手間が大幅に減り感動です！
                        </p>
                        <p className="text-center md:text-[16px] text-[12px]">大学の事務局長、57歳 女性</p>
                    </div>
                </div>
                <div ref={animateRefs} className="opacity-0 relative aspect-[454/397] max-md:max-w-[360px] md:w-[454px] lg:mt-[250px] md:ml-[-40px]">
                    <figure>
                        <img src="/images/voice-02.png" alt="" />
                    </figure>
                    <div className="absolute top-[20%] md:top-[80px] left-[16%] md:left-[55px] w-[64%] md:w-[333px]">
                        <div className="md:text-[22px] text-[15px] font-bold flex justify-center border-b border-black leading-snug pb-1">
                            <p>スピード感に驚きです！</p>
                        </div>
                        <p className="py-2 md:py-5 px-2.5 md:text-[18px] text-[14px] leading-tight">
                        証明書の発行も検証も即時にできるなんて。業務のスピードが全く違います。時間を有効に使えています。
                        </p>
                        <p className="text-center md:text-[16px] text-[12px]">製造業の技術者、38歳 男性</p>
                    </div>
                </div>
                <div ref={animateRefs} className="opacity-0 relative aspect-[452/418] max-md:max-w-[355px] md:w-[452px] md:-ml-10">
                    <figure>
                        <img src="/images/voice-03.png" alt="" />
                    </figure>
                    <div className="absolute top-[12%] md:top-[60px] left-[15%] md:left-[60px] w-[64%] md:w-[333px]">
                        <div className="md:text-[22px] text-[15px] font-bold flex justify-center border-b border-black leading-snug pb-1">
                            <p>証明書を使う人たちにも<br />好感触！</p>
                        </div>
                        <p className="py-2 md:py-5 px-2.5 md:text-[18px] text-[14px] leading-tight">
                        クライアントからデジタル証明書の扱いやすさと迅速性について高い評価を受けています。その信頼性に、自分自身も大きな安心感を得ています。
                        </p>
                        <p className="text-center md:text-[16px] text-[12px]">パーソナルコンサルタント、43歳 女性</p>
                    </div>
                </div>
            </div>
          </div>
      </section>
    );
  }
  