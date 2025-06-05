import type { Metadata } from 'next'

import { SITE_URL, OG } from '@/config/constants'

import FV from './components/fv'
import Introduction from './components/Introduction'
import News from './components/news'
import BoardMember from './components/boardMember'
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
    <div className="overflow-hidden">
      <FV />
      <div className="bg-[linear-gradient(180deg,_rgba(117,_122,_123,_0.0)_0%,_rgba(87,_98,_101,_0.3)_89.3%,_#ffffff_100%)]">
        <Introduction />
        <News />
      </div>
      <BoardMember />
      <Showcase />
      <Message />
      <Contact />
      <Company />
    </div>
  )
}

export default IndexPage
