"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const Work = () => {
    const ref = useScrollAnimations();

    return (
        <section ref={ref} className="relative pt-[80px] md:pt-[130px] px-5">
            <div className="flex justify-center items-center gap-3">
                <figure><img className="max-md:w-10" src="/assets/images/ic-walk.svg" alt="" /></figure>
                <p className="md:text-[64px] text-[36px] text-white font-extrabold">働き方</p>
                <figure><img className="max-md:w-10" src="/assets/images/ic-walk.svg" alt="" /></figure>
            </div>
            <div className="w-full md:max-w-[1360px] max-w-[480px] mx-auto flex gap-10 md:mt-14 mt-8 max-md:flex-col items-start relative">
                <div className="sticky top-10 max-md:hidden md:flex-[0_0_210px] md:w-[210px]">
                    <div className=" bg-[#130701] border-[5px] border-white rounded-[30px] px-4 py-6 text-white font-extrabold md:space-y-[20px] space-y-4">
                        <div>
                            <p className="md:text-[24px] text-[18px] md:mb-6">必要なアイテム</p>
                            <div className="md:text-[18px] text-[14px] md:space-y-[30px] space-y-4">
                                <a href="#diver-wallet" className="group flex items-center gap-2">
                                    <figure className="duration-150 opacity-0 group-hover:opacity-100"><img src="/assets/images/ic-link.svg" alt="" /></figure>
                                    DIVER Wallet
                                </a>
                                <a href="#diver-knock" className="group flex items-center gap-2">
                                <figure className="duration-150 opacity-0 group-hover:opacity-100"><img src="/assets/images/ic-link.svg" alt="" /></figure>
                                    DIVER Knock
                                </a>
                            </div>
                        </div>
                        <div>
                            <p className="md:text-[24px] text-[18px] md:mb-6">FLOW</p>
                            <div className="md:text-[18px] text-[14px] md:space-y-[30px] space-y-4">
                                <a href="#diver-wallet" className="group flex items-center gap-2">
                                    <figure className="duration-150 opacity-0 group-hover:opacity-100"><img src="/assets/images/ic-link.svg" alt="" /></figure>
                                    NFT作成
                                </a>
                                <a href="#diver-knock" className="group flex items-center gap-2">
                                <figure className="duration-150 opacity-0 group-hover:opacity-100"><img src="/assets/images/ic-link.svg" alt="" /></figure>
                                    受注する
                                </a>
                                <a href="#diver-knock" className="group flex items-center gap-2">
                                <figure className="duration-150 opacity-0 group-hover:opacity-100"><img src="/assets/images/ic-link.svg" alt="" /></figure>
                                    仕事をする
                                </a>
                                <a href="#diver-knock" className="group flex items-center gap-2">
                                <figure className="duration-150 opacity-0 group-hover:opacity-100"><img src="/assets/images/ic-link.svg" alt="" /></figure>
                                    報酬
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <div className="md:space-y-20 space-y-10">
                        <div className="bg-[url('/assets/images/bg-diver.png')] rounded-[40px] border-[10px] border-[#191919] [box-shadow:0px_10px_0px_0px_#191919] bg-[#FFEADC] md:py-[50px] py-8 px-5">
                            <div className="flex items-center w-full max-w-[896px] mx-auto gap-7 max-lg:flex-col">
                                <figure>
                                    <img className="max-md:w-[230px]" src="/assets/images/img-diver-wallet.png" alt="" />
                                </figure>
                                <div className="flex-1 flex justify-end">
                                    <div className="w-full max-w-[520px] flex flex-col items-center justify-center">
                                        <h5 className="md:mb-6 mb-4"><img className="max-md:h-[30px] max-md:w-auto" src="/assets/images/logo-diver-wallet.png" alt="" /></h5>
                                        <p className="md:text-[18px] text-[15px] font-medium w-full  max-w-[457px] leading-loose md:mb-[30px] mb-5">
                                        DIVER Walletは中央集権的な管理者に依存せず、真に分散化された「個人を尊重する社会」の実現を目指すweb3プロジェクトDIVERの公式ウォレットです。
                                        </p>
                                        <div className="w-full max-w-[391px] flex justify-center items-center md:gap-10 gap-6 max-md:flex-col">
                                            <a href="https://apps.apple.com/jp/app/diver-wallet/id6444421722" target="_blank" rel="noopener noreferrer">
                                            <img src="/assets/images/btn-appstore.png" alt="" /></a>
                                            <a href="https://play.google.com/store/apps/details?id=com.hyerdesign.diver.wallet&hl=ln" target="_blank" rel="noopener noreferrer">
                                            <img src="/assets/images/btn-googleplay.png" alt="" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[url('/assets/images/bg-diver.png')] rounded-[40px] border-[10px] border-[#191919] [box-shadow:0px_10px_0px_0px_#191919] bg-[#FFEADC] md:py-[50px] py-8 px-5">
                            <div className="flex items-center w-full max-w-[896px] mx-auto gap-7 max-lg:flex-col">
                                <figure>
                                    <img className="max-md:w-[230px]" src="/assets/images/img-diver-knock.png" alt="" />
                                </figure>
                                <div className="flex-1 flex justify-end">
                                    <div className="w-full max-w-[520px] flex flex-col items-center justify-center">
                                        <h5 className="md:mb-6 mb-4"><img className="max-md:h-[30px] max-md:w-auto" src="/assets/images/logo-diver-knock.png" alt="" /></h5>
                                        <p className="md:text-[18px] text-[15px] font-medium w-full  max-w-[457px] leading-loose md:mb-[30px] mb-5">
                                        DIVER Knockは、最高レベルの安全性を備えた分散型メッセージアプリです。
                                        </p>
                                        <div className="w-full max-w-[391px] flex justify-center items-center md:gap-10 gap-6 max-md:flex-col">
                                            <a href="https://apps.apple.com/jp/app/diver-knock/id6450264436" target="_blank" rel="noopener noreferrer">
                                            <img src="/assets/images/btn-appstore.png" alt="" /></a>
                                            <a href="https://play.google.com/store/apps/details?id=com.bigant.diver.limited.talk.flutter_project&hl=en_US" target="_blank" rel="noopener noreferrer">
                                            <img src="/assets/images/btn-googleplay.png" alt="" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:mt-[140px] mt-[100px] flex flex-wrap gap-5 gap-y-16 justify-center">
                        <div className="w-full max-w-[355px] md:w-[355px] md:h-[470px] h-[380px] bg-[#FFEADC] border-[#3D2216] md:border-[10px] border-[6px] rounded-[40px] relative">
                            <div className="flex justify-center md:-mt-[60px] -mt-[53px]">
                                <div className="w-full md:max-w-[114px] max-w-[100px] md:h-[60px] h-[53px] flex justify-center items-end bg-[url('/assets/images/flow-number.png')] bg-cover md:text-[50px] text-[32px] font-extrabold leading-8">
                                    1
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center md:pt-8 pt-5 px-4">
                                <div className="w-[270px] flex flex-col items-center justify-center">
                                    <p className="text-center md:text-[24px] text-[18px] font-extrabold">NFT作成</p>
                                    <div className="pt-3">
                                        <img className="max-md:w-[140px]" src="/assets/images/img-flow-01.png" alt="" />
                                    </div>
                                    <p className="md:text-[18px] text-[15px] font-medium md:pt-6 pt-4">
                                        公式LINEへウォレットアドレスを連絡し、NFT作成しよう！
                                    </p>
                                    <a href="https://lin.ee/fMZCQsF" target="_blank" rel="noopener noreferrer" className="mt-3">
                                        <img src="/assets/images/btn-line.png" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full max-w-[355px] md:w-[355px] md:h-[470px] h-[380px] bg-[#FFEADC] border-[#3D2216] md:border-[10px] border-[6px] rounded-[40px] relative">
                            <div className="flex justify-center md:-mt-[60px] -mt-[53px]">
                                <div className="w-full md:max-w-[114px] max-w-[100px] md:h-[60px] h-[53px] flex justify-center items-end bg-[url('/assets/images/flow-number.png')] bg-cover md:text-[50px] text-[32px] font-extrabold leading-8">
                                2
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center md:pt-8 pt-5 px-4">
                                <div className="w-[270px] flex flex-col items-center justify-center">
                                    <p className="text-center md:text-[24px] text-[18px] font-extrabold">NFT作成</p>
                                    <div className="pt-3">
                                        <img className="max-md:w-[140px]" src="/assets/images/img-flow-02.png" alt="" />
                                    </div>
                                    <p className="md:text-[18px] text-[15px] font-medium md:pt-6 pt-4">
                                    NFTと連携したメッセージングアプリ「DIVER Knock」にバイトのオファーが届く！<br />いいと思ったら即受注しよう！
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full max-w-[355px] md:w-[355px] md:h-[470px] h-[380px] bg-[#FFEADC] border-[#3D2216] md:border-[10px] border-[6px] rounded-[40px] relative">
                            <div className="flex justify-center md:-mt-[60px] -mt-[53px]">
                                <div className="w-full md:max-w-[114px] max-w-[100px] md:h-[60px] h-[53px] flex justify-center items-end bg-[url('/assets/images/flow-number.png')] bg-cover md:text-[50px] text-[32px] font-extrabold leading-8">
                                    3
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center md:pt-8 pt-5 px-4">
                                <div className="w-[270px] flex flex-col items-center justify-center">
                                    <p className="text-center md:text-[24px] text-[18px] font-extrabold">NFT作成</p>
                                    <div className="pt-3">
                                        <img className="max-md:w-[140px]" src="/assets/images/img-flow-03.png" alt="" />
                                    </div>
                                    <p className="md:text-[18px] text-[15px] font-medium md:pt-6 pt-4">
                                    DIVER Knockに届いた指定の日時にバイトをしよう！
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Work;
