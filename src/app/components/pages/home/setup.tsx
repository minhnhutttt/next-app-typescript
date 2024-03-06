"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import HeadTitle from "./components/headTitle";
import Step from "./components/step";
import { useState } from "react";
import PurchasePopup from "./purchasePopup";
export default function Setup() {
  const animateRefs = useScrollAnimation("zoom");
  const animateUpRefs = useScrollAnimation("fadeUp");

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <section className="px-5 pt-16 pb-10 md:pt-[115px] md:pb-[50px]">
      <div className="w-full md:max-w-[1320px] max-w-[540px] mx-auto">
        <HeadTitle>NFTをセットする方法</HeadTitle>
        <div
          ref={animateRefs}
          className="opacity-0 max-w-[546px] md:w-[546px] mx-auto mt-8"
        >
          <div className="flex justify-center items-center gap-3 md:gap-8 mb-[-15px] md:mb-[-20px]">
            <span className="flex-1 w-full h-[5px] md:h-[7px] bg-[#0055A3] md:rounded-3xl rounded-2xl"></span>
            <p className="text-center md:text-[24px] text-[17px] font-bold">
              NFTをセットするのに必要なもの
            </p>
            <span className="flex-1 w-full h-[5px] md:h-[7px] bg-[#0055A3] md:rounded-3xl rounded-2xl"></span>
          </div>
          <div className="border-[5px] md:border-[7px] border-[#0055A3] !border-t-0 md:rounded-[8px] rounded-[4px] px-5 pt-8 md:pt-11 pb-5">
            <div className="flex justify-center">
              <div className="space-y-1">
                <div className="flex items-center gap-2 md:text-[18px] text-[14px] font-medium">
                  <figure>
                    <img src="/images/ic-check.png" alt="" />
                  </figure>
                  <span>RWA Tagシール</span>
                </div>
                <div className="flex items-center gap-2 md:text-[18px] text-[14px] font-medium">
                  <figure>
                    <img src="/images/ic-check.png" alt="" />
                  </figure>
                  <span>DIVER Tag専用アプリ</span>
                </div>
                <div className="flex items-center gap-2 md:text-[18px] text-[14px] font-medium">
                  <figure>
                    <img src="/images/ic-check.png" alt="" />
                  </figure>
                  <span>NFTにしたい画像データ</span>
                </div>
                <div className="flex items-center gap-2 md:text-[18px] text-[14px] font-medium">
                  <figure>
                    <img src="/images/ic-check.png" alt="" />
                  </figure>
                  <span>NFTの情報、名称、詳細の説明など</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-5">
              <p className="w-full max-w-[413px] font-['Inter'] md:text-[15px] text-[12px]">
              ※RWAタグに格納可能なNFTは、DIVERというシステムを使用しています。これによりDIVER TagとRWA Tagは同じものです。
              </p>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-y-8 md:gap-y-[60px] gap-x-5 md:gap-x-[70px] w-full md:max-w-[690px] max-w-[310px] mx-auto my-8 md:my-14">
          <Step step="01">
            <div className="md:min-h-[470px] min-h-[400px] flex flex-col items-center justify-end">
              <button type="button" onClick={openModal} className="flex-1 flex flex-col items-center justify-center gap-4 duration-300 hover:opacity-75">
                <figure>
                  <img
                    className="max-md:max-w-[130px]"
                    src="/images/logo-d.png"
                    alt=""
                  />
                </figure>
                <p>
                  <img
                    className="max-md:max-w-[120px]"
                    src="/images/btn-cart.png"
                    alt="購入"
                  />
                </p>
              </button>
              <div className="h-[78px]">
                <p className="text-center text-[16px] font-medium">
                  RWA Tagシールを購入
                </p>
              </div>
            </div>
          </Step>
          <Step step="02">
            <div className="md:min-h-[470px] min-h-[400px] flex flex-col items-center justify-end">
              <div className="flex-1 flex flex-col items-center justify-center gap-4">
                <figure>
                  <img
                    className="max-md:max-w-[110px]"
                    src="/images/logo-t.png"
                    alt=""
                  />
                </figure>
                <figure>
                  <img
                    className="max-md:max-w-[140px]"
                    src="/images/diver-tag.png"
                    alt=""
                  />
                </figure>
                <div className="space-y-5">
                  <a
                    href="https://apps.apple.com/jp/app/diver-tag/id6449664504"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block duration-150 hover:opacity-75"
                  >
                    <img
                      className="w-[135px]"
                      src="/images/btn-appstore.png"
                      alt="App Store"
                    />
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.world.scan.project.tag&hl=ja&gl=US"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block duration-150 hover:opacity-75"
                  >
                    <img
                      className="w-[135px]"
                      src="/images/btn-google-play.png"
                      alt="Google Play"
                    />
                  </a>
                </div>
              </div>
              <div className="h-[78px]">
                <p className="text-center text-[16px] font-medium">
                  DIVER Tag専用アプリをダウンロード
                </p>
              </div>
            </div>
          </Step>
          <Step step="03">
            <div className="md:min-h-[470px] min-h-[400px] flex flex-col items-center justify-end">
              <div className="flex-1 flex flex-col items-center justify-center gap-4">
                <figure>
                  <img
                    className="max-md:max-w-[136px]"
                    src="/images/stepup-03.png"
                    alt=""
                  />
                </figure>
              </div>
              <div className="h-[78px]">
                <p className="text-center text-[16px] font-medium">
                  DIVER Tag専用アプリを起動し
                  <br />
                  NFCタグを読み取る
                </p>
              </div>
            </div>
          </Step>
          <Step step="04">
            <div className="md:min-h-[470px] min-h-[400px] flex flex-col items-center justify-end">
              <div className="flex-1 flex flex-col items-center justify-center gap-4">
                <figure>
                  <img
                    className="max-md:max-w-[136px]"
                    src="/images/stepup-04.png"
                    alt=""
                  />
                </figure>
              </div>
              <div className="h-[78px]">
                <p className="text-center text-[16px] font-medium">
                  アプリの指示に従い
                  <br />
                  設定するNFT情報を入力
                </p>
              </div>
            </div>
          </Step>
        </div>
        <div ref={animateUpRefs} className="opacity-0 flex justify-center">
          <a
            href="https://www.diver-help.space/tutorial/diver-tag-set-nft"
            target="_blank"
            className="w-full md:max-w-[440px] max-w-[340px] h-[64px] md:h-[85px] flex items-center justify-center bg-[#0055A3] rounded-[90px] text-white relative font-bold md:text-[22px] text-[17px] px-5"
          >
            <span>NFTをセットする方法の動画を見る</span>
            <figure className="absolute right-2">
              <svg
                className="max-md:w-3"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="18"
                viewBox="0 0 16 18"
                fill="none"
              >
                <path
                  d="M15 7.26795C16.3333 8.03775 16.3333 9.96225 15 10.7321L3 17.6603C1.66667 18.4301 -8.94676e-07 17.4678 -8.27378e-07 15.9282L-2.21695e-07 2.0718C-1.54397e-07 0.532196 1.66667 -0.430055 3 0.339746L15 7.26795Z"
                  fill="white"
                />
              </svg>
            </figure>
          </a>
        </div>
        <p className="text-center md:text-[18px] text-[15px] font-medium text-[#6F6E6E] mt-2.5 leading-relaxed">
          DIVER Help Centerへ移動します。<br />
          ※RWA TagとDIVER Tagは同じものです。
        </p>
      </div>
      {isModalOpen && (
        <div
          className="absolute inset-0 z-40 absolute-0 bg-[#344054]/[0.7] backdrop-filter backdrop-blur"
          onClick={() => closeModal()}
        ></div>
      )}
      <div
        className={`z-50 inset-0 fixed pointer-events-none flex justify-center items-center opacity-0 ${isModalOpen ? "pointer-events-auto opacity-100" : ""}`}
      >
        <div
          className="absolute inset-0 blur-[8px] bg-[#344054]/[0.7]"
          onClick={() => closeModal()}
        ></div>
        <div className="w-full lg:max-w-[400px] max-w-[320px] mx-auto inset-x-0 top-1/2 -translate-y-1/2 bg-white absolute  duration-300 rounded-[10px] flex items-center justify-center flex-col [box-shadow:0px_8px_8px_-4px_rgba(16,_24,_40,_0.04),_0px_20px_24px_-4px_rgba(16,_24,_40,_0.10)]">
          <button
            className="absolute w-11 h-11 top-4 right-4"
            onClick={() => closeModal()}
          >
            <svg
              width="44"
              height="45"
              viewBox="0 0 44 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28 16.3345L16 28.3345M16 16.3345L28 28.3345"
                stroke="#667085"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <PurchasePopup />
        </div>
      </div>
    </section>
  );
}
