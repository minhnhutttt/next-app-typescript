"use client";

import ImageHover from "@/components/imageHover";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const data = [
  {
    image: '/assets/images/merit-pin-01.png',
    title: '1.あなたの街の最新情報を一目で確認！',
    items: ['地域のイベントやショップの特典が、あなたの現在地に基づいて簡単に確認できる！','バイト、カフェ、ショッピング、エンタメなど、日常で使えるお得情報が満載！'],
    background: "bg-[#F2685B]/[0.1]"
  },
  {
    image: '/assets/images/merit-pin-02.png',
    title: (<>2.地域の特典をNFTでゲット！</>),
    items: ['地域限定のNFTを手に入れて、特典やクーポンをすぐに利用！','NFTを集める楽しさと、特典をゲットするお得感が同時に味わえる！'],
    background: "bg-[#46BF00]/[0.19]"
  },
  {
    image: '/assets/images/merit-pin-03.png',
    title: (<>3.新しいお店やイベントを発見しよう！</>),
    items: ['地元の隠れた名店や、これまで知らなかったイベントを見つけるチャンス！','地域の新しい魅力を発見し、あなたの毎日をもっと特別に！'],
    background: "bg-[#FA67C4]/[0.1]"
  },
  {
    image: '/assets/images/merit-pin-04.png',
    title: (<>4.簡単操作で誰でも使える！</>),
    items: ['タップするだけでNFTをゲット！','面倒な操作は一切不要、誰でも簡単にスマホの画面を見せるだけで活用できます！'],
    background: "bg-[#00AAFF]/[0.1]"
  }
]

const Merit = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative z-10">
      <div className="w-full">
        <div className="w-full relative border-y border-[#777] md:mt-16 mt-10">
          {data.map((item,index) => (
            <div className="w-full h-[1160px] last:h-[580px] last:mb-0 -mb-[580px] block relative border-y border-[#0F0F0F] bg-white" key={index}>
              <div className={`w-full h-[580px] flex max-md:flex-col max-md:items-center md:justify-between gap-5 sticky top-0 overflow-hidden ${item.background}`}>
                <div className="fade-up px-5 pt-[45px]">
                  <h5 className="md:text-[48px] text-[28px] font-bold leading-[1.3]">{item.title}</h5>
                  <div className="md:pl-[20px] w-full mt-5">
                    <div className="md:text-[20px] text-[16px] font-bold leading-none space-y-6 md:mt-10 mt-7">
                      {item.items.map((i, index)=> (
                        <p className="flex border-b border-dashed border-[#0F0F0F] pb-4 gap-3" key={index}>
                            <span className="">●</span>
                            {i}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
                <figure className="fade-up relative flex items-end max-md:max-w-[260px]">
                    <ImageHover image={item.image} />
                </figure>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Merit;
