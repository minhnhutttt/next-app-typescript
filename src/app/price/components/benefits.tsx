"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const Benefits = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative md:mt-24 mt-14 px-5">
        <div className="w-full max-w-[1300px] mx-auto  bg-[linear-gradient(116deg,_#A1DA29_-23.69%,_#47A40F_116.67%)] md:rounded-[61px] rounded-[40px] border-2 border-[#8EC21D]">
            <div className="md:h-[134px] flex items-end">
                <div className="w-[202px]">
                    <img src="/assets/images/price/animal-01.png" alt="" />
                </div>
                <div className="text-white md:h-[134px] flex flex-col justify-center max-md:py-2">
                    <p className="lg:text-[38px] md:text-[24px] text-[17px] font-extrabold">エキゾチックペット<br className="md:hidden" /><span className="lg:text-[46px] md:text-[30px] text-[22px]">供養応援特典</span></p>
                    <p className="lg:text-[25px] md:text-[18px] text-[14px] font-extrabold">ご要望が多かった犬や猫以外の様々なペットもご対応可能になりました！</p>
                </div>
                <div className="w-[297px] md:-mr-8 md:-mb-6 relative z-10">
                    <img src="/assets/images/price/animal-02.png" alt="" />
                </div>
            </div>
            <div className="bg-[linear-gradient(180deg,_#FAFFD9_0%,_#F5FAB9_100%)] flex items-center gap-[30px] px-7 py-6 md:rounded-b-[61px] rounded-b-[40px] relative max-md:flex-col">
                <figure className="max-md:w-auto max-lg:w-3/12">
                    <img className="max-md:w-[180px]" src="/assets/images/price/animal-03.png" alt="" />
                </figure>
                <div className="flex-1">
                    <div className="border-b border-black pb-4">
                        <img src="/assets/images/price/animal-04.png" alt="" />
                    </div>
                    <div className="md:pl-10 pt-5">
                        <div className="max-w-[670px]">
                            <p className="md:text-[20px] text-[16px] font-bold">
                            ハムスター　モルモット　ウサギ　フェレット　ハリネズミ　モモンガ　
                            チンチラ　ミーアキャット　リス　デグー　インコ　オウム　文鳥　
                            カメ　ヘビ　カメレオン　イグアナ　トカゲ　金魚　熱帯魚　etc
                            </p>
                        </div>
                        <div className="md:pr-28 max-md:pb-12">
                            <div className="max-w-[670px]">
                                <p className="text-center md:text-[32px] text-[20px] font-bold text-[#52860B] leading-[1.4]">
                                    記載のないペットちゃんもご対応が可能です。
                                    お気軽にお問い合わせください！
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <span className="absolute right-6 lg:right-[47px] bottom-2 md:bottom-[47px]">
                    <img className="max-md:w-20" src="/assets/images/price/18.png" alt="" />
                </span>
            </div>
        </div> 
    </section>
  );
};

export default Benefits;
