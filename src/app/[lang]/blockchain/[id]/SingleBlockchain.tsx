"use client";

import AnnotationPopup from "@/app/components/AnnotationPopup";
import BarCode from "@/app/components/barcode";
import LogoDots from "@/app/components/logo-dots";
import TitleBlockChain from "@/app/components/titles/title-block-chain";
import { ArticleContent } from "@/app/data/data";
import { useAnnotations } from "@/app/hooks/useAnnotations";

export default function SingleBlockchain({ article }: {article: ArticleContent}) {
  const { selectedAnnotation, closeAnnotation } = useAnnotations(
    article.annotations
  );
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
              <div className="flex justify-end py-4">
                <TitleBlockChain rect="md:h-[15px] h-[12px]" />
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
            <div className="max-xl:hidden w-[325px] bg-[#F1E4F6] dark:bg-[#996894]/[0.68] border-l border-[#A06778] dark:border-white flex flex-col justify-between">
              <div className="fade-up px-3 pt-6 sticky top-0 bottom-0">
              <div className="overflow-auto h-[calc(100vh-100px)]">
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
                </div>
                <div className="flex justify-end">
                  <LogoDots
                    color="fill-[#D19FE3]"
                    darkColor="dark:fill-[#E39FCC]"
                  />
                </div>
              </div>
            </div>
          )}

          <div className="h-[324px] flex justify-start items-end p-3 absolute bottom-0 right-24">
            <BarCode color="fill-[#B27CC5]" darkColor="dark:fill-[#E39FCC]" />
          </div>
        </div>
      </div>
      <AnnotationPopup
        annotation={selectedAnnotation}
        onClose={closeAnnotation}
      />
    </main>
  );
}