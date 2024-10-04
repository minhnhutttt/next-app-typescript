"use client"
import { ReactNode, useState } from "react";

const data = [
    {
        image: '/assets/images/ic-action-01.svg',
        date: 'Feb 08 2024 - 19:49',
        merchant: 'Feb 08 2024 - 19:49',
        value: '0.0050'
    },
    {
        image: '/assets/images/ic-action-02.svg',
        date: 'Feb 08 2024 - 19:49',
        merchant: 'Feb 08 2024 - 19:49',
        value: '0.0050'
    },
    {
        image: '/assets/images/ic-action-01.svg',
        date: 'Feb 08 2024 - 19:49',
        merchant: 'Feb 08 2024 - 19:49',
        value: '0.0050'
    },
    {
        image: '/assets/images/ic-action-02.svg',
        date: 'Feb 08 2024 - 19:49',
        merchant: 'Feb 08 2024 - 19:49',
        value: '0.0050'
    },
    {
        image: '/assets/images/ic-action-01.svg',
        date: 'Feb 08 2024 - 19:49',
        merchant: 'Feb 08 2024 - 19:49',
        value: '0.0050'
    },
    {
        image: '/assets/images/ic-action-02.svg',
        date: 'Feb 08 2024 - 19:49',
        merchant: 'Feb 08 2024 - 19:49',
        value: '0.0050'
    },
    {
        image: '/assets/images/ic-action-01.svg',
        date: 'Feb 08 2024 - 19:49',
        merchant: 'Feb 08 2024 - 19:49',
        value: '0.0050'
    },
]

const ButtonTab = ({children, active, onclick}: {children: ReactNode, active: boolean, onclick: ()=> void}) => {
    return (
        <button onClick={onclick} className={`h-[62px] flex justify-center items-center md:px-6 lg:px-[50px] md:py-5 py-4 px-3 bg-white border-t-white md:text-[22px] text-[18px] font-semibold md:border-y-[5px] border-y-[3px] ${active ? 'border-b-[#2379E7] text-[#2379E7]' : 'border-white text-gray-800'}`}>
            {children}
        </button>
    )
}

export default function Dashboard() {
    const [tab, setTab] = useState<number | null>(1);

    const handleToggle = (index: number) => {
        setTab(tab === index ? 1 : index);
    };
  return (
    <main>
      <div className="h-[514px] bg-[linear-gradient(140deg,_#2379E7_1.59%,_#2594F7_33.42%,_#28A7FE_57.52%,_#2AB1FF_75.85%,_#32BCFE_98.03%)] px-5">
        <div className="w-full max-w-[1200px] mx-auto h-full flex flex-col justify-end pb-[70px] md:pb-[110px]">
            <h3 className="md:text-[48px] text-[32px] font-black tracking-[0.04em]">Transparency Builds Trust</h3>
            <p className="md:text-[16px] text-[14px] font-medium tracking-[0.04em] mt-4 md:mt-6">
            The key focus of this initiative is transparency. Proof of reserves is conducted on-chain, clearly showing a 1:1 match between minted DwETH tokens and BTC held by custodians. When DwETH token holders redeem their tokens for BTC, the tokens are burned. The minting and burning of tokens is tracked and verifiable on the blockchain.
            </p>
        </div>
      </div>
    <div className="md:mt-[100px] mt-[60px] md:pb-[87px] pb-14 px-5">
        <div className="w-full max-w-[1300px] mx-auto">
            <div className="flex gap-2.5 px-5 lg:px-[50px] max-md:flex-col">
                <ButtonTab onclick={() => handleToggle(1)} active={tab === 1}>ORDER BOOK</ButtonTab>
                <ButtonTab onclick={() => handleToggle(2)} active={tab === 2}>PARTNERS</ButtonTab>
                <ButtonTab onclick={() => handleToggle(3)} active={tab === 3}>PROOF OF ASSETS</ButtonTab>
            </div>
            <div className="bg-white text-black px-5 md:pb-[50px] pb-8">
                {tab === 1 &&
                    <div className="w-full max-w-[1200px] mx-auto">
                        <div className="md:px-10 px-6 py-12 md:pt-16 md:pb-12">
                            <p className="md:text-[64px] text-[32px] font-semibold leading-none">ORDER BOOK</p>
                            <p className="md:text-[15px] text-[13px] md:px-3 max-md:mt-4">A record of all minting and burning of DwETH on Base</p>
                        </div>
                        <div className="bg-[#2379E7]/[0.1] flex max-lg:flex-col lg:px-10 px-5 md:py-9 py-6 gap-10 lg:gap-[85px]">
                            <div className="">
                                <p className="md:text-[24px] text-[18px] font-semibold">NETWORK</p>
                                <div className="flex items-center gap-7 py-5">
                                    <figure><img src="/assets/images/ic-network.svg" alt="" /></figure>
                                    <p className="u-text-gradient md:text-[34px] text-[20px] text-right font-semibold">12,345,678.9101  DwETH</p>
                                </div>
                                <p className="md:text-[20px] text-[16px] text-[#2379E7] font-semibold">DRC20 Token</p>
                            </div>
                            <div className="">
                                <p className="md:text-[24px] text-[18px] font-semibold">CUSTODY</p>
                                <div className="flex items-center gap-7 py-5">
                                    <figure><img src="/assets/images/ic-custody.svg" alt="" /></figure>
                                    <p className="u-text-gradient md:text-[34px] text-[20px] text-right font-semibold">
                                        <span>12,345,678.9101 ETH</span> <br />
                                        <span className="text-right block md:text-[18px] text-[15px]">( $12,345,678.9101)</span>
                                        </p>
                                </div>
                                <p className="md:text-[20px] text-[16px] text-[#2379E7] font-semibold">On-chain Validation</p>
                            </div>
                        </div>
                        <div className="bg-white [filter:drop-shadow(0px_0px_5.438px_rgba(0,_0,_0,_0.20))] rounded-lg py-8 mt-6 ">
                            <div className="overflow-auto">
                                <table className="w-full min-w-[650px] text-left border-collapse [&_tr]:border-b [&_tr]:border-[#6E6893] [&_td]:h-[65px] [&_th]:text-[#6E6893] [&_th]:h-[51px] [&_th]:px-5 md:[&_td]:px-5 [&_td]:px-2 [&_th]:text-[13px]">
                                    <thead>
                                        <tr className="bg-[#F5F5F5]">
                                            <th className="w-[100px]">ACTION</th>
                                            <th className="w-[240px]">DATE & TIME</th>
                                            <th>MERCHANT</th>
                                            <th className="w-[200px] text-right !pr-10">VALUE (DwETH)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td><span className="flex "><img src={item.image} alt="" /></span></td>
                                                    <td className="md:text-[15px] text-[13px] font-medium">{item.date}</td>
                                                    <td className="md:text-[15px] text-[13px] font-medium">{item.merchant}</td>
                                                    <td className="text-right md:text-[15px] text-[13px] font-medium">
                                                        <span className="flex items-center justify-end gap-4">
                                                            {item.value}
                                                            <span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
                                                                <path opacity="0.4" d="M1 0.800001L6 6L11 0.800001" stroke="#6E6893" strokeLinecap="round" strokeLinejoin="round"/>
                                                            </svg>
                                                            </span>
                                                        </span>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                            <div className="bg-[#F5F5F5] h-12 flex items-center justify-end gap-5 px-5">
                                <span className="text-[13px]">1-6 of 6</span>
                                <span className="flex gap-[65px]">
                                    <button>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
                                            <path opacity="0.4" d="M6.64165 1.6941C7.32719 1.04857 6.24175 0.0264758 5.55621 0.725802L0.528928 5.40591C0.243287 5.67488 0.243287 6.15903 0.528928 6.428L5.55621 11.1619C6.24175 11.8074 7.32719 10.7853 6.64165 10.1398L2.18565 5.94385L6.64165 1.6941Z" fill="#6E6893"/>
                                        </svg>
                                    </button>
                                    <button>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
                                            <path opacity="0.4" d="M0.624218 1.6941C-0.0613203 1.04857 1.02412 0.0264758 1.70966 0.725802L6.73694 5.40591C7.02258 5.67488 7.02258 6.15903 6.73694 6.428L1.70966 11.1619C1.02412 11.8074 -0.0613203 10.7853 0.624218 10.1398L5.08022 5.94385L0.624218 1.6941Z" fill="#6E6893"/>
                                        </svg>
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                }
                {tab === 2 &&
                    <div className="w-full max-w-[1200px] mx-auto">
                        <div className="md:px-10 px-6 py-12 md:pt-16 md:pb-12">
                            <p className="md:text-[64px] text-[32px] font-semibold leading-none">PARTNERS</p>
                            <p className="md:text-[15px] text-[13px] md:px-3 max-md:mt-4">DwETH is a community-led project and its partners include merchants, custodians, exchanges, and DAO members.</p>
                        </div>
                        <div className="bg-[#2379E7]/[0.1] flex max-lg:flex-col lg:px-10 px-5 md:py-9 py-6 gap-10 lg:gap-[85px]">
                            <div className="">
                                <p className="md:text-[24px] text-[18px] font-semibold">NETWORK</p>
                                <div className="flex items-center gap-7 py-5">
                                    <figure><img src="/assets/images/ic-network.svg" alt="" /></figure>
                                    <p className="u-text-gradient md:text-[34px] text-[20px] text-right font-semibold">12,345,678.9101  DwETH</p>
                                </div>
                                <p className="md:text-[20px] text-[16px] text-[#2379E7] font-semibold">DRC20 Token</p>
                            </div>
                            <div className="">
                                <p className="md:text-[24px] text-[18px] font-semibold">CUSTODY</p>
                                <div className="flex items-center gap-7 py-5">
                                    <figure><img src="/assets/images/ic-custody.svg" alt="" /></figure>
                                    <p className="u-text-gradient md:text-[34px] text-[20px] text-right font-semibold">
                                        <span>12,345,678.9101 ETH</span> <br />
                                        <span className="text-right block md:text-[18px] text-[15px]">( $12,345,678.9101)</span>
                                        </p>
                                </div>
                                <p className="md:text-[20px] text-[16px] text-[#2379E7] font-semibold">On-chain Validation</p>
                            </div>
                        </div>
                        <div className="bg-white [filter:drop-shadow(0px_0px_5.438px_rgba(0,_0,_0,_0.20))] rounded-lg py-8 mt-6 ">
                            <div className="overflow-auto">
                                <table className="w-full min-w-[650px] text-left border-collapse [&_tr]:border-b [&_tr]:border-[#6E6893] [&_td]:h-[65px] [&_th]:text-[#6E6893] [&_th]:h-[51px] [&_th]:px-5 md:[&_td]:px-5 [&_td]:px-2 [&_th]:text-[13px]">
                                    <thead>
                                        <tr className="bg-[#F5F5F5]">
                                            <th className="w-[100px]">ACTION</th>
                                            <th className="w-[240px]">DATE & TIME</th>
                                            <th>MERCHANT</th>
                                            <th className="w-[200px] text-right !pr-10">VALUE (DwETH)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td><span className="flex "><img src={item.image} alt="" /></span></td>
                                                    <td className="md:text-[15px] text-[13px] font-medium">{item.date}</td>
                                                    <td className="md:text-[15px] text-[13px] font-medium">{item.merchant}</td>
                                                    <td className="text-right md:text-[15px] text-[13px] font-medium">
                                                        <span className="flex items-center justify-end gap-4">
                                                            {item.value}
                                                            <span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
                                                                <path opacity="0.4" d="M1 0.800001L6 6L11 0.800001" stroke="#6E6893" strokeLinecap="round" strokeLinejoin="round"/>
                                                            </svg>
                                                            </span>
                                                        </span>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                            <div className="bg-[#F5F5F5] h-12 flex items-center justify-end gap-5 px-5">
                                <span className="text-[13px]">1-6 of 6</span>
                                <span className="flex gap-[65px]">
                                    <button>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
                                            <path opacity="0.4" d="M6.64165 1.6941C7.32719 1.04857 6.24175 0.0264758 5.55621 0.725802L0.528928 5.40591C0.243287 5.67488 0.243287 6.15903 0.528928 6.428L5.55621 11.1619C6.24175 11.8074 7.32719 10.7853 6.64165 10.1398L2.18565 5.94385L6.64165 1.6941Z" fill="#6E6893"/>
                                        </svg>
                                    </button>
                                    <button>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
                                            <path opacity="0.4" d="M0.624218 1.6941C-0.0613203 1.04857 1.02412 0.0264758 1.70966 0.725802L6.73694 5.40591C7.02258 5.67488 7.02258 6.15903 6.73694 6.428L1.70966 11.1619C1.02412 11.8074 -0.0613203 10.7853 0.624218 10.1398L5.08022 5.94385L0.624218 1.6941Z" fill="#6E6893"/>
                                        </svg>
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                }
                {tab === 3 &&
                    <div className="w-full max-w-[1200px] mx-auto">
                        <div className="md:px-10 px-6 py-12 md:pt-16 md:pb-12">
                            <p className="md:text-[64px] text-[32px] font-semibold leading-none">PROOF OF ASSETS</p>
                        </div>
                        <div className="bg-[#2379E7]/[0.1] flex max-lg:flex-col lg:px-10 px-5 md:py-9 py-6 gap-10 lg:gap-[85px]">
                            <div className="">
                                <p className="md:text-[24px] text-[18px] font-semibold">NETWORK</p>
                                <div className="flex items-center gap-7 py-5">
                                    <figure><img src="/assets/images/ic-network.svg" alt="" /></figure>
                                    <p className="u-text-gradient md:text-[34px] text-[20px] text-right font-semibold">12,345,678.9101  DwETH</p>
                                </div>
                                <p className="md:text-[20px] text-[16px] text-[#2379E7] font-semibold">DRC20 Token</p>
                            </div>
                            <div className="">
                                <p className="md:text-[24px] text-[18px] font-semibold">CUSTODY</p>
                                <div className="flex items-center gap-7 py-5">
                                    <figure><img src="/assets/images/ic-custody.svg" alt="" /></figure>
                                    <p className="u-text-gradient md:text-[34px] text-[20px] text-right font-semibold">
                                        <span>12,345,678.9101 ETH</span> <br />
                                        <span className="text-right block md:text-[18px] text-[15px]">( $12,345,678.9101)</span>
                                        </p>
                                </div>
                                <p className="md:text-[20px] text-[16px] text-[#2379E7] font-semibold">On-chain Validation</p>
                            </div>
                        </div>
                        <div className="bg-white [filter:drop-shadow(0px_0px_5.438px_rgba(0,_0,_0,_0.20))] rounded-lg py-8 mt-6 ">
                            <div className="overflow-auto">
                                <table className="w-full min-w-[650px] text-left border-collapse [&_tr]:border-b [&_tr]:border-[#6E6893] [&_td]:h-[65px] [&_th]:text-[#6E6893] [&_th]:h-[51px] [&_th]:px-5 md:[&_td]:px-5 [&_td]:px-2 [&_th]:text-[13px]">
                                    <thead>
                                        <tr className="bg-[#F5F5F5]">
                                            <th className="w-[100px]">ACTION</th>
                                            <th className="w-[240px]">DATE & TIME</th>
                                            <th>MERCHANT</th>
                                            <th className="w-[200px] text-right !pr-10">VALUE (DwETH)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td><span className="flex "><img src={item.image} alt="" /></span></td>
                                                    <td className="md:text-[15px] text-[13px] font-medium">{item.date}</td>
                                                    <td className="md:text-[15px] text-[13px] font-medium">{item.merchant}</td>
                                                    <td className="text-right md:text-[15px] text-[13px] font-medium">
                                                        <span className="flex items-center justify-end gap-4">
                                                            {item.value}
                                                            <span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
                                                                <path opacity="0.4" d="M1 0.800001L6 6L11 0.800001" stroke="#6E6893" strokeLinecap="round" strokeLinejoin="round"/>
                                                            </svg>
                                                            </span>
                                                        </span>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                            <div className="bg-[#F5F5F5] h-12 flex items-center justify-end gap-5 px-5">
                                <span className="text-[13px]">1-6 of 6</span>
                                <span className="flex gap-[65px]">
                                    <button>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
                                            <path opacity="0.4" d="M6.64165 1.6941C7.32719 1.04857 6.24175 0.0264758 5.55621 0.725802L0.528928 5.40591C0.243287 5.67488 0.243287 6.15903 0.528928 6.428L5.55621 11.1619C6.24175 11.8074 7.32719 10.7853 6.64165 10.1398L2.18565 5.94385L6.64165 1.6941Z" fill="#6E6893"/>
                                        </svg>
                                    </button>
                                    <button>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
                                            <path opacity="0.4" d="M0.624218 1.6941C-0.0613203 1.04857 1.02412 0.0264758 1.70966 0.725802L6.73694 5.40591C7.02258 5.67488 7.02258 6.15903 6.73694 6.428L1.70966 11.1619C1.02412 11.8074 -0.0613203 10.7853 0.624218 10.1398L5.08022 5.94385L0.624218 1.6941Z" fill="#6E6893"/>
                                        </svg>
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
      </div>
    </main>
  );
}
