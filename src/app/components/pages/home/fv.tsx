"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
export default function FV() {
  const animateRefs01 = useScrollAnimation("zoom");
  const animateRefs02 = useScrollAnimation("zoom", 0.3);
  const animateRefs03 = useScrollAnimation("zoom", 0.5);
  const animateRefs04 = useScrollAnimation("zoom", 0.7);
  return (
    <section className="bg-[url('/images/bg.png')] bg-cover bg-center">
      <div className="">
        <div className="pt-[127px] bg-[url('/images/deco.png')] bg-[center_top_127px] max-[1439px]:bg-[length:85.278vw_auto] bg-no-repeat px-[1.389vw] min-[1440px]:px-5 pb-10">
          <div className="w-full max-w-[88.056vw] min-[1440px]:max-w-[1268px] mx-auto flex justify-center bg-cover pt-[6.25vw] pb-[15.347vw] min-[1440px]:pt-[90px] min-[1440px]:pb-[221px] relative">
            <figure ref={animateRefs02} className="opacity-0 absolute w-[36vw] min-[1440px]:w-[501px] top-0 md:top-1 left-[50%] -translate-x-1/2 z-10">
              <img className="w-full animate-[pulse_1s_infinite_ease-in-out_alternate]" src="/images/fv-bubble.png" alt="" />
            </figure>
            <h1 ref={animateRefs01} className="opacity-0">
              <img
                className="w-[63.472vw] min-[1440px]:w-[914px]"
                src="/images/fv-text.png"
                alt=""
              />
            </h1>
            <figure ref={animateRefs02} className="opacity-0 absolute w-[14.583vw] min-[1440px]:w-[210px] top-2 min-[1440px]:left-[140px] left-[9.722vw]">
              <img className="w-full" src="/images/person-01.png" alt="" />
            </figure>
            <figure ref={animateRefs03} className="opacity-0 absolute w-[6.181vw] min-[1440px]:w-[89px] top-[3.056vw] min-[1440px]:top-11 min-[1440px]:right-[140px] right-[9.722vw]">
              <img className="w-full" src="/images/person-02.png" alt="" />
            </figure>
            <figure ref={animateRefs03} className="opacity-0 absolute w-[16.458vw] min-[1440px]:w-[237px] bottom-[4.444vw] min-[1440px]:bottom-16 min-[1440px]:left-[30px] left-[2.083vw]">
              <img className="w-full" src="/images/person-03.png" alt="" />
            </figure>
            <figure ref={animateRefs04} className="opacity-0 absolute w-[20.833vw] min-[1440px]:w-[300px] bottom-[1.111vw] min-[1440px]:bottom-4 min-[1440px]:left-[495px] left-[34.375vw]">
              <img className="w-full" src="/images/person-04.png" alt="" />
            </figure>
            <figure ref={animateRefs02} className="opacity-0 absolute w-[10.139vw] min-[1440px]:w-[146px] bottom-[1.944vw] min-[1440px]:bottom-7 min-[1440px]:right-[220px] right-[15.278vw]">
              <img className="w-full" src="/images/person-05.png" alt="" />
            </figure>
            <figure ref={animateRefs02} className="opacity-0 absolute w-[7.569vw] min-[1440px]:w-[109px] bottom-[7.292vw] min-[1440px]:bottom-[105px] min-[1440px]:right-[130px] right-[9.028vw]">
              <img className="w-full" src="/images/person-06.png" alt="" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
