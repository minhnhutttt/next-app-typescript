"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import SectionTitle from "../../common/sectionTitle";

export default function SectionWhat() {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <section className="pt-[30px] relative">
      <SectionTitle reverse={true}  type={<span className="[font-size:_clamp(100px,21.333vw,160px)] md:text-[12.5vw] xl:text-[180px]">What</span>} title="次世代名刺ってどんな名刺？" content="次世代名刺とは、なりすましが容易なデジタルの世界で「あなた自身の名刺であること」を技術的に証明したデジタル名刺のことです。">
        <div className="pt-10 md:pt-[110px] px-3 xl:px-6 pb-[10vw]">
          <figure>
            <img src="/images/img-point.png" alt="" />
          </figure>
          <p className="block px-[64px] md:text-[16px] text-[14px] font-medium mt-[-20px] leading-relaxed">
          次世代名刺には「NFT」という技術が使用されています。<span className="inline bg-[linear-gradient(to_top,_#F4F844_40%,_transparent_40%)]">NFTは「世界にひとつだけの証明番号」を画像やビデオ、3D、音楽、音声などに付与する技術を活用して発行されるものです。</span>証明番号は第三者から書き換えられたりするリスクがなく、デジタルの世界に"ひとつだけ"であることを証明するために使われています。
          </p>
        </div>
      </SectionTitle>
      <div className="w-full max-w-[1360px] mx-auto flex items-end">
        <div className="border-2 border-[#22ABF3] rounded-[40px]">
            <div className="flex justify-center">
                <h5 className="md:text-[24px] text-[16px] font-bold px-10 py-3 bg-[#B1DDFC] rounded-[10px]">ご存知でしたか!?</h5>
            </div>
        </div>
      </div>
    </section>
  );
}
