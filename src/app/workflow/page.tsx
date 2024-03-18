import type { Metadata } from 'next'

import { SITE_URL, OG, TWITTER } from '@/config/constants'
import PageContainer from '@/components/pageContainer'
import WorkflowHead from './components/workflowHead'
import WorkFlowArticle from './components/workFlowArticle'
import Map from '@/components/map'

export const metadata: Metadata = {
  title: 'Workflow',
  openGraph: {
    ...OG,
    title: 'Workflow',
    url: SITE_URL + '/workflow',
  },
  twitter: {
    ...TWITTER,
    title: 'Workflow',
  },
  alternates: {
    canonical: SITE_URL + '/workflow',
  },
}

const WorkflowPage = () => {
  return (
    <PageContainer>
      <WorkflowHead />
      <WorkFlowArticle />
      <Map />
    </PageContainer>
  )
}

export default WorkflowPage
