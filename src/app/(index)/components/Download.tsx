"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const Download = () => {

  const ref = useScrollAnimations();

  return (
    <section ref={ref} className="relative">
      <div className="js-deco absolute sm:top-[-260px] top-[-200px] right-0 z-10 max-sm:w-[240px]">
        <img className="js-deco-01 absolute top-[-50px] left-[-80px]" src="/assets/images/deco-01.png" alt="" />
        <img className="js-deco-02 absolute top-[-20px] left-[-40px]" src="/assets/images/deco-02.png" alt="" />
        <img className="js-deco-03 origin-right" src="/assets/images/deco-03.png" alt="" />
      </div>
      <div className="relative bg-[#FFE3F0] sm:pb-[380px] pb-[280px]">
        <div className="bg-[#FF7DB8]/[0.3] flex items-center justify-center p-4 relative z-20">
          <h3 className=""><img src="/assets/images/login-title.svg" alt="" /></h3>
        </div>
        <div className="sm:mt-24 mt-20 px-[15px]">
          <div className="flex justify-center items-center gap-5">
            <span><img className="max-sm:w-10" src="/assets/images/ic-line-title.png" alt="" /></span>
            <p className="sm:text-[40px] text-[24px] font-bold text-center leading-[1.2] tracking-widest pb-4">
              <span className="sm:text-[68px] text-[32px]">3</span>つのアイテムを<br />
              用意してね！
            </p>
            <span className="rotate-45"><img className="max-sm:w-10" src="/assets/images/ic-line-title.png" alt="" /></span>
          </div>
          <div className="mt-10 sm:mt-5 mb-10">
            <div className="flex justify-center items-center">
              <h5><img className="max-sm:w-[280px]" src="/assets/images/driver-title.png" alt="" /></h5>
            </div>
            <p className="text-center sm:text-[32px] text-[20px] font-medium sm:mt-9 mt-6">
              これがないと始まらない！<br />
              推しのコインを持ち運び、送り合える唯一の公式採用ウォレット
            </p>
          </div>
          <div className="h-[340px] bg-white flex flex-col items-center justify-center px-[15px] rounded-[30px]">
            <div className="flex justify-center items-center">
              <h5><img src="/assets/images/wallet-driver-title.png" alt="" /></h5>
            </div>
            <div className="flex items-center gap-4 mt-5 max-sm:flex-col justify-center">
              <a href="https://apps.apple.com/jp/app/diver-wallet-pro/id6739527739" target="_blank" rel="noopener noreferrer">
                <img className="max-sm:h-14" src="/assets/images/btn-apple.png" alt="" />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.bigant.diver.limited.wallet.pro" target="_blank" rel="noopener noreferrer">
                <img className="max-sm:h-14" src="/assets/images/btn-google.png" alt="" />
              </a>
            </div>
          </div>
          <div className="sm:mt-28 mt-20 mb-10">
            <div className="flex justify-center items-center">
              <h5><img className="max-sm:w-[200px]" src="/assets/images/dwe-title.png" alt="" /></h5>
            </div>
            <p className="text-center sm:text-[32px] text-[20px] font-medium sm:mt-9 mt-6">
              推しのコインと<br />
              引き換えできるゲートコイン<br />
              推しとのつながりはここから始まる！
            </p>
          </div>
          <div className="h-[340px] bg-[url('/assets/images/coins.png')] bg-cover bg-center flex items-center justify-center p-5">
              <a href="https://www.open-fave.com/scs" target="_blank" rel="noopener noreferrer" className="relative flex border-white border-2 rounded-full items-center justify-center w-[500px] md:h-[120px] h-[100px] bg-[linear-gradient(59deg,_#FFB2B8_8.73%,_#FF7DB8_19.75%,_#FA75BC_22.9%,_#ED62C7_27.62%,_#D842D9_33.13%,_#BB15F2_38.63%,_#AD00FF_41.78%,_#A711FE_48.86%,_#A41BFE_55.16%,_#9A35FC_57.52%,_#8C5DFB_62.24%,_#817EF9_66.96%,_#7897F8_71.69%,_#71A9F7_76.41%,_#6EB4F7_81.92%,_#6DB8F7_87.42%)] sm:text-[40px] text-[24px] leading-tight font-bold text-white">
                ETHとDWEを<br />
                引き換えよう
                <img src="/assets/images/arrow.svg" alt="" className="absolute right-5" />
              </a>
          </div>
           <div className="sm:mt-28 mt-20 mb-10">
            <div className="flex justify-center items-center">
              <h5><img className="max-sm:w-[200px]" src="/assets/images/eth-title.png" alt="" /></h5>
            </div>
            <p className="text-center sm:text-[32px] text-[20px] font-medium sm:mt-9 mt-6">
              DWEと引き換えができる暗号資産<br />
              イーサリアムと呼ばれています<br />
              暗号資産取引所で調達してきてね！
            </p>
          </div>
          <div className="h-[340px] bg-white flex flex-col items-center justify-center px-[15px] rounded-[30px]">
            <div className="flex justify-center items-center mb-5">
              <h5 className="sm:text-[36px] text-[20px] font-bold">主な暗号資産取引所</h5>
            </div>
            <ul className="sm:text-[28px] text-[20px] font-bold list-disc pl-6 underline space-y-3">
              <li><a href="https://coincheck.com/ja/" target="_blank" rel="noopener noreferrer">Coincheck（コインチェック）</a></li>
              <li><a href="https://bitflyer.com/ja-jp/" target="_blank" rel="noopener noreferrer">bitFlyer（ビットフライヤー）</a></li>
              <li><a href="https://coin.z.com/jp/" target="_blank" rel="noopener noreferrer">GMOコイン</a></li>
              <li><a href="https://www.sbivc.co.jp/" target="_blank" rel="noopener noreferrer">SBI VCトレード</a></li>
            </ul>
          </div>
        </div>
        
      <div className="js-deco absolute max-sm:w-[200px] sm:bottom-20 bottom-16 left-0">
        <img className="js-deco-01 absolute top-[50px] right-[-150px]" src="/assets/images/footer-deco-01.png" alt="" />
        <img className="js-deco-02 absolute top-[80px] right-[-100px]" src="/assets/images/footer-deco-02.png" alt="" />
        <img className="js-deco-03 origin-left" src="/assets/images/footer-deco-03.png" alt="" />
      </div>
      </div>
    </section>
  );
};

export default Download;
