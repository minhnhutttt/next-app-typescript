"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const data = [
    {
        image: '/assets/images/open-fave-img-01.png',
        title: (<>"いいね"で終わらない、"いいね"は資産に変わる</>),
        content: (<>あなたの「いいね」や「好きという気持ち」が、そのまま価値となってクリエイターとつながる、新時代のSNSです。</>)
    },
    {
        image: '/assets/images/open-fave-img-02.png',
        title: (<>あなたの気持ちをチップで伝える</>),
        content: (<>
        Fave Coinを使えば、あなたがこれまで無数に押してきた「いいね」の、ほんの1つですら特別な価値へと変わります。<br />
        ただの数字で終わらせず、そこから生まれる関係や価値が、新しい応援のカタチになるのです。
        </>)
    },
    {
        image: '/assets/images/open-fave-img-03.png',
        title: (<>投稿そのものが資産</>),
        content: (<>
        投稿したデータがNFT化されることで、「所有・投資・収集」できる新しい楽しみ方へと進化します。<br />
        あなた自身がビジュアルアートの持ち主となり、その作品の物語に深く関わることができるのです。
        </>)
    },
    {
        image: '/assets/images/open-fave-img-04.png',
        title: (<>画像だけじゃない、様々なデータを簡単にNFT化</>),
        content: (<>写真やイラストはもちろん、音声、動画、3Dモデル、テキストなど、あらゆるデジタルデータを簡単にNFT化できます。新たな発信・共有・応援のスタイルが実現します。</>)
    },
    {
        image: '/assets/images/open-fave-img-05.png',
        title: (<>A面とB面、ふたつの表情を持つNFT</>),
        content: (<>
        OPEN FAVEのNFTには、誰もが閲覧できる「A面」と、購入者だけが見ることのできる「B面」が存在します。<br />
        一般公開されるA面で作品の魅力を伝えつつ、B面はコレクター専用の特別な要素やコンテンツを提供。<br />
        これによって、NFT保有者は他者には見えない価値や物語を独占的に楽しめ、作品への愛着や満足度をさらに高めることができます。
        </>)
    },
    {
        image: '/assets/images/open-fave-img-06.png',
        title: (<>今までのSNSにはなかった閲覧者としての価値も</>),
        content: (<>
        多彩なデジタルコンテンツをNFTとして所有することで、今までのSNSには存在しなかった「閲覧者としての価値」を手に入れられます。<br />
        "見る・聞く"から"持つ"へ。<br />
        あなたは、単なるファンを超えて、作品世界を支える出資者であり、育てる一員にもなれるのです。
        </>)
    },
]

const OpenFave = () => {
  const ref = useScrollAnimations();
  return (
    <section id="open-fave" ref={ref} className="relative overflow-hidden md:pt-[100px] pt-16 px-5 bg-[linear-gradient(180deg,_rgba(255,255,255,1)_0%,_rgba(142,129,185,1)_100%)]">
        <div className="fade-up text-center">
            <h3 className="md:text-[36px] text-[24px] font-bold tracking-wider">What’s OPEN FAVE</h3>
            <span className="w-20 h-[3px] bg-[#21012D] block mx-auto mt-5"></span>
        </div>
        <div className="divide-y divide-[#8E81B9]">
            {data.map((item,index) => (
                <div className="fade-up md:pb-[60px] md:pt-[82px] pt-14 pb-10" key={index}>
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

export default OpenFave;
