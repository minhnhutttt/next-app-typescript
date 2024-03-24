import SectionContainer from "../../common/sectionContainer";

const flowtData = [
    {
        id: "01",
        type: "inquiry",
        imgae: '/images/img-flow-01.png',
        title: '問い合わせ',
        content: 'LINEよりお気軽にお問い合わせ下さい',
        number: "/images/img-flow-number-01.png"
    },
    {
        id: "02",
        type: "meeting",
        imgae: '/images/img-flow-02.png',
        title: '打ち合わせ',
        content: '専門的知識豊富なスタッフの丁寧な打ち合わせにより、貴社の課題を完全に理解します。',
        number: "/images/img-flow-number-02.png"
    },
    {
        id: "03",
        type: "deposit",
        imgae: '/images/img-flow-03.png',
        title: 'デポジット',
        content: 'PayPalを通じての決済をお願いいたします。',
        number: "/images/img-flow-number-03.png"
    },
    {
        id: "04",
        type: "development",
        imgae: '/images/img-flow-04.png',
        title: '開発',
        content: 'アジャイル開発でトレンドに則したプロダクトを開発します',
        number: "/images/img-flow-number-04.png"
    },
    {
        id: "05",
        type: "",
        imgae: '/images/img-flow-05.png',
        title: 'マーケティング',
        content: '柔軟かつ透明、迅速な対応で差別化されたマーケティングを提供します',
        number: "/images/img-flow-number-05.png"
    },
]
export default function Flow() {
    return (
        <SectionContainer>
            <div className="">
                <h3 className="flex justify-end">
                    <img src="/images/workflow.png" alt="Workflow" />
                </h3>
                <div className="content-scroll-keep px-10 md:px-[52px] w-full max-w-[1160px] mx-auto mt-3 md:mt-5 relative pb-[70px]">
                    <h5 className="text-center md:text-[28px] text-[18px] font-mincho font-semibold">
                    即応と柔軟で変化を力にする<br />開発までの流れ
                    </h5>
                    <div className="w-ful md:mt-20 mt-10 relative">
                        <div className="absolute h-full bottom-0 -left-10 md:-left-4 flex items-end md:border-r border-black/20 pb-20">
                            <figure>
                                <img className="max-md:w-7" src="/images/img-work-flow.png" alt="" />
                            </figure>
                        </div>
                        <div className="max-md:max-w-[323px] mx-auto md:space-y-[38px] space-y-7">
                            {flowtData.map((item, index) => (
                                    <div className="bg-white pb-6 group flex max-md:flex-col gap-8 md:gap-[16px] relative md:[&:nth-of-type(2)]:ml-[10%] md:[&:nth-of-type(3)]:ml-[16%] md:[&:nth-of-type(4)]:ml-[22%] md:[&:nth-of-type(5)]:ml-[28%]" key={index}>
                                        <figure className="relative z-10 max-md:flex max-md:justify-center max-md:w-full max-lg:w-1/3">
                                            <img className="border border-white" src={item.imgae} alt={item.title} />
                                            <div className="origin-bottom-left absolute bottom-0 left-0 font-helvetica md:text-[28px] text-[18px] font-bold text-[#E8E8E8] rotate-[-90deg]">{item.type}</div>
                                        </figure>
                                        <div className="flex-1 text-black max-w-[450px] flex flex-col justify-between">
                                            <div className="w-full max-md:pb-4">
                                                <div className="flex gap-5 md:gap-8">
                                                    <p className="md:text-[23px] text-[17px] font-bold leading-tight">{item.title}</p>
                                                </div>
                                                <p className="md:text-[17px] text-[13px] mt-3 md:mt-5">{item.content}</p>
                                            </div>
                                            <div className="md:group-[:nth-of-type(3)]:ml-[30%] md:group-[:nth-of-type(4)]:ml-[46%] md:group-[:nth-of-type(5)]:ml-[70%]">
                                                <img className="max-md:h-10 max-lg:h-[80px]" src={item.number} alt={item.id} />
                                            </div>

                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </SectionContainer>
    );
}
