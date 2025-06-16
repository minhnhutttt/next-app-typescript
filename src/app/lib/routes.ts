import { Locale } from '../dictionaries';

export function getLocalizedPath(path: string, locale: Locale): string {
  return `/${locale}${path}`;
}