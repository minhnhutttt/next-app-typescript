"use client";

import Button from "@/components/button";
import useScrollAnimations from "@/hooks/useScrollAnimations";
import { useModal } from "@/context/ModalContext";

const FV = () => {
  const ref = useScrollAnimations();
  const { openModal } = useModal();
  return (
    <section ref={ref} className="relative">
      <div className="absolute right-[2vw] dt:right-7 dt:top-[570px] md:top-[39.583vw] top-[55vw]">
        <img
          className="fade-up max-md:w-8 max-dt:w-[7.5vw]"
          src="/assets/images/meta-text.png"
          alt=""
        />
      </div>
      <div className="bg-[url(/assets/images/fv.jpg)] bg-cover pt-16 md:pt-6 pb-16 md:pb-[96px]">
        <div className="w-full max-w-[1440px] mx-auto relative flex justify-center pb-14 md:pb-3">
          <div className="fade-up dt:pl-11 pl-[3.056vw]">
            <div className="w-[96.319vw] dt:w-[1387px] aspect-[1387/631] relative">
              <div className="absolute dt:w-[375px] w-[26.042vw] left-0 bottom-0 animate-[floating_3s_0.2s_infinite_ease-in-out]">
                <img src="/assets/images/fv-01.png" alt="" />
              </div>
              <div className="absolute dt:w-[276px] w-[19.167vw] left-[22.222vw] dt:left-[320px] dt:top-0 animate-[floating_3s_0.6s_infinite_ease-in-out]">
                <img src="/assets/images/fv-02.png" alt="" />
              </div>
              <div className="absolute dt:w-[211px] w-[14.653vw] left-[44.931vw] dt:left-[647px] top-[4.167vw] dt:top-[60px] animate-[floating_3s_0.4s_infinite_ease-in-out]">
                <img src="/assets/images/fv-03.png" alt="" />
              </div>
              <div className="absolute dt:w-[175px] w-[12.153vw] left-[62.917vw] dt:left-[906px] top-[7.639vw] dt:top-[110px] animate-[floating_3s_1s_infinite_ease-in-out]">
                <img src="/assets/images/fv-04.png" alt="" />
              </div>
              <div className="absolute dt:w-[149px] w-[10.347vw] left-[75.972vw] dt:left-[1094px] top-[14.583vw] dt:top-[210px] animate-[floating_3s_0.1s_infinite_ease-in-out]">
                <img src="/assets/images/fv-05.png" alt="" />
              </div>
              <div className="absolute dt:w-[134px] w-[9.306vw] left-[83.611vw] dt:left-[1204px] top-[25vw] dt:top-[360px] animate-[floating_3s_0.5s_infinite_ease-in-out]">
                <img src="/assets/images/fv-06.png" alt="" />
              </div>
            </div>
          </div>
          <div className="absolute w-[80vw] md:w-[59.861vw] dt:w-[862px] bottom-0 left-1/2 -translate-x-1/2">
            <h1 className="fade-up">
              <img src="/assets/images/fv-text.png" alt="" />
            </h1>
          </div>
        </div>
      </div>
      <div className="md:-mt-20 -mt-10 px-5 max-dt:px-[8vw] md:mb-[70px] mb-12">
        <div className="fade-up w-full md:max-w-[910px] max-w-[440px] mx-auto md:border-[6px] border-[3px] border-white md:rounded-[63px] rounded-[32px] bg-[url('/assets/images/bg-01.png')] bg-cover md:pb-[34px] pb-5">
          <div className="flex px-4 gap-2 max-md:ml-[-40px] max-md:justify-center">
            <figure className="md:-mt-12 -mt-8 relative">
              <img
                className="max-md:w-[110px]"
                src="/assets/images/circle.png"
                alt=""
              />
              <img
                className="max-md:w-[110px] absolute inset-0 animate-[fadeIn_1s_ease_infinite]"
                src="/assets/images/circle-c.png"
                alt=""
              />
            </figure>
            <div className="flex-1 md:pt-9 pt-2">
              <h3 className="">
                <img
                  className="max-md:w-full max-md:max-w-[400px] max-md:hidden"
                  src="/assets/images/title.png"
                  alt="メモリアルモニター受付中 !!"
                />
                <img
                  className="max-md:w-full max-md:max-w-[240px] md:hidden"
                  src="/assets/images/title-sp.png"
                  alt="メモリアルモニター受付中 !!"
                />
              </h3>
              <p className="md:text-[20px] text-[16px] font-black md:pt-5 pt-4 font-zen max-md:ml-[-75px]">
                今ならモニターとしての参加で、先行利用特典や初期費用・
                年会費の割引クーポンをご提供！供養の新たな選択肢に魅力を感じるあなたを全面的にバックアップいたします。
              </p>
            </div>
          </div>
          <div className="flex justify-center md:gap-8 gap-5 md:mt-7 mt-5 max-md:flex-col items-center px-4">
            <Button
              onclick={openModal}
              rect="flex md:w-[328px] w-[280px] md:h-[98px] h-20 bg-[#0176FF] items-center justify-center rounded-[60px] border-2 border-white"
            >
              <span>
                <img
                  className="max-md:w-14"
                  src="/assets/images/ic-btn-01.png"
                  alt=""
                />
              </span>
              <span className="md:text-[19px] text-[16px] font-extrabold ">
                メモリアルモニター <br />
                として参加する
              </span>
            </Button>
            <Button
              href="/price"
              rect="flex md:w-[328px] w-[280px] md:h-[98px] h-20 bg-[#BB66FF] items-center justify-center rounded-[60px] border-2 border-white"
            >
              <span>
                <img
                  className="max-md:w-14"
                  src="/assets/images/ic-btn-02.png"
                  alt=""
                />
              </span>
              <span className="md:text-[19px] text-[16px] font-extrabold ">
                メモリアルモニター <br />
                の詳細が知りたい
              </span>
            </Button>
          </div>
        </div>
        <div className="w-full max-w-[920px] mx-auto mt-10 md:mt-14">
          <div className="fade-up flex items-center justify-center md:gap-8 gap-4">
            <figure>
              <img
                className="max-md:w-[27vw]"
                src="/assets/images/img-main.png"
                alt=""
              />
            </figure>
            <p className="md:text-[22px] text-[clamp(12px,3vw,18px)] font-bold u-text-gradient leading-[2.2] font-zen animate-[hue_10s_infinite_linear]">
              まぶたを閉じれば <br />
              浮かんでくる愛らしい姿を、
              <br />『 メタでペット供養 』が永遠に。
            </p>
          </div>
          <div className="fade-up md:mt-16 mt-10 md:mb-[62px] mb-10">
            <span className="block w-full h-1 bg-[linear-gradient(0deg,_#B69318_-21.4%,_#B69419_-19.25%,_#CEB342_2.33%,_#E0CB62_23.91%,_#EDDC79_43.33%,_#F5E787_62.74%,_#F8EB8C_80.01%,_#F2E483_97.27%,_#E5D16A_125.32%,_#CEB343_157.68%,_#B69318_190.05%)]"></span>
            <div className="md:px-5 px-3 md:py-6 py-5 md:space-y-[30px] space-y-4">
              <div className="flex md:gap-[30px] gap-5">
                <figure>
                  <img
                    className="w-8 md:w-[45px]"
                    src="/assets/images/ic-check.png"
                    alt=""
                  />
                </figure>
                <p className="flex-1 md:text-[26px] text-[18px]  font-extrabold">
                  愛するペットとの別れを経験された方
                </p>
              </div>
              <div className="flex md:gap-[30px] gap-5">
                <figure>
                  <img
                    className="w-8 md:w-[45px]"
                    src="/assets/images/ic-check.png"
                    alt=""
                  />
                </figure>
                <p className="flex-1 md:text-[26px] text-[18px]  font-extrabold">
                  ペットの供養方法を調べている方
                </p>
              </div>
              <div className="flex md:gap-[30px] gap-5">
                <figure>
                  <img
                    className="w-8 md:w-[45px]"
                    src="/assets/images/ic-check.png"
                    alt=""
                  />
                </figure>
                <p className="flex-1 md:text-[26px] text-[18px]  font-extrabold tracking-tighter">
                  心をこめた供養をしてあげたいけど、どうしたらいいかわからない方
                </p>
              </div>
            </div>
            <span className="block w-full h-1 bg-[linear-gradient(0deg,_#B69318_-21.4%,_#B69419_-19.25%,_#CEB342_2.33%,_#E0CB62_23.91%,_#EDDC79_43.33%,_#F5E787_62.74%,_#F8EB8C_80.01%,_#F2E483_97.27%,_#E5D16A_125.32%,_#CEB343_157.68%,_#B69318_190.05%)]"></span>
          </div>
          <div className="bg-[linear-gradient(122deg,_#2C87E3_10.27%,_#7E22D7_100.14%)] bg-cover animate-[hue_10s_infinite_linear] p-0.5 max-w-[420px] mx-auto rounded-[22px] overflow-hidden">
          <div className="bg-white w-full md:min-h-[110px] min-h-[100px] rounded-[22px]">
              <div className="fade-up w-full text-center mx-auto px-2 md:px-8 pt-4 pb-2 md:text-[18px] text-[14px] u-text-gradient animate-[hue_10s_infinite_linear]">
                  あなた様がいずれかにあてはまるなら、
                  <br />
                  ペット供養の新たな選択肢として <br />『メタでペット供養』をご検討ください。
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FV;
