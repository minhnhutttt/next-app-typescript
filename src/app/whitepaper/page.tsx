import type { Metadata } from 'next'

import { SITE_URL, OG, TWITTER } from '@/config/constants'

export const metadata: Metadata = {
  title: 'White Paper',
  openGraph: {
    ...OG,
    title: 'White Paper',
    url: SITE_URL + '/whitepaper',
  },
  twitter: {
    ...TWITTER,
    title: 'White Paper',
  },
  alternates: {
    canonical: SITE_URL + '/whitepaper',
  },
}

const WhitePaperPage = () => {
  return (
    <main>
      <section className="h-svh bg-[url('/assets/images/bg-hand.png')] bg-[length:90%_auto] bg-center bg-no-repeat md:bg-[length:768px_auto]">
        <div className="flex h-full items-center justify-center px-4">
          <div className="max-w-[1440px] py-[60px] md:py-16">
            <div className="text-center text-[32px]">It&apos;s soon.</div>
            <div className="mx-auto mt-3 max-w-[600px]">
              We are preparing a whitepaper. Stay tuned!
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default WhitePaperPage
