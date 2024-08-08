"use client"

import { ReactNode } from "react";

export interface dataArticle {
    date: string;
    title: string;
}

interface ArticleProps {
    data: dataArticle[];
    children: ReactNode;
}

const Article = ({ children, data }: ArticleProps) => {

  return (
    <div className="md:w-[calc(50%-16px)] lg:w-[250px]">
        <span className="block h-[5px] bg-[#464646] dark:bg-white/60"></span>
        <div className="h-[60px] flex items-center px-1.5 border-b border-black dark:border-white">
            {children}
        </div>
        <div className="">
            {data.map((item,index)=> (
                <div className="border-b border-black/60 dark:border-white/60 py-2" key={index}>
                    <p className="text-[16px] md:text-[15px] font-helvetica dark:text-white">{item.date}</p>
                    <p className="text-[16px] md:text-[15px] font-hiragino dark:text-white leading-snug">{item.title}</p>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Article;
