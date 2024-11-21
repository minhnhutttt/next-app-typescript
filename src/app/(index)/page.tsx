import type { Metadata } from 'next'

import { SITE_URL, OG } from '@/config/constants'
import FV from './components/fv'
import Overview from './components/overview'
import Analysis from './components/analysis'
import Diver from './components/diver'
import Cases from './components/cases'
import System from './components/system'
import Future from './components/future'

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
      <Overview />
      <Analysis />
      <Diver />
      <Cases />
      <System />
      <Future />
    </main>
  )
}

export default IndexPage
