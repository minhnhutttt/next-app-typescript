"use client";
import React, { ReactNode, useEffect, useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  rect?: string;
}
export default function Modal({ isOpen, onClose, children, rect }: ModalProps) {
  const [isBodyOverflowHidden, setIsBodyOverflowHidden] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
      setIsBodyOverflowHidden(true);
    } else {
      document.body.classList.remove("overflow-hidden");
      setIsBodyOverflowHidden(false);
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);
  const handleClose = () => {
    setTimeout(() => {
      onClose();
    }, 300);
  };
  return (
    <div
      className={`duration-500 fixed inset-0 md:overflow-auto z-50 ${isOpen ? "translate-y-0" : "translate-y-full"}`} style={{backgroundColor: rect}}
    >
      <div className="w-full mx-auto relative z-0">
      <div className="absolute top-[-50px] md:top-[-100px] inset-0" onClick={handleClose}></div>
        <div className="w-full max-w-[1440px] mx-auto mt-[40px] md:mt-[100px] relative">
        <div className="bg-black/40 md:rounded-t-[60px] rounded-t-[30px] w-full  max-md:overflow-auto max-md:h-[calc(100vh-40px)]">
        <button
              onClick={handleClose}
              className="z-50 block sticky top-0 md:top-5 md:pt-5 ml-auto mr-6"
            >
              <svg
                className="max-md:w-10"
                xmlns="http://www.w3.org/2000/svg"
                width="57"
                height="56"
                viewBox="0 0 57 56"
                fill="none"
              >
                <circle
                  cx="28.5"
                  cy="28"
                  r="27"
                  fill="white"
                  stroke="black"
                  strokeWidth="2"
                />
                <circle
                  cx="28.5"
                  cy="28"
                  r="23"
                  fill={rect}
                  stroke="black"
                  strokeWidth="2"
                />
                <path
                  d="M20 37L38 19M38 37L20 19"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          <div className="w-full max-w-[1240px] mx-auto">{children}</div>
        </div>
        </div>
      </div>
    </div>
  );
}
