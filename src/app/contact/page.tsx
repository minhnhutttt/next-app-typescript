import type { Metadata } from 'next'

import { SITE_URL, OG, TWITTER } from '@/config/constants'
import PageContainer from '@/components/pageContainer'
import ContactHead from './components/contactHead'
//import ContactForm from './components/contactForm'
import Info from './components/info'
import ContactTitle from './components/contactTitle'
import Map from '@/components/map'

export const metadata: Metadata = {
  title: 'Contact',
  openGraph: {
    ...OG,
    title: 'Contact',
    url: SITE_URL + '/contact',
  },
  twitter: {
    ...TWITTER,
    title: 'Contact',
  },
  alternates: {
    canonical: SITE_URL + '/contact',
  },
}

const ContactPage = () => {
  return (
    <PageContainer>
      <ContactHead />
      {/* <ContactForm /> */}
      <Info />
      <ContactTitle />
      <Map />
    </PageContainer>
  )
}

export default ContactPage
