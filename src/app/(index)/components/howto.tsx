"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const Howto = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative md:mt-[140px] mt-24 px-5">
      <div className="w-full">
        <h4 className="fade-up flex justify-center">
            <img className="animate-[anim-bounce_2s_infinite_ease-in-out]" src="/assets/images/box-title.png" alt="" />
        </h4>
        <div className="bg-white [box-shadow:0px_4px_100px_0px_rgba(0,_0,_0,_0.10)] w-full max-w-[1140px] mx-auto mt-10 md:mt-[64px] p-5 md:pb-10">
            <h5 className="fade-up text-center md:text-[64px] text-[32px] font-black">使い方</h5>
            <div className="fade-up grid md:grid-cols-2 md:gap-y-20 gap-y-10  md:mt-7 mt-4">
                <div className="lg:px-[55px] px-5 flex flex-col items-center ">
                    <div className="w-full max-w-[350px] bg-[#FFE746] rounded-[70px] flex items-center">
                        <img className="max-md:w-12 my-[-4px]" src="/assets/images/ic-01.svg" alt="" />
                        <span className="md:text-[24px] text-[18px] font-black leading-none flex-1 pl-2 md:pl-4">アプリをダウンロード</span>
                    </div>
                    <div className="flex justify-center md:mt-10 mt-6">
                        <img src="/assets/images/howto-01.png" alt="" />
                    </div>
                    <div className="flex md:gap-10 gap-5 md:mt-6 mt-4">
                        <a href="https://play.google.com/store/apps/details?id=io.metamask&hl=ja" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/images/btn-google.png" alt="" /></a>
                        <a href="https://apps.apple.com/jp/app/metamask-blockchain-wallet/id1438144202" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/images/btn-apple.png" alt="" /></a>
                    </div>
                </div>
                <div className="lg:px-[55px] px-5 flex flex-col items-center md:border-l border-black">
                    <div className="w-full max-w-[350px] bg-[#FFE746] rounded-[70px] flex items-center">
                        <img className="max-md:w-12 my-[-4px]" src="/assets/images/ic-02.svg" alt="" />
                        <span className="md:text-[24px] text-[18px] font-black leading-none flex-1 pl-2 md:pl-4">ウォレット新規作成</span>
                    </div>
                    <div className="flex justify-center md:mt-10 mt-6">
                        <img src="/assets/images/howto-02.png" alt="" />
                    </div>
                    <div className="flex md:gap-10 gap-5 md:mt-6 mt-4 md:text-[16px] text-[13px] w-full max-w-[322px] mx-auto">
                    METAMASKの「新規ウォレットを作成」から、ウォレットを作成してください
                    </div>
                </div>
                <div className="lg:px-[55px] px-5 flex flex-col items-center ">
                    <div className="w-full max-w-[350px] bg-[#FFE746] rounded-[70px] flex items-center">
                        <img className="max-md:w-12 my-[-4px]" src="/assets/images/ic-03.svg" alt="" />
                        <span className="md:text-[24px] text-[17px] font-black leading-none flex-1 pl-2 md:pl-2">レシート提出<span className="md:text-[18px] text-[13px]">(アップロード)</span></span>
                    </div>
                    <div className="flex justify-center md:mt-10 mt-6">
                        <img src="/assets/images/howto-03.png" alt="" />
                    </div>
                    <div className=" md:gap-10 gap-5 md:mt-6 mt-4 md:text-[16px] text-[13px] w-full max-w-[322px] mx-auto">
                    <a href="https://lin.ee/xxmM4oe" target="_blank" className="text-[#07C655] border-b border-[#07C655] hover:opacity-75 duration-150">
                    <svg className="inline" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.125 6.95C1.125 10.2358 4.2589 12.9 8.125 12.9C8.60567 12.8995 9.07233 12.8599 9.525 12.781V15C10.694 13.8555 12.675 11.85 13.9042 10.3079C14.6742 9.3524 15.125 8.196 15.125 6.95C15.125 3.6642 11.9911 1 8.125 1C4.2589 1 1.125 3.6642 1.125 6.95Z" stroke="#07C655" stroke-linecap="round" strokeLinejoin="round"/>
                    <path d="M3.92505 5.54932V8.34932H4.62505M6.02505 5.54932V8.34932M7.49505 8.34932V5.54932L9.17505 8.34932V5.54932M11.9751 5.54932H10.6451V6.94932M10.6451 6.94932V8.34932H11.9751M10.6451 6.94932H11.6531" stroke="#07C655" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg> LINE
</a>からウォレットアドレスとレシート(領収書)の写真をアップロード
                    </div>
                </div>
                <div className="lg:px-[55px] px-5 flex flex-col items-center md:border-l border-black">
                    <div className="w-full max-w-[350px] bg-[#FFE746] rounded-[70px] flex items-center">
                        <img className="max-md:w-12 my-[-4px]" src="/assets/images/ic-04.svg" alt="" />
                        <span className="md:text-[24px] text-[18px] font-black leading-none flex-1 pl-2 md:pl-4">デジタル資産の受取り</span>
                    </div>
                    <div className="md:mt-10 mt-7 flex justify-center">
                        <div className="relative">
                            <img src="/assets/images/qr-img.png" alt="" />
                            <img className="w-[56.15%] absolute top-0 right-0 animate-[anim-bounce_1.6s_infinite_ease-in-out]" src="/assets/images/qr-bubble.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Howto;
