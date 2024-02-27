"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
export default function Uses() {
  const animateRefs = useScrollAnimation("zoom");
  const animateUpRefs = useScrollAnimation("fadeUp");
  return (
    <section className="mt-16 md:mt-[110px] px-5">
        <div className="w-full md:max-w-[1320px] max-w-[440px] mx-auto">
            <div ref={animateRefs} className="opacity-0 flex justify-center items-center relative z-10">
                <h3 className="tracking-[0.25em] text-center">
                    <div className="-mb-[1.944vw] min-[1440px]:mb-[-28px]">
                        <img className="min-[1440px]:w-auto md:w-[26.25vw] w-[55vw]" src="/images/title-sub-uses.png" alt="RWA Tagのここがめちゃめちゃ便利！" />
                    </div>
                    <span className="text-[7vw] min-[1440px]:text-[80px] font-black leading-none md:px-[9.722vw] min-[1440px]:px-[140px] whitespace-nowrap">RWA Tagでできること</span>
                </h3>
            </div>
            <div className="flex max-md:flex-col gap-6 md:gap-7 mt-10 md:mt-20">
                <div ref={animateUpRefs} className="opacity-0 w-full md:w-1/3 bg-[#CCECFF] lg:rounded-[100px] rounded-[40px] md:rounded-[60px] pt-10 md:pt-16 px-5 pb-5 md:pb-8">
                    <p className="text-center md:text-[24px] text-[18px] font-black">キープボトルにピタッ！</p>
                    <figure className="flex justify-center items-end mt-4 md:mt-6 md:h-[109px]">
                        <img src="/images/img-uses-01.png" alt="キープボトルにピタッ！" />
                    </figure>
                    <p className="md:text-[18px] text-[14px] leading-[1.75] md:mt-6 w-full max-w-[306px] mx-auto">
                    ボトルにRWA Tagをつければ、<span className="font-bold">自分のマイボトルか完全に把握でき、適切に管理・提供することができます。</span>友人にNFTを転送してキープボトルをプレゼントすることも可能です。
                    </p>
                </div>
                <div ref={animateUpRefs} className="opacity-0 w-full md:w-1/3 bg-[#CCECFF] lg:rounded-[100px] rounded-[40px] md:rounded-[60px] pt-10 md:pt-16 px-5 pb-5 md:pb-8">
                        <p className="text-center md:text-[24px] text-[18px] font-black">購入証明書にピタッ！</p>
                        <figure className="flex justify-center items-end mt-4 md:mt-6 md:h-[109px]">
                            <img src="/images/img-uses-02.png" alt="購入証明書にピタッ！" />
                        </figure>
                        <p className="md:text-[18px] text-[14px] leading-[1.75] md:mt-6 w-full max-w-[306px] mx-auto">
                        購入証明書に貼り付ければ、<span className="font-bold">取り扱い説明書や保証期間など簡単にアクセス</span>することができます。
                        </p>
                </div>
                <div ref={animateUpRefs} className="opacity-0 w-full md:w-1/3 bg-[#CCECFF] lg:rounded-[100px] rounded-[40px] md:rounded-[60px] pt-10 md:pt-16 px-5 pb-5 md:pb-8">
                        <p className="text-center md:text-[24px] text-[18px] font-black">荷物預かりサービスにピタッ！</p>
                        <figure className="flex justify-center items-end mt-4 md:mt-6 md:h-[109px]">
                            <img src="/images/img-uses-03.png" alt="キープボトルにピタッ！" />
                        </figure>
                        <p className="md:text-[18px] text-[14px] leading-[1.75] md:mt-6 w-full max-w-[306px] mx-auto">
                        ホテルから渡される<span className="font-bold">預かり証を無くした時でも、</span>RWA Tagをつければ<span className="font-bold">スマホで簡単に証明ができます。</span>
                        </p>
                </div>
            </div>
        </div>
    </section>
  );
}
