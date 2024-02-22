export default function FV() {
    return (
        <div className="md:pb-[100px] pb-[60px] px-5 md:px-8">
            <div className="w-full md:max-w-[1400px] max-w-[640px] mx-auto max-md:flex max-md:flex-col-reverse">
                <div className="flex md:h-[110px] justify-center md:justify-end items-center gap-4 md:gap-5 max-md:flex-wrap max-md:mt-10">
                    <a href="http://" target="_blank" rel="noopener noreferrer" className="max-md:max-w-[40vw] max-lg:max-w-[160px]">
                        <img src="/images/btn-appstore.png" alt="App Store" />
                    </a>
                    <a href="http://" target="_blank" rel="noopener noreferrer" className="max-md:max-w-[40vw] max-lg:max-w-[160px]">
                        <img src="/images/btn-googleplay.png" alt="Google Play" />
                    </a>
                    <a href="http://" target="_blank" rel="noopener noreferrer" className="max-md:max-w-[40vw] max-lg:max-w-[160px]">
                        <img src="/images/btn-line.png" alt="お問い合わせ" />
                    </a>
                </div>
                <div className="mt-[140px] md:mt-8">
                    <div className="flex justify-center items-center">
                        <h1 className="max-md:w-4/5"><img src="/images/nft-link.png" alt="NFT LINK" /></h1>
                    </div>
                    <div className="flex max-md:flex-col md:gap-[6.111vw] min-[1440px]::gap-[88px] gap-10 mt-16 md:mt-[96px]">
                        <div className="min-[1440px]:w-auto md:w-[43.056vw]">
                            <img className="[box-shadow:0px_4px_30px_0px_rgba(56,_3,_10,_0.20)] md:rounded-[49px] rounded-[24px] " src="/images/image-fv.png" alt="気軽に手軽に NFT!" />
                        </div>
                        <div className="">
                            <h2 className="font-bold [font-size:_clamp(18px,9vw,40px)] md:text-[5.694vw] min-[1440px]:text-[82px] text-[#FF4500] text-center leading-[1.6]">
                                <span className="min-[1440px]:text-[130px] md:text-[9.028vw] [font-size:_clamp(24px,14vw,60px)] leading-[1.1]">NFT</span>を <br />
                                今すぐ・誰でも <br />
                                簡単受け取り！
                            </h2>
                            <div className="flex justify-end mt-6 md:mt-12 pr-1.5">
                                <img className="w-[50vw] min-[1440px]:w-auto md:w-[22.569vw] [box-shadow:0px_4px_30px_0px_rgba(56,_3,_10,_0.20)] md:rounded-[49px] rounded-[24px] " src="/images/image-fv-men.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  