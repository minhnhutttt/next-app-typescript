import type { Metadata } from 'next'

import { SITE_URL, OG, TWITTER } from '@/config/constants'
import List from './components/list'

export const metadata: Metadata = {
  title: 'ライバー',
  openGraph: {
    ...OG,
    title: 'ライバー',
    url: SITE_URL + '/liver',
  },
  twitter: {
    ...TWITTER,
    title: 'ライバー',
  },
  alternates: {
    canonical: SITE_URL + '/liver',
  },
}

const LiverPage = () => {
  return (
    <main>
      <List />
    </main>
  )
}

export default LiverPage
