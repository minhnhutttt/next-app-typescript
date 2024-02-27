"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
export default function Guide() {
    const animateRefs = useScrollAnimation("zoom");
    return (
        <section className="mt-16 md:mt-[80px]">
            <div className="w-full">
                <div ref={animateRefs} className="opacity-0 flex justify-center items-center relative z-10">
                    <h3 className="tracking-[0.25em] text-center">
                        <div className="md:-mb-[0.694vw] min-[1440px]:mb-[-20px]">
                            <img className="min-[1440px]:w-auto md:w-[29.167vw] w-[40vw]" src="/images/title-sub-guide.png" alt="たったこれだけ！" />
                        </div>
                        <span className="text-[7vw] min-[1440px]:text-[80px] font-black leading-none px-5 md:px-[11.806vw] min-[1440px]:px-[130px] whitespace-nowrap">RWA Tagの使い方</span>
                    </h3>
                </div>
                <div className="flex flex-wrap md:mt-20 mt-14">
                    <div className="relative md:w-1/2 w-full flex flex-col items-center bg-[#53A0D7] md:pt-[74px] px-5 md:pb-[57px] pb-8 pt-14">
                        <span className="absolute text-[#0055A3]/[0.5] md:text-[323px] text-[36vw] font-black bottom-0 right-0 tracking-tighter leading-[0.9] z-0">01</span>
                        <div className="w-full md:max-w-[360px] md:h-[249px] max-w-[300px] h-[190px] border-[3px] border-[#0055A3] rounded-[20px] bg-white relative pt-6 pb-5 md:pb-8 md:pt-10 flex justify-center items-center flex-col">
                            <div className="flex items-center justify-center aspect-[70/75] w-[60px] md:w-[70px] bg-[url('/images/bg-number.png')] bg-cover text-white md:text-[23px] text-[17px] font-black absolute -top-8 md:top-[-28px] left-4 md:left-6 pb-1">01</div>
                            <h5 className="md:text-[24px] text-[18px] font-black text-center">
                                DIVER Tagアプリ<br />をダウンロード
                            </h5>
                            <span className="md:py-5 py-3"><img src="/images/dots.png" alt="" /></span>
                            <p className="md:text-[18px] text-[14px] font-black">下記よりダウンロードし<br />て下さい。</p>
                        </div>
                        <div className="relative w-full max-w-[500px] mx-auto bg-[#E0F5FF] md:rounded-[40px] rounded-[24px] mt-8 md:mt-12 md:pb-9 pb-6 pt-2 px-5">
                            <div className="flex justify-center">
                                <img className="max-md:w-[110px]" src="/images/logo-diver-tag.png" alt="DIVER Tag" />
                            </div>
                            <div className="flex items-center justify-center gap-5 md:gap-7 md:mt-6 mt-4">
                                <a href="http://" target="_blank" rel="noopener noreferrer" className="duration-150 hover:opacity-75"><img className="max-md:w-[140px]" src="/images/btn-appstore.png" alt="App Store" /></a>
                                <a href="http://" target="_blank" rel="noopener noreferrer" className="duration-150 hover:opacity-75"><img className="max-md:w-[140px]" src="/images/btn-google-play.png" alt="Google Play" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="relative md:w-1/2 w-full flex flex-col items-center bg-[#F0F9FF] md:pt-[74px] px-5 md:pb-[57px] pb-8 pt-14">
                        <span className="absolute text-[#009FE3]/[0.4] md:text-[323px] text-[36vw] font-black bottom-0 right-0 tracking-tighter leading-[0.9] z-0">02</span>
                        <div className="w-full md:max-w-[360px] md:h-[249px] max-w-[300px] h-[190px] border-[3px] border-[#0055A3] rounded-[20px] bg-white relative pt-6 pb-5 md:pb-8 md:pt-10 flex justify-center items-center flex-col">
                            <div className="flex items-center justify-center aspect-[70/75] w-[60px] md:w-[70px] bg-[url('/images/bg-number.png')] bg-cover text-white md:text-[23px] text-[17px] font-black absolute -top-8 md:top-[-28px] left-4 md:left-6 pb-1">02</div>
                            <h5 className="md:text-[24px] text-[18px] font-black text-center">
                                NFTをセット
                            </h5>
                            <span className="md:py-5 py-3"><img src="/images/dots.png" alt="" /></span>
                            <p className="md:text-[18px] text-[14px] font-black">スマートフォンをRWA Tagに<br />密着させ画像を選択しNFTを<br />生成して下さい</p>
                        </div>
                        <div className="relative flex justify-center items-center mt-[5px]">
                            <img className="max-md:w-[240px]" src="/images/img-guide-02.png" alt="" />
                        </div>
                    </div>
                    <div className="relative md:w-1/2 w-full flex flex-col items-center bg-[#F0F9FF] md:pt-[74px] px-5 md:pb-[57px] pb-8 pt-14">
                        <span className="absolute text-[#009FE3]/[0.4] md:text-[323px] text-[36vw] font-black bottom-0 right-0 tracking-tighter leading-[0.9] z-0">03</span>
                        <div className="w-full md:max-w-[360px] md:h-[249px] max-w-[300px] h-[190px] border-[3px] border-[#0055A3] rounded-[20px] bg-white relative pt-6 pb-5 md:pb-8 md:pt-10 flex justify-center items-center flex-col">
                            <div className="flex items-center justify-center aspect-[70/75] w-[60px] md:w-[70px] bg-[url('/images/bg-number.png')] bg-cover text-white md:text-[23px] text-[17px] font-black absolute -top-8 md:top-[-28px] left-4 md:left-6 pb-1">03</div>
                            <h5 className="md:text-[24px] text-[18px] font-black text-center">
                                所有物に貼り付ける
                            </h5>
                            <span className="md:py-5 py-3"><img src="/images/dots.png" alt="" /></span>
                            <p className="md:text-[18px] text-[14px] font-black">RWA Tagはシールになってい<br />るため、私物にピタっ！と貼<br />り付けることができます。</p>
                        </div>
                        <div className="relative flex justify-center items-center mt-[5px]">
                            <img className="max-md:w-[240px]" src="/images/img-guide-03.png" alt="" />
                        </div>
                    </div>
                    <div className="relative md:w-1/2 w-full flex flex-col items-center bg-[#53A0D7] md:pt-[74px] px-5 md:pb-[57px] pb-8 pt-14">
                        <span className="absolute text-[#0055A3]/[0.5] lg:text-[200px] md:text-[140px] text-[28vw] font-black bottom-0 right-0 tracking-tighter leading-[0.9] z-0">Store</span>
                        <div className="w-full md:max-w-[360px] md:h-[249px] max-w-[300px] h-[190px] border-[3px] border-[#0055A3] rounded-[20px] bg-white relative pt-6 pb-5 md:pb-8 md:pt-10 flex justify-center items-center flex-col">
                            <div className="flex items-center justify-center aspect-[70/75] w-[60px] md:w-[70px] bg-[url('/images/bg-number.png')] bg-cover text-white md:text-[23px] text-[17px] font-black absolute -top-8 md:top-[-28px] left-4 md:left-6 pb-1">04</div>
                            <h5 className="md:text-[24px] text-[18px] font-black text-center">
                                シールのご購入はこちら
                            </h5>
                            <span className="md:py-5 py-3"><img src="/images/dots.png" alt="" /></span>
                            <p className="md:text-[18px] text-[14px] font-black">ご希望の枚数などお選びく<br />ださい。</p>
                        </div>
                        <div className="relative w-full max-w-[500px] mx-auto bg-[#E0F5FF] md:rounded-[40px] rounded-[24px] mt-8 md:mt-14 md:pb-7 pb-5 pt-8 px-5">
                            <div className="flex justify-center">
                                <p className="md:text-[24px] text-[18px] font-black">RWA Tagシール購入サイト</p>
                            </div>
                            <div className="flex items-center justify-center gap-5 md:gap-7 md:mt-9 mt-6">
                                <div className="w-full flex justify-center h-[80px] md:h-[98px]">
                                    <a href="/" target="_blank" className="w-full max-w-[280px] md:max-w-[330px] h-[74px] md:h-[92px] gap-4 relative rounded-[30px] md:text-[18px] text-[16px] font-black bg-white flex items-center justify-center hover:border-b border-[5px] hover:mt-[6px] border-[#0055A3] duration-200 [box-shadow:0px_6px_0px_0px_#0055A3]">
                                        <figure>
                                            <img className="max-md:w-[36px]" src="/images/ic-card.png" alt="" />
                                        </figure>
                                        <span>RWA Tagシールを購入</span>
                                    </a>
                                </div>
                            </div>
                            <div className="flex justify-center mt-4">
                                <p className="md:text-[14px] text-[12px] max-w-[414px]">
                                RWA Tagに格納可能なNFTは、DIVER Chainシステムを使用しています。これによりDIVER TagとRWA Tagは実質同じものです。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
