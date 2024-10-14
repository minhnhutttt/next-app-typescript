"use client";
import Button from "@/components/button";
import UnderlineText from "@/components/underlineText";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const Supports = () => {
  const ref = useScrollAnimations();

  return (
    <section ref={ref} className="relative px-5 md:pt-[170px] pt-[100px] md:pb-[206px] pb-[120px] border-b border-[#838383]">
      <div className="w-full max-w-[710px] mx-auto">
          <div className="flex justify-center max-lg:px-5">
            <div>
                <h3 className="fade-up flex md:text-[42px] text-[24px] font-black leading-[1.3] relative tracking-[-0.018em]">
                多業界対応。もちろん<UnderlineText>あなたの業界も</UnderlineText>
                </h3>
                <p className="fade-up text-[16px] md:text-[23px] font-bold mt-2">
                クオリティアップに業界特化が必要なのは人間だけ。
                </p>
            </div>
          </div>
          <div className="flex justify-center mt-2">
            <div className="relative md:text-[27px] text-[16px] leading-[1.3] whitespace-nowrap">
                <p className="fade-up absolute top-[10%] left-[8%] inline-block px-3 py-1 font-black text-[#DF3939]/[0.8] border border-[#E66161]">飲食業</p>
                <p className="fade-up absolute top-[12%] left-[33%] inline-block px-3 py-1 font-black text-[#3C50B8]/[0.8] border border-black">IT産業</p>
                <p className="fade-up absolute top-[7%] left-[60%] inline-block px-3 py-1 font-black text-[#725426]/[0.8] border border-[#B1732A]">建設業</p>
                <p className="fade-up absolute top-[22%] left-[38%] inline-block px-3 py-1 font-black text-[#289D34]/[0.8] border border-[#077C2F]">エンターティメント産業</p>
                <p className="fade-up absolute top-[33.5%] left-[8%] inline-block px-3 py-1 font-black text-[#571ABC]/[0.8] border border-[#9931EB]">アパレル・ファッション産業</p>
                <p className="fade-up absolute top-[46.5%] left-[15%] inline-block px-3 py-1 font-black text-[#725426]/[0.8] border border-[#B1732A]">金融業</p>
                <p className="fade-up absolute top-[44%] left-[64%] inline-block px-3 py-1 font-black text-[#571ABC]/[0.8] border border-[#9931EB]">不動産業</p>

                <figure className="fade-up ">
                    <img src="/assets/images/globular.png" alt="" />
                </figure>
            </div>
          </div>
      </div>
    </section>
  );
};

export default Supports;
