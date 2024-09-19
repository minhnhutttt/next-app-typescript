import type { Metadata } from 'next'

import { SITE_URL, OG, TWITTER } from '@/config/constants'
import PageTitle from '@/components/pageTitle'
import Banner from '@/components/banner'
import Provide from '@/components/provide'
import Faq from '@/components/faq'
import Contact from '@/components/contact'

export const metadata: Metadata = {
  title: 'Digital marketing',
  openGraph: {
    ...OG,
    title: 'Digital marketing',
    url: SITE_URL + '/digital-marketing',
  },
  twitter: {
    ...TWITTER,
    title: 'Digital marketing',
  },
  alternates: {
    canonical: SITE_URL + '/digital-marketing',
  },
}

const DataProvide = [
  {
    id: '1',
    title: '戦略立案',
    content: (
      <>
        クライアントの業種やターゲットユーザーに合わせてヒアリングを行い、デジタルマーケティング戦略を立案します。
      </>
    ),
  },
  {
    id: '2',
    title: '施策設計',
    content: (
      <>
        戦略に基づき、具体的な施策を設計します。広告、コンテンツ、SNSなど、各チャネルでの最適なアプローチを決定します。
      </>
    ),
  },
  {
    id: '3',
    title: '実行と分析',
    content: (
      <>
        設計した施策を実行し、定期的に結果を分析します。データに基づいた改善提案を行います。
      </>
    ),
  },
  {
    id: '4',
    title: '最適化',
    content: (
      <>
        分析結果をもとに、継続的な最適化を図ります。市場の変化に合わせて柔軟に戦略と施策を調整します。
      </>
    ),
  },
]

const DataFaq = [
  {
    id: '1',
    title:
      'デジタルマーケティングサービスの料金体系はどのようになっていますか？',
    content: (
      <>
        お客様のニーズや予算に合わせて、柔軟な料金プランをご提案いたします。まずはご相談ください。
      </>
    ),
  },
  {
    id: '2',
    title: 'どのようなチャネルに対応していますか？',
    content: (
      <>
        Google広告、SNS広告、ディスプレイ広告など、幅広いチャネルに対応しています。お客様のターゲットに合わせて、最適なチャネルをご提案します。
      </>
    ),
  },
  {
    id: '3',
    title: '広告運用の実績はありますか？',
    content: (
      <>
        はい、様々な業種のお客様の広告運用を行ってきた実績があります。具体的な事例についてはお問い合わせください。
      </>
    ),
  },
  {
    id: '4',
    title: 'リクエストはどのようにすればいいですか?  ',
    content: <>まずはメールでお問い合わせください。</>,
  },
]

const DigitalMarketingPage = () => {
  return (
    <main>
      <PageTitle>Digital marketing</PageTitle>
      <Banner image="/assets/images/marketing.jpg">
        デジタルマーケティングは企業やブランドの成長エンジンであり、適切な戦略と実行が求められます。だからこそ、業種やターゲットに合わせた最適なアプローチが必要です。私たちは、長年培った知識と経験をもとに、お客様の期待を超える提案をいたします。
      </Banner>
      <Provide
        title="We provide high-quality digital marketing services."
        items={DataProvide}
      />
      <Faq items={DataFaq} />
      <Contact title="デジタルマーケティングで成果を上げたいですか？">
        効果的な広告運用を実現したいですか？
        SNSを活用してブランド認知度を高めたいですか？
        あるいはWebサイトのコンバージョン率を改善したいですか？
        私たちは、お客様のビジネスの成長を加速するデジタルマーケティングサービスを提供することを目指しています。
      </Contact>
    </main>
  )
}

export default DigitalMarketingPage
