"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const Waku = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="px-5 py-5">
      <div className="relative overflow-hidden bg-[url(/assets/images/bg-waku.png);] max-w-[1000px] w-full mx-auto md:h-[700px] h-[450px] md:border-[12px] border-[6px] border-[#0F0F0F] md:rounded-[50px] rounded-[25px] max-md:flex max-md:items-center">
      <figure className="absolute right-0 top-[0px] max-md:w-[130px]">
          <img src="/assets/images/illustrator-right.png" alt="" />
        </figure>
        <figure className="absolute left-0 top-[0] max-md:w-[130px]">
          <img src="/assets/images/illustrator-left.png" alt="" />
        </figure>
        <figure className="absolute right-0 bottom-[0px] max-md:w-[121px]">
          <img src="/assets/images/right-mama.png" alt="" />
        </figure>
        <figure className="absolute left-0 bottom-[0] max-md:w-[121px]">
          <img src="/assets/images/left-papa.png" alt="" />
        </figure>
        <div className="relative z-10 bg-[url(/assets/images/bg-clound.png);] bg-[length:100%_100%] font-bold md:max-w-[816px] max-w-[300px] w-full md:h-[645px] h-[320px] mx-auto flex flex-col items-center justify-center">
          <p className="md:text-[48px] text-[20px] text-center md:leading-[67px] leading-6">
            <span className="text-[#DF0F47]">今だけ</span>の
            <span className="text-[#00AAFF]">サービス</span>や<br />
            <span className="text-[#46BF00]">イベント</span>・
            <span className="text-[#FA67C4]">限定NFT</span>が<br />
            続々登場中！
          </p>
          <p className="md:text-[80px] text-[30px] text-center md:leading-[96px] left-6">
            <span className="relative gradient-background bg-no-repeat bg-[size:0_100%] bg-[linear-gradient(to_top,_#F2E206_30%,_transparent_30%)]">
              近くの特典を
              <br />
              見つけよう！
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Waku;
