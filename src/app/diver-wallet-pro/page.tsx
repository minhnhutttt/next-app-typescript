'use client';

import { useLayoutEffect, useState } from 'react';

export default function AppRedirectPage() {
  const [platform, setPlatform] = useState<'ios' | 'android' | 'other'>('other');

  const IOS_URL = 'https://apps.apple.com/jp/app/diver-wallet-pro/id6739527739';
  const ANDROID_URL =
    'https://play.google.com/store/apps/details?id=com.bigant.diver.limited.wallet.pro';

  useLayoutEffect(() => {
    const ua = navigator.userAgent.toLowerCase();

    const isAndroid = /android/.test(ua);
    const isIOS =
      /iphone|ipad|ipod|ios/.test(ua) || (ua.includes('macintosh') && ua.includes('mobile'));

    if (isAndroid) {
      setPlatform('android');
      window.location.replace(ANDROID_URL);
    } else if (isIOS) {
      setPlatform('ios');
      window.location.replace(IOS_URL);
    } else {
      setPlatform('other');
    }
  }, []);

  if (platform === 'other') {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <p className="mt-10 flex items-center justify-center md:mt-20">
          <img src="/assets/images/diver-wallet-pro.png" alt="DIVER Wallet PRO" />
        </p>
        <div className="relative min-h-[600px] w-full bg-[#1A68B0] md:-mt-11 md:min-h-[474px]">
          <div className="mx-auto flex w-full max-w-[1440px] max-md:flex-col max-md:items-center max-md:justify-center">
            <span className="mix-blend-multiply">
              <img src="/assets/images/ic-diver.png" alt="" />
            </span>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h5 className="flex items-center justify-center gap-2">
                <span className="text-[28px] font-bold md:text-[48px]">DIVER Wallet</span>
                <span className="rounded-tl-[20px] rounded-br-[20px] border border-white px-2.5 text-[24px] leading-[1.2] md:text-[39px]">
                  PRO
                </span>
              </h5>
              <p className="text-center text-[16px] leading-[1.2] font-medium md:text-[20px]">
                (ダイバーウォレットプロ)
              </p>
              <div className="mt-8 flex items-center justify-center gap-[30px] max-md:flex-col md:mt-8 md:gap-[60px]">
                <span>
                  <img src="/assets/images/logo-w-pro.png" alt="" />
                </span>
                <div className="flex flex-col gap-3">
                  <a
                    href="https://apps.apple.com/jp/app/diver-wallet-pro/id6739527739"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="max-md:w-[220px]"
                  >
                    <img src="/assets/images/btn-apple.png" alt="" />
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.bigant.diver.limited.wallet.pro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="max-md:w-[220px]"
                  >
                    <img src="/assets/images/btn-google.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <p>Redirecting…</p>
    </div>
  );
}
