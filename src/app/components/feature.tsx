"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const data = [
    {
        image: '/assets/images/feature-01.png',
        title: '日本酒',
        name: 'Japanese rice wine',
        description: (<>透明感とともに広がる繊細な香り、口に含んだ瞬間に広がる芳醇な旨み。やさしい甘みとほんのりとした酸味が絶妙に調和し、心地よい余韻を残す。</>),
        content: (<>
        日本酒は、無限の可能性を秘めた存在です。地域ごとの風土や文化を反映した多様な味わいが楽しめます。高品質な純米大吟醸酒は和食だけでなく、フルーツを使ったカクテルなど、幅広い料理とペアリングできる点が外国人に評価されており、健康志向の高まりや多様な飲み方の提案により海外市場でも受け入れられています。
        </>)
    },
    {
        image: '/assets/images/feature-02.png',
        title: 'GIN',
        name: 'Japanese Gin',
        description: (<>カットしたライムが爽やかな香りを放ち、シルキーな口当たりとともに、心地よい刺激が舌を踊らせる。これがジンの魔法。</>),
        content: (<>
            日本産ジンは、柚子、桜、抹茶など日本特有の植物成分を使用したお酒で、柑橘系の爽やかな香り、桜の花の繊細な甘さ、抹茶の深い旨味と苦味が特徴です。この日本の風味や文化を感じられる点が特に外国人に人気の理由です。日本産クラフトジンのブランドは増加しており、国際的なコンテストや品評会でも多くの賞を受賞しているため外国人の間でも人気が高まっています。
        </>)
    },
    {
        image: '/assets/images/feature-03.png',
        title: '梅酒',
        name: 'Umeshu',
        description: (<>グラスの中で琥珀色の輝きを放ち、芳醇なフルーティーな香りが心を穏やかに包み込む。そのまろやかな味わいが、一口飲むごとに至福の瞬間をもたらす。</>),
        content: (<>
        梅酒は、日本特有の梅である「南高梅」や「青梅」を使用し、甘酸っぱい風味が特徴で飲みやすいリキュールです。オーガニック梅酒やスパークリング梅酒など、高品質で自然志向な点が海外に評価され、カクテルのベースとしても人気が高まっています。また、多様なフレーバーと健康志向の高まりにより、海外市場での需要も増加しています。
        </>)
    },
    {
        image: '/assets/images/feature-04.png',
        title: '地ビール',
        name: 'Japanese Craft Beer',
        description: (<>泡が立ち上るとともに香ばしい麦の香りがふわりと漂う。口に含めば、しっかりとしたコクとホップの苦みが絶妙に調和し、豊かな味わいが広がる。</>),
        content: (<>
        日本のクラフトビールは、小規模醸造所が手掛ける高品質で創造性に富んだビールが多く、国際的なコンテストでも多くの賞を受賞しています。例えば地元特産の柑橘類を使ったフルーティーなビール、世界遺産の天然水を使用したホップの苦味が際立つビールなどがあります。これらのビールは、地域の特色や独自の製法、高品質な原材料を活かしており、海外のクラフトビールファンにとって新たな発見となっており、さらに人気が高まっています。
        </>)
    }
]

const Feature = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative">
        <div className="w-full max-w-[1440px] mx-auto px-10 md:px-[100px] relative">
            <div className="md:absolute left-0 top-0 flex justify-center px-5 md:px-8 md:pt-14 pt-8">
                <h3 className="fade-up lg:text-[88px] md:text-[66px] text-[44px] text-black/10 font-black md:[writing-mode:vertical-rl] md:[text-orientation:mixed] tracking-[0.2em]">FEATURE</h3>
            </div>
            <div className="w-full md:max-w-[953px] max-w-[440px] mx-auto md:pt-20 pt-12">
                <h3 className="fade-up font-serif md:text-[22px] font-bold px-[50px]">
                無限の可能性 日本のSAKE</h3>
                <div className="md:mt-[90px] mt-12">
                    {data.map((item,index) => (
                        <div className="fade-up flex md:pl-[60px] md:gap-[54px] gap-6 max-md:flex-col max-md:items-center border-b border-black md:pb-[134px] pb-16 md:mb-[100px] mb-10" key={index}>
                            <figure className="max-md:w-auto max-lg:w-1/3">
                                <img src={item.image} alt={item.title} />
                            </figure>
                            <div className="flex-1">
                                <h4 className="font-serif md:text-[26px] text-[20px] font-medium">{item.title}</h4>
                                <p className="font-italianno md:text-[42px] text-[28px] text-[#7F7F7F] leading-[1.2]">{item.name}</p>
                                <p className="md:text-[17px] text-[14px] font-medium md:mt-10 mt-5">
                                    {item.description}
                                </p>
                                <p className="md:text-[17px] text-[14px] font-medium md:mt-12 mt-6">
                                    {item.content}
                                </p>
                            </div>
                        </div>
                    ))}
                    
                </div>
            </div>
        </div>
    </section>
  );
};

export default Feature;
