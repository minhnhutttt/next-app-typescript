import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Noto_Sans_JP, Noto_Sans, Inter, Noto_Serif_JP } from 'next/font/google'

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
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-noto',
})

const sans = Noto_Sans({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-sans',
})

const inter = Inter({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-inter',
})

const serif = Noto_Serif_JP({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-serif',
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
      <body
        className={`${noto.className} ${sans.variable} ${inter.variable} ${serif.variable}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
