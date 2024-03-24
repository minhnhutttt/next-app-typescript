import SectionContainer from "../../common/sectionContainer";


const ServiceData = [
    {
        id: "01",
        imgae: '/images/img-service-01.png',
        title: '動くソフトウェア開発',
        content: '訪問者に忘れがたいユーザー体験を提供することで、ビジネスのエンゲージメントとコンバージョンを劇的に向上させます。'
    },
    {
        id: "02",
        imgae: '/images/img-service-02.png',
        title: '見えるマーケティング',
        content: '透明性を通じて互いの理解を深め、より強固な関係を築きます。私たちのマーケティングは、隠し事がないことを誇りに思っています。'
    },
    {
        id: "03",
        imgae: '/images/img-service-03.png',
        title: '変わるデザイン',
        content: 'ユーザーのフィードバックを積極的に取り入れ、市場の動きに柔軟に対応し、顧客の満足度を最大化します。'
    }
]

export default function Service() {
    return (
        <SectionContainer>
            <div className="bg-black pb-6 md:pb-10">
                <h3 className="flex justify-end">
                    <img src="/images/our-service.png" alt="Our Service" />
                </h3>
                <div className="px-5 w-full md:max-w-[1080px] max-w-[370px] mx-auto mt-3 md:mt-5">
                    <h5 className="text-center md:text-[28px] text-[18px] font-mincho font-semibold text-white">
                        マーケット至上主義
                        <br />
                        我々のサービス
                    </h5>
                    <div className="md:mt-12 mt-6 grid md:grid-cols-3 justify-center gap-8 md:gap-7">
                        {ServiceData.map((item, index) => (
                            <div
                                className="text-white"
                                key={index}
                            >
                                <figure>
                                    <img className="border border-white" src={item.imgae} alt={item.title} />
                                </figure>
                                <h5 className="md:text-[20px] text-[17px] font-bold py-3 md:py-4">{item.title}</h5>
                                <p className="md:text-[17px] text-[13px] leading-[1.8]">{item.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-end md:-mt-8 w-full max-w-[1340px] mx-auto max-md:px-2">
                    <img className="max-md:w-[32px]" src="/images/img-service.png" alt="SERVICE" />
                </div>
            </div>
        </SectionContainer>
    );
}
