"use client";

const Ideas = () => {
  return (
    <section className="relative md:mt-[200px] mt-[120px]">
        <div className="w-full mx-auto bg-[url('/assets/images/ideas-bg.png')] dt:bg-[length:100%_100%] bg-cover bg-center px-5 md:pb-[130px] pb-[60px]">
            <div className="h-px"></div>
            <div className="md:-mt-[47px] -mt-[37px] flex justify-center"><h3><img className="max-md:h-[80px]" src="/assets/images/ideas-title.png" alt="お得がいっぱい" /></h3></div>
            <div className="flex flex-wrap justify-center md:gap-x-[90px] md:mt-14 mt-10 max-[1366px]:gap-20 max-md:gap-7">
                <div className="md:w-[610px] md:min-h-[552px] border-black border-[5px] md:border-[10px] md:rounded-[60px] rounded-[32px] bg-white overflow-hidden">
                    <figure>
                        <img src="/assets/images/ideas-img-01.png" alt="" />
                    </figure>
                    <div className="md:px-8 px-5">
                        <div className="w-full md:pt-10 pt-6 md:pb-14 pb-6 max-w-[450px] mx-auto">
                            <h5 className="md:text-[24px] text-[15px] font-black">好きなアイドルのNFTをコレクション！</h5>
                            <div className="md:text-[18px] text-[12px] md:mt-5 mt-3 font-medium flex">
                            大好きな推しのトレカを簡単コレクション！<br />かさばらず、色褪せない！受け取った思い出もそのままコレクションできます。
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:w-[610px] md:min-h-[552px] border-black border-[5px] md:border-[10px] md:rounded-[60px] rounded-[32px] bg-white overflow-hidden">
                    <figure>
                        <img src="/assets/images/ideas-img-02.png" alt="" />
                    </figure>
                    <div className="md:px-8 px-3">
                        <div className="w-full md:pt-10 pt-6 md:pb-6 pb-4 max-w-[543px] mx-auto">
                            <h5 className="md:text-[24px] text-[15px] font-black text-center">実物の商品との交換が可能！</h5>
                            <div className="md:text-[18px] text-[13px] md:mt-5 mt-3 font-medium pb-2 px-2 md:px-4">
                            握手会に行き、NFTを見せることで実際の商品と交換も！
                            </div>
                            <div className="border-t border-dotted border-[#7E7E7E] flex items-center justify-center gap-1 p-4">
                                <p className="size-[32px] md:size-[42px] border border-[#181818] rounded-full flex items-center justify-center">例</p>
                                <p className="md:text-[16px] text-[13px] flex-1">限定NFTトレカ所有者には実物のトレカをプレゼント！など</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:w-[610px] md:min-h-[552px] border-black border-[5px] md:border-[10px] md:rounded-[60px] rounded-[32px] bg-white overflow-hidden min-[1366px]:-mt-5">
                    <figure>
                        <img src="/assets/images/ideas-img-03.png" alt="" />
                    </figure>
                    <div className="md:px-8 px-3">
                        <div className="w-full md:pt-5 pt-3 pb-4 max-w-[543px] mx-auto">
                            <h5 className="md:text-[24px] text-[15px] font-black text-center">限定特別特典をゲット！</h5>
                            <div className="md:text-[18px] text-[13px] mt-2 font-medium pb-1 px-2 md:px-4">
                            NFT取得時にはなかった特典が後からつくことも！<br />いつ特典がもらえるか分からない推しのNFTは、今すぐコンプリートを目指そう！
                            </div>
                            <div className="border-t border-dotted border-[#7E7E7E] flex items-center justify-center gap-1 p-2">
                                <p className="size-[32px] md:size-[42px] border border-[#181818] rounded-full flex items-center justify-center">例</p>
                                <p className="md:text-[16px] text-[13px] flex-1">結成10周年記念に10枚のNFTトレカを持ってる人に限りサイン入り記念品をプレゼント！など</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex justify-center items-center md:-mt-[70px] -mt-[32px] px-5">
            <img src="/assets/images/ideas-banner.png" alt="" />
        </div>
    </section>
  );
};

export default Ideas;
