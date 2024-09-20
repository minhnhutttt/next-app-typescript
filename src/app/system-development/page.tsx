import type { Metadata } from 'next'

import { SITE_URL, OG, TWITTER } from '@/config/constants'
import PageTitle from '@/components/pageTitle'
import Banner from '@/components/banner'
import Provide from '@/components/provide'
import Faq from '@/components/faq'

export const metadata: Metadata = {
  title: 'System Development',
  openGraph: {
    ...OG,
    title: 'System Development',
    url: SITE_URL + '/system-development',
  },
  twitter: {
    ...TWITTER,
    title: 'System Development',
  },
  alternates: {
    canonical: SITE_URL + '/system-development',
  },
}

const DataProvide = [
  {
    id: '1',
    title: '要件定義',
    content: (
      <>
        クライアントのビジネス目標や業務のニーズを明確にするための要件定義を行います。システムに必要な機能や性能を詳細にヒアリングし、どのような解決策が最適かを分析します。クライアントとのコミュニケーションを密に行い、システムの目的やゴールを確定させます。
      </>
    ),
  },
  {
    id: '2',
    title: '設計・開発',
    content: (
      <>
        要件に基づいたシステム設計を行い、システムの構造やデータベースの設計を行います。その後、実際にプログラミングを行い、システムを構築します。設計と開発は、システムの信頼性や効率性を重視しながら進められます。
      </>
    ),
  },
  {
    id: '3',
    title: 'テスト・導入',
    content: (
      <>
        機能テストや負荷テストを実施し、システムが正しく動作するか、予期せぬ問題が発生しないかを確認します。テストが終了したらお客様の環境にシステムを導入し、必要なサポートを提供して運用を開始します。
      </>
    ),
  },
]

const DataFaq = [
  {
    id: '1',
    title: 'システム開発にはどのくらいの期間がかかりますか？',
    content: (
      <>
        システムの規模や機能の複雑さによって異なります。まずはお気軽にご相談ください。
      </>
    ),
  },
  {
    id: '2',
    title: 'システム開発の費用はどのくらいですか？',
    content: (
      <>
        費用は、システムの規模、機能、カスタマイズの度合いに応じて大きく変わります。具体的な見積もりは、要件定義後にご提示いたします。お気軽にご相談ください。
      </>
    ),
  },
  {
    id: '3',
    title: '開発後のサポートやメンテナンスは行っていますか？',
    content: (
      <>
        はい、開発後のサポートやメンテナンスも対応しています。システムの運用開始後に必要な機能の追加や変更、定期的なメンテナンス、バグ修正など、長期的なサポート体制を提供いたします。
      </>
    ),
  },
  {
    id: '4',
    title: '既存システムの改修や拡張は可能ですか？',
    content: (
      <>
        はい、既存のシステムに対する改修や機能拡張も行っています。システムの状況を確認し、必要に応じて最新技術や改善策を提案し、効率的に改修を行います。お客様のニーズに応じて最適な解決策を提供いたします。
      </>
    ),
  },
]

const SystemDevelopmentPage = () => {
  return (
    <main>
      <PageTitle>System Development</PageTitle>
      <Banner image="/assets/images/development.jpg">
        代行サービスは企業やブランドの業務効率化と最適化の鍵であり、専門性と経験が求められます。だからこそ、業種やニーズに合わせた最適なサービス提供が必要です。私たちは、長年培った知識と経験をもとに、お客様の期待を超える提案をいたします。
      </Banner>
      <Provide
        title="We deliver top-quality system development services."
        items={DataProvide}
      />
      <Faq items={DataFaq} />
    </main>
  )
}

export default SystemDevelopmentPage
