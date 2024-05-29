"use client";

import { useCallback, useEffect, useState } from "react";

const FV = () => {
  const [NavOpen, setNavOpen] = useState(false)

  const close = useCallback(() => {
    setNavOpen(false)
  }, [])
  return (
    <section className="flex max-md:flex-col">
      <div className="md:w-1/2 bg-[#F77F7F]/[0.6] md:pt-[120px] pt-[80px] pb-4 bg-[url('/assets/images/fv-deco.png')] max-xl:bg-[length:100%_auto] bg-[center_bottom_30px] bg-no-repeat px-5">
        <div className="md:w-full md:max-w-[546px] w-[80vw] mx-auto">
          <div className="flex">
            <div className="relative flex justify-center">
              <span className="absolute top-0 left-0"><img className="max-md:w-4 max-lg:w-[1.875vw]" src="/assets/images/fv-txt-deco-01.svg" alt="" /></span>
              <p className="xl:text-[22px] md:text-[1.719vw] text-[3.4vw] xl:pr-5 pr-5 md:pr-[1.5vw] py-2 tracking-widest">　採用前後のバックグラウンド調査に特化 </p>
              <span className="absolute bottom-0 right-0"><img className="max-md:w-4 max-lg:w-[1.875vw]" src="/assets/images/fv-txt-deco-02.svg" alt="" /></span>
            </div>
          </div>
          <div className="xl:text-[64px] md:text-[5vw] text-[6.4vw] font-bold leading-[1.3] md:mt-3 tracking-wider">
            外国人材の採用 <br />
            活用にともなう<br />
            リスクを徹底排除
          </div>
          <p className="xl:text-[24px] md:text-[1.875vw] text-[4.267vw] md:mt-7 mt-4">外国人材バックグラウンド調査サービス</p>
          <h4 className="xl:-mt-4"><img src="/assets/images/fv-logo.png" alt="" /></h4>
          <figure className="xl:-mt-[40px]">
          <img src="/assets/images/fv-img.png" alt="" />
          </figure>
        </div>
      </div>
      <div className="md:w-1/2 bg-white md:pt-[100px] pt-14 px-5 pb-10">
        <div className="w-full max-w-[534px] mx-auto xl:pt-[66px] md:pt-[5.156vw]">
          <div className="flex justify-center">
            <h4 className="xl:text-[26px] md:text-[2.031vw] text-[16px] font-medium border-b-[7px] border-[#F77F7F] px-2.5 tracking-widest">まずは資料請求 (無料)</h4>
          </div>
          <div className="xl:mt-14 mt-10 md:mt-[4.375vw] xl:space-y-10 md:space-y-[3.125vw] space-y-7 w-full max-w-[510px] mx-auto">
            <div>
              <label htmlFor="company" className="block md:text-[16px] text-[13px] mb-1.5">会社名/団体名 <span className="text-[#EB001C]">(必須)</span></label>
              <input type="text" id="company" className="w-full md:h-[56px] h-12 border border-[#949494] bg-white p-3 rounded" placeholder="株式会社ABCD" />
            </div>
            <div>
              <label htmlFor="name" className="block md:text-[16px] text-[13px] mb-1.5">お名前 <span className="text-[#EB001C]">(必須)</span></label>
              <input type="text" id="name" className="w-full md:h-[56px] h-12 border border-[#949494] bg-white p-3 rounded" placeholder="利幸 太郎" />
            </div>
            <div>
              <label htmlFor="mail" className="block md:text-[16px] text-[13px] mb-1.5">メールアドレス <span className="text-[#EB001C]">(必須)</span></label>
              <input type="email" id="mail" className="w-full md:h-[56px] h-12 border border-[#949494] bg-white p-3 rounded" placeholder="research＠research-shield.com" />
            </div>
            <div>
              <label htmlFor="name" className="block md:text-[16px] text-[13px] mb-1.5">現在のご状況 <span className="text-[#EB001C]">(必須)</span></label>
              <div className="relative w-full flex items-center">
                <span className="absolute right-3">
                  <svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.36603 7C4.98113 7.66667 4.01887 7.66667 3.63397 7L0.602887 1.75C0.217987 1.08333 0.699112 0.249999 1.46891 0.249999L7.53109 0.25C8.30089 0.25 8.78202 1.08333 8.39711 1.75L5.36603 7Z" fill="#F25B54"/>
                  </svg>
                </span>
                <select  className="w-full md:h-[56px] h-12 border border-[#949494] bg-white p-3 rounded appearance-none">
                  <option value="外国人材の採用を検討中" defaultChecked>外国人材の採用を検討中</option>
                  <option value="外国人材の採用を予定">外国人材の採用を予定</option>
                  <option value="外国人材を採用済み">外国人材を採用済み</option>
                  <option value="外国人材の採用で課題あり">外国人材の採用で課題あり</option>
                  <option value="その他">その他</option>
                </select>
              </div>
            </div>
            <div className="flex justify-center">
              <button type="button" className="flex justify-center items-center w-[284px] md:h-[70px] h-[60px] bg-[#F25B54] gap-2 border border-white rounded-[5px] md:text-[16px] text-[14px] font-bold text-white duration-200 hover:opacity-75">
                <img src="/assets/images/ic-document.svg" alt="" />
                <span>資料をダウンロード</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FV;
