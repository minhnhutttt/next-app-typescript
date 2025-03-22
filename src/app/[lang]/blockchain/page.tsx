import { dataBlockChain, getAllArticlesByLang } from "@/app/data/data";
import BlockchainListClient from "./BlockchainListClient";
import PageContainer from "@/app/components/pageContainer";
import Article from "@/app/components/article";
import TitleBlockChain from "@/app/components/titles/title-block-chain";

export async function generateStaticParams() {
  return [
    { lang: 'ja' },
    { lang: 'en' },
    { lang: 'zh' }
  ];
}

export default function BlockchainListPage({ params }: { params: { lang: string } }) {
  const { lang } = params;
  
  const articles = getAllArticlesByLang(dataBlockChain ,lang);

  return <PageContainer>
    <Article data={articles} disable>
            <TitleBlockChain rect="md:h-[12.5px] h-[14px]" />
        </Article>
  </PageContainer>;
}