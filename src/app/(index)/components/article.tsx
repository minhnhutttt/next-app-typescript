"use client"

import { ReactNode, useState } from "react";

export interface dataArticle {
    date: string;
    title: string;
}

interface ArticleProps {
    data: dataArticle[];
    children: ReactNode;
}

const Article = ({ children, data }: ArticleProps) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className={`${isVisible ? "border-b border-black dark:border-white" : ""}`}>
            <span className="max-md:hidden block h-[5px] bg-[#464646] dark:bg-white/60"></span>
            <button 
                className="relative justify-between w-full md:h-[60px] h-[84px] flex items-center px-1.5 max-md:px-5 border-b border-black dark:border-white"
                onClick={toggleVisibility}
            >
                {children}
                <svg className={`duration-150 md:hidden ${isVisible ? "rotate-180" : ""}`} xmlns="http://www.w3.org/2000/svg" width="16" height="8" viewBox="0 0 16 8" fill="none">
                <path d="M8 8L0.205772 0.5L15.7942 0.5L8 8Z" fill="#727272"/>
                </svg>
            </button>
            <div className={`max-md:pl-8 max-md:divide-y divide-black/60 dark:divide-white/60 ${isVisible ? "block" : "hidden md:block"}`}>
                {data.map((item, index) => (
                    <div className="md:border-b border-black/60 dark:border-white/60 py-2 pr-4" key={index}>
                        <p className="text-[16px] md:text-[15px] font-helvetica dark:text-white">{item.date}</p>
                        <p className="text-[16px] md:text-[15px] font-hiragino dark:text-white leading-snug">{item.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Article;
