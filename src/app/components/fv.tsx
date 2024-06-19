"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const FV = () => {
  const ref = useScrollAnimations();

  return (
    <section
      ref={ref}
      className="relative md:pb-[80px] overflow-hidden md:h-[790px] bg-[url('/assets/images/fv.jpg')] bg-cover pt-[80px] md:pt-[116px] md:px-5"
    >
      <div className="w-full max-w-[1240px] mx-auto">
        <div className="fade-up md:pt-[66px] pt-9 md:w-[55vw] dt:w-[720px]">
          <h2 className="dt:text-[72px] md:text-[5vw] font-medium text-[32px] md:leading-none leading-[1.1] space-y-4 max-md:text-center">
            <p className="bg-white inline-block px-2">地球の裏側まで</p> <br />
            <p className="bg-white inline-block px-2">あなたのビジネスで</p>
            <br />
            <p className="bg-white inline-block px-2">
              埋め尽くします
              <span className="inline-block font-bold md:text-[5.764vw] dt:text-[83px] text-[36px] leading-[0] -ml-2">
                ！
              </span>
            </p>
          </h2>
          <div className="flex items-end justify-end max-md:w-full md:hidden ml-auto">
            <img
              className="fade-up max-md:w-[60vw]"
              src="/assets/images/fv-map.png"
              alt=""
            />
          </div>
          <div className="bg-[#111C59]/[0.6] flex max-md:flex-col p-6 md:mt-14 max-md:mb-10 md:h-[251px]">
            <p className="flex items-center text-white md:text-[1.389vw] dt:text-[20px] text-[16px] font-medium dt:w-[220px] md:w-[15.278vw] max-md:justify-center max-md:text-center">
              マップ機能がついた <br className="max-md:hidden" />
              NFTクーポンが顧客を
              <br className="max-md:hidden" />
              あなたのお店へと
              <br className="max-md:hidden" />
              ご案内します。
            </p>
            <div className="bg-white w-full max-md:h-px md:w-px max-md:my-5 md:mx-5"></div>
            <div className="flex justify-center flex-col max-md:items-center flex-1">
              <h5 className="dt:text-[20px] md:text-[1.389vw] text-[16px] font-bold text-[#FFFF54] max-md:text-center">
                「位置情報付きNFTクーポン」
                <br className="md:hidden" />
                ということは
              </h5>
              <div className="text-white space-y-1.5 mt-4">
                <div className="flex gap-2">
                  <figure className="mt-1">
                    <img
                      className="max-dt:w-4"
                      src="/assets/images/ic-check.svg"
                      alt=""
                    />
                  </figure>
                  <span className="flex-1 dt:text-[18px] md:text-[1.25vw] text-[14px]">
                    今の場所からクーポンを使える店を選択できる
                  </span>
                </div>
                <div className="flex gap-2">
                  <figure className="mt-1">
                    <img
                      className="max-dt:w-4"
                      src="/assets/images/ic-check.svg"
                      alt=""
                    />
                  </figure>
                  <span className="flex-1 dt:text-[18px] md:text-[1.25vw] text-[14px]">
                    NFTを受け取るため、顧客を指定の場所まで導くことができる
                  </span>
                </div>
                <div className="flex gap-2">
                  <figure className="mt-1">
                    <img
                      className="max-dt:w-4"
                      src="/assets/images/ic-check.svg"
                      alt=""
                    />
                  </figure>
                  <span className="flex-1 dt:text-[18px] md:text-[1.25vw] text-[14px]">
                    好きな店のNFTをコレクションできる
                  </span>
                </div>
                <div className="flex gap-2">
                  <figure className="mt-1">
                    <img
                      className="max-dt:w-4"
                      src="/assets/images/ic-check.svg"
                      alt=""
                    />
                  </figure>
                  <span className="flex-1 dt:text-[18px] md:text-[1.25vw] text-[14px]">
                    ユーティリティの恩恵を受けられる
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-dt:w-[39.861vw] md:absolute right-0 bottom-0 flex items-end justify-end max-md:w-full max-md:hidden">
        <img
          className="fade-up max-md:w-[60vw]"
          src="/assets/images/fv-map.png"
          alt=""
        />
      </div>
    </section>
  );
};

export default FV;
