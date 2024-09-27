"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";


const Use = () => {
    const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative overflow-hidden pb-[40px] px-5 z-20">
        <div className="">
            <h3 className="fade-up text-center md:text-[50px] text-[36px] font-bold font-gothic">使い方</h3>
            <div className="flex flex-wrap justify-center w-full max-w-[1220px] mx-auto gap-8 md:gap-11 mt-12 md:mt-20 xl:mt-36 max-md:max-w-[380px]">
                <div className="fade-up relative w-full md:w-[373px] md:h-[490px] border-[5px] border-[#D6A545] bg-[#FFF4BD] rounded-[47px] bg-[url('/assets/images/bg-use.png')]">
                    <div className="flex justify-center -mt-5"><span className="size-[58px] bg-white rounded-full flex items-center justify-center border-2 border-black font-gothic font-extrabold text-[36px]">1</span></div>
                    <p className="text-center font-gothic md:text-[26px] text-[22px] mt-2">アプリを<br />ダウンロード</p>
                    <figure className="flex justify-center py-2.5">
                        <img className="max-md:w-[160px]" src="/assets/images/use-01.png" alt="" />
                    </figure>
                    <div className="md:mt-10 px-5 mt-8 pb-5">
                        <p className="text-center font-mplus font-medium text-[18px]">DIVER Walletをダウンロード</p>
                        <div className="flex justify-center gap-1 mt-2">
                            <a href="https://apps.apple.com/jp/app/diver-wallet/id6444421722" target="_blank" className=""><img src="/assets/images/btn-appstore.png" alt="" /></a>
                            <a href="https://play.google.com/store/apps/details?id=com.hyerdesign.diver.wallet&hl=ln" target="_blank" className=""><img src="/assets/images/btn-google.png" alt="" /></a>
                        </div>
                    </div>
                </div>
                <div className="fade-up relative w-full md:w-[373px] md:h-[490px] border-[5px] border-[#D6A545] bg-[#FFF4BD] rounded-[47px] bg-[url('/assets/images/bg-use.png')]">
                    <div className="flex justify-center -mt-5"><span className="size-[58px] bg-white rounded-full flex items-center justify-center border-2 border-black font-gothic font-extrabold text-[36px]">2</span></div>
                    <p className="text-center font-gothic md:text-[26px] text-[22px] mt-2">年間パスポートNFTを<br />受け取る</p>
                    <figure className="flex justify-center py-2.5">
                        <img className="max-md:w-[160px]" src="/assets/images/use-02.png" alt="" />
                    </figure>
                    <div className="md:mt-2 px-6 mt-3 pb-5">
                        <p className="font-mplus font-medium text-[18px]">公式LINEにDIVER Walletのアドレスを送って年間パスポートNFTを受け取る</p>
                    </div>
                </div>
                <div className="fade-up relative w-full md:w-[373px] md:h-[490px] border-[5px] border-[#D6A545] bg-[#FFF4BD] rounded-[47px] bg-[url('/assets/images/bg-use.png')]">
                    <div className="flex justify-center -mt-5"><span className="size-[58px] bg-white rounded-full flex items-center justify-center border-2 border-black font-gothic font-extrabold text-[36px]">3</span></div>
                    <p className="text-center font-gothic md:text-[26px] text-[22px] mt-4">クーポンを受け取る</p>
                    <figure className="flex justify-center py-4">
                        <img className="max-md:w-[200px]" src="/assets/images/use-03.png" alt="" />
                    </figure>
                    <div className="md:mt-3 px-5 mt-4 pb-5">
                        <p className="font-mplus font-medium text-[18px] mb-6">Champaign Questを開いて<br />
                        NFTクーポンがある場所まで移動する</p>
                        <a href="/" className="flex items-center justify-center h-[60px] max-w-[298px] w-full mx-auto bg-[#0D54D9] text-white md:text-[22px] text-[20px] font-bold rounded-[9px]">
                            Campaign Quest Mapへ
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Use;
