"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const Recover = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="overflow-hidden md:pb-[88px] pb-12">
      <div className="md:bg-[url('/assets/images/bg-title-02.png')] md:bg-cover bg-no-repeat bg-center md:h-[197px] bg-[#FF8C5A] relative flex items-center justify-center max-md:px-5 max-md:flex-col max-md:py-10">
        <div className="w-full max-w-[520px]">
          <p className="font-serif text-white font-black md:text-[28px] text-[4.5vw]">
            『 おもいで 』が風化する前に…
          </p>
          <p className="pt-4 pl-20">
            <img src="/assets/images/recover-title.png" alt="" />
          </p>
        </div>
        <span className="md:absolute bottom-4 right-4 dt:right-28 max-md:w-full max-md:mt-5">
          <img
            className="dt:w-[361px] md:w-[25.069vw] w-[50vw] ml-auto"
            src="/assets/images/sign-title-01.png"
            alt=""
          />
        </span>
      </div>
      <div className="w-full max-w-[1440px] mx-auto mt-4 md:pl-7 pl-4">
        <div className="bg-[#FFE1C6] pb-[50vw] md:pb-[537px]">
          <div className="w-full max-w-[1000px] py-8 border-b border-black/50 text-[#5F5F5F] md:text-[28px] text-[17px] font-semibold font-serif max-md:px-3 max-md:text-center md:pl-24">
          愛するペットとの絆を紡いでいく日常を、
            <br className="lg:hidden" />
            デジタルの力で復活
          </div>
          <div className="px-5 pt-8 relative">
          <span className="absolute right-0 md:top-[650px] top-[740px] xl:top-[130px]"><img className="max-xl:w-[72.431vw]" src="/assets/images/bg-recover-01.png" alt="" /></span>
            <div className="w-full md:max-w-[1200px] max-w-[540px] mx-auto relative">
              <div className="fade-up flex xl:items-start max-xl:flex-col max-xl:justify-center items-center">
                <figure className="pt-6">
                  <img src="/assets/images/img-recover.png" alt="" />
                </figure>
                <div className="flex-1">
                  <div className="max-w-[636px] w-full md:-ml-5">
                    <div className="bg-white/70 md:px-8 px-4 pt-5 md:pb-10 pb-6">
                      <h5 className="font-serif md:text-[28px] text-[20px] font-bold text-center text-[#5F5F5F] border-b border-black">「もしも、愛するペットに再会できたら… 」</h5>
                      <p className="text-center md:text-[18px] text-[14px] font-bold font-sans pt-5">そんな奇跡を「メタでペット供養」が実現します。</p>
                      <p className="md:text-[17px] text-[14px] md:pt-10 pt-7 leading-snug">
                        現実の世界では叶えられなかった、ペットとの永遠の絆。<br />
                        その絆を、メタバースという新しい世界で紡ぎなおすことができる時代になりました。
                      </p>
                    </div>
                    <div className="flex justify-center pt-4 px-2 md:px-10">
                      <p className="md:text-[15px] text-[13px] font-sans max-w-[555px] leading-tight">
                        ※メタバースとは、インターネット上のバーチャルワールドのことを指します。当サービスは、ペットとの大切な“おもいで”をデジタル化技術で再現し、スマートフォン一つあればいつでもペットのお墓を含めた特別な場所を訪れることを可能にします。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:max-w-[1024px] max-w-[640px] mx-auto mt-9 relative">
              <figure>
                <img className="max-md:w-full max-xl:w-[50.972vw]" src="/assets/images/img-recover-01.png" alt="" />
              </figure>
            </div>
            <div className="w-full md:max-w-[1080px] max-w-[640px] mx-auto mt-16 relative">
              <div className="w-full max-w-[911px] md:h-[394px] bg-[url('/assets/images/frame-recover.png')] bg-[length:100%_100%]">
              <div className="w-full h-full bg-[url('/assets/images/frame-recover-pet.png')] bg-right-bottom max-md:bg-[length:100%_auto] bg-no-repeat md:px-8 px-5 pt-12 max-md:pb-32">
                <div className="flex justify-center mb-4">
                  <h5 className="font-serif md:text-[23px] text-[17px] font-semibold text-[#8B1D1D]">
                  メタバース空間には、あなた様のペットだけの特別な場所があります。 <br />
                  そこでは、愛するペットの姿があなた様を出迎えてくれます。
                  </h5>
                </div>
                <div className="w-full max-w-[530px] mx-auto border-y-2 border-white text-center font-serif md:text-[23px] text-[17px] font-semibold text-white py-6">
                      愛くるしい仕草で話しかけてくる姿 <br />
                      一緒に歩いた思い出の散歩道
                </div>
                <h5 className="text-center font-serif md:text-[23px] text-[17px] font-semibold text-[#8B1D1D] mt-4">
                今は亡きペットとの気ない日常が、あざやかによみがえります。
                  </h5>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-5">
        <div className="fade-up relative flex justify-center items-center md:mt-[88px] mt-12">
          <figure>
            <img
              className="max-md:w-[300px]"
              src="/assets/images/ic-triangle.png"
              alt=""
            />
          </figure>
          <div className="absolute inset-0 md:text-[22px] text-[16px] font-medium justify-center text-center md:pt-20 pt-10">
            <p>
              もしも愛するペットとの絆を永遠に紡ぐ方法があったら…
              <br />
              <span className="underline">
                そんな悲痛な想いに寄り添う、新しい供養のカタチがあります
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recover;
