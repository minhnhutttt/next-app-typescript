"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const data = [
    {
        id: '1',
        number: '/assets/images/product-01.svg', 
        image: '/assets/images/img-product-01.png',
        title: (<>軍事規格で作られた <br />最強のストレージ！<br />DIVER Storage</>),
        news: (<>それは<span className="text-[#FEEF01] underline">軍事レベルで暗号化された分散型の最強オンラインストレージ</span>だから</>),
        articles: [
            {
                imageArticle: '/assets/images/img-product-01-article-01.png',
                titleArticle: '軍事レベルの暗号化',
                textArticke: (<>データは、多くの国や組織によって認証され、<span className="underline">最も機密性の高いデータを保護できる暗号化アルゴリズムであるAES-256で暗号化</span>されています。<br />現在のコンピュータ技術では、実際的な時間内にAES-256を破ることはほぼ不可能です。</>)
            },
            {
                imageArticle: '/assets/images/img-product-01-article-02.png',
                titleArticle: '分散型',
                textArticke: (<>データは<span className="underline">地理的に分散した複数の拠点に保存</span>されます。<br />そのため<span className="underline">一箇所の拠点にトラブルが起きた場合も常に安定して稼働</span>します。</>)
            },
        ],
        reasons: [
            {
                reason: 'データ量の増加:デジタルデータの生成量が増加しており、企業や個人が保存するデータ量も増加しています。'
            },
            {
                reason: '需要の増加:データの共有とアクセスが重要であり、オンラインストレージの需要が増加します。'
            },
            {
                reason: '高セキュリティ:サイバー攻撃のリスクが高まる中で、安全にデータを保存できるオンラインストレージの需要が増加しています。'
            },
            {
                reason: 'コストパフォーマンス:壊れることがない買い切り型なので、早く使い始めるほどお得です。'
            },
        ]
    },
    {
        id: '2',
        number: '/assets/images/product-02.svg', 
        image: '/assets/images/img-product-02.png',
        title: (<>QRコードの次はこれ！触れるだけでNFTを<br />簡単取得！DIVER Tag</>),
        news: (<>それは駅の改札の様に<span className="text-[#FEEF01] underline font-bold">スマートフォンでタッチするだけで、NFTの受け取りや現物資産の所有の証明ができる</span>から</>),
        articles: [
            {
                imageArticle: '/assets/images/img-product-02-article-01.png',
                titleArticle: '「触れるだけ」簡単アクション',
                textArticke: (<>とても便利なQRコードですが、カメラアプリを立ち上げて撮影するのが手間です。<br />その点DIVER Tagはスマートフォンをタップするだけ！</>)
            },
            {
                imageArticle: '/assets/images/img-product-02-article-02.png',
                titleArticle: '「触れるだけ」NFTの受取',
                textArticke: (<>マーケットプレイスでのNFTの検索や、取引手数料の確認、支払いなどの複数のステップが不要です。</>)
            },
        ],
        reasons: [
            {
                reason: '多用途：DIVER TagはNFTの受け取りや、所有物の証明など、さまざまな用途に利用できます。'
            },
            {
                reason: '高いセキュリティ：DIVER TagはNFC(短距離通信) 技術を採用しており、情報の漏洩リスクが低く、セキュリティが強化されているため、機密情報のやり取りにも適しています。'
            },
            {
                reason: 'NFCの普及：多くのスマートフォンがNFC機能を標準搭載しているため、ユーザーがすぐに利用できる環境が整っています。'
            },
            {
                reason: 'ユーザーの積極的な関与：スマートフォンをタッチするだけという手軽さがユーザーの関心を引き、参加意欲を高める効果があります。'
            },
        ]
    },
    {
        id: '3',
        number: '/assets/images/product-03.svg', 
        image: '/assets/images/img-product-03.png',
        title: (<>複雑なアドレスを <br />超絶簡単管理！<br />DIVER Domain</>),
        news: (<>それは円周率3.1415...=「π」と呼ぶように、<span className="text-[#FEEF01] underline font-bold">複雑なウォレットアドレスを口頭で伝えられるくらい簡単な名前にできる</span>から</>),
        articles: [
            {
                imageArticle: '/assets/images/img-product-03-article-01.png',
                titleArticle: 'ウォレットアドレスに好きな名前を付けられる',
                textArticke: (<>覚えやすく、伝えやすい名前に変更することで、ウォレットアドレスの利用が簡単になります。</>)
            },
            {
                imageArticle: '/assets/images/img-product-03-article-02.png',
                titleArticle: 'コインやNFTの送り間違えを防ぐことができる',
                textArticke: (<>シンプルで明確なアドレス名にすることで、送金時の入力ミスや送り間違えのリスクを大幅に減らせます。</>)
            },
        ],
        reasons: [
            {
                reason: '利便性:ユーザーがウォレットを使いやすくなります。'
            },
            {
                reason: '安全性の向上:シンプルな名前にすることで、送金時のミスを減らせます。'
            },
            {
                reason: '覚えやすさ：簡単な名前にすることで、ウォレットアドレスを覚えやすく、愛着の湧くものになります。'
            },
            {
                reason: 'ユーザーの積極的な関与：スマートフォンをタッチするだけという手軽さがユーザーの関心を引き、参加意欲を高める効果があります。'
            },
        ]
    }
]

const Product = () => {
  const ref = useScrollAnimations();
function getBackground(id: string): string {
    const colorMap: { [key: string]: string } = {
        '1': 'bg-[#18539E]',
        '2': 'bg-[#228FCE]',
        '3': 'bg-[#7ACFF8]'
    };

    return colorMap[id] || 'bg-[#18539E]';
}
  return (
    <section ref={ref} className="relative md:pt-[110px] pt-20 md:pb-[170px] pb-28">
        <div className="fade-up text-center tracking-widest">
            <p className="md:text-[24px] text-[18px] text-[#00053A] font-inter">Product</p>
            <h3 className="font-medium md:text-[56px] text-[32px] tracking-[0.1em]">こんな商品を販売できます！</h3>
        </div>
        <div className="md:mt-[80px] mt-12 pt-[66px]">
        {data.map((item, index)=> (
            <div className={`${getBackground(item.id)} group md:pt-[100px] pt-[60px] md:last:pb-[118px] md:pb-[189px] pb-[100px] md:rounded-t-[70px] rounded-t-[50px] px-5 text-white last:text-[#00053A] -mt-[66px]`} key={index}>
                <div className="w-full max-w-[1360px] mx-auto relative">
                    <span className="absolute top-[-30px] md:top-[-70px] xl:top-0 group-odd:right-0 group-even:left-0">
                        <img className="fade-up max-md:h-[80px] max-xl:h-[150px]" src={item.number} />
                    </span>
                    <div className="flex group-even:flex-row-reverse max-xl:flex-col max-xl:items-center max-xl:group-even:flex-col xl:gap-20 md:pt-[100px] pt-[60px] relative z-10">
                        <figure className="fade-up ">
                            <img src={item.image} alt="" />
                        </figure>
                        <div className="max-w-[656px]">
                            <h4 className="fade-up xl:pt-[100px] pt-[60px] md:pb-[60px] pb-8 md:text-[56px] text-[28px] font-bold px-4 tracking-wide">
                                {item.title}
                            </h4>
                            <div className="fade-up pt-4 flex gap-5">
                                <div className="md:w-[214px] w-[140px] h-[39px] md:h-[60px] bg-[url('/assets/images/product-news.png')] bg-[length:100%_100%] flex items-center justify-center md:text-[20px] text-[13px] text-white rotate-[-10deg] tracking-widest">どこが革新的？</div>
                                <p className="flex-1 break-words md:text-[18px] text-[14px]">{item.news}</p>
                            </div>
                            <div className="flex xl:gap-[54px] gap-5 md:mt-12 mt-8">
                                {item.articles.map((article, index)=>(
                                    <div className="fade-up flex-1" key={index}>
                                        <figure>
                                            <img src={article.imageArticle} alt="" />
                                        </figure>
                                        <p className="text-center md:text-[20px] text-[16px] font-bold mt-2 md:mt-4">{article.titleArticle}</p>
                                        <p className="md:text-[16px] text-[13px] md:mt-5 mt-3 leading-[1.65]">{article.textArticke}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="w-full max-w-[1280px] mx-auto relative p-5 pb-8 md:mt-8 mt-6 max-md:bg-white md:bg-[url('/assets/images/cutbox.png')] bg-[length:100%_100%]">
                        <div className="md:p-7">
                            <div className="w-full max-w-[1098px] mx-auto">
                                <div className="fade-up flex items-center gap-[22px] md:px-3">
                                    <span className="flex-1 h-4 bg-[linear-gradient(120deg,_#ffffff_35.71%,_#18539e_35.71%,_#18539e_50%,_#ffffff_50%,_#ffffff_85.71%,_#18539e_85.71%,_#18539e_100%)] [background-size:7.00px_12.12px]"></span>
                                    <p className="md:text-[20px] font-bold text-[16px] text-[#00053A]">売れる理由</p>
                                    <span className="flex-1 h-4 bg-[linear-gradient(120deg,_#ffffff_35.71%,_#18539e_35.71%,_#18539e_50%,_#ffffff_50%,_#ffffff_85.71%,_#18539e_85.71%,_#18539e_100%)] [background-size:7.00px_12.12px]"></span>
                                </div>
                                <div className="grid md:grid-cols-2 md:mt-9 mt-6 gap-6 md:gap-10 w-full max-w-[1060px] mx-auto">
                                    {item.reasons.map((item, index)=>(
                                        <div className="fade-up flex gap-3" key={index}>
                                            <figure>
                                                <img className="max-md:w-8" src="/assets/images/ic-check.svg" alt="" />
                                            </figure>
                                            <p className="md:text-[16px] text-[13px] flex-1 text-[#00053A]">{item.reason}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))}
        </div>
        <div className="fade-up flex items-center justify-center md:-mt-12 -mt-8">
            <img className="max-md:max-w-[200px]" src="/assets/images/triangle.png" alt="" />
        </div>
        <div className="flex items-center justify-center px-5 mt-9">
            <div className="fade-up w-full md:max-w-[921px] max-w-[440px] md:h-[257px] h-[200px] bg-[url('/assets/images/bg-box.png')] bg-cover flex items-center justify-center p-3">
            <div className="w-full h-full border border-white flex items-center justify-center">
                <p className="md:text-[44px] text-[20px] font-bold text-white text-center leading-[2] tracking-widest">さらに<span className="md:text-[54px] text-[24px] text-[#00053A] bg-[#FEEF01] leading-[1.2] tracking-[0.1em] inline-block">革新的</span>で<span className="md:text-[54px] text-[24px] text-[#00053A] bg-[#FEEF01] leading-[1.2] tracking-[0.1em] inline-block">最先端</span>の<br />サービスを続々追加予定！</p>
            </div>
            </div>
        </div>
    </section>
  );
};

export default Product;
