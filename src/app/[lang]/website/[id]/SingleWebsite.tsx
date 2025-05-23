"use client";

import BarCode from "@/app/components/barcode";
import LogoDots from "@/app/components/logo-dots";
import TitleWebSite from "@/app/components/titles/title-web-site";
import { ArticleContent } from "@/app/data/data";

export default function SingleWebsite({ article }: {article: ArticleContent}) {
  return (
    <main>
      <div className="relative">
        <div className="flex">
          <div className="fade-up flex-1 pb-[324px] pt-6 px-4">
            <div className="px-3 pb-2 border-b border-black/30 dark:border-white/30">
              <h3 className="md:text-[21px] text-[19px] font-semibold leading-snug dark:text-white">
                {article.title}
              </h3>
            </div>

            <div className="px-3">
              <div className="flex py-2.5">
                <div className="h-6 flex items-center bg-[#F97373] px-2.5 text-white text-[13px]">
                  {article.category}
                </div>
              </div>
              <div className="flex justify-end py-4">
              <TitleWebSite rect="md:h-[15px] h-[12px]" />
              </div>
              <div className="px-3 dark:text-white font-light">
                <div 
                  className="md:text-[19px] text-[15px] md:pt-10 pt-7 leading-[1.9]"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
                
                <div className="flex justify-start mt-12">
                  <a href="/contact" target="_blank" rel="noopener noreferrer" className="text-[24px] font-bold text-[black] bg-[#F8D0B2] px-12 py-2 rounded-full duration-150 hover:opacity-75 border border-[#C6C6C6] uppercase">
                  contact
                  </a>
                </div>
              </div>
            </div>
          </div>
          {article.annotations && article.annotations.length > 0 && (
            <div className="max-xl:hidden w-[295px] bg-[#E4E7F3] dark:bg-[#9C89D2]/[0.68] border-l border-[#A06778] dark:border-white flex flex-col justify-between">
              <div className="fade-up px-3 pt-6 sticky top-0">
                <figure className="pb-7">
                  <img
                    className="dark:hidden"
                    src="/assets/images/annotation.png"
                    alt=""
                  />
                  <img
                    className="dark:block hidden"
                    src="/assets/images/annotation-dark.png"
                    alt=""
                  />
                </figure>
                {article.annotations.map((annotation, index) => (
                  <div key={index} className="w-[272px] mx-auto dark:text-white bg-white/70 dark:bg-white/30 border border-[#A06778]/[0.7] dark:border-[#996894]/[0.7] p-2.5 mb-4">
                    <p className="md:text-[13px] text-[15px] border-b border-[#E01652] dark:border-white pb-1 font-semibold">
                      {annotation.term}
                    </p>
                    <p className="md:text-[12px] text-[14px] py-2.5">
                      {annotation.definition}
                    </p>
                  </div>
                ))}
                <div className="flex justify-end mt-[680px]">
                <LogoDots color="fill-[#A59CDF]" darkColor="dark:fill-[#D19FE3]" />
                </div>
              </div>
            </div>
          )}

          <div className="h-[324px] flex justify-end items-end p-3 absolute bottom-0 right-0">
          <BarCode color="fill-[#8F85CE]" darkColor="dark:fill-[#BEB2D9]" />
          </div>
          
        </div>
      </div>
    </main>
  );
}