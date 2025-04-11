import { useLocale } from 'next-intl'
import { usePathname } from '@/i18n/navigation'

export default function LangSwitcher() {
  const locale = useLocale()
  const pathname = usePathname()

  const createLanguageLink = (targetLocale: string) => {
    const pathWithoutLocale = pathname.replace(`/${locale}`, '')

    return `/${targetLocale}${pathWithoutLocale}`
  }

  const enLink = createLanguageLink('en')
  const jpLink = createLanguageLink('jp')

  return (
    <div className="flex h-[50px] w-[100px] items-center justify-center rounded-[80px] border border-black bg-white md:w-[128px]">
      <p className="flex h-[25px] items-center justify-center text-[16px] text-[#111111]/[0.4] md:text-[21px]">
        <a
          href={enLink}
          className={`${locale === 'en' ? 'text-[#F34927]' : ''}`}
        >
          EN
        </a>
        <span className="mx-2 h-[25px] w-px bg-[#111111]"></span>
        <a
          href={jpLink}
          className={`${locale === 'jp' ? 'text-[#F34927]' : ''}`}
        >
          JP
        </a>
      </p>
    </div>
  )
}
