import type { Metadata } from 'next'

import { SITE_URL, OG, TWITTER } from '@/config/constants'
import PageTitle from '@/components/pageTitle'
import Video from './components/video'
import GlobalDigitalAgency from './components/globalDigitalAgency'
import Info from './components/info'
import Greeting from './components/greeting'

export const metadata: Metadata = {
  title: 'About us',
  openGraph: {
    ...OG,
    title: 'About us',
    url: SITE_URL + '/about',
  },
  twitter: {
    ...TWITTER,
    title: 'About us',
  },
  alternates: {
    canonical: SITE_URL + '/about',
  },
}

const AboutPage = () => {
  return (
    <>
      <PageTitle>ABOUT US</PageTitle>
      <Video />
      <GlobalDigitalAgency />
      <Greeting />
      <Info />
    </>
  )
}

export default AboutPage
