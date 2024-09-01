"use client";

const Flow = () => {
  return (
    <section id="flow" className="relative px-6 md:pt-16 pt-10">
      <h2 className="font-bold md:text-[50px] text-[25px] text-center md:mb-[48px] mb-[30px]">
        フロー
      </h2>
      <div
        id="flow"
        className="flex flex-wrap gap-11 gap-y-16 justify-center relative"
      >
        <div
          id="nft-creation"
          data-scroll
          className="ani-fade-up w-full max-w-[363px] md:w-[363px] md:h-[494px] h-[380px] bg-[url('/assets/images/bg-flow.png')] border-[#C27500] md:border-[5px] border-[3px] rounded-[40px] relative"
        >
          <div className="flex flex-col items-center justify-center md:pt-8 pt-5 px-4 pb-5">
            <div className="md:w-[363px] w-full flex flex-col items-center justify-center px-5">
              <div className="w-full flex justify-center items-center">
                <span className="md:text-[42px] text-[24px] mr-[15px] bg-white md:max-w-[63px] max-w-[50px] w-full md:h-[63px] h-[50px] rounded-[50px] flex justify-center items-center border-[2px] border-black font-extrabold leading-none">
                  1
                </span>
                <p className="text-center md:text-[32px] text-[18px] font-extrabold">
                  NFT作成
                </p>
              </div>
              <div className="pt-3">
                <img
                  className="max-md:w-[140px]"
                  src="/assets/images/img-flow-01.png"
                  alt=""
                />
              </div>
              <p className="md:text-[18px] text-[15px] md:pt-6 pt-4 text-center font-semibold">
                公式LINEへウォレットアドレスを連絡し、NFT作成しよう！
              </p>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3"
              >
                <img src="/assets/images/btn-line.png" alt="" />
              </a>
            </div>
          </div>
        </div>
        <div
          id="order"
          data-scroll
          className="ani-fade-up w-full max-w-[363px] md:w-[363px] md:h-[494px] h-[380px] bg-[url('/assets/images/bg-flow.png')] border-[#C27500] md:border-[5px] border-[3px] rounded-[40px] relative"
        >
          <div className="flex flex-col items-center justify-center md:pt-8 pt-5 px-4 pb-5">
            <div className="md:w-[363px] w-full flex flex-col items-center justify-center px-5">
              <div className="w-full flex justify-center items-center">
                <span className="md:text-[42px] text-[24px] mr-[15px] bg-white md:max-w-[63px] max-w-[50px] w-full md:h-[63px] h-[50px] rounded-[50px] flex justify-center items-center border-[2px] border-black font-extrabold leading-none">
                  2
                </span>
                <p className="text-center md:text-[32px] text-[18px] font-extrabold">
                  受注する
                </p>
              </div>
              <div className="pt-3">
                <img
                  className="max-md:w-[140px]"
                  src="/assets/images/img-flow-02.png"
                  alt=""
                />
              </div>
              <p className="md:text-[18px] text-[15px] md:pt-6 pt-4 font-semibold">
                NFTと連携したメッセージングアプリ「DIVER
                Knock」にバイトのオファーが届く！
                <br />
                いいと思ったら即受注しよう！
              </p>
            </div>
          </div>
        </div>
        <div
          id="job"
          data-scroll
          className="ani-fade-up w-full max-w-[363px] md:w-[363px] md:h-[494px] h-[380px] bg-[url('/assets/images/bg-flow.png')] border-[#C27500] md:border-[5px] border-[3px] rounded-[40px] relative"
        >
          <div className="flex flex-col items-center justify-center md:pt-8 pt-5 px-4 pb-5">
            <div className="md:w-[363px] w-full flex flex-col items-center justify-center px-5">
              <div className="w-full flex justify-center items-center">
                <span className="md:text-[42px] text-[24px] mr-[15px] bg-white md:max-w-[63px] max-w-[50px] w-full md:h-[63px] h-[50px] rounded-[50px] flex justify-center items-center border-[2px] border-black font-extrabold leading-none">
                  3
                </span>
                <p className="text-center md:text-[32px] text-[18px] font-extrabold">
                  仕事をする
                </p>
              </div>
              <div className="pt-3">
                <img
                  className="max-md:w-[140px]"
                  src="/assets/images/img-flow-03.png"
                  alt=""
                />
              </div>
              <p className="md:text-[18px] text-[15px] md:pt-6 pt-4 font-semibold">
                DIVER Knockに届いた指定の日時にバイトをしよう！
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        data-scroll
        className="ani-fade-up flex justify-center md:pt-16 pt-10"
      >
        <svg
          width="201"
          height="106"
          viewBox="0 0 201 106"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100.5 106L0.474069 0.249996L200.526 0.250014L100.5 106Z"
            fill="#FF9153"
          />
        </svg>
      </div>
      <div className="flex w-full md:max-w-[942px] mx-auto justify-center md:mt-10 mt-6 bg-[url('/assets/images/bg-reward.png')] bg-[length:100%_100%]">
        <div
          id="rewards"
          data-scroll
          className="ani-fade-up w-full max-w-[395px] md:w-[395px] md:h-[512px] h-[380px] bg-[url('/assets/images/bg-clear.png')] bg-[length:100%_100%] md:pt-[28px] pt-10 md:px-9 px-6  relative"
        >
          <div className="relative z-10">
            <div className="md:mt-[23px] flex items-center justify-center md:text-[48px] text-[32px] font-medium text-white gap-1">
              <p><img className="max-md:w-[90px]" src="/assets/images/ttl-reward.png" alt="" /></p>
            </div>
            <div className="relative">
                <h5 className="flex justify-center md:mt-[42px] mt-6 mb-[5px]">
                  <img src="/assets/images/congratulation.png" alt="" />
                </h5>
              <div className="md:h-[108px] h-[80px] bg-white flex justify-center items-center">
                <p className="text-black font-extrabold md:text-[20px] text-[16px] text-center">
                  企業から報酬を受け取ろう！
                </p>
              </div>
              <div className="flex justify-center mt-[-21px] ml-[35px]">
                <img
                  className="max-md:w-[130px] [transition:1.5s_ease-in-out] animate-[fuwafuwa_3s_ease-in-out_infinite_alternate]"
                  src="/assets/images/group.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Flow;
