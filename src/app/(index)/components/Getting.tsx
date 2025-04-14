"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";
import Button from "@/components/button";

const Getting = () => {
  const ref = useScrollAnimations();
  return (
    <section id="getting-started" ref={ref} className="relative overflow-hidden md:pt-[100px] pt-16 px-5 bg-[url('/assets/images/bg-02.png')] bg-no-repeat bg-center md:pb-[100px] pb-16">
        <h3 className="md:text-[36px] text-[20px] text-center font-bold">簡単4ステップで始めよう！</h3>
        <div className="grid grid-cols-2 gap-5 md:mt-10 mb-4 md:mb-5 mt-8">
          <div className="fade-up"><img src="/assets/images/step-01.png" alt="DIVER Wallet Proをダウンロード" /></div>
          <div className="fade-up"><img src="/assets/images/step-02.png" alt="open-fave.comへアクセス" /></div>
          <div className="fade-up"><img src="/assets/images/step-03.png" alt="好きなNFTをタップ" /></div>
          <div className="fade-up"><img src="/assets/images/step-04.png" alt="NFTをゲット" /></div>
        </div>
        <div className="bg-[linear-gradient(180deg,_rgba(236,157,188,1)_0%,_rgba(147,131,185,1)_48%,_rgba(126,202,240,1)_100%)] p-[3px] rounded-[24px] flex items-center justify-center flex-col overflow-hidden">
          <div className="bg-white p-5 w-full rounded-[20px] md:pb-10">
            <div className="flex items-center justify-center md:pt-8 pt-4">
              <img className="max-md:w-[200px]" src="/assets/images/logo-w.png" alt="DIVER Wallet Proをダウンロード" />
            </div>
            <p className="text-center md:text-[28px] text-[18px] font-medium md:mt-7 mt-4">DIVER Wallet Proをダウンロード</p>
            <div className="flex gap-5 md:mt-11 mt-7">
              <a href="https://apps.apple.com/jp/app/diver-wallet-pro/id6739527739" target="_blank" rel="noopener noreferrer" className=""><img src="/assets/images/btn-appstore.png" alt="" /></a>
              <a href="https://play.google.com/store/apps/details?id=com.bigant.diver.limited.wallet.pro&hl=ja"  target="_blank" rel="noopener noreferrer" className=""><img src="/assets/images/btn-google.png" alt="" /></a>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Getting;
