"use client";

import Marque from "@/components/marque";

const data = [
    {
        image: '/assets/images/img-useful-01.png',
        title: (<>NFTが<br />もっと<span className="md:text-[42px] text-[30px]">便利に！</span></>),
        text: (<>コインがないからNFTを送れないという心配はありません！<br />ガス代の安い時間を待って送信する必要もありません。</>)
    },
    {
        image: '/assets/images/img-useful-02.png',
        title: (<>NFTが<br />もっと<span className="md:text-[42px] text-[30px]">楽しく！</span></>),
        text: (<>コレクションしたNFTをいつでも交換可能！<br />欲しいデジタルアートやゲーム内アイテムをもらったり、あげたりして楽しもう！</>)
    },
]

const Useful = () => {
  return (
    <section className="relative px-5">
        <div className="w-full md:max-w-[1360px] max-w-[440px] mx-auto md:pt-[20.833vw] dt:pt-[100px] pt-[70px]">
            <div className="flex justify-end md:pr-[3.333vw] dt:pr-12">
                <div className="relative w-[350px] md:w-[41.667vw] dt:w-[600px] flex justify-end">
                    <span data-scroll className="ani-poyoyon2 animation-500 absolute w-[170px] md:w-[20.069vw] dt:w-[289px] left-6 -top-10 md:-top-[6.944vw] dt:top-[-100px]">
                        <img src="/assets/images/img-bubble-03.png" alt="NFTの送信が無料ということは？" />
                    </span>
                    <figure data-scroll className="ani-fade-up max-md:w-[170px] max-dt:w-[22.569vw]">
                        <img src="/assets/images/img-character-03.png" alt="" />
                    </figure>
                </div>
            </div>
            <div className="grid md:grid-cols-2 gap-10">
                {data.map((item,index) => (
                    <div data-scroll className="ani-fade-up bg-white md:rounded-[60px] rounded-[32px] md:pt-11 pt-7 px-4 md:px-6 lg:px-10 pb-5 md:pb-9" key={index}>
                        <figure className="rounded-[30px] overflow-hidden">
                            <img src={item.image} alt="" />
                        </figure>
                        <div className="pt-4 md:pt-6 md:px-3">
                            <h4 className="text-center md:text-[32px] text-[22px] font-black">{item.title}</h4>
                            <p className="md:text-[18px] text-[14px] text-center w-full max-w-[520px] mx-auto mt-5">{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <Marque reverse />
    </section>
  );
};

export default Useful;
