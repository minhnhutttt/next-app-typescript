"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import PageTitle from "../components/common/pageTitle";

export default function Company() {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <>
      <PageTitle>運営会社情報</PageTitle>
      <div className="my-[70px] px-5 md:my-10">
        <div
          ref={animateRefs}
          className="mx-auto w-full max-w-[1350px] bg-black bg-[url('/images/company-bg.jpg')] max-md:bg-[length:140%_auto] bg-no-repeat bg-right bg-cover px-5 py-12 opacity-0 md:py-16"
        >
          <div className="flex justify-center">
            <img
              className="max-md:w-[130px]"
              src="/images/logo-zexaverse.png"
              alt="ZEXAVERSE    "
            />
          </div>
          <div className="font-zenkaku mx-auto mb-2 mt-8 w-full max-w-[506px] space-y-7 text-[14px] text-white md:mt-12 md:text-[16px]">
            <div className="flex gap-3 py-2 border-b border-white md:gap-8">
              <p className="w-[60px] px-2 md:w-[70px]">会社名</p>
              <p className="flex-1">株式会社ワールドスキャンプロジェクト</p>
            </div>
            <div className="flex gap-3 py-2 border-b border-white md:gap-8">
              <p className="w-[60px] px-2 md:w-[70px]">住所</p>
              <p className="flex-1">
              東京都新宿区西早稲田2-18-23 スカイエスタ西早稲田 2F
              </p>
            </div>
            <div className="flex gap-3 py-2 border-b border-white md:gap-8">
              <p className="w-[60px] px-2 md:w-[70px]">代表者</p>
              <p className="flex-1">上瀧 良平</p>
            </div>
            <div className="flex gap-3 py-2 border-b border-white md:gap-8">
              <p className="w-[60px] px-2 md:w-[70px]">設立</p>
              <p className="flex-1">2020年1月22日</p>
            </div>
            <div className="flex gap-3 py-2 border-b border-white md:gap-8">
              <p className="w-[60px] px-2 md:w-[70px]">サイト</p>
              <p className="flex-1"><a href="https://world-scan-project.com/" target="_blank" rel="noopener noreferrer">https://world-scan-project.com/</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
