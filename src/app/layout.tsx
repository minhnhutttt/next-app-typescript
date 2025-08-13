import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Noto_Sans, Poppins, Inter } from 'next/font/google'

import Footer from '@/components/footer'
import ScrollContainer from '@/components/scrollContainer'

import {
  SITE_URL,
  SITE_NAME,
  DEFAULT_DESCRIPTION,
  OG,
  TWITTER,
} from '@/config/constants'

import './globals.scss'

const noto = Noto_Sans({
  weight: ['400', '500', '700', '800', '900'],
  subsets: ['latin'],
})

const poppins = Poppins({
  weight: ['400', '500', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

const inter = Inter({
  weight: ['400', '500', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-inter',
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
        className={`${noto.className} ${poppins.variable} ${inter.variable}  text-black/80`}
      >
        <ScrollContainer>
          {children}
          <Footer />
        </ScrollContainer>
      </body>
    </html>
  )
}

export default RootLayout
