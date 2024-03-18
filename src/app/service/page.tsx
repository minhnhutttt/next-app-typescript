import type { Metadata } from 'next'

import { SITE_URL, OG, TWITTER } from '@/config/constants'
import PageContainer from '@/components/pageContainer'
import ServiceHead from './components/serviceHead'
import ServiceArticle from './components/serviceArticle'
import ServiceSolutions from './components/serviceSolutions'
import CTA from '@/components/cta'

export const metadata: Metadata = {
  title: 'Service',
  openGraph: {
    ...OG,
    title: 'Service',
    url: SITE_URL + '/service',
  },
  twitter: {
    ...TWITTER,
    title: 'Service',
  },
  alternates: {
    canonical: SITE_URL + '/service',
  },
}

const ServicePage = () => {
  return (
    <PageContainer>
      <ServiceHead />
      <ServiceArticle />
      <ServiceSolutions />
      <CTA />
    </PageContainer>
  )
}

export default ServicePage
