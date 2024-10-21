"use client";
import Button from "@/components/button";
import UnderlineText from "@/components/underlineText";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const Aim = () => {
  const ref = useScrollAnimations();
  
  return (
    <section
      ref={ref}
      className="relative pr-5"
    >
      <div className="bg-[url('/assets/images/bg-04.png')] bg-[length:100%_100%] rounded-r-[45px] py-16 md:py-24">
      <div className="w-full max-w-[1000px] mx-auto">
        <div className="max-md:px-5">
          <div className="max-lg:px-5">
                <h3 className="fade-up md:text-[42px] text-[22px] font-black leading-[1.3] relative tracking-[-0.018em]">
                <span className="absolute md:left-[-40px] left-[-28px] top-1 md:top-2.5"><img className="max-md:w-6" src="/assets/images/ic-title.svg" alt="" /></span>無駄撃ちやめて<UnderlineText>狙い撃ち。</UnderlineText></h3>
            <p className="fade-up text-[16px] md:text-[23px] font-bold mt-2">お金を無駄にしたくなければ今すぐSEIKAI広告エージェントで広告運用を始めてください。</p>
            </div>
            <div className="md:mt-10 mt-7 md:space-y-20 space-y-12">
              <div className="fade-up flex max-md:flex-col-reverse justify-center max-md:items-center md:justify-end gap-6 md:gap-10 lg:gap-[35px]">
                <div className="flex-1 lg:pl-[60px] md:pt-7">
                  <p className="md:text-[25px] text-[17px] font-bold leading-[1.3] mb-4 md:mb-7">価値のない成果vs<UnderlineText>100万倍の価値</UnderlineText>のある成果。</p>
                  <p className="md:text-[19px] text-[15px] font-medium leading-[1.55] max-w-[447px]">ボタンクリックやお金にならないコンバージョンがわかったところで意味はありません。実際に売上を生み出したコンバージョンにはそれらの100万倍価値があります。</p>
                </div>
                <div className="">
                  <img src="/assets/images/aim-img-01.png" alt="" />
                </div>
              </div>
              <div className="fade-up flex max-md:flex-col-reverse flex-row-reverse justify-center max-md:items-center md:justify-end items-center gap-6 md:gap-10">
                <div className="flex-1">
                  <p className="md:text-[25px] text-[17px] font-bold leading-[1.3] mb-4 md:mb-7">不良代理店、<UnderlineText>ぶっ潰させて</UnderlineText>いただきます。</p>
                  <p className="md:text-[19px] text-[15px] font-medium leading-[1.55]  max-w-[447px]">SEIKAI広告エージェントは、売上を生み出したコンバージョンをAIにフォーカス学習させることで継続的な売上創出を広告で支援します。</p>
                </div>
                <div className="">
                  <img src="/assets/images/aim-img-02.png" alt="" />
                </div>
              </div>
            </div>
            <div className="fade-up flex justify-center md:pt-28 pt-24 relative max-md:mt-6">
                <div className="absolute top-0 right-[12%] aspect-[232/111] md:w-[232px] w-[180px] bg-[url('/assets/images/bubble.png')] bg-cover">
                    <p className="md:text-[19px] text-[15px] font-bold pt-3 md:pt-4 pl-4 md:pl-5">売上はいかがですか？ <br />
                    広告の正解はここに。</p>
                </div>
            <Button href="/">
            売上を伸ばす
            </Button>
        </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Aim;
