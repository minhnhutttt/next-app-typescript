"use client";

import useScrollAnimations from "@/app/hooks/useScrollAnimations";

const data = [
    {
        case: '1',
        image: '/assets/images/feature-img-01.png',
        title: (<>アーティストの飛躍の物語</>),
        content: (<>
            若手イラストレーターのAは、これまではSNSで作品を投稿しても「いいね」を集めるだけだった。<br />
            しかし、OPEN FAVE上で作品をNFTとして発表すると、一番乗りのファンが作品を所有し、コミュニティでその価値が高まっていく。<br />
            ファンたちは「ただ見る」から「共に育む」感覚を味わい、Aは得たFaveコインで次の大作の制作に着手する。<br />
            この循環が、アーティストとファンの関係を深め、才能が世界へ飛び出すための足がかりになる。
        </>)
    },
    {
        case: '2',
        image: '/assets/images/feature-img-02.png',
        title: (<>音楽クリエイターの新たな収益モデル</>),
        content: (<>
            若手イラストレーターのAは、これまではSNSで作品を投稿しても「いいね」を集めるだけだった。<br />
            しかし、OPEN FAVE上で作品をNFTとして発表すると、一番乗りのファンが作品を所有し、コミュニティでその価値が高まっていく。<br />
            ファンたちは「ただ見る」から「共に育む」感覚を味わい、Aは得たFaveコインで次の大作の制作に着手する。<br />
            この循環が、アーティストとファンの関係を深め、才能が世界へ飛び出すための足がかりになる。
        </>)
    },
    {
        case: '3',
        image: '/assets/images/feature-img-03.png',
        title: (<>3Dアーティストが紡ぐ立体コミュニティ</>),
        content: (<>
            3DモデラーのCは、自作のキャラクターやオブジェクトをSNSで公開しても、スクロールですぐ消えてしまう虚しさを感じていた。<br />
            Openfaveで3DモデルをNFT化して販売すると、コレクターはそのモデルを所有できるだけでなく、自分のVRギャラリーで飾ったり、別のNFTプロジェクトと組み合わせたりできる。<br />
            モデルが世界中で“使われ”、価値を増すたび、Cは創作に没頭できる環境を手に入れる。
        </>)
    },
    {
        case: '4',
        image: '/assets/images/feature-img-04.png',
        title: (<>ファン同士の交流から生まれる新たな価値</>),
        content: (<>
            ファッション写真が好きなユーザーDは、OPEN FAVEでお気に入りの作品をNFTとして購入した。<br />
            ある日、その作品がほかのコレクターにも注目され、DはNFTを交換することで、さらにレアな写真を手に入れることができた。<br />
            二次流通を通して生まれた利益は、クリエイターにも還元され、ファン同士のやり取りが、
            コミュニティ全体の成長を生み出すエコシステムを生んでいた。
        </>)
    },
    {
        case: '5',
        image: '/assets/images/feature-img-05.png',
        title: (<>特典付きNFTが生み出す特別な体験</>),
        content: (<>
            フォトグラファーのEはOPEN FAVEで限定シリーズのNFTを発行し、所有者には定期的なオンラインワークショップや撮影現場のライブ中継を特典として付与した。<br />
            ファンは作品を資産として保有しながら、作り手の舞台裏や進行中のプロジェクトをリアルタイムで楽しめる。<br />
            ただの「いいね」を超え、特典を通じて深く関われる関係性が、Eとファンの間で新たなコミュニティを育む。
        </>)
    },
    {
        case: '6',
        image: '/assets/images/feature-img-06.png',
        title: (<>作家の作品世界を共有する新しい読書体験</>),
        content: (<>
            小説家志望のFは短編作品をNFTとして販売することにした。<br />
            購入者はその物語世界へのアクセス権を持ち、<br />
            挿絵や外伝的エピソードも追加NFTとして楽しめる。<br />
            いつしかファン同士がNFTを交換し、稀少なストーリーを求めて交流することで、<br />
            テキストコンテンツに“コレクション”という新たな文化が生まれる。
        </>)
    },
    {
        case: '7',
        image: '/assets/images/feature-img-07.png',
        title: (<>応援が社会貢献につながるNFTエコシステム</>),
        content: (<>
            ある慈善活動家のGは、社会問題をテーマにしたイラストをNFTとして発行。<br />
            このNFTを購入すると、収益の一部が自動的に慈善団体へ寄付される。<br />
            ファンはアートを所有するだけでなく、自分の行動が社会を良くする手助けになる。<br />
            ただの「いいね」を超え、現実世界へインパクトを与える価値循環が生まれた。

        </>)
    },
    {
        case: '8',
        image: '/assets/images/feature-img-08.png',
        title: (<>デジタルキュレーターが生むバーチャル展示会</>),
        content: (<>
            イラスト好きのHは、OPEN FAVEで見つけた素敵な作品を次々と購入し、自分だけのNFTコレクションを形成。<br />
            その作品群をオンラインギャラリーで公開すると、ほかのユーザーが訪れ、まるで小さな美術館のようなコミュニティが誕生した。Hはお気に入りの作品をシェアすることで、自分も新たな収益を得ながら、アート市場を豊かに彩っていく。
        </>)
    },
]

const Features = () => {
  const ref = useScrollAnimations();
  return (
    <section id="open-fave" ref={ref} className="relative overflow-hidden md:pt-[100px] px-5 bg-[linear-gradient(180deg,_rgba(255,255,255,1)_0%,_rgba(142,129,185,1)_100%)]">
        <div className="text-center">
            <h3 className="md:text-[36px] text-[20px] font-bold tracking-wider">What’s OPEN FAVE</h3>
            <span className="w-20 h-[3px] bg-[#21012D] block mx-auto mt-5"></span>
        </div>
        <div className="divide-y divide-[#8E81B9]">
            {data.map((item,index) => (
                <div className="md:pb-[60px] md:pt-[82px] pt-14 pb-10" key={index}>
                    <figure className="flex justify-center items-center">
                        <img src={item.image} alt="" />
                    </figure>
                    <div className="md:mt-7 mt-5 w-full max-w-[550px] mx-auto">
                        <h5 className="text-center font-bold md:text-[24px] text-[20px]">{item.title}</h5>
                        <p className="mt-5 md:text-[18px] text-[15px] font-medium">{item.content}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
  );
};

export default Features;
