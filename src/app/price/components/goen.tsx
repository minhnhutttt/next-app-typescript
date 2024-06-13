"use client"
import useScrollAnimations from "@/hooks/useScrollAnimations";

  const Goen = () => {
    const ref = useScrollAnimations();
    return (
      <section ref={ref} className="overflow-hidden md:mt-[70px] mt-[50px] text-[#333]">
        <div className="bg-[url('/assets/images/goan-title.png')] bg-cover bg-top md:h-[521px] h-[300px] flex justify-center md:pt-[140px] pt-[80px]">
            <p className="fade-up text-center text-gradient-03 md:text-[36px] text-[22px] font-bold tracking-widest">
            <span className="[text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">ご縁があって <br />
                今このページを<br />
                ご覧いただいているあなた様へ
                </span>
            </p>
        </div>
        <div className="px-5 md:-mt-[70px] -mt-[40px]">
            <div className="fade-up w-full md:max-w-[1270px] max-w-[540px] mx-auto md:bg-[url('/assets/images/frame-goen.png')] bg-[url('/assets/images/frame-goen-sp.png')] bg-[length:100%_100%] md:pt-[80px] pt-12 px-6 md:pb-[130px] pb-20">
                <div className="fade-up flex items-center gap-7 w-full max-w-[1040px] mx-auto  max-md:flex-col">
                    <figure>
                        <img src="/assets/images/img-goen-01.png" alt="" />
                    </figure>
                    <div className="text-gradient-03 md:text-[18px] text-[14px] font-black leading-[2]">
                        <span className="[text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
                        メタバース内で、ペットとの再会を存分に味わう。<br />好きな時に会って、話して、散歩する。<br />AI僧侶と一緒に、ペットの冥福を祈る。<br />共通ペット霊園で、同じ境遇のペットオーナーやペットの存在を知る。<br />現実のKARIMATA(狩俣)供養所を訪れて、ペットを弔う。
                        </span>
                    </div>
                </div>
                <div className="w-full max-w-[1110px] mx-auto flex md:mt-20 mt-10 gap-10 max-md:flex-col-reverse max-md:items-center">
                    <div className="fade-up flex-1">
                        <p className="md:text-[20px] text-[16px] font-bold tracking-[0.2em]">
                            今は亡きペットとの絆を新たな形で深められる <br />
                            特別な体験が、あなた様を待っています。
                        </p>
                        <p className="md:text-[18px] text-[14px] font-medium md:pt-10 pt-7 leading-[1.8] tracking-[0.18em]">
                        私たちは、ペットオーナー様がペットとの絆を紡ぎなおし、<br />
                        <span className="bg-[linear-gradient(to_top,_#FFD84C_25%,_transparent_25%)]">さらに深められるサービスとして『メタでペット供養』を育んでいます。</span>
                        <br /><br />
                        あなた様がこれから体験する『メタでペット供養』を通じた供養体験は、<br />
                        <span className="bg-[linear-gradient(to_top,_#FFD84C_25%,_transparent_25%)]">サービス全体をより良いものしていくための、</span><br />
                        <span className="bg-[linear-gradient(to_top,_#FFD84C_25%,_transparent_25%)]">そしてあなた様の個別事情や要望をサービスに反映していくための、</span><br />
                        かけがえのない&quot;おもいで”となります。<br />
                        </p>
                        <p className="md:text-[32px] text-[20px] font-medium text-[#333] mt-10 leading-[1.7] tracking-[0.18em]">
                        『メタでペット供養』は、そんな未来の“おもいで”を糧にペットオーナー様とともに歩んで参りたいと考えています。
                        </p>
                    </div>
                    <figure className="fade-up max-md:w-auto max-lg:w-[30%]">
                        <img className="max-md:w-[300px]" src="/assets/images/img-goen-02.png" alt="" />
                    </figure>
                </div>
                <div className="fade-up md:mt-14 mt-10">
                    <p className="text-center md:text-[18px] text-[14px] font-bold leading-relaxed">メモリアルモニターとしての利用機会は、<br className="md:hidden" />サービスオープン間もない今だけの募集です。</p>
                    <div className="w-full max-w-[742px] mx-auto space-y-0.5 max-md:mt-1">
                        <span className="block h-px gradient-03"></span>
                        <span className="block h-px gradient-03"></span>
                    </div>
                    <p className="text-center text-gradient-03 md:text-[32px] text-[20px] font-bold mt-3">あなた様からのご応募を、<br className="md:hidden" />心よりお待ちしております。</p>
                </div>
            </div>
            <div className="fade-up flex justify-center items-center flex-col">
                <p className="md:text-[18px] text-[14px] font-black text-center [filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] tracking-[0.2em]">
                先着<span className="md:text-[33px] text-[22px]">50</span>名様<span className="md:text-[22px] text-[16px]">限定</span>
                </p>
                <figure>
                    <img src="/assets/images/line-title-02.png" alt="" />
                </figure>
                <a href="/" className="flex items-center justify-center md:w-[500px] w-[320px] h-20 md:h-[114px] gradient-03 [box-shadow:0px_0px_40px_0px_rgba(100,_0,_136,_0.20)] border border-white rounded-[70px] md:text-[22px] text-[17px] font-bold text-white gap-3 duration-150 hover:opacity-75">
                            <figure>
                                <img className="md:size-[73px] size-[50px]" src="/assets/images/ic-btn-01.png" alt="" />
                            </figure>
                            <span>
                            メモリアルモニター<br className="md:hidden" />に応募する
                            </span>
                        </a>
            </div>
        </div>
      </section>
    );
  };
  
  export default Goen;
  