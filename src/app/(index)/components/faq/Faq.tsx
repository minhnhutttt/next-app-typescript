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
  }
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
