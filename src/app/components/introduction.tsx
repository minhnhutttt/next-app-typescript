"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const Introduction = () => {
  const ref = useScrollAnimations();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden px-5 md:pt-[75px] pt-10"
    >
      <div className="fade-up w-full md:max-w-[1350px] max-w-[500px] mx-auto bg-white rounded-[20px] md:pt-8 pt-5 md:pb-12 pb-8 px-5">
        <div className="fade-up flex items-center justify-center">
          <figure>
            <img
              className="max-md:hidden"
              src="/assets/images/img-introduction.png"
              alt=""
            />
            <img
              className="md:hidden w-[80%] mx-auto"
              src="/assets/images/img-introduction-sp.png"
              alt=""
            />
          </figure>
        </div>
        <div className="flex justify-center mt-9">
          <div className="space-y-5">
            <div className="fade-up flex items-center gap-2">
              <figure className="bg-[url('/assets/images/bg-number.png')] bg-cover w-7 h-[33px] flex items-center justify-center">
                <span className="text-gradient font-bold">1</span>
              </figure>
              <span className="flex-1 md:text-[18px] text-[14px] font-medium">
                NFTクーポンを作成して、貴社専用のNFT MAPに掲載できます。
              </span>
            </div>
            <div className="fade-up flex items-center gap-2">
              <figure className="bg-[url('/assets/images/bg-number.png')] bg-cover w-7 h-[33px] flex items-center justify-center">
                <span className="text-gradient font-bold">2</span>
              </figure>
              <span className="flex-1 md:text-[18px] text-[14px] font-medium">
                ユーザーは獲得したクーポンやマップ上で表示される近隣のクーポンを使って、実店舗を訪れます。
              </span>
            </div>
            <div className="fade-up flex items-center gap-2">
              <figure className="bg-[url('/assets/images/bg-number.png')] bg-cover w-7 h-[33px] flex items-center justify-center">
                <span className="text-gradient font-bold">3</span>
              </figure>
              <span className="flex-1 md:text-[18px] text-[14px] font-medium">
                クーポンの取得場所を限定したり、取得できる期間を定めたりと使い方は無限大です。
              </span>
            </div>
            <p className="fade-up md:text-center text-[11px]">
              ※NFTとは、画像、ビデオ、3D、音楽、音声などに「世界にひとつだけの証明番号」を付与する技術を活用して発行されるものです。
              <br />
              この証明番号は第三者によって書き換えられるリスクがなく、デジタルの世界で唯一無二であることを証明するために使われます。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
