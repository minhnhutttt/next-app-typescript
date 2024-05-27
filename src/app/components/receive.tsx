"use client";

import Title from "@/components/title";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const Receive = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="md:mt-[155px] mt-20 px-5">
      <div className="w-full max-w-[1210px] mx-auto relative">
        <Title sub="Receive">
        デジタルをドキュメント受け取る準備
        </Title>
        <div className="flex flex-wrap justify-center md:gap-[35px] gap-6 my-8 md:my-16">
            <div className="fade-up w-full max-w-[380px] md:w-[380px] bg-white rounded-[20px] [box-shadow:0px_4px_34px_0px_rgba(0,_0,_0,_0.10)] md:py-10 py-6 px-5">
                <div className="w-full max-w-[300px] mx-auto md:pb-[27px] pb-5">
                    <figure className="flex justify-center items-center">
                        <img src="/assets/images/receive-01.png" alt="" />
                    </figure>
                    <h5 className="text-center md:text-[28px] text-[20px] font-semibold md:mt-8 mt-5">アプリをダウンロード</h5>
                    <p className="font-light text-[16px] md:mt-4 mt-3">DIVER Bizのアプリをスマートフォンへインストール</p>
                    <div className="flex flex-col items-center justify-center md:mt-10 mt-6 gap-4 md:gap-5">
                        <figure>
                            <img src="/assets/images/logo-diver-2.png" alt="" />
                        </figure>
                        <a href="http://" target="_blank" rel="noopener noreferrer" className="block duration-200 hover:opacity-75">
                            <img className="max-md:w-[180px]" src="/assets/images/btn-appstore.png" alt="" />
                        </a>
                        <a href="http://" target="_blank" rel="noopener noreferrer" className="block duration-200 hover:opacity-75">
                            <img className="max-md:w-[180px]" src="/assets/images/btn-googleplay.png" alt="" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="fade-up w-full max-w-[380px] md:w-[380px] bg-white rounded-[20px] [box-shadow:0px_4px_34px_0px_rgba(0,_0,_0,_0.10)] md:pt-10 pt-6 px-5">
                <div className="w-full max-w-[300px] mx-auto">
                    <figure className="flex justify-center items-center">
                        <img src="/assets/images/receive-02.png" alt="" />
                    </figure>
                    <h5 className="text-center md:text-[28px] text-[20px] font-semibold md:mt-8 mt-5">新規アカウント作成</h5>
                    <p className="font-light text-[16px] md:mt-4 mt-3">アプリで新規アカウントの作成を行ってください。</p>
                    <div className="flex flex-col items-center justify-center md:mt-10 mt-6 gap-4 md:gap-5">
                        <figure>
                            <img src="/assets/images/img-receive-02.png" alt="" />
                        </figure>
                    </div>
                </div>
            </div>
            <div className="fade-up w-full max-w-[380px] md:w-[380px] bg-white rounded-[20px] [box-shadow:0px_4px_34px_0px_rgba(0,_0,_0,_0.10)] md:py-10 py-6 px-5">
                <div className="w-full max-w-[300px] mx-auto md:pb-[27px] pb-5">
                    <figure className="flex justify-center items-center">
                        <img src="/assets/images/receive-03.png" alt="" />
                    </figure>
                    <h5 className="text-center md:text-[28px] text-[20px] font-semibold md:mt-8 mt-5">安心サポート</h5>
                    <p className="font-light text-[16px] md:mt-4 mt-3">ご不明点はお問い合わせよりご連絡ください。</p>
                    <div className="flex flex-col items-center justify-center mt-3 gap-4 md:gap-5">
                        <figure>
                            <img src="/assets/images/img-receive-03.png" alt="" />
                        </figure>
                        <a href="http://" target="_blank" rel="noopener noreferrer" className="block duration-200 hover:opacity-75">
                            <img className="max-md:w-[200px]" src="/assets/images/img-receive-line.png" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="fade-up w-full max-w-[1000px] mx-auto bg-[#F3F3F3] rounded-[30px] border border-[#0D0A8E] px-5 min-h-[428px] md:pt-[90px] pt-10 pb-10">
            <div className="w-full max-w-[896px] mx-auto flex gap-6 max-md:flex-col max-md:items-center md:gap-8">
                <figure>
                    <img className="max-md:w-[200px]" src="/assets/images/img-note.png" alt="" />
                </figure>
                <div className="max-w-[566px] w-full flex-1">
                    <p className="md:text-[24px] text-[20px] font-semibold border-b-2 border-[#0D0A8E]">ご注意ください <span className="md:text-[18px] text-[15px]">(法的に電子化できない契約書・書類)</span></p>
                    <ul className="list-disc md:text-[18px] text-[15px] font-light pt-4 space-y-1 pl-6 leading-loose">
                        <li>定期借地契約（借地借家法22条）	</li>
                        <li>定期建物賃貸借契約（借地借家法38条1項）		</li>
                        <li>投資信託契約の約款（投資信託及び投資法人に関する法律5条）</li>
                        <li>訪問販売、電話勧誘販売、連鎖販売、特定継続的役務提供、業務提供誘引販売取引における書面交付義務（特定商品取引法4条etc）	</li>
                    </ul>
                    <p className="text-center md:text-[16px] text-[13px] md:mt-5 mt-3">
                    ※ご不明点は、<a href="/" className="text-[#01B202] font-semibold border-b-2 border-[#01B202]">LINEよりお問い合わせ</a>ください。
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Receive;
