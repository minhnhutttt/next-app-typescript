export default function Token() {
  return (
    <section className="relative z-10 px-5 md:pt-[70px] pt-[50px]">
       <div className="w-full max-w-[872px] mx-auto flex items-center gap-8 max-md:flex-col">
            <p className="md:text-[24px] text-[18px] font-medium italic tracking-[0.15em] max-md:text-center">Token Information</p>
            <div className="flex-1">
                <table className="border-collapse w-full md:text-[16px] text-[14px] [&_td:nth-of-type(1)]:font-medium [&_td]:h-[60px] [&_td]:border [&_td]:border-white/50 border border-white/50 [&_td]:px-5">
                    <tbody>
                        <tr>
                            <td>Token Name</td>
                            <td>TEX Coin</td>
                        </tr>
                        <tr>
                            <td>Symbol</td>
                            <td>TEXC</td>
                        </tr>
                        <tr>
                            <td>Total Supply</td>
                            <td>100 million (100,000,000 TEXC)</td>
                        </tr>
                        <tr>
                            <td>Additional issue</td>
                            <td>None (fixed total amount)</td>
                        </tr>
                        <tr>
                            <td>Blockchain</td>
                            <td>DIVER Chain</td>
                        </tr>
                    </tbody>
                </table>
            </div>
       </div>
    </section>
  )
}