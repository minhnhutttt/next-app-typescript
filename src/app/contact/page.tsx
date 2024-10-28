"use client"

import { ReactNode } from "react";

const ContactLabel = ({required = false, children}: {required?: boolean, children: ReactNode}) => (
  <div className="flex items-center gap-3">
      {required &&
        <p className="bg-[#FF517F] rounded-[5px] px-1.5 text-white font-semibold text-[13px] h-[25px] flex items-center justify-center leading-none">必須</p>
      }
      <p className="text-[18px] font-semibold text-black">{children}</p>
    </div>
)

const ContactIcon = ({error = false}: {error?: boolean}) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`${error ? 'fill-[#E63404]' : 'fill-[#999]'}`} width="18" height="19" viewBox="0 0 18 19" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M1.63672 9.49999C1.63672 5.43316 4.93353 2.13635 9.00035 2.13635C13.0672 2.13635 16.364 5.43316 16.364 9.49999C16.364 13.5668 13.0672 16.8636 9.00035 16.8636C4.93353 16.8636 1.63672 13.5668 1.63672 9.49999ZM8.21206 8.41126C9.07775 7.97842 10.0525 8.76032 9.81774 9.69929L9.28226 11.8412L9.31359 11.8255C9.5934 11.6856 9.93364 11.799 10.0735 12.0788C10.2134 12.3587 10.1 12.6989 9.82023 12.8388L9.7889 12.8545C8.92321 13.2873 7.94848 12.5054 8.18322 11.5664L8.7187 9.42453L8.68736 9.4402C8.40756 9.5801 8.06731 9.46669 7.92741 9.18688C7.78751 8.90708 7.90092 8.56683 8.18073 8.42693L8.21206 8.41126ZM9.00035 7.23425C9.31319 7.23425 9.56679 6.98065 9.56679 6.66782C9.56679 6.35499 9.31319 6.10139 9.00035 6.10139C8.68752 6.10139 8.43392 6.35499 8.43392 6.66782C8.43392 6.98065 8.68752 7.23425 9.00035 7.23425Z"/>
  </svg>
)

export default function Contact() {
  return (
    <main>
      <div className="h-[240px] bg-[linear-gradient(90deg,_rgba(255,125,211,1)_0%,_rgba(60,232,255,1)_100%)] flex justify-center pt-[124px] md:w-[550px] -mt-[100vh]">
        <p className="md:text-[36px] text-[24px] text-white font-semibold">法人様はこちら</p>
      </div>
      <div className="pt-12 px-5 pb-7 md:pb-[46px]">
            <p className=" text-[14px] w-full max-w-[436px] mx-auto">
            タレント・モデルのキャスティング、その他のお問い合わせがございましたら、以下のフォームよりお願いします。
            </p>
      </div>
      <div className="w-full max-w-[500px] mx-auto md:space-y-[60px] space-y-8 md:pb-[277px] pb-[160px] px-5">
        <div className="space-y-2">
          <ContactLabel required>企業名・店舗名</ContactLabel>
          <p><input type="text" placeholder="株式会社ABC" className="w-full bg-[#F4F1F3] md:h-[62px] h-12 md:text-[20px] text-[16px] rounded-lg px-6 font-black italic placeholder-[#A9A9A9]" /></p>
          <p className="md:text-[16px] text-[14px] font-black italic flex items-center text-[#999]"><ContactIcon />個人事業主様の場合「なし」でも可</p>
        </div>
        <div className="space-y-2">
          <ContactLabel required>ご担当者名</ContactLabel>
          <p><input type="text" placeholder="山田　太郎" className="w-full bg-[#F4F1F3] md:h-[62px] h-12 md:text-[20px] text-[16px] rounded-lg px-6 font-black italic placeholder-[#A9A9A9]" /></p>
        </div>
        <div className="space-y-2">
          <ContactLabel required>ご担当者名 (カナ)</ContactLabel>
          <p><input type="text" placeholder="ヤマダ　タロウ" className="w-full bg-[#F4F1F3] md:h-[62px] h-12 md:text-[20px] text-[16px] rounded-lg px-6 font-black italic placeholder-[#A9A9A9]" /></p>
        </div>
        <div className="space-y-2">
          <ContactLabel required>メールアドレス</ContactLabel>
          <p><input type="text" placeholder="yamada@goodfellows17.info" className="w-full bg-[#F4F1F3] md:h-[62px] h-12 md:text-[20px] text-[16px] rounded-lg px-6 font-black italic placeholder-[#A9A9A9]" /></p>
        </div>
        <div className="space-y-2">
          <ContactLabel required>電話番号</ContactLabel>
          <p><input type="text" placeholder="03-1234-5678" className="w-full bg-[#F4F1F3] md:h-[62px] h-12 md:text-[20px] text-[16px] rounded-lg px-6 font-black italic placeholder-[#A9A9A9]" /></p>
        </div>
        <div className="space-y-2">
          <ContactLabel>貴社ホームページURL</ContactLabel>
          <p><input type="text" placeholder="goodfellows17.info" className="w-full bg-[#F4F1F3] md:h-[62px] h-12 md:text-[20px] text-[16px] rounded-lg px-6 font-black italic placeholder-[#A9A9A9]" /></p>
        </div>
        <div className="space-y-2">
          <ContactLabel>件名</ContactLabel>
          <p><input type="text" placeholder="ライバーについて" className="w-full bg-[#F4F1F3] md:h-[62px] h-12 md:text-[20px] text-[16px] rounded-lg px-6 font-black italic placeholder-[#A9A9A9]" /></p>
        </div>
        <div className="space-y-2">
          <ContactLabel required>お問い合わせ内容</ContactLabel>
          <p><textarea placeholder="200文字以内でご入力ください。" className="w-full bg-[#F4F1F3] md:h-[338px] h-[240px] md:text-[20px] text-[16px] rounded-lg p-6 font-black italic placeholder-[#A9A9A9]"></textarea></p>
        </div>
        <p className="text-center">ご送信前に弊社<a href="https://goodfellows17.info/privacy-policy/" className="underline font-bold" target="_blank" rel="noopener noreferrer">個人情報保護方針</a>をご確認ください。</p>
        <div className="flex justify-center">
          <button type="submit" className="flex items-center justify-center md:text-[22px] text-[18px] font-bold bg-[linear-gradient(90deg,_rgba(255,125,211,1)_0%,_rgba(60,232,255,1)_100%)] rounded-lg md:h-[70px] h-[60px] w-full gap-2 text-white">
          <span>送　信</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="21" viewBox="0 0 25 21" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M13.9819 0.508069L14.0838 0.384422C14.5254 -0.0887128 15.2202 -0.125108 15.7008 0.275237L15.8162 0.384422L24.3912 9.57192L24.4419 9.62962L24.5095 9.71866L24.5973 9.86467L24.6627 10.0126L24.7061 10.1509L24.7415 10.345L24.75 10.5L24.7466 10.5988L24.7252 10.7635L24.6891 10.9097L24.6353 11.0555L24.5712 11.1834L24.4809 11.3209L24.3912 11.4281L15.8162 20.6156C15.3378 21.1281 14.5622 21.1281 14.0838 20.6156C13.6422 20.1424 13.6082 19.398 13.9819 18.8831L14.0838 18.7594L20.5654 11.8125H1.475C0.798451 11.8125 0.25 11.2249 0.25 10.5C0.25 9.77513 0.798451 9.1875 1.475 9.1875H20.5679L14.0838 2.24058C13.6422 1.76744 13.6082 1.02295 13.9819 0.508069Z" fill="white"/>
          </svg>
          </button>
        </div>
      </div>
    </main>
  );
}
