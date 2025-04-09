import { ReactNode } from 'react'

import type { Metadata } from 'next'
import { Inter, Inspiration } from 'next/font/google'

import ScrollContainer from '@/components/scrollContainer'
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

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${inter.className} ${inspiration.variable}`}>
        <ScrollContainer>
          <Header />
          {children}
          <Footer />
        </ScrollContainer>
      </body>
    </html>
  )
}

export default RootLayout
