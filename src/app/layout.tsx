import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Zen_Kurenaido } from 'next/font/google'

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

const zen = Zen_Kurenaido({
  weight: ['400'],
  subsets: ['latin'],
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
      <body className={`${zen.className}`}>
        <ScrollContainer>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </ScrollContainer>
      </body>
    </html>
  )
}

export default RootLayout
