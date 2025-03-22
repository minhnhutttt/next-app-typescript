import { Dictionary } from './types';

export type Locale = 'en' | 'ja' | 'zh';

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import('./en.json').then(module => module.default),
  ja: () => import('./ja.json').then(module => module.default),
  zh: () => import('./zh.json').then(module => module.default),
};

export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
  return dictionaries[locale]();
};