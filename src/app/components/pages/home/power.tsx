"use client";
import useBgText from "@/app/hooks/useBgText";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";

export default function Power() {
  const animateRefs = useScrollAnimation("fadeUp");
  const spanRef = useBgText();
  return (
    <section className="relative px-5 md:mb-20 mb-16">
      <div className="w-full md:max-w-[1220px] max-w-[480px] mx-auto">
        <h4
          ref={animateRefs}
          className="opacity-0 flex items-center justify-center gap-2 md:gap-[30px] max-w-[1013px] mx-auto"
        >
          <span className="flex-1 h-[3px] md:h-[5px] bg-black max-md:min-w-[24px] max-w-[110px]"></span>
          <p className="md:text-[48px] text-[24px] font-medium tracking-widest text-center">
            <span className="relative overflow-hidden">
              <span
                ref={spanRef}
                className="w-0 opacity-0 absolute inset-0 z-[-1] bg-[linear-gradient(to_top,_#FFD900_40%,_transparent_40%)]"
              ></span>
              「即時証明力」
            </span><br className="md:hidden" />
            を実現する<span className="text-[#FE4848] font-black">NFT</span>
          </p>
          <span className="flex-1 h-[3px] md:h-[5px] bg-black max-md:min-w-[24px] max-w-[110px]"></span>
        </h4>
        <div
          ref={animateRefs}
          className="opacity-0 bg-[#F7F3F3] md:rounded-[50px] rounded-[32px] md:py-[60px] py-[32px] md:mt-[30px] mt-3 px-5"
        >
          <div className="w-full max-w-[817px] mx-auto">
            <h5 className="md:text-[32px] text-[20px] font-medium text-center">
              次世代証明書は、<br className="md:hidden" />
              <span className="text-[#FE4848] font-bold">NFT</span>
              を活用した<br className="md:hidden" />デジタル証明書です。
            </h5>
            <div className="flex justify-center mt-6 md:mt-10">
              <div className="md:text-[24px] text-[16px] font-medium space-y-5 py-3">
                <div className="flex items-center gap-2">
                  <figure>
                    <img
                      className="max-md:w-6"
                      src="/images/ic-check.svg"
                      alt=""
                    />
                  </figure>
                  <p className="flex-1">NFTは次世代の証明技術</p>
                </div>
                <div className="flex items-center gap-2">
                  <figure>
                    <img
                      className="max-md:w-6"
                      src="/images/ic-check.svg"
                      alt=""
                    />
                  </figure>
                  <p className="flex-1">第三者の認証不要で即時に発行可能</p>
                </div>
                <div className="flex items-center gap-2">
                  <figure>
                    <img
                      className="max-md:w-6"
                      src="/images/ic-check.svg"
                      alt=""
                    />
                  </figure>
                  <p className="flex-1">
                    証明書の真正性や公式性を即時に証明可能
                  </p>
                </div>
              </div>
            </div>
            <div className="h-px w-full bg-black my-6 md:my-10"></div>
            <div className="">
              <p className="text-center md:text-[28px] text-[18px] font-bold">
                NFTとは
              </p>
              <p className="md:text-[18px] text-[14px] font-medium mt-5 max-w-[744px] mx-auto leading-[1.8]">
                NFTは「世界にひとつだけの証明番号」を画像やビデオ、3D、音楽、音声などに付与する技術を活用して発行されるものです。証明番号は第三者から書き換えられたりするリスクがなく、デジタルの世界に&quot;ひとつだけ&quot;であることを証明するために使われています。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
