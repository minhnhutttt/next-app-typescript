import type { Metadata } from 'next'

import { SITE_URL, OG, TWITTER } from '@/config/constants'
import PageTitle from '@/components/pageTitle'
import Banner from '@/components/banner'
import Provide from '@/components/provide'
import Faq from '@/components/faq'

export const metadata: Metadata = {
  title: 'Web Development',
  openGraph: {
    ...OG,
    title: 'Web Development',
    url: SITE_URL + '/web-development',
  },
  twitter: {
    ...TWITTER,
    title: 'Web Development',
  },
  alternates: {
    canonical: SITE_URL + '/web-development',
  },
}

const DataProvide = [
  {
    id: '1',
    title: '企画・設計',
    content: (
      <>
        クライアントのビジネス目標やターゲットユーザーを理解し、それに基づいたWebサイトの企画を行います。市場調査や競合分析を通じて、どのような機能やデザインが最適かを決定します。
      </>
    ),
  },
  {
    id: '2',
    title: 'デザイン',
    content: (
      <>
        ブランドイメージやユーザー体験を考慮しながら、視覚的な要素を作り上げます。UI/UXを最適化し、ユーザーフレンドリーなデザインを追求します。
      </>
    ),
  },
  {
    id: '3',
    title: '開発',
    content: (
      <>
        Reactなどの最新技術を使用して、フロントエンドやバックエンドの開発を行います。レスポンシブデザインやSEO対策を施し、パフォーマンスやセキュリティを考慮しながら、Webサイトの動作を実現します。
      </>
    ),
  },
  {
    id: '4',
    title: 'テスト・公開',
    content: (
      <>
        さまざまなデバイスやブラウザでの動作テストを行い、不具合を修正します。サイトが正常に動作することを確認した後、最終的な公開準備を進めます。Webサイトの公開後も、必要に応じてメンテナンスや更新を行い、クライアントのビジネスの成長をサポートします。
      </>
    ),
  },
]

const DataFaq = [
  {
    id: '1',
    title: 'Webサイトの制作期間はどのくらいかかりますか？',
    content: (
      <>プロジェクトの規模や要件によって異なります。まずはご相談ください。</>
    ),
  },
  {
    id: '2',
    title: 'Webサイトの制作費用はどのくらいですか？',
    content: (
      <>
        費用は、サイトの規模や必要な機能、デザインの複雑さにより異なります。簡単なランディングページから大規模なEコマースサイトまで、プロジェクトごとにお見積もりいたします。
      </>
    ),
  },
  {
    id: '3',
    title: 'Webサイトの更新やメンテナンスも対応していますか？',
    content: (
      <>
        はい、公開後のWebサイトの更新やメンテナンスも対応しています。コンテンツの更新や機能の追加、セキュリティ対策など、お客様のニーズに合わせたサポートプランをご提供します。
      </>
    ),
  },
  {
    id: '4',
    title: 'スマートフォンやタブレットでも使いやすいサイトを作成できますか？',
    content: (
      <>
        もちろんです。私たちは、世界標準であるReactを採用し、スマートフォン、タブレット、PCなど、すべてのデバイスで快適に閲覧できるWebサイトを制作しています。幅広いデバイスに対応する、使いやすく高性能なWebサイトを提供いたします。
      </>
    ),
  },
]

const WebDevelopmentPage = () => {
  return (
    <main>
      <PageTitle>Web Development</PageTitle>
      <Banner image="/assets/images/design.jpg">
        Webサイトは、企業やブランドの顔であり、ターゲットや目的に応じた最適な設計が求められます。だからこそ、私たちはクライアントのビジネス目標に合わせたWebサイトを構築し、効果的なオンラインプレゼンスを実現します。長年の知識と経験をもとに、最新の技術やデザイントレンドを取り入れ、お客様の期待を超えるWeb制作を提案いたします。
      </Banner>
      <Provide
        title="We provide dynamic web development services."
        items={DataProvide}
      />
      <Faq items={DataFaq} />
    </main>
  )
}

export default WebDevelopmentPage
