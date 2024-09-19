import type { Metadata } from 'next'

import { SITE_URL, OG, TWITTER } from '@/config/constants'
import PageTitle from '@/components/pageTitle'
import Banner from '@/components/banner'
import Provide from '@/components/provide'
import Faq from '@/components/faq'
import Contact from '@/components/contact'

export const metadata: Metadata = {
  title: 'Agency',
  openGraph: {
    ...OG,
    title: 'Agency',
    url: SITE_URL + '/agency',
  },
  twitter: {
    ...TWITTER,
    title: 'Agency',
  },
  alternates: {
    canonical: SITE_URL + '/agency',
  },
}

const DataProvide = [
  {
    id: '1',
    title: 'ヒアリングと業務設計',
    content: (
      <>
        クライアントの業務内容やニーズに合わせてヒアリングを行い、代行サービスの範囲と目標を設定します。その後、効率的かつ効果的な業務フローを設計します。
      </>
    ),
  },
  {
    id: '2',
    title: '実行と報告',
    content: (
      <>
        設計した業務フローに基づき、専門スタッフが業務を代行します。定期的な報告会を設け、クライアントとの密なコミュニケーションを通じて、進捗状況や結果を共有します。
      </>
    ),
  },
  {
    id: '3',
    title: '分析と改善',
    content: (
      <>
        業務の進捗状況や結果を分析し、必要に応じて改善を行います。継続的な最適化を図ることで、クライアントのビジネス成長に貢献します。
      </>
    ),
  },
]

const DataFaq = [
  {
    id: '1',
    title: '代行サービスを利用するメリットは何ですか？',
    content: (
      <>
        業務の効率化と最適化を実現し、お客様は本業に集中することができます。また、専門性の高いスタッフが業務を代行するため、質の高いサービスを提供できます。
      </>
    ),
  },
  {
    id: '2',
    title: 'どのような業務を代行してもらえますか？',
    content: (
      <>
        広告運用、営業活動、ECプラットフォームへの出品など、幅広い業務の代行が可能です。お客様のニーズに合わせて、最適なサービスをご提案いたします。
      </>
    ),
  },
  {
    id: '3',
    title: '代行サービスの料金体系はどのようになっていますか？',
    content: (
      <>
        業務内容や規模に応じて、柔軟な料金体系をご提案いたします。固定費用や成果報酬型など、お客様のご要望に合わせた料金プランをご用意しています。
      </>
    ),
  },
  {
    id: '4',
    title: 'リクエストはどのようにすればいいですか? ',
    content: <>まずはメールでお問い合わせください。</>,
  },
]

const AgencyPage = () => {
  return (
    <main>
      <PageTitle>Agency</PageTitle>
      <Banner image="/assets/images/development.jpg">
        代行サービスは企業やブランドの業務効率化と最適化の鍵であり、専門性と経験が求められます。だからこそ、業種やニーズに合わせた最適なサービス提供が必要です。私たちは、長年培った知識と経験をもとに、お客様の期待を超える提案をいたします。
      </Banner>
      <Provide
        title="We provide high- quality agency services."
        items={DataProvide}
      />
      <Faq items={DataFaq} />
      <Contact title="業務の効率化と最適化を外注で実現しませんか？">
        広告運用を任せられる専門家を探していますか？
        営業活動の代行を検討していますか？
        あるいはECサイトへの出品業務を外注したいですか？
        私たちは、お客様のビジネスの成長と発展に貢献する代行サービスを提供することを目指しています。
      </Contact>
    </main>
  )
}

export default AgencyPage
