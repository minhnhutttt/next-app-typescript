'use client'

export default function Token() {
    return (
        <section className="relative px-5 pt-6 pb-[100px] md:pb-[200px]">
            <div className="w-full max-w-[824px] mx-auto">
                <div className="w-full max-w-[726px] mx-auto">
                    <p className="fade-up md:text-[24px] text-[18px] font-medium text-center tracking-[0.2em]">Token Information</p>
                    <div className="md:mt-10">
                        <table className="fade-up w-full border-collaps border border-white/50 md:text-[18px] text-[14px] font-medium leading-[1.2] [&_td]:h-[60px] [&_td:first-of-type]:text-center [&_td]:px-[30px] [&_td]:border [&_td]:border-white/50 [&_tr:nth-of-type(odd)]:bg-[#EDEDED]/[0.1]">
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
                <div className="md:pt-[300px] pt-[150px]">
                    <div className="fade-up flex justify-center items-center">
                        <img src="/assets/images/diver.png" alt="" />
                    </div>
                    <h4 className="fade-up font-light md:text-[64px] text-[32px] text-center tracking-wide pt-6 md:pt-10 max-md:leading-none">DIVER Chain's advantages</h4>
                    <p className="font-light max-w-[660px] mx-auto w-full md:text-[24px] text-[18px] pt-6 md:pt-10 tracking-widest">
                        There are no fees for sending or receiving tokens through DIVER Wallet Pro, so you can use it for small or frequent transactions without worrying about costs. It also has high-speed processing, allowing for quick transaction confirmation, making it easy to use even for beginners.
                    </p>
                </div>
            </div>
        </section>
    )
}