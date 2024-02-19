"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import SectionTitle from "../../common/sectionTitle";

export default function SectionWhat() {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <section className="pt-[30px] relative pb-[100px] md:pb-[200px]">
      <SectionTitle
        reverse={true}
        type={
          <span className="[font-size:_clamp(100px,21.333vw,160px)] md:text-[12.5vw] xl:text-[180px]">
            What
          </span>
        }
        title="次世代名刺ってどんな名刺？"
        content="次世代名刺とは、なりすましが容易なデジタルの世界で「あなた自身の名刺であること」を技術的に証明したデジタル名刺のことです。"
      >
        <div className="pt-10 md:pt-[110px] px-3 xl:px-6 pb-[10vw]">
          <figure>
            <img src="/images/img-point.png" alt="" />
          </figure>
          <p className="block px-7 max-md:pb-6 md:px-[64px] md:text-[16px] text-[14px] font-medium mt-[-20px] leading-relaxed">
            次世代名刺には「NFT」という技術が使用されています。
            <span className="inline bg-[linear-gradient(to_top,_#F4F844_40%,_transparent_40%)]">
              NFTは「世界にひとつだけの証明番号」を画像やビデオ、3D、音楽、音声などに付与する技術を活用して発行されるものです。
            </span>
            証明番号は第三者から書き換えられたりするリスクがなく、デジタルの世界に&quot;ひとつだけ&quot;であることを証明するために使われています。
          </p>
        </div>
      </SectionTitle>
      <div
        ref={animateRefs}
        className="opacity-0 w-full max-w-[1400px] mx-auto flex max-md:flex-col-reverse items-center md:items-end xl:mt-[-110px] mt-[-60px] max-md:gap-10 relative px-5"
      >
        <div className="border-2 border-[#22ABF3] rounded-[40px] max-w-[685px] md:min-h-[235px] mb-3 flex-1 pb-5">
          <div className="flex justify-center -mt-6">
            <h5 className="md:text-[24px] text-[16px] font-bold px-10 py-[7px] bg-[#B1DDFC] tracking-widest rounded-[10px]">
              ご存知でしたか!?
            </h5>
          </div>
          <div className="flex justify-between w-[calc(100%+8px)] bg-[#DBF9FF] -ml-1">
            <div className="md:text-[18px] text-[14px] py-6 px-5 md:px-10 tracking-widest leading-[1.8]">
              NFTの「世界にひとつだけ」という仕組みを利用したNFT名刺は、その名刺が自分の名刺であることを簡単に証明できます。これは、近年増加傾向の「名刺を悪用したなりすまし事件」の防止に一役買っています。
            </div>
          </div>
        </div>
        <figure className="flex justify-center flex-1">
          <img
            className="max-md:max-w-[280px]"
            src="/images/image-world.png"
            alt=""
          />
        </figure>
      </div>
    </section>
  );
}
