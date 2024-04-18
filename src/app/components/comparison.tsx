
const Comparison = () => {
  return (
    <section className="bg-[#7FFF00] pt-[60px] md:pt-[120px] px-5">
        <div className="w-full max-w-[1320px] mx-auto bg-[#101010] rounded-[30px] text-white md:pt-14 md:pb-[66px] relative">
            <div className="w-full max-w-[1130px] mx-auto">
                <p className="text-center md:text-[52px] text-[26px] font-black tracking-[0.4em]">徹底比較！</p>
                <div className="flex justify-center items-end md:text-[48px] text-[24px] font-black tracking-[0.35em] mt-5 md:mt-9">
                    紙名刺
                    <span className="md:text-[28px] text-[14px] text-[#E40D2F] mx-5 leading-[1.7]">VS</span>
                    NFT名刺
                </div>
                <p className="text-center md:text-[18px] text-[12px] font-bold tracking-[0.2em] md:mt-2 mt-1">
                    従来の名刺交換で相手に覚えてもらえる自信はありますか？<br />
                    NFT名刺なら...
                </p>
                <div className="flex md:mt-10 mt-5 gap-10">
                    <div className="text-white leading-tight">
                        <p className="md:text-[98px] text-[49px] font-black tracking-widest">比較1</p>
                        <p className="md:text-[24px] text-[14px] font-bold tracking-[0.5em] ml-2">Comparison</p>
                    </div>
                    <div className="flex items-center justify-between flex-1">
                        <figure>
                            <img src="/images/nl.png" alt="" />
                        </figure>
                        <span className="md:text-[48px] text-[24px] font-black text-white tracking-[0.2em]">印象:Impression</span>
                        <figure>
                            <img className="rotate-180" src="/images/nl.png" alt="" />
                        </figure>
                    </div>
                </div>
                <div className="flex justify-center md:mt-12 sticky bottom-[30px]">
                    <a href="" className="relative w-[380px] h-[80px] flex items-center justify-center bg-white rounded-[70px] [box-shadow:0px_0px_10px_0px_rgba(255,_255,_255,_0.50)] outline-1 outline outline-[#000] md:outline-offset-[-5px] outline-offset-[-3px] md:text-[20px] text-[16px] font-black text-black gap-3 tracking-[0.25em]"><span>VS紙名刺の結果を見る</span><img className="absolute right-3" src="/images/ic.png" alt="" /></a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Comparison
