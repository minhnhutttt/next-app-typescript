const requestData = [
    {
        id: "01",
        number: '/images/number-01.png',
        imgae: '/images/img-request-01.png',
        title: '責任',
        content: '仕事を依頼することに留まらず、プロジェクトへの責任感を共に背負って進んで頂きたいです。',
        deco: <div className="max-md:w-[80%] md:absolute md:bottom-[-20px] "><img src="/images/img-responsibility.png" alt="" /></div>
    },
    {
        id: "02",
        number: '/images/number-02.png',
        imgae: '/images/img-request-02.png',
        title: '協力',
        content: '私たちは全てのプロセスを透明にし、ガラス張りのプロジェクト運営を行います。ですので、あなたは積極的にプロジェクトに参加して下さい。',
        deco: <div className="max-md:w-[80%] md:absolute left-[280px] bottom-[-50px]"><img src="/images/img-cooperation.png" alt="" /></div>
    },
    {
        id: "03",
        number: '/images/number-03.png',
        imgae: '/images/img-request-03.png',
        title: '対等な関係',
        content: '我々はあなたをプロジェクトを成功に導くパートナーと考えます。そのため、発注者、受注者の関係ではなく、対等な立場からの発言や提案をさせて下さい。',
        deco: <div className="max-md:w-[80%] md:absolute right-[120px] bottom-[-40px]"><img src="/images/img-ecol.png" alt="" /></div>
    },
    {
        id: "04",
        number: '/images/number-04.png',
        imgae: '/images/img-request-04.png',
        title: '柔軟性',
        content: 'すべての答えは市場が持っています。よって、我々は市場を見てサービスを提案します。ですので、あなたは市場を読んでサービスを依頼してください。',
        deco: <div className="max-md:w-[80%] md:absolute xl:left-[250px] left-[180px] bottom-[-80px]"><img src="/images/img-frexibility.png" alt="" /></div>
    }
]

export default function Request() {
    return (
        <div className="bg-black pb-6 md:pb-10 relative">
            <h3 className="flex justify-end">
                <img src="/images/our-request.png" alt="Our Service" />
            </h3>
            <div className="px-5 w-full max-w-[1440px] relative mx-auto mt-3 md:mt-5">
                <h5 className="text-center md:text-[28px] text-[18px] font-mincho font-semibold text-white">
                    クライアントもプロジェクトを成功させるための一員です <br />
                    我々からあなたへの要求
                </h5>
                <div className="md:mt-12 mt-6 divide-y max-w-[1080px] mx-auto md:pb-16 pb-10">
                    {requestData.map((item, index) => (
                        <div
                            className="group text-white flex justify-center md:pb-28 pb-16 [&:not(:first-of-type)]:pt-14 md:[&:not(:first-of-type)]:pt-24"
                            key={index}
                        >
                            <div className="flex max-md:flex-col max-md:items-center md:group-even:justify-end w-full px-4 md:px-16 gap-8 md:gap-[50px] md:group-even:flex-row-reverse relative">
                                <figure className="relative z-10 max-md:flex max-md:justify-center max-md:w-full max-lg:w-1/3">
                                    <img className="border border-white" src={item.imgae} alt={item.title} />
                                </figure>
                                <div className="flex-1 max-w-[480px]">
                                    <div className="w-full max-md:pb-4">
                                        <div className="flex gap-5 md:gap-8">
                                            <p className=""><img className="max-md:h-8" src={item.number} alt="" /></p>
                                            <p className="md:text-[23px] text-[17px] font-bold leading-tight">{item.title}</p>
                                        </div>
                                        <p className="md:text-[17px] text-[13px] mt-5">{item.content}</p>
                                    </div>
                                    {item.deco}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex absolute right-0 xl:right-20 bottom-0">
                    <img className="max-md:w-[32px] max-xl:w-[60px]" src="/images/img-our-request.png" alt="request" />
                </div>
            </div>
        </div>
    );
}
