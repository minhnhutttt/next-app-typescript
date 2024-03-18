import type { Metadata } from 'next'

import { SITE_URL, OG, TWITTER } from '@/config/constants'
import AboutHead from './components/aboutHead'
import AboutContent from './components/aboutContent'
import CTA from '@/components/cta'

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
    <>
      <div className="overflow-hidden bg-[url('/assets/images/bg-about.png')] bg-cover bg-top bg-no-repeat pb-20 pt-[120px] md:pt-[12vw] min-[1440px]:pt-[170px]">
        <AboutHead />
        <AboutContent />
        <CTA />
      </div>
    </>
  )
}

export default AboutPage
