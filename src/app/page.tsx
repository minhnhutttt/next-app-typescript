import type { Metadata } from 'next'

import { SITE_URL, OG } from '@/config/constants'
import FV from './components/fv'
import Intro from './components/intro'
import Service from './components/service'
import WorkFlow from './components/workFlow'
import CTA from '@/components/cta'

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
    <>
      <FV />
      <Intro />
      <Service />
      <WorkFlow />
      <CTA />
    </>
  )
}

export default IndexPage
