import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { EB_Garamond } from 'next/font/google'

import Header from '@/components/header'
import Footer from '@/components/footer'
import ScrollContainer from '@/components/scrollContainer'
import SmoothScroll from '@/components/smoothSCroll'

import {
  SITE_URL,
  SITE_NAME,
  DEFAULT_DESCRIPTION,
  OG,
  TWITTER,
} from '@/config/constants'

import './globals.scss'

const EBGaramond = EB_Garamond({
  weight: ['400', '500', '700', '800'],
  subsets: ['latin'],
  variable: '--EBGaramond',
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
      <body
        className={`${EBGaramond.className} bg-[#FFFAFA] [transition:background-color_200ms_linear] [&.dark]:bg-black`}
      >
        <ScrollContainer>
          <SmoothScroll>
            <Header />
            {children}
            <Footer />
          </SmoothScroll>
        </ScrollContainer>
      </body>
    </html>
  )
}

export default RootLayout
