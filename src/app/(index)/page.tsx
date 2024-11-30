import type { Metadata } from 'next'

import { SITE_URL, OG } from '@/config/constants'
import Use from './components/use'
import User from './components/user'
import Waku from './components/waku'
import Howto from './components/howto'
import FAQ from './components/faq/faq'
import FV from './components/fv'
import About from './components/about'
import Merit from './components/merit'

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
      <FV />
      <About />
      <Merit />
      <Use />
      <User />
      <Waku />
      <Howto />
      <FAQ />
    </main>
  )
}

export default IndexPage
