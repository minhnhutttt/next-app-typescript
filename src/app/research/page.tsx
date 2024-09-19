import type { Metadata } from 'next'

import { SITE_URL, OG, TWITTER } from '@/config/constants'
import PageTitle from '@/components/pageTitle'
import Banner from '@/components/banner'
import Provide from '@/components/provide'
import Faq from '@/components/faq'
import Contact from '@/components/contact'

export const metadata: Metadata = {
  title: 'Research',
  openGraph: {
    ...OG,
    title: 'Research',
    url: SITE_URL + '/research',
  },
  twitter: {
    ...TWITTER,
    title: 'Research',
  },
  alternates: {
    canonical: SITE_URL + '/research',
  },
}

const DataProvide = [
  {
    id: '1',
    title: 'リサーチ設計',
    content: (
      <>
        クライアントの業種やターゲットユーザーに合わせてヒアリングを行い、リサーチ設計を行います。
      </>
    ),
  },
  {
    id: '2',
    title: '情報収集',
    content: <>設計に基づき、適切な手法を用いてデータを収集します。</>,
  },
  {
    id: '3',
    title: '分析・レポート',
    content: (
      <>収集したデータを分析し、わかりやすくまとめたレポートを作成します。</>
    ),
  },
  {
    id: '4',
    title: '改善提案',
    content: (
      <>
        分析結果をもとに、クライアントのビジネス改善につながる提案を行います。
      </>
    ),
  },
]

const DataFaq = [
  {
    id: '1',
    title: 'リサーチにはどのくらいの期間が必要ですか？',
    content: (
      <>プロジェクトの規模や複雑さによって異なります。まずはご相談ください。</>
    ),
  },
  {
    id: '2',
    title: 'どのような調査手法を用いますか？',
    content: <>お客様のニーズに合わせて、最適な調査手法を提案いたします。</>,
  },
  {
    id: '3',
    title: '調査結果はどのような形式で提供されますか？',
    content: (
      <>
        わかりやすいレポートの形でお届けします。必要に応じて、生データもご提供可能です。
      </>
    ),
  },
  {
    id: '4',
    title: 'リサーチの依頼はどのようにすればいいですか？',
    content: <>まずはメールでお問い合わせください。</>,
  },
]

const ResearchPage = () => {
  return (
    <main>
      <PageTitle>Research</PageTitle>
      <Banner image="/assets/images/design.jpg">
        リサーチは企業やブランドの意思決定の基盤であり、適切な情報収集と分析が求められます。だからこそ、業種やターゲットに合わせた最適な調査設計が必要です。私たちは、長年培った知識と経験をもとに、お客様の期待を超える提案をいたします。
      </Banner>
      <Provide
        title="We provide high-quality research services."
        items={DataProvide}
      />
      <Faq items={DataFaq} />
      <Contact title="意思決定に必要な情報やインサイトが必要ですか？">
        市場動向を把握したいですか？ 顧客ニーズを深く理解したいですか？
        あるいは競合他社の戦略を知りたいですか？
        私たちは、お客様のビジネスの成長と革新に役立つリサーチサービスを提供することを目指しています。
      </Contact>
    </main>
  )
}

export default ResearchPage
