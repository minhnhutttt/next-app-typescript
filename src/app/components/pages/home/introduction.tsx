"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
export default function Introduction() {
  const animateRefs = useScrollAnimation("zoom");
  const animateUpRefs = useScrollAnimation("fadeUp");
  return (
    <section className="mt-8 md:mt-[60px] px-5">
        <div className="w-full max-w-[1320px] mx-auto">
            <div ref={animateRefs} className="opacity-0 flex justify-center items-center">
                <figure>
                    <img className="min-[1440px]:w-auto w-[22.917vw]" src="/images/logo-d.png" alt="" />
                </figure>
                <h3 className="min-[1440px]:-ml-[100px] -ml-[6.944vw] tracking-[0.25em]">
                    <span className="text-[5.556vw] min-[1440px]:text-[80px] font-black leading-tight">誰のものかすぐ分かる！</span><br />
                    <span className="text-[3vw] md:text-[1.389vw] min-[1440px]:text-[20px] font-black relative top-[1.111vw] min-[1440px]:top-[16px] tracking-[0.12em]">アールダブリューエー　タグ</span> <br />
                    <span className="text-[5.556vw] min-[1440px]:text-[80px] font-black leading-tight">RWA Tagとは？</span>
                </h3>
            </div>
            <div ref={animateUpRefs} className="opacity-0 flex max-md:flex-col md:mt-[60px] mt-8 md:gap-10 gap-6 max-md:max-w-[480px] max-md:mx-auto">
                <div className="bg-[#E0F3FF]/50 [box-shadow:0px_8px_16px_0px_rgba(171,_190,_209,_0.40)] rounded-[10px] flex justify-center items-center w-full md:w-1/2 py-10 px-5 md:py-14">
                    <div className="w-full max-w-[478px]">
                        <h5 className="md:text-[32px] text-[20px] font-black">RWA Tagは、所有を証明する！</h5>
                        <p className="md:text-[20px] text-[16px] font-black mt-4 md:mt-6 leading-[1.8]">
                        RWA Tagとは、NFT技術を使用して、<span className="bg-[linear-gradient(to_top,_#FEBB08_40%,_transparent_40%)]">現実の資産をデジタル上で確実に追跡・管理できる</span>ようにするための、近距離無線通信（NFC）シールです。
                        </p>
                    </div>
                </div>
                <div className="bg-[#E0F3FF]/50 [box-shadow:0px_8px_16px_0px_rgba(171,_190,_209,_0.40)] rounded-[10px] flex justify-center items-center w-full md:w-1/2 py-10 px-5 md:py-14">
                    <div className="w-full max-w-[478px]">
                        <h5 className="md:text-[32px] text-[20px] font-black">どうやって証明するの？</h5>
                        <p className="md:text-[20px] text-[16px] font-black mt-4 md:mt-6 leading-[1.8]">
                        RWA Tagを<span className="bg-[linear-gradient(to_top,_#FEBB08_40%,_transparent_40%)]">スマートフォンで読み取る</span>ことにより、あらかじめ設定しておいたNFT<span className="bg-[linear-gradient(to_top,_#FEBB08_40%,_transparent_40%)]">が表示され</span>ることで、自<span className="bg-[linear-gradient(to_top,_#FEBB08_40%,_transparent_40%)]">身の所有物を証明す</span>ることができます。
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
