import SectionWrap from "../common/sectionWrap";

export default function SectionError() {
    return (
        <SectionWrap anchor="error" number="1" title="ERROR" content={<>容量ストレス蓄積中<br />容量の悩みは尽きない...</>}>
            <div className="w-full md:pt-12 pt-8 px-5">
                <p className="text-center md:text-[24px] text-[16px] font-bold underline [text-decoration-thickness:2px] [text-decoration-style:wavy] [text-decoration-color:#FDD300] md:mb-8 mb-5">今すぐ保存したいのに保存を<br className="md:hidden" />完了できずイライラ。</p>
                <div className="flex justify-center relative">
                    <figure className="max-md:w-[50%]">
                        <img src="/images/manila.png" alt="" />
                    </figure>
                    <figure className="absolute top-3 md:right-[calc(50%+90px)] right-[calc(50%+50px)] animate-[bounce_1s_0.3s_ease_infinite_alternate]">
                        <img src="/images/manila-txt-01.png" alt="またおまえかっ！" />
                    </figure>
                    <figure className="absolute top-[28%] md:top-20 md:left-[calc(50%+90px)] left-[calc(50%+50px)] animate-[bounce_1s_0.1s_ease_infinite_alternate]">
                        <img src="/images/manila-txt-02.png" alt="容量がいっぱいです" />
                    </figure>
                </div>
                <div className="flex justify-center">
                    <div className="relative font-dot">
                        <div className="absolute top-[4vw] md:top-7 w-[66vw] max-md:max-w-[450px] md:w-[458px] left-1/2 -translate-x-1/2">
                            <p className="md:text-[28px] md:-ml-7 -ml-[4vw] [font-size:_clamp(14px,4vw,28px)] text-center">どれを選ぶ？</p>
                            <div className="px-4 md:px-7 md:mt-5 mt-[2vw] md:space-y-5 space-y-[2vw]">
                                <div className="flex gap-2">
                                    <figure>
                                        <img className="max-md:w-[3vw] max-md:max-w-[16px]" src="/images/ic-tri.svg" alt="" />
                                    </figure>
                                    <p className="flex-1 md:text-[19px] [font-size:_clamp(10px,2.8vw,20px)] leading-snug">不要なデータを削除する？</p>
                                </div>
                                <div className="flex gap-2">
                                    <figure>
                                        <img className="max-md:w-[3vw] max-md:max-w-[16px]" src="/images/ic-tri-dot.svg" alt="" />
                                    </figure>
                                    <p className="flex-1 md:text-[19px] [font-size:_clamp(10px,2.8vw,20px)] leading-snug">データをUSBや外付けハードディスクに移動する？</p>
                                </div>
                                <div className="flex gap-2">
                                    <figure>
                                        <img className="max-md:w-[3vw] max-md:max-w-[16px]" src="/images/ic-tri-dot.svg" alt="" />
                                    </figure>
                                    <p className="flex-1 md:text-[19px] [font-size:_clamp(10px,2.8vw,20px)] leading-snug">毎月のコストが増えるのは嫌だと思いながらもサブスク型のオンラインストレージを契約する？</p>
                                </div>
                            </div>
                        </div>
                        <figure>
                            <img src="/images/bg-tv.png" alt="" />
                        </figure>
                    </div>
                </div>
                <div className="flex items-center justify-center pl-5 relative">
                    <figure>
                        <img src="/images/boy.png" alt="" />
                    </figure>
                    <figure className="-ml-5 -mt-9 animate-[bounce_1s_0.3s_ease_infinite_alternate]">
                        <img src="/images/boy-txt-02.png" alt="" />
                    </figure>
                    <figure className="absolute right-[calc(50%+20px)] top-[-50px] animate-[bounce_1s_0.2s_ease_infinite_alternate]">
                        <img src="/images/boy-txt-01.png" alt="" />
                    </figure>
                </div>
                <div className="flex justify-center md:-mt-14 -mt-8 animate-[fadeInDown_2s_ease_infinite] ">
                    <img src="/images/arrow.svg" alt="" />
                </div>
            </div>
        </SectionWrap>
    );
  }