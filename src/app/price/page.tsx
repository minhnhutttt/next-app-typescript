import type { Metadata } from 'next'

import { SITE_URL, OG, TWITTER } from '@/config/constants'
import Benefits from './components/benefits'
import FV from './components/fv'
import Metaverse from './components/metaverse'
import Pack from './components/pack'
import Plan from './components/plan'

export const metadata: Metadata = {
  title: '料金',
  openGraph: {
    ...OG,
    title: '料金',
    url: SITE_URL + '/price/',
  },
  twitter: {
    ...TWITTER,
    title: '料金',
  },
  alternates: {
    canonical: SITE_URL + '/price/',
  },
}

const PricePage = () => {
  return (
    <main>
      <FV />
      <Pack />
      <Benefits />
      <Plan />
      <Metaverse />
    </main>
  )
}

export default PricePage
