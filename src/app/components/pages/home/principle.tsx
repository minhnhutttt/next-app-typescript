import SectionContainer from "../../common/sectionContainer";

export default function Principle() {
    return (
        <div  id="principle">
            <SectionContainer>
                <div>
                    <h3 className="">
                        <img src="/images/our-principle.png" alt="Our Principle" />
                    </h3>
                    <div className="content-scroll-keep px-5 w-full max-w-[860px] mx-auto mt-3 md:mt-5 pb-[120px] md:pb-[216px]">
                        <h5 className="text-center md:text-[28px] text-[18px] font-mincho font-semibold">
                            本物のアジャイル開発を行う <br />
                            我々の主義
                        </h5>
                        <div className="md:mt-10 mt-6 md:space-y-16 space-y-10 max-md:max-w-[327px] max-md:mx-auto">
                            <div className="flex max-md:flex-col md:gap-[38px] gap-6">
                                <figure>
                                    <img src="/images/img-principle-01.png" alt="" />
                                </figure>
                                <div className="flex-1 md:text-[17px] text-[13px] font-medium leading-snug">
                                私たちは、革新と成長の最前線に立ち「<span className="text-[#FF0000] font-bold">マーケットと共に動き続けるソフトウェア</span>」を通じて業界の枠を超えた新たな価値を創造することに全力を尽くしています。<br /><span className="text-[#FF0000] font-bold">オフショア開発</span>を駆使し、世界各地の専門知識と技術を結集させることで<span className="text-[#FF0000] font-bold">経営者レベルでの深い洞察と戦略的思考</span>をもってお客様のビジネスに真の変革をもたらすことです。
                                </div>
                            </div>
                            <div className="flex max-md:flex-col md:gap-[38px] gap-6">
                                <figure>
                                    <img src="/images/img-principle-02.png" alt="" />
                                </figure>
                                <div className="flex-1 md:text-[17px] text-[13px] font-medium leading-snug">
                                私たちは、<span className="text-[#FF0000] font-bold">マーケット至上主</span>義を掲げ、<span className="text-[#FF0000] font-bold">チーム構築型</span>で一つ一つの取り組みにおいて、効率的で現代的な手法を追求します。「<span className="text-[#FF0000] font-bold">リスクの可視化</span>」を行い、積極的にリスクを受け入れることでリターンを追求し、未知の領域にも果敢に挑戦します。<br /><span className="text-[#FF0000] font-bold">モダン開発の最先端</span>を行くことで、お客様に真に価値のある革新を提供することに私たちは全力を尽くします。
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionContainer>
        </div>
    );
}
