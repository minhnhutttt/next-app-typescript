"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const Work = () => {
    const ref = useScrollAnimations();

    return (
        <section ref={ref} className="relative overflow-hidden pt-[80px] md:pt-[130px] px-5">
            <div className="flex justify-center items-center gap-3">
                <figure><img className="max-md:w-10" src="/assets/images/ic-walk.svg" alt="" /></figure>
                <p className="md:text-[64px] text-[36px] text-white font-extrabold">働き方</p>
                <figure><img className="max-md:w-10" src="/assets/images/ic-walk.svg" alt="" /></figure>
            </div>
            <div className="w-full md:max-w-[1360px] max-w-[480px] mx-auto flex gap-[50px] md:mt-14 mt-8 max-md:flex-col relative">
                <div className="max-md:hidden md:flex-[0_0_210px] md:w-[210px] sticky top-px">
                    <div className=" bg-[#130701] border-[5px] border-white rounded-[30px] px-4 py-6 text-white font-extrabold">
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
                    </div>
                </div>
                <div className="">
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
                </div>
            </div>
        </section>
    );
};

export default Work;
