
const Purpose = () => {
    return (
      <section className="overflow-hidden md:pt-[106px] pt-[60px] px-5">
        <div className="w-full max-w-[1030px] mx-auto">
            <div className="flex justify-center">
                <h4 className="flex items-center justify-center w-full max-w-[956px] h-[100px] bg-[url('/assets/images/bg-purpose.png')] bg-center bg-cover text-white md:text-[32px] text-[18px] font-bold text-center md:tracking-[0.2em]">
                メモリアルモニター募集の目的
                </h4>
            </div>
            <div className="flex items-center justify-center max-md:flex-col">
                <div className="lg:size-[424px] md:size-[330px] size-[300px] bg-[url('/assets/images/bg-circle-01.png')] bg-cover bg-center flex items-center justify-center lg:text-[22px] md:text-[17px] font-bold leading-loose animate-[floating-x_6.2s_ease-in-out_infinite_alternate-reverse]">
                    <p className="animate-[floating-y_2.8s_ease-in-out_infinite_alternate-reverse]">今回の特別なご縁への<br />感謝の気持ちを示す</p>
                </div>
                <div className="lg:size-[531px] md:size-[430px] size-[380px] bg-[url('/assets/images/bg-circle-02.png')] bg-cover bg-center flex items-center justify-center lg:text-[22px] md:text-[17px] font-bold leading-loose md:ml-[-20px] animate-[floating-x_7.2s_ease-in-out_infinite_alternate-reverse]">
                <p className="animate-[floating-y_1.8s_ease-in-out_infinite_alternate-reverse]">今後の「メタでペット供養」を一層 <br />
                    あなた様に寄り添ったサービスへと <br />
                    改善していく
                    </p>
                </div>
            </div>
            <div className="p-[3px] gradient-02 relative">
                <span className="absolute top-0 left-0"><img src="/assets/images/purpose-tri.png" alt="" /></span>
                <div className="bg-white md:px-[58px] px-[20px] md:pt-[66px] pt-[32px] pb-[32px]">
                    <p className="md:text-[20px] text-[16px] font-medium">
                    このふたつの目的を果たすために、今回だけの割引クーポンとプレゼントがセットになったメモリアルモニターを、期間限定&人数限定で募集いたします。
                    </p>
                    <div className="flex justify-center py-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" viewBox="0 0 20 30" fill="none">
                            <path opacity="0.6" fillRule="evenodd" clipRule="evenodd" d="M-0.000244141 -8.74228e-07L9.99976 8.01196L19.9998 0L19.9998 7.41405L9.99976 15.426L-0.000244465 7.41405L-0.000244141 -8.74228e-07Z" fill="#1B0220"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M-0.000244141 14.4019L9.99976 22.4138L19.9998 14.4019L19.9998 21.8159L9.99976 29.8279L-0.000244465 21.8159L-0.000244141 14.4019Z" fill="#1B0220"/>
                        </svg>
                    </div>
                    <p className="text-gradient-03 md:text-[32px] text-[20px] font-medium">
                    これはペットとの絆をデジタルの世界で育むことに真剣に向き合うあなた様のための、特別なプログラムです
                    </p>
                </div>
                <span className="absolute bottom-0 right-0 rotate-180"><img src="/assets/images/purpose-tri.png" alt="" /></span>
            </div>
        </div>
      </section>
    );
  };
  
  export default Purpose;
  