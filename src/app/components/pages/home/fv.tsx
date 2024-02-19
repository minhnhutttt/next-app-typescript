"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
export default function FV() {
  const animateRefs = useScrollAnimation("zoom");
  return (
    <section className="bg-[url('/images/bg.png')] bg-cover bg-bottom px-5 md:pb-[50px] pb-10 md:pt-[124px] pt-20">
      <div
        ref={animateRefs}
        className="w-full max-w-[1340px] mx-auto flex max-md:gap-6 max-md:flex-col justify-center max-md:items-center md:justify-between pl-[1.667vw] min-[1440px]:pl-6"
      >
        <div className="font-zenOld text-white [font-size:_clamp(20px,6vw,32px)] md:text-[6.597vw] min-[1440px]:text-[94px] font-black leading-tight mt-8 md:mt-14 tracking-wide">
          紙の制約を超えろ <br />
          デジタルの自由を <br />
          <span className="relative after:absolute after:left-1/2 after:-translate-x-1/2 after:top-full after:aspect-square after:bg-[#E3E800] after:w-[1.806vw] xl:after:w-[26px]">
            実
          </span>
          <span className="relative after:absolute after:left-1/2 after:-translate-x-1/2 after:top-full after:aspect-square after:bg-[#E3E800] after:w-[1.806vw] xl:after:w-[26px]">
            装
          </span>
          せよ
        </div>
        <div className="max-md:w-auto max-[1439px]:w-[37.222vw]">
          <figure>
            <img
              src="/images/fv-phones.png"
              alt="紙の制約を超えろデジタルの自由を実装せよ"
            />
          </figure>
          <p className="text-center text-white xl:text-[20px] md:text-[1.389vw] font-bold tracking-widest md:-mt-2 xl:mt-[-24px]">
            NFTで時代遅れの <br />
            名刺コミュニケーションを <br />
            グレードアップ！
          </p>
        </div>
      </div>
    </section>
  );
}
