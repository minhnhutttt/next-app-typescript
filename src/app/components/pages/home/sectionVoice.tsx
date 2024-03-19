import SectionWrap from "../common/sectionWrap";

export default function SectionVoice() {
    return (
        <SectionWrap anchor="voice" number="5" title="USER VOICE" content={<>出会いは必然デスティニー<br />きっかけは断捨離!?納得の理由</>}>
            <div className="w-full md:pt-16 pt-8 md:pb-[96px] pb-16  px-5">
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
                    <div className="flex max-md:flex-col-reverse max-md:items-center md:px-10 pt-9">
                        <div className="md:bg-[url('/images/bg-voice.png')] bg-cover bg-no-repeat bg-right-bottom p-5 max-w-[621px] w-full [filter:drop-shadow(0px_4px_20px_rgba(0,_0,_0,_0.10))] md:pr-[150px] max-md:border-b-4 max-md:border-r-4 max-md:border-[#FDD300] max-md:bg-white max-md:pt-14">
                            <p className="md:text-[16px] text-[13px] tracking-[0.1em] leading-snug">
                                順調にサブスクの解約を進めている時、<span className="underline">解約ボタンの手が止まった</span>ものがありました。それが「<span className="underline">ストレージのサブスク</span>」です。<br /><br />中には整理されていないけど楽しかった思い出や大事なファイルたちが私を見つめてきました。<span className="underline">消す勇気もなく気が引けたから、移管するための新しいアプローチを探したん</span>です。<br /><br />そこで出会ったのが次世代ストレージさんです。シンプルで本質を大切にするその特徴は、まさに私が求めていたものでした。<br /><br /><span className="underline">消したくない写真や動画を選んで移行した後、デジタル空間だけでなく心にもスペースができたような</span>感覚がありました。
                            </p>
                        </div>
                        <figure className="md:ml-[-120px] max-md:-mb-10 md:mt-5 relative drop-shadow-[0px_4px_30px_rgba(0,_0,_0,_0.10)]">
                            <img src="/images/voice-01.png" alt="" />
                        </figure>
                    </div>
                    <div className="flex max-md:flex-col justify-end max-md:items-center md:px-10 pt-4">
                        <figure className="md:mr-[-110px] z-10 max-md:-mb-10 md:mt-3 relative  drop-shadow-[0px_4px_30px_rgba(0,_0,_0,_0.10)]">
                            <img src="/images/voice-02.png" alt="" />
                        </figure>
                        <div className="md:bg-[url('/images/bg-voice-02.png')] bg-cover bg-no-repeat bg-left-bottom p-5 md:pb-8 max-w-[621px] w-full [filter:drop-shadow(0px_4px_20px_rgba(0,_0,_0,_0.10))] md:pl-[150px] max-md:border-b-4 max-md:border-l-4 max-md:border-[#FDD300] max-md:bg-white max-md:pt-14">
                            <p className="md:text-[16px] text-[13px] tracking-[0.1em] leading-snug">
                            断捨離」って「断つ」「捨てる」「離れる」って書くじゃないですか。でも<span className="underline">捨てたくないものだってあります</span>よね。<br /><br />次世代ストレージさんとの出会いは、<span className="underline">断捨離を進めることも、やめることもできなくなっていた当時の私を見事に救ってくれました。</span><br /><br />最初に買ったのは100GBですが、思い出はプライスレスですよね。消すくらいなら、残しておきたいので将来も見据えて最近500GBも買っちゃいました。<br /><br /><span className="underline">サブスクだと500GBなんて買わないけど、買い切りなのでムダがないですよね！</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="relative md:mt-[70px] mt-[50px]">
                    <div className="absolute flex justify-center inset-x-0">
                        <img src="/images/digital-life.png" alt="DIGITAL LIFE" />
                    </div>
                    <div className="flex justify-center items-center gap-5 w-full max-w-[568px] mx-auto pt-4">
                        <figure>
                            <img src="/images/girl.png" alt="" />
                        </figure>
                        <p className="font-medium md:text-[18px] text-[14px] w-[351px]">あなたも離れられないサブスク契約を見直して、もっとシンプルなデジタルライフを求めてみませんか？</p>
                    </div>
                </div>
            </div>
        </SectionWrap>
    );
  }