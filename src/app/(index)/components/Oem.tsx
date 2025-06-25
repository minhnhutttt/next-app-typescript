
const Oem = () => {
  return (
    <section className="bg-[url(/assets/images/oem-bg.png)] bg-top bg-cover md:pt-[387px] pt-[250px] md:pb-[260px] pb-[140px] px-5">
        <div className="w-full max-w-[1384px] mx-auto">
            <div className="flex flex-col items-center justify-center">
                <span><img data-scroll className="fade-up max-md:w-[100px]" src="/assets/images/ic.png" alt="" /></span>
                <h4 data-scroll className="fade-up lg:text-[96px] md:text-[50px] text-[32px] tracking-widest text-center font-black mt-5 md:mt-10 border-b border-black">
                    あなたのブランドで<br />メッセージがビジネスになる
                </h4>
            </div>
            <div className="flex w-full max-w-[1244px] mx-auto mt-20 md:mt-24 lg:mt-[170px] gap-10 lg:gap-[100px] max-md:flex-col">
                <span className="md:max-lg:w-1/2"><img src="/assets/images/contact.png" alt="" /></span>
                <div className="flex-1">
                    <div data-scroll className="fade-up md:text-[20px] text-[15px] font-medium md:space-y-12 space-y-7">
                        <p>
                            THE LETTERは、男性の本気の気持ちを「言葉の贈り物」として届ける、メッセージ特化型の体験設計システムです。
                        </p>
                        <p>
                            この独自のUX設計と演出を、あなたのブランドに合わせて「OEM / リブランディング」提供することが可能です。
                        </p>
                    </div>
                    <ul className="md:text-[24px] font-black text-[16px] md:space-y-5 space-y-4 mt-10 md:mt-16">
                        {['サイト名・ロゴ・ドメイン変更OK','オリジナルデザインテーマのカスタマイズ可','完全ノーコードで導入・運用もスムーズ'].map((item,index) => (
                            <li data-scroll className="fade-up flex items-center gap-4" key={index}>
                                <span><img src="/assets/images/ic_check.svg" alt="" /></span>
                                <span className="flex-1">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div data-scroll className="fade-up w-full max-w-[1056px] mx-auto bg-white border border-[#007606] rounded-[10px] md:p-10 p-7 md:text-[20px] text-[15px] md:mt-[105px] mt-16 font-black leading-loose">
                期間限定企業のキャンペーン、ECサイトの同梱演出、ブライダルの招待状、保護者向け育児情報、会社の自己啓発など、あらゆるブランドに「感情を届ける価値」を実装することできます。
            </div>
            <div className="flex justify-center items-center md:mt-[80px] mt-12">
                <a href="https://lin.ee/sQ5Hh6G" target="_blank" data-scroll className="fade-up flex items-center justify-center border-b border-black hover:opacity-75 duration-200">
                    <h4 className="xl:text-[200px] md:text-[120px] text-[50px] font-black tracking-[0.1em] leading-none pb-4 md:pb-10">CONTACT</h4>
                    <img className="max-md:w-[32px]" src="/assets/images/contact-arrow.png" alt="" />
                </a>
            </div>
        </div>
    </section>
  );
};

export default Oem;
