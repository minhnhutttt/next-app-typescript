import type { Metadata } from 'next'

import { SITE_URL, OG, TWITTER } from '@/config/constants'
import Header from '@/components/header'
import PageTitle from '@/components/pageTitle'

export const metadata: Metadata = {
  title: '特定商取引法に基づく表記',
  openGraph: {
    ...OG,
    title: '特定商取引法に基づく表記',
    url: SITE_URL + '/tokutei/',
  },
  twitter: {
    ...TWITTER,
    title: '特定商取引法に基づく表記',
  },
  alternates: {
    canonical: SITE_URL + '/tokutei/',
  },
}

export default function SpecifiedCommercialTransactionsAct() {
  return (
    <main>
      <Header />
      <PageTitle>特定商取引法に基づく表記</PageTitle>
      <div className="my-14 px-5 md:my-20">
        <div className="mx-auto w-full max-w-[800px] space-y-14 md:space-y-20">
          <figure>
            <img src="/assets/images/law-01.png" alt="" />
          </figure>
          <figure>
            <img src="/assets/images/law-02.png" alt="" />
          </figure>
        </div>
      </div>
    </main>
  )
}
