'use client'

export default function Token() {
  return (
    <section className="relative px-5">
      <div className="w-full max-w-[726px] mx-auto">
        <p className="md:text-[24px] text-[18px] font-medium text-center">Token Information</p>
        <div className="border border-white/50 rounded-[10px] overflow-hidden">
            <table className="w-full border-collapse md:text-[18px] text-[14px] font-medium leading-[1.2] [&_td]:h-[60px] [&_td:first-of-type]:text-center [&_td]:px-[30px] [&_td]:border [&_td]:border-white/50 [&_tr:nth-of-type(odd)]:bg-[#EDEDED]/[0.1]">
                <tbody>
                    <tr>
                        <td>Token Name</td>
                        <td>GATE Coin</td>
                    </tr>
                    <tr>
                        <td>Symbol</td>
                        <td>UGTC</td>
                    </tr>
                    <tr>
                        <td>Total Supply</td>
                        <td>100 million pieces (100,000,000 UGTC)</td>
                    </tr>
                    <tr>
                        <td> Additional issue</td>
                        <td>None (fixed total amount)</td>
                    </tr>
                    <tr>
                        <td>Blockchain</td>
                        <td>DIVER Chain</td>
                    </tr>
                    <tr>
                        <td> Base Currency</td>
                        <td>USDT (stablecoin)</td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
    </section>
  )
}