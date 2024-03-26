import SectionWrap from "../common/sectionWrap";

export default function SectionError() {
    return (
        <SectionWrap anchor="error" number="1" title="ERROR" content={<>容量ストレス蓄積中<br />容量の悩みは尽きない...</>}>
            <div className="w-full md:pt-12 pt-8 px-5 md:pb-[50px] pb-20">
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
                    <figure className="md:-ml-5 mt-5 md:-mt-9 animate-[bounce_1s_0.3s_ease_infinite_alternate]">
                        <img src="/images/boy-txt-02.png" alt="" />
                    </figure>
                    <figure className="absolute md:right-[calc(50%+20px)] right-[calc(50%-40px)] md:top-[-50px] top-[-55px] animate-[bounce_1s_0.2s_ease_infinite_alternate]">
                        <img src="/images/boy-txt-01.png" alt="" />
                    </figure>
                </div>
                <div className="flex justify-center md:-mt-14 mt-4 animate-[fadeInDown_2s_ease_infinite] mb-4 md:mb-5">
                    <img className="max-md:w-10" src="/images/arrow.svg" alt="" />
                </div>
                <p className="text-center md:text-[28px] text-[16px] font-bold underline [text-decoration-thickness:2px] [text-decoration-style:wavy] [text-decoration-color:#FDD300]">今の世界、生きるだけで無限にデータは増え続けます。</p>
                <p className="text-center md:text-[24px] text-[14px] font-medium mt-3 md:mt-4 leading-[1.8]">
                    尽きることのない容量の悩み<br />
                    自動で貯まる容量ストレス<br />
                    <span className="font-bold">『貯まるのはお金だけにしてクレーーーっ！』</span><br />
                    と叫びたくなりますね。
                </p>
                <div className="w-full max-w-[548px] mx-auto md:border-[11px] border-[5px] border-black md:rounded-[40px] rounded-[28px] mt-3 md:px-7 px-4 py-4 md:py-5">
                    <p className="text-center font-zen font-black md:text-[48px] text-[28px]">もしも</p>
                    <div className="md:mt-3 mt-2 md:space-y-3.5 space-y-2.5">
                        <div className="flex gap-3 items-center">
                            <figure>
                                <img className="max-md:w-5" src="/images/ic-check.svg" alt="" />
                            </figure>
                            <p className="flex-1 md:text-[18px] text-[14px] font-medium">容量を一切気にすることなく過ごせたら...</p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <figure>
                                <img className="max-md:w-5" src="/images/ic-check.svg" alt="" />
                            </figure>
                            <p className="flex-1 md:text-[18px] text-[14px] font-medium">紛失や漏洩の心配無用でデータを保存できたら...</p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <figure>
                                <img className="max-md:w-5" src="/images/ic-check.svg" alt="" />
                            </figure>
                            <p className="flex-1 md:text-[18px] text-[14px] font-medium">月々の支払いを最低限に抑えられたら...</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-4 animate-[fadeInDown_2s_ease_infinite] mb-4 md:mb-5">
                    <img className="max-md:w-10" src="/images/arrow.svg" alt="" />
                </div>
                <div className="md:px-3">
                    <div className="relative">
                        <div className="w-full max-w-[630px] mx-auto md:border-[10px] border-[5px] border-[#FDD300] md:rounded-[40px] rounded-[28px] [box-shadow:0px_4px_30px_rgba(0,_0,_0,_0.10)] bg-[url('/images/bg-magic.jpg')] bg-cover bg-center py-7 md:py-9 px-5 md:px-6">
                            <p className="text-center font-black text-[18px] md:text-[28px] tracking-widest [text-shadow:2px_2px_0px_#FDD300] bg-[url('/images/border-magic.png')] bg-no-repeat bg-bottom pb-3">そんな希望を魔法のように叶えるのが</p>
                            <p data-scroll="out" className="md:text-[24px] text-[14px] font-bold text-center tracking-widest leading-loose my-3 md:my-4">
                                <span className="text--plitting">
                                <span className="text--fading" data-splitting="">生きづらさの種の一つとして <br />
                                存在感を増す「容量」がもたらす <br />
                                問題をまるごと解消に導く</span>
                                </span>
                            </p>
                            <p className="flex justify-center mt-6"><img src="/images/next-generation-storage-text.png" alt="" /></p>
                        </div>
                        <figure className="absolute min-[1440px]:w-[180px] md:w-[12.5vw] w-[100px] md:-bottom-5 -bottom-16 md:right-0 -right-3">
                            <img src="/images/img-two.png" alt="" />
                        </figure>
                    </div>
                </div>
            </div>
        </SectionWrap>
    );
  }