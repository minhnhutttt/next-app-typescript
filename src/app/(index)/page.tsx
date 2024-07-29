import type { Metadata } from 'next'

import { SITE_URL, OG } from '@/config/constants'
import FV from './components/fv'
import Introduction from './components/introduction'
import Skill from './components/skill'
import Reskilling from './components/reskilling'
import Training from './components/training'
import Features from './components/features'
import Learning from './components/learning'
import Conventional from './components/conventional'
import Development from './components/development'

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
      <div className="overflow-hidden bg-[url('/assets/images/bg.png')] bg-no-repeat max-dt:bg-[length:47.083vw_auto] max-md:bg-[length:87.083vw_auto]">
        <FV />
        <Introduction />
      </div>
      <Skill />
      <Reskilling />
      <Conventional />
      <Training />
      <Features />
      <Learning />
      <Development />
    </main>
  )
}

export default IndexPage
