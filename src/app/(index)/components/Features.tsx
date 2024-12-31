"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";

const data = [
  {
    case: "1",
    image: "/assets/images/feature-img-01.png",
    title: <>アーティストの飛躍の物語</>,
    content: (
      <>
        若手イラストレーターのAは、これまではSNSで作品を投稿しても「いいね」を集めるだけだった。
        <br />
        しかし、OPEN
        FAVE上で作品をNFTとして発表すると、一番乗りのファンが作品を所有し、コミュニティでその価値が高まっていく。
        <br />
        ファンたちは「ただ見る」から「共に育む」感覚を味わい、Aは得たFaveコインで次の大作の制作に着手する。
        <br />
        この循環が、アーティストとファンの関係を深め、才能が世界へ飛び出すための足がかりになる。
      </>
    ),
  },
  {
    case: "2",
    image: "/assets/images/feature-img-02.png",
    title: <>音楽クリエイターの新たな収益モデル</>,
    content: (
      <>
        若手イラストレーターのAは、これまではSNSで作品を投稿しても「いいね」を集めるだけだった。
        <br />
        しかし、OPEN
        FAVE上で作品をNFTとして発表すると、一番乗りのファンが作品を所有し、コミュニティでその価値が高まっていく。
        <br />
        ファンたちは「ただ見る」から「共に育む」感覚を味わい、Aは得たFaveコインで次の大作の制作に着手する。
        <br />
        この循環が、アーティストとファンの関係を深め、才能が世界へ飛び出すための足がかりになる。
      </>
    ),
  },
  {
    case: "3",
    image: "/assets/images/feature-img-03.png",
    title: <>3Dアーティストが紡ぐ立体コミュニティ</>,
    content: (
      <>
        3DモデラーのCは、自作のキャラクターやオブジェクトをSNSで公開しても、スクロールですぐ消えてしまう虚しさを感じていた。
        <br />
        Openfaveで3DモデルをNFT化して販売すると、コレクターはそのモデルを所有できるだけでなく、自分のVRギャラリーで飾ったり、別のNFTプロジェクトと組み合わせたりできる。
        <br />
        モデルが世界中で“使われ”、価値を増すたび、Cは創作に没頭できる環境を手に入れる。
      </>
    ),
  },
  {
    case: "4",
    image: "/assets/images/feature-img-04.png",
    title: <>ファン同士の交流から生まれる新たな価値</>,
    content: (
      <>
        ファッション写真が好きなユーザーDは、OPEN
        FAVEでお気に入りの作品をNFTとして購入した。
        <br />
        ある日、その作品がほかのコレクターにも注目され、DはNFTを交換することで、さらにレアな写真を手に入れることができた。
        <br />
        二次流通を通して生まれた利益は、クリエイターにも還元され、ファン同士のやり取りが、
        コミュニティ全体の成長を生み出すエコシステムを生んでいた。
      </>
    ),
  },
  {
    case: "5",
    image: "/assets/images/feature-img-05.png",
    title: <>特典付きNFTが生み出す特別な体験</>,
    content: (
      <>
        フォトグラファーのEはOPEN
        FAVEで限定シリーズのNFTを発行し、所有者には定期的なオンラインワークショップや撮影現場のライブ中継を特典として付与した。
        <br />
        ファンは作品を資産として保有しながら、作り手の舞台裏や進行中のプロジェクトをリアルタイムで楽しめる。
        <br />
        ただの「いいね」を超え、特典を通じて深く関われる関係性が、Eとファンの間で新たなコミュニティを育む。
      </>
    ),
  },
  {
    case: "6",
    image: "/assets/images/feature-img-06.png",
    title: <>作家の作品世界を共有する新しい読書体験</>,
    content: (
      <>
        小説家志望のFは短編作品をNFTとして販売することにした。
        <br />
        購入者はその物語世界へのアクセス権を持ち、
        <br />
        挿絵や外伝的エピソードも追加NFTとして楽しめる。
        <br />
        いつしかファン同士がNFTを交換し、稀少なストーリーを求めて交流することで、
        <br />
        テキストコンテンツに“コレクション”という新たな文化が生まれる。
      </>
    ),
  },
  {
    case: "7",
    image: "/assets/images/feature-img-07.png",
    title: <>応援が社会貢献につながるNFTエコシステム</>,
    content: (
      <>
        ある慈善活動家のGは、社会問題をテーマにしたイラストをNFTとして発行。
        <br />
        このNFTを購入すると、収益の一部が自動的に慈善団体へ寄付される。
        <br />
        ファンはアートを所有するだけでなく、自分の行動が社会を良くする手助けになる。
        <br />
        ただの「いいね」を超え、現実世界へインパクトを与える価値循環が生まれた。
      </>
    ),
  },
  {
    case: "8",
    image: "/assets/images/feature-img-08.png",
    title: <>デジタルキュレーターが生むバーチャル展示会</>,
    content: (
      <>
        イラスト好きのHは、OPEN
        FAVEで見つけた素敵な作品を次々と購入し、自分だけのNFTコレクションを形成。
        <br />
        その作品群をオンラインギャラリーで公開すると、ほかのユーザーが訪れ、まるで小さな美術館のようなコミュニティが誕生した。Hはお気に入りの作品をシェアすることで、自分も新たな収益を得ながら、アート市場を豊かに彩っていく。
      </>
    ),
  },
];

const Features = () => {
  const ref = useScrollAnimations();
  return (
    <section
      id="features"
      ref={ref}
      className="relative overflow-hidden md:pt-[100px] pt-16 bg-[url(/assets/images/feature-bg.png)] bg-cover md:pb-[160px] pb-[100px]"
    >
      <div className="fade-up text-center px-5">
        <h3 className="md:text-[36px] text-[24px] font-bold tracking-wider">
          OPEN FAVEが作り出す <br />
          <span className="md:text-[64px] text-[44px] font-sansita bg-[#FCF15D] rounded-full aspect-square size-10 md:size-14 inline-flex items-center justify-center leading-none">
            8
          </span>
          つの未来
        </h3>
        <span className="w-20 h-[3px] bg-[#21012D] block mx-auto mt-2.5"></span>
      </div>
      <div className="divide-y divide-[#8E81B9] md:mt-[80px] mt-12">
        <Swiper
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="mySwiper relative w-full max-w-[600px] mx-auto "
        >
          {data.map((item, index) => (
            <SwiperSlide key={index} className="relative overflow-hidden px-5">
              <div className="w-full h-full flex items-center justify-center flex-col p-1 md:rounded-[80px] rounded-[50px] relative overflow-hidden">
                <span className="absolute aspect-square animate-[border-animation_5s_linear_infinite] overflow-hidden bg-[conic-gradient(_transparent_0%12.5%,_transparent_12.5%25%,_#8E81B9_25%37.5%,_#8E81B9_37.5%50%,_transparent_50%62.5%,_transparent_62.5%75%,_#8E81B9_75%87.5%,_#8E81B9_87.5%100%_)] w-[1000px] h-[1000px] md:rounded-[80px] rounded-[50px]"></span>
                <div className="w-full h-full relative overflow-hidden md:rounded-[80px] rounded-[50px]">
                  <div className="bg-white w-full h-full relative px-4 md:py-[62px] py-10">
                      <div className="relative">
                        <div className="absolute flex inset-x-0 justify-center -top-5 md:top-[-30px] z-10">
                          <p className="md:text-[36px] text-[24px] font-bold leading-none w-[140px] md:w-[200px] h-10 md:h-[60px] flex items-center justify-center rounded-full bg-[#F6D4E2]">
                            Case {item.case}
                          </p>
                        </div>
                        <figure className="rounded-[50px] overflow-hidden relative">
                          <img src={item.image} alt="" />
                        </figure>
                      </div>
                      <div className="px-2.5 md:pt-10 pt-7">
                        <p className="text-center md:text-[21px] text-[18px] font-bold leading-none">
                          {item.title}
                        </p>
                        <p className="md:mt-10 mt-7 md:text-[16px] text-[14px] font-medium tracking-wider">
                          {item.content}
                        </p>
                      </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <button className="swiper-button-prev cursor-pointer duration-150 hover:opacity-75 absolute top-[calc(50%-10px)] left-0 z-50">
            <img className="max-lg:w-10" src="/assets/images/arrow.svg" alt="" />
          </button>
          <button className="swiper-button-next cursor-pointer duration-150 hover:opacity-75 absolute top-[calc(50%-10px)] right-0 z-50">
            <img className="max-lg:w-10 rotate-180" src="/assets/images/arrow.svg" alt="" />
          </button>
        </Swiper>
      </div>
    </section>
  );
};

export default Features;
