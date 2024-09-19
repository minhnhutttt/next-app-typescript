import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Noto_Sans_JP, Anton } from 'next/font/google'

import Footer from '@/components/footer'
import Header from '@/components/header'

import {
  SITE_URL,
  SITE_NAME,
  DEFAULT_DESCRIPTION,
  OG,
  TWITTER,
} from '@/config/constants'

import './globals.scss'

const noto = Noto_Sans_JP({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-noto',
})

const anton = Anton({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-anton',
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

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ja">
      <body className={`${noto.className} ${anton.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
