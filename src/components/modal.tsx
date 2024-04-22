"use client"
import React, { ReactNode, useEffect, useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}
export default function Modal({ isOpen, onClose, children }: ModalProps) {
    const [isBodyOverflowHidden, setIsBodyOverflowHidden] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
      setIsBodyOverflowHidden(true);
    } else {
      document.body.classList.remove('overflow-hidden');
      setIsBodyOverflowHidden(false);
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);
  const handleClose = () => {
    setTimeout(() => {
      onClose();
    }, 300);
  };
    return (
        <div className={`duration-500 fixed inset-0 overflow-auto  ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}>
            <div className="fixed inset-0" onClick={handleClose}></div>
        <div className="w-full max-w-[1440px] mx-auto pt-[100px] relative z-0 px-5">
          <div className="bg-black/40 rounded-t-[60px] w-full  h-[300vh]">
          <button onClick={handleClose} className='block sticky top-10 pt-5 ml-auto mr-10'>
          <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24.5" cy="24" r="23" stroke="white" strokeWidth="2"/>
            <path d="M16 33L34 15M34 33L16 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
          </button>
          <div className="w-full max-w-[1240px] mx-auto">
            {children}
            </div>
          </div>
        </div>
      </div>
    );
  }
  