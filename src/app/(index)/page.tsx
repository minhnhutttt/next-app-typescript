import type { Metadata } from 'next'

import { SITE_URL, OG } from '@/config/constants'
import FAQ from './components/faq/faq'
import Hero from './components/hero'
import Introduction from './components/introduction'
import Liver from './components/liver'
import LiverIntroduction from './components/liverIntroduction'
import Merit from './components/merit'
import Process from './components/process'
import Slider from './components/slider'
import Treatment from './components/treatment'
import Voice from './components/voice'

export const metadata: Metadata = {
  openGraph: {
    ...OG,
    url: SITE_URL,
    type: 'website',
  },
  alternates: {
    canonical: SITE_URL,
  },
}

const IndexPage = () => {
  return (
    <main>
      <Hero />
      <Introduction />
      <Slider />
      <Liver />
      <LiverIntroduction />
      <Merit />
      <Voice />
      <Treatment />
      <Process />
      <FAQ />
    </main>
  )
}

export default IndexPage
