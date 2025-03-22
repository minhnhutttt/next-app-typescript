// File: app/[lang]/blockchain/[id]/page.tsx
import { getAllArticleIds, getArticleByIdAndLang } from '@/app/data/data';
import { notFound } from 'next/navigation';
import BlockchainArticleClient from '../BlockchainArticleClient';

// Hàm tạo các đường dẫn tĩnh - PHẢI ở Server Component
export async function generateStaticParams() {
  const langs = ['ja', 'en', 'zh']; // Các ngôn ngữ hỗ trợ
  const ids = getAllArticleIds();
  
  const params = [];
  
  // Tạo tất cả các tổ hợp lang/id
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
  
  // Lấy dữ liệu bài viết từ data
  const article = getArticleByIdAndLang(id, lang);
  
  // Nếu không tìm thấy bài viết
  if (!article) {
    return notFound();
  }

  // Render Client Component và truyền dữ liệu qua props
  return <BlockchainArticleClient article={article} />;
}