import { useLocale } from 'next-intl'
import { useParams } from 'next/navigation'
import { useTransition } from 'react'
import { usePathname, useRouter } from '@/i18n/navigation'
export default function LangSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const pathname = usePathname()
  const params = useParams()

  const switchLocale = (newLocale: string) => {
    if (newLocale === locale) return
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        { pathname, params },
        { locale: newLocale }
      )
    })
  }

  return (
    <div className="flex h-[50px] w-[100px] items-center justify-center rounded-[80px] border border-black bg-white md:w-[128px]">
      <p className="flex h-[25px] items-center justify-center text-[16px] text-[#111111]/[0.4] md:text-[21px]">
        <button
          onClick={() => switchLocale('en')}
          className={`${locale === 'en' ? 'text-[#F34927]' : ''}`}
          disabled={isPending}
        >
          EN
        </button>
        <span className="mx-2 h-[25px] w-px bg-[#111111]"></span>
        <button
          onClick={() => switchLocale('jp')}
          className={`${locale === 'jp' ? 'text-[#F34927]' : ''}`}
          disabled={isPending}
        >
          JP
        </button>
      </p>
    </div>
  )
}
