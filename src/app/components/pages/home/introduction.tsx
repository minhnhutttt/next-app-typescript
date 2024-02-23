import { ReactNode } from "react";

type CardProp = {
    id: string;
    imageSrc: string;
    title: string;
    content: ReactNode;
}
const cardData: CardProp[] = [
    {
      id: "1",
      title: "NFT+位置情報+日時",
      imageSrc: "/images/image-guide-card-01.png",
      content: (
        <>
          その場所、その期間でしかもらえないNFTが日本全国に！
        </>
      ),
    },
    {
        id: "2",
        title: "NFTをもらいに行く",
        imageSrc: "/images/image-guide-card-02.png",
        content: (
          <>
            マップに表示されるNFTを受け取りに行こう！
          </>
        ),
    },
    {
        id: "3",
        title: "SNSでもらう",
        imageSrc: "/images/image-guide-card-03.png",
        content: (
          <>
            SNSで見つけたURLをワンタッチでNFTを受け取ろう！
          </>
        ),
      },
  ];
export default function Introduction() {
    return (
        <section className="md:pt-[150px] pt-20 px-5">
            <div className="w-full max-w-[1268px] mx-auto">
                <div className="text-center">
                    <p className="md:text-[24px] [font-size:_clamp(14px,4.8vw,18px)] tracking-widest font-medium">URLにアクセスするだけ！</p>
                    <h3 className="md:text-[62px] [font-size:_clamp(20px,7.5vw,32px)] font-bold tracking-[0.15em] md:mt-2">NFT Linkとは？</h3>
                </div>
                <div className="flex justify-center mt-6 md:mt-9">
                    <p className="md:text-[24px] [font-size:_clamp(14px,4.8vw,18px)] tracking-widest text-center font-medium px-3 pb-2 md:pb-3 bg-[repeating-linear-gradient(-45deg,_transparent_0_4px,_#FF7F50_4px_7px)] bg-no-repeat md:[background-size:100%_10px] [background-size:100%_8px] bg-bottom">
                        NFTが簡単に受け取れる！<br />NFT LinkとはNFTをURLで共有できるサービスです。
                    </p>
                </div>
                <div className="flex justify-center mt-6 md:mt-8">
                    <figure>
                        <img src="/images/image-about.png" alt="" />
                    </figure>
                </div>
                <div className="text-center mt-[140px] md:mt-[250px]">
                    <p className="md:text-[24px] [font-size:_clamp(14px,4.8vw,18px)] tracking-widest font-medium">NFTってこんなに楽しい！</p>
                    <h3 className="md:text-[62px] [font-size:_clamp(20px,7.5vw,32px)] font-bold tracking-[0.15em] md:mt-2">NFT Linkの楽しみ方</h3>
                </div>
                <div className="flex justify-center mt-8 md:mt-[70px] relative max-md:gap-5">
                    <figure className="max-md:flex-[0_0_90px]">
                        <img src="/images/image-guide-01.png" alt="" />
                    </figure>
                    <div className="md:w-[235px] md:mt-14 flex flex-col items-center max-md:absolute max-md:left-[calc(50%-160px)] max-md:top-[48%] w-[240px]">
                        <figure className="max-md:rotate-[55deg]">
                            <img className="max-md:w-[100px]" src="/images/arrow-sm.png" alt="" />
                        </figure>
                        <p className="font-bold flex md:gap-2 md:mt-5 max-md:relative max-md:left-[-58px] max-md:flex-col max-md:items-center">
                            <span className="lg:text-[28px] md:text-[24px] text-[18px]">②</span>
                            <span className="lg:text-[18px] md:text-[16px] text-[13px] mt-1 md:mt-2">
                                発行されたURLを読み <br />
                                込みNFTを受け取る
                            </span>
                        </p>
                    </div>
                    <figure className="max-md:mt-[200px] max-md:flex-[0_0_90px]">
                        <img src="/images/image-guide-02.png" alt="" />
                    </figure>
                    <div className="md:w-[235px] md:mt-14 flex flex-col items-center max-md:absolute max-md:right-[calc(50%-160px)] max-md:top-[48%] w-[240px]">
                        <figure className="max-md:-rotate-[55deg]">
                            <img className="max-md:w-[100px] rotate-180" src="/images/arrow-sm.png" alt="" />
                        </figure>
                        <p className="font-bold flex md:gap-2 md:mt-5 max-md:relative max-md:right-[-58px] max-md:flex-col max-md:items-center">
                            <span className="lg:text-[28px] md:text-[24px] text-[18px]">①</span>
                            <span className="lg:text-[18px] md:text-[16px] text-[13px] mt-1 md:mt-2">
                            NFTをセットする
                            </span>
                        </p>
                    </div>
                    <figure className="max-md:flex-[0_0_90px]">
                        <img src="/images/image-guide-03.png" alt="" />
                    </figure>
                </div>
                <div className="flex gap-5 max-md:flex-wrap justify-center mt-10 md:mt-[76px]">
                    {cardData.map(({ id, imageSrc, title, content }) => (
                        <div className="bg-white md:p-[30px] max-md:w-[calc(50%-10px)] max-md:min-w-[300px] md:pb-6 p-5 rounded-[30px] md:flex-1" key={id}>
                            <figure>
                                <img src={imageSrc} alt={title} />
                            </figure>
                            <h5 className="font-bold md:text-[22px] text-[17px] tracking-[0.2em] md:mt-5 mt-3 border-b border-black">{title}</h5>
                            <p className="md:text-[18px] text-[14px] font-medium md:mt-3 mt-1.5 tracking-[0.2em]">
                                {content}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
  }
  