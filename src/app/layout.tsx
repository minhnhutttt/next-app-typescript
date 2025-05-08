import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'

import Header from '@/components/header'
import Footer from '@/components/footer'
import Mainvisual from '@/components/mainvisual'
import Menu from '@/components/menu'

import {
  SITE_URL,
  SITE_NAME,
  DEFAULT_DESCRIPTION,
  OG,
  TWITTER,
} from '@/config/constants'

import './globals.scss'

const noto = Noto_Sans_JP({
  weight: ['400', '500', '700', '800', '900'],
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
    <html lang="ja">
      <body
        className={`${noto.className} bg-[url('/assets/images/bg.png')] bg-[length:100%_auto] bg-fixed text-black`}
      >
        <div className="flex justify-center bg-[url('/assets/images/bg-fv.png')] bg-[length:100%_auto] bg-fixed bg-no-repeat">
          <div className="mx-auto flex w-full max-w-[1320px] max-md:flex-col">
            <Mainvisual />
            <div className="relative flex justify-center md:flex-1">
              <div className="relative w-full max-w-[550px] bg-white">
                <Header />
                <Menu />
                {children}
                <Footer />
              </div>
            </div>
            <div className="overflow-hidden max-[1400px]:flex-1 max-xl:hidden">
              <div className="relative">
                <a
                  href="https://line.me/R/ti/p/%40300kbcvu"
                  target="_blank"
                  className="fixed right-0 top-0 z-10 block duration-150 hover:opacity-75 max-xl:w-14"
                >
                  <img src="/assets/images/contact.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}

export default RootLayout
