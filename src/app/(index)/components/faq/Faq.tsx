'use client'

import useScrollAnimations from '@/hooks/useScrollAnimations'
import FaqItem, { FaqItemPropsType } from './FaqItem'

const faqData: FaqItemPropsType[] = [
  {
    id: '01',
    question: 'What is Teleport Exchange?',
    answer: (
      <>
        Teleport Exchange is a swap platform for DwETH, an Ethereum-based Wrapped Token used on the DIVER Time Chain, and DRC20Token, a token based on the DIVER Time Chain standard.
      </>
    ),
  },
  {
    id: '02',
    question: 'Which wallets can I use with Teleport Exchange?',
    answer: (
      <>
        You will need a compatible wallet that supports DwETH. Currently, the only wallet that can receive DwETH is DIVER Wallet Pro.
      </>
    ),
  },
  {
    id: '03',
    question: 'What networks does Teleport Exchange support?',
    answer: (
      <>
        It supports the DIVER Time chain.
      </>
    ),
  },
  {
    id: '04',
    question: 'What is DIVER (DIV)?',
    answer: (
      <>
        Native tokens used on the DIVER Chain ecosystem.
      </>
    ),
  },
  {
    id: '05',
    question: 'What is Price Slippage?',
    answer: (
      <>
        Price Slippage is the change in token price caused by the total movement of the market. <br />
        Price Slippage is shown as the difference between the price you expect to receive after swapping vs what you actually receive after the swap is complete.
      </>
    ),
  },
  {
    id: '06',
    question: 'What is gas?',
    answer: (
      <>
        It is the fee paid to execute transactions on the blockchain. There is no gas fee for sending DIV, DwETH, or DRC20Token.
      </>
    ),
  },
  {
    id: '07',
    question: 'How can I provide liquidity to Teleport Exchange?',
    answer: (
      <>
        Teleport Exchange does not provide a staking function to provide liquidity.
      </>
    ),
  },
  {
    id: '08',
    question: 'How are the fees for Swaps calculated?',
    answer: (
      <>
        There are no fees for Swaps from DwETH to DRC20Token or from DRC20Token to DwETH.
      </>
    ),
  },
  {
    id: '09',
    question: 'How long does it take to complete a swap?',
    answer: (
      <>
        In most cases, it takes just a few tens of seconds.
      </>
    ),
  },
  {
    id: '10',
    question: 'What happens if my transaction fails?',
    answer: (
      <>
        Tokens and crypto assets remain in the sender's wallet, so there is basically no loss of assets. <br />
        If the transaction is successful, you can check the transaction status on DIVER Scan (<a href="https://scan.diver.io/" target="_blank" rel="noopener noreferrer">https://scan.diver.io/</a> ).
      </>
    ),
  },
  {
    id: '11',
    question: 'Is there a minimum transaction volume limit?',
    answer: (
      <>
        No, you can trade any amount you want.
      </>
    ),
  },
  {
    id: '12',
    question: 'Why did my trade fail?',
    answer: (
      <>
        The trade will fail if the price of the underlying pools moves past your Slippage Tolerance settings. Increasing the tolerance in local settings will raise the chances of your trade succeeding, but also increase the probability of another party front-running your trade.
      </>
    ),
  },
  {
    id: '12',
    question: 'How can I report a bug?',
    answer: (
      <>
        Please contact us using the “Contact” below.
      </>
    ),
  },
  {
    id: '13',
    question: 'テレポート・エクスチェンジとは？',
    answer: (
      <>
        Teleport Exchangeは、DIVERタイムチェーンで使用されるイーサリアムベースのWrapped TokenであるDwETHと、DIVERタイムチェーン標準に基づくトークンであるDRC20Tokenのスワッププラットフォームです。
      </>
    ),
  },
  {
    id: '14',
    question: 'Teleport Exchangeで使用できるウォレットは？',
    answer: (
      <>
        DwETHをサポートする互換性のあるウォレットが必要です。 現在、DwETHを受け取ることができる唯一のウォレットはDIVER Wallet Proです。
      </>
    ),
  },
  {
    id: '15',
    question: 'Teleport Exchangeはどんなネットワークをサポートしていますか？',
    answer: (
      <>
        DIVERタイムチェーンに対応しています。
      </>
    ),
  },
  {
    id: '16',
    question: 'DIVER（DIV）とは何ですか？',
    answer: (
      <>
        DIVERチェーンのエコシステムで使用されるネイティブトークンです。
      </>
    ),
  },
  {
    id: '17',
    question: 'ガスとは何ですか？',
    answer: (
      <>
        ブロックチェーン上で取引を実行するために支払われる手数料です。 DIV、DwETH、DRC20Tokenの送信にはガス料金はかかりません。
      </>
    ),
  },
  {
    id: '18',
    question: 'Teleport Exchangeに流動性を提供するにはどうすればいいですか？',
    answer: (
      <>
        Teleport Exchangeは流動性を提供するためのステーキング機能を提供していません。
      </>
    ),
  },
  {
    id: '19',
    question: 'スワップの手数料はどのように計算されますか？',
    answer: (
      <>
        DwETH から DRC20Token へのスワップ、または DRC20Token から DwETH へのスワップには手数料はかかりません。
      </>
    ),
  },
  {
    id: '20',
    question: 'スワップを完了させるのにどのくらい時間がかかりますか？',
    answer: (
      <>
        ほとんどの場合、数十秒で完了します。
      </>
    ),
  },
  {
    id: '21',
    question: '取引に失敗した場合はどうなりますか？',
    answer: (
      <>
        トークンや暗号資産は送信者のウォレットに残るため、基本的に資産の損失はありません。<br />
        取引が成功した場合、DIVER Scan（<a href="https://scan.diver.io/" target="_blank" rel="noopener noreferrer">https://scan.diver.io/</a>）で取引状況を確認できます。
      </>
    ),
  },
  {
    id: '22',
    question: '取引量の下限はありますか？',
    answer: (
      <>
        いいえ、お好きな金額をお取引いただけます。
      </>
    ),
  },
  {
    id: '23',
    question: 'なぜ取引に失敗したのですか？',
    answer: (
      <>
        原資産プールの価格がお客様のスリッページ許容度設定を超えて移動した場合、取引は失敗します。 ローカル設定で許容範囲を大きくすると、取引が成功する可能性が高まりますが、別の当事者が取引をフロントランニングする可能性も高まります。
      </>
    ),
  },
  {
    id: '24',
    question: 'バグを報告するには？',
    answer: (
      <>
        下記「お問い合わせ」よりご連絡ください。
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
      className="px-5 pb-12 pt-10 md:pb-[90px] md:pt-[60px]"
    >
      <div className="mx-auto w-full max-w-[920px]">
        <h3 className="text-center text-[40px] font-bold tracking-widest md:text-[80px]">
          FAQ
        </h3>
        <div className="mx-auto mt-5 w-full space-y-[10px] md:mt-[40px]">
          {faqData.map(({ id, question, answer }) => (
            <FaqItem key={id} id={id} question={question} answer={answer} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
