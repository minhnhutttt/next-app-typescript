'use client'

import FaqItem from './faqItem'
import { FaqItemPropsType } from './faqItem'
import useScrollAnimations from '@/hooks/useScrollAnimations'

const faqData: FaqItemPropsType[] = [
  {
    id: '1',
    question: 'COIN TOGETHERとは何ですか？',
    answer: (
      <>
        COIN TOGETHERは、日常の生活費や支出を通じて、イーサリアム（ETH）などのデジタル資産を獲得できる新しいサービスです。電気代やガス代、カフェでの飲食など、普段の消費がそのまま資産形成につながります。
      </>
    ),
  },
  {
    id: '2',
    question: 'どうやってイーサリアムを獲得できますか？',
    answer: (
      <>
        提携店舗やサービスでお買い物やお支払いをすると、利用金額やキャンペーン内容に応じてイーサリアムなどのデジタル資産が還元されます。専用のアプリやQRコードを利用して簡単に受け取ることができます。
      </>
    ),
  },
  {
    id: '3',
    question: 'メタマスクとはなんですか？',
    answer: (
      <>
        MetaMask（メタマスク）は、イーサリアムブロックチェーン上のデジタル資産を管理するための、ユーザーフレンドリーなブラウザ拡張機能およびモバイルアプリケーションです。特別な暗号資産取引所の口座開設は不要で、インストールするだけですぐに暗号資産の管理を始められます。
      </>
    ),
  },
  {
    id: '4',
    question: 'どのくらいデジタル資産がもらえますか？',
    answer: (
      <>
        還元されるデジタル資産の量は、提携店舗やサービス、利用金額、キャンペーン内容によって異なります。詳しい還元率や条件は、各提携先の情報をご確認ください。
      </>
    ),
  },
  {
    id: '5',
    question: '受け取ったデジタル資産はどうすればいいですか？',
    answer: (
      <>
        受け取ったデジタル資産はさまざまな方法でご活用いただけます。まず、そのまま保有して将来的な価値の上昇を期待することができます。また、COIN TOGETHERのプラットフォーム内で、提携店舗やサービスでのお支払いに利用することも可能です。さらに、暗号資産取引所を通じて日本円や他の暗号資産に交換したり、ステーキングや分散型金融（DeFi）サービスを利用して資産運用を行うこともできます。
      </>
    ),
  },
  {
    id: '6',
    question: '暗号資産の取引所で口座を開設する必要がありますか？',
    answer: (
      <>
        COIN TOGETHERのアプリ内でウォレット機能を提供しているため、特別に取引所の口座を開設する必要はありません。ただし、イーサリアムを取引所で売買したい場合は、その取引所での口座開設が必要となります。
      </>
    ),
  },
  {
    id: '7',
    question: 'ポイントと暗号資産の違いは何ですか？',
    answer: (
      <>
        1ポイント1円のポイントをもらっても、その価値は変わりません。一方、イーサリアムなどのデジタル資産は市場の成長とともに価値が上がる可能性があります。さらに、ポイントは特定の企業内でのみ利用できますが、イーサリアムなどのデジタル資産は世界中で取引・利用が可能です。 
      </>
    ),
  },
  {
    id: '8',
    question: 'サービスの利用に料金はかかりますか？',
    answer: (
      <>
        COIN TOGETHERの基本的なご利用は無料です。ただし、一部のサービスや機能については手数料が発生する場合があります。詳細は利用規約をご確認ください。
      </>
    ),
  },
  {
    id: '9',
    question: 'セキュリティは大丈夫ですか？',
    answer: (
      <>
        当社は高度なセキュリティ対策を講じており、ユーザーの資産と個人情報を厳重に保護しています。また、ブロックチェーン技術を活用して透明性と安全性を確保しています。
      </>
    ),
  },
  {
    id: '10',
    question: '初心者でも簡単に使えますか？',
    answer: (
      <>
        はい、COIN TOGETHERは暗号資産初心者の方でも簡単にご利用いただけるよう、わかりやすい操作性とサポート体制を整えています。アカウントの作成からイーサリアムなどのデジタル資産の受け取りまで、スムーズに行えます。
      </>
    ),
  },
  {
    id: '11',
    question: 'どのお店で利用できますか？',
    answer: (
      <>
        カフェ・レストラン、薬局、アミューズメントパーク、美容院、フィットネスジム、クリーニング店など、多様なジャンルの提携店舗でご利用いただけます。今後も提携店舗を拡大していく予定です。
      </>
    ),
  },
  {
    id: '12',
    question: 'コイン獲得スポットとは何ですか？',
    answer: (
      <>
        Googleマップ上に設定されたコイン獲得スポットを訪れることで、イーサリアムなどのデジタル資産をゲットできます。ゲーム感覚で楽しみながら、暗号資産を貯めることができます。
      </>
    ),
  },
  {
    id: '13',
    question: 'ランキング機能について教えてください。',
    answer: (
      <>
        ユーザーは年間獲得チャンピオンの称号を目指して、他のユーザーと獲得量を競い合うことができます。ランキング上位者には特別なリワードや称号が付与されます。
      </>
    ),
  },
  {
    id: '14',
    question: 'DIVER Chainとは何ですか？',
    answer: (
      <>
        DIVER Chainは、当サービスが採用しているブロックチェーン技術です。高速かつ安全な取引を可能にし、ユーザーに快適な利用体験を提供します。
      </>
    ),
  },
  {
    id: '15',
    question: 'イーサリアムの価値が下がることはありますか？',
    answer: (
      <>
        イーサリアムなどのデジタル資産は市場の需要と供給によって価値が変動します。そのため、価値が上がることもあれば下がることもあります。投資リスクを理解した上でご利用ください。
      </>
    ),
  },
  {
    id: '16',
    question: '未成年でも利用できますか？',
    answer: (
      <>
        利用規約に基づき、未成年の方は保護者の同意が必要となる場合があります。詳しくは利用規約をご確認ください。
      </>
    ),
  },
]

const FAQ = () => {
  const ref = useScrollAnimations()

  return (
    <section
      ref={ref}
      id="faq"
      className="px-5 pb-12 pt-20 md:pb-[90px] md:pt-[145px]"
    >
      <div className="mx-auto w-full max-w-[920px]">
        <h3 className="text-center text-[32px] font-bold tracking-widest md:text-[48px]">
          FAQ
        </h3>
        <div className="mx-auto mt-5 w-full space-y-[10px] md:mt-[70px]">
          {faqData.map(({ id, question, answer }) => (
            <FaqItem key={id} id={id} question={question} answer={answer} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
