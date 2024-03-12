"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";

export default function Talk() {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <section className="relative md:pt-9 pt-6 md:mb-[45px] mb-8 px-4">
      <div className="w-full md:max-w-[790px] max-w-[440px] mx-auto md:border-[8px] border-[4px] border-[#FE4848] bg-[#F7F3F3] rounded-[40px] px-4 relative">
        <div className="absolute left-1/2 -translate-x-1/2 -top-[24px]">
          <svg
            className="max-md:w-[80px]"
            xmlns="http://www.w3.org/2000/svg"
            width="124"
            height="54"
            viewBox="0 0 124 54"
            fill="none"
          >
            <path
              d="M63.888 52.4711C62.7872 53.3626 61.2128 53.3626 60.112 52.4711L1.89977 5.33142C-0.297145 3.55238 0.96082 -1.20678e-05 3.78774 -1.18206e-05L120.212 -1.64248e-06C123.039 -1.39534e-06 124.297 3.55239 122.1 5.33143L63.888 52.4711Z"
              fill="#FE4848"
            />
          </svg>
        </div>
        <div className="w-full max-w-[625px] mx-auto md:pb-10 md:pt-[70px] py-[32px] space-y-10">
          <div
            ref={animateRefs}
            className="opacity-0 flex items-start gap-3 md:gap-5"
          >
            <figure>
              <img
                className="max-md:w-[80px]"
                src="/images/avatar-penguin-01.png"
                alt=""
              />
            </figure>
            <div className="flex-1 max-w-[464px]">
              <div className="bg-[#FFD4D4] rounded-[20px] md:mt-5 px-4 md:px-[30px] py-4 relative after:absolute after:w-[36px] after:h-[25px] md:after:w-[49px] md:after:h-[34px] after:bg-[url('/images/ic-bubble.svg')] after:bg-cover md:after:left-[-20px] after:left-[-14px] md:after:top-[-8px] after:top-[-4px]">
                <p className="md:text-[16px] text-[13px] font-medium">
                  <span className="md:text-[22px] text-[16px] font-bold">
                    あ！
                  </span>
                  だからデジタル化なのか！証明書がデジタル化できれば、この作業をまるごとカットできるよねっ！
                </p>
              </div>
            </div>
          </div>
          <div
            ref={animateRefs}
            className="opacity-0 flex items-start gap-3 md:gap-5"
          >
            <div className="flex-1 max-w-[464px] space-y-2">
              <div className="bg-[#FFD4D4] rounded-[20px] md:mt-5 px-4 md:px-[30px] py-4 relative after:absolute after:w-[36px] after:h-[25px] md:after:w-[49px] md:after:h-[34px] after:bg-[url('/images/ic-bubble-right.svg')] after:bg-cover md:after:right-[-20px] after:right-[-14px] md:after:top-[-8px] after:top-[-4px]">
                <p className="md:text-[16px] text-[13px] font-medium">
                  <span className="md:text-[22px] text-[16px] font-bold">
                    ちょっとちょっと！
                  </span>{" "}
                  <br />
                  デジタル化すれば...って言いますが、そんなこと言われなくたってみんなよくわかってるんです。
                </p>
              </div>
              <div className="bg-[#FFD4D4] rounded-[20px] md:mt-5 px-4 md:px-[30px] py-4 relative">
                <p className="md:text-[16px] text-[13px] font-medium">
                  でも、実際にはデジタル化できていない。
                  <br />
                  その大きな理由って何なのか、わかりますか？
                </p>
              </div>
            </div>
            <figure>
              <img
                className="max-md:w-[80px]"
                src="/images/avatar-teacher-01.png"
                alt=""
              />
            </figure>
          </div>
          <div
            ref={animateRefs}
            className="opacity-0 flex items-start gap-3 md:gap-5"
          >
            <figure>
              <img
                className="max-md:w-[80px]"
                src="/images/avatar-penguin-02.png"
                alt=""
              />
            </figure>
            <div className="flex-1 max-w-[464px]">
              <div className="bg-[#FFD4D4] rounded-[20px] md:mt-5 px-4 md:px-[30px] py-4 relative after:absolute after:w-[36px] after:h-[25px] md:after:w-[49px] md:after:h-[34px] after:bg-[url('/images/ic-bubble.svg')] after:bg-cover md:after:left-[-20px] after:left-[-14px] md:after:top-[-8px] after:top-[-4px]">
                <p className="md:text-[16px] text-[13px] font-medium">
                  <span className="md:text-[22px] text-[16px] font-bold">
                    え？え〜と、え〜と。
                  </span>{" "}
                  <br />
                  そうだ！よくある予算的な問題でしょ！？
                </p>
              </div>
            </div>
          </div>
          <div
            ref={animateRefs}
            className="opacity-0 flex items-start gap-3 md:gap-5"
          >
            <div className="flex-1 max-w-[464px] space-y-2">
              <div className="bg-[#FFD4D4] rounded-[20px] md:mt-5 px-4 md:px-[30px] py-4 md:py-9 relative after:absolute after:w-[36px] after:h-[25px] md:after:w-[49px] md:after:h-[34px] after:bg-[url('/images/ic-bubble-right.svg')] after:bg-cover md:after:right-[-20px] after:right-[-14px] md:after:top-[-8px] after:top-[-4px]">
                <p className="md:text-[16px] text-[13px] font-medium">
                  <span className="md:text-[22px] text-[16px] font-bold flex gap-3">
                    違います <img src="/images/ic-x.svg" alt="" />
                  </span>
                  デジタル化した方が採算は良くなるので、予算が問題だったならすでに実現されているはずなんです。
                  <br />
                  もっと本質的でシンプルな理由があります。
                </p>
              </div>
            </div>
            <figure>
              <img
                className="max-md:w-[80px]"
                src="/images/avatar-teacher-02.png"
                alt=""
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
