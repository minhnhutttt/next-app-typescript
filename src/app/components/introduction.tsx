"use client"
import useScrollAnimations from "@/hooks/useScrollAnimations";

const data = [
    {
        image: '/assets/images/img-01.png',
        title: '至福の干し芋',
        text: <>90日間熟成させ、食べ切りに丁度いい120gに包装してお届けします。<br /><br />甘味料の追加など一切なく独自の製法になりますので、とろける程に甘いなどはなく、「自然な甘味」が広がります。<br /><br />思わずくせになる、唯一無二の味わいを楽しむ事ができますので、栄養補給やお菓子の団らん時間などに一福の干し芋を是非ご賞味ください。</>
    },
    {
        image: '/assets/images/img-02.png',
        title: '心ととのう柿の葉茶',
        text: <>柿の葉茶（かきのはちゃ）は、日本の伝統的な茶の一種で、柿の葉を乾燥させて作られるお茶です。<br /><br />独特な甘みも感じられ、穏やかで和やかな味わいが特徴的です。 <br /><br />柿の葉茶は、その特有の風味や健康効果、文化的な要素から古来より存在します。</>
    },
    {
        image: '/assets/images/img-03.png',
        title: 'まるごと干し林檎',
        text: <>果実には、生活に必要な栄養素（ビタミン、食物繊維、ポリフェノール、抗酸化物質など）が豊富に含まれており、特に、皮まで食べることで、その栄養素を2倍以上摂取できるものも存在します。<br /><br />一福独自の丸ごと製法により、美味しいのはもちろんのこと、果肉のみと比べてはるかに多くの栄養を摂る事ができます。
        </>
    },
    {
        image: '/assets/images/img-04.png',
        title: 'まるごとドライキウイ',
        text: <>皮つきのまま提供する事で、皮に多く含まれる栄養素（葉酸や食物繊維、ビタミン類など）を丸ごとお届けできます。<br /><br />
        通常、キウイの皮は苦味や硬さがあるため剥いて食べられることが多いですが、一福のドライキウイは、果肉のみのものよりはるかに多くの栄養を摂取でき、さらに「クセになるほど」美味しく食べられる商品となっています。<br /><br />「自然そのものを美味しく」をモットーにしているからこそ安心です。</>
    },
    {
        image: '/assets/images/img-05.png',
        title: '一福米',
        text: <>糖質34％オフ！アルファ化米とこんにゃく米を独自のブレンドと製法でまるで炊き立てのご飯ような味わいです。<br /><br />
        低糖質・低カロリーで糖質制限食やアレルギー特定原材料28品目不使用なので乳児や妊婦さんにもおススメです。<br /><br />
        お湯を入れて15分で出来上がり！（水でも60分で召し上がることができます）<br /><br />
        賞味期限も5年と長期保存が可能なので備蓄としても重宝します。</>
    }
]

export default function Introduction() {
    const ref = useScrollAnimations();
    return (
        <section ref={ref} className="pb-5 pt-8 md:pt-12 px-5 md:px-14">
            <div className="w-full max-w-[1200px] mx-auto md:pt-3 md:pb-20 md:border-r border-white relative px-5">
                <div className="fade-up flex justify-center">
                    <h3 className="text-white font-semibold md:text-[26px] text-[18px] text-center leading-[2]">
                        昔ながらの素材で日本を元気にする<br />
                        自然からの贈り物<br />
                        一福ブランドの健康食品
                    </h3>
                </div>
                <div className="mt-12">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-x-[54px] md:gap-y-[80px] justify-center gap-12 max-w-[1060px] mx-auto">
                        {data.map((item, index) => (
                            <div className="fade-up max-w-[310px]" key={index}>
                                <figure>
                                    <img src={item.image} alt={item.title} />
                                </figure>
                                <div className="text-white mt-4 md:mt-6">
                                    <h5 className="md:text-[19px] text-[15px] font-semibold">{item.title}</h5>
                                    <p className="md:text-[16px] text-[13px] font-semibold leading-[1.4] mt-3">
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <p className="max-md:border-t max-md:my-10 max-md:border-white top-[50%] md:[writing-mode:vertical-rl] md:[text-orientation:mixed] md:text-[25px] text-[16px] font-semibold text-white/50 md:absolute h-full left-full p-2 max-md:text-center"><span className="fade-up">Ippuku brand, a gift from nature</span></p>
            </div>
        </section>
    );
}
