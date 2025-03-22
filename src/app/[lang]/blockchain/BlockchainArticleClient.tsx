// File: components/blockchain/BlockchainArticleClient.tsx
"use client";

import { useState, useRef } from "react";
import useScrollAnimations from "../../hooks/useScrollAnimations";
import BarCode from "../../components/barcode";
import LogoDots from "../../components/logo-dots";
import Modal from "../../components/modal";
import TitleBlockChain from "../../components/titles/title-block-chain";
import Link from "next/link";
import { ArticleData } from "@/app/data/data";

interface BlockchainArticleClientProps {
  article: ArticleData;
}

export default function BlockchainArticleClient({ article }: BlockchainArticleClientProps) {
  const ref = useScrollAnimations();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeAnnotation, setActiveAnnotation] = useState<{ term: string, definition: string } | null>(null);

  const openModal = (term: string, definition: string) => {
    setActiveAnnotation({ term, definition });
    setIsModalOpen(true);
  };
  
  const closeModal = () => setIsModalOpen(false);

  // Mở modal từ nội dung HTML
  const handleContentClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'BUTTON' && target.classList.contains('annotation-term')) {
      const term = target.getAttribute('data-term');
      if (term && article.annotations) {
        const annotation = article.annotations.find(a => a.term === term);
        if (annotation) {
          openModal(annotation.term, annotation.definition);
        }
      }
    }
  };

  // Xử lý nội dung HTML để thêm button cho các từ cần chú thích
  const getProcessedContent = () => {
    if (!article.annotations || article.annotations.length === 0) return article.content;
    
    let processedContent = article.content;
    
    article.annotations.forEach(annotation => {
      const term = annotation.term;
      // Tìm term trong nội dung và thay thế bằng button
      const regex = new RegExp(`\\b${term}\\b`, 'g');
      processedContent = processedContent.replace(
        regex, 
        `<button class="annotation-term font-bold border-b-[2px] border-dashed border-[#F8D0B2] leading-none" data-term="${term}">${term}</button>`
      );
    });
    
    return processedContent;
  };

  // Translate function for UI elements
  const getTranslation = (key: string) => {
    const translations: Record<string, Record<string, string>> = {
      contact: {
        ja: "問い合わせ",
        en: "CONTACT",
        zh: "联系我们"
      },
      backToList: {
        ja: "記事一覧に戻る",
        en: "Back to Articles",
        zh: "返回文章列表"
      }
    };

    return translations[key]?.[article.lang] || translations[key]?.['en'] || "";
  };

  return (
    <main>
      <div ref={ref} className="relative">
        <div className="flex">
          <div className="fade-up flex-1 pb-[324px] pt-6 px-4">
            <div className="px-3 pb-2 border-b border-black/30 dark:border-white/30">
              <h3 className="md:text-[21px] text-[19px] font-semibold leading-snug dark:text-white">
                {article.title}
              </h3>
              <p className="font-helvetica md:text-[15px] text-[14px] md:mt-2.5 dark:text-white">
                {article.date}
              </p>
            </div>
            <div className="px-3">
              <div className="flex py-2.5">
                <div className="h-6 flex items-center bg-[#F97373] px-2.5 text-white text-[13px]">
                  {article.category}
                </div>
              </div>
              <div className="flex justify-between py-4">
                <Link href={`/${article.lang}/blockchain`} className="text-blue-500 hover:underline">
                  ← {getTranslation('backToList')}
                </Link>
                <TitleBlockChain rect="md:h-[15px] h-[12px]" />
              </div>
              <div className="px-3 dark:text-white font-light">
                <div 
                  className="md:text-[19px] text-[15px] md:pt-10 pt-7 leading-[1.9]"
                  dangerouslySetInnerHTML={{ __html: getProcessedContent() }}
                  onClick={handleContentClick}
                />
                
                <div className="flex justify-start mt-12">
                  <a href="/contact" target="_blank" rel="noopener noreferrer" className="text-[24px] font-bold text-[black] bg-[#F8D0B2] px-12 py-2 rounded-full duration-150 hover:opacity-75 border border-[#C6C6C6]">
                    {getTranslation('contact')}
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Phần chú thích bên phải */}
          {article.annotations && article.annotations.length > 0 && (
            <div className="max-xl:hidden w-[295px] bg-[#F1E4F6] dark:bg-[#996894]/[0.68] border-l border-[#A06778] dark:border-white flex flex-col justify-between">
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
                  <LogoDots
                    color="fill-[#D19FE3]"
                    darkColor="dark:fill-[#E39FCC]"
                  />
                </div>
              </div>
            </div>
          )}

          <div className="h-[324px] flex justify-end items-end p-3 absolute bottom-0 right-0">
            <BarCode color="fill-[#B27CC5]" darkColor="dark:fill-[#E39FCC]" />
          </div>
          
          {/* Modal cho chú thích trên mobile */}
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            {activeAnnotation && (
              <div className="w-[300px] md:w-[500px] mx-auto dark:text-white bg-white dark:bg-[#666666] border border-[#A06778]/[0.7] dark:border-[#996894]/[0.7] p-2.5">
                <p className="md:text-[17px] text-[15px] font-semibold border-b border-[#E01652] dark:border-white pb-1">
                  {activeAnnotation.term}
                </p>
                <p className="md:text-[16px] text-[14px] py-2.5">
                  {activeAnnotation.definition}
                </p>
              </div>
            )}
          </Modal>
        </div>
      </div>
    </main>
  );
}