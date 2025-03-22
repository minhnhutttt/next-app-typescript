// dictionaries/index.ts
import { Dictionary } from './types';

// Định nghĩa các locale được hỗ trợ dưới dạng union type
export type Locale = 'en' | 'ja' | 'zh';

// Định nghĩa object dictionaries với kiểu dữ liệu rõ ràng
const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import('./en.json').then(module => module.default),
  ja: () => import('./ja.json').then(module => module.default),
  zh: () => import('./zh.json').then(module => module.default),
};

// getDictionary nhận vào locale và trả về Promise của Dictionary
export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
  return dictionaries[locale]();
};