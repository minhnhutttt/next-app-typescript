"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import { useState } from "react";
export default function Sticker() {
  const animateRefs = useScrollAnimation("zoom");
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <section className="px-5 bg-[url('/images/bg-sticker.png')] bg-[#18539E] bg-cover py-8 md:py-[60px]">
      <div
        ref={animateRefs}
        className="opacity-0 w-full max-w-[567px] mx-auto flex items-center max-md:flex-col gap-6 md:gap-8"
      >
        <div className="text-white font-bold font-roboto text-center md:text-[32px] text-[26px] whitespace-nowrap">
          RWA Tagシール <br />
          購入サイト
        </div>
        <div className="flex flex-col items-center justify-center">
          <figure>
            <img
              className="max-md:w-[240px]"
              src="/images/logo-ddd.png"
              alt=""
            />
          </figure>
          <div className="w-full flex justify-center h-[80px] md:h-[75px] mt-5 md:mt-7">
            <button
              type="button"
              onClick={openModal}
              className="w-[280px] md:w-[311px] h-[60px] md:h-[70px] gap-2 relative rounded-[35px] md:text-[18px] text-[16px] text-[#0055A3] font-black font-noto bg-white flex items-center justify-center hover:border-b border-[#002451] hover:mt-[6px] hover:shadow-none duration-200 [box-shadow:0px_5px_0px_0px_#002451]"
            >
              <figure>
                <img
                  className="max-md:w-[36px]"
                  src="/images/ic-card.png"
                  alt=""
                />
              </figure>
              <span>RWA Tagシールを購入</span>
            </button>
          </div>
        </div>
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
          <div className="w-full pt-[50px] flex flex-col items-center justify-center px-6 pb-9">
            <figure>
              <img className="max-md:w-[120px]" src="/images/d.png" alt="" />
            </figure>
            <div className="w-full max-w-[350px] mx-auto md:mt-[30px] mt-5">
              <a
                href="https://www.web3-zexagift.com/"
                target="_blank"
                className="h-[60px] flex justify-center items-center bg-[#18539E] rounded-[5px] text-white text-[14px] md:text-[18px] font-bold gap-3"
              >
                <figure>
                  <img src="/images/ic-d.png" alt="" />
                </figure>
                <span>DIVERコインで購入</span>
              </a>
              <div className="flex items-center justify-center gap-2 md:py-5 py-4">
                <span className="h-px bg-[#E4E7EC] flex-1"></span>
                <span className="md:text-[14px] text-[12px]">OR</span>
                <span className="h-px bg-[#E4E7EC] flex-1"></span>
              </div>
              <a
                href="https://zexagift.com/"
                target="_blank"
                className="h-[60px] flex justify-center items-center border-black border-2 rounded-[8px] text-[14px] md:text-[18px] font-bold gap-2"
              >
                <figure>
                  <img src="/images/ic-wallet.png" alt="" />
                </figure>
                <span>クレジットカードで購入</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
