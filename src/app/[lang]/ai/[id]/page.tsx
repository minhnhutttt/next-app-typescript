import { dataAI, getArticleByIdAndLang2 } from '@/app/data/data';
import { notFound } from 'next/navigation';
import SingleAi from './SingleAi';

export async function generateStaticParams() {
  const params = [];
  
  for (const article of dataAI) {
    const availableLanguages = Object.keys(article.translations);
    
    for (const lang of availableLanguages) {
      params.push({
        id: article.id,
        lang: lang
      });
    }
  }
  
  return params;
}

export default function BlockchainArticlePage({ params }: { params: { lang: string, id: string } }) {
  const { lang, id } = params;
  
  const article = getArticleByIdAndLang2(dataAI, id, lang);
  
  if (!article) {
    return notFound();
  }
  
  return <SingleAi article={article} />;
}