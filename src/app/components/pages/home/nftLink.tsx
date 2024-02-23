export default function NFTLink() {
    return (
        <div className="bg-[#F6FAFE]/80 px-5 md:px-8 pt-20 md:pt-[205px]">
            <div className="w-full max-w-[1320px] mx-auto">
                <div className="text-center relative mb-2.5 px-2.5 pb-6 md:pb-9 bg-[repeating-linear-gradient(-45deg,_transparent_0_6px,_#0055A3_6px_8px)] bg-no-repeat md:[background-size:100%_20px] [background-size:100%_12px] bg-bottom">
                    <p className="md:text-[24px] [font-size:_clamp(14px,4.8vw,18px)] tracking-widest">あっという間にもらえます！</p>
                    <h3 className="md:text-[62px] [font-size:_clamp(20px,7.5vw,32px)] font-bold tracking-[0.15em]">NFT Linkの獲得方法</h3>
                </div>
                <div className="bg-white [box-shadow:0px_4px_44px_0px_rgba(24,_83,_160,_0.15)] rounded-[20px] mt-14 md:mt-28 p-6 md:p-10">
                    <div className="w-full max-w-[1000px] mx-auto">
                        <h4 className="lg:text-[32px] md:text-[28px] [font-size:_clamp(18px,6.4vw,24px)] text-center text-[#1853A0] font-black border-b border-[#1853A0] pb-2">ダイバーウォレットを<br className="md:hidden" />インストールしよう！</h4>
                        <div className="flex md:justify-between justify-center max-md:items-center max-md:flex-col mt-10 pb-3 gap-6">
                            <div className=" max-md:mr-[-32px]">
                                <img className="[filter:drop-shadow(0px_4px_44px_rgba(24,_83,_160,_0.15))] max-md:w-[190px]" src="/images/ic-wallet.png" alt="" />
                            </div>
                            <div className="flex max-md:flex-wrap max-md:justify-center gap-5 lg:gap-[60px] px-2">
                                <div className="max-md:w-[220px]">
                                    <p className="text-center font-noto md:text-[28px] text-[18px] font-bold mb-4 md:mb-6">ios 版</p>
                                    <a href="/" target="_blank">
                                        <img src="/images/btn-appstore.png" alt="App Store" />
                                    </a>
                                </div>
                                <div className="max-md:w-[220px]">
                                    <p className="text-center font-noto md:text-[28px] text-[18px] font-bold mb-4 md:mb-6">Android 版</p>
                                    <a href="/" target="_blank">
                                        <img src="/images/btn-googleplay.png" alt="Google Play" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white [box-shadow:0px_4px_44px_0px_rgba(24,_83,_160,_0.15)] rounded-[20px] mt-14 md:mt-24 p-6 md:p-10">
                    <div className="w-full md:max-w-[846px] max-w-[400px] mx-auto flex justify-between pt-10 pb-16 md:pb-24 max-md:flex-col max-md:gap-10">
                        <div className="">
                            <div className="flex justify-center">
                                <p className="text-center font-noto md:text-[18px] text-[16px] font-bold border-b border-[#1853A0] md:px-8 pb-2 md:pb-3">①言語選択・新規アカウントの作成</p>
                            </div>
                            <div className="md:mt-6 mt-4 flex flex-col items-center">
                                <figure>
                                    <img className="max-md:max-h-[95vw]" src="/images/image-phone-01.png" alt="" />
                                </figure>
                                <div className="flex justify-center mt-3 md:mt-5">
                                    <p className="md:text-[16px] text-[13px] max-w-[350px]">
                                    日本語の場合は「日本語」をタップし、「新しいアカウントを作成する」をタップします。
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="max-md:w-auto max-lg:w-[32vw]">
                            <div className="flex justify-center">
                                <p className="text-center font-noto md:text-[18px] text-[16px] font-bold border-b border-[#1853A0] px-5 md:px-0 lg:px-8 pb-2 md:pb-3">②ウォレット名を入力する</p>
                            </div>
                            <div className="md:mt-6 mt-4 flex flex-col items-center">
                                <figure className="max-md:w-auto max-lg:w-[27.5vw]">
                                    <img className="max-md:max-h-[90vw]" src="/images/image-phone-02.png" alt="" />
                                </figure>
                                <div className="flex justify-center mt-3 md:mt-5">
                                    <p className="md:text-[16px] text-[13px] md:max-w-[280px]">
                                    １-20文字以内で、ウォレット名を入力してください。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white [box-shadow:0px_4px_44px_0px_rgba(24,_83,_160,_0.15)] rounded-[20px] mt-14 md:mt-24 p-6 md:p-10">
                    <div className="w-full md:max-w-[730px] max-w-[400px] mx-auto flex justify-between pt-10 pb-16 md:pb-24 max-md:flex-col max-md:gap-10">
                        <div className="">
                            <div className="flex justify-center">
                                <p className="text-center font-noto md:text-[18px] text-[16px] font-bold border-b border-[#1853A0] md:px-8 pb-2 md:pb-3">③復元フレーズをメモする</p>
                            </div>
                            <div className="md:mt-6 mt-4 flex flex-col items-center">
                            <figure className="max-md:w-auto max-lg:w-[27.5vw]">
                                    <img className="max-md:max-h-[90vw]" src="/images/image-phone-03.png" alt="" />
                                </figure>
                                <div className="flex justify-center mt-3 md:mt-5">
                                    <p className="md:text-[16px] text-[13px] md:max-w-[290px]">
                                    12個のフレーズと並び順を保管しておけば、万が一スマホを壊したり紛失したりしても別のスマホから続けられます。<br />※後からでも復元フレーズを確認してメモすることも可能です。
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="max-md:w-auto max-lg:w-[32vw]">
                            <div className="flex justify-center">
                                <p className="text-center font-noto md:text-[18px] text-[16px] font-bold border-b border-[#1853A0] px-5 md:px-0 lg:px-8 pb-2 md:pb-3">④設定完了</p>
                            </div>
                            <div className="md:mt-6 mt-4 flex flex-col items-center">
                                <figure className="max-md:w-auto max-lg:w-[27.5vw]">
                                    <img className="max-md:max-h-[90vw]" src="/images/image-phone-04.png" alt="" />
                                </figure>
                                <div className="flex justify-center mt-3 md:mt-5">
                                    <p className="md:text-[16px] text-[13px] md:max-w-[280px]">
                                    画像のように画面を確認することができれば完了です。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  