"use client"
import useScrollAnimations from "@/hooks/useScrollAnimations";
import Title from "@/components/title";

export default function Guarantee() {
  const ref = useScrollAnimations();
    return (
      <section ref={ref} className="px-5 bg-[url(/assets/images/guarantee-bg-01.png),_url(/assets/images/guarantee-bg-02.png)] bg-no-repeat max-md:[background-size:30%_auto,_30%_auto] max-lg:[background-size:20%_auto,_20%_auto] [background-position:_top_left,_right_bottom] md:pt-[140px] pt-20 md:pb-[74px] pb-10">
        <div className="w-full max-w-[988px] mx-auto">
          <Title>5年保証の一福米だから出来る事</Title>
          <div className="md:mt-20 mt-10 space-y-[60px]">
            <div className="fade-up flex max-md:flex-col max-md:items-center w-full max-md:mx-auto max-w-[400px] md:max-w-[600px] lg:max-w-[705px] md:gap-10 gap-5 md:ml-[66px]">
              <figure>
                <img src="/assets/images/guarantee-01.png" alt="" />
              </figure>
              <div className="font-gothic md:text-[19px] text-[14px] flex-1">
              地震などの災害時に一福米はとても最適です。特に糖質制限がある方は日頃から食品の制限があるため、<span className="font-semibold">低糖質防災備蓄として常備しておくといざという時に安心</span>です。
              </div>
            </div>
            <div className="fade-up flex max-md:flex-col max-md:items-center w-full max-md:mx-auto max-w-[400px] md:max-w-[600px] lg:max-w-[705px] md:gap-10 gap-5 md:ml-[100px] lg:ml-[180px]">
              <figure>
                <img src="/assets/images/guarantee-02.png" alt="" />
              </figure>
              <div className="font-gothic md:text-[19px] text-[14px] flex-1">
              <span className="font-semibold">軽量でコンパクト</span>なため、<span className="font-semibold">持ち運びに便利</span>です。お湯のみで温かいご飯が楽しめるので、アウトドアなどのレジャーに最適です。ごみもパックとスプーンのみで洗い物も不要です。
              </div>
            </div>
            <div className="fade-up flex max-md:flex-col max-md:items-center w-full max-md:mx-auto max-w-[400px] md:max-w-[600px] lg:max-w-[705px] md:gap-10 gap-5 md:ml-[130px] lg:ml-[290px]">
              <figure>
                <img src="/assets/images/guarantee-03.png" alt="" />
              </figure>
              <div className="font-gothic md:text-[19px] text-[14px] flex-1">
              <span className="font-semibold">体調不良で買い物も料理も無理。</span>でも栄養を取って早く治したい。そんな時に一福米は、水分量の調整のみで、おかゆや雑炊としても<span className="font-semibold">簡単に美味しくお召し上がり頂けます。</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  