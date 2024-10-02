"use client";
import useScrollOut from "@/hooks/useScrollOut";

const FV = () => {
  useScrollOut(".fv-scroll", {
    offset: 50,
    cssProps: true,
  });
  return (
    <div>
      <div className="fv-scroll group pt-[100px] h-screen relative">
        <div className="absolute top-0 inset-x-0 h-[80%] bg-[linear-gradient(140deg,_#2379E7_1.59%,_#2594F7_33.42%,_#28A7FE_57.52%,_#2AB1FF_75.85%,_#32BCFE_98.03%)] md:[clip-path:polygon(0_0,_100%_0,_100%_calc(100%-140px),_0%_100%)] [clip-path:polygon(0_0,_100%_0,_100%_calc(100%-70px),_0%_100%)]"></div>
        <div className="fixed top-0 inset-x-0 h-full w-full max-w-[1440px] mx-auto flex items-center justify-center z-0">
          <div className="group-data-[scroll=in]:translate-x-[100%] group-data-[scroll=in]:translate-y-[40%] group-data-[scroll=in]:rotate-[-30deg] group-data-[scroll=in]:opacity-0 duration-300 absolute w-[24.375%] top-[25%] md:top-[12%] md:left-[2.083%] left-[12%]">
            <img src="/assets/images/fc-sec-01.png" alt="" />
          </div>
          <div className="group-data-[scroll=in]:translate-x-[100%] group-data-[scroll=in]:translate-y-[40%] group-data-[scroll=in]:rotate-[-10deg] group-data-[scroll=in]:opacity-0 duration-300 absolute w-[11.875%] top-[55%] md:top-[22%] left-[14%] md:left-[22.91%]">
            <img src="/assets/images/fc-sec-02.png" alt="" />
          </div>
          <div className="group-data-[scroll=in]:translate-x-[100%] group-data-[scroll=in]:translate-y-[-20%] group-data-[scroll=in]:rotate-[-20deg] group-data-[scroll=in]:opacity-0 duration-300 absolute w-[20.97%] left-[22.91%] top-[62%] md:top-[44%]">
            <img src="/assets/images/fc-sec-03.png" alt="" />
          </div>
          <div className="group-data-[scroll=in]:translate-x-[-100%] group-data-[scroll=in]:translate-y-[40%] group-data-[scroll=in]:rotate-[20deg] group-data-[scroll=in]:opacity-0 duration-300 absolute w-[17.08%] right-[23%] top-[25%] md:top-[14%]">
            <img src="/assets/images/fc-sec-04.png" alt="" />
          </div>
          <div className="group-data-[scroll=in]:translate-x-[-120%] group-data-[scroll=in]:translate-y-[40%] group-data-[scroll=in]:rotate-[30deg] group-data-[scroll=in]:opacity-0 duration-300 absolute w-[19.65%] right-[3.5%] top-[34%] md:top-[21%]">
            <img src="/assets/images/fc-sec-05.png" alt="" />
          </div>
          <div className="group-data-[scroll=in]:translate-x-[-120%] group-data-[scroll=in]:translate-y-[-20%] group-data-[scroll=in]:rotate-[20deg] group-data-[scroll=in]:opacity-0 duration-300 absolute w-[17.08%] right-[11%] top-[60%] md:top-[58%]">
            <img src="/assets/images/fc-sec-06.png" alt="" />
          </div>
          <div
            className="bg-white font-bold text-[15px] md:text-[20px] text-[#1E1E1E] px-4 md:px-[32px] py-5 md:max-w-[750px] max-w-[450px] relative"
            style={{
              filter: "blur(calc((1 - var(--visible-y)) * 10px))",
              opacity: "var(--visible-y)",
            }}
          >
            <span className="md:text-[28px] text-[18px]">DwETH: Ethereum Reborn on DIVER Chain </span><br />
            ・1 DwETH = 1 ETH Guaranteed Value<br />
            ・Smooth Transactions with Zero Fees<br />
            ・Lightning-Fast 2-Second Processing<br />
            ・ETH⇄DwETH Easy Bridges<br />
            ・Unwavering Commitment to Transparency and Security
          </div>
          <p className="absolute bottom-0 text-[28px] lg:text-[82px] md:text-[44px] text-center font-black leading-[1.3] text-[#1E1E1E] [text-shadow:3px_3px_3px_#fff]" style={{
                  filter: "blur(calc((1 - var(--visible-y)) * 10px))",
                  opacity: "var(--visible-y)",
                }}>
              Ethereum, Evolving <br />
              Further with DIVER
            </p>
        </div>
      </div>
      
      <div className="flex justify-center items-center flex-col px-5 md:mt-[100px]">
        <a
          href="/"
          className="w-[300px] md:w-[604px] relative aspect-square bg-[linear-gradient(140deg,_#040444_15.67%,_#0D1054_38.25%,_#101764_55.35%,_#131D74_68.35%,_#15206B_84.08%)] [box-shadow:-4px_4px_180px_0px_rgba(85,_194,_255,_0.50),_0px_4px_84px_0px_rgba(0,_0,_0,_0.25)] rounded-full flex justify-center items-center"
        >
          <div className="absolute inset-0 flex items-center justify-center flex-col gap-2">
            <div className="h-8"></div>
            <figure className="[filter:drop-shadow(0px_20px_53px_rgba(50,_189,_254,_0.40))_drop-shadow(0px_4px_15px_rgba(0,_0,_0,_0.25))]">
              <img
                className="max-md:w-[100px]"
                src="/assets/images/logo-white.svg"
                alt=""
              />
            </figure>
            <p className="text-center h-8 text-[16px] md:text-[20px] text-white font-semibold tracking-[6px]">
              Download
            </p>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[36px] md:text-[58px] font-black text-white tracking-widest">
              WHITE <br />
              PAPER
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default FV;
