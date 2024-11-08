"use client";
import { frontOpen } from "@/lib/front";
const links = [
  {
   title:'よくある質問',
   url:'/#faq',
  },
  {
    title:'お問い合わせ',
    url:'#',
   },
];

const Footer = () => {
  return (
    <footer className="bg-[url(/assets/images/bg-ft.jpg);] pt-[50px] pb-[20px]">
      <div className="flex justify-center items-center">
        <a href="#">
          <img src="/assets/images/logo-ft.png" alt="" />
        </a>
      </div>
      <ul className="flex items-center max-md:justify-center max-md:mt-3 mt-[27px] mb-[30px] flex-wrap gap-8 max-w-[266px] mx-auto">
        <li>
          <a href="#faq" className="md:text-[18px] text-[16px] font-bold">よくある質問</a>
        </li>
        <li>
          <button onClick={()=> {frontOpen()}} className="md:text-[18px] text-[16px] font-bold">お問い合わせ</button>
        </li>
      </ul>
      <p className="md:text-[14px] text-[12px] text-[#0F0F0F] text-center font-light">
        Copyright © OPEN Map
      </p>
    </footer>
  );
};

export default Footer;
