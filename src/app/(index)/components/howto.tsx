"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";
import { useState } from "react";

const Howto = () => {
  const ref = useScrollAnimations();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section ref={ref} className="relative md:mt-[140px] mt-24 px-5">
      <div className="w-full">
        <h4 className="fade-up flex justify-center">
          <img
            className="animate-[anim-bounce_2s_infinite_ease-in-out]"
            src="/assets/images/box-title.png"
            alt=""
          />
        </h4>
        <div className="bg-white [box-shadow:0px_4px_100px_0px_rgba(0,_0,_0,_0.10)] w-full max-w-[1140px] mx-auto mt-10 md:mt-[64px] p-5 pt-10 md:pt-[55px] md:pb-10">
          <h5 className="fade-up text-center md:text-[64px] text-[32px] font-black leading-[1.1]">
            使い方 <br />
            <span className="md:text-[50px] text-[24px]">-簡単4ステップ-</span>
          </h5>
          <div className="fade-up grid md:grid-cols-2 md:gap-y-20 gap-y-10 md:mt-11 mt-7">
            <div className="lg:px-[55px] px-5 flex flex-col items-center ">
              <div className="w-full max-w-[350px] bg-[#FFE746] rounded-[70px] flex items-center">
                <img
                  className="max-md:w-12 my-[-4px]"
                  src="/assets/images/ic-01.svg"
                  alt=""
                />
                <span className="md:text-[24px] text-[18px] font-black leading-none flex-1 pl-2 md:pl-4">
                  アプリをダウンロード
                </span>
              </div>
              <div className="flex justify-center md:mt-10 mt-6">
                <img src="/assets/images/howto-01.png" alt="" />
              </div>
              <div className="flex md:gap-10 gap-5 md:mt-6 mt-4">
                <a
                  href="https://play.google.com/store/apps/details?id=io.metamask&hl=ja"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/assets/images/btn-google.png" alt="" />
                </a>
                <a
                  href="https://apps.apple.com/jp/app/metamask-blockchain-wallet/id1438144202"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/assets/images/btn-apple.png" alt="" />
                </a>
              </div>
            </div>
            <div className="lg:px-[55px] px-5 flex flex-col items-center md:border-l border-black">
              <div className="w-full max-w-[350px] bg-[#FFE746] rounded-[70px] flex items-center">
                <img
                  className="max-md:w-12 my-[-4px]"
                  src="/assets/images/ic-02.svg"
                  alt=""
                />
                <span className="md:text-[24px] text-[18px] font-black leading-none flex-1 pl-2 md:pl-4">
                  ウォレット新規作成
                </span>
              </div>
              <div className="flex justify-center md:mt-10 mt-6">
                <img src="/assets/images/howto-02.png" alt="" />
              </div>
              <div className="flex md:gap-10 gap-5 md:mt-6 mt-4 md:text-[16px] text-[13px] w-full max-w-[322px] mx-auto">
                METAMASKの「新規ウォレットを作成」から、ウォレットを作成してください
              </div>
            </div>
            <div className="lg:px-[55px] px-5 flex flex-col items-center ">
              <div className="w-full max-w-[350px] bg-[#FFE746] rounded-[70px] flex items-center">
                <img
                  className="max-md:w-12 my-[-4px]"
                  src="/assets/images/ic-03.svg"
                  alt=""
                />
                <span className="md:text-[24px] text-[17px] font-black leading-none flex-1 pl-2 md:pl-2">
                アカウント登録
                </span>
              </div>
              <div className="flex justify-center md:mt-10 mt-6">
                <img src="/assets/images/howto-03.png" alt="" />
              </div>
              <div className=" md:gap-10 gap-5 md:mt-6 mt-4 md:text-[16px] text-[13px] w-full max-w-[322px] mx-auto">
                登録フォームから以下の項目をご入力ください。
                <br />
                <ul className="list-disc pl-6">
                  <li>名前</li>
                  <li>メールアドレス</li>
                  <li>ウォレットアドレス</li>
                </ul>
                <div className="flex justify-center mt-4 md:mt-5">
                  <button
                    onClick={() => setIsOpen(true)}
                    type="button"
                    className="flex w-[260px] h-[63px]"
                  >
                    <span className="w-full h-[58px] flex items-center justify-center md:text-[20px] text-[17px] text-white bg-[#673AB7] hover:mt-[5px] group rounded-[10px] duration-150 hover:[box-shadow:0_0_0_#330F74] [box-shadow:0_5px_0_#330F74] gap-1.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="25"
                        viewBox="0 0 26 25"
                        fill="none"
                      >
                        <path
                          d="M14.7031 0.984257C14.6816 0.988163 14.6602 0.994022 14.6406 0.999882H6C5.04297 0.999882 4.25 1.77918 4.25 2.73426V21.953C4.25 23.08 5.18359 23.9999 6.3125 23.9999H19.1875C20.3164 23.9999 21.25 23.08 21.25 21.953V7.59363C21.2637 7.52723 21.2637 7.45691 21.25 7.39051V7.24988C21.2539 7.11707 21.2031 6.98621 21.1094 6.89051L15.3594 1.14051C15.2637 1.04676 15.1328 0.995976 15 0.999882H14.8438C14.7988 0.988163 14.75 0.982304 14.7031 0.984257ZM6 1.99988H14.25V6.17176C14.25 7.17762 15.0723 7.99988 16.0781 7.99988H20.25V21.953C20.25 22.537 19.7773 22.9999 19.1875 22.9999H6.3125C5.72266 22.9999 5.25 22.537 5.25 21.953V2.73426C5.25 2.32215 5.58008 1.99988 6 1.99988ZM15.25 2.46863L19.7812 6.99988H16.0781C15.6113 6.99988 15.25 6.63855 15.25 6.17176V2.46863ZM8.75 12.4999C8.47461 12.4999 8.25 12.7245 8.25 12.9999C8.25 13.2753 8.47461 13.4999 8.75 13.4999C9.02539 13.4999 9.25 13.2753 9.25 12.9999C9.25 12.7245 9.02539 12.4999 8.75 12.4999ZM10.75 12.4999V13.4999H16.75V12.4999H10.75ZM8.75 14.9999C8.47461 14.9999 8.25 15.2245 8.25 15.4999C8.25 15.7753 8.47461 15.9999 8.75 15.9999C9.02539 15.9999 9.25 15.7753 9.25 15.4999C9.25 15.2245 9.02539 14.9999 8.75 14.9999ZM10.75 14.9999V15.9999H16.75V14.9999H10.75ZM8.75 17.4999C8.47461 17.4999 8.25 17.7245 8.25 17.9999C8.25 18.2753 8.47461 18.4999 8.75 18.4999C9.02539 18.4999 9.25 18.2753 9.25 17.9999C9.25 17.7245 9.02539 17.4999 8.75 17.4999ZM10.75 17.4999V18.4999H16.75V17.4999H10.75Z"
                          fill="white"
                          stroke="white"
                          strokeWidth="0.5"
                        />
                      </svg>
                      <span>登録フォーム</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:px-[55px] px-5 flex flex-col items-center md:border-l border-black">
              <div className="w-full max-w-[350px] bg-[#FFE746] rounded-[70px] flex items-center">
                <img
                  className="max-md:w-12 my-[-4px]"
                  src="/assets/images/ic-04.svg"
                  alt=""
                />
                <span className="md:text-[24px] text-[18px] font-black leading-none flex-1 pl-2 md:pl-4">
                  デジタル資産の受取り
                </span>
              </div>
              <div className="md:mt-10 mt-7 flex justify-center">
                <div className="relative">
                  <img src="/assets/images/qr-img.png" alt="" />
                  <img
                    className="w-[56.15%] absolute top-0 right-0 animate-[anim-bounce_1.6s_infinite_ease-in-out]"
                    src="/assets/images/qr-bubble.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-black/90 flex items-center justify-center w-full h-full z-50 p-5 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0"
          onClick={() => setIsOpen(false)}
        ></div>
        <div className="w-full max-w-[840px] h-[90%] relative">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute max-md:right-0 md:left-[calc(100%+30px)] -top-10 md:top-0 md:text-[48px] text-[32px] text-[#FFB601] leading-none"
          >
            ×
          </button>
          <div
            data-lenis-prevent
            className=" bg-white/[0.96] mx-auto rounded-[30px] relative flex items-center justify-center overflow-auto h-full w-full"
          >
            <div className="w-full max-w-[790px] h-full py-10">
            <iframe className="w-full h-full" width="100%" src="https://docs.google.com/forms/d/e/1FAIpQLSf9WNUhuZ8aPcPTZpnJifjCZfghwJZH0GXTRXT58VlJoR38VQ/viewform?embedded=true"  frameBorder="0" marginHeight={0} marginWidth={0}>Loading…</iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Howto;
