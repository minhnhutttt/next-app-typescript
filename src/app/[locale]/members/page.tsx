import type { Metadata } from 'next'

import { SITE_URL, OG, TWITTER } from '@/config/constants'
import MemberContent from './components/membersContent'

export const metadata: Metadata = {
  title: 'Members',
  openGraph: {
    ...OG,
    title: 'Members',
    url: SITE_URL + '/members',
  },
  twitter: {
    ...TWITTER,
    title: 'Members',
  },
  alternates: {
    canonical: SITE_URL + '/members',
  },
}

const MembersPage = () => {
  return (
    <main className="mt-[150px] overflow-hidden">
      <section>
        <h1 className="py-8 text-center text-[32px] font-bold leading-[1.8] md:py-[60px] md:text-[64px]">
          BOARD MEMBERS
        </h1>
        <MemberContent />
      </section>
    </main>
  )
}

export default MembersPage
