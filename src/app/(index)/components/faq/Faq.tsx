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
    question: 'What wallets can I use on Teleport Exchange?',
    answer: (
      <>
        You will need a compatible wallet that supports DwETH, such as DIVER Wallet Pro. 
      </>
    ),
  },
  {
    id: '03',
    question: 'What networks does Teleport Exchange support?',
    answer: (
      <>
        It supports the DIVER Time Chain.
      </>
    ),
  },
  {
    id: '04',
    question: 'What is DIVER (DIV)?',
    answer: (
      <>
        It is the native token used in the DIVER chain ecosystem.
      </>
    ),
  },
  {
    id: '05',
    question: 'What is gas?',
    answer: (
      <>
        It is the fee paid to execute transactions on the blockchain. There is no gas fee for sending DIV, DwETH, or DRC20Token.
      </>
    ),
  },
  {
    id: '06',
    question: 'How do I provide liquidity to Teleport Exchange?',
    answer: (
      <>
        Teleport Exchange does not provide a staking function for providing liquidity.
      </>
    ),
  },
  {
    id: '07',
    question: 'How are bridge fees calculated?',
    answer: (
      <>
        There is no fee for converting ETH to DwETH. <br />
        The fee for converting DwETH to ETH is 5%.
      </>
    ),
  },
  {
    id: '08',
    question: 'How are swap fees calculated?',
    answer: (
      <>
        There is no fee for swapping from DwETH to DRC20Token or from DRC20Token to DwETH.
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
    question: 'What happens if the transaction fails?',
    answer: (
      <>
      There is no loss of assets, as the tokens or crypto assets will remain in the sender's wallet. If the transaction is successful, you can check the transaction status on DIVER Scan (<a href="https://scan.diver.io/" target="_blank" rel="noopener noreferrer">https://scan.diver.io/</a>).
      </>
    ),
  },
  {
    id: '11',
    question: 'Is there a minimum transaction amount?',
    answer: (
      <>
        You can basically trade any amount you like, but there is a 5% fee for the DwETH to ETH bridge.
      </>
    ),
  },
  {
    id: '12',
    question: 'Why did the trade fail?',
    answer: (
      <>
        If the price of the underlying asset pool moves beyond the slippage tolerance setting you have set, the trade will fail. If you increase the tolerance range in the local settings, the chances of the trade being successful will increase, but the chances of another party front-running the trade will also increase.
      </>
    ),
  },
  {
    id: '13',
    question: 'How do I report a bug?',
    answer: (
      <>
        Please contact us using the “Contact Us” form below.
      </>
    ),
  },
  {
    id: '14',
    question: 'テレポート・エクスチェンジとは？',
    answer: (
      <>
        Teleport Exchangeは、DIVERタイムチェーンで使用されるイーサリアムベースのWrapped TokenであるDwETHと、DIVERタイムチェーン標準に基づくトークンであるDRC20Tokenのスワッププラットフォームです。
      </>
    ),
  },
  {
    id: '15',
    question: 'Teleport Exchangeで使用できるウォレットは？',
    answer: (
      <>
        DIVER Wallet ProをはじめとしたDwETHをサポートする互換性のあるウォレットが必要です。 
      </>
    ),
  },
  {
    id: '16',
    question: 'Teleport Exchangeはどんなネットワークをサポートしていますか？',
    answer: (
      <>
        DIVER Time Chainに対応しています。
      </>
    ),
  },
  {
    id: '17',
    question: 'DIVER（DIV）とは何ですか？',
    answer: (
      <>
        DIVERチェーンのエコシステムで使用されるネイティブトークンです。
      </>
    ),
  },
  {
    id: '18',
    question: 'ガスとは何ですか？',
    answer: (
      <>
        ブロックチェーン上で取引を実行するために支払われる手数料です。 DIV、DwETH、DRC20Tokenの送信にはガス料金はかかりません。
      </>
    ),
  },
  {
    id: '19',
    question: 'Teleport Exchangeに流動性を提供するにはどうすればいいですか？',
    answer: (
      <>
        Teleport Exchangeは流動性を提供するためのステーキング機能を提供していません。
      </>
    ),
  },
  {
    id: '20',
    question: 'ブリッジの手数料はどのように計算されますか？',
    answer: (
      <>
        ETHからDwETHへの手数料は無料です。<br />
        DwETHからETHの手数料は5%です。
      </>
    ),
  },
  {
    id: '21',
    question: 'スワップの手数料はどのように計算されますか？',
    answer: (
      <>
        DwETH から DRC20Token へのスワップ、または DRC20Token から DwETH へのスワップには手数料はかかりません。
      </>
    ),
  },
  {
    id: '22',
    question: 'スワップを完了させるのにどのくらい時間がかかりますか？',
    answer: (
      <>
      ほとんどの場合、数十秒で完了します。
      </>
    ),
  },
  {
    id: '23',
    question: '取引に失敗した場合はどうなりますか？',
    answer: (
      <>
        トークンや暗号資産は送信者のウォレットに残るため、基本的に資産の損失はありません。<br />
        取引が成功した場合、DIVER Scan（<a href="https://scan.diver.io/" target="_blank" rel="noopener noreferrer">https://scan.diver.io/</a>）で取引状況を確認できます。
      </>
    ),
  },
  {
    id: '24',
    question: '取引量の下限はありますか？',
    answer: (
      <>
        基本的にお好きな金額をお取引いただけますが、DwETHからETHへのブリッジは5%の手数料が掛かります。
      </>
    ),
  },
  {
    id: '25',
    question: 'なぜ取引に失敗したのですか？',
    answer: (
      <>
        原資産プールの価格がお客様のスリッページ許容度設定を超えて移動した場合、取引は失敗します。 ローカル設定で許容範囲を大きくすると、取引が成功する可能性が高まりますが、別の当事者が取引をフロントランニングする可能性も高まります。
      </>
    ),
  },
  {
    id: '26',
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
