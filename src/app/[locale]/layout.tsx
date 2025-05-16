import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import type { Metadata } from 'next'
import { Inter, Inspiration } from 'next/font/google'

import ScrollContainer from '@/app/[locale]/components/scrollContainer'
import Footer from '@/app/[locale]/components/footer'
import Header from '@/app/[locale]/components/header'

import {
  SITE_URL,
  SITE_NAME,
  DEFAULT_DESCRIPTION,
  OG,
  TWITTER,
} from '@/config/constants'

import '../globals.scss'
import { setRequestLocale } from 'next-intl/server'

const inter = Inter({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
})

const inspiration = Inspiration({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-inspiration',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL ?? 'http://localhost:3000'),
  icons: [
    { rel: 'icon', url: '/assets/images/favicon.png' },
    { rel: 'apple-touch-icon', url: '/assets/images/apple-touch-icon.png' },
  ],
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  openGraph: {
    ...OG,
  },
  twitter: {
    ...TWITTER,
  },
}
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }
  setRequestLocale(locale)
  return (
    <html lang={locale}>
      <body className={`${inter.className} ${inspiration.variable}`}>
        <NextIntlClientProvider>
          <ScrollContainer>
            <Header />
            {children}
            <Footer />
          </ScrollContainer>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
