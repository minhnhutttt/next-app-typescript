"use client";


const data = [
    {
        image: '/assets/images/ic-reason-01.png',
        text: '多くのNFTが短期間で急激に価格が上昇し、その後大幅に価値を失うことがあったため、NFTはお金儲けの道具と思われている方もいます。',
        explain: 'しかし今は適正価格で取引されており、真の価値を見極めた投資や収集が可能になっています。'
    },
    {
        image: '/assets/images/ic-reason-02.png',
        text: 'NFTは新しい技術であるため、ユーザーが詐欺に遭うリスクが高いと思われている方もいます。',
        explain: 'しかし、取引プラットフォームやウォレットのセキュリティが強化され、安全に取引できる環境が整ってきています。'
    },
    {
        image: '/assets/images/ic-reason-03.png',
        text: 'NFT市場に参加するためには、暗号通貨やデジタルウォレットの知識が必要であり、この技術的ハードルが多くの人々にとって参加の障壁となっています。',
        explain: 'しかし、使いやすいプラットフォームが開発され、誰でも簡単にアクセスできるようになりつつあります。'
    },
]

const Story = () => {
  return (
    <section className="relative px-5">
        <div className="w-full md:max-w-[1360px] max-w-[440px] mx-auto md:pt-[60px] pt-[140px]">
            <div className="flex pl-[3.333vw] dt:pl-12">
                <div className="relative">
                    <span data-scroll className="ani-poyoyon2 animation-500 absolute left-[150px] md:left-[19.444vw] dt:left-[280px] w-[190px] md:w-[20.069vw] dt:w-[289px] top-[-100px] md:top-[-6.667vw] dt:top-[-96px]">
                        <img src="/assets/images/img-bubble.png" alt="でもNFTってなんか良くないって聞いたことがあるよ…" />
                    </span>
                    <figure data-scroll className="ani-fade-up">
                        <img className="max-md:w-[200px] max-dt:w-[22.569vw]" src="/assets/images/img-character.png" alt="" />
                    </figure>
                </div>
            </div>
            <div className="flex flex-wrap justify-center dt:gap-5 gap-6 md:gap-[1.389vw] mt-10 relative">
                <span data-scroll className="ani-fade-up absolute left-0 -top-12 z-10 max-md:w-[340px] max-dt:w-[29.514vw]">
                    <img className="animate-[anim-bounce_0.6s_infinite_ease-in-out]" src="/assets/images/bubble-02.png" alt="NFTが誤解されている理由" />
                </span>
                {data.map((item, index) => (
                    <div data-scroll className="ani-fade-up max-md:w-[440px] aspect-square md:w-[30.556vw] dt:w-[440px] rounded-[20px] flex items-center justify-center flex-col relative" key={index}>
                        <button type="button" className="group w-full h-full inline-block [perspective:1000px] text-left duration-150">
                        <div className="group-focus-within:[transform:rotate3d(1,_-1,_0,_180deg)] w-full h-full relative cursor-pointer duration-[600ms] ease-in-out [transform-style:preserve-3d]">
                            <div className="front z-10 absolute top-0 left-0 w-full h-full [backface-visibility:hidden] [transform:rotateX(0deg)] flex items-center justify-center bg-white rounded-[20px] p-[1.389vw] dt:p-5">
                                <div className="w-full h-full flex items-center justify-center"><img className="max-md:w-[270px]" src={item.image} alt="" /></div>
                                <div className="absolute inset-0 flex items-center justify-center md:p-[2.778vw] dt:p-10 p-6 md:text-[1.389vw] dt:text-[20px] text-[16px] text-[#050C9C] leading-[2]">
                                    {item.text}
                                </div>
                                <span className="absolute right-0 -bottom-4 animate-[poyopoyo_2s_ease-out_infinite]">
                                    <img className="max-md:w-[80px] max-dt:w-[8.958vw]" src="/assets/images/img-cursor.png" alt="" />
                                </span>
                            </div>
                            <div className="[transform:rotate3d(1,_-1,_0,_180deg)] absolute top-0 left-0 w-full h-full [backface-visibility:hidden] flex items-center justify-center bg-[#3572EF] rounded-[20px]">
                                <p className="md:p-[2.778vw] dt:p-10 p-6 md:text-[1.389vw] dt:text-[20px] text-[16px] text-white text-left leading-[2]">
                                {item.explain}
                                </p>
                            </div>
                        </div>
                        </button>
                    </div>
                ))}
                
            </div>
        </div>
    </section>
  );
};

export default Story;
