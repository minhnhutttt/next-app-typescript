"use client";
const Work = () => {
  return (
    <section id="workstyle" className="relative pt-[65px] px-6">
      <h2 className="font-bold md:text-[50px] text-[25px] text-center md:mb-[57px] mb-[30px]">
        必須アイテム
      </h2>
      <div className="w-full max-w-[1277px] mx-auto">
        <div
          id="diver-wallet"
          data-scroll
          className="ani-fade-up bg-[url('/assets/images/bg-diver.png')] bg-[#FFCB71] rounded-[47px] border-[5px] border-[#134F86] pt-[20px] pb-[30px] mb-[60px] md:px-[56px] px-4"
        >
             <h5 className="border-b-[1px] border-black md:text-[50px] text-[25px] font-mplus font-extrabold text-center">
             DIVER Wallet</h5>
          <div className="flex items-center w-full max-w-[1143px] mx-auto gap-7 max-lg:flex-col mt-[40px]">
            <figure className="w-full md:max-w-[311px]">
              <img
                className="mx-auto max-md:w-[200px]"
                src="/assets/images/diver-wallet.png"
                alt=""
              />
            </figure>
            <div className="flex-1 flex justify-end">
              <div className="w-full max-w-[730px] bg-white rounded-[40px] flex flex-col items-center justify-center md:px-[45px] px-8 md:py-[44px] py-6">
                <p className="md:text-[24px] text-[18px] w-full leading-loose">
                DIVER Walletは中央集権的な管理者に依存せず<br />真に分散化された「個人を尊重する社会」の実現を目指す<br />web3プロジェクトDIVERの公式ウォレットです。
                </p>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[640px] md:mt-[60px] mt-[30px] flex justify-center items-center md:gap-10 gap-6 mx-auto">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/assets/images/btn-appstore.png" alt="" />
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/assets/images/btn-googleplay.png" alt="" />
            </a>
          </div>
        </div>
        <div
          id="diver-knock"
          data-scroll
          className="ani-fade-up bg-[url('/assets/images/bg-diver.png')] bg-[#FFCB71] rounded-[47px] border-[5px] border-[#134F86] pt-[20px] pb-[30px] mb-[60px] md:px-[56px] px-4"
        >
             <h5 className="border-b-[1px] border-black md:text-[50px] text-[25px] font-mplus font-extrabold text-center">
             DIVER Knock</h5>
          <div className="flex items-center w-full max-w-[1143px] mx-auto gap-7 max-lg:flex-col mt-[40px]">
            <figure className="w-full md:max-w-[400px]">
              <img
                className="mx-auto max-md:max-w-[110px]"
                src="/assets/images/knock.png"
                alt=""
              />
            </figure>
            <div className="flex-1 flex justify-end">
              <div className="w-full max-w-[730px] bg-white rounded-[40px] flex flex-col items-center justify-center md:px-[45px] px-8 md:py-[50px] py-6">
                <p className="md:text-[24px] text-[18px] w-full leading-loose md:mb-[30px] mb-5">
                DIVER Knockは、最高レベルの安全性を備えた<br/>
分散型メッセージアプリです。
                </p>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[640px] md:mt-[60px] mt-[30px] flex justify-center items-center md:gap-10 gap-6 mx-auto">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/assets/images/btn-appstore.png" alt="" />
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/assets/images/btn-googleplay.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Work;
