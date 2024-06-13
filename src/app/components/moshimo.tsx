"use client"
import useScrollAnimations from "@/hooks/useScrollAnimations";
import { useEffect, useRef } from "react";

const Moshimo = () => {
  const ref = useScrollAnimations();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;
    videoRef.current.play();
  }, []);
  return (
    <section ref={ref} className="md:pb-[82px] pb-16">
      <div className="fade-up gradient-03 px-5 md:h-[255px] h-[180px] flex items-center justify-center gap-5 text-white font-bold">
        <figure>
          <img
            className="max-md:w-[20vw] max-md:max-w-[100px]"
            src="/assets/images/logo-meta.png"
            alt=""
          />
        </figure>
        <div className="font-medium">
          <p className="xl:text-[36px] text-[clamp(14px,4vw,22px)] md:text-[clamp(24px,2.5vw,36px)]">
            おもいで風化、する前に。
          </p>
          <h3 className="xl:text-[62px] text-[clamp(20px,5.5vw,36px)] md:text-[clamp(40px,4.306vw,62px)]">
            メタでペット供養
          </h3>
        </div>
      </div>
      <div className="px-5 relative pb-10">
      <div className="absolute flex w-full items-center justify-center overflow-hidden inset-0">
        <video
          ref={videoRef}
          muted
          loop
          className="absolute inset-0 h-full w-full object-cover opacity-30"
          poster=""
        >
          <source src="/assets/videos/moshimo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
        <div className="w-full md:max-w-[1316px] max-w-[540px] mx-auto pt-10 md:pt-[70px] relative">
          <div className="fade-up w-full max-w-[914px] mx-auto flex items-center gap-3 md:gap-10">
            <span className="flex-1 h-px gradient-03"></span>
            <span className="md:text-[24px] text-[18px] text-gradient-03 text-center">
              愛するペットとの絆を紡いでいく
              <br className="md:hidden" />
              日常を、デジタルの力で復活
            </span>
            <span className="flex-1 h-px gradient-03"></span>
          </div>
          <div className="fade-up flex md:mt-[70px] mt-10 md:gap-11 gap-8 max-md:flex-col">
            <figure className="max-md:w-auto max-xl:w-[50%] drop-shadow">
              <img src="/assets/images/img-moshimo.png" alt="" />
            </figure>
            <div className="md:pt-5 flex-1">
              <h3 className="md:text-[24px] text-[16px] font-bold">
                「
                <span className="relative after:size-[5px] after:rounded-full after:bg-[#1B0220] after:absolute after:left-1/2 after:bottom-[-6px]">
                  も
                </span>
                <span className="relative after:size-[5px] after:rounded-full after:bg-[#1B0220] after:absolute after:left-1/2 after:bottom-[-6px]">
                  し
                </span>
                <span className="relative after:size-[5px] after:rounded-full after:bg-[#1B0220] after:absolute after:left-1/2 after:bottom-[-6px]">
                  も
                </span>
                、愛するペットに再会できたら… 」
              </h3>
              <p className="md:text-[20px] text-[14px] font-medium mt-8 leading-loose">
                そんな奇跡をメタでペット供養が実現します。
                <br />
                <br />
                現実の世界では叶えられなかった、ペットとの永遠の絆。
                その絆を、メタバースという新しい世界で紡ぎなおすことができる時代になりました。
              </p>
              <p className="md:text-[16px] text-[13px] font-bold mt-5 leading-loose">
                ※メタバースとは、インターネット上のバーチャルワールドのことを指します。当サービスは、ペットとの大切な“おもいで”をデジタル化技術で再現し、スマートフォン一つあればいつでもペットのお墓を含めた特別な場所を訪れることを可能にします。
              </p>
            </div>
          </div>
          <div className="fade-up w-full max-w-[736px] mx-auto bg-white/70 rounded-[10px] bg-[url('/assets/images/bg-01.png')] bg-no-repeat bg-center bg-cover md:py-11 py-6 px-5 md:px-20 md:mt-[34px] mt-5">
            <p className="md:text-[18px] text-[14px] font-medium leading-[1.8]">
              メタバース空間には、
              <span className="bg-[linear-gradient(to_top,_#FBC70F_40%,_transparent_40%)]">
                あなた様のペットだけの特別な場所
              </span>
              があります。
              <br className="max-md:hidden" />
              そこでは、愛するペットの姿があなた様を出迎えてくれます。
            </p>
            <p className="md:text-[24px] text-[18px] text-gradient-03 font-medium my-7 md:my-10">
              愛くるしい仕草で話しかけてくる姿
              <br /> 一緒に歩いた思い出の散歩道
            </p>
            <p className="md:text-[18px] text-[14px] font-medium leading-[1.8]">
              今は亡きペットとの何気ない日常が、あざやかによみがえります。
            </p>
          </div>
        </div>
      </div>
      <div className="px-5">
        <div className="w-full md:max-w-[930px] max-w-[540px] mx-auto pt-[80px]">
          <div className="fade-up">
            <div className="flex gap-[18px] pl-2">
              <figure>
                <img
                  className="max-md:w-12"
                  src="/assets/images/quote-left-blue.png"
                  alt=""
                />
              </figure>
              <span className="flex-1 bg-[#C8AEE0] h-0.5"></span>
            </div>
            <div className="flex justify-center md:px-[84px] py-4">
              <p className="md:text-[20px] text-[16px] leading-loose font-medium">
                まるで生き返ったみたい…。
                <span className="bg-[linear-gradient(to_top,_#8EC5FC_40%,_transparent_40%)]">こんな供養の仕方があったなんて、そして愛するこの子との再会ができるなんて</span>信じられません。本当に良かった…
              </p>
            </div>
            <div className="flex items-end gap-[18px] pr-2">
              <span className="flex-1 bg-[#C8AEE0] h-0.5"></span>
              <figure>
                <img
                  className="max-md:w-12"
                  src="/assets/images/quote-right-blue.png"
                  alt=""
                />
              </figure>
            </div>
          </div>
          <div className="fade-up md:mt-20 mt-8 w-full max-w-[865px] mx-auto bg-[url('/assets/images/bg-memories-02.png')] bg-no-repeat bg-right-bottom bg-[#F5F5F5] rounded-[20px] md:px-[30px] md:py-[34px] p-5 md:text-[18px] text-[14px] font-medium leading-[1.8]">
            メタでペット供養は、<span className="bg-[linear-gradient(to_top,_#FBC70F_40%,_transparent_40%)]">時間や場所に縛られることなく、スマートフォンひとつあればいつでもペットに会いに行けます。</span>話すことも、散歩することさえできます。<br /><br />そこはまさに、悲しみを癒やし、絆を確かめ合える特別な空間なのです。
          </div>
          <div className="fade-up relative flex justify-center items-center md:mt-[88px] mt-10">
            <figure>
              <img
                className="max-md:w-[300px]"
                src="/assets/images/ic-triangle.png"
                alt=""
              />
            </figure>
            <div className="absolute inset-0 md:text-[22px] text-[15px] font-medium flex justify-center md:pt-10 pt-6 leading-[1.8]">
              <span className="max-w-[714px] w-full">
              私たちは、日本中のペットオーナーが抱えている、<span className="bg-[linear-gradient(to_top,_#FBC70F_40%,_transparent_40%)]">「ペットロスの悲しみ」や「記憶が薄れていく恐怖心」</span>に寄り添い、メタでペット供養を通じて新しいペット供養のカタチを提案しています。
              </span>
            </div>
          </div>
          <div className="fade-up w-full max-w-[700px] mx-auto md:-mt-6 -mt-3">
              <span className="block h-[3px] gradient-02"></span>
              <p className="text-center text-gradient-03 md:text-[34px] text-[18px] font-bold py-3 leading-[1.8]">
                おもいで風化、する前に。<br />
                ぜひ、あなた様が愛するあの子にも。
              </p>
              <span className="block h-[3px] gradient-03"></span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Moshimo;
