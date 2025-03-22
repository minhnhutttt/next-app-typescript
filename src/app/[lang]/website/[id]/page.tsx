import {  dataWebSite, getAllArticleIds, getArticleByIdAndLang } from '@/app/data/data';
import { notFound } from 'next/navigation';
import SingleWebsite from './SingleWebsite';

export async function generateStaticParams() {
  const langs = ['ja', 'en', 'zh'];
  const ids = getAllArticleIds(dataWebSite);
  
  const params = [];
  
  for (const lang of langs) {
    for (const id of ids) {
      params.push({
        lang,
        id
      });
    }
  }
  
  return params;
}

export default function BlockchainArticlePage({ params }: { params: { lang: string, id: string } }) {
  const { lang, id } = params;
  
  const article = getArticleByIdAndLang(dataWebSite,id, lang);
  
  if (!article) {
    return notFound();
  }

  return <SingleWebsite article={article} />;
}