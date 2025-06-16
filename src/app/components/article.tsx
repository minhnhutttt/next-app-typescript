"use client"

import { getLocalizedPath } from '../lib/routes';
import { ReactNode, useState } from "react";
import { useParams } from 'next/navigation';
import { Locale } from '../dictionaries';
import Link from 'next/link';
import { ArticleType, getAllArticlesByLang2 } from '../data/data';


interface ArticleProps {
    type: string;
    data: ArticleType[];
    children: ReactNode;
    disable?: boolean;
}
export async function generateStaticParams() {
    return [
      { lang: 'ja' },
      { lang: 'en' },
      { lang: 'zh' }
    ];
  }
const Article = ({ children, data, disable, type }: ArticleProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const params = useParams();
    const lang = params.lang as Locale;
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    const articles = getAllArticlesByLang2(data, lang);

    return (
        <div className={`${disable && '!border-b !border-black dark:!border-white'} ${isVisible ? "border-b border-black dark:border-white" : ""}`}>
            <span className="max-md:hidden block h-[5px] bg-[#464646] dark:bg-white/60"></span>
            <button 
                className="relative justify-between w-full md:h-[60px] h-[84px] flex items-center px-1.5 max-md:px-5 border-b border-black dark:border-white"
                onClick={toggleVisibility}
            >
                {children}
                {!disable &&
                <svg className={`duration-150 md:hidden ${isVisible ? "rotate-180" : ""}`} xmlns="http://www.w3.org/2000/svg" width="16" height="8" viewBox="0 0 16 8" fill="none">
                <path d="M8 8L0.205772 0.5L15.7942 0.5L8 8Z" fill="#727272"/>
                </svg>
                }
            </button>
            <div className={`max-md:pl-8 max-md:divide-y divide-black/60 dark:divide-white/60 ${disable && '!block'} ${isVisible ? "block" : "hidden md:block"}`}>
                {articles.map((item, index) => (
                    <Link href={getLocalizedPath(`${item.link}`, lang)} className="block w-full md:border-b border-black/60 dark:border-white/60 py-2 pr-4" key={index}>
                        <p className="text-[16px] md:text-[15px] font-hiragino dark:text-white leading-snug py-1">{item.title}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Article;
