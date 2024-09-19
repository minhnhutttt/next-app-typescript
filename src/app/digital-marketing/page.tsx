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
    title: '企画・アイデア出し',
    content: (
      <>
        クライアントのニーズやブランドコンセプトを理解し、商品の方向性を決定します。市場調査やターゲット分析を行い、どのようなデザインやアイテムが効果的かを検討します。
      </>
    ),
  },
  {
    id: '2',
    title: 'デザイン・設計',
    content: (
      <>
        。具体的なデザインを作成し、素材や色、形状などを決定します。クライアントと密に連携しながら、試作品を作成し、デザインの最終調整を行います。
      </>
    ),
  },
  {
    id: '3',
    title: '製造・品質管理',
    content: (
      <>
        製造過程では、品質管理を徹底し、デザインどおりの製品が確実に生産されるよう監督します。大量生産の場合でも、常にクオリティが一定に保たれるよう、適切なチェック体制を整えます。
      </>
    ),
  },
  {
    id: '4',
    title: '納品・フォローアップ',
    content: (
      <>
        製品が完成したら、指定された期日にクライアントへ納品します。納品後も、必要に応じて追加のサポートやフォローアップを行い、再注文や今後のキャンペーン展開に向けたアドバイスを提供します。
      </>
    ),
  },
]

const DataFaq = [
  {
    id: '1',
    title:
      'アパレルやノベルティグッズの制作期間はどのくらいかかりますか？',
    content: (
      <>
        制作期間は、デザインの複雑さや数量によって異なります。まずはお気軽にご相談ください。
      </>
    ),
  },
  {
    id: '2',
    title: '最小注文数（MOQ）はどれくらいですか？',
    content: (
      <>
        最小注文数（MOQ）は、アイテムや製造方法によって異なります。詳細はお問い合わせいただければ具体的にお見積もりいたします。
      </>
    ),
  },
  {
    id: '3',
    title: 'オリジナルデザインを依頼することは可能ですか？',
    content: (
      <>
        はい、オリジナルデザインの制作も承っております。クライアントのご要望やブランドイメージに合わせたデザインを、私たちのデザイナーチームが提案・作成いたします。また、すでにデザインがある場合でも、そのデータをもとに商品化することが可能です。
      </>
    ),
  },
  {
    id: '4',
    title: '製品のサンプルを確認することはできますか？',
    content: <>はい、量産前にサンプルをご提供いたします。サンプルを確認いただいた上で、デザインや品質に関してフィードバックをいただき、必要に応じて修正を行います。サンプルの確認により、最終製品がクライアントの期待に応えるものであることを保証します。</>,
  },
]

const DigitalMarketingPage = () => {
  return (
    <main>
      <PageTitle>Apparel and Novelty Goods</PageTitle>
      <Banner image="/assets/images/marketing.jpg">
        アパレル製品やノベルティグッズは、企業やブランドの魅力を伝える強力なツールであり、ターゲット層に響くデザインと品質が求められます。だからこそ、業界や市場のトレンドに合わせた最適な企画と制作が必要です。私たちは、お客様のブランド価値を最大限に高める、期待を超えるプロダクトを提案いたします。
      </Banner>
      <Provide
        title="We offer premium apparel and novelty goods services."
        items={DataProvide}
      />
      <Faq items={DataFaq} />
    </main>
  )
}

export default DigitalMarketingPage
