import { ReactNode } from "react";

export const NewItem = ({ link, date, title }: { link: string, date: string, title: string, }) => {
  
  return (
    <a href={link} className="fade-up flex max-md:flex-col md:text-[24px] text-[18px] leading-snug md:gap-[50px] gap-5 py-5 md:py-10 md:px-[50px] px-5  hover:opacity-70 duration-300">
        <span className="font-bold">{date}</span>
        <span className="">{title}</span>
        </a>
  )
};