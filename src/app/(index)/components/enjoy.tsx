"use client";

const data = [
    {
        image: '/assets/images/enjoy-ic-01.png',
        title: '決められた日時・場所でしか受け取れない限定NFTトレカをゲットせよ！',
        content: (<>
        大好きなアイドルの限定トレカは、明日の14:00-16:00にあのお店に行かないともらえないらしい…行くしかないでしょ！<br />
        これはまさに推しから課せられた、推しのためのサブクエスト！</>)
    },
    {
        image: '/assets/images/enjoy-ic-02.png',
        title: 'NFTトレカはスマホで簡単管理！',
        content: (<>
        受け取ったNFTをすぐさまコレクション！<br />簡単操作で推しのコレクションを眺めたり、友達と見せ合ったり、SNSに投稿することができる！</>)
    },
    {
        image: '/assets/images/enjoy-ic-03.png',
        title: '交換や売買も！',
        content: (<>
        NFTだから交換や売買ができる！<br />レアNFTトレカに価値が付く可能性も…！<br />マーケットプレイスに出品するも良し、友達にあげるのも良し！<br />NFT交換時の送受信は無料です。</>)
    },
    {
        image: '/assets/images/enjoy-ic-04.png',
        title: '投げ銭も！',
        content: (<>
        NFTトレカに記載されたアイドルのウォレットに直接コインを投げ銭すると、特別限定NFTトレカがアイドルのウォレットから送られてくる！</>)
    },
]

const Enjoy = () => {
  return (
    <section id="enjoy" className="relative md:mt-[200px] mt-[120px] px-3">
        <div className="w-full max-w-[1360px] mx-auto bg-[url('/assets/images/enjoy-bg.png')] bg-cover bg-white md:rounded-[70px] rounded-[32px] px-3 md:pb-[173px] pb-[100px]">
            <div className="h-px"></div>
            <div data-scroll className="ani-fade-up md:-mt-[47px] -mt-[37px] flex justify-center"><h3><img className="max-md:h-[80px]" src="/assets/images/enjoy-title.png" alt="楽しみ方" /></h3></div>
            <div className="flex flex-wrap justify-center md:gap-[80px] gap-10 md:mt-24 mt-14">
                {data.map((item,index) => (
                    <div data-scroll className="ani-fade-up size-[320px] md:size-[590px] bg-[url('/assets/images/enjoy-frame.png')] [&:nth-of-type(2)]:bg-[url('/assets/images/enjoy-frame-02.png')] [&:nth-of-type(3)]:bg-[url('/assets/images/enjoy-frame-02.png')] bg-cover flex flex-col items-center md:pt-[70px] pt-6" key={index}>
                        <figure>
                            <img className="max-md:w-[80px]" src={item.image} alt="" />
                        </figure>
                        <div className="w-full md:max-w-[428px] max-w-[260px] md:mt-[30px] mt-3">
                            <div className="flex justify-center">
                                <h5 className="md:text-[24px] text-[15px] font-black">{item.title}</h5>
                            </div>
                            <div className="md:text-[18px] text-[12px] mt-2 font-normal flex justify-center">
                                <p  className="md:max-w-[380px] max-w-[230px]">{item.content}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Enjoy;
