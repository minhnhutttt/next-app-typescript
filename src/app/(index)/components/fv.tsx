"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const FV = () => {
  return (
    <section  className="relative bg-[url('/assets/images/fv-bg.png')] bg-[length:100%_100%] bg-center w-screen overflow-hidden z-30">
      <div className="w-full max-w-[1440px] mx-auto md:pt-[50px] pt-10 relative z-30">
          <div className="md:max-w-[39.931vw] max-w-[70vw] dt:max-w-[575px] ml-[7.778vw] dt:ml-[112px]">
            <h1 className="dt:text-[86px] text-[5.972vw] font-medium leading-[1.1]">
            DATA WANTS <br />TO BE FREE. <br />YOU HAVE <br />THE POWER <br />TO SET IT FREE.
            </h1>
          </div>
          <div className="flex items-center mt-7">
             <div className="w-full max-w-[80vw] md:max-w-[41.944vw] dt:max-w-[700px] flex-1">
              <p className="md:text-[18px] text-[14px] font-bold leading-[1.3] ml-[7.778vw] dt:ml-[112px] max-w-[550px]">
              <span className="u-text-gradient bg-[linear-gradient(90deg,_#4AC7FA_0%,_#E649F5_100%)] uppercase">Your computer becomes a sanctuary for data. </span><br />
              Released from centralization, data thrives protected by people like you around the world.
              </p>
              <div className="bg-white h-px my-[22px]"></div>
              <p className="md:text-[16px] text-[13px] font-bold leading-[1.3] ml-[7.778vw] dt:ml-[112px] max-w-[550px]">
              <span className="u-text-gradient bg-[linear-gradient(90deg,_#4AC7FA_0%,_#E649F5_100%)] uppercase">Join the world's first personal-scale interPlanetary data center（IPDC）.</span> <br />
              Data lives on through encryption and fragmentation across a global PC network. Earn IPDC coins by sharing your unused storage.
              </p>
             </div>
             <div className="size-[100px] md:size-[13.889vw] dt:size-[200px]">
              <a href="/" className="flex items-center justify-center flex-col dt:text-[24px] text-[16px] md:text-[1.667vw] size-full border border-white bg-[linear-gradient(90deg,_rgba(74,_199,_250,_0.10)_0%,_rgba(230,_73,_245,_0.10)_100%)] rounded-full [box-shadow:0px_0px_64px_30px_rgba(255,_255,_255,_0.20)_inset] tracking-wider">
                WHITEPAPER
                <span className="md:text-[24px] text-[18px]">Download</span>
              </a>
             </div>
          </div>
      </div>
    </section>
  );
};

export default FV;
