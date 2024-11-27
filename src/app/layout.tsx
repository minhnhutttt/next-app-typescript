import { ReactNode } from 'react'
import type { Metadata } from 'next'
import Script from 'next/script'
import {
  Noto_Sans_JP,
  Noto_Serif,
  Zen_Kaku_Gothic_Antique,
  Noto_Serif_HK,
} from 'next/font/google'

import Footer from '@/components/footer'

import {
  SITE_URL,
  SITE_NAME,
  DEFAULT_DESCRIPTION,
  OG,
  TWITTER,
} from '@/config/constants'
import { ModalProvider } from '@/context/ModalContext'
import ModalForm from '@/components/modalForm'

import './globals.scss'

const noto = Noto_Sans_JP({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-noto',
})

const notoSerif = Noto_Serif({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-serif',
})

const zen = Zen_Kaku_Gothic_Antique({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-zen',
})

const serifHK = Noto_Serif_HK({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-serif-hk',
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
    <ModalProvider>
      <html lang="ja">
        <body
          className={`${noto.className} ${notoSerif.variable} ${zen.variable} ${serifHK.variable}`}
        >
          <Script
            id="a8-script-1"
            src="https://statics.a8.net/a8sales/a8sales.js"
            strategy="beforeInteractive"
          />
          <Script
            id="a8-script-2"
            src="https://statics.a8.net/a8sales/a8crossDomain.js"
            strategy="beforeInteractive"
          />
          {children}
          <Footer />
          <ModalForm />
        </body>
      </html>
    </ModalProvider>
  )
}

export default RootLayout
