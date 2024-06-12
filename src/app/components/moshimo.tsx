const Moshimo = () => {
  return (
    <section>
      <div className="gradient-03 px-5 md:h-[255px] h-[180px] flex items-center justify-center gap-5 text-white font-bold">
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
      <div className="px-5 bg-[url('/assets/images/bg-moshimo.png')] bg-cover pb-10">
        <div className="w-full md:max-w-[1316px] max-w-[540px] mx-auto pt-10 md:pt-[70px]">
          <div className="w-full max-w-[914px] mx-auto flex items-center gap-3 md:gap-10">
            <span className="flex-1 h-px gradient-03"></span>
            <span className="md:text-[24px] text-[18px] text-gradient-03 text-center">
              愛するペットとの絆を紡いでいく
              <br className="md:hidden" />
              日常を、デジタルの力で復活
            </span>
            <span className="flex-1 h-px gradient-03"></span>
          </div>
          <div className="flex md:mt-[70px] mt-10 md:gap-11 gap-8 max-md:flex-col">
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
          <div className="w-full max-w-[736px] mx-auto bg-white/70 rounded-[10px] bg-[url('/assets/images/bg-01.png')] bg-no-repeat bg-center bg-cover md:py-11 py-6 px-5 md:px-20 md:mt-[34px] mt-5">
            <p className="md:text-[18px] text-[14px] font-medium leading-[1.8]">
                メタバース空間には、<span className="bg-[linear-gradient(to_top,_#FBC70F_40%,_transparent_40%)]">あなた様のペットだけの特別な場所</span>があります。<br className="max-md:hidden" />
                そこでは、愛するペットの姿があなた様を出迎えてくれます。
            </p>
            <p className="md:text-[24px] text-[18px] text-gradient-03 font-medium my-7 md:my-10">
                愛くるしい仕草で話しかけてくる姿<br /> 一緒に歩いた思い出の散歩道
            </p>
            <p className="md:text-[18px] text-[14px] font-medium leading-[1.8]">
                今は亡きペットとの何気ない日常が、あざやかによみがえります。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Moshimo;
