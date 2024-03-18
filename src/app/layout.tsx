import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Aldrich } from 'next/font/google'
import localFont from 'next/font/local'

import Footer from '@/components/footer'
import Header from '@/components/header'
import Cursor from '@/components/cursor'
import SmoothScroll from './smoothSCroll'

import {
  SITE_URL,
  SITE_NAME,
  DEFAULT_DESCRIPTION,
  OG,
  TWITTER,
} from '@/config/constants'

import './globals.scss'

const aldrich = Aldrich({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-aldrich',
  display: 'swap',
})

const solaris = localFont({
  src: './fonts/Solaris.woff',
  variable: '--font-solaris',
  display: 'swap',
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
      <body className={`${aldrich.className} ${solaris.variable}`}>
        <SmoothScroll>
          <Cursor />
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  )
}

export default RootLayout
