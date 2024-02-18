"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import SectionTitle from "../../common/sectionTitle";

export default function SectionAttention() {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <section className="pt-[30px] relative mb-28 md:mb-[210px]">
      <SectionTitle type={<span className="[font-size:_clamp(60px,13.333vw,100px)] md:text-[6.944vw] xl:text-[100px] md:leading-[1.8]">Attention</span>} title="ちょっと待って！">
        <div className="w-full pt-10 md:pt-[90px]">
            <div className="px-3 xl:px-6 pb-10 md:pb-[10vw] w-full flex items-center md:max-w-[640px] max-w-[440px] mx-auto">
            <p className="block lg:text-[32px] md:text-[24px] text-[20px] font-bold flex-1">
            NFT名刺が保管されたアドレスをスキャンされると大事な名刺情報が丸見えにならないの？
            </p>
            <figure>
                <img className="max-md:w-[30vw]" src="/images/image-attention.png" alt="" />
            </figure>
            </div>
        </div>
      </SectionTitle>
      <div ref={animateRefs} className="opacity-0 mt-20 md:mt-4 w-full md:max-w-[1092px] max-w-[480px] mx-auto px-5">
        <div className="flex justify-center">
            <p className="md:text-[24px] text-[20px] font-bold max-w-[545px]">
            次世代名刺なら、アドレスをスキャンされても名刺情報が丸見えになりません。
            </p>
        </div>
        <div  className="flex max-md:flex-col max-md:items-center mt-9 md:mt-[60px] md:pl-8">
            <figure className="px-6">
                <img className="max-md:w-[240px]" src="/images/image-phone-security.png" alt="" />
            </figure>
            <div className="flex-1 md:pt-7">
                <figure>
                <img src="/images/img-point.png" alt="" />
                </figure>
                <p className="md:text-[18px] text-[14px] font-medium max-w-[625px] md:ml-[72px] -mt-4 leading-[1.8]">
                    本来、NFTはアドレススキャンをされると、アドレス内に保有しているNFTが丸見えになります。これでは守られるべきプライバシーが守られません。次世代名刺はこの問題に真っ向から立ち向かいました。<br />
                    <br />
                    NFT名刺を通常のNFTと選別した上で、NFT名刺のみ暗号で隠れる仕組みを開発しました。中身が見られない安心感をベースに、時代遅れの名刺コミュニケーションを今すぐグレードアップしてください！
                </p>
            </div>
        </div>
      </div>
    </section>
  );
}
