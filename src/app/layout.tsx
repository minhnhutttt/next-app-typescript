import { ReactNode } from 'react'
import {
  Noto_Sans_JP,
  Noto_Sans,
  Inter,
  Noto_Serif_JP
} from 'next/font/google'

import Footer from '@/components/footer'


import './globals.css'
import Header from '@/components/header'

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
