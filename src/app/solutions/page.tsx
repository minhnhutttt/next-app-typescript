import type { Metadata } from 'next'

import { SITE_URL, OG, TWITTER } from '@/config/constants'
import PageTitle from '@/components/pageTitle'
import List from './list'

export const metadata: Metadata = {
  title: 'Slutions',
  openGraph: {
    ...OG,
    title: 'Slutions',
    url: SITE_URL + '/solutions',
  },
  twitter: {
    ...TWITTER,
    title: 'Slutions',
  },
  alternates: {
    canonical: SITE_URL + '/solutions',
  },
}

const SolutionsPage = () => {
  return (
    <main>
      <PageTitle>Solutions</PageTitle>
      <List />
    </main>
  )
}

export default SolutionsPage
