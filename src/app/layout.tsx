import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Kaisei_Opti, Noto_Sans_JP } from 'next/font/google'

import AdobeFont from '@/components/adobeFont'
import ScrollContainer from '@/components/scrollContainer'
import FrontChat from '@/components/frontChat'
import Footer from '@/components/footer'

import {
  SITE_URL,
  SITE_NAME,
  DEFAULT_DESCRIPTION,
  OG,
  TWITTER,
} from '@/config/constants'

import './globals.scss'
import Header from '@/components/header'

const kaiseiOpti = Kaisei_Opti({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-kaisei',
})
const sans = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-noto-san',
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
        className={`${sans.variable} ${kaiseiOpti.variable} bg-[#FFFFF4] text-black`}
      >
        <ScrollContainer>
          <Header />
          {children}
          <Footer />
        </ScrollContainer>
        <FrontChat />
        <AdobeFont />
      </body>
    </html>
  )
}

export default RootLayout
