import type { Metadata } from 'next'

import { SITE_URL, OG } from '@/config/constants'
import Wrapper from './components/wrapper'
import Header from '@/components/header'
import FV from './components/fv'
import Introduction from './components/introduction'
import Memories from './components/memories'
import Recover from './components/recover'
import Story from './components/story'
import Trust from './components/trust'
import FAQ from './components/faq/faq'
import Fear from './components/fear'

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
    <Wrapper>
      <Header />
      <FV />
      <Fear />
      <Recover />
      <Introduction />
      <Story />
      <Trust />
      <Memories />
      <FAQ />
    </Wrapper>
  )
}

export default IndexPage
