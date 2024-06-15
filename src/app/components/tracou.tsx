"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const Tracou = () => {
  const ref = useScrollAnimations();

  return (
    <section ref={ref} className="relative overflow-hidden px-5 bg-[url('/assets/images/bg-tracou.png')] bg-cover lg:bg-left-top bg-top md:pt-[135px] pt-20 md:pb-[147px] pb-24">
        <div className="w-full max-w-[988px] mx-auto">
            <div className="fade-up w-full max-w-[805px] mx-auto flex items-center md:gap-[30px] gap-5">
                <span className="flex-1 h-px bg-white"></span>
                <p className="font-serif md:text-[48px] text-[28px] text-white font-bold">こんな使い方も</p>
                <span className="flex-1 h-px bg-white"></span>
            </div>
            <div className="flex items-start lg:gap-20 max-lg:flex-col max-lg:items-center">
                <div className="fade-up md:pt-[70px] pt-10">
                    <figure className="drop-shadow-[0_0_80px_rgba(15,127,207,0.4)]">
                        <img className="max-md:w-[220px] mx-auto" src="/assets/images/tracou-hunter.png" alt="" />
                    </figure>
                    <div className="pt-[18px]">
                        <a href="/" className="flex justify-center items-center flex-col w-[294px] h-[92px] bg-[url('/assets/images/traacou-hunter-link.png')] bg-cover font-serif md:text-[20px] font-medium text-white text-[18px] duration hover:opacity-75">
                            <p>Tracou Hunter</p>
                            <figure><img src="/assets/images/traacou-hunter-arrow.png" alt="" /></figure>
                            <p>公式サイト</p>
                        </a>
                    </div>
                </div>
                <div className="fade-up ">
                    <div className="md:w-[609px] md:h-[453px] w-[350px] h-[401px] md:bg-[url('/assets/images/frame.png')] bg-[url('/assets/images/frame-sp.png')] bg-cover bg-top px-6 text-white md:pt-[135px] pt-20">
                        <h5 className="md:text-[20px] text-[16px] font-bold font-serif border-b border-white pb-4">
                            トレクーハンターは、位置情報を利用してNFTを収集する宝探しゲームです。
                        </h5>
                        <p className="md:text-[18px] text-[14px] font-medium font-serif pt-4">
                        プレイヤーは現実世界でトレクー（NFTカード）を探し、収集することができます。これらのトレクーは、クーポンとして現実の店舗で利用したり、実物の商品と交換したりすることが可能です。
                        <br /><br />さらに、カードバトルを楽しむこともできます。専用アプリをダウンロードして、トレクーを収集し、様々な特典をゲットすることができます。
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Tracou;
