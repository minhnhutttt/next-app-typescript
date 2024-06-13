
  const Simulation = () => {
    return (
      <section className="overflow-hidden md:pt-[84px] pt-[60px] relative md:pb-[235px] pb-[140px]">
        <div className="text-center md:text-[48px] text-[24px] font-medium">
            供養料比較シミュレーション
        </div>
        <span className="block gradient-04 h-1.5 md:h-2.5"></span>
        <div className="flex flex-wrap justify-center gap-3 w-full md:max-w-[1440px] max-w-[540px] mx-auto px-4 md:mt-[65px] mt-9">
            <div className="w-[460px] rounded-[3px] flex flex-col">
                <p className="h-[78px] flex items-center justify-center text-white md:text-[26px] text-[20px] font-bold bg-[#2E2E2E]">定 価</p>
                <div className="divide-y divide-white flex-1">
                    <div className="bg-[#8EC5FC] flex items-center justify-center flex-col md:py-12 py-8">
                        <p className="flex items-center gap-2">
                            <figure>
                                <img src="/assets/images/ic-01.svg" alt="" />
                            </figure>
                            <span className="md:text-[20px] text-[16px] font-medium">メタバースペット供養</span>
                        </p>
                        <p className="md:text-[26px] text-[20px] font-bold">初期費用 : <span className="md:text-[42px] text-[24px]">250,000</span>円<span className="md:text-[20px] text-[16px]">(税抜)</span></p>
                    </div>
                    <div className="bg-[#8EC5FC]/[0.7] flex items-center justify-center flex-col md:py-12 py-8">
                        <p className="flex items-center gap-2">
                            <figure>
                                <img src="/assets/images/ic-02.svg" alt="" />
                            </figure>
                            <span className="md:text-[20px] text-[16px] font-medium">2Dアバター</span>
                        </p>
                        <p className="md:text-[26px] text-[20px] font-bold">制作費 : <span className="md:text-[42px] text-[24px]">50,000</span>円<span className="md:text-[20px] text-[16px]">(税抜)</span></p>
                    </div>
                    <div className="bg-[#D8EBFF] flex items-center justify-center flex-col md:py-10 py-8">
                        <p className="md:text-[26px] text-[20px] font-bold">総額 : <span className="md:text-[62px] text-[32px]">300,000</span><span className="md:text-[30px] text-[22px]">円(税抜)</span></p>
                    </div>
                </div>
            </div>
            <div className="w-[460px] rounded-[3px] flex flex-col">
                <p className="h-[78px] flex items-center justify-center text-white md:text-[26px] text-[20px] font-bold gradient-03">メモリアルモニター価格</p>
                <div className="relative md:pt-10 pt-7 px-5 flex-1 pb-5">
                    <span className="absolute inset-0 gradient-02 opacity-30"></span>
                    <p className="text-center md:text-[32px] text-[24px] font-bold">総 額</p>
                    <p className="text-center md:text-[32px] text-[24px] font-bold leading-[1.1]">
                        <span className="md:text-[62px] text-[32px]">180,000</span><span className="md:text-[40px] text-[24px]">円</span>(税抜)
                    </p>
                    <div className="md:text-[16px] text-[12px] font-bold w-full max-w-[373px] mx-auto md:mt-10 mt-6 space-y-2">
                        <p className="flex gap-[3px]">
                            <span><img src="/assets/images/ic-check-sub.png" alt="" /></span>
                            <span>メタバースペット供養初期費用10万円オフ</span>
                        </p>
                        <p className="flex gap-[3px]">
                            <span><img src="/assets/images/ic-check-sub.png" alt="" /></span>
                            <span>2Dアバター製作費2万円オフ</span>
                        </p>
                    </div>
                    <div className="border border-[#1B0220] p-5 md:mt-7 mt-5">
                        <p className="md:text-[20px] text-[16px] font-bold border-b border-[#1B0220] pb-2.5">3回払いの場合</p>
                        <p className="md:text-[18px] text-[14px] font-bold py-2.5">総額21万円＋税</p>
                        <p className="md:text-[16px] text-[13px] font-medium leading-[1.8]">
                        メモリアルモニターとしてのお申し込み特典は、割引クーポンとは別に最大32万円相当＋プライスレスな特典がセットされており、ペット供養の体験をより特別なものとしていただけます。
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-[460px] rounded-[3px] flex flex-col">
                <p className="h-[78px] flex items-center justify-center text-white md:text-[26px] text-[20px] font-bold bg-[#2E2E2E]">2年目以降継続費用</p>
                <div className="relative md:pt-10 pt-7 px-5 flex-1 bg-[#8EC5FC]/[0.3] pb-5">
                    <p className="text-center md:text-[32px] text-[24px] font-bold">総 額</p>
                    <p className="text-center md:text-[32px] text-[24px] font-bold leading-[1.1]">
                        <span className="md:text-[62px] text-[32px]">30,000</span><span className="md:text-[40px] text-[24px]">円</span>(税抜)
                    </p>
                    <div className="md:text-[16px] text-[12px] font-bold w-full max-w-[380px] mx-auto md:mt-10 mt-6 space-y-2">
                        <p className="flex gap-[3px]">
                            <span><img src="/assets/images/ic-check-sub.png" alt="" /></span>
                            <span>メタバース供養所 年間管理料12,000円(税抜)</span>
                        </p>
                        <p className="flex gap-[3px]">
                            <span><img src="/assets/images/ic-check-sub.png" alt="" /></span>
                            <span>鳴き声オプションの個別空間年間管理料18,000円</span>
                        </p>
                    </div>
                    <div className="border border-[#8EC5FC]/[0.3] p-5 md:mt-7 mt-5">
                        <p className="md:text-[20px] text-[16px] font-bold border-b border-[#1B0220] pb-2.5">一括銀行振込 10% オフ</p>
                        <p className="md:text-[16px] text-[13px] font-medium leading-[1.4] pt-2.5">
                        一括銀行振込をいただければさらに10％オフさせていただきます。毎月の電話代と同じくらいの月額5,000円(税抜)で継続できます。<br />
                        <br />
                        家族同然のペットを弔うあなた様のお気持ちに、少しでも多く寄り添えるようコスト面も絞って運営に努めております。
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="px-5">
            <div className="w-full md:max-w-[980px] max-w-[440px] mx-auto relative md:mt-[70px] mt-12">
                <span className="absolute top-0 left-0"><img className="max-md:max-w-[100px]" src="/assets/images/frame.png" alt="" /></span>
                <p className="md:text-[22px] text-[16px] font-bold py-6 px-7 lg:py-[53px] lg:px-[64px] leading-[2]">
                今回のメモリアルモニターにのみ適用される18大特典を通じて、あなた様とペットとの絆は新たな形で結ばれていきます。その体験が、あなた様にとってかけがえのない宝物となれば、私たちにとってこの上ない喜びでございます。
                </p>
                <span className="absolute bottom-0 right-0"><img className="max-md:max-w-[100px] rotate-180" src="/assets/images/frame.png" alt="" /></span>
            </div>
        </div>
        <span className="absolute bottom-0 right-0 max-md:w-[55vw]">
            <img className="" src="/assets/images/simulation-animal.png" alt="" />
        </span>
      </section>
    );
  };
  
  export default Simulation;
  