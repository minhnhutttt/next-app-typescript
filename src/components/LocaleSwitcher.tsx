'use client';

import {useRouter, usePathname} from '@/i18n/navigation';
import {useLocale} from 'next-intl';
import {useTransition} from 'react';

const LOCALES = [
  {code: 'en', label: 'English'},
  {code: 'ja', label: '日本語'}
] as const;

type LocaleCode = typeof LOCALES[number]['code'];

export function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale() as LocaleCode;
  const [isPending, startTransition] = useTransition();

  const switchTo = (target: LocaleCode) => {
    if (target === locale) return;
    startTransition(() => {
      router.replace({pathname}, {locale: target});
    });
  };

  return (
    <div className="inline-flex rounded-lg border bg-white overflow-hidden">
      {LOCALES.map(({code, label}) => {
        const active = code === locale;
        return (
          <button
            key={code}
            type="button"
            onClick={() => switchTo(code)}
            disabled={active || isPending}
            aria-pressed={active}
            className={[
              'px-3 py-1.5 text-sm transition',
              active
                ? 'bg-black text-white cursor-default'
                : 'bg-white hover:bg-gray-100 text-gray-700',
              code === 'en' ? 'border-r' : ''
            ].join(' ')}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
