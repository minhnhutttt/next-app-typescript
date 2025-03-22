"use client";

import useScrollAnimations from "../../hooks/useScrollAnimations";
import TitleBlockChain from "../../components/titles/title-block-chain";
import { ArticleData } from "@/app/data/data";
import Article from "@/app/components/article";

interface BlockchainListClientProps {
  articles: ArticleData[];
  lang: string;
}

export default function BlockchainListClient({ articles, lang }: BlockchainListClientProps) {
  const ref = useScrollAnimations();

  return (
    <main>
      <div ref={ref} className="relative">
      <Article data={articles} disable>
            <TitleBlockChain rect="md:h-[12.5px] h-[14px]" />
        </Article>
        </div>
    </main>
  );
}