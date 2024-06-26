"use client";

import { useModal } from "@/context/ModalContext";
import Button from "./button";

interface NavLink {
  link: string;
  text: string;
  target?: string;
}

const links: NavLink[] = [
  {
    link: "/#service",
    text: "メタでペット供養とは？",
  },
  {
    link: "/#trust",
    text: "産官学連携",
  },
  {
    link: "/price",
    text: "料金",
  },
  {
    link: "#faq",
    text: "FAQ",
  },
];
const Footer = () => {
    const { openModal } = useModal();
  return (
    <footer className="bg-[#4B4B4B] py-6 px-5">
        <div className="w-full max-w-[1440px] mx-auto px-5 border-b border-white pb-6">
            <div className="w-full max-w-[1324px] mx-auto flex max-md:px-5 max-md:flex-col max-md:justify-center max-md:items-center">
                <div className="md:pr-4 md:w-[236px] flex flex-col md:items-end pt-9 md:border-r border-white">
                    <a href="/" className="block max-md:w-[130px] mx-auto">
                        <img src="/assets/images/logo-footer.png" alt="" />
                    </a>
                    <div className="md:pt-9 pt-6 space-y-5">
                        <a href="/terms-of-service" className="text-[16px] text-white block text-center md:text-right">利用規約</a>
                        <a href="/specified-commercial-transactions-act" className="text-[16px] text-white block text-center md:text-right">特定商取引法に基づく表記</a>
                        <a href="/privacy-policy" className="text-[16px] text-white block text-center md:text-right">プライバシーポリシー</a>
                    </div>
                </div>
                <div className="md:flex-1 md:pl-6 flex flex-col justify-between max-md:mt-8">
                    <div className="flex md:justify-end items-center max-md:flex-col">
                        <ul className="flex items-center max-md:justify-center flex-wrap md:gap-x-[88px] gap-x-[40px] md:gap-y-5 gap-y-6 lg:mr-20 md:mr-5 mb-6 ">
                            {links.map(({ link, text }, index) => (
                                <li key={index}>
                                    <a
                                    href={link}
                                    className="inline-block text-[14px] md:text-[17px] text-white font-bold [text-shadow:1px_1px_0px_rgba(0,_0,_0,_0.50)] duration-150 hover:opacity-75"
                                    >
                                    {text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="md:flex-[0_0_230px]">
                            <Button onclick={openModal} rect="md:text-[18px] text-[16px] w-[230px] h-[66px] bg-[#EB6642] border border-white rounded-[60px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="17" viewBox="0 0 10 17" fill="none">
                                    <path d="M0 14.6665L6.18084 8.47217L0 2.27783L1.90283 0.375L10 8.47217L1.90283 16.5693L0 14.6665Z" fill="white"/>
                                </svg>
                                <span>お問い合わせ</span>
                            </Button>
                        </div>
                    </div>
                    <div className="max-md:mt-10">
                        <div className="flex justify-center items-center mx-auto max-w-[673px] w-full gap-5">
                            <span className="flex-1 h-px bg-[#FFF3F3]"></span>
                            <p className="md:text-[28px] text-[18px] text-white">PRODUCED by</p>
                            <span className="flex-1 h-px bg-[#FFF3F3]"></span>
                        </div>
                        <div className="flex gap-[30px] md:gap-[50px] max-md:flex-wrap justify-center items-center md:pt-9 pt-6">
                            <a href="/" className="max-md:w-[70px]"><img src="/assets/images/footer-banner-01.png" alt="" /></a>
                            <a href="/" className="max-md:w-[160px]"><img src="/assets/images/footer-banner-02.png" alt="" /></a>
                            <a href="/" className="max-md:w-[120px]"><img src="/assets/images/footer-banner-03.png" alt="" /></a>
                            <a href="/" className="max-md:w-[90px]"><img src="/assets/images/footer-banner-04.png" alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full max-w-[1324px] mx-auto pt-3">
            <p className="md:text-[18px] text-[12px] text-white text-center md:text-right">Copyright © 2024 Metaropolice.Inc All rights Reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;
