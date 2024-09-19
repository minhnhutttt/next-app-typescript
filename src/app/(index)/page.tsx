import type { Metadata } from 'next'

import { SITE_URL, OG } from '@/config/constants'
import FV from './components/fv'
import Service from './components/service'
import Digital from './components/digital'
import Partnership from './components/partnership'

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
      <Service />
      <Digital />
      <Partnership />
    </>
  )
}

export default IndexPage
