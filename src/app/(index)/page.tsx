import type { Metadata } from 'next'

import { SITE_URL, OG } from '@/config/constants'

import FV from './components/fv'
import Introduction from './components/Introduction'
import News from './components/news'
import BoardMember from './components/boardMember'
import Artist from './components/artist'
import Showcase from './components/showcase'
import Message from './components/message'
import Contact from './components/contact'
import Company from './components/company'

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
      <div className="bg-[linear-gradient(180deg,_#FFF_0%,_#FF711C_100%)]">
        <Introduction />
        <News />
      </div>
      <BoardMember />
      <Artist />
      <Showcase />
      <Message />
      <Contact />
      <Company />
    </>
  )
}

export default IndexPage
