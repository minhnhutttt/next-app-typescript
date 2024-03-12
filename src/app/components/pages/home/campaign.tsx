export default function Campaign() {
    return (
      <section className="relative md:mb-[110px] mb-[70px]">
          <div className="w-full md:max-w-[1226px] max-w-[540px] mx-auto relative px-10 md:px-[124px] pt-[60px] md:pt-[120px]">
            <figure className="absolute top-0 left-0">
                <img className="max-md:max-w-[280px]" src="/images/campaign-ribon.png" alt="" />
            </figure>
            <div className="w-full max-w-[978px] mx-auto bg-[linear-gradient(90deg,_#FE4848_-2.68%,_#FF9B9B_99.85%)] pb-8 md:pb-[76px] pt-[60px] md:pt-[80px] lg:pt-[60px] px-5">
                <div className="w-full max-w-[810px] mx-auto">
                    <h5 className="text-center text-white md:text-[36px] lg:text-[48px] text-[20px] font-bold tracking-widest">じゃあどうすれば...？</h5>
                    <div className="bg-white rounded-[30px] flex max-md:flex-col items-center px-4 md:px-[34px] py-5 md:py-10 gap-5 md:mt-8 mt-4">
                        <figure>
                            <img className="max-md:w-[100px]" src="/images/campaign-teacher.png" alt="" />
                        </figure>
                        <div className="flex-1">
                            <p className="text-center md:text-[24px] text-[14px] font-bold pb-3 border-b border-black w-full">だから私たちを頼ってください！</p>
                            <p className="md:text-[20px] text-[14px] font-medium pt-2 leading-snug">
                            まるなげももちろんOK。<br />あなたがどんな状態でも、あなたの組織にデジタル証明書を根付かせます。<br />気軽にチャットしながらデジタル化を進めましょう！
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:mt-9 mt-6">
                <div className="flex justify-center relative">
                    <figure>
                        <img className="max-md:w-[120px]" src="/images/campaign-deco.png" alt="" />
                    </figure>
                    <p className="absolute top-2 md:top-[16px] tracking-[0.15em] md:text-[28px] lg:text-[36px] text-[24px] font-medium text-center">次世代証明書のサポートはこちら</p>
                </div>
                <div className="flex items-center justify-center overflow-hidden mt-5 md:mt-8">
                    <a href="#_" className="w-[300px] h-[60px] md:w-[487px] md:h-[92px] flex items-center justify-center bg-[#FE4848] text-white rounded-[10px] gap-0.5 md:text-[22px] text-[14px] font-bold tracking-widest group overflow-hidden relative">
                        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#FF9B9B] rounded-full group-hover:w-[500px] group-hover:h-[500px]"></span>
                        <p className="relative flex items-center">
                            <span>まるなげサポートに相談する</span>
                            <img className="max-md:w-5" src="/images/ic-chat.svg" alt="" />
                        </p>
                    </a>
                </div>
            </div>
          </div>
      </section>
    );
  }
  