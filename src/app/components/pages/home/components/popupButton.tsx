"use client";
import { ReactNode, useState } from "react";
export type PopupButtonPropsType = {
    title: string;
    popupLogo: string;
    popupContent: string;
};
export default function PopupButton({ title, popupLogo, popupContent }: PopupButtonPropsType) {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };
  return (
    <>    
    <button type="button" onClick={openModal} className="aspect-square w-[30%] max-md:max-w-[100px] md:w-[110px] lg:w-[140px] rounded-full border-2 border-[#0055A3] flex flex-col justify-end items-center pb-6 md:pb-6 lg:pb-8 duration-150 hover:opacity-65">
        <div className="text-[14px] md:text-[18px] text-center font-bold pb-1 md:pb-[0.833vw] min-[1440px]:pb-3">
            <span className="text-[20px] md:text-[24px]">{title}</span>とは
        </div>
        <figure>
            <img
            className="max-md:w-[44px]"
            src="/images/arrow.svg"
            alt={title}
            />
        </figure>
    </button>
    
    {isModalOpen && (
        <div
          className="absolute inset-0 z-40 absolute-0 bg-[#344054]/[0.7] backdrop-filter backdrop-blur"
          onClick={() => closeModal()}
        ></div>
      )}
      <div
        className={`z-50 inset-0 fixed pointer-events-none flex justify-center items-center opacity-0 px-5 ${isModalOpen ? "pointer-events-auto opacity-100" : ""}`}
      >
        <div
          className="absolute inset-0 blur-[8px] bg-[#344054]/[0.7]"
          onClick={() => closeModal()}
        ></div>
        <div className="w-full md:max-w-[690px] max-w-[440px] mx-auto relative bg-white  duration-300 rounded-[32px] flex items-center justify-center flex-col [box-shadow:0px_8px_8px_-4px_rgba(16,_24,_40,_0.04),_0px_20px_24px_-4px_rgba(16,_24,_40,_0.10)]">
          <button
            className="absolute top-6 md:top-10 right-6 md:right-10"
            onClick={() => closeModal()}
          >
            <svg className="max-md:w-5 max-md:h-5" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 27L27 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M27 27L1 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="w-full pt-[50px] md:pt-[100px] flex flex-col items-center justify-center px-6 pb-[60px] md:pb-[110px] max-w-[493px]">
            <figure>
                <img className="max-md:w-[120px]" src={popupLogo} alt="" />
            </figure>
            <h5 className="text-center text-[24px] md:text-[32px] font-bold py-4 md:py-7">{title}とは</h5>
            <p className="md:text-[18px] text-[15px] font-medium">{popupContent}</p>
          </div>
        </div>
      </div>
    </>
  );
}
