import SectionContainer from "../../common/sectionContainer";

export default function Message() {
    return (
        <SectionContainer>
            <div className="bg-black md:bg-[linear-gradient(_to_right,_#000_0%,_#000_83%,_#fff_83%,_#fff_100%_)]">
                <h3 className="flex">
                    <img className="max-xl:w-[80%]" src="/images/our-message.png" alt="Our Message" />
                </h3>
                <div className="content-scroll-keep px-8 w-full md:max-w-[1160px] max-w-[600px] mx-auto mt-3 md:mt-2 relative pb-14 md:pb-[140px]">
                    <div className="w-full max-w-[1096px] mx-auto flex max-md:flex-col-reverse gap-8 items-center md:pl-5 md:gap-[66px]">
                        <div className="text-white flex-1">
                            <p className="font-mincho md:text-[28px] text-[20px] font-semibold">メッセージ</p>
                            <p className="md:text-[18px] text-[14px] font-bold leading-loose mt-4 md:mt-6">
                                昨今のビジネス環境において、迅速な行動が何よりも重要視されると我々は考えております。<br />
                                こだわりを追求し細部に完璧を求めるほど、スピードが鈍り、それによって生じる機会損失は避けがたいのが事実です。<br />
                                <br />
                                我々は多くの企業と取引をしています。<br />
                                <br />
                                貴社はこれをリスクとして捉え、果敢に行動する勇気はありますか？
                            </p>
                        </div>
                        <figure className="max-md:w-full max-xl:w-[50%]">
                            <img src="/images/img-message-01.png" alt="" />
                        </figure>
                    </div>
                </div>
            </div>
        </SectionContainer>
    );
}
