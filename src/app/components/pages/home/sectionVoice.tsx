import SectionWrap from "../common/sectionWrap";

export default function SectionVoice() {
    return (
        <SectionWrap anchor="voice" number="5" title="USER VOICE" content={<>出会いは必然デスティニー<br />きっかけは断捨離!?納得の理由</>}>
            <div className="w-full md:pt-16 pt-8 md:pb-[90px] pb-16  px-5">
                <div className="text-center md:text-[32px] text-[20px] font-bold">
                    <span className="bg-[linear-gradient(_to_bottom,_transparent,_transparent_70%,_#FDD300_70%,_#FDD300_90%,_transparent_90%_)]">
                        サブスクに埋もれて、かさむ月の支払い。<br className="max-md:hidden" />何が大切か見失っていたある日、断捨離を決意！
                    </span>
                </div>
                <div className="w-full max-w-[1320px] mx-auto md:mt-[70px] mt-16">
                    <div className="relative w-full max-w-[800px] mx-auto">
                        <div className="absolute top-[-30px] md:left-[calc(50%-25px)] left-1/2 max-md:w-[45%] animate-[bounce_1s_0.3s_ease_infinite_alternate]">
                            <img src="/images/bubble-voice.png" alt="" />
                        </div>
                        <figure>
                            <img src="/images/user-image.png" alt="" />
                        </figure>
                    </div>
                </div>
            </div>
        </SectionWrap>
    );
  }