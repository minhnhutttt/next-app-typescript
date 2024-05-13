"use client"
import Title from "@/components/title";
import useScrollAnimations from "@/hooks/useScrollAnimations";

  export default function Intro() {
    const ref = useScrollAnimations();
    return (
        <div ref={ref} className="md:bg-[url('/assets/images/bg-01.png')] bg-[url('/assets/images/bg-01_sp.png')] bg-[length:100%_100%] px-5 pb-[170px] md:pb-[320px] md:pt-[165px] pt-[80px]">
        <div className="w-full md:max-w-[1344px] max-w-[440px] mx-auto max-md:flex-col flex md:pl-[66px] max-md:items-center md:justify-end">
          <Title>一福の柿の葉茶とは？</Title>
          <div className="flex-1 md:ml-[8%] max-md:flex-col-reverse flex max-md:items-center max-md:mt-4">
            <p className="fade-up text-[17px] md:text-[21px] font-light text-white flex-1">
              柿の葉茶（かきのはちゃ）は、日本の伝統的な茶の一種で、柿の葉を乾燥させて作られるお茶です。
              <br />
              <br />
              主な原料は柿の木の葉であり、新鮮な葉を摘み取り乾燥させて製品化します。
              陰干しや日陰で天日干しを行って葉を乾燥させますが、このプロセスにより、柿の葉が茶として使われる際の風味や特性が引き立ちます。
              <br />
              <br />
              独特な甘みも感じられ、穏やかで和やかな味わいが特徴的です。
              柿の葉茶は、その特有の風味や健康効果、文化的な要素から古来より存在します。
            </p>
            <figure className="fade-up md:ml-[5%] max-md:mb-5 md:w-[41.31%]">
              <img
                className="w-full max-md:max-w-[224px]"
                src="/assets/images/img-intro.png"
                alt=""
              />
            </figure>
          </div>
        </div>
      </div>
    );
  }
  