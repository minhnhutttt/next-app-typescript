import type { Metadata } from 'next'

import { SITE_URL, OG, TWITTER } from '@/config/constants'

export const metadata: Metadata = {
  title: '送信完了',
  openGraph: {
    ...OG,
    title: '送信完了',
    url: SITE_URL + '/thx/',
  },
  twitter: {
    ...TWITTER,
    title: '送信完了',
  },
  alternates: {
    canonical: SITE_URL + '/thx/',
  },
}

export default function TermsOfService() {
  return (
    <main>
      <div className="h-svh flex justify-center items-center">サンクスページ</div>
    </main>
  )
}