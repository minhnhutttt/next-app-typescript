"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
export default function AllInOne() {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <section>
      <div className="relative bg-[#1C59A4] bg-left-bottom bg-cover">
        <div className="relative z-10">
          <div className="bg-[linear-gradient(109deg,_#184E97_3.82%,_#112F78_31.75%)] flex justify-center items-center gap-5 md:py-11 pt-12 pb-8 px-5 max-md:flex-col">
            <div ref={animateRefs} className="">
              <img
                className="xl:max-w-full md:max-w-[160px] max-w-[130px]"
                src="/images/ic-all-in-one.png"
                alt="All in One システムサービス"
              />
            </div>
            <div ref={animateRefs} className="text-white">
              <h5 className="xl:text-[76px] md:text-[5.278vw] [font-size:_clamp(20px,6.4vw,36px)] font-bold max-md:text-center">
                All in One システムサービス
              </h5>
              <p className="xl:text-[32px] md:text-[2.222vw] [font-size:_clamp(13px,3.4vw,20px)] font-semibold max-md:text-center">
                ウェブサイトに関する全てのお悩みを簡単解決！
              </p>
            </div>
          </div>
          <div className="pt-10 md:px-4">
            <div className="flex justify-center">
              <h5 ref={animateRefs} className="text-center xl:text-[80px] lg:text-[60px] md:text-[50px] text-[24px] font-bold text-[#F9E84A] bg-[url('/images/line.png')] max-md:bg-[length:100%_auto] bg-no-repeat bg-bottom pb-6 md:pb-14 whitespace-nowrap">
                こんなお悩みありませんか？
              </h5>
            </div>
            <div className="flex justify-center md:pt-8 pt-6 md:pl-[37%] relative z-10">
              <ul ref={animateRefs} className="space-y-2.5">
                <li className="flex gap-3 md:gap-5 items-center text-white font-bold min-[1440px]:text-[40px] md:text-[2.778vw] [font-size:_clamp(14px,5vw,24px)]">
                  <span>
                    <img
                      className="max-md:w-8"
                      src="/images/ic-list.png"
                      alt=""
                    />
                  </span>
                  <span>集客ができない</span>
                </li>
                <li className="flex gap-3 md:gap-5 items-center text-white font-bold min-[1440px]:text-[29px] md:text-[2.014vw] [font-size:_clamp(12px,3.4vw,18px)]">
                  <span>
                    <img
                      className="max-md:w-8"
                      src="/images/ic-list.png"
                      alt=""
                    />
                  </span>
                  <span>広告を出稿しても高い競争率で集客効果が上がらない</span>
                </li>
                <li className="flex gap-3 md:gap-5 items-center text-white font-bold min-[1440px]:text-[40px] md:text-[2.778vw] [font-size:_clamp(14px,5vw,24px)]">
                  <span>
                    <img
                      className="max-md:w-8"
                      src="/images/ic-list.png"
                      alt=""
                    />
                  </span>
                  <span>管理が手間</span>
                </li>
                <li className="flex gap-3 md:gap-5 items-center text-white font-bold min-[1440px]:text-[40px] md:text-[2.778vw] [font-size:_clamp(14px,5vw,24px)]">
                  <span>
                    <img
                      className="max-md:w-8"
                      src="/images/ic-list.png"
                      alt=""
                    />
                  </span>
                  <span>ネット予約システムを導入したい</span>
                </li>
                <li className="flex gap-3 md:gap-5 items-center text-white font-bold min-[1440px]:text-[40px] md:text-[2.778vw] [font-size:_clamp(14px,5vw,24px)]">
                  <span>
                    <img
                      className="max-md:w-8"
                      src="/images/ic-list.png"
                      alt=""
                    />
                  </span>
                  <span>キャストからも出勤登録してほしい</span>
                </li>
                <li className="flex gap-3 md:gap-5 items-center text-white font-bold min-[1440px]:text-[40px] md:text-[2.778vw] [font-size:_clamp(14px,5vw,24px)]">
                  <span>
                    <img
                      className="max-md:w-8"
                      src="/images/ic-list.png"
                      alt=""
                    />
                  </span>
                  <span>費用が高い</span>
                </li>
              </ul>
            </div>
            <span className="absolute bottom-0 left-0 z-0 max-md:w-[74vw] max-md:max-w-[500px] max-[1439px]:w-[42.292vw] max-md:opacity-20">
              <img src="/images/bg-all-in-one.png" alt="" />
            </span>
            <div ref={animateRefs} className="flex justify-center items-center flex-col mt-[20vw] md:mt-16 gap-4 relative z-10">
              <p className="lg:text-[80px] md:text-[50px] text-[24px] text-[#F9E84A] font-bold">
                そのお悩み
              </p>
              <figure className="md:-mb-20 -mb-8">
                <img
                  className="max-md:w-[200px] max-lg:w-[260px]"
                  src="/images/arrow-trouble.png"
                  alt=""
                />
              </figure>
            </div>
          </div>
        </div>

      </div>
      <div ref={animateRefs} className="flex justify-center px-5 flex-col items-center pt-20 md:pt-[100px] lg:pt-[120px] lg:pb-[64px] md:pb-10 pb-8">
        <figure>
          <img
            className="max-md:max-w-[300px] max-lg:max-w-[400px]"
            src="/images/logo-lg.png"
            alt="Men's Esthe BAZOOKA"
          />
        </figure>
        <div className="flex justify-center mt-3 whitespace-nowrap">
          <p className="relative text-center lg:text-[50px] md:text-[32px] text-[22px] font-bold">
            メンエスバズーカが解決します
            <span className="inline-block font-hiragino md:text-[59px] font-semibold rotate-[13.92deg] relative md:top-1">
              !
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
