"use client";


const data = [
    {
        image: '/assets/images/ideas-img-01.png',
        title: '好きなアイドルのNFTをコレクション！',
        content: (<>
        大好きな推しのトレカを簡単コレクション！<br />かさばらず、色褪せない！受け取った思い出もそのままコレクションできます。</>)
    },
    {
        image: '/assets/images/ideas-img-02.png',
        title: '実物の商品との交換が可能',
        content: (<>
        握手会に行き、NFTを見せることで実際の商品と交換も！</>),
        example: "限定NFTトレカ所有者には実物のトレカをプレゼント！など"
    },
    {
        image: '/assets/images/ideas-img-03.png',
        title: '限定特別特典をゲット！',
        content: (<>NFT取得時にはなかった特典が後からつくことも！<br />いつ特典がもらえるか分からない推しのNFTは、今すぐコンプリートを目指そう！</>),
        example: "結成10周年記念に10枚のNFTトレカを持ってる人に限りサイン入り記念品をプレゼント！など"
    },
]

const Ideas = () => {
  return (
    <section className="relative md:mt-[200px] mt-[120px]">
        <div className="w-full mx-auto bg-[url('/assets/images/ideas-bg.png')] bg-[length:100%_100%] bg-center px-3 md:pb-[173px] pb-[100px]">
            <div className="h-px"></div>
            <div className="md:-mt-[47px] -mt-[37px] flex justify-center"><h3><img className="max-md:h-[100px]" src="/assets/images/ideas-title.png" alt="お得がいっぱい" /></h3></div>
            <div className="flex flex-wrap justify-center md:gap-[90px] gap-10 md:mt-14 mt-14">
                <div className="md:w-[610px] border-black border-[10px] rounded-[60px] bg-white overflow-hidden">
                    <figure>
                        <img src="/assets/images/ideas-img-01.png" alt="" />
                    </figure>
                    <div className="w-full px-8 md:mt-10">
                        <h5 className="md:text-[24px] text-[15px] font-black text-center">好きなアイドルのNFTをコレクション！</h5>
                        <div className="md:text-[18px] text-[12px] mt-2 font-normal flex">
                        大好きな推しのトレカを簡単コレクション！<br />かさばらず、色褪せない！受け取った思い出もそのままコレクションできます。
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Ideas;
