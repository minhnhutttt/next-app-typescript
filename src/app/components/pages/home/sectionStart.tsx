"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import SectionTitle from "../../common/sectionTitle";

export default function SectionStart() {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <section className="pt-[30px] relative pb-[100px] md:pb-[220px]">
      <SectionTitle type={<span className="[font-size:_clamp(100px,21.333vw,160px)] md:text-[12.5vw] xl:text-[180px]">Start</span>} title={<>次世代名刺でビジネスを<br />飛躍させよう</>}>
            <div className="flex max-lg:flex-col-reverse items-center max-lg:gap-4 w-full max-w-[728px] mx-auto pt-10 max-md:pb-10 lg:pt-[140px] md:pb-[150px] px-5">
                <div className="flex-1">
                    <h5 className="md:text-[32px] text-[20px] font-bold">
                        次世代名刺 <br />
                        スタートアップガイド
                    </h5>
                    <p className="md:text-[18px] text-[14px] font-medium md:mt-6">
                    次世代名刺の作成を完了させる一連のプロセスについて、動画および画像・テキストによる解説がご覧いただけます。
                    </p>
                </div>
                <figure>
                    <img className="max-md:max-w-[180px] max-xl:max-w-[210px]" src="/images/image-start.png" alt="" />
                </figure>
            </div>
      </SectionTitle>
      <div ref={animateRefs} className="opacity-0 w-full max-w-[1400px] mx-auto flex items-center justify-center mt-10 px-5">
        <figure>
            <img src="/images/movie-dummy.png" alt="" />
        </figure>
      </div>
    </section>
  );
}
