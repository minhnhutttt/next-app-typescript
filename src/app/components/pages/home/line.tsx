
export default function Line() {
    return (
      <section className="relative px-4">
          <div className="w-full max-w-[730px] mx-auto">
            <div className="flex max-md:flex-col bg-[#00B900] rounded-[20px] py-5 md:px-10 px-8">
                <div className="md:w-[255px] md:py-8">
                    <figure className="flex justify-center">
                        <img src="/images/girl.png" alt="" />
                    </figure>
                    <p className="font-dela md:text-[32px] text-[20px] text-white text-center mt-4">
                        サポート専用 <br />
                        LINEのご案内
                    </p>
                </div>
                <div className="w-full max-md:h-px md:w-px my-5 md:mx-[50px] bg-white"></div>
                <div className="md:w-[295px] font-bold md:text-[18px] text-[14px] text-white flex items-center">
                証明書のデジタル化には取り組みたいけど不明点があったり、質問や相談をしながら進めたい場合はサポート専用LINEをご利用ください！
                </div>
            </div>
            <div className="flex justify-center md:my-7 my-6">
                <img src="/images/line-deco.png" alt="" />
            </div>
            <div className="rounded-[30px] overflow-hidden border border-[#00B900]">
                <p className="bg-[#00B900] md:px-10 px-5 text-white md:text-[18px] text-[14px] flex items-center md:py-4">
                    LINEなら気軽にやりとりができるので、スピーディーに話が進みます。 <br />
                    メールのように堅苦しい文章は不要です。自由にメッセージを送ってください！
                </p>
                <div className="bg-white md:px-[35px] px-5 pt-5 pb-7">
                    <p className="flex items-center justify-center md:text-[18px] text-[14px] font-bold border-b border-[#CFCFCF] pb-3">
                        <img src="/images/ic-1.svg" alt="" />
                        <span>ココがポイント!</span>
                    </p>
                    <p className="md:text-[16px] text-[13px] font-medium py-[14px] px-3">
                    誰しも新しいことを始めるにはエネルギーと根気が必要です。エネルギーを生み出し、根気を絶やさない一番の秘訣は、誰かと一緒に取り組むことです。私たちがお客様の伴走者となり、サポートし続けます。証明書のデジタル化をともに成功させましょう！
                    </p>
                </div>
            </div>
          </div>
          <div className="flex items-center justify-center overflow-hidden mt-10 md:mt-8">
            <a href="#_" className="px-6 md:px-[70px] h-[60px] md:h-[92px] flex items-center justify-center bg-[#00B900] text-white rounded-[10px] md:text-[22px] text-[14px] font-bold tracking-widest group overflow-hidden relative">
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#164C1E] rounded-full group-hover:w-[500px] group-hover:h-[500px]"></span>
                <p className="relative flex items-center gap-2">
                    <img className="max-md:w-3" src="/images/ic-line.png" alt="" />
                    <span>メッセージを送る</span>
                </p>
            </a>
        </div>
      </section>
    );
  }
  