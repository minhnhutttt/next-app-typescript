"use client";
import { ReactNode, useEffect, useRef, useState } from "react";
import gsap from "gsap";

type ModalProps = {
    children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      gsap.to(
        modalRef.current,
        { scale: 1, opacity: 1, duration: 0.4, ease: "power3.out", pointerEvents: 'auto' }
      );
    } else {
      if (modalRef.current) {
        gsap.to(modalRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "power3.in",
          pointerEvents: 'none'
        });
      }
    }
  }, [isOpen]);


  return (
    <div ref={modalRef} className="fixed inset-0 w-screen h-screen z-[99] flex items-center justify-center p-5 opacity-0">
        <div onClick={onClose} className="bg-black/50 absolute inset-0"></div>
      <div
        className="bg-white md:rounded-[60px] rounded-[30px] w-full max-w-[1000px] max-h-[90%] h-[688px] p-8 text-center relative shadow-[0_8px_0_0_#666]"
      >
        <div className="w-full h-full flex items-center justify-center flex-col">
            {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
