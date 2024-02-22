"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";

export default function Introduction() {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <section className="pt-[50px]">
      <div ref={animateRefs} className="opacity-0 overflow-hidden">
        <div className="w-full relative">
          <div className="flex w-[400%] md:w-[200%] animate-[slide_10s_linear_infinite]">
            <div className="basis-1/2 flex justify-between items-center">
              <figure className="basis-[11%] flex justify-center px-3">
                <img src="/images/ic-logo-01.png" alt="" />
              </figure>
              <figure className="basis-[11%] flex justify-center px-3">
                <img src="/images/ic-logo-02.png" alt="" />
              </figure>
              <figure className="basis-[11%] flex justify-center px-3">
                <img src="/images/ic-logo-03.png" alt="" />
              </figure>
              <figure className="basis-[11%] flex justify-center px-3">
                <img src="/images/ic-logo-04.png" alt="" />
              </figure>
              <figure className="basis-[11%] flex justify-center px-3">
                <img src="/images/ic-logo-05.png" alt="" />
              </figure>
              <figure className="basis-[11%] flex justify-center px-3">
                <img src="/images/ic-logo-06.png" alt="" />
              </figure>
              <figure className="basis-[11%] flex justify-center px-3">
                <img src="/images/ic-logo-07.png" alt="" />
              </figure>
              <figure className="basis-[11%] flex justify-center px-3">
                <img src="/images/ic-logo-08.png" alt="" />
              </figure>
              <figure className="basis-[11%] flex justify-center px-3">
                <img src="/images/ic-logo-09.png" alt="" />
              </figure>
            </div>
            <div className="basis-1/2 flex justify-between items-center">
              <figure className="basis-[11%] flex justify-center px-3">
                <img src="/images/ic-logo-01.png" alt="" />
              </figure>
              <figure className="basis-[11%] flex justify-center px-3">
                <img src="/images/ic-logo-02.png" alt="" />
              </figure>
              <figure className="basis-[11%] flex justify-center px-3">
                <img src="/images/ic-logo-03.png" alt="" />
              </figure>
              <figure className="basis-[11%] flex justify-center px-3">
                <img src="/images/ic-logo-04.png" alt="" />
              </figure>
              <figure className="basis-[11%] flex justify-center px-3">
                <img src="/images/ic-logo-05.png" alt="" />
              </figure>
              <figure className="basis-[11%] flex justify-center px-3">
                <img src="/images/ic-logo-06.png" alt="" />
              </figure>
              <figure className="basis-[11%] flex justify-center px-3">
                <img src="/images/ic-logo-07.png" alt="" />
              </figure>
              <figure className="basis-[11%] flex justify-center px-3">
                <img src="/images/ic-logo-08.png" alt="" />
              </figure>
              <figure className="basis-[11%] flex justify-center px-3">
                <img src="/images/ic-logo-09.png" alt="" />
              </figure>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={animateRefs}
        className="opacity-0 bg-[url('/images/bg-01.png')] bg-center bg-no-repeat bg-[length:100%_auto] md:mt-[58px] mt-[30px] md:mb-[61px] mb-8"
      >
        <div className="flex max-md:flex-col px-4 items-center gap-7 md:gap-[60px] w-full max-w-[1188px] mx-auto md:pl-[57px]">
          <figure className="max-lg:w-1/2 max-md:w-auto">
            <img
              src="/images/image-intro.jpg"
              alt="受け取り後はボタンひとつで名刺交換を完了！"
            />
          </figure>
          <div className="flex-1">
            <h5 className="md:text-[31px] text-[24px] font-bold mb-7 max-md:text-center">
              受け取り後はボタンひとつで <br />
              名刺交換を完了！
            </h5>
            <p className="md:text-[18px] text-[14px] font-medium leading-relaxed">
              名刺を受け取ると、相手に自分の名刺を送るためのボタンが表示されます。このボタンを押すだけで、名刺交換が完了します。
            </p>
          </div>
        </div>
      </div>
      <div className="px-4">
        <div
          ref={animateRefs}
          className="opacity-0 relative z-10 w-full max-w-[904px] mx-auto rounded-[10px] overflow-hidden bg-[url('/images/bg-present.png')] bg-cover p-5 md:p-7"
        >
          <div className="border border-[#333333] rounded-[10px] text-center px-3 md:px-5 pb-6">
            <div className="flex justify-center -mt-3">
              <img
                className="max-md:w-[160px]"
                src="/images/present.png"
                alt="PRESENT"
              />
            </div>
            <p className="text-[16px] md:text-[20px] lg:text-[24px] font-bold mt-2 md:mt-1 tracking-[0.4em]">
              全てのビジネスマンに
              <br className="md:hidden" />
              未来を実装！
            </p>
            <p className="lg:text-[34px] md:text-[24px] text-[20px] font-black tracking-[0.2em] leading-tight max-md:mt-3">
              <span className=" border-b-2 border-[#323232]">
                あなたの次世代名刺 <br className="md:hidden" />
                <span className="md:text-[48px] text-[32px] lg:text-[74px]">
                  500
                </span>
                枚プレゼント
              </span>
            </p>
            <p className="font-bold lg:text-[28px] md:text-[22px] text-[18px] my-4">
              さぁ、今すぐ画像を用意して<br className="md:hidden" />NFT名刺を手に入れよう！
            </p>
            <div className="flex justify-center">
              <a
                href="/form"
                className="md:w-[426px] md:h-[85px] w-[260px] h-[48px] flex items-center justify-center rounded-[44px] bg-[#F4EA00] md:border-4 border-2 border-black md:text-[31px] text-[17px] md:gap-2.5 gap-1.5 font-bold tracking-widest"
              >
                <span>無料で500枚つくる</span>
                <svg
                  className="max-md:w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  width="49"
                  height="15"
                  viewBox="0 0 49 15"
                  fill="none"
                >
                  <path
                    d="M0.5 14H46.5L33.5 1"
                    stroke="black"
                    strokeWidth="2"
                  />
                </svg>
              </a>
            </div>
            <p className="lg:text-[18px] md:text-[14px] text-[12px] font-bold md:tracking-[0.5em] tracking-[0.2em] mt-2">
              ※名刺情報のフォーム入力が必要です。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
