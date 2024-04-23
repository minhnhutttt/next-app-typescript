import { ReactNode, useEffect } from "react";
import Present from "./present";
import useScrollAnimations from "@/hooks/useScrollAnimations";

interface ArticleWrap {
  number: string;
  title: string;
  content: ReactNode;
  children: ReactNode;
}

function ArticleWrap({ number, title, content, children }: ArticleWrap) {
  return (
    <div className="bg-white rounded-[20px] border border-[#DBF9FF] [box-shadow:0px_4px_34px_0px_rgba(0,_0,_0,_0.10)] pt-8 px-5 flex flex-col justify-between max-md:min-h-[450px]">
      <div className="">
        <div className="flex justify-center">
          <div className="md:w-20 w-16 md:h-20 h-16 bg-cover bg-[url('/images/no.png')] flex items-center justify-center md:text-[52px] text-[27px] font-black font-zen leading-none pb-1.5">
            {number}
          </div>
        </div>
        <div className="text-center md:text-[28px] text-[20px] font-bold mt-4 md:mt-8">
          {title}
        </div>
        <p className="md:text-[16px] text-[14px] leading-tight px-5 py-3 md:py-5">
          {content}
        </p>
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}

const GetNFT = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="bg-white  pt-[70px] md:pt-[130px] relative ">
      <div data-scroll="out" className="absolute top-0 left-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="634"
          height="681"
          viewBox="0 0 634 681"
          fill="none"
        >
          <path
            className="duration-700"
            d="M-152 674C403.2 36.4 597.667 -189 625.5 -222"
            stroke="#7FFF00"
            strokeWidth="20"
            strokeDasharray={1200}
            strokeDashoffset={1200}
          />
        </svg>
      </div>
      <div data-scroll="out" className="absolute top-0 left-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="693"
          height="768"
          viewBox="0 0 693 768"
          fill="none"
        >
          <path
            className="duration-700"
            d="M-104 751.501C451.2 113.901 645.666 -111.499 673.5 -144.499"
            stroke="#7FFF00"
            strokeWidth="50"
            strokeDasharray={1200}
            strokeDashoffset={1200}
          />
        </svg>
      </div>

      <div data-scroll="out" className="absolute bottom-[-36%] right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="434"
          height="875"
          viewBox="0 0 434 875"
          fill="none"
        >
          <path
            className="duration-700"
            d="M19 17L771 858"
            stroke="#7FFF00"
            strokeWidth="50"
            strokeDasharray={1200}
            strokeDashoffset={1200}
          />
        </svg>
      </div>
      <div data-scroll="out" className="absolute bottom-[-50%] right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="268"
          height="764"
          viewBox="0 0 268 764"
          fill="none"
        >
          <path
            className="duration-700"
            d="M8 7.5L678 756.5"
            stroke="#7FFF00"
            strokeWidth="20"
            strokeDasharray={1200}
            strokeDashoffset={1200}
          />
        </svg>
      </div>
      <div className="fade-up w-full max-w-[835px] mx-auto relative z-10 px-5">
        <div className="">
          <h3 className="md:text-[80px] text-[32px] font-bold text-center tracking-widest">
            GETまで一直線！
          </h3>
          <p className="font-bold md:text-[24px] text-[14px] text-center tracking-widest mt-2">
            NFT名刺の制作・受け取りの4STEPをチェック
          </p>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 mt-10 md:mt-[76px] gap-9 max-md:max-w-[360px] max-md:mx-auto">
          <ArticleWrap
            number="01"
            title="アプリをダウンロード"
            content="アプリ「DIVER Biz」のダウンロードおよび初期設定が完了後、受信用アドレスをご確認ください。NFT名刺申し込み時に入力する必要があります。"
          >
            <div className="flex flex-col items-center justify-center pb-8">
              <figure className="mt-5 max-md:w-[130px]">
                <img src="/images/logo-diver-biz.png" alt="" />
              </figure>
              <div className="md:space-y-7 space-y-5 mt-4">
                <a href="/" className="block max-md:w-[160px] duration-300 hover:opacity-75">
                  <img src="/images/btn-ios.png" alt="" />
                </a>
                <a href="/" className="block max-md:w-[160px] duration-300 hover:opacity-75">
                  <img src="/images/btn-android.png" alt="" />
                </a>
              </div>
            </div>
          </ArticleWrap>
          <ArticleWrap
            number="02"
            title="フォームを入力"
            content="以下の「NFT名刺を作る」ボタンを押すとNFT代名刺作成フォームが開きます。ボタンを押して作成に必要な項目をご確認ください。"
          >
            <div className="md:mt-4 mt-3">
              <a
                className="flex items-center justify-center mx-auto md:w-[300px] w-[200px] h-[44px] md:h-[70px] rounded-[50px] bg-[#101010] md:text-[20px] text-[15px] font-black text-[#7FFF00] outline-1 outline outline-[#7FFF00] md:outline-offset-[-5px] outline-offset-[-3px] [box-shadow:0px_0px_30px_0px_rgba(127,_255,_0,_0.30)] gap-2 duration-300 hover:opacity-75"
                href="/form"
              >
                <span>NFT名刺を作る</span>
                <svg
                  className="max-md:w-5"
                  width="38"
                  height="11"
                  viewBox="0 0 38 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.51044 9.31887H36.2358M28.5104 1.01018L36.4896 8.98977"
                    stroke="#7FFF00"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
            </div>
          </ArticleWrap>
          <ArticleWrap
            number="03"
            title="NFT名刺を確認"
            content={
              <>
                フォームに入力したアドレス宛にNFT名刺が発行されます。
                <br />
                アプリ「DIVER Biz」を開いてご確認ください。
              </>
            }
          >
            <div className="flex flex-col items-center justify-center pb-8">
              <figure className="mt-5 max-md:w-[130px]">
                <img src="/images/logo-diver-biz.png" alt="" />
              </figure>
              <div className="md:space-y-7 space-y-5 mt-4">
                <a href="/" className="block max-md:w-[160px] duration-300 hover:opacity-75">
                  <img src="/images/btn-ios.png" alt="" />
                </a>
                <a href="/" className="block max-md:w-[160px] duration-300 hover:opacity-75">
                  <img src="/images/btn-android.png" alt="" />
                </a>
              </div>
            </div>
          </ArticleWrap>
          <ArticleWrap
            number="04"
            title="NFT名刺をシェアする"
            content={
              <>アプリ「DIVER Biz」から、あなたのNFT名刺をシェアしましょう。</>
            }
          >
            <div className="flex flex-col items-center justify-end">
              <figure className="mt-5">
                <img src="/images/iphone.png" alt="" />
              </figure>
            </div>
          </ArticleWrap>
        </div>
      </div>
    </section>
  );
};

export default GetNFT;
