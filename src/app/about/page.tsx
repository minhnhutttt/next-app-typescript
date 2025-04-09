import type { Metadata } from 'next'

import { SITE_URL, OG, TWITTER } from '@/config/constants'
import AboutContent from './components/aboutContent'

export const metadata: Metadata = {
  title: 'About',
  openGraph: {
    ...OG,
    title: 'About',
    url: SITE_URL + '/about',
  },
  twitter: {
    ...TWITTER,
    title: 'About',
  },
  alternates: {
    canonical: SITE_URL + '/about',
  },
}

const AboutPage = () => {
  return (
    <main className="mt-[150px] overflow-hidden">
      <section>
        <h1 className="py-8 text-center text-[32px] font-bold leading-[1.8] md:py-[60px] md:text-[64px]">
          ABOUT US
        </h1>
        <AboutContent />
      </section>
    </main>
  )
}

export default AboutPage
