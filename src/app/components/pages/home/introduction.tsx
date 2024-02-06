"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";

export default function Introduction() {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <section className="px-5 md:mb-[62px] mb-[6vw] mt-[10vw] md:mt-[100px]">
      <div className="w-full max-w-[1260px] mx-auto bg-[url('/images/bg-02.png')] bg-cover rounded-[60px] pt-[8.611vw] min-[1440px]:pt-[124px] pb-[5vw] min-[1440px]:pb-9">
        <h3 ref={animateRefs} className="opacity-0 text-center min-[1440px]:text-[48px] md:text-[3.333vw] [font-size:_clamp(16px,5vw,24px)] font-bold leading-[1.8] tracking-widest">
          日本全国どこでも使える！
          <br />
          新時代のお金が貯まるおトク体験！
        </h3>
        <div className="mt-[10vw] md:mt-[86px] px-2 md:px-10 bg-[url('/images/circle.png')] max-[1439px]:bg-[length:56.111vw_auto] bg-[center_top_60px] bg-no-repeat">
          <div className="flex justify-center">
            <div ref={animateRefs} className="opacity-0 relative w-[36vw] md:w-[30.556vw] min-[1440px]:w-[440px]">
              <div className="absolute w-full top-[4.167vw] min-[1440px]:top-[60px]">
                <p className="text-center [font-size:_clamp(11px,2.4vw,18px)] md:text-[1.667vw] min-[1440px]:text-[24px] font-bold leading-tight">
                  専用アプリで
                  <br />
                  簡単管理
                </p>
              </div>
              <figure>
                <img src="/images/intro-01.png" alt="専用アプリで簡単管理" />
              </figure>
            </div>
          </div>
          <div className="flex justify-between md:mt-[-9.028vw] min-[1440px]:mt-[-130px] mt-[-8vw]">
            <div ref={animateRefs} className="opacity-0 relative w-[36vw] md:w-[30.556vw] min-[1440px]:w-[440px]">
              <div className="absolute w-full top-[4.167vw] min-[1440px]:top-[60px]">
                <p className="text-center [font-size:_clamp(11px,2.4vw,18px)] md:text-[1.667vw] min-[1440px]:text-[24px] font-bold leading-tight">
                  限定クーポンが <br />
                  もらえる
                </p>
              </div>
              <figure>
                <img src="/images/intro-03.png" alt="限定クーポンがもらえる" />
              </figure>
            </div>
            <div ref={animateRefs} className="opacity-0 relative w-[36vw] md:w-[30.556vw] min-[1440px]:w-[440px]">
              <div className="absolute w-full top-[4.167vw] min-[1440px]:top-[60px]">
                <p className="text-center [font-size:_clamp(11px,2.4vw,18px)] md:text-[1.667vw] min-[1440px]:text-[24px] font-bold leading-tight">
                  使いたい時に <br />
                  すぐにアクセス
                </p>
              </div>
              <figure>
                <img
                  src="/images/intro-02.png"
                  alt="使いたい時にすぐにアクセス"
                />
              </figure>
            </div>
          </div>
          <div className="flex justify-center mt-[-6vw] md:mt-[-7.639vw] min-[1440px]:mt-[-110px]">
            <div ref={animateRefs} className="opacity-0 relative w-[36vw] md:w-[30.556vw] min-[1440px]:w-[440px]">
              <div className="absolute w-full top-[4.167vw] min-[1440px]:top-[50px]">
                <p className="text-center [font-size:_clamp(11px,2.4vw,18px)] md:text-[1.667vw] min-[1440px]:text-[24px] font-bold leading-tight">
                  日本全国 <br />
                  その地域のクーポンが
                  <br />
                  手に入る！
                </p>
              </div>
              <figure>
                <img
                  src="/images/intro-04.png"
                  alt="日本全国その地域のクーポンが手に入る！"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
