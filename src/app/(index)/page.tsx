import type { Metadata } from 'next'

import { SITE_URL, OG } from '@/config/constants'
import Aim from './components/aim'
import FAQ from './components/faq/faq'
import FV from './components/fv'
import Introduction from './components/introduction'
import Prices from './components/prices'
import Promises from './components/promises'
import Steps from './components/steps'
import Supports from './components/supports'

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
      <div className="relative bg-[url('/assets/images/bg-03.png')] bg-left-bottom bg-no-repeat">
        <FV />
        <Introduction />
        <Aim />
      </div>
      <Promises />
      <Steps />
      <Supports />
      <Prices />
      {/* <FAQ /> */}
    </main>
  )
}

export default IndexPage
